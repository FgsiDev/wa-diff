__d(
  "LiveRewindUtils",
  ["LiveVideoPlayerActions", "LiveVideoRewindTypedLogger", "uuidv4"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 5,
      l = new Map(),
      s = 250;
    function u(t) {
      for (var n = 0, r = 0; r < t.length(); r++) n += t.end(r) - t.start(r);
      return n > e ? n - e : 0;
    }
    function c(e, t) {
      var n = e;
      if (t.length() < 1) return 0;
      if (e <= 0) return t.start(0);
      for (var r = 0; r < t.length(); r++) {
        var o = t.end(r) - t.start(r);
        if (n < o) return t.start(r) + n;
        n -= o;
      }
      return t.end(t.length() - 1);
    }
    function d(e, t) {
      var n = e;
      if (t.length() < 1) return n;
      for (var r = 0, o = 0; o < t.length(); o++) {
        var a = t.start(o),
          i = a - r;
        if (((n -= i), e < a)) {
          var l = a - e;
          return n + l;
        }
        if (e <= t.end(o)) return n;
        r = t.end(o);
      }
      return n;
    }
    function m(e, t, n, r) {
      if (n.length() < 1) return 0;
      var o = r != null ? r : _(e, n),
        a = e;
      (a < n.start(o) && (a = n.start(o)), a > n.end(o) && (a = n.end(o)));
      var i = a + t,
        l = n.end(n.length() - 1),
        s = n.start(0);
      if (i <= s) return s;
      if (i >= l) return l;
      if (i >= n.start(o) && i <= n.end(o)) return i;
      if (i < n.start(o)) {
        if (o < 1) return s;
        var u = a - n.start(o),
          c = t + u,
          d = n.end(o - 1);
        return m(d, c, n, o - 1);
      }
      if (i > n.start(o)) {
        if (o >= n.length() - 1) return l;
        var p = n.end(o) - a,
          f = t - p,
          g = n.start(o + 1);
        return m(g, f, n, o + 1);
      }
      return 0;
    }
    function p(t, n) {
      var r = n != null ? n : e,
        o = t.end(t.length() - 1);
      return m(o, -1 * r, t);
    }
    function _(e, t) {
      if (t.length() < 1) return 0;
      for (var n = 0; n < t.length() - 1; ) {
        if (e < t.end(n)) return n;
        n++;
      }
      return n;
    }
    function f(e) {
      var t = l.get(e);
      if (t == null) {
        var r = n("uuidv4")();
        return (l.set(e, { sessionID: r, currentSequenceNumber: 0 }), r);
      }
      return t.sessionID;
    }
    function g(e) {
      var t = l.get(e);
      return t == null
        ? (l.set(e, { sessionID: n("uuidv4")(), currentSequenceNumber: 0 }), 0)
        : ++t.currentSequenceNumber;
    }
    function h(e) {
      var t = e.getSeekableRanges();
      if (t) {
        var r = d(e.getCurrentTimePosition(), t),
          o = t.start(0);
        (S(e, o),
          n("LiveVideoPlayerActions").setIsRewound(e, !0),
          v("go_to_beginning", e, r, null, 0, null));
      }
    }
    function y(e) {
      var t = e.getSeekableRanges();
      if (t) {
        var r = e.getCurrentTimePosition(),
          o = d(r, t),
          a = m(r, -10, t);
        (S(e, a),
          n("LiveVideoPlayerActions").setIsRewound(e, !0),
          v("back_button", e, o, null, null, a));
      }
    }
    function C(e) {
      var t = e.getSeekableRanges();
      if (t) {
        var r = e.getCurrentTimePosition(),
          o = d(r, t),
          a = m(r, 10, t);
        S(e, a);
        var i = p(t);
        (e.isState("playing") &&
          i - a < 1 &&
          n("LiveVideoPlayerActions").setIsRewound(e, !1),
          v("forward_button", e, o, null, null, a));
      }
    }
    function b(e) {
      var t = e.getSeekableRanges();
      if (t) {
        var r = e.getCurrentTimePosition(),
          o = d(r, t),
          a = t.end(t.length() - 1);
        (S(e, a),
          e.isState("paused") && e.play("user_initiated"),
          n("LiveVideoPlayerActions").setIsRewound(e, !1),
          v("go_to_live", e, o, null, null, a));
      }
    }
    function v(e, t, r, o, a, i) {
      var l = t.getSeekableRanges(),
        s = l ? u(l) : 0,
        c = r == null && o != null && l != null ? d(o, l) : r,
        m = a == null && i != null && l != null ? d(i, l) : a;
      new (n("LiveVideoRewindTypedLogger"))()
        .setEvent(e)
        .setPositionBefore(c)
        .setPositionAfter(m)
        .setVideoDuration(s)
        .setVideoID(t.getVideoID())
        .setSessionID(R.getLoggingSessionID(t.getVideoPlayerID()))
        .setActionSequenceNumber(
          R.getLoggingSequenceNumber(t.getVideoPlayerID()),
        )
        .log();
    }
    function S(e, t) {
      var n = e.getState() === "paused";
      (e.pause("seek_initiated"),
        setTimeout(function () {
          (e.seek(t), n || e.play("seek_initiated"));
        }, s));
    }
    var R = {
      getSeekTime: m,
      getAbsolutePosition: c,
      getLiveHeadTimestamp: p,
      getLoggingSessionID: f,
      getLoggingSequenceNumber: g,
      getRelativePosition: d,
      getTotalDuration: u,
      goToBeginning: h,
      goToLive: b,
      logLiveRewindEvent: v,
      seekBack: y,
      seekForward: C,
      LIVE_HEAD_BUFFER_S: e,
    };
    a.exports = R;
  },
  null,
);
