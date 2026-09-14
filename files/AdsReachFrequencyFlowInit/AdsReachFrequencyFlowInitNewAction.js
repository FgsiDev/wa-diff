__d(
  "AdsReachFrequencyFlowInitNewAction",
  [
    "AdsReachFrequencyCurrentCampaignIDProvider",
    "AdsReachFrequencyRevampCurrentCampaignIDReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsReachFrequencyRevampCurrentCampaignIDReducerPlugins")
              .setCampaignID,
            n("AdsReachFrequencyCurrentCampaignIDProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsReachFrequencyFlow.INIT_NEW",
    );
    a.exports = e;
  },
  null,
);
