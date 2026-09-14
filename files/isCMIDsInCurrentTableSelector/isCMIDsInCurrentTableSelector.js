__d(
  "isCMIDsInCurrentTableSelector",
  [
    "AdsPEColumnsStore",
    "adsCreateSelector",
    "adsReportBuilderAllCustomMetricsSelector",
    "isCMIDsInCurrentTableSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsPEColumnsStore").getResolvedSelector,
          r("adsReportBuilderAllCustomMetricsSelector"),
        ],
        function (t, n) {
          var e = n.hasValue() ? n.getValueEnforcing() : null,
            r = e != null ? new Map(e.entries()) : null;
          return o("isCMIDsInCurrentTableSelectorUtils").isCMIDsInCurrentTable(
            t.ids,
            r,
          );
        },
        { name: i.id + ".isCMIDsInCurrentTableSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
