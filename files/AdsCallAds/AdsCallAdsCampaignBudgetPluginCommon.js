__d(
  "AdsCallAdsCampaignBudgetPluginCommon",
  [
    "AdsAccountStore",
    "AdsCallAdsCampaignBudgetPluginCommonQuery.graphql",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCallAdsBudgetRecommendationUitls",
    "AdsUniformValue",
    "AdsWebsiteCampaignBudgetPluginCommon",
    "isTruthy",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r(
        "AdsWebsiteCampaignBudgetPluginCommon",
      ).getBaseDefaultDailyBudgetUSD(),
      u = r("AdsAccountStore").getSelectedAccountID(),
      c =
        e !== void 0
          ? e
          : (e = n("AdsCallAdsCampaignBudgetPluginCommonQuery.graphql"));
    function d(e, t) {
      if (t == null) return e;
      var n = e.daily_budget,
        a = e.lifetime_budget,
        i = n != null && n !== 0 ? "daily" : "lifetime",
        l = i === "daily" ? n : a,
        s = o(
          "AdsUEditorCallAdsBudgetRecommendationUitls",
        ).getCallAdsBudgetRecommendationByMode(
          t,
          i,
          new (r("AdsUniformValue"))(e.start_time),
          new (r("AdsUniformValue"))(e.end_time),
        ),
        u = r("AdsAccountStore").getSelectedAccount().getValue(),
        c = r("isTruthy")(u)
          ? o(
              "AdsUEditorCallAdsBudgetRecommendationUitls",
            ).getAdAccountBudgetRecommendationByModeForSABR(
              i,
              new (r("AdsUniformValue"))(e.start_time),
              new (r("AdsUniformValue"))(e.end_time),
              u == null ? void 0 : u.currency,
            )
          : null,
        d =
          u && r("isTruthy")(s)
            ? o(
                "AdsUEditorCallAdsBudgetRecommendationUitls",
              ).convertBudgetFromUSDToCurrency(u, s)
            : null,
        m = d != null && l != null && l <= d,
        p = c != null && l != null && l <= c,
        _ =
          (m || p) &&
          d !== c &&
          o(
            "AdsUEditorCallAdsBudgetRecommendationUitls",
          ).isEligibleForCallAdsSimilarAdvertiserBudgetRecommendation()
            ? c
            : d;
      if (
        l != null &&
        _ != null &&
        _ > l &&
        (m ||
          (p &&
            d !== c &&
            o(
              "AdsUEditorCallAdsBudgetRecommendationUitls",
            ).isEligibleForCallAdsSimilarAdvertiserBudgetRecommendation(!1)))
      )
        switch (
          (_ === d
            ? o(
                "AdsUEditorCallAdsBudgetRecommendationUitls",
              ).logCallAdsBudgetRecommendationL2DefaultBudgetWhenCallSelected(
                u == null ? void 0 : u.account_id,
                i,
                _,
              )
            : r("vulture")("aw46qSANWNayIjYlSqS2YHRHqAc="),
          i)
        ) {
          case "daily":
            return o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").daily_budget.set(_),
              r("AdsCampaignRecordAccessors").lifetime_budget.set(0),
            )(e);
          case "lifetime":
            return o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").lifetime_budget.set(_),
              r("AdsCampaignRecordAccessors").daily_budget.set(0),
            )(e);
          default:
            return e;
        }
      return e;
    }
    l.maybeSetDefaultBudgetWhenSwitchingToCalls = d;
  },
  98,
);
