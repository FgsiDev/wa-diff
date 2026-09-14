__d(
  "adsPEIsFirstPageSelector",
  ["AdsPENavigationProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPENavigationProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.isFirstPage;
          return e;
        },
        { name: i.id + ".adsPEIsFirstPageSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
