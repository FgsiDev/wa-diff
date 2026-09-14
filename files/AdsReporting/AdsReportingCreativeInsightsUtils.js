__d(
  "AdsReportingCreativeInsightsUtils",
  ["gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("14335");
    }
    function s() {
      return e();
    }
    function u() {
      return r("gkx")("5348") ? !0 : r("qex")._("4722") === !0;
    }
    function c() {
      return r("qex")._("4804") === !0;
    }
    function d(e) {
      return m();
    }
    function m() {
      return r("gkx")("11835")
        ? !0
        : (r("gkx")("4969"), r("qex")._("5805") === !0);
    }
    ((l.isInCreativeInsightsTargetingGK = e),
      (l.shouldDisableNoReportRedirect = s),
      (l.shouldShowHookAndHoldRateMetrics = u),
      (l.shouldShowVideoCtrBySecond = c),
      (l.shouldShowCreativeInsights = d));
  },
  98,
);
