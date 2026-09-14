__d(
  "AdsUEditorAdgroupPromoAdMutatorUtils",
  [
    "$InternalEnum",
    "AdsAPIAdgroupRecord",
    "AdsAdgroupRecordAccessors",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "AD_CREATIVE_PRIMARY_TEXT",
        "AD_CREATIVE_HEADLINE",
        "AD_CREATIVE_DESCRIPTION",
        "AD_CREATIVE_MANUAL_COUPON_CODES",
        "DETECTED_FROM_MERCHANT_ADS",
        "PROVIDED_BY_MERCHANT",
        "DETECTED_FROM_MERCHANT_WEBSITE",
      ],
      s = n("$InternalEnum").Mirrored([
        "SET_MEDIA",
        "DA_TO_SA_TRANSFORMATION",
        "SA_TO_DA_TRANSFORMATION",
        "SET_INLINE_CREATION",
        "SET_EXISTING_POST_FORMAT",
        "SET_EXISTING_POST",
        "TEST",
        "UPDATE_ADCOPY_TEXT",
        "LINK_POST_FORMAT",
        "UPDATE_PLACEMENT",
        "SELECT_PIXEL_PROMOTED_OBJECT",
        "SELECT_DEVICE_PLATFORM",
        "SET_WEBSITE_OPTIMIZATION",
        "VIEW_TRIGGER_AREA",
        "UPDATE_PAGE",
        "SET_PRODUCT_SET_ID_ON_CAMPAIGN",
        "OPT_OUT_SAOFF",
        "CATALOG_INPUT_CHANGE",
      ]);
    function u(e) {
      var t;
      return (
        ((t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.get(
          e,
        )) == null
          ? void 0
          : t.toArray()) || []
      );
    }
    function c(e) {
      var t;
      return (
        ((t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.offer_details.get(e)) ==
        null
          ? void 0
          : t.toArray()) || []
      );
    }
    function d(t) {
      return t
        ? t.filter(function (t) {
            return e.includes(t);
          })
        : [];
    }
    function m(e) {
      var t;
      if (e instanceof r("AdsAPIAdgroupRecord")) {
        var n,
          o = r("immutable").List(
            (n = e.creative) == null ? void 0 : n.asset_feed_spec,
          );
        return _(o.toArray());
      }
      var a = (t = e.creative) == null ? void 0 : t.asset_feed_spec;
      return a != null && _(Object.entries(a));
    }
    function p(e, t, n) {
      var r = e;
      return (
        t.length > 0 && (r = Array.from(new Set([].concat(r, t)))),
        n.length > 0 &&
          (r = r.filter(function (e) {
            return !n.includes(e);
          })),
        r
      );
    }
    function _(e) {
      var t = e.every(function (e) {
        var t = e[0],
          n = e[1];
        return n == null;
      });
      return (
        !t &&
        e.every(function (e) {
          var t = e[0],
            n = e[1];
          return (t === "promotional_metadata" && r("isTruthy")(n)) ||
            (Array.isArray(n) && n.length === 0)
            ? !0
            : n == null;
        })
      );
    }
    ((l.PromoAdDefaultOptInCallSite = s),
      (l.getAllowedPromoOfferSourcesArray = u),
      (l.getOfferDetailsArray = c),
      (l.getPromoAdsSourceFromAllowedCouponSource = d),
      (l.isAdgroupOnlyUsingPromoAdFieldForStaticAdsFromRecord = m),
      (l.updateAllowedCouponCodeSources = p));
  },
  98,
);
