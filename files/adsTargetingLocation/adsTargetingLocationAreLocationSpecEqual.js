__d(
  "adsTargetingLocationAreLocationSpecEqual",
  [
    "LocationConstants",
    "adsTargetingLocationGetKeyFromCoordinates",
    "adsTargetingLocationGetMultiCityCustomLocationKey",
    "adsTargetingLocationIsMultiCityCustomLocation",
    "areEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      if (t === n) return !0;
      var a = {},
        i = {},
        l = o("LocationConstants").locationTypesWithSource;
      return (
        l.forEach(function (e) {
          ((a[e] = {}), (i[e] = {}));
        }),
        l.every(function (l) {
          switch (l) {
            case o("LocationConstants").LOCATION_EXPANSION:
              var s = t[l] || {},
                u = n[l] || {};
              return (
                (s == null ? void 0 : s.allowed) ===
                  (u == null ? void 0 : u.allowed) &&
                (s == null ? void 0 : s.intent) ===
                  (u == null ? void 0 : u.intent)
              );
            case "location_types":
              var c = t[l] || [],
                d = n[l] || [];
              return (
                c.forEach(function (e) {
                  return (a[l][e] = !0);
                }),
                d.forEach(function (e) {
                  return (i[l][e] = !0);
                }),
                !Object.keys(a[l]).length ||
                  !Object.keys(i[l]).length ||
                  (e || (e = r("areEqual")))(a[l], i[l])
              );
            case o("LocationConstants").COUNTRY_GROUPS:
              return (
                (t[l] || []).forEach(function (e) {
                  return (a[l][e] = !0);
                }),
                (n[l] || []).forEach(function (e) {
                  return (i[l][e] = !0);
                }),
                (e || (e = r("areEqual")))(a[l], i[l])
              );
            case o("LocationConstants").COUNTRIES:
              var m = t[l] || [],
                p = n[l] || [];
              return (
                m.forEach(function (e) {
                  return (a[l][e] = !0);
                }),
                p.forEach(function (e) {
                  return (i[l][e] = !0);
                }),
                (e || (e = r("areEqual")))(a[l], i[l])
              );
            case o("LocationConstants").REGIONS:
            case o("LocationConstants").GEO_MARKETS:
            case o("LocationConstants").LARGE_GEO_AREAS:
            case o("LocationConstants").MEDIUM_GEO_AREAS:
            case o("LocationConstants").SMALL_GEO_AREAS:
            case o("LocationConstants").METRO_AREAS:
            case o("LocationConstants").SUBCITIES:
            case o("LocationConstants").NEIGHBORHOODS:
            case o("LocationConstants").SUBNEIGHBORHOODS:
            case o("LocationConstants").ELECTORAL_DISTRICTS:
            case o("LocationConstants").POLITICAL_DISTRICTS:
            case o("LocationConstants").LOCATION_CLUSTER_IDS:
            case o("LocationConstants").ZIPS:
              var _ = t[l] || [],
                f = n[l] || [];
              return (
                _.forEach(function (e) {
                  return (a[l][e.key] = !0);
                }),
                f.forEach(function (e) {
                  return (i[l][e.key] = !0);
                }),
                (e || (e = r("areEqual")))(a[l], i[l])
              );
            case o("LocationConstants").CITIES:
              var g = t[l] || [],
                h = n[l] || [];
              return (
                g.forEach(function (e) {
                  a[l][e.key] = [e.radius || 0, e.distance_unit];
                }),
                h.forEach(function (e) {
                  i[l][e.key] = [e.radius || 0, e.distance_unit];
                }),
                (e || (e = r("areEqual")))(a[l], i[l])
              );
            case o("LocationConstants").PLACES:
              var y = t[l] || [],
                C = n[l] || [];
              return (
                y.forEach(function (e) {
                  a[l][e.key] = [e.radius || 0, e.distance_unit];
                }),
                C.forEach(function (e) {
                  i[l][e.key] = [e.radius || 0, e.distance_unit];
                }),
                (e || (e = r("areEqual")))(a[l], i[l])
              );
            case o("LocationConstants").CUSTOM_LOCATIONS:
              var b = t[l] || [],
                v = n[l] || [];
              return (
                b.forEach(function (e) {
                  var t = r("adsTargetingLocationIsMultiCityCustomLocation")(e)
                    ? r("adsTargetingLocationGetMultiCityCustomLocationKey")(e)
                    : "";
                  if (t === "" && e.latitude != null && e.longitude != null) {
                    var n = e.latitude,
                      o = e.longitude;
                    t = r("adsTargetingLocationGetKeyFromCoordinates")(
                      Math.round(n * 1e3),
                      Math.round(o * 1e3),
                    );
                  }
                  a[l][t] = [
                    e.radius,
                    e.distance_unit,
                    e.min_population,
                    e.max_population,
                  ];
                }),
                v.forEach(function (e) {
                  var t = r("adsTargetingLocationIsMultiCityCustomLocation")(e)
                    ? r("adsTargetingLocationGetMultiCityCustomLocationKey")(e)
                    : "";
                  if (t === "" && e.latitude != null && e.longitude != null) {
                    var n = e.latitude,
                      o = e.longitude;
                    t = r("adsTargetingLocationGetKeyFromCoordinates")(
                      Math.round(n * 1e3),
                      Math.round(o * 1e3),
                    );
                  }
                  i[l][t] = [
                    e.radius,
                    e.distance_unit,
                    e.min_population,
                    e.max_population,
                  ];
                }),
                (e || (e = r("areEqual")))(a[l], i[l])
              );
          }
        })
      );
    }
    l.default = s;
  },
  98,
);
