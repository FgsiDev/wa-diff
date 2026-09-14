__d(
  "CometAudioLanguageUtils_dubbingInfo.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        {
          kind: "RootArgument",
          name: "__relay_internal__pv__CometAudioLanguageUtils_comet_translations_revamp_preferred_languages_gkrelayprovider",
        },
      ],
      kind: "Fragment",
      metadata: null,
      name: "CometAudioLanguageUtils_dubbingInfo",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "viewer_best_language_prediction_for_dubbing",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "audio_user_preferred_language",
          storageKey: null,
        },
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
              name: "do_not_translate_languages_string",
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
              condition:
                "__relay_internal__pv__CometAudioLanguageUtils_comet_translations_revamp_preferred_languages_gkrelayprovider",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "resolved_preferred_audio_languages_string",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "has_primary_preferred_audio_language",
                  storageKey: null,
                },
              ],
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBDubbedTrackMap",
          kind: "LinkedField",
          name: "dubbed_track_mapping",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "audio_lang",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "dubbing_type",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
