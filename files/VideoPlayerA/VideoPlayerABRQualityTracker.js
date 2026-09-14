__d(
  "VideoPlayerABRQualityTracker",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        ((this.$1 = e), (this.$2 = null));
      }
      var t = e.prototype;
      return (
        (t.setLastQualitySwitchReason = function (t) {
          this.$2 = t;
        }),
        (t.getABREvaluation = function () {
          var e = [];
          this.$1 && (e = this.$1.flushABREvaluationSet());
          for (
            var t = 0, n = 0, r = 0, o = 0, a = this.$2, i = 0;
            i < e.length;
            i++
          )
            switch (e[i]) {
              case "ideal":
                t++;
                break;
              case "conservative":
                n++;
                break;
              case "aggressive":
                r++;
                break;
              case "conservative_resolution_constrained":
                o++;
                break;
            }
          return {
            idealSamples: t,
            conservativeSamples: n,
            aggressiveSamples: r,
            conservativeResolutionConstrainedSamples: o,
            lastQualitySwitchReason: a,
          };
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
