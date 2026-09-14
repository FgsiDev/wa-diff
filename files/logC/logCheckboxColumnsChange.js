__d(
  "logCheckboxColumnsChange",
  ["AdsReportBuilderCheckboxColumnChangesEventSources", "PEAppLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (n)
        switch (t) {
          case r("AdsReportBuilderCheckboxColumnChangesEventSources")
            .DRAGGABLE_SELECTOR_REMOVE:
            r("PEAppLogger").logForAnalytics(
              "user_action",
              "uncheck_breakdown",
              { current_insights_table_breakdowns: e, event_source: t },
            );
            break;
          case r("AdsReportBuilderCheckboxColumnChangesEventSources")
            .DRAGGABLE_SELECTOR_REORDERED:
            r("PEAppLogger").logForAnalytics(
              "user_action",
              "change_checkbox_breakdowns",
              { current_insights_table_breakdowns: e, event_source: t },
            );
            break;
          case r("AdsReportBuilderCheckboxColumnChangesEventSources")
            .TYPEAHEAD_SELECTOR_ADD:
          case r("AdsReportBuilderCheckboxColumnChangesEventSources")
            .CREATE_CUSTOM_COLUMN:
            r("PEAppLogger").logForAnalytics("user_action", "check_breakdown", {
              current_insights_table_breakdowns: e,
              event_source: t,
            });
            break;
        }
      else
        switch (t) {
          case r("AdsReportBuilderCheckboxColumnChangesEventSources")
            .DRAGGABLE_SELECTOR_REMOVE:
            r("PEAppLogger").logForAnalytics("user_action", "uncheck_metric", {
              current_insights_dataviz_metrics: e,
              event_source: t,
            });
            break;
          case r("AdsReportBuilderCheckboxColumnChangesEventSources")
            .DRAGGABLE_SELECTOR_REORDERED:
            r("PEAppLogger").logForAnalytics(
              "user_action",
              "change_checkbox_metrics",
              { current_insights_dataviz_metrics: e, event_source: t },
            );
            break;
          case r("AdsReportBuilderCheckboxColumnChangesEventSources")
            .TYPEAHEAD_SELECTOR_ADD:
          case r("AdsReportBuilderCheckboxColumnChangesEventSources")
            .CREATE_CUSTOM_COLUMN:
            r("PEAppLogger").logForAnalytics("user_action", "check_metric", {
              current_insights_dataviz_metrics: e,
              event_source: t,
            });
            break;
        }
    }
    l.default = e;
  },
  98,
);
