__d(
  "CometAudioLanguageMenuItemsMutation_preferredLanguagesMutation.graphql",
  [
    "CometAudioLanguageMenuItemsMutation_preferredLanguagesMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "SetUserPreferredAudioLanguagesResponsePayload",
            kind: "LinkedField",
            name: "set_user_preferred_audio_languages",
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
                    name: "has_primary_preferred_audio_language",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "preferred_audio_languages_string",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "preferred_language_string",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "resolved_preferred_audio_languages_string",
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
          name: "CometAudioLanguageMenuItemsMutation_preferredLanguagesMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometAudioLanguageMenuItemsMutation_preferredLanguagesMutation",
          selections: t,
        },
        params: {
          id: n(
            "CometAudioLanguageMenuItemsMutation_preferredLanguagesMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometAudioLanguageMenuItemsMutation_preferredLanguagesMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
