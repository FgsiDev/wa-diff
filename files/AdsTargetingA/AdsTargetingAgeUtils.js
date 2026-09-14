__d(
  "AdsTargetingAgeUtils",
  [
    "AdsTargetingConstants",
    "adsCommonTargetingGetDefaultCountry",
    "adsTargetingGetDefaultTargetingSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a = t == null || (n = t.audience_controls) == null ? void 0 : n.age_min;
      return a != null &&
        a !== o("AdsTargetingConstants").DEFAULT_MIN_SELECTABLE_AGE
        ? a
        : o("adsTargetingGetDefaultTargetingSpec").getCountryMinAge(
            r("adsCommonTargetingGetDefaultCountry")(e),
          );
    }
    function s(e, t) {
      return t != null && e < t;
    }
    ((l.getDefaultMinAge = e), (l.isBelowAgeLimit = s));
  },
  98,
);
