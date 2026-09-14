__d(
  "fetchCtvCastPayload",
  [
    "CometRelay",
    "err",
    "fetchCtvCastPayloadQuery.graphql",
    "getErrorSafe",
    "guid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("fetchCtvCastPayloadQuery.graphql"));
    function u(e) {
      var t = e.castSessionID,
        n = e.environment;
      return o("CometRelay")
        .fetchQuery(n, s, {
          castSessionID: t,
          mediaParameters: "{}",
          requestID: r("guid")(),
        })
        .toPromise()
        .then(function (e) {
          return e != null &&
            e.ctv_cast_payload != null &&
            typeof e.ctv_cast_payload == "string"
            ? { payload: e.ctv_cast_payload, type: "loaded" }
            : { error: r("err")("Payload was not string"), type: "error" };
        })
        .catch(function (e) {
          var t = r("getErrorSafe")(e);
          return { error: t, type: "error" };
        });
    }
    function c(e) {
      var t = e.albumID,
        n = e.castSessionID,
        a = e.environment;
      return o("CometRelay")
        .fetchQuery(a, s, {
          castSessionID: n,
          mediaParameters: JSON.stringify({ album_id: t }),
          requestID: r("guid")(),
        })
        .toPromise()
        .then(function (e) {
          return typeof (e == null ? void 0 : e.ctv_cast_payload) == "string"
            ? { payload: e.ctv_cast_payload, type: "loaded" }
            : { error: r("err")("Payload was not string"), type: "error" };
        })
        .catch(function (e) {
          var t = r("getErrorSafe")(e);
          return { error: t, type: "error" };
        });
    }
    ((l.fetchPhotoCastPayload = u), (l.fetchAlbumCastPayload = c));
  },
  98,
);
