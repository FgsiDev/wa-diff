__d(
  "AdsCountries",
  ["AdsCountriesConfig", "ObjectFlip", "objectKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("ObjectFlip")(r("AdsCountriesConfig").countries);
    function s(e) {
      var t = e.toUpperCase();
      return r("AdsCountriesConfig").countriesWithCities.indexOf(t) !== -1;
    }
    function u(e) {
      var t = e.toUpperCase();
      return r("AdsCountriesConfig").countriesWithRegions.indexOf(t) !== -1;
    }
    function c(e) {
      return r("AdsCountriesConfig").countriesToTerritories[e.toUpperCase()];
    }
    var d = r("objectKeys")(e || {})
      .sort()
      .map(function (t) {
        return { code: e[t], name: t };
      });
    ((l.countries = r("AdsCountriesConfig").countries),
      (l.hasCities = s),
      (l.hasRegions = u),
      (l.getTerritoriesByCountry = c),
      (l.sortedCountries = d));
  },
  98,
);
