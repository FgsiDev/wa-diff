__d(
  "AdsReportBuilderCreateCustomMetricSuccessStatReducerPlugin",
  [
    "AdsDataAtom",
    "AdsReportBuilderChartLimit",
    "AdsReportBuilderCheckboxColumnChangesEventSources",
    "AdsReportBuilderColumnChangesEventSources",
    "AdsReportBuilderCustomMetricRecord",
    "AdsReportBuilderMetricUpdateAction",
    "AdsReportBuilderRoutingActions",
    "curry",
    "ifRequired",
    "logCheckboxColumnsChange",
    "logColumnsChangeInChart",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, a) {
          var t,
            i = new (r("AdsReportBuilderCustomMetricRecord"))(
              a.customMetricRecord,
            ),
            l;
          (t = r("ifRequired"))("AdsReportBuilderColumnStore", function (e) {
            l = e;
          });
          var s;
          t("AdsReportBuilderMetricUtil", function (e) {
            s = e;
          });
          var u;
          t("AdsReportBuilderViewTypeDataProvider", function (e) {
            u = e;
          });
          var c;
          return (
            t("adsReportBuilderValidCheckboxColumnsSelector", function (e) {
              c = e;
            }),
            l &&
              s &&
              u &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  var e = l.getMetricsSelector(),
                    t = s.makeCustomMetricID(i),
                    n = u(),
                    a = e.concat(t),
                    d,
                    m;
                  if (n === "TIME_SERIES" || n === "BAR") {
                    var p = c().checkboxColumnsRecord.checkboxMetrics || [],
                      _ = p.concat(t),
                      f = r(
                        "AdsReportBuilderCheckboxColumnChangesEventSources",
                      ).CREATE_CUSTOM_COLUMN;
                    (n === "TIME_SERIES" &&
                      e.length >=
                        o("AdsReportBuilderChartLimit").lineChartMetricLimit) ||
                    (n === "BAR" &&
                      e.length >=
                        o("AdsReportBuilderChartLimit").barChartMetricLimit)
                      ? ((d = { checkboxMetrics: _ }),
                        (m = function () {
                          return r("logCheckboxColumnsChange")(_, f, !1);
                        }))
                      : ((d = { metrics: a, checkboxMetrics: _ }),
                        (m = function () {
                          return r("logColumnsChangeInChart")(
                            a,
                            r("AdsReportBuilderColumnChangesEventSources")
                              .CUSTOM_METRIC_EDITOR,
                            _,
                            f,
                            !1,
                          );
                        }));
                  } else
                    ((d = { metrics: a }),
                      (m = r("curry")(
                        r("AdsReportBuilderMetricUpdateAction").dispatch,
                        {
                          columns: a,
                          eventSource: r(
                            "AdsReportBuilderColumnChangesEventSources",
                          ).CUSTOM_METRIC_EDITOR,
                        },
                      )));
                  o("AdsReportBuilderRoutingActions").maybeNavigateWithParams(
                    d,
                    m,
                  );
                },
              ),
            n.set(a.customMetricRecord.id, i)
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
