__d(
  "VideoChannelViewChainLengthManager",
  ["guid"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e(e) {
          ((this.$2 = 0),
            (this.$5 = {}),
            (this.$1 = r("guid")()),
            (this.$3 = e),
            (this.$5[e] = 0),
            (this.$4 = e));
        }
        var t = e.prototype;
        return (
          (t.registerVideoID = function (t) {
            (this.$5[t] === void 0 && (this.$2++, (this.$5[t] = this.$2)),
              (this.$4 = t));
          }),
          (t.getSessionID = function () {
            return this.$1;
          }),
          (t.getCurrentChainLength = function () {
            return this.$5[this.$4] !== void 0 ? this.$5[this.$4] : null;
          }),
          e
        );
      })(),
      s = {};
    function u(t) {
      var n = t.toString();
      s[n] || (s[n] = new e(n));
    }
    function c(e) {
      var t = e != null ? e.toString() : null,
        n = s[t];
      return n
        ? {
            video_chaining_depth_level: n.getCurrentChainLength(),
            video_chaining_session_id: n.getSessionID(),
          }
        : { video_chaining_depth_level: null, video_chaining_session_id: null };
    }
    function d(e, t) {
      var n = e.toString();
      (u(n), s[n].registerVideoID(t));
    }
    function m(e, t) {
      var n = e;
      if (t) {
        var r = t.decode();
        r.root_id && (n = r.root_id);
      }
      (n && (n = n.toString()), d(n, e));
    }
    ((l.getLoggingData = c), (l.registerChainingInfos = m));
  },
  98,
);
