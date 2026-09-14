__d(
  "VideoWithClickPlayPause",
  ["logVideosClickTracking"],
  function (t, n, r, o, a, i) {
    var e = (function () {
      "use strict";
      function e(e) {
        var t = this;
        ((this.$1 = e),
          (this.$2 = this.$1.getVideoNode()),
          this.$1.addListener("clickVideo", function () {
            return t.$3();
          }),
          this.$1.hasSeenClick() && this.$3());
      }
      var t = e.prototype;
      return (
        (t.$3 = function () {
          var e = this.$1.getOption(
            "CommercialBreakVideoAdOverlay",
            "videoController",
          );
          if (this.$1.isState("playing")) {
            if (
              this.$1.getOption("VideoWithLiveBroadcast", "isLive") ||
              (e && e.getOption("VideoWithLiveBroadcast", "isLive")) ||
              this.$4() ||
              this.$5()
            )
              return;
            this.$1.pause("user_initiated");
          } else
            (n("logVideosClickTracking")(this.$2),
              this.$1.play("user_initiated"));
        }),
        (t.$4 = function () {
          var e = this.$1.getOption(
              "CommercialBreakVideoAdOverlay",
              "videoController",
            ),
            t = e && e.getOption("VideoWithInstreamVideo", "controller");
          return t && !t.getConfig().canPauseAdBreak;
        }),
        (t.$5 = function () {
          return this.$1.getOption(
            "VideoWithInstreamVideo",
            "disableClickToPause",
          );
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
