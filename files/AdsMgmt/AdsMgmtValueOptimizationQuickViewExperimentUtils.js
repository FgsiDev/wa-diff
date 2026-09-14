__d(
  "AdsMgmtValueOptimizationQuickViewExperimentUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2;
    function s() {
      return f() ? !0 : !!d();
    }
    function u() {
      return f() ? !0 : !!d();
    }
    function c() {
      return f() ? !0 : m() ? u() : !1;
    }
    function d() {
      return m() || r("gkx")("17783");
    }
    function m() {
      return r("gkx")("7139");
    }
    function p() {
      return f() ? !0 : _() ? u() : !1;
    }
    function _() {
      return m() && r("gkx")("7154");
    }
    function f() {
      return r("gkx")("16836");
    }
    ((l.VO_QV_NUX_IMPRESSION_LIMIT = e),
      (l.getIsAccountInQuickViewsValueOptimized = s),
      (l.getIsAccountInQuickViewsValueOptimizedWithoutExposure = u),
      (l.getIsAccountInWelcomeGuideQuickViewsValueOptimizedWithoutExposure = c),
      (l.getIsAccountInValueOptimizationSuggestedColumns = p));
  },
  98,
);
