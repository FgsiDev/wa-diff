__d(
  "adsCampaignGetAllowedStatusTransitions",
  ["AdsActiveStatuses"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e) return ["ACTIVE", "PAUSED"];
      var n = t != null ? t : "ACTIVE";
      if (r("AdsActiveStatuses").has(n))
        return ["ACTIVE", "PAUSED", "DELETED", "ARCHIVED"];
      switch (n) {
        case "PAUSED":
          return ["PAUSED", "ACTIVE", "DELETED", "ARCHIVED"];
        case "DELETED":
          return ["DELETED"];
        case "ARCHIVED":
          return ["ARCHIVED"];
        default:
          return [n, "DELETED", "ARCHIVED"];
      }
    }
    l.default = e;
  },
  98,
);
