__d(
  "adsMgmtCurrentNavigationEvent",
  ["AdsInsightsTableEventStoreUtil", "adsPENavStateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("adsPENavStateSelector")().section;
      if (e === "CREATIVES") {
        var t;
        return babelHelpers.extends(
          {},
          r("AdsInsightsTableEventStoreUtil").getCurrentNavigationEventData(),
          ((t = {}), (t.to_section = e), t),
        );
      } else
        return babelHelpers.extends(
          {},
          r("AdsInsightsTableEventStoreUtil").getCurrentNavigationEventData(),
        );
    }
    l.default = e;
  },
  98,
);
