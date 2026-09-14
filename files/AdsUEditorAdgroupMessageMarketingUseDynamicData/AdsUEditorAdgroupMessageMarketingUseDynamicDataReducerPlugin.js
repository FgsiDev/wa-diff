__d(
  "AdsUEditorAdgroupMessageMarketingUseDynamicDataReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingUseDynamicDataActionFlux",
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
                r("AdsAdgroupRecordAccessors").creative.product_set_id.set(
                  t.productSetID,
                ),
              )(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingUseDynamicDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
