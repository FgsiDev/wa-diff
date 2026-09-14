__d(
  "AdsUEditorAdgroupSetShopifyPromoCodeMerchantWebsiteCouponCodeReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetShopifyPromoCodeMerchantWebsiteCouponCodeActionFlux",
    "AdsUEditorAdgroupShopifyPromoCodeAdMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              r = t.isAdd,
              a = t.merchantWebsiteCode;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return o(
                "AdsUEditorAdgroupShopifyPromoCodeAdMutators",
              ).updateMerchantWebsiteCouponCodes(e, r, a);
            });
          },
          r(
            "AdsUEditorAdgroupSetShopifyPromoCodeMerchantWebsiteCouponCodeActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
