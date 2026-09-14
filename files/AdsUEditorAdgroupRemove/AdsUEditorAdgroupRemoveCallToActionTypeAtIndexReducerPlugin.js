__d(
  "AdsUEditorAdgroupRemoveCallToActionTypeAtIndexReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveCallToActionTypeAtIndexDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUnifiedCreativeAPIFields",
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
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("nullthrows")(a.get(e.id)),
                i = n.campaign,
                l = n.campaignGroup,
                s = n.specPlugin,
                u = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  l.objective,
                  i,
                ),
                c = o("AdsODAXUtils").maybeTranslateObjective(
                  l.objective,
                  u,
                  null,
                );
              return o("AdsMutators").chain(
                function (e) {
                  return o("AdsAssetFeedMutationUtils").removeAssetAtIndex(
                    e,
                    s,
                    r("AdsUnifiedCreativeAPIFields").callToActionType,
                    t.assetIndex,
                  );
                },
                function (e) {
                  return c !== r("AdsAPIObjectives").LEAD_GENERATION
                    ? e
                    : r("AdsAdgroupRecordAccessors")
                        .creative.asset_feed_spec.call_to_actions.at(
                          t.assetIndex,
                        )
                        .delete(e);
                },
              )(e);
            });
          },
          o("AdsUEditorAdgroupRemoveCallToActionTypeAtIndexDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
