__d(
  "VCETrimUtils",
  ["VCEConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.trimmedFromParams,
        r = n == null ? 0 : n.trim_before_start,
        a = n == null ? t.length : n.trim_after_end,
        i = Math.max(
          o("VCEConstants").MIN_TRIM_DELTA_SECONDS,
          Math.min(1, o("VCEConstants").MIN_TRIM_DELTA_PERCENTAGE * (a - r)),
        );
      return (
        Math.abs(e.trim_before_start - r) > i ||
        Math.abs(a - e.trim_after_end) > i
      );
    }
    function s(e, t) {
      var n = t.trim_before_start,
        r = t.trim_after_end,
        a = Math.max(
          o("VCEConstants").MIN_TRIM_DELTA_SECONDS,
          Math.min(1, o("VCEConstants").MIN_TRIM_DELTA_PERCENTAGE * (r - n)),
        );
      return (
        Math.abs(e.trim_before_start - n) > a ||
        Math.abs(r - e.trim_after_end) > a
      );
    }
    ((l.haveTrimmingParamsChanged = e),
      (l.haveMediaPickerTrimmingParamsChanged = s));
  },
  98,
);
