__d(
  "AdsReachFrequencyFlowInitExistingAction",
  [
    "AdsReachFrequencyCurrentCampaignIDProvider",
    "AdsReachFrequencyRevampCurrentCampaignIDReducerPlugins",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsCFAdgroupReachFrequencyFlowChangeDestinationReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFAdgroupDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
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
      "AdsReachFrequencyFlow.INIT_EXISTING",
    );
    a.exports = e;
  },
  null,
);
