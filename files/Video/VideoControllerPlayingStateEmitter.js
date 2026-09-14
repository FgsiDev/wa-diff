__d(
  "VideoControllerPlayingStateEmitter",
  ["EventEmitter", "SubscriptionsHandler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$VideoControllerPlayingStateEmitter$p_2 = null),
          (n.$VideoControllerPlayingStateEmitter$p_3 = t),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.enable = function () {
          var e = this;
          (this.$VideoControllerPlayingStateEmitter$p_4().addSubscriptions(
            this.$VideoControllerPlayingStateEmitter$p_3.addListener(
              "stateChange",
              function () {
                var t = e.$VideoControllerPlayingStateEmitter$p_2;
                ((e.$VideoControllerPlayingStateEmitter$p_2 =
                  e.$VideoControllerPlayingStateEmitter$p_3.getState()),
                  e.$VideoControllerPlayingStateEmitter$p_2 !== t &&
                    e.$VideoControllerPlayingStateEmitter$p_5(
                      e.$VideoControllerPlayingStateEmitter$p_2,
                    ));
              },
            ),
          ),
            (this.$VideoControllerPlayingStateEmitter$p_2 =
              this.$VideoControllerPlayingStateEmitter$p_3.getState()),
            this.$VideoControllerPlayingStateEmitter$p_5(
              this.$VideoControllerPlayingStateEmitter$p_2,
            ));
        }),
        (n.setOnPlaying = function (t) {
          this.$VideoControllerPlayingStateEmitter$p_4().addSubscriptions(
            this.addListener("play", t),
          );
        }),
        (n.setOnPaused = function (t) {
          this.$VideoControllerPlayingStateEmitter$p_4().addSubscriptions(
            this.addListener("pause", t),
          );
        }),
        (n.disable = function () {
          ((this.$VideoControllerPlayingStateEmitter$p_2 = null),
            this.$VideoControllerPlayingStateEmitter$p_1 &&
              (this.$VideoControllerPlayingStateEmitter$p_1.release(),
              (this.$VideoControllerPlayingStateEmitter$p_1 = null)));
        }),
        (n.$VideoControllerPlayingStateEmitter$p_4 = function () {
          return (
            this.$VideoControllerPlayingStateEmitter$p_1 ||
              (this.$VideoControllerPlayingStateEmitter$p_1 = new (r(
                "SubscriptionsHandler",
              ))()),
            this.$VideoControllerPlayingStateEmitter$p_1
          );
        }),
        (n.$VideoControllerPlayingStateEmitter$p_5 = function (t) {
          t === "playing"
            ? this.emit("play")
            : t === "paused" && this.emit("pause");
        }),
        t
      );
    })(r("EventEmitter"));
    l.default = e;
  },
  98,
);
