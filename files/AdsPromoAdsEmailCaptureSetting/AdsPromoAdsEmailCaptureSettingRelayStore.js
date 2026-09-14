__d(
  "AdsPromoAdsEmailCaptureSettingRelayStore",
  [
    "AdsPromoAdsEmailCaptureSettingStoreSourceServerQuery.graphql",
    "adsCreateRelayStoreForMigration",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateRelayStoreForMigration")(
        r("AdsPromoAdsEmailCaptureSettingStoreSourceServerQuery.graphql"),
        function (e) {
          return {
            account_id: e.account_id,
            catalog_id: e.catalog_id,
            page_id: e.page_id,
            pixel_id: e.pixel_id,
            product_set_id: e.product_set_id,
          };
        },
        function (e) {
          return e == null
            ? void 0
            : e.xfb_promo_ads_email_capture_config_by_page;
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
