__d(
  "VideoPlayerScrubberBaseContentSegmented_renderer.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerScrubberBaseContentSegmented_renderer",
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
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "start_time",
                      storageKey: null,
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
      type: "XFBVideoPlayerScrubberBaseContentSegmentedRenderer",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
