__d(
  "AdsInsightsPortfolioGroupingDataMembersQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "after" },
        t = { defaultValue: null, kind: "LocalArgument", name: "first" },
        n = { defaultValue: null, kind: "LocalArgument", name: "portfolioID" },
        r = [{ kind: "Variable", name: "id", variableName: "portfolioID" }],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: [
                { kind: "Variable", name: "after", variableName: "after" },
                { kind: "Variable", name: "first", variableName: "first" },
              ],
              concreteType: "AdCampaignPortfolioCampaignGroupsConnection",
              kind: "LinkedField",
              name: "campaign_groups",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdCampaignPortfolioCampaignGroupsEdge",
                  kind: "LinkedField",
                  name: "edges",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "AdCampaignGroup",
                      kind: "LinkedField",
                      name: "node",
                      plural: !1,
                      selections: [o],
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
            },
          ],
          type: "AdCampaignPortfolio",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: null,
          name: "AdsInsightsPortfolioGroupingDataMembersQuery",
          selections: [
            {
              alias: null,
              args: r,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
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
          argumentDefinitions: [n, t, e],
          kind: "Operation",
          name: "AdsInsightsPortfolioGroupingDataMembersQuery",
          selections: [
            {
              alias: null,
              args: r,
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
                a,
                o,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27681576548208002",
          metadata: {},
          name: "AdsInsightsPortfolioGroupingDataMembersQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
