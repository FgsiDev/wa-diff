__d(
  "AdsUEditorAdgroupSetBoostedProductSetIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsProductSetBoostingUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetBoostedProductSetIDDataActionFlux",
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
                  l = i.specPlugin,
                  s = o(
                    "AdsProductSetBoostingUtils",
                  ).setBoostedProductSetIDForAdgroup(
                    e,
                    t.allProductsProductSetID,
                    t.turningOn,
                    t.selectedProductSetID,
                    l,
                  );
                return (
                  t.turningOnSmartPSE === !0
                    ? (s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.template_data.smart_pse_enabled.set(
                        !0,
                        s,
                      ))
                    : t.turningOnSmartPSE === !1 &&
                      (s = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.template_data.smart_pse_enabled.delete(
                        s,
                      )),
                  s
                );
              },
            );
          },
          r("AdsUEditorAdgroupSetBoostedProductSetIDDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
