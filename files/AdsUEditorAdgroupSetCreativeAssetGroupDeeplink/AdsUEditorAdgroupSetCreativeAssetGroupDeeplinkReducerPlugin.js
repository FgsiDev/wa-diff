__d(
  "AdsUEditorAdgroupSetCreativeAssetGroupDeeplinkReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCreativeAssetGroupDeeplinkDataActionFlux",
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
                return o(
                  "AdsAdgroupCreativeAssetGroupsSpecMutators",
                ).setCagCallToActionValueByValueType(
                  e,
                  t.selectedGroupIndex,
                  t.link,
                  "app_link",
                  l,
                );
              },
            );
          },
          r("AdsUEditorAdgroupSetCreativeAssetGroupDeeplinkDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
