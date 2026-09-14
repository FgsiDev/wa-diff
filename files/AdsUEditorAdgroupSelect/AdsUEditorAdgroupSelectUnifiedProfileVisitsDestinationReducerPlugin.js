__d(
  "AdsUEditorAdgroupSelectUnifiedProfileVisitsDestinationReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsEditorPostEditMode",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupProfileVisitExtensionTypesMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignSelectUnifiedProfileVisitsDestinationDataActionFlux",
    "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
    "AdsWhatsAppUtils",
    "ClickToMessageCTWAFeatureGating",
    "adsStoreToSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
            getPage: r("AdsPageStore").getSelector,
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
          },
          function (e, t, n) {
            var a = n.cachedStoreState,
              i = n.getInstagramAccount,
              l = n.getPage,
              s = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var u = t.destinationType,
                  c = r("nullthrows")(s.get(n)),
                  d = c.campaign,
                  m = c.campaignGroup,
                  p = c.specPlugin,
                  _ = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    m.objective,
                    d,
                  ),
                  f = o("AdsODAXUtils").maybeTranslateObjective(
                    m.objective,
                    _,
                    d.optimization_goal,
                  ),
                  g = o("AdsUEditorAdgroupCachedUtils").getCreative(
                    a,
                    n,
                    r("AdsEditorPostEditMode").INLINE,
                  ),
                  h = o("AdsUEditorAdgroupCachedUtils").getMetadata(a, n),
                  y = o("AdsUEditorAdgroupCachedUtils").getPageID(a, n),
                  C = o("AdsAPIAdgroupRecordUtils").getPostEditMode(e),
                  b = o("AdsAPIAdgroupRecordUtils").getPageID(e, p),
                  v = new Map();
                b != null && v.set(b, l(b));
                var S = r("AdsAdgroupSemanticFields").instagramActorID.get(
                    p,
                    e,
                  ),
                  R = S ? i(S, n) : null;
                if (u === r("AdCampaignDestination").INSTAGRAM_PROFILE) {
                  var L,
                    E = o(
                      "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
                    ).switchToIGOnlyDestination({
                      adgroup: e,
                      campaign: d,
                      campaignGroup: m,
                      cachedCreative: g,
                      cachedMetadata: h,
                      objective: f,
                      instagramAccount: R,
                      pages: v,
                      postEditMode: C,
                      specPlugin: p,
                      destinationType: u,
                    }),
                    k = y != null ? y : b,
                    I = k != null ? l(k) : null,
                    T = o("AdsWhatsAppUtils").hasSMBNumberConnected(I),
                    D =
                      (L =
                        I == null ? void 0 : I.is_ptwa_defaulting_intent_am) !=
                      null
                        ? L
                        : !1;
                  return (
                    o("ClickToMessageCTWAFeatureGating").enablePTWADefaulting(
                      r("AdsPromotedObjectTypes").INSTAGRAM_PROFILE,
                      T,
                      m.objective,
                      n,
                      e.account_id,
                      k,
                      D,
                      I == null ? void 0 : I.ptwa_defaulting_cas_segment_am,
                    ) &&
                      (E = o(
                        "AdsUEditorAdgroupProfileVisitExtensionTypesMutator",
                      ).setProfileVisitExtensionType(E, "WHATSAPP_MESSAGE", p)),
                    E
                  );
                } else {
                  if (u === r("AdCampaignDestination").FACEBOOK_PAGE)
                    return o(
                      "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
                    ).switchToFBOnlyDestination({
                      adgroup: e,
                      campaign: d,
                      campaignGroup: m,
                      cachedCreative: g,
                      cachedMetadata: h,
                      objective: f,
                      pages: v,
                      postEditMode: C,
                      specPlugin: p,
                      destinationType: u,
                    });
                  if (
                    u ===
                    r("AdCampaignDestination")
                      .INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE
                  )
                    return o(
                      "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
                    ).switchToMultiDestination({
                      adgroup: e,
                      campaignGroup: m,
                      campaign: d,
                      instagramAccount: R,
                      cachedCreative: g,
                      cachedMetadata: h,
                      destinationType: u,
                      pageID: y != null ? y : b,
                      objective: f,
                      pages: v,
                      postEditMode: C,
                      specPlugin: p,
                    });
                }
                return e;
              },
            );
          },
          r(
            "AdsUEditorCampaignSelectUnifiedProfileVisitsDestinationDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
