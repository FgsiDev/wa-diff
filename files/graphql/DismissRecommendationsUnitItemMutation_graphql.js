__d(
  "DismissRecommendationsUnitItemMutation.graphql",
  ["DismissRecommendationsUnitItemMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "XFBDismissRecommendationsUnitItemResponsePayload",
            kind: "LinkedField",
            name: "xfb_dismiss_recommendations_unit_item",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
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
          name: "DismissRecommendationsUnitItemMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "DismissRecommendationsUnitItemMutation",
          selections: t,
        },
        params: {
          id: n(
            "DismissRecommendationsUnitItemMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "DismissRecommendationsUnitItemMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
