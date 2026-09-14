__d(
  "adsInsightsColumnConfigsGetDescriptor",
  ["AdsInsightsColumn", "AdsMgmtSuggestedColumnsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (
        (e == null || e === "") &&
        o(
          "AdsMgmtSuggestedColumnsGatingUtils",
        ).getIsAccountInPrecomputeSuggestedColumns()
      )
        return { actionType: "", customMetricsID: null };
      var t = e.split(":");
      switch (t.length) {
        case 1:
          return { actionType: "", customMetricsID: null };
        case 2: {
          var n = t[0] === r("AdsInsightsColumn").CUSTOM_DERIVED_METRICS,
            a = t[0];
          return {
            actionFieldType: a,
            actionType: n ? "" : t[1],
            customMetricsID: n ? t[1] : null,
          };
        }
      }
      var i = [e.split(":")[0], e.split(":").slice(1).join(":")],
        l = i[0];
      return { actionFieldType: l, actionType: i[1], customMetricsID: null };
    }
    l.default = e;
  },
  98,
);
