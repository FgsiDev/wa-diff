__d(
  "archivedCMsSelector",
  [
    "adsCreateSelector",
    "adsReportBuilderAllCustomMetricsSelector",
    "archivedCMsSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsReportBuilderAllCustomMetricsSelector")],
        function (t) {
          var e = t.getValue(),
            n = e != null ? Array.from(e.values()) : null;
          return o("archivedCMsSelectorUtils").archivedCMs(n);
        },
        { name: i.id + ".archivedCMsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
