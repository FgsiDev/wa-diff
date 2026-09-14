__d(
  "AdsUEditorAdgroupSelectInstagramProfilePromotedObjectTypeReducerPlugin",
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
    "AdsUEditorCampaignInstagramSelectors",
    "AdsUEditorCampaignSelectInstagramProfilePromotedObjectTypeDataActionFlux",
    "AdsUEditorInstagramMutators",
    "AdsUEditorInstagramProfileMutators",
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
            defaultInstagramUserID: o("AdsUEditorCampaignInstagramSelectors")
              .eligibleInstagramAccountIDV2WithBusiness,
            getInstagramAccount: r("AdsInstagramUsernameStore")
              .getForAdgroupSelector,
          },
          function (e, t, n) {
            var a = n.cachedStoreState,
              i = n.defaultInstagramID,
              l = n.defaultInstagramUserID,
              s = n.getInstagramAccount,
              u = n.getPage,
              c = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = r("nullthrows")(c.get(t)),
                  d = n.campaign,
                  m = n.campaignGroup,
                  p = n.specPlugin,
                  _ = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    m.objective,
                    d,
                  ),
                  f = o("AdsODAXUtils").maybeTranslateObjective(
                    m.objective,
                    _,
                    d.optimization_goal,
                  ),
                  g = o("AdsAPIAdgroupRecordUtils").getPostEditMode(e);
                return o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsUEditorInstagramMutators",
                    ).maybeSetAdgroupCreativeInstagramAccountID(e, p, i, l);
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
                      n,
                      a =
                        (t = e.creative) == null ||
                        (t = t.object_story_spec) == null
                          ? void 0
                          : t.page_id,
                      i = new Map();
                    return (
                      a != null && i.set(a, u(a)),
                      o(
                        "AdsUEditorInstagramProfileMutators",
                      ).setInstagramProfileCTA({
                        pages: i,
                        adgroup: e,
                        campaignGroupPromotedPageID:
                          (n = m.promoted_object) == null ? void 0 : n.page_id,
                        objective: f,
                        specPlugin: p,
                        promotedObjectType: r("AdsPromotedObjectTypes")
                          .INSTAGRAM_PROFILE,
                      })
                    );
                  },
                  function (e) {
                    var n = r("AdsAdgroupSemanticFields").instagramActorID.get(
                      p,
                      e,
                    );
                    if (n != null) {
                      var a = s(n, t);
                      if (a != null)
                        return o(
                          "AdsUEditorInstagramProfileMutators",
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
          o(
            "AdsUEditorCampaignSelectInstagramProfilePromotedObjectTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
