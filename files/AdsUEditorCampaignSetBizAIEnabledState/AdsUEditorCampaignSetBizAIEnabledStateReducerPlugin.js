__d(
  "AdsUEditorCampaignSetBizAIEnabledStateReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetBizAIEnabledStateActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r("AdsCampaignRecordAccessors").biz_ai_enabled_state.set(
                t.newState,
                e,
              );
            });
          },
          o("AdsUEditorCampaignSetBizAIEnabledStateActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
