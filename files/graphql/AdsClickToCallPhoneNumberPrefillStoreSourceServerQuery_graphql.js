__d(
  "AdsClickToCallPhoneNumberPrefillStoreSourceServerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "ad_account_id" },
          { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "ad_account_id",
          },
        ],
        n = {
          alias: null,
          args: [
            { kind: "Variable", name: "page_id", variableName: "page_id" },
          ],
          kind: "ScalarField",
          name: "get_prefill_phone_number_from_page",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsClickToCallPhoneNumberPrefillStoreSourceServerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [n],
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
          name: "AdsClickToCallPhoneNumberPrefillStoreSourceServerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
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
        params: {
          id: "30019069424373000",
          metadata: {},
          name: "AdsClickToCallPhoneNumberPrefillStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
