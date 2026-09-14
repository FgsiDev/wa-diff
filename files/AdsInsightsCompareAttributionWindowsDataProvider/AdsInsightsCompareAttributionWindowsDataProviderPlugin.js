__d(
  "AdsInsightsCompareAttributionWindowsDataProviderPlugin",
  ["AdsPERouterHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function () {
          var e, t;
          return (e =
            (t = r("AdsPERouterHelper").getRouter()) == null ||
            (t = t.getParams()) == null
              ? void 0
              : t.attribution_windows) != null
            ? e
            : [];
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
