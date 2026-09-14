__d(
  "AdsProfileVisitSABRCreationUtilsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "ad_account_id",
                    variableName: "accountID",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "AdsManagerProfileVisitSabrDefaultResponse",
            kind: "LinkedField",
            name: "ads_manager_profile_visit_sabr_default",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "daily_budget_usd",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsProfileVisitSABRCreationUtilsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsProfileVisitSABRCreationUtilsQuery",
          selections: t,
        },
        params: {
          id: "24323774810639690",
          metadata: {},
          name: "AdsProfileVisitSABRCreationUtilsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
