__d(
  "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation.graphql",
  [
    "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "nux_id" }],
        t = [{ kind: "Variable", name: "nux_id", variableName: "nux_id" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "nux_id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "log_nux_view_and_increment_view_count",
              plural: !1,
              selections: [r],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "log_nux_view_and_increment_view_count",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
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
          id: n(
            "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometLogImpressionFBNuxMutationWithNoImpressionLimitMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
