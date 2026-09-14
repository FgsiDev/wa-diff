__d(
  "CatalogBasedLocationConstants",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "everyone_in",
      s = "traveling_in";
    function u() {
      return s;
    }
    function c() {
      return r("immutable").List(["US"]);
    }
    function d() {
      return r("immutable").List(["worldwide"]);
    }
    function m() {
      return r("immutable").List(["home", "recent"]);
    }
    ((l.TYPE_EVERYONE_IN = e),
      (l.TYPE_TRAVELING_IN = s),
      (l.getDefaultLocationType = u),
      (l.getInDestinationGeoLocationCountries = c),
      (l.getInDestinationGeoLocationCountryGroups = d),
      (l.getInDestinationGeoLocationTypes = m));
  },
  98,
);
