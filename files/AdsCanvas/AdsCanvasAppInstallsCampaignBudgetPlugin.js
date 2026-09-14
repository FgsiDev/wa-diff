__d(
  "AdsCanvasAppInstallsCampaignBudgetPlugin",
  ["AdsAPIObjectives", "AdsDefaultCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "canvas-app-installs",
        pivots: { objective: r("AdsAPIObjectives").CANVAS_APP_INSTALLS },
      }),
      s = e;
    l.default = s;
  },
  98,
);
