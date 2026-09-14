__d(
  "AdsUEditorReachFrequencyRfCampaignTypeChangeReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsReachFrequencyRfCampaignTypeChangeActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).rf_campaign_type.set(t.rfCampaignType, e);
              },
            );
          },
          r("AdsReachFrequencyRfCampaignTypeChangeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
