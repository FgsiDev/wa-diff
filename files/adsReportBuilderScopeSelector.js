__d(
  "adsReportBuilderScopeSelector",
  ["adsCreateSelector", "adsPENavStateSelector", "adsReportBuilderScopeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsPENavStateSelector")],
        function (t) {
          return o("adsReportBuilderScopeUtils").getReportBuilderScope(
            t.section,
          );
        },
        { name: i.id + ".adsReportBuilderScopeSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
