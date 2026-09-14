__d(
  "AdsUEditorAdgroupSetPromotedProductsOptimizationReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetPromotedProductsOptimizationActionFlux",
    "ProductSetOptimizationSettingForAdgroupAPI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              return (
                (n = r(
                  "AdsAdgroupRecordAccessors",
                ).product_set_optimization_setting.set(
                  t.promotedProductsOptimization
                    ? o("ProductSetOptimizationSettingForAdgroupAPI")
                        .ProductSetOptimizationSettingForAdgroupAPI.ENABLED
                    : o("ProductSetOptimizationSettingForAdgroupAPI")
                        .ProductSetOptimizationSettingForAdgroupAPI.DISABLED,
                  n,
                )),
                n
              );
            });
          },
          r("AdsUEditorAdgroupSetPromotedProductsOptimizationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
