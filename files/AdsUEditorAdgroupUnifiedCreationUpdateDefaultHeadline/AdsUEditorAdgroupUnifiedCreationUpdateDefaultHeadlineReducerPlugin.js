__d(
  "AdsUEditorAdgroupUnifiedCreationUpdateDefaultHeadlineReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupUnifiedCreationUpdateDefaultHeadlineAndBudgetActionFlux",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "ClickToMessageCTDFeatureGating",
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
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = r("nullthrows")(a.get(n)),
                  l = i.specPlugin;
                return t.destinationType ===
                  r("AdCampaignDestination").INSTAGRAM_DIRECT &&
                  !o(
                    "ClickToMessageCTDFeatureGating",
                  ).shouldShowCTDCustomHeadline() &&
                  !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
                  ? o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).deleteHeadline(e, l)
                  : o(
                      "AdsUEditorUnifiedCreationAdgroupMutators",
                    ).updateDefaultHeadline(e, t.destinationType, l);
              },
            );
          },
          o(
            "AdsUEditorAdgroupUnifiedCreationUpdateDefaultHeadlineAndBudgetActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
