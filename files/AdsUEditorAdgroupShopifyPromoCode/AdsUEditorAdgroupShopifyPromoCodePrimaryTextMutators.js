__d(
  "AdsUEditorAdgroupShopifyPromoCodePrimaryTextMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "adsUEditorAdgroupShopifyPromoCodeUtilGetCouponCode",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
        "adsUEditorAdgroupShopifyPromoCodeUtilGetCouponCode",
      ).getCouponCodeFromText(e);
      return n != null && n.length > 0
        ? o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.promotional_metadata.allowed_coupon_code_sources.set(
              r("immutable").List(["AD_CREATIVE_PRIMARY_TEXT"]),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.promotional_metadata.manual_coupon_codes.set(
              r("immutable").List([n]),
            ),
          )(t)
        : o("AdsAssetFeedUtils").removeFieldFromAssetFeedSpec(
            t,
            "promotional_metadata",
          );
    }
    l.mutateShopifyPromoCodeManualCouponCodesDataFromPrimaryText = e;
  },
  98,
);
