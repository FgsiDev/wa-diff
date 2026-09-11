__d(
  "KeyframesVideoUtils",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = window.setTimeout,
      s = 4;
    function u(e) {
      var t = document.createElement("video");
      return (
        t.setAttribute("webkit-playsinline", ""),
        t.setAttribute("playsinline", ""),
        (t.autoplay = !1),
        (t.src = e),
        (t.currentTime = 0),
        e.startsWith("blob:") || (t.crossOrigin = "anonymous"),
        t
      );
    }
    function c(t, r) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var o = function () {
            (t.pause(),
              (t.currentTime = r),
              t.removeEventListener("canplaythrough", o),
              a());
          },
          a = function () {
            t.readyState === s ? e(t) : l(a, 10);
          },
          i = function (r) {
            (t.removeEventListener("error", i), n(r));
          };
        ((t.currentTime = r),
          t.addEventListener("error", i),
          t.readyState === s ? e(t) : t.addEventListener("canplaythrough", o));
      });
    }
    ((i.createVideo = u), (i.loadVideo = c));
  },
  66,
);
