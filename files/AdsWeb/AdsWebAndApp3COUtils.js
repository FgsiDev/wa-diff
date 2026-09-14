__d(
  "AdsWebAndApp3COUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsPromotedObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "isAccountEligibleForThreeCOL2AdEx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e == null || t == null) return !1;
      var n = o(
          "AdsAPICampaignRecordUtils",
        ).getDerivedPromotedObjectTypeWithVariation(t),
        a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(e, t),
        i =
          r("AdsPromotedObjectTypes").WEB_AND_APP === a ||
          (o(
            "isAccountEligibleForThreeCOL2AdEx",
          ).is3coPcaFlowWithOmniAndPacIssueFix() &&
            r("AdsPromotedObjectTypes").PRODUCT_SET === a &&
            n === "PRODUCT_SET_AND_OMNICHANNEL");
      return i;
    }
    function s(t, n, o) {
      return (
        e(t, n) &&
        o.some(function (e) {
          var t;
          return (
            ((t = e.creative) == null || (t = t.asset_feed_spec) == null
              ? void 0
              : t.optimization_type) ===
            r("ApiDynamicCreativeOptimizationTypes").PLACEMENT
          );
        })
      );
    }
    ((l.is3COPACAllowed = e), (l.is3COPAC = s));
  },
  98,
);
