__d(
  "AdsUEditorAdgroupSetDynamicCreativeOptimizationForSmartAppPromotionReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAssetFeedUtils",
    "AdsCampaignStructureCreationLoadingUIDataProvider",
    "AdsMutators",
    "AdsPECreationSource",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupSmartPromotionTypeChangeActionFlux",
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
            creationSourceData: r(
              "AdsCampaignStructureCreationLoadingUIDataProvider",
            ).toFluxSelector(),
          },
          function (e, t, n) {
            var a = n.creationSourceData,
              i = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = i.get(n),
                  s = l.campaign,
                  u = l.campaignGroup,
                  c = l.specPlugin;
                if (
                  !o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e)
                ) {
                  var d;
                  if (
                    ((d = e.creative) == null ? void 0 : d.product_set_id) !=
                    null
                  ) {
                    var m = u.objective,
                      p = o(
                        "AdsUEditorCampaignAdObjectsUtils",
                      ).getPromotedObjectType({
                        campaign: s,
                        campaignGroup: u,
                      });
                    return o(
                      "AdsUEditorAdgroupMutators",
                    ).transformAdgroupFromTemplateToLinkData(
                      s,
                      e,
                      m,
                      p,
                      c,
                      a.creationSource ===
                        r("AdsPECreationSource").CONTEXTUAL_MENU_CREATE_AD,
                    );
                  }
                  return e;
                }
                return o(
                  "AdsUEditorAdgroupAssetFeedMutators",
                ).convertFromAssetFeedSpec(
                  o(
                    "AdsAPIAdgroupRecordUtils",
                  ).getAssetFeedSpecDestinationObjectType(e),
                  e,
                  t.objective,
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupSmartPromotionTypeChangeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
