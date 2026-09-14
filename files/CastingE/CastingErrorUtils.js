__d(
  "CastingErrorUtils",
  ["ErrorMetadata", "err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        e != null &&
        typeof e == "object" &&
        typeof e.code == "string" &&
        e.code === t
      );
    }
    function s(e) {
      return e != null && typeof e == "object" && typeof e.code == "string"
        ? r("err")(
            "Chromecast error: %s, keys: %s",
            "cast.ChromecastError",
            JSON.stringify({ code: e.code }),
          )
        : r("getErrorSafe")(e);
    }
    function u(e, t) {
      e.metadata == null && (e.metadata = new (r("ErrorMetadata"))());
      var n = e.metadata,
        o = t == null ? void 0 : t.videoID;
      return (o != null && n.addEntries(["COMET_VIDEO", "VIDEO_ID", o]), e);
    }
    ((l.isChromecastError = e),
      (l.getCastingErrorSafe = s),
      (l.appendCastingMetadataToExpandedError = u));
  },
  98,
);
