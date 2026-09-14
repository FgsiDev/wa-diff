__d(
  "AdsModeBasedBiddingUtils",
  [
    "AdsAPIBidStrategies",
    "AdsAPICostBiddingModes",
    "AdsCampaignRecordAccessors",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("justknobx")._("4051") ? !1 : r("gkx")("22307");
    }
    function s(e) {
      return e === r("AdsAPIBidStrategies").COST_CAP;
    }
    function u(t) {
      return e() && s(t);
    }
    function c(e, t) {
      var n = r("AdsCampaignRecordAccessors").cost_bidding_mode.get(e);
      if (!s(t)) {
        if (n != null) {
          var o;
          return ((o = {}), (o.cost_bidding_mode = null), o);
        }
        return {};
      }
      return {};
    }
    function d(t) {
      return e()
        ? r("AdsCampaignRecordAccessors").cost_bidding_mode.delete(t)
        : t;
    }
    function m(t) {
      return e() ? t.delete("cost_bidding_mode") : t;
    }
    function p() {
      return r("justknobx")._("5501");
    }
    function _(e, t) {
      var n,
        r = Math.max(
          (n = e == null ? void 0 : e.getValues().length) != null ? n : 0,
          t.getValues().length,
        );
      return Array.from({ length: r }).some(function (n, r) {
        var o, a;
        return f(
          (o = e == null ? void 0 : e.getValueForIndex(r)) != null ? o : !0,
          (a = t.getValueForIndex(r)) != null ? a : null,
        );
      });
    }
    function f(e, t) {
      return !p() || e
        ? !1
        : t != null && t !== r("AdsAPICostBiddingModes").NONE;
    }
    ((l.isModeBasedBiddingEnabled = e),
      (l.isBidStrategyEligibleForModeBasedBidding = s),
      (l.shouldShowModeBasedBiddingTiles = u),
      (l.getDefaultCostBiddingModeFields = c),
      (l.maybeDeleteCostBiddingMode = d),
      (l.maybeDeleteCostBiddingModeDeliverySpec = m),
      (l.isCostBiddingModeLockedAfterPublish = p),
      (l.shouldLockCostBiddingModeForBulkValues = _),
      (l.shouldLockCostBiddingMode = f));
  },
  98,
);
