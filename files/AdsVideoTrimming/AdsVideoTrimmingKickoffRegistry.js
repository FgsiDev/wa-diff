__d(
  "AdsVideoTrimmingKickoffRegistry",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useSyncExternalStore;
    function d() {
      var e = new Set(),
        t = new Map(),
        n = function (n) {
          for (var e of (r = t.get(n)) != null ? r : []) {
            var r;
            e();
          }
        };
      return {
        has: function (n) {
          return e.has(n);
        },
        mark: function (r) {
          e.has(r) || (e.add(r), n(r));
        },
        clear: function (r) {
          e.delete(r) && n(r);
        },
        subscribe: function (n, r) {
          var e,
            o = (e = t.get(n)) != null ? e : new Set();
          return (
            o.add(r),
            t.set(n, o),
            function () {
              (o.delete(r), o.size === 0 && t.delete(n));
            }
          );
        },
      };
    }
    function m(e, t) {
      var n = o("react-compiler-runtime").c(6),
        r;
      n[0] !== e || n[1] !== t
        ? ((r = function (r) {
            return t == null ? p : e.subscribe(t, r);
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r))
        : (r = n[2]);
      var a = r,
        i;
      n[3] !== e || n[4] !== t
        ? ((i = function () {
            return t != null && e.has(t);
          }),
          (n[3] = e),
          (n[4] = t),
          (n[5] = i))
        : (i = n[5]);
      var l = i;
      return c(a, l, l);
    }
    function p() {}
    var _ = d();
    function f(e, t) {
      return e + ":" + t;
    }
    function g(e, t) {
      _.mark(f(e, t));
    }
    function h(e, t) {
      _.clear(f(e, t));
    }
    function y(e, t) {
      var n = o("react-compiler-runtime").c(3),
        r;
      return (
        n[0] !== e || n[1] !== t
          ? ((r = e != null && t != null ? f(e, t) : null),
            (n[0] = e),
            (n[1] = t),
            (n[2] = r))
          : (r = n[2]),
        m(_, r)
      );
    }
    var C = d(),
      b = new Map();
    function v(e, t) {
      (b.set(e, t), C.mark(e));
    }
    function S(e) {
      return b.get(e);
    }
    function R(e) {
      (b.delete(e), C.clear(e));
    }
    function L(e) {
      return m(C, e);
    }
    ((l.markVideoTrimmingRunStarted = g),
      (l.clearVideoTrimmingRunStarted = h),
      (l.useHasVideoTrimmingRunStarted = y),
      (l.markVideoTrimmingKickoffDeferred = v),
      (l.getVideoIDAtVideoTrimmingDeferral = S),
      (l.clearVideoTrimmingKickoffDeferred = R),
      (l.useIsVideoTrimmingKickoffDeferred = L));
  },
  98,
);
