__d(
  "adsCampaignGetDefaultDailyBudget",
  [
    "AdsProfileVisitSABRCreationUtils",
    "AdsZeroOutcomeBudgetDefaultUtils",
    "AdsZeroOutcomeBudgetisAffectedByZeroOutcomeDefaultAllObjectiveExperiment",
    "URIInitDataUtil",
    "WebApiApplication",
    "adsCampaignConvertUSDBudgetToCurrency",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = 1e4;
    function u(t, n, a, i, l, u) {
      var c;
      u !== !0 &&
        r("ifRequired")("AdsLWIBudgetCohesionPublishLogger", function (e) {
          return e.clearBudgetCohesionState();
        });
      var d = n.getDefaultDailyBudgetUSD(
          (c = o("WebApiApplication").getClientID()) != null ? c : "",
          t,
          a,
          i,
          l,
          u,
        ),
        m = o("URIInitDataUtil").getDailyBudget();
      if (
        (m != null && m >= e && m <= s && (d = m),
        l &&
          o(
            "AdsZeroOutcomeBudgetisAffectedByZeroOutcomeDefaultAllObjectiveExperiment",
          ).isAffectedByZeroOutcomeDefaultAllObjectiveExperiment(a, i, !0))
      )
        return o("AdsZeroOutcomeBudgetDefaultUtils").roundUpToNearestFive(
          o("AdsZeroOutcomeBudgetDefaultUtils").convertUSDToAccountCurrency(
            l.account_currency_ratio_to_usd,
            d,
            l.currency,
          ),
          l.currency,
        );
      if (
        l &&
        o("AdsProfileVisitSABRCreationUtils").getIsProfileVisitSABREnabled(
          l.account_id,
          a,
          n.pivots.promotedObjectType,
          !1,
          "adsCampaignGetDefaultDailyBudget",
        )
      )
        return o("AdsZeroOutcomeBudgetDefaultUtils").roundUpToNearestOne(
          o("AdsZeroOutcomeBudgetDefaultUtils").convertUSDToAccountCurrency(
            l.account_currency_ratio_to_usd,
            d,
            l.currency,
          ),
          l.currency,
        );
      if (l != null && u !== !0 && a !== "OUTCOME_ENGAGEMENT") {
        var p = r("ifRequired")("AdsLWIBudgetCohesionReader", function (e) {
          return e.getLWIBudgetRecommendationInLocalCurrency(l, a);
        });
        if (p != null) {
          var _ = r("adsCampaignConvertUSDBudgetToCurrency")(t, d);
          if (p > _) {
            var f = r("ifRequired")("AdsLWIBudgetCohesionUtils", function (e) {
              return e.isLWIBudgetCohesionEnabled(!0);
            });
            if (f === !0)
              return (
                r("ifRequired")(
                  "AdsLWIBudgetCohesionPublishLogger",
                  function (e) {
                    return e.setBudgetCohesionState({
                      initialBudget: Math.round(p),
                      recommendedBudget: Math.round(p),
                      isTreatment: !0,
                      objective: a != null ? a : "",
                      budgetSource: "OWN_SPEND",
                    });
                  },
                ),
                Math.round(p)
              );
            r("ifRequired")("AdsLWIBudgetCohesionPublishLogger", function (e) {
              return e.setBudgetCohesionState({
                initialBudget: Math.round(_),
                recommendedBudget: Math.round(p),
                isTreatment: !1,
                objective: a != null ? a : "",
                budgetSource: "STATIC_DEFAULT",
              });
            });
          }
        }
      }
      return r("adsCampaignConvertUSDBudgetToCurrency")(t, d);
    }
    l.default = u;
  },
  98,
);
