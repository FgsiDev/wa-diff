__d(
  "VideoWithLoopingPlayback",
  ["setImmediate"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t, n) {
        var o = this;
        (t === void 0 && (t = -1),
          n === void 0 && (n = !1),
          (this.$5 = !1),
          (this.$8 = function () {
            var e,
              t = o.$1.getOption("FeedAutoplay", "isVisibleForAutoplay"),
              n = o.$1.getOption("WatchAndScroll", "isActive"),
              a = o.$1.getIsInChannel(),
              i = o.$1.getSource() === "tahoe",
              l = (e = o.$1.getVideoNodeNullable()) == null ? void 0 : e.loop;
            (o.$7 && l === !1) ||
              (!o.$5 &&
                (t || t === void 0) &&
                !n &&
                !a &&
                !i &&
                (o.$4 == null || o.$3 < o.$4) &&
                (r("setImmediate")(function () {
                  return o.$1.play("loop_initiated");
                }),
                o.$3++,
                o.$4 != null &&
                  o.$3 === o.$4 - 1 &&
                  (o.$1.setOption("Looping", "isLooping", !1),
                  o.setVideoNodeLoop(!1))));
          }),
          (this.$1 = e),
          (this.$2 = !0),
          (this.$3 = 1),
          (this.$4 = t > -1 ? t : null),
          (this.$6 = this.$1.addListener("finishPlayback", this.$8)),
          this.$1.registerOption(
            "Looping",
            "isLooping",
            function () {
              return o.$2;
            },
            function (e) {
              return o.$9(e);
            },
          ),
          this.$1.registerOption(
            "Looping",
            "disabled",
            function () {
              return o.$5;
            },
            function (e) {
              return (o.$5 = e);
            },
          ),
          (this.$7 = n),
          this.setVideoNodeLoop(!0));
      }
      var t = e.prototype;
      return (
        (t.setVideoNodeLoop = function (t) {
          if (this.$7) {
            var e = this.$1.getVideoNodeNullable();
            e != null && (e.loop = t);
          }
        }),
        (t.destroy = function () {
          (this.$6 != null && (this.$6.remove(), (this.$6 = null)),
            this.$1.hasOption("Looping", "isLooping") &&
              this.$1.unregisterOption("Looping", "isLooping"),
            this.$1.hasOption("Looping", "disabled") &&
              this.$1.unregisterOption("Looping", "disabled"));
        }),
        (t.isLooping = function () {
          return this.$2;
        }),
        (t.getLoopCount = function () {
          return this.$3;
        }),
        (t.getMaxLoopCount = function () {
          return this.$4;
        }),
        (t.setMaxLoopCount = function (t) {
          this.$4 = t > -1 ? t : null;
        }),
        (t.$9 = function (t) {
          this.$2 = t;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
