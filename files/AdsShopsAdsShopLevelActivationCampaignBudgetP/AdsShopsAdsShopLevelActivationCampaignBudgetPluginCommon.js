__d(
  "AdsShopsAdsShopLevelActivationCampaignBudgetPluginCommon",
  [
    "AdsDefaultCampaignBudgetPlugin",
    "AdsUEditorShopAdsSpecLoggerUtils",
    "AdsWebsiteCampaignBudgetPluginCommon",
    "adsUEditorShopLevelActivationSelectors",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (
        c(
          o(
            "adsUEditorShopLevelActivationSelectors",
          ).adsUEditorShopLevelActivationExperienceSelector(),
        )
      ) {
        var n = r("justknobx")._("1437");
        return (
          o("AdsUEditorShopAdsSpecLoggerUtils").logShopAdsDefaultSpec({
            defaultLifetimeBudget: n,
          }),
          n
        );
      }
      return r(
        "AdsDefaultCampaignBudgetPlugin",
      ).getBaseDefaultLifetimeBudgetUSD(e, t);
    }
    function s(e) {
      if (
        c(
          o(
            "adsUEditorShopLevelActivationSelectors",
          ).adsUEditorShopLevelActivationExperienceSelector(),
        )
      ) {
        var t = r("justknobx")._("1438");
        return (
          o("AdsUEditorShopAdsSpecLoggerUtils").logShopAdsDefaultSpec({
            defaultDailyBudget: t,
          }),
          t
        );
      }
      return r(
        "AdsWebsiteCampaignBudgetPluginCommon",
      ).getBaseDefaultDailyBudgetUSD(e);
    }
    function u(e, t, n, a) {
      if (
        c(
          o(
            "adsUEditorShopLevelActivationSelectors",
          ).adsUEditorShopLevelActivationExperienceSelector(),
        )
      ) {
        var i = new Date(e);
        return (
          i.setDate(i.getDate() + r("justknobx")._("1439")),
          o("AdsUEditorShopAdsSpecLoggerUtils").logShopAdsDefaultSpec({
            defaultEndDate: i,
          }),
          i
        );
      }
      return r("AdsDefaultCampaignBudgetPlugin").getDefaultEndDate(e, t, n, a);
    }
    function c(e) {
      return e === "WINBACK_WITH_COUPON" || e === "ACTIVATION_WITH_COUPON";
    }
    ((l.getBaseDefaultLifetimeBudgetUSD = e),
      (l.getBaseDefaultDailyBudgetUSD = s),
      (l.getDefaultEndDate = u),
      (l.isEligibleSLAExperience = c));
  },
  98,
);
