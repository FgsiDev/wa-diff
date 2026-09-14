__d(
  "AdsInsightsExportErrorsDataActionLoggerPlugin",
  ["adsMgmtCurrentNavigationEvent", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = t.requestTime != null ? t.requestTime * 1e3 : void 0,
            n = babelHelpers.extends(
              {
                action_type: t.actionType,
                export_format: t.data.export.format,
                export_include_deleted: t.data.export.includeDeleted,
                export_include_summary: t.data.export.includeSummary,
                scenario_duration: e,
                to_uri: t.data.uri,
              },
              r("adsMgmtCurrentNavigationEvent")(),
              { current_report_id: t.data.export.id },
            );
          r("adsMgmtLogger")(
            "ads_insights_export_error",
            babelHelpers.extends({}, n, t.logData),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
