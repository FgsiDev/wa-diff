__d(
  "onCanPlayHTMLMediaElement",
  ["invariant", "EventListener", "HTMLMediaElementReadyStates", "setImmediate"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e >= r("HTMLMediaElementReadyStates").HAVE_FUTURE_DATA;
    }
    function u(t, n) {
      return (
        t instanceof window.HTMLMediaElement || s(0, 4493),
        e(t.readyState) && r("setImmediate")(n),
        r("EventListener").listen(t, "canplay", n)
      );
    }
    ((u.once = function (e, t) {
      var n = u(e, function () {
        n && (n.remove(), (n = null), t.apply(void 0, arguments));
      });
    }),
      (l.default = u));
  },
  98,
);
