__d(
  "MediaBufferingDetector",
  [
    "Event",
    "EventEmitter",
    "SubscriptionsHandler",
    "VideoPlayerExperiments",
    "VideoPlayerHTML5Experiments",
    "VideoPlayerShakaGlobalConfig",
    "clearInterval",
    "performanceNow",
    "setInterval",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n(e, n) {
          var o;
          return (
            (o = t.call(this) || this),
            (o.$MediaBufferingDetector$p_1 = e),
            (o.$MediaBufferingDetector$p_2 = new (r("SubscriptionsHandler"))()),
            o.$MediaBufferingDetector$p_1.paused ||
              o.$MediaBufferingDetector$p_8(),
            o.$MediaBufferingDetector$p_2.addSubscriptions(
              r("Event").listen(
                o.$MediaBufferingDetector$p_1,
                "playing",
                function () {
                  return o.$MediaBufferingDetector$p_9();
                },
              ),
              r("Event").listen(
                o.$MediaBufferingDetector$p_1,
                "pause",
                function () {
                  return o.$MediaBufferingDetector$p_10();
                },
              ),
              r("Event").listen(
                o.$MediaBufferingDetector$p_1,
                "ended",
                function () {
                  return o.$MediaBufferingDetector$p_11();
                },
              ),
              r("Event").listen(
                o.$MediaBufferingDetector$p_1,
                "timeupdate",
                function () {
                  return o.$MediaBufferingDetector$p_12();
                },
              ),
            ),
            o.$MediaBufferingDetector$p_13(
              "drop_buffering_detection_from_html5_api",
              !1,
            ) &&
              o.$MediaBufferingDetector$p_2.addSubscriptions(
                r("Event").listen(
                  o.$MediaBufferingDetector$p_1,
                  "waiting",
                  function () {
                    return o.$MediaBufferingDetector$p_14();
                  },
                ),
              ),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$MediaBufferingDetector$p_15 = function () {
            var t = (e || (e = r("performanceNow")))(),
              n = this.$MediaBufferingDetector$p_1.currentTime,
              o = t - this.$MediaBufferingDetector$p_5,
              a = n - this.$MediaBufferingDetector$p_6,
              i = a * 1e3,
              l = o - i,
              s =
                r("VideoPlayerHTML5Experiments").disableBufferAtEndOfPlayback &&
                this.$MediaBufferingDetector$p_1.currentTime ===
                  this.$MediaBufferingDetector$p_1.duration;
            (o * 0.2 < Math.abs(l) && !s
              ? this.$MediaBufferingDetector$p_16()
              : this.$MediaBufferingDetector$p_17(),
              this.$MediaBufferingDetector$p_18());
          }),
          (a.$MediaBufferingDetector$p_18 = function () {
            ((this.$MediaBufferingDetector$p_5 = (
              e || (e = r("performanceNow"))
            )()),
              (this.$MediaBufferingDetector$p_6 =
                this.$MediaBufferingDetector$p_1.currentTime));
          }),
          (a.$MediaBufferingDetector$p_8 = function () {
            var e = this;
            this.$MediaBufferingDetector$p_4 ||
              (this.$MediaBufferingDetector$p_18(),
              (this.$MediaBufferingDetector$p_4 = r("setInterval")(function () {
                return e.$MediaBufferingDetector$p_15();
              }, 500)));
          }),
          (a.$MediaBufferingDetector$p_19 = function () {
            (r("clearInterval")(this.$MediaBufferingDetector$p_4),
              (this.$MediaBufferingDetector$p_4 = null));
          }),
          (a.$MediaBufferingDetector$p_16 = function () {
            this.$MediaBufferingDetector$p_3 ||
              ((this.$MediaBufferingDetector$p_3 = !0),
              this.emit("bufferingStart"));
          }),
          (a.$MediaBufferingDetector$p_17 = function () {
            this.$MediaBufferingDetector$p_3 &&
              ((this.$MediaBufferingDetector$p_3 = !1),
              this.emit("bufferingEnd"));
          }),
          (a.$MediaBufferingDetector$p_9 = function () {
            (this.$MediaBufferingDetector$p_17(),
              this.$MediaBufferingDetector$p_8());
          }),
          (a.$MediaBufferingDetector$p_10 = function () {
            (this.$MediaBufferingDetector$p_17(),
              this.$MediaBufferingDetector$p_19());
          }),
          (a.$MediaBufferingDetector$p_11 = function () {
            (this.$MediaBufferingDetector$p_17(),
              this.$MediaBufferingDetector$p_19());
          }),
          (a.$MediaBufferingDetector$p_12 = function () {
            this.$MediaBufferingDetector$p_1.paused ||
              (this.$MediaBufferingDetector$p_17(),
              this.$MediaBufferingDetector$p_19(),
              this.$MediaBufferingDetector$p_8());
          }),
          (a.$MediaBufferingDetector$p_14 = function () {
            (this.$MediaBufferingDetector$p_19(),
              this.$MediaBufferingDetector$p_16());
          }),
          (a.$MediaBufferingDetector$p_13 = function (t, n) {
            return this.$MediaBufferingDetector$p_7
              ? this.$MediaBufferingDetector$p_7.getBool(t, n)
              : o("VideoPlayerShakaGlobalConfig").getBool(t, n);
          }),
          (a.destroy = function () {
            (r("VideoPlayerExperiments").fireBufferingEndEventOnDestroy &&
              this.$MediaBufferingDetector$p_17(),
              this.$MediaBufferingDetector$p_19(),
              this.$MediaBufferingDetector$p_2.release());
          }),
          n
        );
      })(r("EventEmitter"));
    l.default = s;
  },
  98,
);
