__d(
  "AdsUEditorAdgroupRemovePartnerAppWelcomeMessageFlowIdReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemovePartnerAppWelcomeMessageFlowIdActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.additional_data.partner_app_welcome_message_flow_id.delete(
                e,
              );
            });
          },
          [
            r("AdsUEditorAdgroupRemovePartnerAppWelcomeMessageFlowIdActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
