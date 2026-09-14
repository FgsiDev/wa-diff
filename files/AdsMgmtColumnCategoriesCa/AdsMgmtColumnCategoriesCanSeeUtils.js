__d(
  "AdsMgmtColumnCategoriesCanSeeUtils",
  [
    "AdsMgmt2025H2ExperimentUtils",
    "AdsMgmt2026H2CPExperimentUtils",
    "PromoChannelAdsManagerUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && e.capabilities != null && r("gkx")("21671");
    }
    function s(e) {
      var t = r("gkx")("3454");
      return e != null && e.capabilities != null && t;
    }
    function u(e) {
      return e != null && e.capabilities != null;
    }
    function c(e) {
      return e != null && e.capabilities != null;
    }
    function d(e) {
      return e != null && r("gkx")("21411");
    }
    function m(e) {
      return e != null && r("gkx")("21675");
    }
    function p(e) {
      return e != null && (r("gkx")("21678") || r("gkx")("2310"));
    }
    function _() {
      return r("gkx")("21438");
    }
    function f(e) {
      return e != null;
    }
    function g() {
      return o(
        "PromoChannelAdsManagerUtils",
      ).isAdAccountEligibleForPromoChannel();
    }
    function h(e) {
      return e == null ? !1 : r("gkx")("3900");
    }
    function y() {
      return r("gkx")("16469");
    }
    function C() {
      return r("gkx")("24014");
    }
    function b() {
      return r("gkx")("11491");
    }
    function v() {
      return r("gkx")("20784");
    }
    function S() {
      return b() && r("gkx")("3107");
    }
    function R() {
      return r("gkx")("11424");
    }
    function L() {
      return o("AdsMgmt2025H2ExperimentUtils").getIsEnabledForPostInteraction();
    }
    function E() {
      return o("AdsMgmt2026H2CPExperimentUtils").getShouldShowMonitorAgent({
        silent: !0,
      });
    }
    function k() {
      return r("gkx")("17241");
    }
    function I() {
      return r("gkx")("17241");
    }
    function T() {
      return r("gkx")("22559");
    }
    ((l.canSeeBrandCategoryReportingMetrics = e),
      (l.canSeeOnFacebookDonationMetric = s),
      (l.canSeeOnFacebookInitiateCheckouts = u),
      (l.canSeeOnFacebookSubmitApplicationMetric = c),
      (l.canSeePostConversionSignal = d),
      (l.canSeeMessageExchangesMetrics = m),
      (l.canSeeMessagingContactsMetricsFn = p),
      (l.canSeeConversionLeadsMetrics = _),
      (l.canSeeShopsAssistedMetrics = f),
      (l.canSeeWAMOChannelFollowsMetrics = g),
      (l.canSeeAutoDetectedPurchaseMetric = h),
      (l.canSeeAppStoreVisitMetric = y),
      (l.canSeeOnsiteConversionEngagedPageViewMetric = C),
      (l.canSeeCprBenchmarkColumn = b),
      (l.canSeeCprBenchmarkColumnWithoutExposure = v),
      (l.canSeeComparisonBenchmarkColumn = S),
      (l.canSeePlayableFunnelColumns = R),
      (l.canSeePostInteractionsMetric = L),
      (l.canSeeMonitorFlagColumn = E),
      (l.canSeeHistoricalBenchmarkColumn = k),
      (l.canSeeCprAnomalyPill = I),
      (l.canSeeCprAnomalyPillWithoutExposure = T));
  },
  98,
);
