__d(
  "CometUFILiveTypingBroadcastPublisher",
  ["AbstractCommentLiveTypingPublisher", "CometUFILiveTypingBroadcastMutation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r, o) {
        var a;
        return (
          (a = e.call(this) || this),
          (a.$CometUFILiveTypingBroadcastPublisher$p_1 = t),
          (a.$CometUFILiveTypingBroadcastPublisher$p_2 = n),
          (a.$CometUFILiveTypingBroadcastPublisher$p_3 = o),
          (a.$CometUFILiveTypingBroadcastPublisher$p_4 = null),
          (a.$CometUFILiveTypingBroadcastPublisher$p_5 = null),
          (a.$CometUFILiveTypingBroadcastPublisher$p_6 = r),
          a
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.destroy = function () {
          (this.$CometUFILiveTypingBroadcastPublisher$p_4 &&
            this.$CometUFILiveTypingBroadcastPublisher$p_4.dispose(),
            this.$CometUFILiveTypingBroadcastPublisher$p_5 &&
              this.$CometUFILiveTypingBroadcastPublisher$p_5.dispose());
        }),
        (n.handleStartEvent = function () {
          e.prototype.handleStartEvent.call(this);
        }),
        (n.handleStopEvent = function () {
          e.prototype.handleStopEvent.call(this);
        }),
        (n.publishStartEvent = function () {
          var e = this;
          if (!this.$CometUFILiveTypingBroadcastPublisher$p_4) {
            this.$CometUFILiveTypingBroadcastPublisher$p_5 &&
              (this.$CometUFILiveTypingBroadcastPublisher$p_5.dispose(),
              (this.$CometUFILiveTypingBroadcastPublisher$p_5 = null));
            var t = function () {
              e.$CometUFILiveTypingBroadcastPublisher$p_4 = null;
            };
            this.$CometUFILiveTypingBroadcastPublisher$p_2 != null &&
              (this.$CometUFILiveTypingBroadcastPublisher$p_4 = o(
                "CometUFILiveTypingBroadcastMutation",
              ).start(
                this.$CometUFILiveTypingBroadcastPublisher$p_6,
                {
                  actorID: this.$CometUFILiveTypingBroadcastPublisher$p_1,
                  feedbackID: this.$CometUFILiveTypingBroadcastPublisher$p_2,
                },
                t,
              ));
          }
        }),
        (n.publishStopEvent = function () {
          var e = this;
          if (!this.$CometUFILiveTypingBroadcastPublisher$p_5) {
            this.$CometUFILiveTypingBroadcastPublisher$p_4 &&
              (this.$CometUFILiveTypingBroadcastPublisher$p_4.dispose(),
              (this.$CometUFILiveTypingBroadcastPublisher$p_4 = null));
            var t = function () {
              e.$CometUFILiveTypingBroadcastPublisher$p_5 = null;
            };
            this.$CometUFILiveTypingBroadcastPublisher$p_2 != null &&
              (this.$CometUFILiveTypingBroadcastPublisher$p_5 = o(
                "CometUFILiveTypingBroadcastMutation",
              ).stop(
                this.$CometUFILiveTypingBroadcastPublisher$p_6,
                {
                  actorID: this.$CometUFILiveTypingBroadcastPublisher$p_1,
                  feedbackID: this.$CometUFILiveTypingBroadcastPublisher$p_2,
                },
                t,
              ));
          }
        }),
        t
      );
    })(r("AbstractCommentLiveTypingPublisher"));
    l.default = e;
  },
  98,
);
