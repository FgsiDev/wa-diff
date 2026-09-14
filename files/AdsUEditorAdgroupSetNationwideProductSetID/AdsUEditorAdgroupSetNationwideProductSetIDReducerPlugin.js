__d(
  "AdsUEditorAdgroupSetNationwideProductSetIDReducerPlugin",
  [
    "AdsMutators",
    "AdsProductSetBoostingUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetNationwideProductSetIDDataActionFlux",
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
            var r = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                return o(
                  "AdsProductSetBoostingUtils",
                ).setNationwideProductSetIDForAdgroup(
                  e,
                  t.allProductsProductSetID,
                  t.turningOn,
                  t.selectedProductSetID,
                );
              },
            );
          },
          r("AdsUEditorAdgroupSetNationwideProductSetIDDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
