__d(
  "AdsInsightsExportCreateActionLoggerPlugin",
  [
    "AdsInsightsExportCreateActionFlux",
    "adsMgmtCurrentNavigationEvent",
    "adsMgmtLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "ads_insights_export_create",
            babelHelpers.extends(
              {
                action_type: o("AdsInsightsExportCreateActionFlux").actionType,
                export_format: t.data.format,
                export_include_deleted: t.data.includeDeleted,
                export_include_summary: t.data.includeSummary,
              },
              t.logData,
              r("adsMgmtCurrentNavigationEvent")(),
            ),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
