__d(
  "KeyframesVideoManager",
  ["KeyframesVideoUtils", "Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0.2,
      u = 100,
      c = [0.85, 1.15],
      d = (function () {
        function t(e) {
          ((this.$1 = e),
            (this.$3 = 1 / e.doc.frameRate()),
            (this.$2 = _(e.doc.rootLayer(), e)),
            (this.$4 = this.$5()));
        }
        var r = t.prototype;
        return (
          (r.getVideos = function () {
            return this.$1.videos;
          }),
          (r.getTimeWindows = function () {
            return this.$2;
          }),
          (r.forEach = function (t) {
            this.getVideos().forEach(t);
          }),
          (r.pause = function () {
            this.forEach(function (e) {
              e.pause();
            });
          }),
          (r.mute = function () {
            this.forEach(function (e) {
              e.muted = !0;
            });
          }),
          (r.unMute = function () {
            this.forEach(function (e) {
              e.muted = !1;
            });
          }),
          (r.renderProgress = function (t) {
            var e = this;
            this.$2.forEach(function (n, r) {
              var o = n.video,
                a = p(n, t),
                i = m(n, t),
                l = e.$1.doc.duration() * i,
                u = Math.abs(l - o.currentTime),
                d = e.$1.doc.duration() * (n.toProgress - n.fromProgress);
              if (u > s && o.currentTime < d && l < d) {
                var _ = (d - o.currentTime) / (d - l);
                _ >= c[0] && _ <= c[1] && e.changeVideoPlaybackRate(r, _);
              }
              a && o.paused
                ? o.play()
                : a == !1 && o.paused == !1 && (o.pause(), (o.currentTime = 0));
            });
          }),
          (r.$5 = function () {
            return this.$2.map(function (e) {
              var t = e.video;
              return g(
                function (e) {
                  t.playbackRate = e;
                },
                u,
                !0,
              );
            });
          }),
          (r.changeVideoPlaybackRate = function (t, n) {
            this.$4[t](n);
          }),
          (r.seekToProgress = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = this.$2.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var n = e.video,
                            a = 0;
                          if (p(e, t)) {
                            var i = m(e, t);
                            a = f(r.$1.doc.duration() * i);
                          }
                          (n.pause(),
                            (n.currentTime = a),
                            yield o("KeyframesVideoUtils").loadVideo(n, a));
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  );
                yield (e || (e = n("Promise"))).all(a);
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })();
    function m(e, t) {
      return t - e.fromProgress;
    }
    function p(e, t) {
      return t >= e.fromProgress && t <= e.toProgress;
    }
    function _(e, t) {
      var n = [],
        r = e.videoIndex();
      if (r != -1) {
        var o = t.videos[r],
          a = t.doc.videos(r);
        o != null &&
          n.push({
            fromProgress: e.fromProgress(),
            toProgress: e.toProgress(),
            name: a != null ? a.name() : null,
            video: o,
          });
      }
      for (var i = 0; i < e.sublayersLength(); i++)
        n = n.concat(_(e.sublayers(i), t));
      return n;
    }
    function f(e) {
      return Math.round(e * 100) / 100;
    }
    function g(e, t, n) {
      (t === void 0 && (t = 100), n === void 0 && (n = !1));
      var r;
      return function () {
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
          a[i] = arguments[i];
        var l = function () {
            ((r = null), n || e.apply(void 0, a));
          },
          s = n && !r;
        (clearTimeout(r), (r = setTimeout(l, t)), s && e.apply(void 0, a));
      };
    }
    l.default = d;
  },
  98,
);
