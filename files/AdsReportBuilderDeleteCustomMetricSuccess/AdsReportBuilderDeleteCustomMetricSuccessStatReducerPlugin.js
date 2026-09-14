__d(
  "AdsReportBuilderDeleteCustomMetricSuccessStatReducerPlugin",
  [
    "AdsDataAtom",
    "AdsReportBuilderColumnChangesEventSources",
    "AdsReportBuilderMetricUpdateAction",
    "AdsReportBuilderRoutingActions",
    "curry",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, a) {
          var t;
          r("ifRequired")("AdsReportBuilderColumnStore", function (e) {
            t = e;
          });
          var i;
          return (
            r("ifRequired")("AdsReportBuilderMetricUtil", function (e) {
              i = e;
            }),
            t &&
              i &&
              (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                function () {
                  var e = t.getMetricsSelector(),
                    n = i.makeCustomMetricNameByID(a.id);
                  e.includes(n) &&
                    o("AdsReportBuilderRoutingActions").navigateWithParams(
                      {
                        metrics: e.filter(function (e) {
                          return e !== n;
                        }),
                      },
                      r("curry")(
                        r("AdsReportBuilderMetricUpdateAction").dispatch,
                        {
                          columns: [n],
                          eventSource: r(
                            "AdsReportBuilderColumnChangesEventSources",
                          ).CUSTOM_METRIC_DELETION,
                        },
                      ),
                    );
                },
              ),
            n.delete(a.id)
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
