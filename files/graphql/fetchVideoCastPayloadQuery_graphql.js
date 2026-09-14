__d(
  "fetchVideoCastPayloadQuery.graphql",
  ["fetchVideoCastPayloadQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "castSessionID",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "playerOrigin" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "playerSubOrigin",
        },
        o = { defaultValue: null, kind: "LocalArgument", name: "videoID" },
        a = [{ kind: "Variable", name: "id", variableName: "videoID" }],
        i = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "cast_session_id",
              variableName: "castSessionID",
            },
            {
              kind: "Variable",
              name: "player_origin",
              variableName: "playerOrigin",
            },
            {
              kind: "Variable",
              name: "player_suborigin",
              variableName: "playerSubOrigin",
            },
          ],
          kind: "ScalarField",
          name: "video_cast_payload",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "fetchVideoCastPayloadQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [i],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [o, t, r, e],
          kind: "Operation",
          name: "fetchVideoCastPayloadQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "Video",
              kind: "LinkedField",
              name: "video",
              plural: !1,
              selections: [
                i,
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
          id: n("fetchVideoCastPayloadQuery_facebookRelayOperation"),
          metadata: {},
          name: "fetchVideoCastPayloadQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
