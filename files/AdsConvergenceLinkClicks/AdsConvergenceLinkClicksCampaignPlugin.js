__d(
  "AdsConvergenceLinkClicksCampaignPlugin",
  ["AdsAPIObjectives", "AdsConvergenceDefaultCampaignPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsConvergenceDefaultCampaignPlugin"), {
        type: "convergenceCampaign",
        key: "campaign/link-clicks",
        pivots: { objective: r("AdsAPIObjectives").LINK_CLICKS },
      }),
      s = e;
    l.default = s;
  },
  98,
);
