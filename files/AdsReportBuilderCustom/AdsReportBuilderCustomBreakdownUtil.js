__d(
  "AdsReportBuilderCustomBreakdownUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ".";
    function l(t) {
      return "custom_breakdown" + e + t.id;
    }
    function s(t) {
      var n = (t != null ? t : "").split(e);
      return n.length === 2 && n[0] === "custom_breakdown"
        ? { isCustomBreakdown: !0, customBreakdownID: n[1] }
        : { isCustomBreakdown: !1 };
    }
    function u(e) {
      var t = s(e);
      return t.isCustomBreakdown;
    }
    ((i.getCustomBreakdownConfigKey = l),
      (i.getCustomBreakdownConfig = s),
      (i.isCustomBreakdown = u));
  },
  66,
);
