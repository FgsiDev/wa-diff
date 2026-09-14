__d(
  "FBEventsUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = !("addEventListener" in document);
    function l(t, n, r) {
      var o = e ? "on" + n : n,
        a = function () {
          (e
            ? t.detachEvent && t.detachEvent(o, a)
            : t.removeEventListener(o, a, !1),
            r());
        };
      e ? t.attachEvent && t.attachEvent(o, a) : t.addEventListener(o, a, !1);
    }
    i.listenOnce = l;
  },
  66,
);
