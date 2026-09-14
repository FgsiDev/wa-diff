__d(
  "LiveVideoRewindTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = {};
        }
        var t = e.prototype;
        return (
          (t.log = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:LiveVideoRewindLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:LiveVideoRewindLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:LiveVideoRewindLoggerConfig",
              this.$1,
              { signal: !0 },
              t,
            );
          }),
          (t.clear = function () {
            return ((this.$1 = {}), this);
          }),
          (t.getData = function () {
            return babelHelpers.extends({}, this.$1);
          }),
          (t.updateData = function (t) {
            return ((this.$1 = babelHelpers.extends({}, this.$1, t)), this);
          }),
          (t.setActionSequenceNumber = function (t) {
            return ((this.$1.action_sequence_number = t), this);
          }),
          (t.setDeviceid = function (t) {
            return ((this.$1.deviceid = t), this);
          }),
          (t.setEvent = function (t) {
            return ((this.$1.event = t), this);
          }),
          (t.setPositionAfter = function (t) {
            return ((this.$1.position_after = t), this);
          }),
          (t.setPositionBefore = function (t) {
            return ((this.$1.position_before = t), this);
          }),
          (t.setSessionID = function (t) {
            return ((this.$1.session_id = t), this);
          }),
          (t.setVideoDuration = function (t) {
            return ((this.$1.video_duration = t), this);
          }),
          (t.setVideoID = function (t) {
            return ((this.$1.video_id = t), this);
          }),
          e
        );
      })(),
      l = {
        action_sequence_number: !0,
        deviceid: !0,
        event: !0,
        position_after: !0,
        position_before: !0,
        session_id: !0,
        video_duration: !0,
        video_id: !0,
      };
    i.default = e;
  },
  66,
);
