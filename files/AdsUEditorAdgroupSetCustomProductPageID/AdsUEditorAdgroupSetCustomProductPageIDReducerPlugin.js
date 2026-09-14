__d(
  "AdsUEditorAdgroupSetCustomProductPageIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupAppProductPageIdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCustomProductPageIDActionFlux",
    "adsConvertAdObjectRecordToPlainJS",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = t.customProductPageID;
              return r("isStringNullOrEmpty")(n)
                ? o(
                    "AdsUEditorAdgroupAppProductPageIdsMutators",
                  ).isAdgroupUsingOnlyAppProductPageId(
                    r("adsConvertAdObjectRecordToPlainJS")(e),
                  )
                  ? r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.delete(e)
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.asset_feed_spec.app_product_page_id.delete(e)
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.app_product_page_id.set(n, e);
            });
          },
          o("AdsUEditorAdgroupSetCustomProductPageIDActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
