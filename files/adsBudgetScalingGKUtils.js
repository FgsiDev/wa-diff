__d(
  "adsBudgetScalingGKUtils",
  ["AdsAPIBidStrategies", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("justknobx")._("2590") ? !1 : r("gkx")("8880");
    }
    function s() {
      return r("justknobx")._("2590") ? !1 : r("gkx")("8928");
    }
    function u() {
      return r("justknobx")._("481");
    }
    function c() {
      return r("justknobx")._("5674");
    }
    function d(e) {
      return e && s() && !u();
    }
    function m(e) {
      return e === r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP;
    }
    function p(e) {
      if (e == null) return !0;
      switch (e) {
        case "CAMPAIGN_BUDGET":
        case "CAMPAIGN_GROUP_BUDGET":
        case "UNDEFINED":
          return !0;
        default:
          return !1;
      }
    }
    function _(e, t) {
      return m(e) && p(t);
    }
    function f(e, t, n, r) {
      return m(e) && t != null && !m(t) && n > 0 && r > 0;
    }
    function g(e, t, n) {
      var o;
      return e === !0
        ? r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP
        : (o = t != null ? t : n) != null
          ? o
          : null;
    }
    ((l.isAdsBudgetScalingEnabled = e),
      (l.isAdsBudgetScalingEnabledWithoutExposureLogging = s),
      (l.isLifetimeBudgetAllowedForBudgetScaling = u),
      (l.isBudgetThresholdGuardrailEnabled = c),
      (l.shouldConfirmLifetimeSwitchForBudgetScaling = d),
      (l.isBidStrategyEligibleForBudgetScaling = m),
      (l.isEligibleForBudgetScaling = _),
      (l.isBudgetScalingDisablingBidStrategyTransition = f),
      (l.getEffectiveBidStrategyForCampaign = g));
  },
  98,
);
