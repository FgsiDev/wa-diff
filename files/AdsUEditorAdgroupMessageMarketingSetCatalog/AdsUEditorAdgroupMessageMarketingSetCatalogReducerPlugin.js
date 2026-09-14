__d(
  "AdsUEditorAdgroupMessageMarketingSetCatalogReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetCatalogActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.catalog_id === null && t.product_ids === null
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.marketing_message_structured_spec.catalog.set(
                    null,
                  )(e)
                : o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.catalog.id.set(
                      t.catalog_id,
                    ),
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.marketing_message_structured_spec.catalog.product_ids.set(
                      r("immutable").List(t.product_ids),
                    ),
                  )(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetCatalogActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
