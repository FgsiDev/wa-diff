__d(
  "AdsUEditorCampaignGroupSetAgencyFeeReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetAgencyFeeActionFlux",
    "immutable",
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
                return o("AdsMutators").chain(function (e) {
                  return r(
                    "AdsCampaignGroupRecordAccessors",
                  ).agency_fee_config.set(
                    r("immutable").fromJS(t.agencyFeeConfig),
                    e,
                  );
                })(e);
              },
            );
          },
          o("AdsUEditorCampaignGroupSetAgencyFeeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
