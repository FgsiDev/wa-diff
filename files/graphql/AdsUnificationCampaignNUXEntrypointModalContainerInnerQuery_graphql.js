__d(
  "AdsUnificationCampaignNUXEntrypointModalContainerInnerQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaign_details",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaign_group_daily_budget",
        },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "campaign_group_lifetime_budget",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "is_e2e_proxy_campaign_group",
        },
        o = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "draft_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "campaign_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "campaign_name",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "AdsUnificationCampaignNUXEntrypointModalContainerInnerQuery",
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "AdsUnificationCampaignNUXModalContainerInnerSharedFragment",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t, n],
          kind: "Operation",
          name: "AdsUnificationCampaignNUXEntrypointModalContainerInnerQuery",
          selections: [
            {
              if: null,
              kind: "Defer",
              label:
                "AdsUnificationCampaignNUXModalContainerInnerSharedFragment$defer$useAutomationUnificationSpecBasedAdvantageStateRecordFragment",
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Variable",
                      name: "campaign_details",
                      variableName: "campaign_details",
                    },
                    {
                      kind: "Variable",
                      name: "campaign_group_daily_budget",
                      variableName: "campaign_group_daily_budget",
                    },
                    {
                      kind: "Variable",
                      name: "campaign_group_lifetime_budget",
                      variableName: "campaign_group_lifetime_budget",
                    },
                    {
                      kind: "Variable",
                      name: "is_e2e_proxy_campaign_group",
                      variableName: "is_e2e_proxy_campaign_group",
                    },
                  ],
                  concreteType: "XFBAdvantageStateRecord",
                  kind: "LinkedField",
                  name: "xfb_advantage_state_record_resolver_for_spec",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "advantage_audience_state",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "advantage_budget_state",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "advantage_placement_state",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "advantage_state",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBNonAdvantageCampaigns",
                      kind: "LinkedField",
                      name: "recommendations",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBRecommendationCampaignDetails",
                          kind: "LinkedField",
                          name: "advantage_audience_off",
                          plural: !0,
                          selections: o,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBRecommendationCampaignDetails",
                          kind: "LinkedField",
                          name: "advantage_placement_off",
                          plural: !0,
                          selections: o,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "XFBRecommendationCampaignDetails",
                          kind: "LinkedField",
                          name: "broad_geo_off",
                          plural: !0,
                          selections: o,
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "24174526168878459",
          metadata: {},
          name: "AdsUnificationCampaignNUXEntrypointModalContainerInnerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
