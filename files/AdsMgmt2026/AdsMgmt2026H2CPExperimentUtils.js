__d(
  "AdsMgmt2026H2CPExperimentUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("14745");
    }
    function s(e) {
      return e ? r("gkx")("13049") : r("gkx")("14776");
    }
    function u() {
      return r("gkx")("12484");
    }
    function c(t) {
      var n = (t == null ? void 0 : t.silent) === !0;
      return (n ? u() : e()) ? !0 : s(n);
    }
    function d(e) {
      return (e == null ? void 0 : e.silent) === !0
        ? r("gkx")("15948")
        : r("gkx")("16026");
    }
    function m(t, n) {
      if (!c(n)) return !1;
      var r = (n == null ? void 0 : n.silent) === !0;
      return (r ? u() : e()) || t === !0;
    }
    ((l.getIsNeedsAttentionDogfooder = e),
      (l.getIsNeedsAttentionDogfooderWithoutExposure = u),
      (l.getShouldShowNeedsAttentionSection = c),
      (l.getShouldShowMonitorAgent = d),
      (l.getShouldRenderNeedsAttentionSection = m));
  },
  98,
);
