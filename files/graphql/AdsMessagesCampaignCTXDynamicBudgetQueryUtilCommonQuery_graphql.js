__d(
  "AdsMessagesCampaignCTXDynamicBudgetQueryUtilCommonQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adAccountId",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "inputParams" },
        n = { defaultValue: null, kind: "LocalArgument", name: "pageId" },
        r = { defaultValue: null, kind: "LocalArgument", name: "skipQuery" },
        o = [{ kind: "Variable", name: "id", variableName: "pageId" }],
        a = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "ad_account_id",
              variableName: "adAccountId",
            },
            {
              kind: "Variable",
              name: "input_params",
              variableName: "inputParams",
            },
          ],
          kind: "ScalarField",
          name: "ctx_dynamic_zo_budget_recommendation",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "AdsMessagesCampaignCTXDynamicBudgetQueryUtilCommonQuery",
          selections: [
            {
              condition: "skipQuery",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: o,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "page",
                  plural: !1,
                  selections: [a],
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
          argumentDefinitions: [t, r, e, n],
          kind: "Operation",
          name: "AdsMessagesCampaignCTXDynamicBudgetQueryUtilCommonQuery",
          selections: [
            {
              condition: "skipQuery",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: o,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "page",
                  plural: !1,
                  selections: [
                    a,
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
          id: "25871776265822104",
          metadata: {},
          name: "AdsMessagesCampaignCTXDynamicBudgetQueryUtilCommonQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
