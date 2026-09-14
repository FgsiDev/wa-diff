__d(
  "adsTargetingGetDefaultTargetingAndPlacement",
  [
    "AdsPlacementUtils",
    "adsCommonTargetingGetDefaultTargeting",
    "mergeDeep",
    "mergeHelpers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = (n = e.promoted_object) == null ? void 0 : n.page_id,
        a = r("adsCommonTargetingGetDefaultTargeting")(t),
        i = r("AdsPlacementUtils").getAutomaticCampaignPlacement({
          account: t,
          objective: e.objective,
          buyingType: e.buying_type,
          capabilities: t.capabilities,
          promotedPageID: o,
        });
      return r("mergeDeep")(a, i, r("mergeHelpers").ArrayStrategies.Clobber);
    }
    l.default = e;
  },
  98,
);
