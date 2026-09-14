__d(
  "AdsMinRoasUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsBidConstraintsUtils",
    "AdsCampaignRecordAccessors",
    "AdsOptimizationMutationUtils",
    "adsBillingEventGetDefaultForOptimizationGoal",
    "adsBillingEventIsBillingEventDisabledByCampaignGroupBudget",
    "adsCampaignGroupBudgetResolveOptimizationPlugin",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = r("adsCampaignGroupBudgetResolveOptimizationPlugin")(t, n),
        i = a.getDefaultFrequencyControlSpecs(
          r("AdsAPIOptimizationGoals").VALUE,
          o("AdsAPICampaignRecordUtils").getPromotedObjectType(t.objective, n),
          e,
        );
      if (!i)
        return r("AdsCampaignRecordAccessors").frequency_control_specs.delete(
          n,
        );
      var l = n.frequency_control_specs;
      return l
        ? n
        : r("AdsCampaignRecordAccessors").frequency_control_specs.set(
            r("immutable").List(i),
            n,
          );
    }
    function s(t, n, a, i) {
      var l = n;
      l = r("AdsCampaignRecordAccessors").optimization_goal.set(
        r("AdsAPIOptimizationGoals").VALUE,
        l,
      );
      var s = r("adsBillingEventIsBillingEventDisabledByCampaignGroupBudget")(
          a.objective,
          l.billing_event,
          i,
        ),
        u = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          a.objective,
          n,
        );
      if (s) {
        var c = r("adsBillingEventGetDefaultForOptimizationGoal")(
          a.objective,
          r("AdsAPIOptimizationGoals").VALUE,
          u,
          t,
        );
        l = r("AdsCampaignRecordAccessors").billing_event.set(c, l);
      }
      l = e(t, a, l);
      var d = o("AdsBidConstraintsUtils").getDefaultROASAverageFloor();
      ((l = l.set("bid_constraints", { roas_average_floor: d })),
        (u = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          a.objective,
          l,
        )));
      var m = o("AdsOptimizationMutationUtils").getDefaultAttributionSpec(
        t,
        a.objective,
        u,
        r("AdsAPIOptimizationGoals").VALUE,
        i,
      );
      return ((l = l.merge(m)), l);
    }
    l.setDefaultFieldsForMinROASBidStrategy = s;
  },
  98,
);
