__d(
  "adsTargetingGetDefaultTargetingSpec",
  [
    "AdsProductGrowthH2Round1HbtExposure",
    "AdsTargetingRelaxationFactory",
    "AdsValidationConsts",
    "AdsYouthAdsAgeLimitEligibility",
    "AdsYouthAdsIndonesia18MinAgeUtils",
    "adsCommonTargetingGetDefaultCountryByBusinessCountryCode",
    "adsCommonTargetingLogAlternativeCountryComparison",
    "gkx",
    "qex",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
      "adsCommonTargetingGetDefaultGeoLocationByPastPublish",
    ).__setRef("adsTargetingGetDefaultTargetingSpec");
    function s(t, n, a, i, l) {
      var s,
        c = String(t.id);
      c.startsWith("act_") && (c = c.substring(4));
      var d = r("adsCommonTargetingGetDefaultCountryByBusinessCountryCode")(n);
      l != null
        ? r("adsCommonTargetingLogAlternativeCountryComparison")(c, l, d, n)
        : e.onReady(function (e) {
            e(c, d, n);
          });
      var m =
          Object.keys(i).length === 0 ||
          (i == null || (s = i.interest_expansion) == null
            ? void 0
            : s.is_enabled),
        p = o("AdsTargetingRelaxationFactory").AdsTargetingRelaxationFactory({
          objective: a,
        }),
        _ = m ? p.getTargetingOptimizationFieldValue() : "none",
        f = [d];
      if (l != null && l.length > 0) {
        var g = l.length > 1 || (l.length === 1 && l[0] !== d),
          h = a === "OUTCOME_ENGAGEMENT",
          y = a === "OUTCOME_SALES";
        if (g && (h || y)) {
          var C = r("qex")._("1724") === !0,
            b = r("gkx")("17632") === !0;
          (o(
            "AdsProductGrowthH2Round1HbtExposure",
          ).logProductGrowthH2Round1HbtExposure("geo_defaulting", c, b, C),
            (C || b) && (f = l));
        }
      }
      var v = Math.max.apply(
        Math,
        f.map(function (e) {
          return u(e);
        }),
      );
      return {
        age_min: v,
        age_max: r("AdsValidationConsts").maxAge,
        geo_locations: {
          countries: [].concat(f),
          location_types: ["home", "recent", "frequently_in"],
        },
        targeting_optimization: _,
      };
    }
    function u(e) {
      var t;
      return e === o("AdsYouthAdsAgeLimitEligibility").INDONESIA_COUNTRY_CODE &&
        o("AdsYouthAdsIndonesia18MinAgeUtils").shouldEnable18MinAgeInIndonesia()
        ? r("AdsValidationConsts").minAgeDefault
        : (t = r("AdsValidationConsts").nonDefaultMinAgeByCountryCode[e]) !=
            null
          ? t
          : r("AdsValidationConsts").minAgeDefault;
    }
    function c(e) {
      var t,
        n = r("AdsValidationConsts").minAgeDefault,
        o = e == null || (t = e.geo_locations) == null ? void 0 : t.countries;
      return (
        o != null &&
          !o.isEmpty() &&
          (n = o.reduce(function (e, t) {
            var n = u(t);
            return Math.max(e, n);
          }, n)),
        n
      );
    }
    ((l.adsTargetingGetDefaultTargetingSpec = s),
      (l.getCountryMinAge = u),
      (l.getMinLegallyViableAgeForTargetingCountries = c));
  },
  98,
);
