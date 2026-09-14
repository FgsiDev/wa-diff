__d(
  "fetchVideoCastPayload",
  [
    "CometRelay",
    "Promise",
    "err",
    "fetchVideoCastPayloadQuery.graphql",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e !== void 0 ? e : (e = n("fetchVideoCastPayloadQuery.graphql"));
    function c(e) {
      var t = e.castSessionID,
        a = e.environment,
        i = e.playerOrigin,
        l = e.playerSubOrigin,
        c = e.videoID;
      return r("gkx")("20113")
        ? (s || (s = n("Promise"))).resolve({ type: "video_cannot_be_casted" })
        : o("CometRelay")
            .fetchQuery(a, u, {
              castSessionID: t,
              playerOrigin: i,
              playerSubOrigin: l,
              videoID: c,
            })
            .toPromise()
            .then(function (e) {
              return e == null ||
                e.video == null ||
                e.video.video_cast_payload == null
                ? { type: "video_cannot_be_casted" }
                : typeof e.video.video_cast_payload == "string"
                  ? { payload: e.video.video_cast_payload, type: "loaded" }
                  : {
                      error: r("err")("Payload was not string"),
                      type: "error",
                    };
            })
            .catch(function (e) {
              var t = r("getErrorSafe")(e);
              return { error: t, type: "error" };
            });
    }
    l.default = c;
  },
  98,
);
