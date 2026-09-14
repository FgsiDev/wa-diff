__d(
  "AdsBudgetProductRecommendationQEUtilsCampaignBasedRecommendedBudgetProductQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "campaignGroupID",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "shouldSkipQuery",
          },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "campaignGroupID" }],
        n = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "recommended_budget_product",
              storageKey: null,
            },
          ],
          type: "AdCampaignGroup",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsBudgetProductRecommendationQEUtilsCampaignBasedRecommendedBudgetProductQuery",
          selections: [
            {
              condition: "shouldSkipQuery",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: t,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [n],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsBudgetProductRecommendationQEUtilsCampaignBasedRecommendedBudgetProductQuery",
          selections: [
            {
              condition: "shouldSkipQuery",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: t,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    n,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
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
          id: "24448668791497112",
          metadata: {},
          name: "AdsBudgetProductRecommendationQEUtilsCampaignBasedRecommendedBudgetProductQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
