__d(
  "AdsUEditorAdgroupSetShopifyLinkCouponCodeReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetShopifyPromoCodeLinkCouponCodeActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              a = t.linkCouponCode;
            return a === ""
              ? o("AdsMutators").mutateEach(e, n, function (e) {
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.promotional_metadata.coupon_codes.detected_from_merchant_website_url.delete(
                    e,
                  );
                })
              : o("AdsMutators").mutateEach(e, n, function (e) {
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.promotional_metadata.coupon_codes.detected_from_merchant_website_url.set(
                    r("immutable").List([a]),
                    e,
                  );
                });
          },
          r("AdsUEditorAdgroupSetShopifyPromoCodeLinkCouponCodeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
