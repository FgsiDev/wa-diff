__d(
  "AdsMgmt2025PerformancePresetVariantGatingUtils",
  ["$InternalEnum", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "DEFAULT",
      "REORDER",
      "REMOVE_COLUMNS",
      "ADDITIONAL_COLUMNS",
      "WTWA_MESSAGING_FIRST",
      "WTD_MESSAGING_FIRST",
    ]);
    function s() {
      var t,
        n = (t = r("qex")._("3859")) != null ? t : "REORDER";
      return n === "DEFAULT"
        ? e.DEFAULT
        : n === "REORDER"
          ? e.REORDER
          : n === "REMOVE_COLUMNS"
            ? e.REMOVE_COLUMNS
            : n === "ADDITIONAL_COLUMNS"
              ? e.ADDITIONAL_COLUMNS
              : e.REORDER;
    }
    ((l.AdsInsightsPerformancePresetVariant = e),
      (l.getPerformancePresetVariantForAccountWithoutExposure = s));
  },
  98,
);
