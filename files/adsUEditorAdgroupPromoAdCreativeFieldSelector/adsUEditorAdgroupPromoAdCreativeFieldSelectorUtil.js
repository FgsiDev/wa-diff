__d(
  "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
  [
    "AdsAdgroupRecordAccessors",
    "cr:7679",
    "cr:8128",
    "promoAdCouponCodeSourceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, o, a, i) {
      (a === void 0 && (a = !1), i === void 0 && (i = !1));
      var l = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.get(
        e,
      );
      if (
        l != null &&
        (l.contains("EMAIL_CAPTURE_SHOPIFY") ||
          l.contains("EMAIL_CAPTURE_GENERIC_CODE"))
      )
        return !0;
      if (a) {
        var s;
        return (s =
          n("cr:8128") == null
            ? void 0
            : n("cr:8128").isEmailCaptureOptedInAlwaysOnForAdgroup(
                e,
                t,
                o,
                i,
              )) != null
          ? s
          : !1;
      }
      return !1;
    }
    function u(e, t, a, i, l, s) {
      (i === void 0 && (i = !0),
        l === void 0 && (l = !1),
        s === void 0 && (s = !1));
      var u = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.get(
        e,
      );
      if (u != null && o("promoAdCouponCodeSourceUtils").isPromoAdOptedIn(u))
        return !0;
      if (i) {
        var c;
        return (c =
          n("cr:7679") == null
            ? void 0
            : n("cr:7679").isPromoAdsAlwaysOnForAdgroup(e, t, a, l, {}, s)) !=
          null
          ? c
          : !1;
      }
      return !1;
    }
    function c(e) {
      return (
        u(e, void 0, void 0, !1) &&
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.product_catalog_id.get(
          e,
        ) != null
      );
    }
    ((l.isEmailCaptureOptedInForAdgroup = s),
      (l.isPromoAdOptedInForAdgroup = u),
      (l.isPromoAdOptedInWithProductCatalogForAdgroup = c),
      (l.isEmailCaptureOptedInFromSources = (e = o(
        "promoAdCouponCodeSourceUtils",
      )).isEmailCaptureOptedInFromSources),
      (l.isPromoAdAutomaticOptedIn = e.isPromoAdAutomaticOptedIn),
      (l.isPromoAdManualOptedIn = e.isPromoAdManualOptedIn),
      (l.isPromoAdOptedIn = e.isPromoAdOptedIn),
      (l.isPromoAdOptedInFromSources = e.isPromoAdOptedInFromSources));
  },
  98,
);
