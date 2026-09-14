__d(
  "LiveVideoCopyrightActionSubscription.graphql",
  ["LiveVideoCopyrightActionSubscription_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "LiveVideoCopyrightActionSubscribeResponsePayload",
            kind: "LinkedField",
            name: "live_video_copyright_action_subscribe",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "action",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "timestamp",
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
          name: "LiveVideoCopyrightActionSubscription",
          selections: t,
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "LiveVideoCopyrightActionSubscription",
          selections: t,
        },
        params: {
          id: n("LiveVideoCopyrightActionSubscription_facebookRelayOperation"),
          metadata: {
            subscriptionName: "live_video_copyright_action_subscribe",
          },
          name: "LiveVideoCopyrightActionSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
