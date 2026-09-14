__d(
  "AdsUEditorAdgroupMessageMarketingSetDpmSpecReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetDpmSpecActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return "{{" + e + "}}";
    }
    var s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (t, n) {
            var a,
              i = !r("isStringNullOrEmpty")(n.text),
              l = r("isStringNullOrEmpty")(n.headline)
                ? i
                  ? e("product.name")
                  : ""
                : n.headline,
              s = r("isStringNullOrEmpty")(n.description)
                ? i
                  ? e("product.current_price")
                  : ""
                : n.description;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.dynamic_product_message_spec.headline.set(
                  l,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.dynamic_product_message_spec.description.set(
                  s,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.dynamic_product_message_spec.text.set(
                  (a = n.text) != null ? a : "",
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.is_optimized_text.set(
                  !0,
                ),
              ),
            );
          },
          r("AdsUEditorAdgroupMessageMarketingSetDpmSpecActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
