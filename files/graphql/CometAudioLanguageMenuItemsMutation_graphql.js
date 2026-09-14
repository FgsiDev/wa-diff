__d(
  "CometAudioLanguageMenuItemsMutation.graphql",
  ["CometAudioLanguageMenuItemsMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "SetUserPreferredAudioLanguageResponsePayload",
            kind: "LinkedField",
            name: "set_user_preferred_audio_language",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AudioSettings",
                kind: "LinkedField",
                name: "audio_settings",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "preferred_language_string",
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
          name: "CometAudioLanguageMenuItemsMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometAudioLanguageMenuItemsMutation",
          selections: t,
        },
        params: {
          id: n("CometAudioLanguageMenuItemsMutation_facebookRelayOperation"),
          metadata: {},
          name: "CometAudioLanguageMenuItemsMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
