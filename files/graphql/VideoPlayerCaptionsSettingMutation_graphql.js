__d(
  "VideoPlayerCaptionsSettingMutation.graphql",
  ["VideoPlayerCaptionsSettingMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "VideoPlayerCaptionsSettingResponsePayload",
            kind: "LinkedField",
            name: "video_player_captions_setting",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
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
          name: "VideoPlayerCaptionsSettingMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "VideoPlayerCaptionsSettingMutation",
          selections: t,
        },
        params: {
          id: n("VideoPlayerCaptionsSettingMutation_facebookRelayOperation"),
          metadata: {},
          name: "VideoPlayerCaptionsSettingMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
