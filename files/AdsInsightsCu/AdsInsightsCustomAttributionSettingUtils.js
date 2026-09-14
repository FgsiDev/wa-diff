__d(
  "AdsInsightsCustomAttributionSettingUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["1d_passback", "7d_passback", "28d_passback", "custom"];
    function u(t) {
      return e.includes(t);
    }
    function c(e) {
      return e === "1d_passback"
        ? s._(/*BTDS*/ "Custom, 1-day click")
        : e === "7d_passback"
          ? s._(/*BTDS*/ "Custom, 7-day click")
          : e === "28d_passback" || e === "custom"
            ? s._(/*BTDS*/ "Custom")
            : null;
    }
    ((l.isCustomAttributionSetting = u),
      (l.getCustomAttributionSettingLabel = c));
  },
  226,
);
