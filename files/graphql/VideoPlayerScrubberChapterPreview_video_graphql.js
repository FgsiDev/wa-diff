__d(
  "VideoPlayerScrubberChapterPreview_video.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerScrubberChapterPreview_video",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Video",
          kind: "LinkedField",
          name: "video",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "ScrubberChapter",
              kind: "LinkedField",
              name: "scrubber_chapters",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "chapter_timestamp_s",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "chapter_label",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "ScrubberPreview",
              kind: "LinkedField",
              name: "scrubber_preview_thumbnail_information",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "VideoPlayerScrubberPreviewThumbnail_thumbnailInfo",
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "VideoVideoChaptersConnection",
              kind: "LinkedField",
              name: "video_chapters",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "VideoChapter",
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "headline",
                        storageKey: null,
                      },
                      action: "LOG",
                      path: "video.video_chapters.nodes.headline",
                    },
                    {
                      kind: "RequiredField",
                      field: {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "start_time",
                        storageKey: null,
                      },
                      action: "LOG",
                      path: "video.video_chapters.nodes.start_time",
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBVideoPlayerScrubberChapterPreviewRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
