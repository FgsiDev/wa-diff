__d(
  "adsCampaignGetDefaultDestinationType",
  ["AdCampaignDestination", "AdsAPIObjectives"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === r("AdsAPIObjectives").MESSAGES
        ? r("AdCampaignDestination").MESSENGER
        : null;
    }
    l.default = e;
  },
  98,
);
