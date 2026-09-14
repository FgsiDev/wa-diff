__d(
  "AdAccountProductExtensionsCatalogEligibilityRelayStoreQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          { defaultValue: null, kind: "LocalArgument", name: "adgroupID" },
          { defaultValue: null, kind: "LocalArgument", name: "isCTM" },
          { defaultValue: null, kind: "LocalArgument", name: "pageID" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "adAccountID",
          },
        ],
        n = {
          alias: null,
          args: [
            { kind: "Variable", name: "adgroup_id", variableName: "adgroupID" },
            { kind: "Variable", name: "is_ctm", variableName: "isCTM" },
            { kind: "Variable", name: "page_id", variableName: "pageID" },
          ],
          kind: "ScalarField",
          name: "has_product_extensions_eligible_catalog",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdAccountProductExtensionsCatalogEligibilityRelayStoreQuery",
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
          name: "AdAccountProductExtensionsCatalogEligibilityRelayStoreQuery",
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
          id: "26688971660779415",
          metadata: {},
          name: "AdAccountProductExtensionsCatalogEligibilityRelayStoreQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
