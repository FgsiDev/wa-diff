__d(
  "AdsUEditorCampaignSAIPLocationUtils",
  ["ShopsAdsStagingSupportedCountriesSV.experimental", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["US"],
      s = ["US"];
    function u() {
      return c()
        ? r("ShopsAdsStagingSupportedCountriesSV.experimental")
            .supportedCountries
        : e;
    }
    function c() {
      return r("gkx")("5471");
    }
    function d(e) {
      return e != null && u().includes(e);
    }
    function m(e) {
      return _(e, d);
    }
    function p(e) {
      return _(e, function (e) {
        return e != null && s.includes(e);
      });
    }
    function _(e, t) {
      var n;
      if (e == null) return !1;
      if (
        (n = e.countries) != null &&
        n.some(function (e) {
          return t(e);
        })
      )
        return !0;
      var r = [
        e.cities,
        e.electoral_districts,
        e.geo_markets,
        e.places,
        e.political_districts,
        e.large_geo_areas,
        e.medium_geo_areas,
        e.small_geo_areas,
        e.metro_areas,
        e.subcities,
        e.neighborhoods,
        e.subneighborhoods,
        e.regions,
        e.zips,
      ];
      for (var o of r)
        if (
          o != null &&
          o.some(function (e) {
            return t(e.country);
          })
        )
          return !0;
      for (var a of (i = e.custom_locations) != null ? i : []) {
        var i;
        if (t(a.country)) return !0;
      }
      return !1;
    }
    function f(e) {
      var t, n;
      if (e == null) return [];
      var r = [];
      r.push.apply(
        r,
        (t = (n = e.countries) == null ? void 0 : n.filter(Boolean)) != null
          ? t
          : [],
      );
      var o = [
        e.cities,
        e.electoral_districts,
        e.geo_markets,
        e.places,
        e.political_districts,
        e.large_geo_areas,
        e.medium_geo_areas,
        e.small_geo_areas,
        e.metro_areas,
        e.subcities,
        e.neighborhoods,
        e.subneighborhoods,
        e.regions,
        e.zips,
        e.custom_locations,
      ];
      return (
        r.push.apply(
          r,
          o
            .flatMap(function (e) {
              return e == null
                ? void 0
                : e.map(function (e) {
                    return e.country;
                  });
            })
            .filter(Boolean),
        ),
        Array.from(new Set(r))
      );
    }
    ((l.isEligibleForSAIPi18nExpansion = c),
      (l.isCountrySAIPSupported = d),
      (l.isLocationSAIPSupported = m),
      (l.isLocationShopsAdsValueOptimizationSupported = p),
      (l.getCountriesFromGeoLocations = f));
  },
  98,
);
