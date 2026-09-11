__d(
  "CometUFILiveTypingBroadcastMutation_StartMutation.graphql",
  ["CometUFILiveTypingBroadcastMutation_StartMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "FeedbackStartTypingResponsePayload",
            kind: "LinkedField",
            name: "feedback_start_typing",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: [
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
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "CometUFILiveTypingBroadcastMutation_StartMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometUFILiveTypingBroadcastMutation_StartMutation",
          selections: t,
        },
        params: {
          id: n(
            "CometUFILiveTypingBroadcastMutation_StartMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometUFILiveTypingBroadcastMutation_StartMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
