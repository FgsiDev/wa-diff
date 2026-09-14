__d(
  "adsPECreationStartQuickCreate",
  ["AdsConvergenceReminderDialogUtils", "AdsPECreateStartQuickCreateAction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, l) {
      var s = {
        defaultToEngagementCampaign: l,
        level: e,
        selectedCampaignGroupID: n,
        selectedCampaignID: a,
        source: t,
      };
      o("AdsConvergenceReminderDialogUtils").executeCallbackOnEditorClosed(
        function () {
          r("AdsPECreateStartQuickCreateAction").dispatch(
            { data: s },
            {
              line: "35",
              module: "adsPECreationStartQuickCreate.js",
              moduleID: i.id,
            },
          );
        },
      );
    }
    l.default = e;
  },
  98,
);
