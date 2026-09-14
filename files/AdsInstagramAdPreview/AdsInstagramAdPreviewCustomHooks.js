__d(
  "AdsInstagramAdPreviewCustomHooks",
  [
    "EventListener",
    "SubRipText",
    "XHRRequest",
    "getCrossOriginTransport",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      if (!(e == null || t == null)) {
        var n = t.current;
        n instanceof HTMLVideoElement &&
          (Array.from(n.textTracks)
            .filter(Boolean)
            .forEach(function (e) {
              return (e.mode = "hidden");
            }),
          r("EventListener").listen(n, "play", function () {
            Array.from(n.textTracks)
              .filter(Boolean)
              .forEach(function (t) {
                if (((t.mode = "showing"), e && t.cues != null))
                  for (var n of t.cues) n.line = e;
              });
          }));
      }
    }
    function m(e, t, n) {
      var a = o("react-compiler-runtime").c(5),
        i = c(null),
        l,
        s;
      return (
        a[0] !== n || a[1] !== t || a[2] !== e
          ? ((l = function () {
              var o = i.current,
                a = new (r("XHRRequest"))(e);
              return (
                e !== null &&
                  o &&
                  o instanceof HTMLTrackElement &&
                  (a
                    .setTransportBuilder(r("getCrossOriginTransport"))
                    .setMethod("GET")
                    .setResponseHandler(function (e) {
                      var a = new (r("SubRipText"))(e),
                        i = new Blob([a.renderVTT()], { type: "text/vtt" }),
                        l = URL.createObjectURL(i);
                      ((o.src = l), d(t, n));
                    }),
                  a.send()),
                function () {
                  a.abort();
                }
              );
            }),
            (s = [e, t, n]),
            (a[0] = n),
            (a[1] = t),
            (a[2] = e),
            (a[3] = l),
            (a[4] = s))
          : ((l = a[3]), (s = a[4])),
        u(l, s),
        i
      );
    }
    l.useVideoSubtitleTrack = m;
  },
  98,
);
