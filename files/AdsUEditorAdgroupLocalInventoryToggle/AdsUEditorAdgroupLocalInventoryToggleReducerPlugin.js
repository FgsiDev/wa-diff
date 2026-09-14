__d(
  "AdsUEditorAdgroupLocalInventoryToggleReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupLocalInventoryToggleActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.recommender_settings.product_sales_channel.set(
                  t.productSalesChannel,
                ),
              )(e);
            });
          },
          o("AdsUEditorAdgroupLocalInventoryToggleActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
