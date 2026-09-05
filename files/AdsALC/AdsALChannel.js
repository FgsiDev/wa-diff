__d(
  "AdsALChannel",
  [
    "ALChannel",
    "EventListener",
    "ExecutionEnvironment",
    "cancelIdleCallback",
    "hyperionChannel",
    "hyperionTimedTrigger",
    "qex",
    "requestIdleCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("hyperionChannel").Channel),
      u = new s();
    r("ALChannel").pipe(u);
    var c = new s(),
      d = -1,
      m = 2e3,
      p = 6,
      _ = 4,
      f = [],
      g = null,
      h = null,
      y = !1,
      C = null;
    function b() {
      h = r("requestIdleCallback")(
        function (e) {
          h = null;
          var t = 0;
          y = !0;
          try {
            do {
              var n = f.shift();
              if (n == null) break;
              (n(), t++);
            } while (f.length > 0 && t < _ && e.timeRemaining() > p);
          } finally {
            ((y = !1), S());
          }
        },
        { timeout: m },
      );
    }
    function v() {
      h != null && (r("cancelIdleCallback")(h), (h = null));
      var e = f;
      ((f = []), (y = !0));
      try {
        e.forEach(function (e) {
          return e();
        });
      } finally {
        y = !1;
      }
    }
    function S() {
      if (!(g != null || h != null || f.length === 0)) {
        var e = r("qex")._("2206") === !0;
        if ((E(e), e)) {
          b();
          return;
        }
        g = new (o("hyperionTimedTrigger").TimedTrigger)(
          function () {
            ((g = null), v());
          },
          d,
          !0,
        );
      }
    }
    function R() {
      if (g != null) {
        g.run();
        return;
      }
      v();
    }
    (u.pipe(c, function (e) {
      if (y) {
        e();
        return;
      }
      (f.push(e), S());
    }),
      u.addListener("al_ui_event_capture", function (e) {
        if (e.event === "click") {
          var t;
          if (
            (e.element != null &&
              e.element.nodeName === "A" &&
              (t = e.element.getAttribute("href")),
            t == null)
          ) {
            var n,
              r = (n = e.domEvent) == null ? void 0 : n.target;
            r instanceof HTMLElement &&
              r.nodeName === "A" &&
              (t = r.getAttribute("href"));
          }
          t != null && ((e.metadata.target_url = t), R());
        }
      }));
    function L() {
      (R(), (y = !0));
    }
    function E(t) {
      !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        C != null ||
        (t
          ? (C = r("EventListener").listen(window, "beforeunload", L))
          : (C = r("EventListener").listen(window, "beforeUnload", L)));
    }
    ((l.AdsALChannel = u), (l.AdsALAsyncChannel = c));
  },
  98,
);
