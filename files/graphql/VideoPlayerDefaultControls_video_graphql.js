__d(
  "VideoPlayerDefaultControls_video.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "VideoPlayerDefaultControls_video",
      selections: [
        {
          alias: "if_copy_timestamp_link_enabled",
          args: [
            {
              kind: "Literal",
              name: "gk",
              value: "work_video_copy_timestamp_link",
            },
          ],
          concreteType: "Video",
          kind: "LinkedField",
          name: "if_gk",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "url",
              storageKey: null,
            },
          ],
          storageKey: 'if_gk(gk:"work_video_copy_timestamp_link")',
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerDefaultControlsImplLive_video",
        },
        {
          args: null,
          kind: "FragmentSpread",
          name: "VideoPlayerDefaultControlsImplNotLive_video",
        },
      ],
      type: "Video",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
