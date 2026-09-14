__d(
  "AdsUEditorAdgroupSetAssetFeedInstagramValueReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetAssetFeedInstagramValueDataActionFlux",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.destinationType,
                r = t.userId;
              return o(
                "AdsUEditorUnifiedCreationAdgroupMutators",
              ).setInstagramValues(e, n, r);
            });
          },
          o("AdsUEditorAdgroupSetAssetFeedInstagramValueDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
