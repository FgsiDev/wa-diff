__d(
  "AdsUEditorCampaignWAMOStatusFromUpstreamChangeAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignWAMOStatusFromUpstreamChangeReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignWAMOStatusFromUpstreamChangeReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignWAMOStatusFromUpstreamChangeActionPlugin",
    );
    a.exports = e;
  },
  null,
);
