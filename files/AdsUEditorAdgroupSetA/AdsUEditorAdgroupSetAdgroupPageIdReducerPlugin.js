__d(
  "AdsUEditorAdgroupSetAdgroupPageIdReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsCTWAAutogenCatalogSelectionMutators",
    "AdsClickToCallPhoneNumberUtils",
    "AdsInstagramAccountStoreUtils",
    "AdsInstagramApplicabilityUtils",
    "AdsInstagramBrandedContentUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageInstagramAccountStore_RELAY",
    "AdsPageStore",
    "AdsPostDefaultingExperimentUtils",
    "AdsProfileVisitExtensionTypeUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCallAdsConfigurationUtils",
    "AdsUEditorAdgroupInstagramUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPageDefaultingPostMutator",
    "AdsUEditorAdgroupSetPageRecommendedPostMutator",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignPromotedObjectSetInstagramActorIdAction",
    "AdsUEditorCampaignSelectUnifiedProfileVisitsDestinationDataAction",
    "AdsUEditorCampaignSetPageIdDataActionFlux",
    "AdsUEditorCampaignWhatsAppStatusSelectors",
    "AdsUEditorInstagramMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorWhatsAppMutators",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppUtils",
    "ConstUriUtils",
    "URIInitDataUtil",
    "XVanityURLControllerRouteBuilder",
    "adsGetUniformValueSelector",
    "adsPagesInAuthorizationSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorCampaignDestinationTypeSelector",
    "adsUEditorCampaignGroupObjectiveSelector",
    "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
    "adsUEditorIsPoliticalCategoryAvailableSelector",
    "isTruthy",
    "isUPVBPScopedPickersEnabled",
    "isUPVL2InstagramPickerEnabled",
    "justknobx",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      if (e == null) return null;
      var i = e !== t,
        l = e === r("AdCampaignDestination").INSTAGRAM_PROFILE && n && !a,
        s =
          o(
            "AdsUnifiedProfileVisitUtils",
          ).getUnifiedProfileVisitsDestinationContainsIG(e) &&
          !n &&
          a;
      return i || l || s ? e : null;
    }
    function s(e, t, n) {
      return e
        ? o("AdsUnifiedProfileVisitUtils").getShouldOptIntoMultiDestination()
          ? r("AdCampaignDestination").INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
          : r("AdCampaignDestination").INSTAGRAM_PROFILE
        : !n &&
            o(
              "AdsUnifiedProfileVisitUtils",
            ).getUnifiedProfileVisitsDestinationContainsIG(t)
          ? r("AdCampaignDestination").FACEBOOK_PAGE
          : t;
    }
    function u(e, t, n) {
      return (
        o(
          "AdsUnifiedProfileVisitUtils",
        ).getUnifiedProfileVisitsDestinationContainsIG(e) &&
        o(
          "AdsProfileVisitExtensionTypeUtils",
        ).isProfileVisitWhatsAppExtensionTypeSelected(t) &&
        !o("AdsWhatsAppUtils").hasSMBNumberConnected(n)
      );
    }
    var c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            isPolitcalCategoryAvailable: r(
              "adsUEditorIsPoliticalCategoryAvailableSelector",
            ),
            placementSpecsMap: o("AdsUEditorAdgroupSelectors")
              .placementSpecsMap,
            pagesInAuthorizations: r("adsPagesInAuthorizationSelector"),
            getPage: r("AdsPageStore").getSelector,
            hasWhatsAppPlacement: o("AdsUEditorCampaignWhatsAppStatusSelectors")
              .someHaveWhatsAppStatusPosition,
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            isWhatsAppStatusAdsEnabled: o(
              "AdsUEditorCampaignWhatsAppStatusSelectors",
            ).isWhatsAppStatusAdsEnabledSelector,
            regulatedCategories: o(
              "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
            ).adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector,
            destinationType: o("adsUEditorCampaignDestinationTypeSelector")
              .adsUEditorCampaignDestinationTypeSelector,
            objective: r("adsUEditorCampaignGroupObjectiveSelector"),
            promotedObjectType: r("adsGetUniformValueSelector")(
              r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
              r("AdsPromotedObjectTypes").NONE,
            ),
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
          },
          function (t, n, a) {
            var l = a.account,
              c = a.destinationType,
              d = a.getInstagramAccount,
              m = a.getPage,
              p = a.isPolitcalCategoryAvailable,
              _ = a.objective,
              f = a.pagesInAuthorizations,
              g = a.parentData,
              h = a.placementSpecsMap,
              y = a.promotedObjectType,
              C = a.regulatedCategories,
              b = {},
              v = o("AdsMutators").mutateEach(t, n.adgroupIDs, function (e, t) {
                var a,
                  i,
                  s = e;
                s = o(
                  "AdsUEditorAdgroupCallAdsConfigurationUtils",
                ).clearBizAICallScreeningConfig(s);
                var d = r("nullthrows")(g.get(t)),
                  _ = d.campaign,
                  y = d.campaignGroup,
                  v = d.specPlugin;
                s = o(
                  "AdsCTWAAutogenCatalogSelectionMutators",
                ).maybeClearCTWAAutogenCatalogSelectionForPageChange(
                  s,
                  _.destination_type,
                  r("AdsAdgroupSemanticFields").pageID.get(v, s),
                  n.pageID,
                );
                var S = o(
                    "AdsUEditorCampaignAdObjectsUtils",
                  ).getPromotedObjectType({ campaign: _, campaignGroup: y }),
                  R = o("AdsODAXUtils").maybeTranslateObjective(
                    y.objective,
                    S,
                    _.optimization_goal,
                  );
                (R === r("AdsAPIObjectives").MESSAGES &&
                  (s = o(
                    "AdsUEditorAdgroupSetPageDefaultingPostMutator",
                  ).setUseLiveVideoPostDefaulting(s, v, n.pageID, l, _, y)),
                  _.destination_type === r("AdsPromotedObjectTypes").WHATSAPP &&
                    (s = o(
                      "AdsUEditorWhatsAppMutators",
                    ).setFieldsForSelectingPage({
                      adgroup: s,
                      campaignPromotedPageID: n.pageID,
                      objective: R,
                      promotedObjectType: S,
                      specPlugin: v,
                    })));
                var L = h.get(t);
                (L != null &&
                  r("AdsInstagramApplicabilityUtils").hasPlacementForPlatform(
                    L,
                    "instagram",
                  )) ||
                o(
                  "AdsUnifiedProfileVisitUtils",
                ).getIsUnifiedProfileVisitsConversionUnderODAXObjective(R, S)
                  ? (b[t] = r("AdsAdgroupSemanticFields").instagramActorID.get(
                      v,
                      s,
                    ))
                  : ((s = o(
                      "AdsInstagramUserIdMigrationUtils",
                    ).IGIDV2MigrationAccessors.creative.instagram_user_id.delete(
                      s,
                    )),
                    (s = o(
                      "AdsInstagramUserIdMigrationUtils",
                    ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.delete(
                      s,
                    )));
                var E = h.get(t);
                if (
                  (r("justknobx")._("3019") &&
                    (E == null ||
                      !r(
                        "AdsInstagramApplicabilityUtils",
                      ).hasPlacementForPlatform(E, "threads")) &&
                    (s = o("AdsUEditorAdgroupMutators").removeThreadsUserID(
                      s,
                      v,
                    )),
                  _.destination_type ===
                    r("AdCampaignDestination").PHONE_CALL &&
                    R === r("AdsAPIObjectives").LEAD_GENERATION)
                ) {
                  var k,
                    I,
                    T = r("isTruthy")(
                      (k = e.creative) == null ||
                        (k = k.object_story_spec) == null
                        ? void 0
                        : k.link_data,
                    );
                  if (
                    T &&
                    ((I = e.creative) == null ||
                    (I = I.object_story_spec) == null ||
                    (I = I.link_data) == null ||
                    (I = I.call_to_action) == null
                      ? void 0
                      : I.type) === "CALL_NOW"
                  ) {
                    var D, x;
                    s = s.setIn(
                      r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                        .LINK_DATA.LINK,
                      (D =
                        (x = r("XVanityURLControllerRouteBuilder")
                          .buildUri({ vanity: n.pageID })
                          .qualifyDomain(
                            o("ConstUriUtils").getUri("https://facebook.com/"),
                          )) == null
                          ? void 0
                          : x.toString()) != null
                        ? D
                        : "",
                    );
                  }
                }
                var $ = m(n.pageID);
                if (
                  ((s = o(
                    "AdsClickToCallPhoneNumberUtils",
                  ).maybeSetDefaultPhoneNumberForCallNowCTA({
                    account: l,
                    adgroup: s,
                    objective: R,
                    page: $,
                    prefillPhoneNumber: n.prefillPhoneNumber,
                    promotedObjectType: S,
                    specPlugin: v,
                  })),
                  (s = r("AdsAdgroupSemanticFields").callToActionValue.set(
                    v,
                    s,
                    (a = r("AdsAdgroupSemanticFields").callToActionValue.get(
                      v,
                      s,
                    )) == null
                      ? void 0
                      : a.delete("lead_gen_form_id"),
                  )),
                  u(_.destination_type, s, $))
                ) {
                  var P = o("AdsAPIAdgroupRecordUtils").getPostEditMode(s);
                  s = o(
                    "AdsUEditorCallToActionMutators",
                  ).deleteCallToActionValueInstagramProfileDestination(s, v, P);
                }
                if (o("AdsAPICampaignRecordUtils").isScheduledLiveVideoAd(_)) {
                  var N;
                  s = o("AdsMutators").chain(
                    (N = r("AdsAdgroupRecordAccessors")).creative
                      .object_story_spec.video_data.event_id.delete,
                    N.creative.object_story_spec.video_data.video_id.delete,
                    N.creative.object_story_spec.video_data.image_url.delete,
                    N.creative.object_story_spec.video_data.message.delete,
                    N.creative.object_story_spec.video_data.title.delete,
                    N.creative.object_story_spec.video_data.call_to_action
                      .delete,
                  )(s);
                }
                if (
                  (c === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
                    (s = o(
                      "AdsUEditorInstagramMutators",
                    ).maybeSetAdgroupMessageTemplateDefaultingForUnstructuredLead(
                      s,
                      v,
                      c,
                      r("AdsAPIObjectives").OUTCOME_LEADS,
                      n.pageID,
                    )),
                  o(
                    "AdsUEditorMessagingDestinationUtils",
                  ).isClickToMessageAdDestination(c) &&
                    _.promoted_object != null &&
                    ((i = e.creative) == null ? void 0 : i.branded_content) !=
                      null &&
                    (s = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.branded_content.promoted_page_id.set(
                      _.promoted_object.page_id,
                      s,
                    )),
                  c === r("AdCampaignDestination").INSTAGRAM_LIVE)
                ) {
                  var M,
                    w = o(
                      "AdsInstagramBrandedContentUtils",
                    ).getInstagramAccountIDFromPage(
                      (M = _.promoted_object) == null ? void 0 : M.page_id,
                      r(
                        "AdsPageInstagramAccountStore_RELAY",
                      ).fluxGetSelector()(),
                    );
                  b[t] = w;
                }
                var A = h.get(s.id);
                return (
                  (s = o("AdsUEditorAdgroupMutators").adgroupProcessing(
                    n.pageID,
                    s,
                    p,
                    f,
                    S,
                    R,
                    C,
                    v,
                    null,
                    l,
                    y,
                    _,
                    $,
                    A != null ? [A] : [],
                  )),
                  o("AdsPostDefaultingExperimentUtils").isEnabled() &&
                    (s = o(
                      "AdsUEditorAdgroupSetPageRecommendedPostMutator",
                    ).setRecommendedPost(l, s, _, y, v, n.pageID, m)),
                  s
                );
              }),
              S = n.hostID,
              R = n.adgroupIDs,
              L = n.campaignIDs;
            if (
              o(
                "AdsUnifiedProfileVisitUtils",
              ).getIsUnifiedProfileVisitsConversionUnderODAXObjective(_, y)
            ) {
              var E = o("URIInitDataUtil").getDefaultDestination();
              r("promiseDone")(
                r("AdsInstagramAccountStoreUtils")
                  .genDefaultInstagramAccountForPage(n.pageID, null)
                  .then(function (t) {
                    var a = t.hasConnectedInstagramAccount,
                      l = t.instagramAccountV2ID;
                    if (
                      E !== r("AdCampaignDestination").FACEBOOK_PAGE &&
                      E !==
                        r("AdCampaignDestination")
                          .INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
                    ) {
                      var u = s(
                          r("isTruthy")(a),
                          c,
                          r("isUPVBPScopedPickersEnabled")(),
                        ),
                        d = m(n.pageID),
                        p = o("AdsWhatsAppUtils").hasSMBNumberConnected(d),
                        _ = v.get(n.adgroupIDs[0]),
                        f = _ == null ? void 0 : _.getValue(),
                        g =
                          f != null
                            ? o(
                                "AdsProfileVisitExtensionTypeUtils",
                              ).isProfileVisitWhatsAppExtensionTypeSelected(f)
                            : !1,
                        h = e(u, c, g, p);
                      h != null &&
                        r(
                          "AdsUEditorCampaignSelectUnifiedProfileVisitsDestinationDataAction",
                        ).dispatch(
                          {
                            hostID: S,
                            adgroupIDs: R,
                            campaignIDs: L,
                            destinationType: h,
                          },
                          {
                            line: "557",
                            module:
                              "AdsUEditorAdgroupSetAdgroupPageIdReducerPlugin.js",
                            moduleID: i.id,
                          },
                        );
                    }
                    l != null &&
                      r("isUPVL2InstagramPickerEnabled")() &&
                      r(
                        "AdsUEditorCampaignPromotedObjectSetInstagramActorIdAction",
                      ).dispatch(
                        {
                          adgroupIDs: R,
                          campaignIDs: [].concat(L),
                          hostID: S,
                          instagramActorID: null,
                          instagramUserID: o(
                            "AdsInstagramUserIdMigrationUtils",
                          ).convertIGIDV2FromStringToStrongType(l),
                        },
                        {
                          line: "576",
                          module:
                            "AdsUEditorAdgroupSetAdgroupPageIdReducerPlugin.js",
                          moduleID: i.id,
                        },
                      );
                  }),
              );
            }
            return (
              Object.keys(b).length > 0 &&
                o(
                  "AdsUEditorAdgroupInstagramUtils",
                ).initiateInstagramDefaulting(
                  l,
                  b,
                  n.pageID,
                  S,
                  null,
                  !1,
                  null,
                  null,
                  c,
                ),
              v
            );
          },
          o("AdsUEditorCampaignSetPageIdDataActionFlux").actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
