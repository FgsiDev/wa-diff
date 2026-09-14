__d(
  "AdsInsightsBudgetPoolGroupingDataQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        t = { defaultValue: null, kind: "LocalArgument", name: "after" },
        n = { defaultValue: null, kind: "LocalArgument", name: "first" },
        r = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: [
            { kind: "Variable", name: "after", variableName: "after" },
            { kind: "Variable", name: "first", variableName: "first" },
          ],
          concreteType: "AdAccountBudgetPoolsConnection",
          kind: "LinkedField",
          name: "budget_pools",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdAccountBudgetPoolsEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdBudgetPool",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    o,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "PageInfo",
              kind: "LinkedField",
              name: "page_info",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_next_page",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "end_cursor",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "AdsInsightsBudgetPoolGroupingDataQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [a],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t],
          kind: "Operation",
          name: "AdsInsightsBudgetPoolGroupingDataQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [a, o],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27093363896971894",
          metadata: {},
          name: "AdsInsightsBudgetPoolGroupingDataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
