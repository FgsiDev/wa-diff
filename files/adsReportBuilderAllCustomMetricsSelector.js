__d(
  "adsReportBuilderAllCustomMetricsSelector",
  [
    "AdsReportBuilderCustomMetricKey",
    "LoadObject",
    "adsCreateSelector",
    "adsReportBuilderCustomMetricListThunkSelector",
    "adsReportBuilderCustomMetricScopeInfoSelector",
    "adsReportBuilderCustomMetricStatThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsReportBuilderCustomMetricScopeInfoSelector"),
          r("adsReportBuilderCustomMetricListThunkSelector"),
          r("adsReportBuilderCustomMetricStatThunkSelector"),
        ],
        function (t, n, o) {
          if (t.hasValue()) {
            var e = t.getValueEnforcing(),
              a = e.id,
              l = e.scopeType,
              s = new (r("AdsReportBuilderCustomMetricKey"))({
                scopeType: l,
                scopeID: a,
              });
            return o(n(s));
          }
          return r("LoadObject").empty({ creatorModuleID: i.id });
        },
        { name: i.id + ".adsReportBuilderAllCustomMetricsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
