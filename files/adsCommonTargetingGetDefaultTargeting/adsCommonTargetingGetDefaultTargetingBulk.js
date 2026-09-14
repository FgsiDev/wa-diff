__d(
  "adsCommonTargetingGetDefaultTargetingBulk",
  ["AdsMixedValue", "AdsUniformValue", "adsCommonTargetingGetDefaultTargeting"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i) {
      return t instanceof r("AdsUniformValue") &&
        n &&
        n instanceof r("AdsUniformValue")
        ? r("adsCommonTargetingGetDefaultTargeting")(e, a, o, i)
        : t instanceof r("AdsMixedValue")
          ? { geo_locations: {} }
          : r("adsCommonTargetingGetDefaultTargeting")(e, a, void 0, i);
    }
    l.default = e;
  },
  98,
);
