__d(
  "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingReducerPlugin",
            ),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingActionPlugin",
    );
    a.exports = e;
  },
  null,
);
