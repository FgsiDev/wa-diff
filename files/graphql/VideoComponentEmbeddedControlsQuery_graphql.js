__d(
  "VideoComponentEmbeddedControlsQuery.graphql",
  ["VideoComponentEmbeddedControlsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "videoID" }],
        t = [{ kind: "Variable", name: "id", variableName: "videoID" }],
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: "permalinkUrl",
              args: null,
              kind: "ScalarField",
              name: "permalink_url",
              storageKey: null,
            },
            {
              alias: "canCastVideo",
              args: null,
              kind: "ScalarField",
              name: "can_cast_video",
              storageKey: null,
            },
            {
              alias: "broadcastStatus",
              args: null,
              kind: "ScalarField",
              name: "broadcast_status",
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
          name: "VideoComponentEmbeddedControlsQuery",
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
          name: "VideoComponentEmbeddedControlsQuery",
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
          id: n("VideoComponentEmbeddedControlsQuery_facebookRelayOperation"),
          metadata: {},
          name: "VideoComponentEmbeddedControlsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
