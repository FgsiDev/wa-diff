__d(
  "AdsCampaignBulkEditSetGoalTypeActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignSetGoalTypeActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorCampaignSetGoalTypeActionFlux").actionType,
        mutate: function (t, n) {
          var e = t.campaignIDs,
            a = t.goalType,
            i = e.map(function (e) {
              var t,
                o = n.rows.get(e);
              return (o == null ? void 0 : o.current) == null
                ? null
                : (t = r("AdsCampaignRecordAccessors").campaign_goal) == null
                  ? void 0
                  : t.type.get(o.current);
            }),
            l = i.every(function (e) {
              return e === 1;
            }),
            s = i.every(function (e) {
              return e === 3 || e === 6;
            }),
            u = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                e,
              ),
              e,
              function (e) {
                var t,
                  n = (t = o(
                    "AdsCampaignGoalMutationUtils",
                  )).ensureCampaignGoal(e),
                  i = r("AdsCampaignRecordAccessors").campaign_goal.type.get(n),
                  l = r("AdsCampaignRecordAccessors").campaign_goal.type.set(
                    a,
                    n,
                  ),
                  s = t.clearIrrelevantCampaignGoalSubFields(l, a),
                  u = t.applyAutoCADefaultOnTransitionIntoNCA(s, i, a);
                return t.applyCustomersLabelDefaultOnTransitionIntoNCA(u, i, a);
              },
            ),
            c = a === 3 || a === 6,
            d = c || s,
            m = a === 1 || (l && a === 2),
            p;
          return (
            d
              ? (p = r(
                  "AdsCampaignBulkEditColumnKeys",
                ).CAMPAIGN_GOAL_ENGAGED_AUDIENCE_INCLUSION)
              : m
                ? (p = r(
                    "AdsCampaignBulkEditColumnKeys",
                  ).CAMPAIGN_GOAL_AUDIENCE_ENGAGEMENT)
                : (p = r("AdsCampaignBulkEditColumnKeys").CAMPAIGN_GOAL_TYPE),
            o("AdsBulkEditActionHandlerUtils").mergeState(
              p,
              e,
              n,
              u,
              r("AdsCampaignRecordAccessors").campaign_goal.type.get,
            )
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
