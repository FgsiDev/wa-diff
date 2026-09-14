__d(
  "AdsInstagramStoryProgressBar",
  ["Event", "Style", "clearTimeout", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5e3,
      s = 25;
    function u(t, n, o) {
      var a,
        i = Date.now(),
        l = 0,
        u,
        c = 0,
        d = function () {
          (a &&
            ((l = (Date.now() - i + l) % a),
            (i = Date.now()),
            (c = Math.max(0, (l / a) * 100)),
            r("Style").set(n, "width", c + "%")),
            (u = r("setTimeout")(d, s)));
        };
      if (t instanceof HTMLVideoElement) {
        var m = t;
        (o != null && typeof o == "number" && o > 0
          ? (a = o * 1e3)
          : m.readyState >= m.HAVE_METADATA
            ? (a = m.duration * 1e3)
            : r("Event").listen(m, "loadedmetadata", function () {
                a = m.duration * 1e3;
              }),
          r("Event").listen(m, "timeupdate", function () {
            ((i = Date.now()), (l = m.currentTime * 1e3));
          }));
      } else a = e;
      ((u = r("setTimeout")(d, s)),
        r("Event").listen(t, "DOMNodeRemoved", function () {
          return r("clearTimeout")(u);
        }));
    }
    l.init = u;
  },
  98,
);
