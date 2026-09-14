__d(
  "adsCommonTargetingGetDefaultTargeting",
  [
    "AdsCommonTargetingDefaultConstants",
    "AdsTargetingConstants",
    "AdsYouthAdsAgeLimitEligibility",
    "adsCommonTargetingGetDefaultCountry",
    "adsTargetingGetDefaultTargetingSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      a === void 0 && (a = !1);
      var i = r("adsCommonTargetingGetDefaultCountry")(e),
        l = o("AdsCommonTargetingDefaultConstants").DEFAULT_MIN_AGE;
      if (n === !0) {
        l = o("adsTargetingGetDefaultTargetingSpec").getCountryMinAge(i);
        var s =
          t == null
            ? void 0
            : t.map(function (e) {
                return o("AdsYouthAdsAgeLimitEligibility").getYouthAgeCutoff(e);
              });
        s && (l = Math.max.apply(Math, s.concat([l])));
      }
      var u = o("AdsTargetingConstants").getDefaultTargetingSpec(i, l);
      return (a === !0 && (u.user_age_unknown = !0), u);
    }
    l.default = e;
  },
  98,
);
