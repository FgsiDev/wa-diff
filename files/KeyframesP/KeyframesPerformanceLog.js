__d(
  "KeyframesPerformanceLog",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 60,
      u = (function () {
        function t(e, t) {
          ((this.$1 = 0),
            (this.$2 = -1),
            (this.$3 = -1),
            (this.$6 = e),
            (this.$5 = t),
            (this.$6 = e),
            this.reset());
        }
        var n = t.prototype;
        return (
          (n.onNextFrame = function (t) {
            this.$7 = t;
          }),
          (n.start = function () {
            if (this.$2 < 0 || this.$3 >= 0) {
              var t = (e || (e = r("performanceNow")))();
              (this.$2 < 0
                ? (this.$2 = t)
                : this.$3 >= 0 && ((this.$2 += t - this.$3), (this.$3 = -1)),
                this.$5 && this.$5("start"));
            }
          }),
          (n.pause = function () {
            this.$3 < 0 &&
              this.$2 >= 0 &&
              ((this.$3 = (e || (e = r("performanceNow")))()),
              this.$5 && this.$5("pause"));
          }),
          (n.reset = function () {
            ((this.$1 = 0),
              (this.$4 = { one: 0, two: 0, four: 0, eight: 0 }),
              (this.$3 = -1),
              (this.$2 = -1));
          }),
          (n.addFrame = function () {
            ((this.$1 += 1), this.$7 && (this.$7(), (this.$7 = null)));
          }),
          (n.addFrameDrop = function (t) {
            t >= 8
              ? (this.$4.eight += 1)
              : t >= 4
                ? (this.$4.four += 1)
                : t >= 2
                  ? (this.$4.two += 1)
                  : t >= 1 && (this.$4.one += 1);
          }),
          (n.finish = function () {
            if (this.$2 >= 0) {
              var t = (e || (e = r("performanceNow")))(),
                n = this.$3 >= 0 ? t - this.$3 : 0,
                o = Math.max(Math.floor(t - this.$2 - n), 1),
                a = this.$1 ? (this.$1 / o) * 1e3 : s;
              (this.$6({
                animation_duration: o,
                display_refresh_rate: s,
                eight_frame_drop_count: this.$4.eight,
                four_frame_drop_count: this.$4.four,
                frame_rate: a,
                one_frame_drop_count: this.$4.one,
                two_frame_drop_count: this.$4.two,
              }),
                this.reset());
            }
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
