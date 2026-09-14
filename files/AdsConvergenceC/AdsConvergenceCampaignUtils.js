__d(
  "AdsConvergenceCampaignUtils",
  [
    "AdsCampaignBudgetPluginResolver",
    "AdsPlacementUtils",
    "adsCampaignGetDefaultDailyBudget",
    "adsTargetingGetDefaultTargetingSpec",
    "adsTargetingGetIsEmbargoedCountry",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i, l, s) {
      var u = e.business_country_code;
      r("adsTargetingGetIsEmbargoedCountry")(u) && (u = null);
      var c = o(
          "adsTargetingGetDefaultTargetingSpec",
        ).adsTargetingGetDefaultTargetingSpec(e, u, n, l, s),
        d = r("AdsPlacementUtils").getAutomaticCampaignPlacement({
          account: e,
          objective: n,
          buyingType: t,
          capabilities: e.capabilities,
          promotedObjectType: a,
          promotedPageID: i,
        });
      return babelHelpers.extends({}, c, d);
    }
    function s(e, t, n, o, a) {
      var i, l, s;
      if (t == null && n == null) {
        var u = r("AdsCampaignBudgetPluginResolver").resolve({
          objective: o,
          promotedObjectType: a,
        });
        ((i = r("adsCampaignGetDefaultDailyBudget")(e.currency, u)),
          (l = 0),
          (s = ["standard"]));
      }
      return { defaultDailyBudget: i, defaultLifetimeBudget: l, pacingType: s };
    }
    ((l.getDefaultTargeting = e), (l.getDefaultBudget = s));
  },
  98,
);
