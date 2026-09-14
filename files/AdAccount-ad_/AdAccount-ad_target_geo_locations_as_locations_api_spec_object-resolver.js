__d(
  "AdAccount-ad_target_geo_locations_as_locations_api_spec_object-resolver",
  [
    "AdAccountAdTargetGeoLocationsAsLocationsApiSpecObjectResolver.graphql",
    "AdTargetSpecCustomType",
    "AdTargetSpecDistanceUnit",
    "AdsAPITargetGeoLocationTypes",
    "RelayHooks",
    "TypeCoercionUtils",
    "XFBLocationExpansionIntentTypeUtils.facebook",
    "enumUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n(
              "AdAccountAdTargetGeoLocationsAsLocationsApiSpecObjectResolver.graphql",
            )),
        t,
      );
      return c(r);
    }
    function u(e, t) {
      e != null && t(e);
    }
    function c(e) {
      var t, n, a, l, s, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
      if (e == null) return {};
      var E = {},
        k = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (t = e.cities) == null
            ? void 0
            : t.map(function (e) {
                var t;
                return {
                  country: (t =
                    o("TypeCoercionUtils")).coerceEmptyStringToUndefined(
                    e.country,
                  ),
                  distance_unit: t.coerceNonMaybeValue(
                    o("enumUtils").coerceNullable(
                      e.distance_unit,
                      r("AdTargetSpecDistanceUnit"),
                    ),
                    "cities[].distance_unit",
                    i.id,
                  ),
                  key: t.coerceNonMaybeValue(
                    t.coerceMaybeNumberToString(e.key),
                    "cities[].key",
                    i.id,
                  ),
                  name: t.coerceEmptyStringToUndefined(e.name),
                  radius: e.radius,
                  region: t.coerceEmptyStringToUndefined(e.region),
                  region_id: t.coerceNonMaybeValue(
                    t.coerceMaybeNumberToString(e.region_id),
                    "cities[].region_id",
                    i.id,
                  ),
                };
              }),
        );
      u(k, function (e) {
        E.cities = e;
      });
      var I = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (n = e.countries) == null
          ? void 0
          : n.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.country_code,
                "countries[].country_code",
                i.id,
              );
            }),
      );
      u(I, function (e) {
        E.countries = e;
      });
      var T = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e.country_groups,
      );
      u(T, function (e) {
        E.country_groups = e;
      });
      var D = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (a = e.custom_locations) == null
          ? void 0
          : a.map(function (e) {
              var t;
              return {
                address_string: (t =
                  o("TypeCoercionUtils")).coerceEmptyStringToUndefined(
                  e.address_string,
                ),
                country: t.coerceOptionalValue(e.country),
                country_group: t.coerceOptionalValue(e.country_group),
                custom_type: t.coerceOptionalValue(
                  o("enumUtils").coerceFromKey(
                    e.custom_type,
                    r("AdTargetSpecCustomType"),
                  ),
                ),
                distance_unit: t.coerceOptionalValue(
                  o("enumUtils").coerceNullable(
                    e.distance_unit,
                    r("AdTargetSpecDistanceUnit"),
                  ),
                ),
                latitude: t.coerceOptionalValue(e.latitude),
                longitude: t.coerceOptionalValue(e.longitude),
                max_population: t.coerceOptionalValue(e.max_population),
                min_population: t.coerceOptionalValue(e.min_population),
                name: t.coerceEmptyStringToUndefined(e.name),
                primary_city: t.coerceEmptyStringToUndefined(e.primary_city),
                primary_city_id: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.primary_city_id),
                  "custom_locations[].primary_city_id",
                  i.id,
                ),
                radius: t.coerceOptionalValue(e.radius),
                region_id: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.region_id),
                  "custom_locations[].region_id",
                  i.id,
                ),
              };
            }),
      );
      u(D, function (e) {
        E.custom_locations = e;
      });
      var x = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (l = e.electoral_districts) == null
          ? void 0
          : l.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                deprecation_code: t.coerceOptionalValue(e.deprecation_code),
                electoral_district: t.coerceOptionalValue(e.electoral_district),
                key: t.coerceNonMaybeValue(
                  e.key,
                  "electoral_districts[].key",
                  i.id,
                ),
                name: t.coerceOptionalValue(e.name),
              };
            }),
      );
      u(x, function (e) {
        E.electoral_districts = e;
      });
      var $ = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (s =
          (c = e.geo_markets) == null
            ? void 0
            : c.map(function (e) {
                return {
                  country: o("TypeCoercionUtils").coerceOptionalValue(
                    e.country,
                  ),
                  key: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.key,
                    "geo_markets[].key",
                    i.id,
                  ),
                  market_type: o("TypeCoercionUtils").coerceOptionalValue(
                    e == null ? void 0 : e.market_type,
                  ),
                  name: o("TypeCoercionUtils").coerceOptionalValue(e.name),
                };
              })) != null
          ? s
          : [],
      );
      u($, function (e) {
        E.geo_markets = e;
      });
      var P = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (d = e.large_geo_areas) == null
          ? void 0
          : d.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                key: t.coerceNonMaybeValue(
                  e.key,
                  "large_geo_areas[].key",
                  i.id,
                ),
                name: t.coerceOptionalValue(e.name),
                region: t.coerceEmptyStringToUndefined(e.region),
                region_id: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.region_id),
                  "large_geo_areas[].region_id",
                  i.id,
                ),
              };
            }),
      );
      u(P, function (e) {
        E.large_geo_areas = e;
      });
      var N = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (m = e.location_cluster_ids) == null
          ? void 0
          : m.map(function (e) {
              return {
                key: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.key,
                  "location_cluster_ids[].key",
                  i.id,
                ),
              };
            }),
      );
      u(N, function (e) {
        E.location_cluster_ids = e;
      });
      var M = e.location_expansion
        ? {
            allowed: o("TypeCoercionUtils").coerceNonMaybeValue(
              e.location_expansion.allowed,
              "location_expansion.allowed",
              i.id,
            ),
            intent: o("XFBLocationExpansionIntentTypeUtils.facebook").toJSEnum(
              (p = e.location_expansion) == null ? void 0 : p.intent,
            ),
          }
        : void 0;
      u(M, function (e) {
        E.location_expansion = e;
      });
      var w = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (_ = e.location_types) == null
          ? void 0
          : _.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                r("getJSEnumSafe")(r("AdsAPITargetGeoLocationTypes"), e),
                "location_type",
                i.id,
              );
            }),
      );
      u(w, function (e) {
        E.location_types = e;
      });
      var A = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (f = e.medium_geo_areas) == null
          ? void 0
          : f.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                key: t.coerceNonMaybeValue(
                  e.key,
                  "medium_geo_areas[].key",
                  i.id,
                ),
                name: t.coerceOptionalValue(e.name),
                region: t.coerceEmptyStringToUndefined(e.region),
                region_id: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.region_id),
                  "medium_geo_areas[].region_id",
                  i.id,
                ),
              };
            }),
      );
      u(A, function (e) {
        E.medium_geo_areas = e;
      });
      var F = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (g = e.metro_areas) == null
          ? void 0
          : g.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                key: t.coerceNonMaybeValue(e.key, "metro_areas[].key", i.id),
                name: t.coerceOptionalValue(e.name),
                region: t.coerceEmptyStringToUndefined(e.region),
                region_id: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.region_id),
                  "metro_areas[].region_id",
                  i.id,
                ),
              };
            }),
      );
      u(F, function (e) {
        E.metro_areas = e;
      });
      var O = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (h = e.neighborhoods) == null
          ? void 0
          : h.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                key: t.coerceNonMaybeValue(e.key, "neighborhoods[].key", i.id),
                name: t.coerceOptionalValue(e.name),
                region: t.coerceEmptyStringToUndefined(e.region),
                region_id: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.region_id),
                  "neighborhoods[].region_id",
                  i.id,
                ),
              };
            }),
      );
      u(O, function (e) {
        E.neighborhoods = e;
      });
      var B = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (y = e.places) == null
          ? void 0
          : y.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                distance_unit: t.coerceNonMaybeValue(
                  o("enumUtils").coerceNullable(
                    e.distance_unit,
                    r("AdTargetSpecDistanceUnit"),
                  ),
                  "places[].distance_unit",
                  i.id,
                ),
                key: t.coerceNonMaybeValue(e.key, "places[].key", i.id),
                latitude: t.coerceNonMaybeValue(
                  e.latitude,
                  "places[].latitude",
                  i.id,
                ),
                longitude: t.coerceNonMaybeValue(
                  e.longitude,
                  "places[].longitude",
                  i.id,
                ),
                name: t.coerceOptionalValue(e.name),
                primary_city: t.coerceEmptyStringToUndefined(e.primary_city),
                primary_city_id: t.coerceOptionalValue(
                  t.coerceMaybeNumberToString(e.primary_city_id),
                ),
                radius: t.coerceNonMaybeValue(
                  e.radius,
                  "places[].radius",
                  i.id,
                ),
                region_id: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.region_id),
                  "places[].region_id",
                  i.id,
                ),
              };
            }),
      );
      u(B, function (e) {
        E.places = e;
      });
      var W = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (C = e.political_districts) == null
          ? void 0
          : C.map(function (e) {
              return {
                country: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.country,
                  "political_districts[].country",
                  i.id,
                ),
                key: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.key,
                  "political_districts[].key",
                  i.id,
                ),
                name: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.name,
                  "political_districts[].name",
                  i.id,
                ),
                political_district: "",
                region_id: "",
              };
            }),
      );
      u(W, function (e) {
        E.political_districts = e;
      });
      var q = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (b = e.regions) == null
          ? void 0
          : b.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                key: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.key),
                  "regions[].key",
                  i.id,
                ),
                name: t.coerceNonMaybeValue(e.name, "regions[].name", i.id),
              };
            }),
      );
      u(q, function (e) {
        E.regions = e;
      });
      var U = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (v = e.small_geo_areas) == null
          ? void 0
          : v.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                key: t.coerceNonMaybeValue(
                  e.key,
                  "small_geo_areas[].key",
                  i.id,
                ),
                name: t.coerceOptionalValue(e.name),
                region: t.coerceEmptyStringToUndefined(e.region),
                region_id: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.region_id),
                  "small_geo_areas[].region_id",
                  i.id,
                ),
              };
            }),
      );
      u(U, function (e) {
        E.small_geo_areas = e;
      });
      var V = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (S = e.subcities) == null
          ? void 0
          : S.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                key: t.coerceNonMaybeValue(e.key, "subcities[].key", i.id),
                name: t.coerceOptionalValue(e.name),
                region: t.coerceEmptyStringToUndefined(e.region),
                region_id: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.region_id),
                  "subcities[].region_id",
                  i.id,
                ),
              };
            }),
      );
      u(V, function (e) {
        E.subcities = e;
      });
      var H = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (R = e.subneighborhoods) == null
          ? void 0
          : R.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                key: t.coerceNonMaybeValue(
                  e.key,
                  "subneighborhoods[].key",
                  i.id,
                ),
                name: t.coerceOptionalValue(e.name),
                region: t.coerceEmptyStringToUndefined(e.region),
                region_id: t.coerceNonMaybeValue(
                  t.coerceMaybeNumberToString(e.region_id),
                  "subneighborhoods[].region_id",
                  i.id,
                ),
              };
            }),
      );
      u(H, function (e) {
        E.subneighborhoods = e;
      });
      var G = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        (L = e.zips) == null
          ? void 0
          : L.map(function (e) {
              var t;
              return {
                country: (t = o("TypeCoercionUtils")).coerceOptionalValue(
                  e.country,
                ),
                key: t.coerceNonMaybeValue(e.key, "zips[].key", i.id),
                name: t.coerceOptionalValue(e.name),
                primary_city: t.coerceEmptyStringToUndefined(e.primary_city),
                primary_city_id: t.coerceOptionalValue(
                  t.coerceMaybeNumberToString(e.primary_city_id),
                ),
                region_id: t.coerceOptionalValue(
                  t.coerceMaybeNumberToString(e.region_id),
                ),
              };
            }),
      );
      return (
        u(G, function (e) {
          E.zips = e;
        }),
        E
      );
    }
    l.as_location_api_spec_object = s;
  },
  98,
);
