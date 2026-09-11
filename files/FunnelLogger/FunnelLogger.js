__d(
  "FunnelLogger",
  [
    "Banzai",
    "FBLogger",
    "Funnel",
    "FunnelLoggerSampler",
    "FunnelRegistry",
    "FunnelReliabilityStatsCollector",
    "MarauderLogger",
    "clearTimeout",
    "gkx",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {},
      s = !1,
      u = !0;
    function c(e, t) {
      P(e, t);
    }
    function d(e, t, n) {
      P(e, n, t);
    }
    function m(t, n) {
      var r = M(t, n);
      return w(r) ? e[r] : null;
    }
    function p(e, t) {}
    function _(e, t, n) {
      n === void 0 ? A(e, void 0, t) : n != null && n !== 0 && A(e, t, n);
    }
    function f(t, n) {
      var r = M(t, n);
      w(r) &&
        (e[r].devModeLogger("Cancelled funnel"),
        O(r),
        (e[r] = void 0),
        o("FunnelReliabilityStatsCollector").passFunnelLevelStatsRolloutGK() &&
          (o("FunnelReliabilityStatsCollector").onFunnelCancel(t),
          o("FunnelReliabilityStatsCollector").maybeFlushFunnelLevelStats()));
    }
    function g(e, t) {
      N(e, t);
    }
    function h(e, t, n) {
      N(e, n, t);
    }
    function y(e, t, n) {
      n === void 0 ? B(e, void 0, String(t)) : B(e, Number(t), n);
    }
    function C(e, t, n) {
      n === void 0 ? W(e, void 0, !!t) : W(e, Number(t), n);
    }
    function b(e, t, n) {
      n === void 0
        ? q(e, void 0, String(t), void 0)
        : q(e, Number(t), n, void 0);
    }
    function v(e, t, n) {
      n === void 0
        ? U(e, void 0, String(t), void 0)
        : U(e, Number(t), n, void 0);
    }
    function S(e, t, n, r) {
      r === void 0
        ? q(e, void 0, String(n), void 0, void 0, t)
        : q(e, Number(n), r, void 0, void 0, t);
    }
    function R(e, t, n, r) {
      r === void 0 ? q(e, void 0, String(t), n) : q(e, Number(t), n, r);
    }
    function L(e, t, n, r, o) {
      o === void 0
        ? q(e, void 0, String(n), r, void 0, t)
        : q(e, Number(n), r, o, void 0, t);
    }
    function E(e, t, n, r) {
      r === void 0 ? U(e, void 0, String(t), n) : U(e, Number(t), n, r);
    }
    function k(e, t, n, r) {
      r === void 0
        ? q(e, void 0, String(t), void 0, n)
        : q(e, Number(t), String(n), void 0, r);
    }
    function I(e, t, n, r, o) {
      o === void 0
        ? q(e, void 0, String(n), void 0, r, t)
        : q(e, Number(n), String(r), void 0, o, t);
    }
    function T(e, t, n, r) {
      r === void 0
        ? U(e, void 0, String(t), void 0, n)
        : U(e, Number(t), String(n), void 0, r);
    }
    function D(e, t, n, r, o) {
      o === void 0
        ? q(e, void 0, String(t), n, r)
        : q(e, Number(t), String(n), String(r), o);
    }
    function x(e, t, n, r, o, a) {
      a === void 0
        ? q(e, void 0, String(n), r, o, t)
        : q(e, Number(n), String(r), String(o), a, t);
    }
    function $(e, t, n, r, o) {
      o === void 0
        ? U(e, void 0, String(t), n, r)
        : U(e, Number(t), String(n), String(r), o);
    }
    function P(t, n, a) {
      var i = M(t, n);
      (K(),
        V(i),
        r("FunnelLoggerSampler").shouldLog(t) &&
          ((e[i] = new (o("Funnel").Funnel)(
            t,
            n,
            r("FunnelLoggerSampler").getSamplingRate(t),
            !1,
            a != null ? a : Date.now(),
          )),
          F(i),
          o(
            "FunnelReliabilityStatsCollector",
          ).passFunnelLevelStatsRolloutGK() &&
            (o("FunnelReliabilityStatsCollector").onFunnelStart(t),
            o(
              "FunnelReliabilityStatsCollector",
            ).maybeFlushFunnelLevelStats())));
    }
    function N(t, n, r) {
      var a = M(t, n);
      w(a) &&
        (e[a].appendAction(
          o("Funnel").ActionType.ACTION_END,
          o("Funnel").EndType.EXPLICIT,
          void 0,
          r,
        ),
        H(a));
    }
    function M(e, t) {
      if (r("FunnelRegistry")[e] !== !0)
        throw (
          r("FBLogger")("funnel_validation")
            .blameToPreviousFile()
            .mustfix("Funnel name `%s` not registered", e),
          r("FBLogger")("comet_infra").mustfixThrow(
            "Funnel name `%s` not registered.",
            e,
          )
        );
      return t == null ? e : e + t.toString();
    }
    function w(t) {
      return e[t] !== void 0;
    }
    function A(t, n, r) {
      var o = M(t, n);
      w(o) &&
        ((e[o].timeout_sec = r),
        e[o].devModeLogger("Timeout set to %s sec", r),
        F(o));
    }
    function F(t) {
      (O(t),
        (e[t].timeout_handle = r("setTimeout")(function () {
          (e[t].appendAction(
            o("Funnel").ActionType.ACTION_END,
            o("Funnel").EndType.TIMEOUT,
          ),
            H(t));
        }, 1e3 * e[t].timeout_sec)));
    }
    function O(t) {
      e[t].timeout_handle != null && r("clearTimeout")(e[t].timeout_handle);
    }
    function B(t, n, r) {
      var o = M(t, n);
      w(o) && (e[o].addTag(r), F(o));
    }
    function W(t, n, r) {
      var o = M(t, n);
      w(o) &&
        ((e[o].shouldTrackFocus = r),
        e[o].devModeLogger("Focus tracking %s", r ? "on" : "off"));
    }
    function q(t, n, r, o, a, i) {
      var l = M(t, n);
      w(l) && (e[l].appendAction(r, o, a, i), F(l));
    }
    function U(t, n, r, o, a) {
      var i = M(t, n);
      w(i) && e[i].appendActionIfNew(r, o, a);
    }
    function V(t) {
      w(t) &&
        (e[t].appendAction(
          o("Funnel").ActionType.ACTION_END,
          o("Funnel").EndType.RESTART,
        ),
        H(t));
    }
    function H(t) {
      if (w(t)) {
        if (r("gkx")("20976")) {
          var n = o(
            "FunnelReliabilityStatsCollector",
          ).increaseAndGetLibLevelStats();
          if (n) {
            var a = n[0],
              i = n[1];
            e[t].addReliabilityStats(a, i);
          }
        }
        var l = e[t].getFunnelName(),
          s = e[t].getLogData();
        (r("MarauderLogger").log("funnel_analytics", null, s),
          e[t].devModeLogger("Logged: %s", JSON.stringify(s)),
          O(t),
          (e[t] = void 0),
          o(
            "FunnelReliabilityStatsCollector",
          ).passFunnelLevelStatsRolloutGK() &&
            (o("FunnelReliabilityStatsCollector").onFunnelEnd(l),
            o("FunnelReliabilityStatsCollector").maybeFlushFunnelLevelStats()));
      }
    }
    function G() {
      for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) &&
          w(t) &&
          (e[t].appendAction(
            o("Funnel").ActionType.ACTION_END,
            o("Funnel").EndType.SESSION_END,
          ),
          H(t));
    }
    function z() {
      if (u) {
        u = !1;
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) &&
            w(t) &&
            e[t].shouldTrackFocus &&
            (e[t].appendAction(o("Funnel").ActionType.ACTION_WINDOW_BLUR),
            O(t));
      }
    }
    function j() {
      if (!u) {
        u = !0;
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) &&
            w(t) &&
            e[t].shouldTrackFocus &&
            (e[t].appendAction(o("Funnel").ActionType.ACTION_WINDOW_FOCUS),
            O(t));
      }
    }
    function K() {
      s ||
        ((s = !0),
        window.addEventListener &&
          (r("Banzai").subscribe(r("Banzai").SHUTDOWN, G),
          window.addEventListener("blur", z),
          window.addEventListener("focus", j)));
    }
    ((l.addFunnelTag = y),
      (l.appendAction = b),
      (l.appendActionAtTime = S),
      (l.appendActionAtTimeWithPayload = I),
      (l.appendActionAtTimeWithTag = L),
      (l.appendActionAtTimeWithTagAndPayload = x),
      (l.appendActionIfNew = v),
      (l.appendActionWithPayload = k),
      (l.appendActionWithPayloadIfNew = T),
      (l.appendActionWithTag = R),
      (l.appendActionWithTagAndPayload = D),
      (l.appendActionWithTagAndPayloadIfNew = $),
      (l.appendActionWithTagIfNew = E),
      (l.cancelFunnel = f),
      (l.endFunnel = g),
      (l.endFunnelAtTime = h),
      (l.getFunnelInstance = m),
      (l.setFunnelTimeout = _),
      (l.setFunnelTrackFocus = C),
      (l.startFunnel = c),
      (l.startFunnel_DEV_MODE = p),
      (l.startFunnelAtTime = d));
  },
  98,
);
