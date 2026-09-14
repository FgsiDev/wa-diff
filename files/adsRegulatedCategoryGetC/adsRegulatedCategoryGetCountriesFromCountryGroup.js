__d(
  "adsRegulatedCategoryGetCountriesFromCountryGroup",
  [
    "AdsCountriesConfig",
    "AdsCreateMultiCountryLookalikeConfig.experimental",
    "ISOCountryCode",
    "enumUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    r(
      "AdsCreateMultiCountryLookalikeConfig.experimental",
    ).countryGroupsMetadata.forEach(function (t) {
      e[t.id] = t;
    });
    function s(t) {
      var n = e[t] ? e[t].countries : [];
      return n
        .map(function (e) {
          return o("enumUtils").coerceFromKey(e, r("ISOCountryCode"));
        })
        .filter(Boolean)
        .sort(function (e, t) {
          return o("AdsCountriesConfig").countries[e].localeCompare(
            o("AdsCountriesConfig").countries[t],
          );
        });
    }
    l.adsRegulatedCategoryGetCountriesFromCountryGroup = s;
  },
  98,
);
