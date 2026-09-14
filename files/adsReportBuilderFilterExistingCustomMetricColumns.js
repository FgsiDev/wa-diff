__d(
  "adsReportBuilderFilterExistingCustomMetricColumns",
  ["adsReportBuilderAllCustomMetricsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("adsReportBuilderAllCustomMetricsSelector")();
      return n.hasValueWithoutError()
        ? e.filter(function (e) {
            var r = t(e);
            return r != null ? n.getValueEnforcing().get(r) != null : !0;
          })
        : e;
    }
    l.default = e;
  },
  98,
);
