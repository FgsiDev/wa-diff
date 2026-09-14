__d(
  "AdsEventResponsesCampaignBudgetPlugin",
  ["AdsAPIObjectives", "AdsDefaultCampaignBudgetPlugin", "AdsScheduleStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1100,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "event-responses",
        pivots: { objective: r("AdsAPIObjectives").EVENT_RESPONSES },
        getDefaultEndDate: function (t, n) {
          if (!n) {
            var e = r("AdsScheduleStore").getEndDate();
            return e && e.date
              ? e.date
              : r("AdsDefaultCampaignBudgetPlugin").getDefaultEndDate(t, n);
          }
          return n;
        },
        getBaseDefaultDailyBudgetUSD: function (n) {
          return e;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
