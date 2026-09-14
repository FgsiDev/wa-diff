__d(
  "VideoPlayerScrubberRenderer_video.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerScrubberRenderer_video",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "video_player_scrubber_base_content_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "VideoPlayerScrubberRenderer_video",
                  fragmentName:
                    "VideoPlayerScrubberBaseContentSegmented_renderer",
                  fragmentPropName: "renderer",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBVideoPlayerScrubberBaseContentSegmentedRenderer",
              abstractKey: null,
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
