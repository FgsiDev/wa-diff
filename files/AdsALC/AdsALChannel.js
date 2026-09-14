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
      m = 6,
      p = [],
      _ = null,
      f = null,
      g = !1,
      h = null;
    function y() {
      f = r("requestIdleCallback")(function (e) {
        ((f = null), (g = !0));
        try {
          for (; p.length > 0 && e.timeRemaining() > m; ) {
            var t = p.shift();
            if (t == null) break;
            t();
          }
        } finally {
          ((g = !1), b());
        }
      });
    }
    function C() {
      f != null && (r("cancelIdleCallback")(f), (f = null));
      var e = p;
      ((p = []), (g = !0));
      try {
        e.forEach(function (e) {
          return e();
        });
      } finally {
        g = !1;
      }
    }
    function b() {
      if (!(_ != null || f != null || p.length === 0)) {
        var e = r("qex")._("2206") === !0;
        if ((R(e), e)) {
          y();
          return;
        }
        _ = new (o("hyperionTimedTrigger").TimedTrigger)(
          function () {
            ((_ = null), C());
          },
          d,
          !0,
        );
      }
    }
    function v() {
      if (_ != null) {
        _.run();
        return;
      }
      C();
    }
    (u.pipe(c, function (e) {
      if (g) {
        e();
        return;
      }
      (p.push(e), b());
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
          t != null && ((e.metadata.target_url = t), v());
        }
      }));
    function S() {
      (v(), (g = !0));
    }
    function R(t) {
      !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        h != null ||
        (t
          ? (h = r("EventListener").listen(window, "beforeunload", S))
          : (h = r("EventListener").listen(window, "beforeUnload", S)));
    }
    ((l.AdsALChannel = u), (l.AdsALAsyncChannel = c));
  },
  98,
);
