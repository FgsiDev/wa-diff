__d(
  "AdsTargetingCountryUtils",
  [
    "AdsCreateMultiCountryLookalikeConfig.experimental",
    "AdsLocationHasTooManyCountriesDataAction",
    "FBLogger",
    "LocationConstants",
    "StrSet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    r(
      "AdsCreateMultiCountryLookalikeConfig.experimental",
    ).countryGroupsMetadata.forEach(function (t) {
      e[t.id] = t;
    });
    function s(e) {
      !e.country &&
        !e.country_code &&
        r("FBLogger")("ads").mustfix(
          "The geo location objects you passed in does not contain country or country_code field. You are using getAdsTargetingUniqueCountries the wrong way. Please fix ASAP",
        );
    }
    function u(t, n) {
      n === void 0 && (n = !0);
      var r = new Set();
      return (
        o("LocationConstants").locationTypes.forEach(function (a) {
          var i = t[a] || {};
          a === o("LocationConstants").COUNTRIES
            ? Object.keys(i).forEach(function (e) {
                var t = typeof i[e] == "string" ? i[e] : e;
                r.add(t);
              })
            : a === o("LocationConstants").COUNTRY_GROUPS
              ? Object.keys(i).forEach(function (e) {
                  var t = i[e],
                    n = t.country_codes || [];
                  n.forEach(function (e) {
                    return r.add(e);
                  });
                })
              : a === o("LocationConstants").CUSTOM_LOCATIONS
                ? Object.keys(i).forEach(function (t) {
                    var a = i[t];
                    if (
                      a.custom_type ===
                      o("LocationConstants").CUSTOM_TYPE_MULTI_CITY
                    )
                      if (a.country_group) {
                        var l = e[a.country_group]
                          ? e[a.country_group].countries
                          : [];
                        l.forEach(function (e) {
                          return r.add(e);
                        });
                      } else a.country_code && r.add(a.country_code);
                    else {
                      n && s(a);
                      var u = a.country || a.country_code;
                      u && r.add(u);
                    }
                  })
                : Object.keys(i).forEach(function (e) {
                    var t = i[e];
                    n && s(t);
                    var o = t.country || t.country_code;
                    o && r.add(o);
                  });
        }),
        Array.from(r).sort()
      );
    }
    function c(e, t, n) {
      return new (r("StrSet"))(u(e, !1).concat(u(t, !1)).concat(u(n, !1)));
    }
    function d(e, t, n) {
      var r = c(e, t, n);
      return r.count() > o("LocationConstants").MAX_COUNTRIES;
    }
    function m(e) {
      r("AdsLocationHasTooManyCountriesDataAction").dispatch(
        { hasTooManyCountries: !0, ignoredLocations: e },
        { line: "133", module: "AdsTargetingCountryUtils.js", moduleID: i.id },
      );
    }
    ((l.getUniqueCountriesSorted = u),
      (l.getCountries = c),
      (l.exceedsLimit = d),
      (l.dispatchHasTooManyCountriesAction = m));
  },
  98,
);
