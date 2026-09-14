__d(
  "AdsAccountHasCapabilityQueryPlugin_Query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "accountID" },
          { defaultValue: null, kind: "LocalArgument", name: "capability" },
        ],
        t = { vultureHash: "3Iv9oGdoH8QN2TErU-2Vljq-XvQ=" },
        n = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        r = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "capability",
              variableName: "capability",
            },
          ],
          kind: "ScalarField",
          name: "has_capability",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: t,
          name: "AdsAccountHasCapabilityQueryPlugin_Query",
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
          name: "AdsAccountHasCapabilityQueryPlugin_Query",
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
          id: "9943304682401366",
          metadata: t,
          name: "AdsAccountHasCapabilityQueryPlugin_Query",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
