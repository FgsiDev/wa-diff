__d(
  "adsMgmtColumnToDescriptor",
  ["memoizeStringOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e = Array(n).fill("(\\w+)").join(",");
        return new RegExp("^" + t + "\\((.+)," + e + "\\)$");
      },
      s = e("forAttributionWindow", 1),
      u = e("forAttributionWindowType", 1),
      c = e("forComparisonColumnType", 1),
      d = e("forObjectType", 1),
      m = e("forBudgetForecast", 1),
      p = function (t) {
        var e = "";
        return (e = s.exec(t))
          ? { base: p(e[1]), attributionWindow: e[2] }
          : (e = u.exec(t))
            ? { base: p(e[1]), attributionWindowType: e[2] }
            : (e = d.exec(t))
              ? { base: p(e[1]), objectType: e[2] }
              : (e = c.exec(t))
                ? { base: p(e[1]), comparisonColumnType: e[2] }
                : (e = m.exec(t))
                  ? { base: p(e[1]), budgetForecastType: e[2] }
                  : { columnID: t };
      },
      _ = r("memoizeStringOnly")(p);
    l.default = _;
  },
  98,
);
