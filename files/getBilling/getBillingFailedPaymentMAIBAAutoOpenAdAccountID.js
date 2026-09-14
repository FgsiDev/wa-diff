__d(
  "getBillingFailedPaymentMAIBAAutoOpenAdAccountID",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.shouldEvaluate
        ? e.platform === "react-native"
          ? e.resolvedAdAccountID !== ""
            ? e.resolvedAdAccountID
            : null
          : e.platform !== "desktop"
            ? null
            : e.canonicalLegacyAdAccountID != null &&
                e.canonicalLegacyAdAccountID !== ""
              ? e.canonicalLegacyAdAccountID
              : null
        : null;
    }
    i.default = e;
  },
  66,
);
