__d(
  "adsCampaignIsCampaignDeleted",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n = (t = e.status) != null ? t : "ACTIVE";
      return n === "DELETED" || n === "ARCHIVED";
    }
    i.default = e;
  },
  66,
);
