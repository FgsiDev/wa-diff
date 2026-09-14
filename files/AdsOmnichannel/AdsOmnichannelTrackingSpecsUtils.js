__d(
  "AdsOmnichannelTrackingSpecsUtils",
  ["AdsActionSpecUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("AdsActionSpecUtils").makeMobileAppInstallTrackingSpecs(t);
      return e
        ? o("AdsActionSpecUtils").removeApplicationSpecs(e).concat(n)
        : n;
    }
    function s(e, t) {
      var n = [{ "action.type": "offsite_conversion", fb_pixel: t }];
      return e
        ? o("AdsActionSpecUtils")
            .filterByConstraint(e, { "action.type": "offsite_conversion" }, !0)
            .concat(n)
        : n;
    }
    function u(e) {
      return e
        ? o("AdsActionSpecUtils").filterByConstraint(
            e,
            { "action.type": "offsite_conversion" },
            !0,
          )
        : [];
    }
    function c(t, n) {
      return n != null
        ? e(t, n)
        : t != null
          ? o("AdsActionSpecUtils").removeApplicationSpecs(t)
          : t;
    }
    ((l.addAppTrackingSpecs = e),
      (l.addOffsiteConversionPixelTrackingSpec = s),
      (l.removeOffsiteConversionPixelTrackingSpec = u),
      (l.updateAppTrackingSpecs = c));
  },
  98,
);
