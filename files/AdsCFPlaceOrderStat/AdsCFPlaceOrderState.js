__d(
  "AdsCFPlaceOrderState",
  ["AdsCFPlaceOrderStatus", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Record({
        fragmentStatuses: r("immutable").Map(),
        isAccountInfoCompleted: !1,
        isCheckoutPaymentInfoCompleted: !1,
        isLowBalanceFlowCompleted: !1,
        isPaymentInfoCompleted: !1,
        isPlaceOrderClicked: !1,
        isReviewAdClicked: !1,
        isTaxInfoCompleted: !1,
        placeOrderMode: null,
        simplifiedVariant: null,
        status: r("AdsCFPlaceOrderStatus").INITIAL,
      }),
      s = e;
    l.default = s;
  },
  98,
);
