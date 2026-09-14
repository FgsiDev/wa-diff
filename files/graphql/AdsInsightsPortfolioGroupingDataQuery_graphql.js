__d(
  "AdsInsightsPortfolioGroupingDataQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        t = { defaultValue: null, kind: "LocalArgument", name: "after" },
        n = { defaultValue: null, kind: "LocalArgument", name: "first" },
        r = { defaultValue: null, kind: "LocalArgument", name: "memberFirst" },
        o = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
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
        l = {
          alias: null,
          args: [
            { kind: "Variable", name: "after", variableName: "after" },
            { kind: "Variable", name: "first", variableName: "first" },
          ],
          concreteType: "AdAccountCampaignPortfoliosConnection",
          kind: "LinkedField",
          name: "campaign_portfolios",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdAccountCampaignPortfoliosEdge",
              kind: "LinkedField",
              name: "edges",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "AdCampaignPortfolio",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    a,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        {
                          kind: "Variable",
                          name: "first",
                          variableName: "memberFirst",
                        },
                      ],
                      concreteType:
                        "AdCampaignPortfolioCampaignGroupsConnection",
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
                              selections: [a],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        i,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            i,
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "AdsInsightsPortfolioGroupingDataQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [l],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t, r],
          kind: "Operation",
          name: "AdsInsightsPortfolioGroupingDataQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [l, a],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28068839426119809",
          metadata: {},
          name: "AdsInsightsPortfolioGroupingDataQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
