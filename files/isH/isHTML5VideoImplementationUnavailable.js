__d(
  "isHTML5VideoImplementationUnavailable",
  ["VideoMimeTypes", "canVideoPlayType", "supportsHTML5Video"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e) {
        var t = r("canVideoPlayType")(r("VideoMimeTypes").h264main30avc);
        return t !== "probably";
      }
      return !r("supportsHTML5Video")();
    }
    l.default = e;
  },
  98,
);
