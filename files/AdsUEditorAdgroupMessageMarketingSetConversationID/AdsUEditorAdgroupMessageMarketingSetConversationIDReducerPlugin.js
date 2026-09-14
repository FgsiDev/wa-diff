__d(
  "AdsUEditorAdgroupMessageMarketingSetConversationIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetConversationIDActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.marketing_message_structured_spec.conversation_template_id.set(
                t.conversation_template_id,
              ),
            );
          },
          r("AdsUEditorAdgroupMessageMarketingSetConversationIDActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
