__d(
  "Funnel",
  ["BinarySearch", "FBLogger", "FunnelAction", "FunnelRegistry", "sprintf"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "name",
      s = "instance_id",
      u = "start_time",
      c = "tags",
      d = "actions",
      m = "sampling_rate",
      p = "timeout_sec",
      _ = "beacon_id",
      f = "beacon_session_id",
      g = "funnel_level_beacon_id",
      h = "funnel_level_beacon_session_id",
      y = "is_web",
      C = {
        EXPLICIT: "explicit",
        TIMEOUT: "timeout",
        SESSION_END: "session_end",
        RESTART: "restart",
        ACTIONS_FULL: "actions_full",
      },
      b = {
        ACTION_END: "funnel_end",
        ACTION_WINDOW_BLUR: "window_blur",
        ACTION_WINDOW_FOCUS: "window_focus",
      },
      v = 600,
      S = (function () {
        function t(e, t, n, o, a) {
          if (r("FunnelRegistry")[e] !== !0)
            throw r("FBLogger")("comet_infra").mustfixThrow(
              "Funnel name not registered.",
            );
          ((this.$1 = e),
            (this.$2 = t),
            (this.$3 = []),
            (this.$4 = {}),
            (this.$5 = n),
            (this.$6 = a),
            (this.timeout_sec = v),
            (this.shouldTrackFocus = !1),
            (this.$7 = o),
            (this.$9 = -1),
            (this.$10 = -1),
            (this.$11 = -1),
            (this.$12 = -1),
            (this.$8 = null),
            this.devModeLogger("Started funnel"));
        }
        var n = t.prototype;
        return (
          (n.addTag = function (t) {
            if (typeof t != "string")
              throw r("FBLogger")("comet_infra").mustfixThrow(
                "Funnel tag should be a String.",
              );
            return (
              (this.$4[t] = !0),
              this.devModeLogger("Added funnel tag %s", t),
              this
            );
          }),
          (n.appendAction = function (t, n, a, i) {
            var e = this;
            i === void 0 && (i = Date.now());
            var l = new (r("FunnelAction"))(t, i - this.$6, n, a),
              s = o("BinarySearch").leastStrictUpperBound(
                function (t) {
                  return e.$3[t].getData();
                },
                l.getData(),
                0,
                this.$3.length,
                function (e, t) {
                  return e.name === "funnel_end"
                    ? 1
                    : t.name === "funnel_end"
                      ? -1
                      : e.relative_time - t.relative_time;
                },
              );
            return (
              this.$3.splice(s, 0, l),
              n != null && n !== ""
                ? this.devModeLogger("Appended action %s with tag %s", t, n)
                : this.devModeLogger("Appended action %s", t),
              (this.$8 = t),
              this
            );
          }),
          (n.appendActionIfNew = function (t, n, r) {
            return (t !== this.$8 && this.appendAction(t, n, r), this);
          }),
          (n.getLogData = function () {
            var t = {};
            ((t[e] = this.$1),
              this.$2 !== void 0
                ? (t[s] = this.$2)
                : (t[s] = Math.floor(Math.random() * 65536)),
              (t[u] = this.$6),
              (t[m] = this.$5),
              (t[p] = this.timeout_sec),
              (t[c] = []));
            for (var n in this.$4) this.$4[n] === !0 && t[c].push(n);
            if (this.$3.length > 0) {
              t[d] = [];
              for (var r = 0; r < this.$3.length; r++)
                t[d].push(this.$3[r].getData());
            }
            return (
              this.$10 !== -1 &&
                this.$9 !== -1 &&
                ((t[f] = this.$10), (t[_] = this.$9)),
              this.$12 !== -1 &&
                this.$11 !== -1 &&
                ((t[h] = this.$12), (t[g] = this.$11)),
              (t[y] = 1),
              t
            );
          }),
          (n.devModeLogger = function () {}),
          (n.getTags = function () {
            return this.$4;
          }),
          (n.getFunnelName = function () {
            return this.$1;
          }),
          (n.addReliabilityStats = function (t, n) {
            if (typeof t != "number")
              throw r("FBLogger")("comet_infra").mustfixThrow(
                "SessionID of current funnel lib reliability stats should be a number.",
              );
            if (typeof n != "number")
              throw r("FBLogger")("comet_infra").mustfixThrow(
                "Counter of current funnel lib reliability stats should be a number.",
              );
            return (
              (this.$10 = t),
              (this.$9 = n),
              this.devModeLogger(
                "Added funnel sessionID %d and counter %d.",
                t,
                n,
              ),
              this
            );
          }),
          (n.addReliabilityStatsForCurFunnel = function (t, n) {
            if (typeof t != "number")
              throw r("FBLogger")("comet_infra").mustfixThrow(
                "SessionID of current funnel lib reliability stats should be a number.",
              );
            if (typeof n != "number")
              throw r("FBLogger")("comet_infra").mustfixThrow(
                "Counter of current funnel lib reliability stats should be a number.",
              );
            return (
              (this.$12 = t),
              (this.$11 = n),
              this.devModeLogger(
                "Added funnel sessionID %d and counter %d.",
                t,
                n,
              ),
              this
            );
          }),
          t
        );
      })();
    ((l.EndType = C), (l.ActionType = b), (l.Funnel = S));
  },
  98,
);
