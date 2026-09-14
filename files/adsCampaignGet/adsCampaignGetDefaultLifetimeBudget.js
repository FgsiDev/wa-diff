__d(
  "adsCampaignGetDefaultLifetimeBudget",
  [
    "LifetimeDefaultDurationUtils",
    "WebApiApplication",
    "adsCampaignConvertUSDBudgetToCurrency",
    "adsCampaignGetCampaignDayCount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l,
        s =
          n && a
            ? Math.floor(r("adsCampaignGetCampaignDayCount")(n, a))
            : void 0;
      if (
        o("LifetimeDefaultDurationUtils").shouldUseSevenDayLifetimeBudget(
          i,
          "lifetime",
        )
      ) {
        var u;
        s = o("LifetimeDefaultDurationUtils").getLifetimeDefaultDurationDays(i);
        var c = t.getDefaultDailyBudgetUSD(
            (u = o("WebApiApplication").getClientID()) != null ? u : "",
          ),
          d = c * s;
        return r("adsCampaignConvertUSDBudgetToCurrency")(e, d);
      }
      var m = t.getDefaultLifetimeBudgetUSD(
        (l = o("WebApiApplication").getClientID()) != null ? l : "",
        s,
        e,
      );
      return r("adsCampaignConvertUSDBudgetToCurrency")(e, m);
    }
    l.default = e;
  },
  98,
);
