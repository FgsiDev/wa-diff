__d(
  "AdsUEditorAdgroupMessageMarketingMultiTurnSetConfigIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingMultiTurnSetConfigIDActionFlux",
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
              ).creative.marketing_message_structured_spec.automation_config.config_id.set(
                t.configID,
              ),
            );
          },
          r("AdsUEditorAdgroupMessageMarketingMultiTurnSetConfigIDActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
