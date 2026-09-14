__d(
  "AdsConnectedSourcesCatalogEnrollStatusUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e == null ? void 0 : e.catalog,
        o =
          (n == null ? void 0 : n.productData) != null ||
          (n == null ? void 0 : n.productSetID) != null,
        a =
          (n == null ? void 0 : n.isLLMStrategySelected) === !0 ||
          (e == null || (t = e.strategy) == null
            ? void 0
            : t.selectedStrategyID) != null;
      return (
        ((n == null ? void 0 : n.enrollStatus) === "OPT_IN" && o) ||
        ((n == null ? void 0 : n.isCarouselPEOptInWithoutCatalogConsent) ===
          !0 &&
          r("gkx")("22153")) ||
        ((n == null ? void 0 : n.isProductExtensionOptOut) !== !0 &&
          (a || ((n == null ? void 0 : n.enrollStatus) === "OPT_IN" && o)))
      );
    }
    function s(e) {
      var t = e == null ? void 0 : e.catalog;
      return (
        (t == null ? void 0 : t.enrollStatus) === "OPT_IN" &&
        (t == null ? void 0 : t.productSetID) != null &&
        (t == null ? void 0 : t.enrollActionType) === "DEFAULT"
      );
    }
    ((l.getCatalogEnrollStatus = e), (l.isCatalogDefaultedOn = s));
  },
  98,
);
