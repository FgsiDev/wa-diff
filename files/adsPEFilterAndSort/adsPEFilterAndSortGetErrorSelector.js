__d(
  "adsPEFilterAndSortGetErrorSelector",
  ["AdsPEFilterAndSortProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPEFilterAndSortProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return t.error;
        },
        { name: i.id + ".adsPEFilterAndSortGetErrorSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
