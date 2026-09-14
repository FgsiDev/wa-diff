__d(
  "VideosRenderingInstrumentation",
  ["DataStore", "VideoPlayerHTML5Experiments", "performanceAbsoluteNow"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = r("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers
        ? (e || (e = r("performanceAbsoluteNow")))()
        : Date.now();
      return (o("DataStore").set(t, "videos_rendering_instrumentation", n), n);
    }
    function u(e) {
      var t = o("DataStore").get(e, "videos_rendering_instrumentation", NaN);
      return (Number.isNaN(t) && (t = s(e)), t);
    }
    ((l.storeRenderTime = s), (l.retrieveRenderTime = u));
  },
  98,
);
