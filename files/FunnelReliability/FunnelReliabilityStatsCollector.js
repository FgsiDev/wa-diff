__d(
  "FunnelReliabilityStatsCollector",
  ["FunnelReliabilityWhitelist", "MarauderLogger", "WebStorage", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = !1,
      u,
      c = "fas_reliability_lib_stats_overall",
      d = "fas_reliability_funnel_stats_overall",
      m = 1800,
      p = "funnel_analytics_data_loss",
      _ = "fas_reliability_lib_stats_wl",
      f = "fas_reliability_funnel_stats_wl",
      g = 0,
      h = {};
    function y() {
      return !!r("gkx")("20977");
    }
    function C() {
      return (
        s || ((s = !0), (u = (e || (e = r("WebStorage"))).getLocalStorage())),
        u
      );
    }
    function b() {
      var e = C();
      if (!e) return null;
      var t = e.getItem(d);
      if (t != null && t !== "") return JSON.parse(t);
      var n = Math.floor(Date.now() / 1e3);
      return {
        startCount: 0,
        endCount: 0,
        cancelCount: 0,
        prevCount: 0,
        lastFlushTimestamp: n,
      };
    }
    function v(e) {
      var t = C();
      if (!t) return null;
      var n = t.getItem(f);
      if (n != null && n !== "") return JSON.parse(n);
      var r = {};
      return (
        (r[e] = { startCount: 0, endCount: 0, cancelCount: 0, prevCount: 0 }),
        r
      );
    }
    function S() {
      var e = C();
      if (!e) return null;
      var t = e.getItem(f);
      return t != null && t !== "" ? JSON.parse(t) : null;
    }
    function R(t) {
      var n = b();
      n &&
        ((g += 1),
        n.startCount
          ? (n.startCount = parseInt(n.startCount, 10) + 1)
          : (n.startCount = 1),
        (e || (e = r("WebStorage"))).setItemGuarded(
          localStorage,
          d,
          JSON.stringify(n),
        ),
        L(t));
    }
    function L(t) {
      var n = v(t);
      if (!(!n || !r("FunnelReliabilityWhitelist").includes(t))) {
        var o = h[t] ? h[t] + 1 : 1;
        h[t] = o;
        var a = n[t];
        (a
          ? a.startCount
            ? (a.startCount = parseInt(a.startCount, 10) + 1)
            : (a.startCount = 1)
          : ((a = {}),
            (a.startCount = 1),
            (a.prevCount = 0),
            (a.cancelCount = 0),
            (a.endCount = 0)),
          (n[t] = a),
          (e || (e = r("WebStorage"))).setItemGuarded(
            localStorage,
            f,
            JSON.stringify(n),
          ));
      }
    }
    function E(t) {
      var n = b();
      n &&
        ((g -= 1),
        n.cancelCount
          ? (n.cancelCount = parseInt(n.cancelCount, 10) + 1)
          : (n.cancelCount = 1),
        (e || (e = r("WebStorage"))).setItemGuarded(
          localStorage,
          d,
          JSON.stringify(n),
        ),
        k(t));
    }
    function k(t) {
      var n = v(t);
      if (!(!n || !r("FunnelReliabilityWhitelist").includes(t))) {
        var o = h[t] ? h[t] - 1 : 0;
        h[t] = o;
        var a = n[t];
        (a
          ? a.cancelCount
            ? (a.cancelCount = parseInt(a.cancelCount, 10) + 1)
            : (a.cancelCount = 1)
          : ((a = {}),
            (a.startCount = 0),
            (a.prevCount = 0),
            (a.cancelCount = 1),
            (a.endCount = 0)),
          (n[t] = a),
          (e || (e = r("WebStorage"))).setItemGuarded(
            localStorage,
            f,
            JSON.stringify(n),
          ));
      }
    }
    function I(t) {
      var n = b();
      n &&
        ((g -= 1),
        n.endCount
          ? (n.endCount = parseInt(n.endCount, 10) + 1)
          : (n.endCount = 1),
        (e || (e = r("WebStorage"))).setItemGuarded(
          localStorage,
          d,
          JSON.stringify(n),
        ),
        T(t));
    }
    function T(t) {
      var n = v(t);
      if (!(!n || !r("FunnelReliabilityWhitelist").includes(t))) {
        var o = h[t] ? h[t] - 1 : 0;
        h[t] = o;
        var a = n[t];
        (a
          ? a.endCount
            ? (a.endCount = parseInt(a.endCount, 10) + 1)
            : (a.endCount = 1)
          : ((a = {}),
            (a.startCount = 0),
            (a.prevCount = 0),
            (a.cancelCount = 0),
            (a.endCount = 1)),
          (n[t] = a),
          (e || (e = r("WebStorage"))).setItemGuarded(
            localStorage,
            f,
            JSON.stringify(n),
          ));
      }
    }
    function D() {
      var e = b();
      if (!e) return !1;
      if (e.lastFlushTimestamp) {
        var t = Math.floor(Date.now() / 1e3);
        return t - parseInt(e.lastFlushTimestamp, 10) >= m;
      }
      return !1;
    }
    function x(t) {
      var n = C();
      if (n) {
        var o = Math.floor(Date.now() / 1e3),
          a = {
            startCount: 0,
            endCount: 0,
            cancelCount: 0,
            prevCount: t,
            lastFlushTimestamp: o,
          };
        (e || (e = r("WebStorage"))).setItemGuarded(n, d, JSON.stringify(a));
      }
    }
    function $(t, n) {
      var o = C();
      if (!(!o || !t || Object.keys(t).length === 0)) {
        var a = {};
        for (var i in t) {
          var l = n[i],
            s = {
              startCount: 0,
              endCount: 0,
              cancelCount: 0,
              prevCount: l || 0,
            };
          a[i] = s;
        }
        (e || (e = r("WebStorage"))).setItemGuarded(o, f, JSON.stringify(a));
      }
    }
    function P(e, t, n, r) {
      var a = e.prevCount,
        i = e.startCount,
        l = e.endCount,
        s = e.cancelCount,
        u = a + i - l - s - t,
        c = { start: i, end: l, cancel: s, prev: a, ongoing: t, loss: u },
        d = { overall: c };
      if (n) {
        var m = {};
        for (var _ in n) {
          var f = n[_],
            g = f.prevCount,
            h = f.startCount,
            y = f.endCount,
            C = f.cancelCount,
            b = r[_] ? r[_] : 0,
            v = g + h - y - C - b,
            S = { start: h, end: y, cancel: C, prev: g, ongoing: b, loss: v };
          m[_] = S;
        }
        d.funnel_level_data_loss = m;
      }
      o("MarauderLogger").log(p, null, d);
    }
    function N() {
      if (D()) {
        var e = b();
        if (e) {
          x(g);
          var t = S();
          (t && $(t, h), P(e, g, t, h));
        }
      }
    }
    function M() {
      var t = C();
      if (!t) return null;
      var n = t.getItem(c),
        o = n != null && n !== "" ? JSON.parse(n) : {},
        a = o.counter,
        i = o.session;
      return (
        a
          ? ((a = parseInt(a, 10) + 1), (i = parseInt(o.session, 10)))
          : ((a = 1), (i = Math.floor(Math.random() * 65536))),
        (e || (e = r("WebStorage"))).setItemGuarded(
          t,
          c,
          JSON.stringify({ counter: a, session: i }),
        ),
        [i, a]
      );
    }
    function w(t) {
      if (!r("FunnelReliabilityWhitelist").includes(t)) return null;
      var n = C();
      if (!n) return null;
      var o = n.getItem(_),
        a = void 0,
        i = {};
      o != null && o !== "" && ((i = JSON.parse(o)), (a = i[t]));
      var l = a ? a.counter : void 0,
        s = a ? a.session : void 0;
      l != null
        ? ((l = parseInt(l, 10) + 1), (s = parseInt(s, 10)))
        : ((l = 1), (s = Math.floor(Math.random() * 65536)));
      var u = {};
      return (
        o != null && o !== ""
          ? ((i[t] = { counter: l, session: s }), (u = i))
          : (u[t] = { counter: l, session: s }),
        (e || (e = r("WebStorage"))).setItemGuarded(n, _, JSON.stringify(u)),
        [s, l]
      );
    }
    ((l.passFunnelLevelStatsRolloutGK = y),
      (l.onFunnelStart = R),
      (l.onFunnelCancel = E),
      (l.onFunnelEnd = I),
      (l.maybeFlushFunnelLevelStats = N),
      (l.increaseAndGetLibLevelStats = M),
      (l.maybeIncreaseAndGetLibLevelStatsForCurFunnel = w));
  },
  98,
);
