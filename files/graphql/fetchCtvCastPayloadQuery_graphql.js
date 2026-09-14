__d(
  "fetchCtvCastPayloadQuery.graphql",
  ["fetchCtvCastPayloadQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "castSessionID",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "mediaParameters",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "requestID" },
        o = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "cast_session_id",
                variableName: "castSessionID",
              },
              { kind: "Literal", name: "caster_id", value: 0 },
              {
                kind: "Variable",
                name: "media_parameters_json",
                variableName: "mediaParameters",
              },
              {
                kind: "Literal",
                name: "receiver_app_id",
                value: 0x5bc08d3f803b9,
              },
              {
                kind: "Variable",
                name: "request_id",
                variableName: "requestID",
              },
              { kind: "Literal", name: "uses_secure_connection", value: !0 },
            ],
            kind: "ScalarField",
            name: "ctv_cast_payload",
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "fetchCtvCastPayloadQuery",
          selections: o,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t],
          kind: "Operation",
          name: "fetchCtvCastPayloadQuery",
          selections: o,
        },
        params: {
          id: n("fetchCtvCastPayloadQuery_facebookRelayOperation"),
          metadata: {},
          name: "fetchCtvCastPayloadQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
