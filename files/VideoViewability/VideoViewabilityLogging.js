__d(
  "VideoViewabilityLogging",
  ["VideoPlayerExperiments", "ViewabilityVideoElement", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map([
        [0, 0],
        [25, 25],
        [50, 50],
        [75, 75],
        [100, 100],
      ]),
      u = (function () {
        function t(t, n, o, a) {
          var i = this;
          ((this.$14 = function (t) {
            if (i.$8()) {
              var n = (e || (e = r("performanceNow")))();
              (n - i.$1 > r("VideoPlayerExperiments").viewabilityPollingRate &&
                (i.$12(), (i.$1 = n)),
                i.$13());
            }
          }),
            (this.$11 = function () {
              i.$16();
            }),
            (this.$10 = function () {
              (i.setLastLoggedViewability(i.getViewability()), i.$15());
            }),
            (this.$1 = 0),
            (this.$5 = t),
            (this.$6 = new (r("ViewabilityVideoElement"))(
              n,
              o,
              a,
              this.$5.isSpherical(),
            )),
            this.$7());
        }
        var n = t.prototype;
        return (
          (n.getViewability = function () {
            var e;
            return (
              this.$5.isInline()
                ? (e = this.$6.feedViewabilityPercentage())
                : (e = this.$6.viewabilityPercentage()),
              r("VideoPlayerExperiments").pauseVideosOnViewability &&
                e < 50 &&
                this.$8() &&
                this.$5.pause(),
              this.$9(e)
            );
          }),
          (n.setLastLoggedViewability = function (t) {
            this.$4 = t;
          }),
          (n.$7 = function () {
            (this.$5.addListener("beginPlayback", this.$10),
              this.$5.addListener("pausePlayback", this.$11));
          }),
          (n.$12 = function () {
            var e = this.getViewability();
            e != this.$4 &&
              (this.$5.logEvent("viewability_changed", {
                current_viewability_percentage: e,
                last_viewability_percentage: this.$4,
              }),
              (this.$4 = e));
          }),
          (n.$13 = function () {
            var t = this,
              n = r(
                "VideoPlayerExperiments",
              ).organicViewabilityLoggingPollingTimeMs,
              o = r(
                "VideoPlayerExperiments",
              ).organicViewabilityLoggingUseSetTimeout,
              a =
                !this.$5.isAd() && o
                  ? function () {
                      t.$3 = window.setTimeout(function () {
                        return t.$14((e || (e = r("performanceNow")))());
                      }, n);
                    }
                  : function () {
                      t.$2 = window.requestAnimationFrame(t.$14);
                    };
            a();
          }),
          (n.$15 = function () {
            this.$13();
          }),
          (n.$16 = function () {
            this.$17();
          }),
          (n.$17 = function () {
            var e = this,
              t = r(
                "VideoPlayerExperiments",
              ).organicViewabilityLoggingUseSetTimeout,
              n =
                !this.$5.isAd() && t
                  ? function () {
                      return window.clearTimeout(e.$3);
                    }
                  : function () {
                      return window.cancelAnimationFrame(e.$2);
                    };
            n();
          }),
          (n.$8 = function () {
            return this.$5.getVideoAPI().isPaused() !== void 0
              ? !this.$5.getVideoAPI().isPaused()
              : this.$5.getState() === "playing";
          }),
          (n.$9 = function (t) {
            var e = -2;
            if (t <= 0) return e;
            for (var n of s) {
              var r = n[0],
                o = n[1];
              t >= r && (e = o);
            }
            return e;
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
