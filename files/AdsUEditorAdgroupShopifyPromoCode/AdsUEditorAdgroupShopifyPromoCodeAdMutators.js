__d(
  "AdsUEditorAdgroupShopifyPromoCodeAdMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInterfacesLogger",
    "AdsMutators",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
      ["AD_CREATIVE_PRIMARY_TEXT_LLM", "AD_CREATIVE_PRIMARY_TEXT"],
      ["AD_CREATIVE_HEADLINE_LLM", "AD_CREATIVE_HEADLINE"],
      ["AD_CREATIVE_DESCRIPTION_LLM", "AD_CREATIVE_DESCRIPTION"],
    ]);
    function s(t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.get(
        t,
      );
      if (n == null) return t;
      var o = new Set();
      for (var a of n) {
        var i = e.get(a);
        i != null && (o.add(a), o.add(i));
      }
      return o.size === 0
        ? t
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
            n.filter(function (e) {
              return !o.has(e);
            }),
            t,
          );
    }
    function u(e) {
      var t;
      return (
        ((t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.manual_coupon_codes.get(
          e,
        )) == null
          ? void 0
          : t.toArray()) || []
      );
    }
    function c(e, t, n, o, a, i, l) {
      var s;
      r("AdsInterfacesLogger").log({
        eventName: e,
        data:
          ((s = {}),
          (s.ad_account_id = t),
          (s.adgroup_id = n),
          (s.status = o),
          (s.message = a),
          (s.caller = i),
          (s.subsequent_data = l),
          s),
      });
    }
    function d(e, t, n) {
      var a = u(e);
      return (
        t
          ? a.push(n)
          : ((a = a.filter(function (e) {
              return e !== n;
            })),
            c(
              "shopify_promo_codes_removed_token",
              e.account_id,
              e.id,
              "eligible",
              n,
            )),
        a.length > 0
          ? o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.promotional_metadata.manual_coupon_codes.set(
                r("immutable").List(a),
              ),
            )(e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.promotional_metadata.delete(e)
      );
    }
    function m(e) {
      var t;
      return (
        ((t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.promotional_metadata.coupon_codes.ad_creative_manual_coupon_codes.get(
          e,
        )) == null
          ? void 0
          : t.toArray()) || []
      );
    }
    function p(e, t, n) {
      var a = m(e);
      return (
        t && n !== ""
          ? a.push(n)
          : (a = a.filter(function (e) {
              return e !== n;
            })),
        (a = a.filter(function (e) {
          return e !== "";
        })),
        a.length > 0
          ? o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.promotional_metadata.coupon_codes.ad_creative_manual_coupon_codes.set(
                r("immutable").List(a),
              ),
            )(e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.promotional_metadata.coupon_codes.ad_creative_manual_coupon_codes.delete(
              e,
            )
      );
    }
    function _(e, t, n) {
      var a,
        i =
          ((a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.promotional_metadata.coupon_codes.detected_from_merchant_website.get(
            e,
          )) == null
            ? void 0
            : a.toArray()) || [];
      return (
        t && n !== ""
          ? i.push(n)
          : (i = i.filter(function (e) {
              return e !== n;
            })),
        (i = g(
          i.filter(function (e) {
            return e !== "";
          }),
        )),
        i.length > 0
          ? o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.promotional_metadata.coupon_codes.detected_from_merchant_website.set(
                r("immutable").List(i),
              ),
            )(e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.promotional_metadata.coupon_codes.detected_from_merchant_website.delete(
              e,
            )
      );
    }
    function f(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .promotional_metadata.coupon_codes.ad_creative_primary_text.delete,
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .promotional_metadata.coupon_codes.ad_creative_headline.delete,
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .promotional_metadata.coupon_codes.ad_creative_description.delete,
      )(e);
    }
    function g(e) {
      return Array.from(new Set(e));
    }
    ((l.clearLLMSources = s),
      (l.logEvent = c),
      (l.updateShopifyPromoCodes = d),
      (l.updateShopifyManualCouponCodesV2 = p),
      (l.updateMerchantWebsiteCouponCodes = _),
      (l.clearAdContentCouponCodes = f));
  },
  98,
);
