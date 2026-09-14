__d(
  "AdsUEditorCampaignSetTargetingAudienceFairnessMitigationStrategyAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignSetTargetingAudienceFairnessMitigationStrategyReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignSetTargetingAudienceFairnessMitigationStrategyReducerPlugin",
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
      "AdsUEditorCampaignTargetingAudienceFairnessMitigationStrategyActionPlugin",
    );
    a.exports = e;
  },
  null,
);
