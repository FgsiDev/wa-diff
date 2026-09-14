__d(
  "AdsUEditorAdgroupSetShopifyPromoCodeManualCouponCodeV2ReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetShopifyPromoCodeManualCouponCodeV2ActionFlux",
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
              a = t.manualCouponCode;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return o(
                "AdsUEditorAdgroupShopifyPromoCodeAdMutators",
              ).updateShopifyManualCouponCodesV2(e, r, a);
            });
          },
          r("AdsUEditorAdgroupSetShopifyPromoCodeManualCouponCodeV2ActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
