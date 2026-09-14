__d(
  "AdsUEditorAdgroupSetMultiDestinationDataReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAdgroupConvertCtxAdgroupFromDynamicToStaticMutator",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsCTWAAutogenCatalogSelectionMutators",
    "AdsDynamicAdsUtils",
    "AdsGetStandardTemplateDefaultJSONWithDestination",
    "AdsMessengerVisualEditorLandingScreenType",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPlacementAPISpecReaderUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignSetUnifiedCreationDataActionFlux",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "CallPromptFeatureGating",
    "ClickToMessageCTMAdoptionFeatureGating",
    "ClickToMessageLeadGenFeatureGating",
    "ClickToWhatsAppFeatureGating",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "gkx",
    "logCTXAutomatedChatEvent",
    "maybeDefaultCallPromptInStartConversationsTemplate",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            account: r("adsUEditorAccountSelector"),
            getPage: r("AdsPageStore").getSelector,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.getPage,
              l = n.parentData,
              s = t.destinationType;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var u,
                  c,
                  d = t.previousAdObjects,
                  m = l.get(n),
                  p =
                    d == null
                      ? void 0
                      : d.find(function (e) {
                          var t = e.campaign;
                          return t.id === (m == null ? void 0 : m.campaign.id);
                        }),
                  _ =
                    (u = p == null ? void 0 : p.campaign.destination_type) !=
                    null
                      ? u
                      : m == null
                        ? void 0
                        : m.campaign.destination_type,
                  f = o(
                    "AdsCTWAAutogenCatalogSelectionMutators",
                  ).shouldClearCTWAAutogenCatalogSelectionForDestinationChange(
                    _,
                    s,
                  )
                    ? o(
                        "AdsCTWAAutogenCatalogSelectionMutators",
                      ).clearCTWAAutogenCatalogSelection(e)
                    : e;
                if (
                  o("AdsDynamicAdsUtils").isDynamicAd(f) &&
                  d != null &&
                  d.length > 0 &&
                  t.isL1MultiDestination !== !0
                ) {
                  var g = d[0].campaign,
                    h = d[0].campaignGroup,
                    y = o(
                      "AdsUEditorCampaignAdObjectsUtils",
                    ).getPromotedObjectType({ campaign: g, campaignGroup: h }),
                    C = o(
                      "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
                    ).getAdgroupSpecPathPlugin(d[0]),
                    b = o("AdsODAXUtils").maybeTranslateObjective(
                      h.objective,
                      y,
                      g.optimization_goal,
                    );
                  o(
                    "ClickToWhatsAppFeatureGating",
                  ).isEligibleForCTXAdvantageCatalog(g.destination_type, !1) &&
                    (f = r(
                      "AdsAdgroupConvertCtxAdgroupFromDynamicToStaticMutator",
                    )(f, a, g, h, C, i, b));
                }
                if (
                  !o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
                    t.destinationType,
                  ) &&
                  s !== r("AdCampaignDestination").MESSENGER &&
                  s !== r("AdCampaignDestination").INSTAGRAM_DIRECT
                )
                  return f;
                var v = r("nullthrows")(l.get(n)),
                  S = v.campaign,
                  R = v.campaignGroup,
                  L = v.specPlugin,
                  E = o(
                    "AdsAPICampaignGroupRecordUtils",
                  ).getPromotedObjectPageID(R),
                  k =
                    E != null
                      ? E
                      : (c = f.creative) == null ||
                          (c = c.object_story_spec) == null
                        ? void 0
                        : c.page_id,
                  I = r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(
                    L,
                    f,
                  ),
                  T = o(
                    "AdsUEditorUnifiedCreationAdgroupMutators",
                  ).parseAIGenIcebreakersFromWelcomeMessage(I),
                  D = T.enableAIGenIcebreakers,
                  x = T.existingAIGenIcebreakers,
                  $ = r("AdsGetStandardTemplateDefaultJSONWithDestination")(
                    k,
                    s,
                    null,
                    x != null
                      ? {
                          icebreakers: x,
                          welcomeMessage: null,
                          welcomeMessageModelVersion: null,
                          nudgeMessage: null,
                          nudgeModelVersion: null,
                        }
                      : null,
                    D,
                  ),
                  P = k != null ? i(k) : null,
                  N = o(
                    "AdsPlacementAPISpecReaderUtils",
                  ).convertCampaignToPlacementSpec_LEGACY(S);
                if (
                  (o(
                    "CallPromptFeatureGating",
                  ).eligibleForCallPromptForCTXAdsAM(R.objective, s, [N], P) &&
                    ($ = r(
                      "maybeDefaultCallPromptInStartConversationsTemplate",
                    )($, P, S.optimization_goal)),
                  k != null)
                ) {
                  var M = o(
                      "AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector",
                    ).AdsUEditorAdgroupAutomatedChatDefaultTemplateIdSelector(),
                    w = M(k);
                  if (
                    w.defaultTemplateId != null &&
                    o(
                      "ClickToMessageLeadGenFeatureGating",
                    ).enableAutomatedChatDefaulting(
                      P,
                      R.objective,
                      s,
                      S.optimization_goal,
                    )
                  ) {
                    var A;
                    (($.landing_screen_type = r(
                      "AdsMessengerVisualEditorLandingScreenType",
                    ).LITE_WEIGHT_AUTOMATED_CHAT),
                      ($.ctm_lead_gen_template_id = w.defaultTemplateId),
                      r("logCTXAutomatedChatEvent")(
                        "ctx_automated_chat_defaulting",
                        "destination_app_change",
                        (A = f) == null ? void 0 : A.source_ad_id,
                      ));
                  }
                }
                if (
                  !o("AdsUEditorMessagingDestinationUtils").isMultiDestination(
                    t.destinationType,
                  )
                )
                  return o("AdsMutators").chain(
                    function (e) {
                      return r(
                        "AdsAdgroupSemanticFields",
                      ).pageWelcomeMessage.set(L, e, JSON.stringify($));
                    },
                    function (e) {
                      return o(
                        "AdsUEditorUnifiedCreationAdgroupMutators",
                      ).maybeDeletePageWelcomeMessage(e, D);
                    },
                  )(f);
                var F = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: S, campaignGroup: R }),
                  O = o("AdsODAXUtils").maybeTranslateObjective(
                    R.objective,
                    F,
                    S.optimization_goal,
                  ),
                  B = o("AdsAPIAdgroupRecordUtils").isExistingPostAd(f);
                return o("AdsMutators").chain(
                  function (e) {
                    return r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.product_set_id.delete(e);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).setMultiDestinationCTAFields({
                      adgroup: e,
                      campaignGroupPromotedPageID: E,
                      destinationType: s,
                      isExistingPostAd: B,
                      objective: O,
                      promotedObjectType: F,
                      specPlugin: L,
                      page: P,
                      welcomeMessage: $,
                      isL1MultiDestination: t.isL1MultiDestination === !0,
                    });
                  },
                  function (e) {
                    return o(
                      "ClickToMessageCTMAdoptionFeatureGating",
                    ).isEligibleForCTXL1EngagementPostEngagement(
                      S.optimization_goal,
                      R.objective,
                    ) &&
                      !B &&
                      o(
                        "AdsUEditorUnifiedCreationAdgroupMutators",
                      ).getPrimaryMultiDestImageHash(e) != null &&
                      r("gkx")("9226")
                      ? o("AdsMutators").chain(
                          function (e) {
                            return o(
                              "AdsUEditorUnifiedCreationAdgroupMutators",
                            ).setToplineMessagingLinkDataForMultiDest(
                              e,
                              L,
                              R.is_odax_campaign_group === !0,
                              R.objective,
                              s,
                              F,
                              S.optimization_goal,
                            );
                          },
                          function (e) {
                            return o(
                              "AdsUEditorUnifiedCreationAdgroupMutators",
                            ).setToplineMessagingImageForMultiDest(e, L);
                          },
                        )(e)
                      : e;
                  },
                  function (e) {
                    return r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                      L,
                      e,
                      JSON.stringify($),
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).maybeDeletePageWelcomeMessage(e, D);
                  },
                )(f);
              },
            );
          },
          o("AdsUEditorCampaignSetUnifiedCreationDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
