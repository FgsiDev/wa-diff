__d(
  "VideoPlayerWatchAndScrollControl_video.graphql",
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
        name: "VideoPlayerWatchAndScrollControl_video",
        selections: [
          e,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "playable_duration_in_ms",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "owner",
            plural: !1,
            selections: [
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_professional_features_for_watch",
                    storageKey: null,
                  },
                ],
                type: "VideoOwner",
                abstractKey: "__isVideoOwner",
              },
              e,
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_huddle",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
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
