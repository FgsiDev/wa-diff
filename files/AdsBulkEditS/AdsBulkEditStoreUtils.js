__d(
  "AdsBulkEditStoreUtils",
  [
    "invariant",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsDeliveryBulkBudgetOperatorTypes",
    "AdsDeliveryBulkBudgetUnitTypes",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, o) {
      switch (
        (e !== r("AdsCampaignBulkEditColumnKeys").BUDGET &&
          e !== r("AdsCampaignGroupBulkEditColumnKeys").CAMPAIGN_GROUP_BUDGET &&
          s(0, 5392),
        t)
      ) {
        case r("AdsDeliveryBulkBudgetUnitTypes").PERCENTAGE:
          var a = n + (n * o) / 100;
          return Math.round(a);
        case r("AdsDeliveryBulkBudgetUnitTypes").CURRENCY:
          var i = n + o;
          return Math.round(i);
        default:
          s(0, 5393);
      }
    }
    function u(e, t, n, o) {
      switch (
        (e !== r("AdsCampaignBulkEditColumnKeys").BUDGET &&
          e !== r("AdsCampaignGroupBulkEditColumnKeys").CAMPAIGN_GROUP_BUDGET &&
          s(0, 5392),
        t)
      ) {
        case r("AdsDeliveryBulkBudgetUnitTypes").PERCENTAGE:
          var a = n - (n * o) / 100,
            i = a <= 0 ? n : a;
          return Math.round(i);
        case r("AdsDeliveryBulkBudgetUnitTypes").CURRENCY:
          var l = n - o,
            u = l <= 0 ? n : l;
          return Math.round(u);
        default:
          s(0, 5393);
      }
    }
    function c(t, n, o, a, i, l) {
      var c = t,
        d = l,
        m = t.getIn(i),
        p = Number(m || 0);
      switch (o) {
        case r("AdsDeliveryBulkBudgetOperatorTypes").INCREASE:
          return n ===
            r("AdsCampaignGroupBulkEditColumnKeys").CAMPAIGN_GROUP_BUDGET &&
            (l === null &&
              r("FBLogger")("ads").mustfix(
                "Campaign group budget should not be null in bulk edit dialog",
              ),
            l === void 0)
            ? { updatedAdObject: c, updatedValue: d }
            : ((d = e(n, a, p, parseFloat(l))),
              (c = c.setIn(i, d)),
              { updatedAdObject: c, updatedValue: d });
        case r("AdsDeliveryBulkBudgetOperatorTypes").DECREASE:
          return n ===
            r("AdsCampaignGroupBulkEditColumnKeys").CAMPAIGN_GROUP_BUDGET &&
            (l === null &&
              r("FBLogger")("ads").mustfix(
                "Campaign group budget should not be null in bulk edit dialog",
              ),
            l === void 0)
            ? { updatedAdObject: c, updatedValue: d }
            : ((d = u(n, a, p, parseFloat(l))),
              (c = c.setIn(i, d)),
              { updatedAdObject: c, updatedValue: d });
        case r("AdsDeliveryBulkBudgetOperatorTypes").SET_TO:
          return ((c = c.setIn(i, l)), { updatedAdObject: c, updatedValue: d });
        default:
          s(0, 5394);
      }
    }
    l.getUpdatedValueOperation = c;
  },
  98,
);
