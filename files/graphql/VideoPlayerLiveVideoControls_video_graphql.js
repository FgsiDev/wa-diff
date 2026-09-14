__d(
  "VideoPlayerLiveVideoControls_video.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "VideoPlayerLiveVideoControls_video",
        selections: [
          e,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_clipping_enabled",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "live_rewind_enabled",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [e],
            storageKey: null,
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "VideoPlayerWatchAndScrollControl_video",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "LiveVideoLatencyMenuContextProvider_video",
          },
          {
            args: null,
            kind: "FragmentSpread",
            name: "VideoPlayerCaptionsControl_video",
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_see_community_moderation_tools",
            plural: !1,
            selections: [
              {
                args: null,
                documentName: "VideoPlayerLiveVideoControls_video",
                fragmentName: "VideoPlayerModeratorControl_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_use_live_rewind",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "VideoPlayerLiveVideoControls_video_if_viewer_can_use_live_rewind",
                fragmentName: "VideoPlayerLiveRewindControlsGroup_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
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
                  "VideoPlayerLiveVideoControls_video_if_viewer_can_use_clipping",
                fragmentName: "VideoPlayerClipVideoControl_video",
                fragmentPropName: "video",
                kind: "ModuleImport",
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "Video",
            kind: "LinkedField",
            name: "if_viewer_can_see_costreaming_tools",
            plural: !1,
            selections: [
              {
                args: null,
                documentName:
                  "VideoPlayerLiveVideoControls_video_if_viewer_can_see_costreaming_tools",
                fragmentName: "VideoPlayerCostreamingControl_video",
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
    })();
    a.exports = e;
  },
  null,
);
