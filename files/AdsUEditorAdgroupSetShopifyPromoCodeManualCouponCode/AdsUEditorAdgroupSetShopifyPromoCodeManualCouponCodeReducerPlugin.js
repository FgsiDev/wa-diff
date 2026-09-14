__d(
  "AdsUEditorAdgroupSetShopifyPromoCodeManualCouponCodeReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetShopifyPromoCodeManualCouponCodeActionFlux",
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
              ).updateShopifyPromoCodes(e, r, a);
            });
          },
          r("AdsUEditorAdgroupSetShopifyPromoCodeManualCouponCodeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
