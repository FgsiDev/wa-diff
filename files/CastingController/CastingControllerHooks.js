__d(
  "CastingControllerHooks",
  [
    "CastingContext",
    "CastingController",
    "CastingEventReporter",
    "CastingReceiverManager",
    "CurrentUser",
    "ExecutionEnvironment",
    "FBLogger",
    "Promise",
    "guid",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useContext,
      m = c.useEffect,
      p = c.useState,
      _ = null;
    function f() {
      if (_ != null) return _;
      var e = new (r("CastingReceiverManager"))("AAF8F49E"),
        t = r("guid")(),
        n = new (r("CastingController"))(e, t),
        o = new (r("CastingEventReporter"))(t);
      return (
        o.bindToCastingController(n),
        (_ = {
          castingController: n,
          castingEventReporter: o,
          castingReceiverManager: e,
        }),
        _
      );
    }
    function g() {
      var e = h(),
        t = e.castingReceiverManager;
      return t;
    }
    function h() {
      var t = o("react-compiler-runtime").c(1);
      if (
        (s || (s = r("ExecutionEnvironment"))).canUseDOM &&
        r("CurrentUser").isLoggedIn()
      ) {
        var a;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = f()), (t[0] = a))
            : (a = t[0]),
          a
        );
      }
      throw new (e || (e = n("Promise")))(y);
    }
    function y() {}
    function C() {
      var e = h(),
        t = e.castingController;
      return t;
    }
    function b() {
      var e = o("react-compiler-runtime").c(6),
        t = g(),
        n = d(o("CastingContext").SetCastingControllerContext),
        r = p(!1),
        a = r[0],
        i = r[1],
        l = p(!1),
        s = l[0],
        u = l[1],
        c,
        _;
      (e[0] !== t
        ? ((c = function () {
            var e = t.onExperienceReady(function () {
              i(t.hasSupport() || !1);
            });
            return (
              i(t.hasSupport() || !1),
              function () {
                return e.remove();
              }
            );
          }),
          (_ = [t]),
          (e[0] = t),
          (e[1] = c),
          (e[2] = _))
        : ((c = e[1]), (_ = e[2])),
        m(c, _));
      var f, h;
      return (
        e[3] !== t
          ? ((f = function () {
              var e = t.onReceiverStatusChanged(function () {
                u(t.hasFoundReceiver() || !1);
              });
              return (
                u(t.hasFoundReceiver() || !1),
                function () {
                  return e.remove();
                }
              );
            }),
            (h = [t]),
            (e[3] = t),
            (e[4] = f),
            (e[5] = h))
          : ((f = e[4]), (h = e[5])),
        m(f, h),
        !(n == null || !a || !s)
      );
    }
    function v() {
      var e = o("react-compiler-runtime").c(4),
        t = C(),
        n = d(o("CastingContext").SetCastingControllerContext);
      if (n == null)
        throw r("FBLogger")("comet_cast_sender").mustfixThrow(
          "Casting has to be initialized inside CastingProvider.",
        );
      var a, i;
      (e[0] !== t || e[1] !== n
        ? ((a = function () {
            n(t);
          }),
          (i = [n, t]),
          (e[0] = t),
          (e[1] = n),
          (e[2] = a),
          (e[3] = i))
        : ((a = e[2]), (i = e[3])),
        m(a, i));
    }
    ((l.useCastingController = C),
      (l.useIsCastAvailable = b),
      (l.useCastingInitializeIfNecessary = v));
  },
  98,
);
