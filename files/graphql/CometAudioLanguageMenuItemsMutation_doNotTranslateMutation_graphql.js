__d(
  "CometAudioLanguageMenuItemsMutation_doNotTranslateMutation.graphql",
  [
    "CometAudioLanguageMenuItemsMutation_doNotTranslateMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "SetUserDoNotTranslateAudioLanguagesResponsePayload",
            kind: "LinkedField",
            name: "set_user_do_not_translate_audio_languages",
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
                    name: "do_not_translate_languages_string",
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
          name: "CometAudioLanguageMenuItemsMutation_doNotTranslateMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "CometAudioLanguageMenuItemsMutation_doNotTranslateMutation",
          selections: t,
        },
        params: {
          id: n(
            "CometAudioLanguageMenuItemsMutation_doNotTranslateMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "CometAudioLanguageMenuItemsMutation_doNotTranslateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
