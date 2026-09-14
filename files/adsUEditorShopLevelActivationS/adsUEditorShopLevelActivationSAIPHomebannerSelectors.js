__d(
  "adsUEditorShopLevelActivationSAIPHomebannerSelectors",
  [
    "AdsAccountStore",
    "AdsInterfacesLogger",
    "AdsSAIPTopErrorExperiencesUtil",
    "adsCreateSelector",
    "adsUEditorShopLevelActivationSAIPAdAccountExperienceResponseSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("AdsAccountStore").getSelectedAccount,
        o(
          "adsUEditorShopLevelActivationSAIPAdAccountExperienceResponseSelectors",
        ).shopLevelActivationAdAccountExperienceResponseSelector,
      ],
      function (t, n) {
        return s(t, n);
      },
      { name: i.id + ".adsUEditorShopLevelActivationSAIPHomebannerSelector" },
    );
    function s(e, t) {
      var n,
        a = e.getValue(),
        i = (n = t == null ? void 0 : t.saip_experiences) != null ? n : [];
      return o("AdsSAIPTopErrorExperiencesUtil").shouldShowHomeBanner(a, i)
        ? {
            couponAmount: t == null ? void 0 : t.coupon_amount_cents,
            cmsID: t == null ? void 0 : t.cms_id,
            eligibleSAIPExperiences: i,
            optimizedOnboardingRecommendations:
              t == null ? void 0 : t.saoff_onboarding_recommendations,
          }
        : (r("AdsInterfacesLogger").logOnce({
            eventName: "shops_ads_home_banner_not_shown",
            data: {
              message: "home banner not shown due to ineligible ad account",
            },
          }),
          null);
    }
    l.adsUEditorShopLevelActivationSAIPHomebannerSelector = e;
  },
  98,
);
