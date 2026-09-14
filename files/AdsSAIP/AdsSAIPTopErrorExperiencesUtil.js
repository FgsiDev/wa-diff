__d(
  "AdsSAIPTopErrorExperiencesUtil",
  [
    "errorCode",
    "fbt",
    "AdsInterfacesLogger",
    "AdsPECreationStoreUtils",
    "AdsSAOffCouponGuidanceModalAction",
    "AdsShopsAdsActivationCouponHowItWorksLink.react",
    "DateTime",
    "ShopsAdsActivationExperienceConstants",
    "ShopsAdsContentUtils",
    "Timezone",
    "gkx",
    "isNullish",
    "isTruthy",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e) {
      return e.some(function (e) {
        return o(
          "ShopsAdsActivationExperienceConstants",
        ).SHOPS_ADS_ACTIVATION_COUPON_EXPERIENCES.includes(e);
      });
    }
    function m(e) {
      return e.some(function (e) {
        return ["SAOFF_COUPON_SHOPIFY", "SAOFF_COUPON_BESH"].includes(e);
      });
    }
    var p = "2026-12-15";
    function _(e) {
      return r("DateTime").fromISOString(e, o("Timezone").UTC).format("F d, Y");
    }
    function f(e, t) {
      var n = e != null,
        r = d(t);
      return n && r;
    }
    function g(e, t, n, o) {
      return !r("isNullish")(t) && t > 0 && m(e) ? h(t, n, o) : null;
    }
    function h(e, t, n) {
      var a = o("ShopsAdsContentUtils").getCouponAmountText(e),
        l = _(p),
        s = u._(
          /*BTDS*/ "Get {couponAmount} ad credit for your next eligible Sales campaign",
          [u._param("couponAmount", a)],
        ),
        d = u._(
          /*BTDS*/ "Use a shop to personalize buyer journeys and get {couponAmount} ad credit added to your next Sales campaign. Offer expires {COUPON_EXPIRATION_DATE}, and applies for 30 days after you publish a campaign. {=m7}",
          [
            u._param("couponAmount", a),
            u._param("COUPON_EXPIRATION_DATE", l),
            u._implicitParam(
              "=m7",
              c.jsx(r("AdsShopsAdsActivationCouponHowItWorksLink.react"), {
                couponAmount: e,
                children: u._(/*BTDS*/ ""),
              }),
            ),
          ],
        ),
        m = u._(
          /*BTDS*/ "We\u2019ll automatically create a shop for you to claim your {couponAmount} ad credit",
          [u._param("couponAmount", a)],
        ),
        f = u._(
          /*BTDS*/ "Use your new shop to personalize buyer journeys and get {couponAmount} ad credit added to your next eligible Sales campaign. Offer expires {COUPON_EXPIRATION_DATE}, and applies for 30 days after you publish a campaign that uses your new shop.",
          [u._param("couponAmount", a), u._param("COUPON_EXPIRATION_DATE", l)],
        ),
        g = r("gkx")("425"),
        h =
          t == null
            ? void 0
            : t.find(function (e) {
                return (
                  (e == null ? void 0 : e.onboarding_cohort) ===
                  "NO_SHOP_HAS_SMA_INSTALLED"
                );
              });
      if (!g && r("isNullish")(n)) return null;
      var y = g && h;
      return r("isTruthy")(y)
        ? {
            body: f,
            heading: m,
            primaryButtonLabel: u._(/*BTDS*/ "Get started"),
            onClick: function () {
              (r("AdsInterfacesLogger").logOnce({
                eventName: "shops_ads_home_banner_click_primary_cta",
              }),
                r("AdsSAOffCouponGuidanceModalAction").dispatch(
                  { shouldShowSAOffOptimizedOnboardingModal: !0 },
                  {
                    line: "212",
                    module: "AdsSAIPTopErrorExperiencesUtil.js",
                    moduleID: i.id,
                  },
                ));
            },
            errorKey: 3850003,
          }
        : {
            body: d,
            heading: s,
            primaryButtonLabel: u._(/*BTDS*/ "Get started"),
            onClick: function () {
              (r("AdsInterfacesLogger").logOnce({
                eventName: "shops_ads_home_banner_click_primary_cta",
              }),
                o("AdsPECreationStoreUtils").clickCreateButtonForQuickCreate(
                  "campaign",
                ));
            },
            errorKey: 3850003,
          };
    }
    ((l.COUPON_EXPIRATION_DATE = p),
      (l.formatCouponExpirationDate = _),
      (l.shouldShowHomeBanner = f),
      (l.getContentForEligibleExperience = g));
  },
  226,
);
