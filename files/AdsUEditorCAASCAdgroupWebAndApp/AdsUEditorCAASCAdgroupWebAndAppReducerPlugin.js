__d(
  "AdsUEditorCAASCAdgroupWebAndAppReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCAASCAdgroupWebAndAppActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var t;
              return o("AdsMutators").chain(
                (t = r("AdsAdgroupRecordAccessors")).creative
                  .degrees_of_freedom_spec.delete,
                t.creative.asset_feed_spec.delete,
                t.creative.product_set_id.delete,
                t.creative.shop_spec.delete,
              )(e);
            });
          },
          r("AdsUEditorCAASCAdgroupWebAndAppActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
