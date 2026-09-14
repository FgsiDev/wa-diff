__d(
  "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingActionFlux",
    "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o(
                "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingReducerUtils",
              ).updateCampaignCreativeAudiencePairing(
                e,
                t.creativeAudiencePairingStatus,
                t.enableIndividualSettings,
                t.defaultMinAge,
              );
            });
          },
          r(
            "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
