__d(
  "HVideoPlayerMixin",
  [
    "EventListener",
    "UserAgent",
    "VideoPlayerHTML5Experiments",
    "dangerouslyOverrideMediaElementEndedProperty",
    "getHTMLMediaElementMutedState",
    "getVideoBrowserTabId",
  ],
  function (t, n, r, o, a, i) {
    var e = -1,
      l = !!(
        window.performance &&
        window.performance.now &&
        window.performance.timing &&
        window.performance.timing.navigationStart
      );
    function s(e, t) {
      e.time_ms = Date.now();
      var n = t.timeStamp;
      if (n && l) {
        var r = Math.floor(n).toString().length,
          o = Date.now().toString().length,
          a = window.performance.now();
        if (r === o + 3) ((n = Math.floor(n / 1e3)), (e.time_ms = n));
        else if (r === o) e.time_ms = n;
        else if (n <= a) {
          var i = window.performance.timing.navigationStart;
          e.time_ms = i + Math.floor(n);
        }
      }
      return e;
    }
    var u = {
      initLogger: function (r, o, a, i, l, s, c) {
        var t = this;
        ((this._loggedEvents = {}),
          (this._logFunction = r),
          (u._fixOverwrittenGetVideoCurrentTime = i),
          (u._fireSeekEvents = l),
          (this._useEventTime = o),
          (this._recentPausedTime = null),
          (u._audioOnly = !1),
          (u._enablePlaybackSpeedLogging = c));
        var d = this.getVideoElement();
        if (s === !0) {
          var m = d.pause;
          d.pause = function () {
            return ((t._recentPausedTime = d.currentTime), m.apply(d));
          };
        }
        (a === !0 &&
          (this._overwriteVideoCurrentTimeProperty(d),
          u._didOverwriteVideoCurrentTimeProperty !== !0 &&
            (this.preventSeekLoggingInMixin = !0)),
          (this._lastStartTimePosition = e),
          (u._muted = n("getHTMLMediaElementMutedState")(d)),
          (this._pausedPosition = e),
          (u._seeking = !1),
          (this._seekSourceTimePosition = e),
          (this._currentTimeAtSeekStart = e),
          (this._volume = d.volume),
          (u._hasBlockedPausedRepresentationEnded = !1),
          (u._logNextPlayingEvent = !0),
          (this._lastLoggedPlaybackSpeed = null),
          (this._lastPlayedTime = e));
        var p = !1;
        if (
          (d.readyState >= d.HAVE_FUTURE_DATA
            ? this._logReadyToPlay()
            : (p = !0),
          !this.skipSubscriptions())
        ) {
          var _ = this.getSubscriptions();
          (p &&
            _.addSubscriptions(
              n("EventListener").listen(
                d,
                "canplay",
                this._logReadyToPlay.bind(this),
              ),
            ),
            _.addSubscriptions(
              n("EventListener").listen(d, "ended", this.onEnded.bind(this)),
              n("EventListener").listen(d, "pause", this.onPause.bind(this)),
              n("EventListener").listen(
                d,
                "playing",
                this.onPlaying.bind(this),
              ),
              n("EventListener").listen(d, "seeked", this.onSeeked.bind(this)),
              n("EventListener").listen(
                d,
                "seeking",
                this.onSeeking.bind(this),
              ),
              n("EventListener").listen(d, "play", this.onPlay.bind(this)),
              n("EventListener").listen(
                d,
                "loadedmetadata",
                this.onLoadedMetadata.bind(this),
              ),
              n("EventListener").listen(
                d,
                "timeupdate",
                this.onTimeUpdate.bind(this),
              ),
              n("EventListener").listen(
                d,
                "volumechange",
                this.onVolumeChange.bind(this),
              ),
            ),
            u._enablePlaybackSpeedLogging === !0 &&
              _.addSubscriptions(
                n("EventListener").listen(
                  d,
                  "ratechange",
                  this.onPlaybackRateChange.bind(this),
                ),
              ));
        }
      },
      skipSubscriptions: function () {
        return !1;
      },
      onCanPlay: function (t) {
        this._logReadyToPlay(t);
      },
      onPlay: function (t) {
        ((u._logNextPlayingEvent = !0),
          (u._ignoreNextPlaying = !1),
          (u._pendingPlayRequest = !0));
      },
      logHeartbeat: function () {
        if (n("VideoPlayerHTML5Experiments").heartbeatUpdateWatchTime) {
          this._logEvent("heart_beat", this._getWatchTimeClosingLogData({}));
          var e = this._getVideoCurrentTime();
          ((this._lastStartTimePosition = e), (this._lastPlayedTime = e));
        } else this._logEvent("heart_beat");
      },
      _getWatchTimeClosingLogData: function (n) {
        return (
          (this._lastPlayedTime = this._getVideoCurrentTime()),
          this._amendEventTime(
            babelHelpers.extends(
              {
                video_last_start_time_position:
                  this._lastStartTimePosition === e
                    ? this._lastPlayedTime
                    : this._lastStartTimePosition,
                video_time_position: this._lastPlayedTime,
              },
              n,
            ),
          )
        );
      },
      _logOnce: function (t, n) {
        this._loggedEvents[t] || this._logEvent(t, n);
      },
      setAudioOnly: function (t) {
        u._audioOnly = t;
      },
      _logEvent: function (t, r) {
        this._loggedEvents[t] = !0;
        var e = r || {};
        if (
          ((e.video_id = this.getVideoID()),
          (e.browser_tab_id = n("getVideoBrowserTabId")()),
          u._audioOnly === !0 && (e.audio_only = !0),
          (e.has_blocked_paused_representation_ended =
            u._hasBlockedPausedRepresentationEnded),
          Object.prototype.hasOwnProperty.call(e, "video_time_position") ||
            (e.video_time_position = this._getVideoCurrentTime()),
          (e.time_ms == null || e.time_ms === 0) && (e.time_ms = Date.now()),
          (e.time = Math.round(e.time_ms / 1e3)),
          this.getAdClientToken)
        ) {
          var o = this.getAdClientToken();
          o && (e.ad_client_token = o);
        }
        if (
          (this.getPlayerFormat && (e.player_format = this.getPlayerFormat()),
          this.getPlayerOrigin && (e.player_origin = this.getPlayerOrigin()),
          this.getPlayerSuborigin &&
            (e.player_suborigin = this.getPlayerSuborigin()),
          u._enablePlaybackSpeedLogging === !0)
        ) {
          var a = this.getVideoElement().playbackRate,
            i = a !== 0 ? a : this._lastLoggedPlaybackSpeed;
          ((e.current_playback_speed = i), (this._lastLoggedPlaybackSpeed = i));
        }
        this._logFunction(t, e);
      },
      _logReadyToPlay: function () {},
      __setPendingPlayRequest: function (t) {
        u._pendingPlayRequest = t;
      },
      onPause: function (r) {
        u._logNextPlayingEvent = !0;
        var t = this.getVideoElement();
        if (u._pendingPlayRequest === !0) {
          var o = { debug_reason: this.getLastPlayReason() };
          ((u._pendingPlayRequest = !1),
            this._logEvent("cancelled_requested_playing", o));
          return;
        }
        var a = !!this._getVideoPlayerShakaConfig(),
          i =
            t.ended ||
            (a && n("dangerouslyOverrideMediaElementEndedProperty").isEnded(r))
              ? "finished_playing"
              : "paused",
          l =
            this._recentPausedTime == null
              ? this._getVideoCurrentTime()
              : this._recentPausedTime;
        ((this._recentPausedTime = null), l && (this._lastPlayedTime = l));
        var s = this._lastPlayedTime,
          c =
            this._lastStartTimePosition === e
              ? this._lastPlayedTime
              : this._lastStartTimePosition;
        n("VideoPlayerHTML5Experiments").preventNegativeTimePositions &&
          this._lastPlayedTime < 0 &&
          ((s = 0), this._lastStartTimePosition < 0 && (c = 0));
        var d = r.lastPauseReason;
        if (i === "finished_playing") s = Math.max(s, t.duration);
        else {
          if (this.preventPauseLoggingInMixin === !0) return;
          this.preventPauseLoggingInMixin === !1 &&
            (d = d != null && d !== "" ? d : "unloaded");
        }
        (this._logEvent(
          i,
          this._amendEventTime(
            {
              video_last_start_time_position: c,
              video_time_position: s,
              debug_reason: d,
            },
            r,
          ),
        ),
          (this._lastStartTimePosition = e));
      },
      onEnded: function () {
        ((u._logNextPlayingEvent = !0),
          this._lastStartTimePosition !== e &&
            n("UserAgent").isBrowser("IE") &&
            this.onPause({}));
      },
      onBlockedPausedRepresentationEnded: function () {
        u._hasBlockedPausedRepresentationEnded = !0;
      },
      logRepresentationEnded: function (t) {
        if (t) {
          var e = {
            representation_id: t.representationID,
            next_representation_id: t.nextRepresentationID,
            stream_switch_reason: t.streamSwitchReason,
          };
          if (
            (n("VideoPlayerHTML5Experiments").newStateChangeCalculation &&
              (e = this._getWatchTimeClosingLogData(e)),
            this._logEvent("representation_ended", e),
            n("VideoPlayerHTML5Experiments").newStateChangeCalculation)
          ) {
            var r = this._getVideoCurrentTime();
            ((this._lastStartTimePosition = r), (this._lastPlayedTime = r));
          }
        }
      },
      addWatchTimeData: function (n) {
        return (
          this._lastStartTimePosition != e &&
            this._lastPlayedTime != e &&
            ((n.video_last_start_time_position = this._lastStartTimePosition),
            (n.video_time_position = this._lastPlayedTime),
            (this._lastStartTimePosition = e)),
          n
        );
      },
      getLastPlayReason: function () {
        return null;
      },
      getVideoPlayReason: function () {
        return null;
      },
      onPlaying: function (t) {
        if (u._logNextPlayingEvent === !0) {
          if (
            (n("VideoPlayerHTML5Experiments").superficialUnpauseEventsFix &&
              (u._logNextPlayingEvent = !1),
            u._ignoreNextPlaying === !0)
          ) {
            u._ignoreNextPlaying = !1;
            return;
          }
          var e = this.getLastPlayReason();
          u._pendingPlayRequest = !1;
          var r = this._loggedEvents.started_playing
              ? "unpaused"
              : "started_playing",
            o = this._amendEventTime(
              { debug_reason: e, video_play_reason: this.getVideoPlayReason() },
              t,
            ),
            a = this._getVideoCurrentTime();
          if (n("VideoPlayerHTML5Experiments").useCurrentTimeAdjustment) {
            var i = this.getVideoElement().currentTime,
              l = i - a;
            o.time_ms -= Math.round(l * 1e3);
          }
          (this._logEvent(r, o),
            (this._lastStartTimePosition = a),
            (this._lastPlayedTime = a),
            (this._currentTimeAtLoadedMetadataCache = null));
        }
      },
      allowNextSeekInMixin: function () {
        u._allowNextSeek = !0;
      },
      onSeeked: function (n) {
        u._seeking = !1;
        var t = this._seekSourceTimePosition;
        this._seekSourceTimePosition = e;
        var r = this._currentTimeAtSeekStart;
        if (
          ((this._currentTimeAtSeekStart = e),
          this.preventSeekLoggingInMixin && u._allowNextSeek !== !0)
        ) {
          u._pendingPlayRequest !== !0 && (u._ignoreNextPlaying = !0);
          return;
        }
        ((u._allowNextSeek = !1), (u._ignoreNextPlaying = !1));
        var o = {
          video_seek_source_time_position: t,
          video_last_start_time_position: t,
        };
        (this._fixOvewrittenGetVideoCurrentTime &&
          (o.video_seek_source_time_position = r),
          this.preventSeekLoggingInMixin &&
            (this._lastStartTimePosition !== e
              ? (o.video_last_start_time_position = this._lastStartTimePosition)
              : (o.video_last_start_time_position = t)));
        var a = "scrubbed";
        (u._fireSeekEvents === !0 &&
          ((a = "seeked"), (o = { seek_from_video_time_position: r })),
          this._logEvent(a, this._amendEventTime(o, n)));
        var i = this.getVideoElement();
        i.paused
          ? (this._lastStartTimePosition = e)
          : (this._lastStartTimePosition = this._getVideoCurrentTime());
      },
      onSeeking: function (n) {
        ((this._currentTimeAtLoadedMetadataCache = null),
          u._seeking !== !0 &&
            ((this._seekSourceTimePosition = this._getVideoCurrentTime()),
            (u._seeking = !0)),
          u._fixOverwrittenGetVideoCurrentTime !== !0 &&
            (this._currentTimeAtSeekStart = e));
      },
      onTimeUpdate: function (t) {
        this._currentTimeAtLoadedMetadataCache = null;
        var e = this.getVideoElement();
        e.paused || (this._lastPlayedTime = this._getVideoCurrentTime());
      },
      onPlaybackRateChange: function (t) {
        var e = this.getVideoElement(),
          n = e.playbackRate;
        this._lastLoggedPlaybackSpeed != null &&
          n !== 0 &&
          n !== this._lastLoggedPlaybackSpeed &&
          this._logEvent("playback_speed_changed", this._amendEventTime({}, t));
      },
      onVolumeChange: function (t) {
        var e = this.getVideoElement(),
          r = {},
          o = null;
        if (n("VideoPlayerHTML5Experiments").useFixedVolumeLogging) {
          var a = e.muted,
            i = u._muted,
            l = e.volume,
            s = this._volume;
          ((r.current_volume = Math.round(l * 100)),
            (this._volume = l),
            (u._muted = a));
          var c = a || l == 0,
            d = i === !0 || s == 0;
          if (d && c) return;
          if (d != c) c ? (o = "muted") : (o = "unmuted");
          else {
            if (s == l) return;
            l < s ? (o = "volume_decrease") : (o = "volume_increase");
          }
        } else
          (e.muted !== u._muted && e.volume === this._volume && e.volume > 0
            ? (o = e.muted ? "muted" : "unmuted")
            : ((o =
                e.volume > this._volume
                  ? "volume_increase"
                  : "volume_decrease"),
              (r.current_volume = Math.round(e.volume * 100))),
            (u._muted = e.muted),
            (this._volume = e.volume));
        this._logEvent(o, this._amendEventTime(r, t));
      },
      _amendEventTime: function (t, r) {
        var e = this._useEventTime;
        return (
          n("VideoPlayerHTML5Experiments").fixEventTimeLogging && (e = e && r),
          e ? s(t, r) : ((t.time_ms = Date.now()), t)
        );
      },
      _getVideoCurrentTime: function () {
        var t;
        return (
          u._fixOverwrittenGetVideoCurrentTime === !0
            ? (t = this.getVideoElement().currentTime)
            : (t =
                this._currentTimeAtSeekStart === e
                  ? this.getVideoElement().currentTime
                  : this._currentTimeAtSeekStart),
          (t = t.toFixed(2)),
          n("VideoPlayerHTML5Experiments").useCurrentTimeAdjustment &&
            this._currentTimeAtLoadedMetadataCache != null &&
            (t = this._currentTimeAtLoadedMetadataCache.toFixed(2)),
          n("VideoPlayerHTML5Experiments").fixCurrentTimeType ? +t : t
        );
      },
      _getVideoPlayerShakaConfig: function () {
        return this.getVideoPlayerShakaConfig &&
          typeof this.getVideoPlayerShakaConfig == "function"
          ? this.getVideoPlayerShakaConfig()
          : null;
      },
      onLoadedMetadata: function (t) {
        this._currentTimeAtLoadedMetadataCache =
          this.getVideoElement().currentTime;
      },
      _overwriteVideoCurrentTimeProperty: function (n) {
        var t = this;
        u._didOverwriteVideoCurrentTimeProperty = !1;
        try {
          var r =
            Object.getOwnPropertyDescriptor &&
            Object.getOwnPropertyDescriptor(
              HTMLMediaElement.prototype,
              "currentTime",
            );
          if (!r || typeof r.get != "function" || typeof r.set != "function")
            return;
          (Object.defineProperty &&
            Object.defineProperty(n, "currentTime", {
              get: function () {
                return r.get.call(this);
              },
              set: function (a) {
                (t._currentTimeAtSeekStart === e &&
                  (t._currentTimeAtSeekStart = r.get.call(n)),
                  r.set.call(n, a));
              },
              configurable: !0,
              enumerable: !0,
            }),
            (u._didOverwriteVideoCurrentTimeProperty = !0));
        } catch (e) {}
      },
    };
    a.exports = u;
  },
  null,
);
