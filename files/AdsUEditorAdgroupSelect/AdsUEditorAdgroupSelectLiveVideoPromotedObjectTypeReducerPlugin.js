__d(
  "AdsUEditorAdgroupSelectLiveVideoPromotedObjectTypeReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsInstagramUsernameStore",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupClearDataMutatorsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataActionFlux",
    "AdsUEditorInstagramMutators",
    "AdsUEditorLiveVideoMutators",
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
            defaultInstagramID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDWithBusiness,
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
          },
          function (e, t, n) {
            var a = n.cachedStoreState,
              i = n.defaultInstagramID,
              l = n.getInstagramAccount,
              s = n.getPage,
              u = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n,
                  c = r("nullthrows")(u.get(t)),
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
                  g = o("AdsAPIAdgroupRecordUtils").getPostEditMode(e),
                  h =
                    (n = e.creative) == null ||
                    (n = n.object_story_spec) == null
                      ? void 0
                      : n.page_id;
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsUEditorInstagramMutators",
                    ).maybeSetAdgroupCreativeInstagramAccountID(e, p, i);
                  },
                  function (e) {
                    return o(
                      "AdsUEditorAdgroupClearDataMutatorsUtils",
                    ).clearData({
                      adgroup: e,
                      adgroupID: t,
                      cachedStoreState: a,
                      effectiveObjective: f,
                      specPlugin: p,
                    });
                  },
                  function (e) {
                    var t,
                      n = new Map();
                    return (
                      h != null && n.set(h, s(h)),
                      o("AdsUEditorCallToActionMutators").setCallToAction({
                        callToActionType: "WATCH_LIVE_VIDEO",
                        pages: n,
                        cachedCallToActionLink: null,
                        adgroup: e,
                        campaignGroupPromotedPageID:
                          (t = m.promoted_object) == null ? void 0 : t.page_id,
                        objective: f,
                        promotedObjectType: r("AdsPromotedObjectTypes")
                          .LIVE_VIDEO,
                        specPlugin: p,
                      })
                    );
                  },
                  function (e) {
                    return o(
                      "AdsUEditorLiveVideoMutators",
                    ).setDefaultAutoplayCreativeForInstagramLiveVideo({
                      adgroup: e,
                    });
                  },
                  function (e) {
                    var n = r("AdsAdgroupSemanticFields").instagramActorID.get(
                      p,
                      e,
                    );
                    if (n != null) {
                      var a = l(n, t);
                      if (a != null)
                        return o(
                          "AdsUEditorLiveVideoMutators",
                        ).setCTALinkAndAppLink({
                          adgroup: e,
                          specPlugin: p,
                          instagramAccount: a,
                          postEditMode: g,
                        });
                    }
                    return e;
                  },
                  function (e) {
                    return o(
                      "AdsAssetFeedUtils",
                    ).hasPlacementCustomizationFromRecord(e)
                      ? o(
                          "AdsUEditorAdgroupAssetFeedMutators",
                        ).removeMissingAdlabelsFromCustomizationRules(e)
                      : e;
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
