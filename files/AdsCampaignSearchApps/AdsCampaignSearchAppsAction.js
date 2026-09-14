__d(
  "AdsCampaignSearchAppsAction",
  [
    "AdsCampaignSearchAppsReducerPlugin",
    "AdsSearchAppsTypeaheadProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCampaignSearchAppsReducerPlugin"),
            n("AdsSearchAppsTypeaheadProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "CAMPAIGN.SEARCH_APPS",
    );
    a.exports = e;
  },
  null,
);
