__d(
  "adsTargetingLocationGroupByCountry",
  ["LocationConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = {};
      return (
        o("LocationConstants").locationTypes.forEach(function (r) {
          var a = "",
            i = e[r] != null ? Array.from(e[r]) : [],
            l = t[r] != null ? Array.from(t[r]) : [],
            s = i.length;
          i.concat(l).forEach(function (e, t) {
            r === o("LocationConstants").COUNTRIES
              ? ((a = String(e)), (e = { key: a, name: a }))
              : e != null &&
                typeof e == "object" &&
                (a =
                  typeof e.country == "string" || typeof e.country == "number"
                    ? e.country
                    : typeof e.country_code == "string" ||
                        typeof e.country_code == "number"
                      ? e.country_code
                      : "");
            var i = babelHelpers.extends({ type: r, included: t < s }, e);
            n[a] ? n[a].push(i) : (n[a] = [i]);
          });
        }),
        n
      );
    }
    l.default = e;
  },
  98,
);
