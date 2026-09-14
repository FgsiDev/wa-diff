__d(
  "AdsRelatedMediaGroupingUtils",
  ["AdsObjectTypeUtils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !1),
        r("gkx")("12686")
          ? !0
          : e
            ? r("qex")._("2352") === !0
            : r("qex")._("2353") === !0
      );
    }
    function s() {
      return r("qex")._("810") === !0;
    }
    function u(t, n) {
      return (n === void 0 && (n = !1), t && e(n));
    }
    function c(e, t, n) {
      return (
        n === void 0 && (n = !1),
        !o("AdsObjectTypeUtils").isDynamicProductAd(e) && u(t, n)
      );
    }
    function d() {
      e();
    }
    function m() {
      return r("gkx")("7919");
    }
    ((l.isRelatedMediaGroupingQEEnabled = e),
      (l.isRelatedMediaGroupingUpdatedUXEnabled = s),
      (l.isRelatedMediaGroupingEnabledForAdgroup = c),
      (l.logRelatedMediaGroupingExposure = d),
      (l.isInRelatedMediaGroupingExperiment = m));
  },
  98,
);
