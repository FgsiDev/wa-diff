__d(
  "AdsBwPCampaignMutationUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsConversionWindowUtils",
    "AdsMutators",
    "AdsUEditorCampaignAdObjectsUtils",
    "adsCampaignDeliveryChangeOptimizationGoalMutation",
    "adsCampaignPlacementResetMutator",
    "adsCampaignSelectWebsitePromotedObjectTypeMutation",
    "adsDCOConvertDynamicCreativeToStorySpecCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.account,
        n = e.campaign,
        a = e.campaignGroup,
        i = e.eligibilityInformation,
        l = e.optimizationGoal;
      return o("AdsMutators").chain(
        function (e) {
          return r("adsCampaignPlacementResetMutator")(e, i);
        },
        function (e) {
          return s(l, e, a, t);
        },
      )(n);
    }
    function s(e, t, n, a) {
      var i = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
          campaign: t,
          campaignGroup: n,
        }),
        l = o("AdsAPICampaignRecordUtils").getDestinationType(t),
        s = o(
          "AdsConversionWindowUtils",
        ).getDefaultConversionWindowMaybeExtended(
          a,
          n.objective,
          e,
          i,
          n.bid_strategy,
          l,
          !0,
        );
      return r("adsCampaignDeliveryChangeOptimizationGoalMutation")(
        t,
        e,
        a,
        n,
        i,
        !0,
        s.ctConvWindowDays,
        s.vtConvWindowDays,
        s.evcWindowDays,
        !1,
        !1,
      );
    }
    function u(t, n, a, i) {
      return o("AdsMutators").chain(
        function (t) {
          return e({
            campaign: t,
            campaignGroup: n,
            account: a,
            optimizationGoal: r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
            eligibilityInformation: i,
          });
        },
        function (e) {
          return r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.custom_event_type.set("PURCHASE", e);
        },
      )(t);
    }
    function c(t, n, a, i) {
      return o("AdsMutators").chain(
        function (e) {
          return r("adsCampaignSelectWebsitePromotedObjectTypeMutation")(
            e,
            n,
            a,
          );
        },
        r("adsDCOConvertDynamicCreativeToStorySpecCampaign"),
        function (t) {
          return e({
            campaign: t,
            campaignGroup: n,
            account: a,
            optimizationGoal: r("AdsAPIOptimizationGoals").LINK_CLICKS,
            eligibilityInformation: i,
          });
        },
      )(t);
    }
    ((l.enableBwPForSales = u), (l.enableBwPForTraffic = c));
  },
  98,
);
