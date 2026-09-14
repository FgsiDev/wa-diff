__d(
  "AdsUEditorCampaignPlacementCpasLVAApplyDefaultsAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignPlacementCpasLVAApplyDefaultsReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignPlacementCpasLVAApplyDefaultsReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_PLACEMENT.CPAS_LVA_APPLY_DEFAULTS",
    );
    a.exports = e;
  },
  null,
);
