__d(
  "AdsCampaignBulkEditSetGoalIsCAExpansionEnabledActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignSetGoalIsCAExpansionEnabledActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorCampaignSetGoalIsCAExpansionEnabledActionFlux")
          .actionType,
        fluxInputs: {},
        mutate: function (t, n, a) {
          var e = t.campaignIDs,
            i = t.isCAExpansionEnabled,
            l = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                e,
              ),
              e,
              function (e) {
                var t = o("AdsCampaignGoalMutationUtils").ensureCampaignGoal(e);
                return r(
                  "AdsCampaignRecordAccessors",
                ).campaign_goal.is_ca_expansion_enabled.set(i, t);
              },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys")
              .CAMPAIGN_GOAL_ENGAGED_AUDIENCE_INCLUSION,
            e,
            n,
            l,
            r("AdsCampaignRecordAccessors").campaign_goal.get,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
