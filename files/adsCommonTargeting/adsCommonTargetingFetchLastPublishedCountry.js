__d(
  "adsCommonTargetingFetchLastPublishedCountry",
  ["AdsGraphAPI", "GraphSort", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "country_groups",
      "regions",
      "cities",
      "zips",
      "custom_locations",
      "places",
      "geo_markets",
      "electoral_districts",
      "political_districts",
      "large_geo_areas",
      "medium_geo_areas",
      "small_geo_areas",
      "metro_areas",
      "subcities",
      "neighborhoods",
      "subneighborhoods",
      "location_cluster_ids",
    ];
    function s(e) {
      return e instanceof Error
        ? e.message
        : typeof e == "string"
          ? e
          : "unknown";
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = t.startsWith("act_") ? t.substring(4) : t,
            l = "updated_time" + r("GraphSort").DESC,
            u,
            c = !0,
            d = "";
          try {
            var m = ["countries"].concat(e).join(",");
            u = yield o("AdsGraphAPI")
              .get(i.id)
              .adaccount(a)
              .edge("adsets")
              .get({
                fields: ["targeting{geo_locations{" + m + "}}"],
                limit: 1,
                sort: l,
              });
          } catch (e) {
            try {
              ((u = yield o("AdsGraphAPI")
                .get(i.id)
                .adaccount(a)
                .edge("adsets")
                .get({
                  fields: ["targeting{geo_locations{countries}}"],
                  limit: 1,
                  sort: l,
                })),
                (c = !1),
                (d = "fallback: " + s(e)));
            } catch (e) {
              return {
                allCountries: [],
                alternativeGranularities: [],
                apiErrorMessage: s(e),
                fetchStatus: "api_error",
                firstCountry: null,
              };
            }
          }
          var p = u.data;
          if (p == null || p.length === 0)
            return {
              allCountries: [],
              alternativeGranularities: [],
              apiErrorMessage: d,
              fetchStatus: "no_adsets",
              firstCountry: null,
            };
          var _ = (n = p[0]) == null ? void 0 : n.targeting;
          if (_ == null)
            return {
              allCountries: [],
              alternativeGranularities: [],
              apiErrorMessage: d,
              fetchStatus: "no_targeting",
              firstCountry: null,
            };
          var f = _.geo_locations;
          if (f == null)
            return {
              allCountries: [],
              alternativeGranularities: [],
              apiErrorMessage: d,
              fetchStatus: "no_geo_locations",
              firstCountry: null,
            };
          var g = [];
          if (c)
            for (var h of e) {
              var y = f[h];
              y != null && y.length > 0 && g.push(h);
            }
          var C = f.countries;
          return C != null && C.length > 0
            ? {
                allCountries: C,
                alternativeGranularities: g,
                apiErrorMessage: d,
                fetchStatus: "success",
                firstCountry: C[0],
              }
            : {
                allCountries: [],
                alternativeGranularities: g,
                apiErrorMessage: d,
                fetchStatus: "no_country_granularity",
                firstCountry: null,
              };
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
