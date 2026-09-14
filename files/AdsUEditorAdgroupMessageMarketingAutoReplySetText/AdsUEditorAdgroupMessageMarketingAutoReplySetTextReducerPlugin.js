__d(
  "AdsUEditorAdgroupMessageMarketingAutoReplySetTextReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingAutoReplySetTextActionFlux",
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
                ).creative.marketing_message_structured_spec.autoreply.text.set(
                  t.text,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.autoreply.is_optimized_auto_reply.set(
                  !0,
                ),
              )(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingAutoReplySetTextActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
