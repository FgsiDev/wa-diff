__d(
  "adsCampaignGroupBudgetCanUseAutoBidding",
  ["AdsBidControlType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      r("AdsBidControlType").ANY,
      r("AdsBidControlType").AUTO_AND_MAX_BID_ONLY,
      r("AdsBidControlType").AUTO_BID_ONLY,
    ];
    function s(t) {
      return e.includes(t);
    }
    l.default = s;
  },
  98,
);
