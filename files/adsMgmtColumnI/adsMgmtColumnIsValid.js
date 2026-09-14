__d(
  "adsMgmtColumnIsValid",
  [
    "AdsInsightsFieldDescriptor",
    "AdsMgmtColumnData",
    "AdsReportBuilderCustomBreakdownUtil",
    "AdsReportBuilderDimensionType",
    "memoize",
    "memoizeStringOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoize")(function () {
      return [].concat(
        Object.keys(r("AdsReportBuilderDimensionType")).map(function (e) {
          return r("AdsReportBuilderDimensionType")[e];
        }),
        [
          "delivery_info",
          "account_timezone",
          "account_default_attribution_windows",
        ],
      );
    });
    function s(t) {
      return (
        e().includes(t) ||
        o("AdsReportBuilderCustomBreakdownUtil").isCustomBreakdown(t)
      );
    }
    var u = r("memoizeStringOnly")(function (e) {
        return (
          Object.prototype.hasOwnProperty.call(r("AdsMgmtColumnData").ids, e) ||
          o("AdsInsightsFieldDescriptor").get(e).conversionID != null ||
          o("AdsInsightsFieldDescriptor").get(e).customMetricID != null ||
          o("AdsInsightsFieldDescriptor").get(e).customEventName != null ||
          s(e)
        );
      }),
      c = u;
    l.default = c;
  },
  98,
);
