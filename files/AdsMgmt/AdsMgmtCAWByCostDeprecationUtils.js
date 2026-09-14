__d(
  "AdsMgmtCAWByCostDeprecationUtils",
  ["AdsMgmtColumn"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "incrementality",
      "incrementality_all_conversions",
      "incrementality_first_conversion",
      "7d_click",
      "7d_click_all_conversions",
      "7d_click_first_conversion",
      "1d_click",
      "1d_click_all_conversions",
      "1d_click_first_conversion",
      "28d_click",
      "28d_click_all_conversions",
      "28d_click_first_conversion",
    ];
    function s(e) {
      var t = e.split(":");
      return (
        e.startsWith("cost_per_") ||
        e.endsWith("_roas") ||
        (t.length > 1 && t[0].endsWith("_roas")) ||
        [
          r("AdsMgmtColumn").result_rate,
          r("AdsMgmtColumn").objective_result_rate,
        ].includes(e)
      );
    }
    ((l.ATTRIBUTION_SETTINGS_SUPPORTED_FOR_COST_METRICS = e),
      (l.isCostOrRoasRelatedColumn = s));
  },
  98,
);
