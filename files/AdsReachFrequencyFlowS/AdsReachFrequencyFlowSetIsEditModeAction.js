__d(
  "AdsReachFrequencyFlowSetIsEditModeAction",
  ["AdsCampaignEditorProvider", "AdsCampaignEditorReducerPlugins", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCampaignEditorReducerPlugins")
              .AdsReachFrequencyFlowSetIsEditModeReducerPlugin,
            n("AdsCampaignEditorProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsReachFrequencyFlow.SET_IS_EDIT_MODE",
    );
    a.exports = e;
  },
  null,
);
