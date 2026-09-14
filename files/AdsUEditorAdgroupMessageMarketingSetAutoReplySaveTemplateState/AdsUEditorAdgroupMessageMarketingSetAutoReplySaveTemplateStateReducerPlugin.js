__d(
  "AdsUEditorAdgroupMessageMarketingSetAutoReplySaveTemplateStateReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetAutoReplySaveTemplateStateActionFlux",
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
                ).creative.marketing_message_structured_spec.autoreply.save_template.set(
                  t.save_template,
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.marketing_message_structured_spec.autoreply.template_name.set(
                  t.template_name,
                ),
              )(e);
            });
          },
          r(
            "AdsUEditorAdgroupMessageMarketingSetAutoReplySaveTemplateStateActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
