__d(
  "AdsCreativeBadgeLoggingUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      return e == null ||
        (t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.badge_sets) == null
        ? void 0
        : t
            .map(function (e) {
              var t = [];
              return (
                e.payment_options != null && t.push("Payment Options"),
                e.return_policy != null && t.push("Return Policy"),
                e.shipping_policy != null && t.push("Shipping Policy"),
                t
              );
            })
            .toString();
    }
    i.getCreativeBadgeTypesForLogging = e;
  },
  66,
);
