__d(
  "VideoPlayerDefaultControlsImplNotLive_video.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerDefaultControlsImplNotLive_video",
      selections: [
        {
          fragment: {
            kind: "InlineFragment",
            selections: [
              {
                kind: "Defer",
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometAudioLanguageUtils_dubtrackMapping",
                  },
                ],
              },
            ],
            type: "Video",
            abstractKey: null,
          },
          kind: "AliasedInlineFragmentSpread",
          name: "CometAudioLanguageUtils_dubtrackMapping",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerScrubberWithPreview_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerWatchAndScrollControl_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerCaptionsControl_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "useVideoPlayerAvailableCaptionsLocalesFromRelay_video",
        },
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
          concreteType: "Video",
          kind: "LinkedField",
          name: "if_viewer_can_use_clipping",
          plural: !1,
          selections: [
            {
              args: null,
              documentName:
                "VideoPlayerDefaultControlsImplNotLive_video_if_viewer_can_use_clipping",
              fragmentName: "VideoPlayerClipVideoControl_video",
              fragmentPropName: "video",
              kind: "ModuleImport",
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
