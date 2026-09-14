__d(
  "StaleVideoMonitor",
  [
    "EventEmitter",
    "EventListener",
    "SubscriptionsHandler",
    "clearTimeout",
    "performanceNow",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1500,
      u = (function (t) {
        function n(n) {
          var o;
          return (
            (o = t.call(this) || this),
            (o.$StaleVideoMonitor$p_4 = null),
            (o.$StaleVideoMonitor$p_1 = new (r("SubscriptionsHandler"))()),
            (o.$StaleVideoMonitor$p_2 = n.currentTime),
            (o.$StaleVideoMonitor$p_3 = (e || (e = r("performanceNow")))()),
            (o.$StaleVideoMonitor$p_5 = n),
            o.$StaleVideoMonitor$p_1.addSubscriptions(
              r("EventListener").listen(n, "playing", function () {
                return o.$StaleVideoMonitor$p_6();
              }),
              r("EventListener").listen(n, "play", function () {
                return o.$StaleVideoMonitor$p_6();
              }),
              r("EventListener").listen(n, "timeupdate", function () {
                return o.$StaleVideoMonitor$p_6();
              }),
            ),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.$StaleVideoMonitor$p_7 = function () {
            if (this.$StaleVideoMonitor$p_5) {
              if (
                this.$StaleVideoMonitor$p_5.paused ||
                this.$StaleVideoMonitor$p_5.playbackRate <= 0
              )
                return;
              var t = this.$StaleVideoMonitor$p_5.currentTime,
                n = this.$StaleVideoMonitor$p_5.buffered,
                o = !1,
                a;
              for (a = 0; a < n.length; ++a) {
                var i = n.start(a),
                  l = n.end(a);
                if (i > t) break;
                if (i <= t && l >= t + 1) {
                  o = !0;
                  break;
                }
              }
              o &&
                (t === this.$StaleVideoMonitor$p_2
                  ? this.emit(
                      "stale",
                      (e || (e = r("performanceNow")))() -
                        this.$StaleVideoMonitor$p_3,
                      (t - this.$StaleVideoMonitor$p_2) * 1e3,
                    )
                  : this.$StaleVideoMonitor$p_8());
            }
          }),
          (o.$StaleVideoMonitor$p_9 = function (t) {
            var e = this;
            (this.$StaleVideoMonitor$p_10(),
              (this.$StaleVideoMonitor$p_4 = r("setTimeoutAcrossTransitions")(
                function () {
                  return e.$StaleVideoMonitor$p_7();
                },
                t,
              )));
          }),
          (o.$StaleVideoMonitor$p_10 = function () {
            this.$StaleVideoMonitor$p_4 !== null &&
              (r("clearTimeout")(this.$StaleVideoMonitor$p_4),
              (this.$StaleVideoMonitor$p_4 = null));
          }),
          (o.$StaleVideoMonitor$p_8 = function () {
            this.$StaleVideoMonitor$p_6();
          }),
          (o.$StaleVideoMonitor$p_6 = function () {
            this.$StaleVideoMonitor$p_5 &&
              ((this.$StaleVideoMonitor$p_2 =
                this.$StaleVideoMonitor$p_5.currentTime),
              (this.$StaleVideoMonitor$p_3 = (
                e || (e = r("performanceNow"))
              )()),
              this.$StaleVideoMonitor$p_9(s));
          }),
          (o.$StaleVideoMonitor$p_11 = function () {
            this.$StaleVideoMonitor$p_1 &&
              this.$StaleVideoMonitor$p_1.release();
          }),
          (o.notifyBuffering = function () {
            this.$StaleVideoMonitor$p_10();
          }),
          (o.notifyBuffered = function () {
            this.$StaleVideoMonitor$p_9(s);
          }),
          (o.destroy = function () {
            (this.$StaleVideoMonitor$p_11(),
              this.$StaleVideoMonitor$p_10(),
              (this.$StaleVideoMonitor$p_5 = null));
          }),
          n
        );
      })(r("EventEmitter"));
    l.default = u;
  },
  98,
);
