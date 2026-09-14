__d(
  "VideoPlayerScrubberPreview_video.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerScrubberPreview_video",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "video_player_scrubber_preview_renderer",
          plural: !1,
          selections: [
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "VideoPlayerScrubberPreview_video",
                  fragmentName: "VideoPlayerScrubberChapterPreview_video",
                  fragmentPropName: "video",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBVideoPlayerScrubberChapterPreviewRenderer",
              abstractKey: null,
            },
            {
              kind: "InlineFragment",
              selections: [
                {
                  args: null,
                  documentName: "VideoPlayerScrubberPreview_video",
                  fragmentName: "VideoPlayerScrubberDefaultPreview_video",
                  fragmentPropName: "video",
                  kind: "ModuleImport",
                },
              ],
              type: "XFBVideoPlayerScrubberDefaultPreviewRenderer",
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
