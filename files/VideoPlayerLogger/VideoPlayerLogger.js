__d(
  "VideoPlayerLogger",
  [
    "invariant",
    "FBLogger",
    "VideoPlayerExperiments",
    "VideoPlayerHTML5Experiments",
    "VideoPlayerLoggerErrorStates",
    "VideoPlayerLoggerErrors",
    "VideoPlayerLoggerFallbackReasons",
    "VideoPlayerLoggerPlayerStates",
    "VideoPlayerLoggerSource",
    "VideoPlayerWwwFalcoEvent",
    "getVideoBrowserTabId",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 200,
      u = n("VideoPlayerHTML5Experiments").discerningAbandonStallLogging,
      c = n("VideoPlayerHTML5Experiments").useBanzaiVitalForLive;
    function d(e, t, n, r) {
      return babelHelpers.extends(
        { event_name: e, source: n, scriptPath: r },
        t,
      );
    }
    var m = 5e3,
      p = function () {
        return n("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers
          ? (e || (e = n("performanceAbsoluteNow")))()
          : Date.now();
      },
      _ = (function () {
        function e(e, t) {
          ((this.$28 = []),
            (this.$29 = null),
            (this.$30 = 0),
            (this.$31 = !1),
            (this.$2 = e),
            (this.$3 = null),
            (this.$5 = {}),
            (this.$4 = t),
            (this.$7 = 0),
            (this.$8 = 0),
            (this.$9 = 0),
            (this.$10 = 0),
            (this.$6 = []),
            (this.$19 = 0),
            (this.$20 = 0),
            (this.$11 = 0),
            (this.$27 = !1),
            (this.$16 = !1),
            this.$32(),
            this.$33());
        }
        var t = e.prototype;
        return (
          (t.updateSource = function (t) {
            this.$2 = t;
          }),
          (t.getSource = function () {
            return this.$2;
          }),
          (t.disable = function () {
            this.$31 = !0;
          }),
          (t.isDisabled = function () {
            return this.$31;
          }),
          (t.logEvent = function (t, r) {
            var e = this;
            switch (
              ((r = babelHelpers.extends({}, r, this.$4)),
              (r.initial_event = !Object.prototype.hasOwnProperty.call(
                this.$5,
                t,
              )),
              Object.prototype.hasOwnProperty.call(r, "time_ms") ||
                (r.time_ms = p()),
              Object.prototype.hasOwnProperty.call(r, "browser_tab_id") ||
                (r.browser_tab_id = n("getVideoBrowserTabId")()),
              Object.prototype.hasOwnProperty.call(r, "time") ||
                (r.time = Math.round(r.time_ms / 1e3)),
              (r.is_stalling = this.$34()),
              (r.error_user_info = this.$35(r.error_user_info)),
              this.$3 && Object.assign(r, this.$3),
              n("VideoPlayerExperiments").logVideoFramesInfo && this.$36(),
              t)
            ) {
              case "paused":
              case "finished_playing": {
                if (this.$24) {
                  var o = this.$24,
                    a = o.getABREvaluation();
                  ((r.ideal_samples = a.idealSamples),
                    (r.conservative_samples = a.conservativeSamples),
                    (r.aggressive_samples = a.aggressiveSamples),
                    (r.conservative_resolution_constrained_samples =
                      a.conservativeResolutionConstrainedSamples),
                    (r.last_quality_switch_reason = a.lastQualitySwitchReason),
                    r.reason && o.setLastQualitySwitchReason(r.reason));
                }
                var i = typeof this.$25 == "function" && this.$25(),
                  l = typeof this.$26 == "function" && this.$26();
                typeof l == "number" &&
                  typeof i == "number" &&
                  ((r.dropped_frame_count = i), (r.total_frame_count = l));
                break;
              }
            }
            switch (t) {
              case "started_playing":
              case "unpaused":
                this.$27 = !0;
                break;
              case "finished_playing":
              case "error":
              case "paused":
                this.$27 = !1;
                break;
            }
            switch (t) {
              case "requested_playing":
                (this.$32(),
                  this.$37(),
                  this.$5.started_playing
                    ? (r.state = n("VideoPlayerLoggerPlayerStates").UNPAUSED)
                    : (r.state = n("VideoPlayerLoggerPlayerStates").STARTED));
                break;
              case "started_playing":
              case "unpaused":
              case "finished_playing":
              case "cancelled_requested_playing":
              case "error":
              case "paused":
              case "representation_ended":
              case "heart_beat":
                if (
                  (t === "error" &&
                    r.state ===
                      n("VideoPlayerLoggerErrorStates").PLAYER_FAILURE &&
                    !this.$5.started_playing &&
                    (r.state = n("VideoPlayerLoggerPlayerStates").STARTED),
                  (t === "error" &&
                    n("VideoPlayerExperiments").disableStallLoggingForError) ||
                    (t == "representation_ended" && !this.$5.started_playing) ||
                    (t === "heart_beat" &&
                      (!this.$5.started_playing ||
                        !n("VideoPlayerHTML5Experiments")
                          .heartbeatUpdateWatchTimeV2 ||
                        this.$34())) ||
                    (t === "heart_beat" && (r.v2_heart_beat = !0),
                    (t === "started_playing" || t === "unpaused") &&
                      ((this.$11 = r.time_ms), this.$38()),
                    t === "error" &&
                      r.state !==
                        n("VideoPlayerLoggerErrorStates").PLAYBACK_FAILURE))
                )
                  break;
                (t === "cancelled_requested_playing" &&
                  (this.$5.started_playing
                    ? (r.state = n("VideoPlayerLoggerPlayerStates").UNPAUSED)
                    : (r.state = n("VideoPlayerLoggerPlayerStates").STARTED)),
                  this.$39(),
                  this.$40(),
                  (t === "paused" || t === "finished_playing") &&
                    (u && t === "finished_playing" && this.$38(),
                    (r.recent_stalls_count = this.$41())),
                  this.$42(),
                  this.$43(r),
                  this.$44(r),
                  this.$33(),
                  u && this.$38(),
                  this.$32());
                break;
            }
            if (n("VideoPlayerExperiments").logVideoFramesInfo)
              switch (t) {
                case "started_playing":
                case "unpaused":
                case "finished_playing":
                case "paused":
                case "heart_beat": {
                  var s = this.$45();
                  s != null && (r.video_frames_info = s);
                  break;
                }
              }
            var m = {
              logData: r,
              event: t,
              scriptPath: this.$1,
              source: this.$2,
            };
            return (
              t || n("FBLogger")("video").warn("Missing event name"),
              (this.$5[t] = !0),
              this.$2 === "animated_image_share" || this.isDisabled()
                ? null
                : (r.ad_client_token || (c && r.playback_is_live_streaming)
                    ? n("VideoPlayerWwwFalcoEvent").logImmediately(function () {
                        return d(t, r, e.$2, e.$1);
                      })
                    : n("VideoPlayerWwwFalcoEvent").log(function () {
                        return d(t, r, e.$2, e.$1);
                      }),
                  m)
            );
          }),
          (t.setScriptPath = function (t) {
            this.$1 = t;
          }),
          (t.setFTData = function (t) {
            this.$3 = t;
          }),
          (t.setABRQualityTracker = function (t) {
            this.$24 = t;
          }),
          (t.setFrameCountGetters = function (t, n) {
            ((this.$25 = t), (this.$26 = n));
          }),
          (t.startBuffering = function (t) {
            (n("VideoPlayerHTML5Experiments")
              .disableBufferingBeforeStartedPlaying &&
              !this.$5.started_playing) ||
              this.$37(t);
          }),
          (t.endBuffering = function () {
            (n("VideoPlayerHTML5Experiments")
              .disableBufferingBeforeStartedPlaying &&
              !this.$5.started_playing) ||
              (this.$40(), this.$46(), this.$39(), this.$42());
          }),
          (t.startInterrupt = function () {
            this.$47();
          }),
          (t.endInterrupt = function () {
            (this.$40(), this.$46());
          }),
          (t.$34 = function () {
            return this.$15 > 0;
          }),
          (t.$37 = function (t) {
            this.$34() ||
              ((this.$16 = this.$27),
              (this.$15 = Date.now()),
              t !== void 0 && this.$5.started_playing && (this.$17 = t));
          }),
          (t.$47 = function () {
            this.$48() || (this.$21 = Date.now());
          }),
          (t.$48 = function () {
            return this.$21 > 0;
          }),
          (t.$49 = function () {
            return this.$48() ? Date.now() - this.$21 : 0;
          }),
          (t.$50 = function () {
            return this.$34() ? Date.now() - this.$15 : 0;
          }),
          (t.$40 = function () {
            if (this.$48()) {
              var e = this.$49();
              ((this.$22 += e),
                (this.$20 += e),
                (this.$23 += 1),
                (this.$19 += 1));
            }
          }),
          (t.$46 = function () {
            this.$48() && (this.$21 = 0);
          }),
          (t.$33 = function () {
            ((this.$22 = 0), (this.$23 = 0), this.$46());
          }),
          (t.$39 = function () {
            if (this.$34()) {
              var e = this.$50();
              (this.$17 !== null && (this.$18 = e),
                (this.$14 += e),
                (this.$8 += e),
                this.$12++,
                e > 200 && this.$13++,
                this.$7++,
                this.$16 && ((this.$10 += e), this.$9++, (this.$16 = !1)),
                u && this.$6.push(p()));
            }
          }),
          (t.$42 = function () {
            this.$34() && (this.$15 = 0);
          }),
          (t.$35 = function (t) {
            return t && typeof t == "object" ? JSON.stringify(t) : t;
          }),
          (t.$36 = function () {
            var e = this;
            this.$29 ||
              (this.$29 = setInterval(function () {
                return e.$51();
              }, s));
          }),
          (t.$51 = function () {
            var e = typeof this.$26 == "function" && this.$26(),
              t = typeof this.$25 == "function" && this.$25();
            typeof e == "number" &&
              typeof t == "number" &&
              (e !== this.$30 || t !== 0) &&
              (this.$28.push({
                time_stamp: p(),
                total_frames: e,
                dropped_frames: t,
              }),
              (this.$30 = e));
          }),
          (t.$45 = function () {
            if (!this.$28.length) return null;
            var e = [];
            for (var t of this.$28)
              e.push([t.time_stamp, t.total_frames, t.dropped_frames]);
            return ((this.$28 = []), JSON.stringify(e));
          }),
          (t.stopCollectingVideoFramesInfo = function () {
            (clearInterval(this.$29), (this.$29 = null), (this.$28 = []));
          }),
          (t.getCumulativeStallCount = function () {
            return this.$7;
          }),
          (t.getCumulativeInPlayStallCount = function () {
            return this.$9;
          }),
          (t.getStallCount = function () {
            return this.$12;
          }),
          (t.getCumulativeStallTime = function () {
            return this.$8 + this.$50();
          }),
          (t.getCumulativeInPlayStallTime = function () {
            return this.$10 + (this.$16 ? this.$50() : 0);
          }),
          (t.getCumulativeInterruptCount = function () {
            return this.$19;
          }),
          (t.getCumulativeInterruptTime = function () {
            return this.$20 + this.$49();
          }),
          (t.$43 = function (t) {
            ((t.stall_time = Math.max(0, this.$14)),
              (t.stall_count = this.$12),
              (t.stall_count_200_ms = this.$13),
              this.$18 &&
                ((t.first_stall_time = this.$18),
                (t.first_stall_start_position = this.$17)));
          }),
          (t.$44 = function (t) {
            ((t.interrupt_time = Math.max(0, this.$22)),
              (t.interrupt_count = this.$23));
          }),
          (t.$41 = function () {
            var e = p(),
              t = e - m;
            return (
              (this.$6 = this.$6.filter(function (e) {
                return e >= t;
              })),
              u || (this.$12 > 0 && this.$6.push(e)),
              this.$6.length
            );
          }),
          (t.$32 = function () {
            ((this.$14 = 0),
              (this.$15 = 0),
              (this.$12 = 0),
              (this.$13 = 0),
              (this.$17 = null),
              (this.$18 = 0));
          }),
          (t.$38 = function () {
            this.$6 = [];
          }),
          (t.getFTdata = function () {
            return this.$3;
          }),
          e
        );
      })();
    ((_.Sources = n("VideoPlayerLoggerSource")),
      (_.Errors = n("VideoPlayerLoggerErrors")),
      (_.FallbackReasons = n("VideoPlayerLoggerFallbackReasons")),
      (_.ErrorStates = n("VideoPlayerLoggerErrorStates")),
      (_.PlayerStates = n("VideoPlayerLoggerPlayerStates")),
      (a.exports = _));
  },
  null,
);
