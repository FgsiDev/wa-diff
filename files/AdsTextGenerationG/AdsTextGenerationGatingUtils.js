__d(
  "AdsTextGenerationGatingUtils",
  ["$InternalEnum", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("342");
    }
    function s() {
      return r("gkx")("12889");
    }
    function u(e) {
      return !(
        e.length === 0 ||
        e.filter(function (e) {
          return e.status === "APPLIED";
        }).length === 0
      );
    }
    function c(e) {
      return e ? r("gkx")("13161") : r("gkx")("13162");
    }
    function d() {
      return r("gkx")("7687");
    }
    function m() {
      return r("gkx")("20145");
    }
    var p = n("$InternalEnum")({
      ALL_ELIGIBLE_POPULATION: "all_eligible_population_experiment",
      DEFAULT_ON: "default_on_experiment",
      MARKETING_BRAIN_LATENCY: "marketing_brain_latency_experiment",
      SELLING_PTS_2COL_V2: "selling_pts_2col_v2_experiment",
    });
    function _() {
      return r("gkx")("24681");
    }
    function f() {
      return r("gkx")("24683");
    }
    function g() {
      return r("gkx")("25554");
    }
    function h() {
      return r("gkx")("25909");
    }
    function y() {
      return g()
        ? p.MARKETING_BRAIN_LATENCY
        : _()
          ? p.DEFAULT_ON
          : f()
            ? p.SELLING_PTS_2COL_V2
            : h()
              ? p.ALL_ELIGIBLE_POPULATION
              : null;
    }
    function C(e) {
      return e ? r("gkx")("11337") : r("gkx")("11339");
    }
    function b() {
      return r("gkx")("26851");
    }
    ((l.shouldShowDebugTooltip = e),
      (l.isEligibleForLinkingToBrandkit = s),
      (l.isEligibleForFreeformBrandTone = u),
      (l.isEligibleForPersonalizedCtrInsights = c),
      (l.isEligibleForTextAutomation = d),
      (l.isEligibleForTextAutomationBackend = m),
      (l.TextEnhancementsExperimentTag = p),
      (l.isDefaultOnExperiment = _),
      (l.isSellingPoints2ColV2Experiment = f),
      (l.isMarketingBrainLatencyExperiment = g),
      (l.getExperimentTag = y),
      (l.isEligibleForTextUnification = C),
      (l.isEligibleForTextEnhancementsExpansion = b));
  },
  98,
);
