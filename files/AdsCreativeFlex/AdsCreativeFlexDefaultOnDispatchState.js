__d(
  "AdsCreativeFlexDefaultOnDispatchState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map(),
      l = new Map();
    function s(e) {
      var t;
      return (t = l.get(e)) != null ? t : 0;
    }
    function u(t) {
      t.forEach(function (t) {
        return e.set(t, !0);
      });
    }
    function c(t) {
      t.forEach(function (t) {
        (e.set(t, !1), l.set(t, s(t) + 1));
      });
    }
    function d(t) {
      return (
        t.length > 0 &&
        t.every(function (t) {
          return e.get(t) === !0;
        })
      );
    }
    function m(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          return t.set(e, s(e));
        }),
        t
      );
    }
    function p(e) {
      var t = !1;
      return (
        e.forEach(function (e, n) {
          s(n) !== e && (t = !0);
        }),
        t
      );
    }
    ((i.markCreativeFlexDefaultOnDispatched = u),
      (i.resetCreativeFlexDefaultOnDispatched = c),
      (i.isCreativeFlexDefaultOnDispatched = d),
      (i.captureCreativeFlexDefaultOnGeneration = m),
      (i.isCreativeFlexDefaultOnSuperseded = p));
  },
  66,
);
