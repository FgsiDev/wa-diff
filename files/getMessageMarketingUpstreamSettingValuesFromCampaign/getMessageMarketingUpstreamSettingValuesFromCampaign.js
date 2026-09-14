__d(
  "getMessageMarketingUpstreamSettingValuesFromCampaign",
  ["AdsAPICampaignRecordUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return {
        promotedObjectType: o(
          "AdsAPICampaignRecordUtils",
        ).getPromotedObjectType(t, e),
        dynamicCreative: (n = e.is_dynamic_creative) != null ? n : !1,
        optimizationGoal: e.optimization_goal,
        appHasUnsupportedMMP: !1,
      };
    }
    l.default = e;
  },
  98,
);
