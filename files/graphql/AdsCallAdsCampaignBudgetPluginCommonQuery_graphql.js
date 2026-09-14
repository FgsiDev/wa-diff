__d(
  "AdsCallAdsCampaignBudgetPluginCommonQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        ],
        t = { vultureHash: "t-sGLTBWvCdhOlt5_jf4ico-fS0=" },
        n = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        r = {
          alias: null,
          args: null,
          concreteType: "XFBCallAdsBudgetRecommendationType",
          kind: "LinkedField",
          name: "call_ads_recommended_budget",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "budget_limit_15s",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: t,
          name: "AdsCallAdsCampaignBudgetPluginCommonQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [r],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsCallAdsCampaignBudgetPluginCommonQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                r,
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
        params: {
          id: "24595672743429552",
          metadata: t,
          name: "AdsCallAdsCampaignBudgetPluginCommonQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
