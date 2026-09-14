__d(
  "adsCommonTargetingAlternativeCountriesCache",
  [
    "AdsDataAtom",
    "adsCommonTargetingGetDefaultCountryByBusinessCountryCode",
    "adsCommonTargetingGetDefaultGeoLocationByPastPublish",
    "adsTargetingGetIsEmbargoedCountry",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = null;
    function c(t, n, o) {
      u !== t &&
        ((s = null),
        (u = t),
        r("adsCommonTargetingGetDefaultGeoLocationByPastPublish")(t, n, o).then(
          function (n) {
            return (
              u === t &&
                ((s = n),
                n != null &&
                  n.length > 0 &&
                  (e || (e = r("AdsDataAtom"))).dispatchAction({
                    alternativeCountries: n,
                    type: "ADS_TARGETING_ALTERNATIVE_COUNTRIES_LOADED",
                  })),
              n
            );
          },
          function () {
            return null;
          },
        ));
    }
    function d() {
      return s;
    }
    function m(e) {
      var t = String(e.id);
      t.startsWith("act_") && (t = t.substring(4));
      var n = e.business_country_code;
      r("adsTargetingGetIsEmbargoedCountry")(n) && (n = null);
      var o = r("adsCommonTargetingGetDefaultCountryByBusinessCountryCode")(n);
      c(t, o, e.business_country_code);
    }
    function p() {
      ((s = null), (u = null));
    }
    ((l.fetchAlternativeCountries = c),
      (l.getAlternativeCountries = d),
      (l.fetchAlternativeCountriesForAccount = m),
      (l.resetForTesting = p));
  },
  98,
);
