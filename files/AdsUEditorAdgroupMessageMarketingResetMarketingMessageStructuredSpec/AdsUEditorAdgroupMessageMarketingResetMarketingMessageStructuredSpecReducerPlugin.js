__d(
  "AdsUEditorAdgroupMessageMarketingResetMarketingMessageStructuredSpecReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingResetMarketingMessageStructuredSpecActionFlux",
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
                ).creative.marketing_message_structured_spec.footer.set(null),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.greeting.set(null),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.is_optimized_text.set(
                  !1,
                ),
              )(e);
            });
          },
          r(
            "AdsUEditorAdgroupMessageMarketingResetMarketingMessageStructuredSpecActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
