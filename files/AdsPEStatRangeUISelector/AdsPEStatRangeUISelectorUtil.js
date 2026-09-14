__d(
  "AdsPEStatRangeUISelectorUtil",
  ["AdsPEStatsUtils", "Timezone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = e.rangeType === "lifetime" ? "maximum" : e.rangeType,
        a =
          e.statRange ||
          o("AdsPEStatsUtils").eventToRange(
            { value: e.rangeType },
            n != null ? n : o("Timezone").UTC,
            t,
          ),
        i = e.showPopover,
        l = e.comparePreset,
        s = e.comparisonTimeRange;
      return {
        showPopover: i,
        rangeType: r,
        statRangeString: a,
        comparePreset: l,
        comparisonTimeRange: s,
      };
    }
    l.getStatRangeSelectorState = e;
  },
  98,
);
