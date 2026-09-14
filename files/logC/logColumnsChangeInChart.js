__d(
  "logColumnsChangeInChart",
  [
    "AdsReportBuilderDimensionUpdateAction",
    "AdsReportBuilderMetricUpdateAction",
    "logCheckboxColumnsChange",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      (r(
        a
          ? "AdsReportBuilderDimensionUpdateAction"
          : "AdsReportBuilderMetricUpdateAction",
      ).dispatch({ columns: e, eventSource: t }),
        r("logCheckboxColumnsChange")(n, o, a));
    }
    l.default = e;
  },
  98,
);
