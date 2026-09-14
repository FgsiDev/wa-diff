__d(
  "VideoComponentWithLoopingPlaybackQuery.graphql",
  ["VideoComponentWithLoopingPlaybackQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "videoID" }],
        t = [{ kind: "Variable", name: "id", variableName: "videoID" }],
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: "isLooping",
              args: null,
              kind: "ScalarField",
              name: "is_looping",
              storageKey: null,
            },
            {
              alias: "loopCount",
              args: null,
              kind: "ScalarField",
              name: "loop_count",
              storageKey: null,
            },
          ],
          type: "Video",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "VideoComponentWithLoopingPlaybackQuery",
          selections: [
            {
              alias: "video",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [r],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "VideoComponentWithLoopingPlaybackQuery",
          selections: [
            {
              alias: "video",
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "node",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                r,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "VideoComponentWithLoopingPlaybackQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "VideoComponentWithLoopingPlaybackQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
