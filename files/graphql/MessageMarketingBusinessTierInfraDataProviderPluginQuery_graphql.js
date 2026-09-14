__d(
  "MessageMarketingBusinessTierInfraDataProviderPluginQuery.graphql",
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
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "campaign_group_id",
                variableName: "campaignGroupID",
              },
            ],
            kind: "ScalarField",
            name: "xfb_message_marketing_business_tier_infra",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MessageMarketingBusinessTierInfraDataProviderPluginQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MessageMarketingBusinessTierInfraDataProviderPluginQuery",
          selections: t,
        },
        params: {
          id: "10095359770484791",
          metadata: {},
          name: "MessageMarketingBusinessTierInfraDataProviderPluginQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
