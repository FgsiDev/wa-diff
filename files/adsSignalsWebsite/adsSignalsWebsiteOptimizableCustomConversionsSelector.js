__d(
  "adsSignalsWebsiteOptimizableCustomConversionsSelector",
  [
    "AdsAccountStore",
    "LoadObject",
    "SignalsWebsiteOptimizedCustomConversionsDataProvider",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r(
        "SignalsWebsiteOptimizedCustomConversionsDataProvider",
      ).toFluxSelector(),
      s = r("adsCreateSelector")(
        [e, r("AdsAccountStore").getSelectedAccountID],
        function (t, n) {
          return n == null
            ? r("LoadObject").withValue([], { creatorModuleID: i.id })
            : t.get(n);
        },
        { name: i.id + ".selector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
