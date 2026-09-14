__d(
  "AdsUEditorAdgroupMutationForLightweightBestPracticeOptionsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetLightweightSplitTestOptionsActionFlux",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("AdsAdgroupRecordAccessors").lightweight_split_test.get(
                  e,
                ),
                o = t.lightweightSplitTestOptions;
              if (r("isFalsey")(n) || r("isFalsey")(o))
                return r("AdsAdgroupRecordAccessors")
                  .lightweight_split_test_options == null
                  ? e
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).lightweight_split_test_options.delete(e);
              var a = JSON.stringify({
                description: o.description,
                headline: o.headline,
                primary_text: o.primaryText,
                product_catalog_id: o.productCatalogID,
                product_set_id:
                  o.productCatalogID == null ? void 0 : o.productSetID,
                auto_change_budget_to_winner: r("isFalsey")(
                  o.auto_change_budget_to_winner,
                )
                  ? void 0
                  : !0,
                winner_budget:
                  o.winner_budget == null ? void 0 : o.winner_budget,
              });
              return r(
                "AdsAdgroupRecordAccessors",
              ).lightweight_split_test_options.set(a, e);
            });
          },
          o("AdsUEditorAdgroupSetLightweightSplitTestOptionsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
