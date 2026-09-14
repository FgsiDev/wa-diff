__d(
  "adsPEFilterAndSortIsLoadingSelector",
  ["AdsPEFilterAndSortProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPEFilterAndSortProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return t.areIDsLoading || t.areCountsLoading;
        },
        { name: i.id + ".adsPEFilterAndSortIsLoadingSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
