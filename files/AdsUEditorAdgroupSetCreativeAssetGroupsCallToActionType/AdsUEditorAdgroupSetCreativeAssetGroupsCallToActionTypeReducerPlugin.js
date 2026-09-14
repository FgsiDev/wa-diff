__d(
  "AdsUEditorAdgroupSetCreativeAssetGroupsCallToActionTypeReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCreativeAssetGroupsCallToActionTypeDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsAdgroupCreativeAssetGroupsSpecMutators",
              ).setCagCallToActionType(e, t.callToActionType);
            });
          },
          r(
            "AdsUEditorAdgroupSetCreativeAssetGroupsCallToActionTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
