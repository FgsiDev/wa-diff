__d(
  "VideoAutoplayControllerAbortLoadingHelper",
  [
    "invariant",
    "ShakaConstants",
    "VideoPlayerExperiments",
    "getViewportDimensions",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
      function e() {
        ((this.$1 = new Set()), (this.$2 = new Map()));
      }
      var t = e.prototype;
      return (
        (t.maybeAbortLoading = function () {
          for (var t of this.$1) {
            var n =
                r("ShakaConstants").strings
                  .defer_which_video_to_abort_loading_decisioning_logic,
              o = t.getVideoPlayerController(),
              a = o ? o.isLiveVideo() : null;
            if (!(a !== null && ((n === "vod" && a) || (n === "live" && !a)))) {
              if (
                !t.isState("playing") &&
                typeof t.abortLoading == "function" &&
                e.shouldAbortLoadingVideoUnit(t)
              )
                r("VideoPlayerExperiments")
                  .abortLoadingHelperNegativeYAbortLoading
                  ? this.$3(t)
                  : this.$4(t);
              else if (
                r("VideoPlayerExperiments")
                  .abortLoadingHelperNegativeYAbortLoading &&
                t.isState("playing")
              ) {
                var i = this.$2.get(t);
                (i || s(0, 3497),
                  i && i.abortedLoading && (i.abortedLoading = !1));
              }
            }
          }
        }),
        (t.$3 = function (t) {
          if (r("VideoPlayerExperiments").abortLoadingHelperBoundedReloading) {
            var e = r("getViewportDimensions")().height / -2;
            t.getDistanceToViewport() <
              r("VideoPlayerExperiments").abortedLoadingPixelBoundary + e &&
            !t.isVisible()
              ? this.$5(t)
              : t.getDistanceToViewport() >
                  r("VideoPlayerExperiments").reloadingPixelBoundary + e &&
                this.$6(t);
          } else t.getDistanceToViewport() < 0 && !t.isVisible() && this.$5(t);
        }),
        (t.addVideoUnit = function (t) {
          this.$1.has(t) ||
            (this.$1.add(t),
            this.$2.set(t, {
              y: t.getDistanceToViewport(),
              timestamp: new Date().valueOf(),
              v: 0,
              abortedLoading: !1,
            }));
        }),
        (t.removeVideoUnit = function (t) {
          (this.$1.delete(t), this.$2.delete(t));
        }),
        (t.calculateFutureScrollPosition = function (t) {
          var e = t.y1 - t.y0,
            n = t.t1 - t.t0,
            r = e / n,
            o = r - t.v0,
            a = o / n,
            i = t.t,
            l = (a * i * i) / 2 + i * r + t.y1;
          return { v1: r, a: a, S: l };
        }),
        (t.preloadClosestVideoUnits = function (t) {
          var e = this;
          this.$7(t).forEach(function (t) {
            return e.$6(t);
          });
        }),
        (t.$7 = function (t) {
          return Array.from(this.$1)
            .filter(function (e) {
              return e.getDistanceToViewport() >= 0;
            })
            .sort(function (e, t) {
              return e.getDistanceToViewport() - t.getDistanceToViewport();
            })
            .slice(0, t);
        }),
        (t.$6 = function (t) {
          var e = this.$2.get(t);
          e || s(0, 3497);
          var n;
          (e && ((n = e.abortedLoading), (e.abortedLoading = !1)),
            n === !0 && t.preload());
        }),
        (t.$5 = function (t) {
          var e = this.$2.get(t);
          e || s(0, 3497);
          var n;
          (e && ((n = e.abortedLoading), (e.abortedLoading = !0)),
            n !== !0 &&
              typeof t.abortLoading == "function" &&
              t.abortLoading());
        }),
        (t.$4 = function (t) {
          var e = r("getViewportDimensions")().height,
            n = 1600,
            o = e / 2,
            a = o + n,
            i = -o,
            l = i - n,
            u = this.$2.get(t);
          if ((u || s(0, 3497), !!u)) {
            var c = t.getDistanceToViewport(),
              d = u.y;
            u.y = c;
            var m = new Date().valueOf(),
              p = u.timestamp;
            u.timestamp = m;
            var _ = u.v;
            if (l <= c && a >= c) {
              u.abortedLoading && this.$6(t);
              return;
            }
            var f = 500,
              g = this.calculateFutureScrollPosition({
                y0: d,
                y1: c,
                t0: p,
                t1: m,
                v0: _,
                t: f,
              });
            u.v = g.v1;
            var h = g.S;
            u.abortedLoading
              ? ((c < l && h > l) || (c > a && h < a)) && this.$6(t)
              : this.$5(t);
          }
        }),
        (e.shouldAbortLoadingVideoUnit = function (t) {
          var e = !1,
            n = !0;
          return t
            ? (typeof t.getIsInChannel == "function" &&
                (n = t.getIsInChannel()),
              typeof t.getSource == "function" &&
                (e = t.getSource() === "tahoe"),
              !n && !e)
            : !1;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
