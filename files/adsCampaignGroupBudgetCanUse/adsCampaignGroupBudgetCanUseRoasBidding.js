__d(
  "adsCampaignGroupBudgetCanUseRoasBidding",
  ["AdsBidControlType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      r("AdsBidControlType").ANY,
      r("AdsBidControlType").HIGHEST_VALUE_AND_MIN_ROAS_ONLY,
    ];
    function s(t) {
      return e.includes(t);
    }
    l.default = s;
  },
  98,
);
