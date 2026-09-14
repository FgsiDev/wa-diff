__d(
  "VideoPlayerHTML5Api",
  [
    "cx",
    "invariant",
    "AbstractVideoPlayerApi",
    "Arbiter",
    "CSS",
    "DOM",
    "DOMDimensions",
    "Deferred",
    "Event",
    "EventListener",
    "FBLogger",
    "HVideoPlayerMixin",
    "MediaBufferingDetector",
    "PlaybackSpeedExperiments",
    "Promise",
    "Run",
    "ShakaConstants",
    "StaleVideoMonitor",
    "SubscriptionsHandler",
    "TimeRanges",
    "URI",
    "VideoData",
    "VideoFrameBuffer",
    "VideoPlaybackQuality",
    "VideoPlayerExperiments",
    "VideoPlayerHTML5ApiCea608State",
    "VideoPlayerHTML5ApiWebVttState",
    "VideoPlayerHTML5CaptionsDisplay",
    "VideoPlayerHTML5Experiments",
    "VideoPlayerHTML5TrackNodeManager",
    "VideoPlayerQualitiesArray",
    "VideoPlayerShakaGlobalConfig",
    "VideoPlayerUIComponentDrawer",
    "VideoQualityClasses",
    "classWithMixins",
    "cr:936794",
    "dangerouslyOverrideMediaElementEndedProperty",
    "dispatchEvent",
    "err",
    "getErrorMessageFromMediaErrorCode",
    "getErrorNameFromMediaErrorCode",
    "getHTMLMediaElementMutedState",
    "isHTML5VideoImplementationUnavailable",
    "mixin",
    "onCanPlayHTMLMediaElement",
    "seekHTMLMediaElementTo",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m = {
        getBool: (d = o("VideoPlayerShakaGlobalConfig")).getBool,
        getNumber: d.getNumber,
        getString: d.getString,
        setGlobalOverrideConfig: d.setGlobalOverrideConfig,
      },
      p = -1,
      _ = 0.05,
      f = 476,
      g = 476;
    function h(e) {
      return e == null
        ? null
        : Array.isArray(e)
          ? e
              .map(function (e) {
                return typeof e == "string"
                  ? e
                  : (r("FBLogger")("blue_video_player").mustfix(
                      "The Oz player expects the initial representation ids to be an array of strings.",
                    ),
                    null);
              })
              .filter(Boolean)
          : (r("FBLogger")("blue_video_player").mustfix(
              "The Oz player expects the initial representation ids to be an array of strings.",
            ),
            null);
    }
    var y = (function (t) {
      function a(e, n) {
        var a;
        ((a = t.call(this) || this),
          (a.$VideoPlayerHTML5Api1 = null),
          (a.$VideoPlayerHTML5Api6 = null),
          (a.$VideoPlayerHTML5Api8 = null),
          (a.$VideoPlayerHTML5Api12 = null),
          (a.$VideoPlayerHTML5Api16 = null),
          (a.$VideoPlayerHTML5Api17 = !1),
          (a.$VideoPlayerHTML5Api18 = !1),
          (a.$VideoPlayerHTML5Api21 = !1),
          (a.$VideoPlayerHTML5Api38 = null),
          (a.$VideoPlayerHTML5Api46 = !1),
          (a.$VideoPlayerHTML5Api51 = null),
          (a.$VideoPlayerHTML5Api52 = !1),
          (a.$VideoPlayerHTML5Api56 = null),
          (a.$VideoPlayerHTML5Api57 = null),
          (a.$VideoPlayerHTML5Api58 = null),
          (a.$VideoPlayerHTML5Api59 = null),
          (a.$VideoPlayerHTML5Api60 = null),
          (a.$VideoPlayerHTML5Api35 = e),
          (a.$VideoPlayerHTML5Api41 = n ? n.shakaConfig : null),
          (a.$VideoPlayerHTML5Api15 = a.$VideoPlayerHTML5Api35.id),
          (a.preventSeekLoggingInMixin = !0),
          a.$VideoPlayerHTML5Api61("allow_seek_logging_in_mixin", !1) &&
            (a.preventSeekLoggingInMixin = !1));
        var i = a.$VideoPlayerHTML5Api62();
        if (
          ((a.$VideoPlayerHTML5Api47 = i.width),
          (a.$VideoPlayerHTML5Api14 = i.height),
          n)
        )
          a.$VideoPlayerHTML5Api7 = n;
        else {
          var l = a.$VideoPlayerHTML5Api35.getAttribute("data-config");
          if (l == null || l === "")
            throw r("FBLogger")("blue_video_player").mustfixThrow(
              "Empty data-config attribute",
            );
          try {
            a.$VideoPlayerHTML5Api7 = JSON.parse(l);
          } catch (e) {
            throw r("FBLogger")("blue_video_player")
              .catching(e)
              .mustfixThrow("Unable to parse data-config attribute as JSON");
          }
        }
        ((a.$VideoPlayerHTML5Api42 = new (r("SubscriptionsHandler"))()),
          (a.$VideoPlayerHTML5Api5 = new (r("MediaBufferingDetector"))(
            a.$VideoPlayerHTML5Api35,
            a.$VideoPlayerHTML5Api41,
          )),
          a.$VideoPlayerHTML5Api42.addSubscriptions(
            a.$VideoPlayerHTML5Api5.addListener("bufferingStart", function () {
              return a.$VideoPlayerHTML5Api63();
            }),
            a.$VideoPlayerHTML5Api5.addListener("bufferingEnd", function () {
              return a.$VideoPlayerHTML5Api64();
            }),
          ),
          (a.$VideoPlayerHTML5Api25 = p),
          (a.$VideoPlayerHTML5Api27 = r("getHTMLMediaElementMutedState")(
            a.$VideoPlayerHTML5Api35,
          )),
          (a.$VideoPlayerHTML5Api45 = a.$VideoPlayerHTML5Api35.volume),
          (a.$VideoPlayerHTML5Api26 = !1),
          (a.$VideoPlayerHTML5Api23 = null),
          (a.$VideoPlayerHTML5Api30 = !1),
          (a.$VideoPlayerHTML5Api3 = !1),
          (a.$VideoPlayerHTML5Api32 =
            a.$VideoPlayerHTML5Api35.getAttribute("preload") == "auto"),
          (a.$VideoPlayerHTML5Api33 = null),
          (a.$VideoPlayerHTML5Api37 = new (r("StaleVideoMonitor"))(
            a.$VideoPlayerHTML5Api35,
          )),
          a.$VideoPlayerHTML5Api42.addSubscriptions(
            a.$VideoPlayerHTML5Api37.addListener("stale", function (e, t) {
              return a.$VideoPlayerHTML5Api65(e, t);
            }),
          ),
          (a.$VideoPlayerHTML5Api11 = !1),
          (a.$VideoPlayerHTML5Api40 = !1),
          a.$VideoPlayerHTML5Api7.lazyPreload &&
            (a.$VideoPlayerHTML5Api7.onafterloadRegister
              ? o("Run").onAfterLoad(function () {
                  return a.$VideoPlayerHTML5Api35.setAttribute(
                    "preload",
                    a.$VideoPlayerHTML5Api7.lazyPreload,
                  );
                })
              : a.$VideoPlayerHTML5Api35.setAttribute(
                  "preload",
                  a.$VideoPlayerHTML5Api7.lazyPreload,
                )),
          (a.$VideoPlayerHTML5Api9 =
            a.$VideoPlayerHTML5Api7.disableNativeControls),
          (a.$VideoPlayerHTML5Api53 = a.$VideoPlayerHTML5Api7.subtitlesActive),
          (a.$VideoPlayerHTML5Api54 = a.$VideoPlayerHTML5Api7.captionSettings),
          a.$VideoPlayerHTML5Api66(),
          (a.preventPauseLoggingInMixin = !1),
          a.$VideoPlayerHTML5Api67(),
          (a.$VideoPlayerHTML5Api16 =
            a.$VideoPlayerHTML5Api7.customLiveManifestUrlParams),
          (a.$VideoPlayerHTML5Api20 = a.$VideoPlayerHTML5Api7.useRateLimited),
          a.$VideoPlayerHTML5Api68(!1));
        var s = r("VideoQualityClasses").indexOf("hd");
        return (
          (a.$VideoPlayerHTML5Api19 =
            a.$VideoPlayerHTML5Api7.minQuality !== null &&
            r("VideoQualityClasses").indexOf(
              a.$VideoPlayerHTML5Api7.minQuality,
            ) >= s),
          (a.$VideoPlayerHTML5Api28 = a.$VideoPlayerHTML5Api7.minQuality),
          (a.$VideoPlayerHTML5Api29 = a.$VideoPlayerHTML5Api7.maxQuality),
          (a.$VideoPlayerHTML5Api2 = a.$VideoPlayerHTML5Api7.accessToken),
          (a.$VideoPlayerHTML5Api38 = a.$VideoPlayerHTML5Api7.startTimestamp),
          (a.$VideoPlayerHTML5Api34 = _),
          (a.$VideoPlayerHTML5Api4 =
            !!a.$VideoPlayerHTML5Api7.autoFullscreenHD),
          (a.$VideoPlayerHTML5Api31 = null),
          (a.$VideoPlayerHTML5Api48 = !1),
          (a.$VideoPlayerHTML5Api49 = !1),
          (a.$VideoPlayerHTML5Api50 =
            !!a.$VideoPlayerHTML5Api7.unloadShouldCancelPendingRequest),
          (a.$VideoPlayerHTML5Api44 = null),
          (a.$VideoPlayerHTML5Api51 = null),
          a
        );
      }
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.setup = function () {
          var e = this,
            t;
          (this.switchVideo(0),
            this.initLogger(
              function (t, n) {
                return e.$VideoPlayerHTML5Api69(t, n);
              },
              this.$VideoPlayerHTML5Api7.useEventTime,
              this.$VideoPlayerHTML5Api61(
                "overwrite_video_current_time_property",
                !1,
              ),
              this.$VideoPlayerHTML5Api61(
                "fix_overwritten_get_video_current_time",
                !1,
              ),
              this.$VideoPlayerHTML5Api61("fire_seek_events", !1),
              this.$VideoPlayerHTML5Api61(
                "fix_pause_current_time_in_mixin",
                !1,
              ),
              (t = o(
                "PlaybackSpeedExperiments",
              ).enablePlaybackSpeedLogging()) != null
                ? t
                : !1,
            ));
        }),
        (i.getAdClientToken = function () {
          this.$VideoPlayerHTML5Api7.ad_client_token;
        }),
        (i.$VideoPlayerHTML5Api65 = function (t, n) {
          if (
            (this.$VideoPlayerHTML5Api69("stale", {
              stale_detect_time_delta: t,
              stale_video_current_time_delta: n,
            }),
            this.$VideoPlayerHTML5Api7.nudgeStaleVideo &&
              typeof this.$VideoPlayerHTML5Api7.staleVideoNudgeAmountMs ==
                "number")
          ) {
            var e = this.getCurrentTimePosition();
            this.seek(
              (e != null ? e : 0) +
                this.$VideoPlayerHTML5Api7.staleVideoNudgeAmountMs / 1e3,
            );
          }
          r("VideoPlayerExperiments").showStaleOverlayOnVideoNodeStaled &&
            this.emit("videoNodeStaled");
        }),
        (i.$VideoPlayerHTML5Api63 = function () {
          (this.emit("buffering"),
            this.$VideoPlayerHTML5Api37.notifyBuffering(),
            this.$VideoPlayerHTML5Api44 &&
              this.$VideoPlayerHTML5Api44.bufferingStart(Date.now()));
        }),
        (i.$VideoPlayerHTML5Api64 = function () {
          (this.emit("buffered"),
            this.$VideoPlayerHTML5Api37.notifyBuffered(),
            this.$VideoPlayerHTML5Api44 &&
              this.$VideoPlayerHTML5Api44.bufferingEnd(Date.now()));
        }),
        (i.$VideoPlayerHTML5Api70 = function (t) {
          this.emit("bufferingProgress", t);
        }),
        (i.$VideoPlayerHTML5Api71 = function (t) {
          this.emit("initialLiveManifestRequestFailure", t);
        }),
        (i.$VideoPlayerHTML5Api72 = function (t) {
          this.emit("replicaSwitch", t);
        }),
        (i.$VideoPlayerHTML5Api73 = function () {
          this.emit("networkInterrupted");
        }),
        (i.$VideoPlayerHTML5Api74 = function () {
          this.emit("networkResumed");
        }),
        (i.$VideoPlayerHTML5Api75 = function () {
          (this.emit("streamInterrupted"),
            (this.$VideoPlayerHTML5Api48 = !0),
            this.$VideoPlayerHTML5Api76());
        }),
        (i.$VideoPlayerHTML5Api77 = function () {
          this.emit("seekRangeChanged");
        }),
        (i.$VideoPlayerHTML5Api78 = function () {
          (this.emit("streamResumed"), (this.$VideoPlayerHTML5Api48 = !1));
        }),
        (i.$VideoPlayerHTML5Api61 = function (t, n) {
          return this.$VideoPlayerHTML5Api41
            ? this.$VideoPlayerHTML5Api41.getBool(t, n)
            : m.getBool(t, n);
        }),
        (i.getVideoPlayerShakaConfig = function () {
          return this.$VideoPlayerHTML5Api41 || m;
        }),
        (i.isStreamInterrupted = function () {
          return this.$VideoPlayerHTML5Api48;
        }),
        (i.getVideoID = function () {
          return this.$VideoPlayerHTML5Api8
            ? this.$VideoPlayerHTML5Api8.getVideoID()
            : this.$VideoPlayerHTML5Api7.video_id;
        }),
        (i.getDroppedFrames = function () {
          return o("VideoPlaybackQuality").getDroppedFrames(
            this.$VideoPlayerHTML5Api35,
          );
        }),
        (i.getTotalFrames = function () {
          return o("VideoPlaybackQuality").getTotalFrames(
            this.$VideoPlayerHTML5Api35,
          );
        }),
        (i.isDrm = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.isDrm()
            : !1;
        }),
        (i.getDebug = function () {
          return { VideoPlayerHTML5DashPlayer: this.$VideoPlayerHTML5Api36 };
        }),
        (i.getDOMElement = function () {
          return this.$VideoPlayerHTML5Api35;
        }),
        (i.getVideoElement = function () {
          return this.$VideoPlayerHTML5Api35;
        }),
        (i.getSubscriptions = function () {
          return this.$VideoPlayerHTML5Api42;
        }),
        (a.onImplementationReady = function (t, n) {
          n();
        }),
        (i.destroy = function (t) {
          var e = this;
          if ((t === void 0 && (t = {}), this.$VideoPlayerHTML5Api11))
            return this.$VideoPlayerHTML5Api12
              ? this.$VideoPlayerHTML5Api12
              : (c || (c = n("Promise"))).resolve();
          (this.$VideoPlayerHTML5Api36 &&
            this.$VideoPlayerHTML5Api36.disableP2PPlayback(),
            (this.$VideoPlayerHTML5Api11 = !0));
          var o = null;
          return (
            t.renderStillFrame === !0
              ? (o = this.abortLoading(t))
              : (r("VideoPlayerHTML5Experiments").destroyWithoutStillFrame
                  ? (o = this.abortLoadingWithoutStillFrame())
                  : (o = this.abortLoading(t)),
                this.$VideoPlayerHTML5Api79(),
                this.$VideoPlayerHTML5Api80 &&
                  r("DOM").remove(this.$VideoPlayerHTML5Api80)),
            (this.$VideoPlayerHTML5Api12 = o.then(
              function () {
                e.$VideoPlayerHTML5Api12 = null;
              },
              function () {
                e.$VideoPlayerHTML5Api12 = null;
              },
            )),
            this.$VideoPlayerHTML5Api12
          );
        }),
        (i.getVideoInfo = function () {
          var e,
            t,
            n = this.$VideoPlayerHTML5Api8;
          if (!n) return null;
          var r = this.$VideoPlayerHTML5Api36,
            a = this.getAvailableVideoQualities();
          return {
            isHD: o("VideoPlayerQualitiesArray").isHDSelectedVideoQuality(
              a,
              this.getSelectedVideoQuality(),
            ),
            streamType: n.getStreamType(),
            hasHD: o("VideoPlayerQualitiesArray").hasHDVideoQuality(a),
            areSubtitlesActive: this.areSubtitlesActive(),
            areSubtitlesAutogenerated: this.areSubtitlesAutogenerated(),
            isMuted: this.isMuted(),
            isPlaying: this.$VideoPlayerHTML5Api18,
            playbackDuration: this.getPlaybackDuration(),
            volume: this.getVolume(),
            resourceUrl: r ? "DASH manifest" : this.$VideoPlayerHTML5Api81(),
            hasSubtitles: this.hasSubtitles(),
            hasUnlimitedSrc: n.hasRateLimit(),
            useUnlimitedSrc: !this.$VideoPlayerHTML5Api20,
            projection: this.getVideoProjection(),
            tagSD: n.getSDTag(),
            tagHD: n.getHDTag(),
            isLiveStream: n.isLiveStream(),
            liveManifestUrl: n.isLiveStream()
              ? r
                ? (e = r.getManifestUrl()) != null
                  ? e
                  : null
                : (t = n.getLiveManifestUrl()) != null
                  ? t
                  : null
              : null,
          };
        }),
        (a.isImplementationUnavailable = function (t) {
          return r("isHTML5VideoImplementationUnavailable")(t);
        }),
        (i.pause = function (t) {
          if (
            ((this.$VideoPlayerHTML5Api23 = t),
            t === "unloaded" && !this.isPaused())
          ) {
            var e =
              this.$VideoPlayerHTML5Api50 ||
              r("VideoPlayerHTML5Experiments").unloadShouldCancelPendingRequest;
            (e && this.$VideoPlayerHTML5Api17
              ? this.$VideoPlayerHTML5Api69(
                  "cancelled_requested_playing",
                  this.addWatchTimeData({ reason: "unloaded" }),
                )
              : this.$VideoPlayerHTML5Api69(
                  "paused",
                  this.addWatchTimeData({ reason: "unloaded" }),
                ),
              (this.$VideoPlayerHTML5Api49 = !0),
              (this.preventPauseLoggingInMixin = !0));
          }
          (this.$VideoPlayerHTML5Api82(),
            this.$VideoPlayerHTML5Api36
              ? this.$VideoPlayerHTML5Api36.pause()
              : this.$VideoPlayerHTML5Api35.pause());
        }),
        (i.$VideoPlayerHTML5Api68 = function (t) {
          this.$VideoPlayerHTML5Api17 = t;
        }),
        (i.preload = function () {
          this.$VideoPlayerHTML5Api32 ||
            (this.$VideoPlayerHTML5Api1 && this.$VideoPlayerHTML5Api83(),
            (this.$VideoPlayerHTML5Api32 = !0),
            this.$VideoPlayerHTML5Api35.setAttribute("preload", "auto"));
        }),
        (i.isPreloading = function () {
          return this.$VideoPlayerHTML5Api32;
        }),
        (i.play = function (t) {
          var e = this;
          if (
            (this.$VideoPlayerHTML5Api43 || (this.$VideoPlayerHTML5Api43 = t),
            (this.$VideoPlayerHTML5Api24 = t),
            !this.isPaused())
          ) {
            r("VideoPlayerHTML5Experiments").shouldDispatchPlayingEvent
              ? (r("dispatchEvent")(this.$VideoPlayerHTML5Api35, "play"),
                r("setTimeout")(function () {
                  return r("dispatchEvent")(
                    e.$VideoPlayerHTML5Api35,
                    "playing",
                  );
                }, 0))
              : this.$VideoPlayerHTML5Api84();
            return;
          }
          if (
            ((this.$VideoPlayerHTML5Api30 = !0),
            this.$VideoPlayerHTML5Api68(!0),
            this.$VideoPlayerHTML5Api1)
          ) {
            (r("dispatchEvent")(this.$VideoPlayerHTML5Api35, "play"),
              this.$VideoPlayerHTML5Api83(),
              (this.$VideoPlayerHTML5Api3 = !0));
            return;
          }
          this.$VideoPlayerHTML5Api85();
        }),
        (i.$VideoPlayerHTML5Api82 = function () {
          (this.$VideoPlayerHTML5Api3 &&
            this.isPaused() &&
            r("dispatchEvent")(this.$VideoPlayerHTML5Api35, "pause"),
            this.$VideoPlayerHTML5Api68(!1),
            this.$VideoPlayerHTML5Api86());
        }),
        (i.$VideoPlayerHTML5Api86 = function () {
          ((this.$VideoPlayerHTML5Api30 = !1),
            (this.$VideoPlayerHTML5Api3 = !1));
        }),
        (i.$VideoPlayerHTML5Api87 = function () {
          (this.$VideoPlayerHTML5Api35.setAttribute("preload", "auto"),
            (this.$VideoPlayerHTML5Api32 = !0),
            this.$VideoPlayerHTML5Api35.load(),
            (this.$VideoPlayerHTML5Api35.muted = this.$VideoPlayerHTML5Api27));
        }),
        (i.seek = function (t) {
          var e = this.$VideoPlayerHTML5Api61("clear_buffer_on_seek_back", !1),
            n =
              this.$VideoPlayerHTML5Api41 &&
              r("ShakaConstants").numbers.clear_buffer_on_seek_back_delta;
          if (
            (this.$VideoPlayerHTML5Api36 &&
              e &&
              typeof n == "number" &&
              this.$VideoPlayerHTML5Api35.currentTime - t >= n &&
              this.$VideoPlayerHTML5Api36.clearBufferAfterSeekingIfLowerQuality(
                t,
              ),
            this.$VideoPlayerHTML5Api44 &&
              this.$VideoPlayerHTML5Api44.seekStart(),
            this.allowNextSeekInMixin(),
            this.$VideoPlayerHTML5Api61(
              "current_time_during_ready_state_zero_throws",
              !1,
            ))
          )
            this.$VideoPlayerHTML5Api35.readyState !== 0 &&
              (this.$VideoPlayerHTML5Api35.currentTime = t);
          else
            try {
              this.$VideoPlayerHTML5Api35.currentTime = t;
            } catch (e) {}
          this.$VideoPlayerHTML5Api44 && this.$VideoPlayerHTML5Api44.seekEnd();
        }),
        (i.removeRotation = function () {
          (o("CSS").removeClass(this.$VideoPlayerHTML5Api35, "_56jr"),
            o("CSS").removeClass(this.$VideoPlayerHTML5Api35, "_56js"),
            o("CSS").removeClass(this.$VideoPlayerHTML5Api35, "_56jt"),
            (this.$VideoPlayerHTML5Api35.style.marginLeft = ""),
            (this.$VideoPlayerHTML5Api35.style.marginTop = ""),
            (this.$VideoPlayerHTML5Api35.style.width = ""),
            (this.$VideoPlayerHTML5Api35.style.height = ""));
        }),
        (i.applyRotation = function (t) {
          if (
            t &&
            (o("CSS").conditionClass(
              this.$VideoPlayerHTML5Api35,
              "_56jr",
              t == 90,
            ),
            o("CSS").conditionClass(
              this.$VideoPlayerHTML5Api35,
              "_56js",
              t == 180,
            ),
            o("CSS").conditionClass(
              this.$VideoPlayerHTML5Api35,
              "_56jt",
              t == 270,
            ),
            t != 180)
          ) {
            var e = this.$VideoPlayerHTML5Api14,
              n = this.$VideoPlayerHTML5Api47,
              r = (e - n) / 2,
              a = (n - e) / 2;
            ((this.$VideoPlayerHTML5Api35.style.marginLeft = a + "px"),
              (this.$VideoPlayerHTML5Api35.style.marginTop = r + "px"),
              (this.$VideoPlayerHTML5Api35.style.height = n + "px"),
              (this.$VideoPlayerHTML5Api35.style.width = e + "px"));
          }
        }),
        (i.$VideoPlayerHTML5Api88 = function (t) {
          (this.$VideoPlayerHTML5Api41 &&
            this.$VideoPlayerHTML5Api41.setContext(
              "content_category",
              t.getContentCategory() || "content_category",
            ),
            this.$VideoPlayerHTML5Api41 &&
              t.isLowLatency() &&
              this.$VideoPlayerHTML5Api41.setContext("latency_level", "low"),
            this.$VideoPlayerHTML5Api41 &&
              t.isServableViaFbms() &&
              this.$VideoPlayerHTML5Api41.setContext(
                "servable_via_fmbs",
                t.isServableViaFbms(),
              ));
        }),
        (i.switchVideo = function (o) {
          var t = this;
          if (
            !(
              !this.$VideoPlayerHTML5Api7.videoData ||
              this.$VideoPlayerHTML5Api7.videoData.length <= o
            )
          ) {
            var a = new (r("VideoData"))(
              this.$VideoPlayerHTML5Api7.videoData[o],
            );
            this.$VideoPlayerHTML5Api8 = a;
            var i = a.getFairplayCert();
            (n("cr:936794") != null &&
              i != null &&
              (this.$VideoPlayerHTML5Api51 = n("cr:936794").newIfSupported(
                i,
                this.getVideoElement(),
                a.getVideoID(),
                this.$VideoPlayerHTML5Api7.videoLicenseUriMap,
              )),
              a.getOverrideConfig() &&
                this.$VideoPlayerHTML5Api41 &&
                this.$VideoPlayerHTML5Api41.setOverrideConfig(
                  a.getOverrideConfig(),
                ),
              this.$VideoPlayerHTML5Api88(a));
            var l = a.isLiveStream() && a.isHls();
            if (
              !l &&
              (a.hasDashManifest() || a.isLiveStream()) &&
              this.$VideoPlayerHTML5Api7.VideoPlayerHTML5Shaka &&
              this.$VideoPlayerHTML5Api7.VideoPlayerHTML5Shaka.isSupported(a) &&
              !this.$VideoPlayerHTML5Api7.fallbackSources
            ) {
              this.$VideoPlayerHTML5Api5.destroy();
              var s = a.getDashManifest(),
                c;
              if (a.isLiveStream()) {
                c = a.getLiveManifestUrl();
                var d = this.$VideoPlayerHTML5Api16;
                if (c != null && d != null) {
                  var m = new (e || (e = r("URI")))(c),
                    p = Object.entries(d);
                  (p.forEach(function (e) {
                    var t = e[0],
                      n = e[1],
                      r = t;
                    if (r === "msx") {
                      var o;
                      r = (o = a.getManifestServiceParam()) != null ? o : r;
                    }
                    m.addQueryData(r, n);
                  }),
                    (c = m.toString()));
                }
              }
              var _ =
                  h(this.$VideoPlayerHTML5Api7.initialRepresentationIds) ||
                  a.getDashPrefetchedRepresentationIDs(),
                f = this.$VideoPlayerHTML5Api7.seekHandler,
                g = f;
              f &&
                (g = function (n) {
                  t.getCurrentTimePosition()
                    ? t.$VideoPlayerHTML5Api17
                      ? t.seek(n)
                      : f(n)
                    : (t.$VideoPlayerHTML5Api35.currentTime = n);
                });
              var y = new this.$VideoPlayerHTML5Api7.VideoPlayerHTML5Shaka(
                this.$VideoPlayerHTML5Api35,
                _,
                {
                  accessToken: this.$VideoPlayerHTML5Api2,
                  config: this.$VideoPlayerHTML5Api7.shakaConfig,
                  minPlayQuality: this.$VideoPlayerHTML5Api28,
                  maxPlayQuality: this.$VideoPlayerHTML5Api29,
                  width: this.$VideoPlayerHTML5Api47,
                  height: this.$VideoPlayerHTML5Api14,
                  manifest: s,
                  manifestUrl: c,
                  isLive: a.isLiveStream(),
                  isServableViaFbms: a.isServableViaFbms(),
                  startTimestamp: this.$VideoPlayerHTML5Api38,
                  videoID: this.getVideoID(),
                  playerInstanceKey:
                    this.$VideoPlayerHTML5Api7.playerInstanceKey,
                  disableStreaming: this.$VideoPlayerHTML5Api7.disableStreaming,
                  playerOrigin: this.$VideoPlayerHTML5Api7.playerOrigin,
                  playerSuborigin: this.$VideoPlayerHTML5Api7.playerSuborigin,
                  resolutionConstraintMaxHeight:
                    this.$VideoPlayerHTML5Api7.resolutionConstraintMaxHeight,
                  resolutionConstraintMaxWidth:
                    this.$VideoPlayerHTML5Api7.resolutionConstraintMaxWidth,
                  isSpherical: this.$VideoPlayerHTML5Api7.isSpherical,
                  getSource: this.$VideoPlayerHTML5Api7.getSource,
                  vpcPlayingStateEmitter:
                    this.$VideoPlayerHTML5Api7.vpcPlayingStateEmitter,
                  seekHandler: g,
                  streamPriorityAdjuster:
                    this.$VideoPlayerHTML5Api7.streamPriorityAdjuster,
                  videoLiveTrace: this.$VideoPlayerHTML5Api7.videoLiveTrace
                    ? this.$VideoPlayerHTML5Api7.videoLiveTrace
                    : null,
                  videoLicenseUriMap: this.$VideoPlayerHTML5Api7
                    .videoLicenseUriMap
                    ? this.$VideoPlayerHTML5Api7.videoLicenseUriMap
                    : {},
                  prefetchCache: a.getPrefetchCache(),
                  graphApiVideoLicenseUri:
                    this.$VideoPlayerHTML5Api7.graphApiVideoLicenseUri,
                  widevineCert: a.getWidevineCert(),
                  OzDrmHelper: this.$VideoPlayerHTML5Api7.OzDrmHelper,
                  videoWatchTimeTracker: this.$VideoPlayerHTML5Api44,
                  desiredLatencyMs: a.getDesiredLatencyMs(),
                  latencyToleranceMs: a.getLatencyToleranceMs(),
                  disableAbr:
                    this.$VideoPlayerHTML5Api7.isSpherical === !0 &&
                    this.$VideoPlayerHTML5Api61("disable_360_abr", !1),
                  p2pModuleLoader: this.$VideoPlayerHTML5Api7.p2pModuleLoader,
                  p2pSettings: a.getP2PSettings(),
                  disableLogging: this.$VideoPlayerHTML5Api7.disableLogging,
                },
              );
              (this.$VideoPlayerHTML5Api42.addSubscriptions(
                y.addListener("seekRangeChanged", function () {
                  return t.$VideoPlayerHTML5Api77();
                }),
                y.addListener("bufferingStart", function () {
                  return t.$VideoPlayerHTML5Api63();
                }),
                y.addListener("bufferingEnd", function () {
                  return t.$VideoPlayerHTML5Api64();
                }),
                y.addListener("bufferingProgress", function (e) {
                  return t.$VideoPlayerHTML5Api70(e);
                }),
                y.addListener("tracksChanged", function () {
                  return t.emit("qualityChange");
                }),
                y.addListener("streamInterrupted", function () {
                  return t.$VideoPlayerHTML5Api75();
                }),
                y.addListener("streamResumed", function () {
                  return t.$VideoPlayerHTML5Api78();
                }),
                y.addListener(
                  "initialLiveManifestRequestFailure",
                  function (e) {
                    return t.$VideoPlayerHTML5Api71(e);
                  },
                ),
                y.addListener("replicaSwitch", function (e) {
                  return t.$VideoPlayerHTML5Api72(e);
                }),
                y.addListener("networkInterrupted", function () {
                  return t.$VideoPlayerHTML5Api73();
                }),
                y.addListener("networkResumed", function () {
                  return t.$VideoPlayerHTML5Api74();
                }),
                y.addListener("adaptation", function (e) {
                  var n = e.reason;
                  (r("VideoPlayerHTML5Experiments").dropQualityChange ||
                    t.$VideoPlayerHTML5Api69("quality_change", { reason: n }),
                    t.emit("qualityChange"));
                }),
                y.addListener("representation_ended", function (e) {
                  t.logRepresentationEnded(e);
                }),
                y.addListener(
                  "blocked_paused_representation_ended",
                  function () {
                    t.onBlockedPausedRepresentationEnded();
                  },
                ),
                y.addListener("debug/dashPlayerEvent", function (e) {
                  return t.emit("debug/dashPlayerEvent", e);
                }),
                y.addListener("error", function (e) {
                  return t.$VideoPlayerHTML5Api89(e);
                }),
                y.addListener("cea608AvailabilityChanged", function () {
                  var e = t.$VideoPlayerHTML5Api36;
                  (e && e.areInbandCaptionsExpected()
                    ? (t.$VideoPlayerHTML5Api53 = !0)
                    : ((t.$VideoPlayerHTML5Api53 = !1),
                      t.$VideoPlayerHTML5Api76()),
                    t.$VideoPlayerHTML5Api90(),
                    t.emit("captionsAvailabilityChanged"));
                }),
                y.addListener("cea608CaptionsBytesReceived", function (e) {
                  var n = e.timescale,
                    r = e.videoBytes;
                  ((n != null && !isNaN(n)) || u(0, 18732),
                    r != null || u(0, 18733));
                  var o = { timescale: n, videoBytes: r },
                    a = t.$VideoPlayerHTML5Api57;
                  (a || (a = t.$VideoPlayerHTML5Api91()), a.enqueueBytes(o));
                }),
                y.addListener("p2pPluginReady", function () {
                  t.p2pPluginReady();
                }),
              ),
                y.setup(),
                (this.$VideoPlayerHTML5Api36 = y));
            } else {
              var C = this.$VideoPlayerHTML5Api81();
              (typeof C == "string" &&
                C !== "" &&
                (this.$VideoPlayerHTML5Api35.src = C),
                this.$VideoPlayerHTML5Api38 != null &&
                  this.$VideoPlayerHTML5Api38 !== 0 &&
                  this.seek(this.$VideoPlayerHTML5Api38));
            }
            (this.$VideoPlayerHTML5Api76(),
              this.hasSubtitles() &&
                a.hasSubtitles() &&
                this.$VideoPlayerHTML5Api92(a.getSubtitlesSrc()),
              this.removeRotation(),
              this.applyRotation(a.getRotation()));
          }
        }),
        (i.switchToStreamType = function (t) {}),
        (i.replaceVideoDataFromURL = function (t) {}),
        (i.getDashAudioConfiguration = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.getDashAudioConfiguration()
            : "none";
        }),
        (i.getAudioStreamInfoIDDebug = function () {
          if (this.$VideoPlayerHTML5Api36) {
            var e = this.$VideoPlayerHTML5Api36.getDebug();
            if (e.VideoSource) {
              var t = e.VideoSource.getAudioTracks();
              for (var n of t) if (n.active) return n.streamInfoID;
            }
          }
          return null;
        }),
        (i.getVideoTracksDebug = function () {
          if (this.$VideoPlayerHTML5Api36) {
            var e = this.$VideoPlayerHTML5Api36.getDebug();
            if (e.VideoSource) return e.VideoSource.getVideoTracks();
          }
          return null;
        }),
        (i.getCurrentlyPlayingVideoStreamInfoID = function () {
          var e = this.getCurrentTimePosition();
          return this.$VideoPlayerHTML5Api36
            ? e != null
              ? this.$VideoPlayerHTML5Api36.getVideoStreamInfoIDForTimePosition(
                  e,
                )
              : null
            : this.$VideoPlayerHTML5Api8
              ? this.$VideoPlayerHTML5Api19
                ? this.$VideoPlayerHTML5Api8.getHDTag()
                : this.$VideoPlayerHTML5Api8.getSDTag()
              : null;
        }),
        (i.getCurrentlyPlayingAudioStreamInfoID = function () {
          var e = this.getCurrentTimePosition();
          return this.$VideoPlayerHTML5Api36 && e != null
            ? this.$VideoPlayerHTML5Api36.getAudioStreamInfoIDForTimePosition(e)
            : null;
        }),
        (i.getLocalEstimator = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.getLocalEstimator()
            : null;
        }),
        (i.unmute = function () {
          if (this.$VideoPlayerHTML5Api1) {
            ((this.$VideoPlayerHTML5Api1.mutedState = !1),
              (this.$VideoPlayerHTML5Api27 = !1),
              this.emit("unmuteVideo"));
            return;
          }
          this.$VideoPlayerHTML5Api35.muted = !1;
        }),
        (i.mute = function () {
          if (this.$VideoPlayerHTML5Api1) {
            ((this.$VideoPlayerHTML5Api1.mutedState = !0),
              (this.$VideoPlayerHTML5Api27 = !0),
              this.emit("muteVideo"));
            return;
          }
          this.$VideoPlayerHTML5Api35.muted = !0;
        }),
        (i.setRotation = function (t) {
          (this.removeRotation(), this.applyRotation(t));
        }),
        (i.setDimensions = function (t, n) {
          var e;
          (this.removeRotation(),
            (this.$VideoPlayerHTML5Api47 = t),
            (this.$VideoPlayerHTML5Api14 = n),
            this.$VideoPlayerHTML5Api8 &&
              this.applyRotation(this.$VideoPlayerHTML5Api8.getRotation()),
            this.$VideoPlayerHTML5Api39 &&
              this.$VideoPlayerHTML5Api39.updateDimensions(t, n),
            this.$VideoPlayerHTML5Api36 &&
              this.$VideoPlayerHTML5Api36.setDimensions(t, n));
          var r =
            (e = this.$VideoPlayerHTML5Api58) != null
              ? e
              : this.$VideoPlayerHTML5Api60;
          if (r) {
            var o = this.$VideoPlayerHTML5Api93();
            r.handleBoundingBoxChanged(o);
          }
          this.emit("dimensionsChange", t, n);
        }),
        (i.setVideoStreamOffset = function (t) {
          this.$VideoPlayerHTML5Api36 &&
            this.$VideoPlayerHTML5Api36.setVideoStreamOffset(t);
        }),
        (i.$VideoPlayerHTML5Api94 = function () {
          this.$VideoPlayerHTML5Api35.controls = !this.$VideoPlayerHTML5Api9;
        }),
        (i.$VideoPlayerHTML5Api66 = function () {
          this.$VideoPlayerHTML5Api35.controls =
            this.$VideoPlayerHTML5Api35.controls && !this.$VideoPlayerHTML5Api9;
        }),
        (i.$VideoPlayerHTML5Api67 = function () {
          var e = this,
            t;
          ((this.$VideoPlayerHTML5Api13 = (t = r("EventListener")).listen(
            this.$VideoPlayerHTML5Api35,
            "error",
            function () {
              return e.$VideoPlayerHTML5Api95();
            },
          )),
            this.$VideoPlayerHTML5Api42.addSubscriptions(
              t.listen(this.$VideoPlayerHTML5Api35, "playing", function () {
                return e.$VideoPlayerHTML5Api96();
              }),
              t.listen(this.$VideoPlayerHTML5Api35, "play", function () {
                return e.$VideoPlayerHTML5Api84();
              }),
              t.listen(this.$VideoPlayerHTML5Api35, "ended", function () {
                return e.$VideoPlayerHTML5Api97();
              }),
              t.listen(this.$VideoPlayerHTML5Api35, "waiting", function () {
                return e.$VideoPlayerHTML5Api98();
              }),
              t.listen(this.$VideoPlayerHTML5Api35, "pause", function (t) {
                return e.$VideoPlayerHTML5Api99(t);
              }),
              t.listen(
                this.$VideoPlayerHTML5Api35,
                "volumechange",
                function () {
                  return e.$VideoPlayerHTML5Api100();
                },
              ),
              t.listen(this.$VideoPlayerHTML5Api35, "mousedown", function (t) {
                return e.$VideoPlayerHTML5Api101(t);
              }),
              t.listen(this.$VideoPlayerHTML5Api35, "mouseup", function (t) {
                return e.$VideoPlayerHTML5Api102(t);
              }),
              t.listen(this.$VideoPlayerHTML5Api35, "timeupdate", function () {
                return e.$VideoPlayerHTML5Api103();
              }),
              t.listen(this.$VideoPlayerHTML5Api35, "click", function (t) {
                return e.$VideoPlayerHTML5Api104(t);
              }),
              t.listen(
                this.$VideoPlayerHTML5Api35,
                "loadedmetadata",
                function () {
                  return e.$VideoPlayerHTML5Api105();
                },
              ),
              t.listen(this.$VideoPlayerHTML5Api35, "progress", function () {
                return e.$VideoPlayerHTML5Api106();
              }),
              t.listen(this.$VideoPlayerHTML5Api35, "seeked", function () {
                return e.$VideoPlayerHTML5Api107();
              }),
              t.capture(
                this.$VideoPlayerHTML5Api35.parentNode,
                "pause",
                function (t) {
                  return e.$VideoPlayerHTML5Api108(t);
                },
              ),
            ));
        }),
        (i.$VideoPlayerHTML5Api109 = function (t) {
          ((this.preventPauseLoggingInMixin = !1),
            t.preventDefault(),
            t.stopPropagation());
        }),
        (i.$VideoPlayerHTML5Api108 = function (t) {
          t.target === this.$VideoPlayerHTML5Api35 &&
            (this.$VideoPlayerHTML5Api35.ended ||
              (this.$VideoPlayerHTML5Api49 && this.$VideoPlayerHTML5Api109(t),
              (t.lastPauseReason = this.$VideoPlayerHTML5Api23)),
            (this.$VideoPlayerHTML5Api49 = !1),
            this.$VideoPlayerHTML5Api44 && this.$VideoPlayerHTML5Api44.pause());
        }),
        (i.$VideoPlayerHTML5Api106 = function () {
          for (
            var e = this.$VideoPlayerHTML5Api35.buffered,
              t = 0,
              n = 0,
              r = e.length;
            r-- > 0;
          ) {
            var o = e.end(r),
              a = e.start(r);
            if (a <= this.$VideoPlayerHTML5Api35.currentTime) {
              ((n = a), (t = o - a));
              break;
            }
          }
          this.$VideoPlayerHTML5Api110("flash/updateBuffer", {
            duration: t,
            offset: n,
          });
        }),
        (i.$VideoPlayerHTML5Api103 = function () {
          var e, t, n, r;
          this.$VideoPlayerHTML5Api1
            ? (r = this.$VideoPlayerHTML5Api1.currentTime)
            : (r = this.$VideoPlayerHTML5Api35.currentTime);
          var o =
            (e =
              (t = this.$VideoPlayerHTML5Api56) == null ? void 0 : t.source) !=
            null
              ? e
              : (n = this.$VideoPlayerHTML5Api57) == null
                ? void 0
                : n.source;
          (o && o.handleTimeUpdate(r),
            this.$VideoPlayerHTML5Api110("flash/updateStatus", {
              position: +r.toFixed(3),
            }));
        }),
        (i.$VideoPlayerHTML5Api104 = function (t) {
          !(t instanceof MouseEvent) ||
            t.button !== 0 ||
            (this.emit("clickVideo"), t.preventDefault());
        }),
        (i.isPaused = function () {
          return r("VideoPlayerHTML5Experiments").fixIE11EndedPausedState
            ? this.$VideoPlayerHTML5Api35.paused ||
                this.$VideoPlayerHTML5Api35.ended
            : this.$VideoPlayerHTML5Api35.paused;
        }),
        (i.$VideoPlayerHTML5Api111 = function () {
          var e = this.$VideoPlayerHTML5Api35.buffered;
          return (
            e.length > 0 &&
            e.start(0) === 0 &&
            e.end(0) === this.$VideoPlayerHTML5Api35.duration
          );
        }),
        (i.$VideoPlayerHTML5Api98 = function () {
          this.$VideoPlayerHTML5Api61(
            "drop_buffering_detection_from_html5_api",
            !1,
          ) ||
            this.$VideoPlayerHTML5Api111() ||
            ((this.$VideoPlayerHTML5Api46 = !0),
            this.$VideoPlayerHTML5Api110("flash/buffering"));
        }),
        (i.setVolume = function (t) {
          this.$VideoPlayerHTML5Api35.volume = t;
        }),
        (i.$VideoPlayerHTML5Api100 = function () {
          (this.$VideoPlayerHTML5Api35.muted !== this.$VideoPlayerHTML5Api27 &&
          this.$VideoPlayerHTML5Api35.volume === this.$VideoPlayerHTML5Api45 &&
          this.$VideoPlayerHTML5Api35.volume > 0
            ? ((this.$VideoPlayerHTML5Api27 =
                this.$VideoPlayerHTML5Api35.muted),
              (this.$VideoPlayerHTML5Api45 =
                this.$VideoPlayerHTML5Api35.volume),
              this.$VideoPlayerHTML5Api35.muted
                ? this.$VideoPlayerHTML5Api110("flash/muteVideo")
                : this.$VideoPlayerHTML5Api110("flash/unmuteVideo"))
            : ((this.$VideoPlayerHTML5Api27 =
                this.$VideoPlayerHTML5Api35.muted),
              (this.$VideoPlayerHTML5Api45 =
                this.$VideoPlayerHTML5Api35.volume),
              this.$VideoPlayerHTML5Api110("flash/changeVolume", {
                volume: this.$VideoPlayerHTML5Api35.volume,
              })),
            this.$VideoPlayerHTML5Api35.muted ||
              this.$VideoPlayerHTML5Api110("flash/turnOffAutoplay", {
                reason: "unmuted",
              }));
        }),
        (i.$VideoPlayerHTML5Api101 = function (t) {
          t instanceof MouseEvent &&
            t.button === 0 &&
            (this.$VideoPlayerHTML5Api26 = !0);
        }),
        (i.$VideoPlayerHTML5Api102 = function (t) {
          t instanceof MouseEvent &&
            t.button === 0 &&
            (this.$VideoPlayerHTML5Api26 = !1);
        }),
        (i.$VideoPlayerHTML5Api96 = function () {
          (this.$VideoPlayerHTML5Api68(!1),
            this.$VideoPlayerHTML5Api46 &&
              ((this.$VideoPlayerHTML5Api46 = !1),
              this.$VideoPlayerHTML5Api110("flash/buffered")),
            this.$VideoPlayerHTML5Api44 &&
              this.$VideoPlayerHTML5Api44.playing());
        }),
        (i.$VideoPlayerHTML5Api84 = function () {
          ((this.$VideoPlayerHTML5Api18 = !0),
            this.$VideoPlayerHTML5Api94(),
            this.$VideoPlayerHTML5Api90(),
            this.$VideoPlayerHTML5Api110("flash/beginPlayback", {
              position: +this.$VideoPlayerHTML5Api35.currentTime.toFixed(2),
              reason: this.$VideoPlayerHTML5Api24,
            }));
        }),
        (i.$VideoPlayerHTML5Api99 = function (t) {
          var e = this.$VideoPlayerHTML5Api61(
            "abort_loading_decisioning_logic",
            !1,
          );
          if (
            this.$VideoPlayerHTML5Api35.ended ||
            (e && r("dangerouslyOverrideMediaElementEndedProperty").isEnded(t))
          ) {
            ((this.$VideoPlayerHTML5Api18 = !1),
              this.$VideoPlayerHTML5Api68(!1));
            return;
          }
          if (
            !(
              this.$VideoPlayerHTML5Api35.seeking &&
              this.$VideoPlayerHTML5Api23 === "seek_initiated"
            ) &&
            !(
              !this.$VideoPlayerHTML5Api61(
                "ignore_left_button_when_pausing",
                !0,
              ) && this.$VideoPlayerHTML5Api26
            )
          ) {
            if (
              this.$VideoPlayerHTML5Api23 === "seek_initiated" ||
              this.$VideoPlayerHTML5Api23 === "hive_reload"
            ) {
              this.$VideoPlayerHTML5Api23 = null;
              return;
            }
            ((this.$VideoPlayerHTML5Api23 === null ||
              this.$VideoPlayerHTML5Api23 === "user_initiated") &&
              this.$VideoPlayerHTML5Api110("flash/turnOffAutoplay", {
                reason: "manually_paused",
              }),
              (this.$VideoPlayerHTML5Api23 = null),
              (this.$VideoPlayerHTML5Api18 = !1),
              this.$VideoPlayerHTML5Api68(!1),
              this.$VideoPlayerHTML5Api66(),
              this.$VideoPlayerHTML5Api110("flash/pausePlayback", {
                position: this.$VideoPlayerHTML5Api35.currentTime.toFixed(2),
              }));
          }
        }),
        (i.$VideoPlayerHTML5Api97 = function () {
          var e;
          if (!this.$VideoPlayerHTML5Api1) {
            (this.$VideoPlayerHTML5Api66(),
              (this.$VideoPlayerHTML5Api18 = !1),
              this.$VideoPlayerHTML5Api68(!1),
              this.$VideoPlayerHTML5Api110("flash/finishPlayback"));
            var t =
              (e = this.$VideoPlayerHTML5Api58) != null
                ? e
                : this.$VideoPlayerHTML5Api60;
            t && t.hideCaptions();
          }
        }),
        (i.$VideoPlayerHTML5Api107 = function () {
          this.emit("seekEnd", {
            position: +this.$VideoPlayerHTML5Api35.currentTime.toFixed(3),
          });
        }),
        (i.getEstimatedBandwidth = function () {
          return this.$VideoPlayerHTML5Api36 &&
            this.$VideoPlayerHTML5Api7.VideoPlayerHTML5Shaka
            ? this.$VideoPlayerHTML5Api7.VideoPlayerHTML5Shaka.getEstimatedBandwidth()
            : null;
        }),
        (i.$VideoPlayerHTML5Api105 = function () {
          this.$VideoPlayerHTML5Api110("flash/updateMetadata");
        }),
        (i.$VideoPlayerHTML5Api89 = function (t) {
          this.emit(
            "error",
            babelHelpers.extends({}, t, {
              isPlayback: this.$VideoPlayerHTML5Api30,
            }),
          );
        }),
        (i.$VideoPlayerHTML5Api95 = function () {
          if (
            !this.$VideoPlayerHTML5Api1 &&
            this.$VideoPlayerHTML5Api35.error
          ) {
            var e = this.$VideoPlayerHTML5Api35.error,
              t = e.message;
            ((t == null || t === "") &&
              (t = r("getErrorMessageFromMediaErrorCode")(e.code)),
              this.emit("error", {
                error: r("getErrorNameFromMediaErrorCode")(e.code),
                isPlayback: this.$VideoPlayerHTML5Api30,
                message: t,
              }));
          }
        }),
        (i.$VideoPlayerHTML5Api69 = function (t, n) {
          var e = babelHelpers.extends({ event: t }, n);
          (t === "started_playing" &&
            this.$VideoPlayerHTML5Api36 &&
            (e.longest_init_response_time =
              this.$VideoPlayerHTML5Api36.getLongestInitResponseTime()),
            (e.projection = this.getVideoProjection()),
            this.$VideoPlayerHTML5Api110("flash/logEvent", { logData: e }));
        }),
        (i.$VideoPlayerHTML5Api110 = function (t, n) {
          (r("Arbiter").inform(
            t,
            babelHelpers.extends({ divID: this.$VideoPlayerHTML5Api15 }, n),
          ),
            this.emit(t.substr(6), n));
        }),
        (i.getLastPlayReason = function () {
          return this.$VideoPlayerHTML5Api24;
        }),
        (i.getVideoPlayReason = function () {
          return this.$VideoPlayerHTML5Api43;
        }),
        (i.isMuted = function () {
          return this.$VideoPlayerHTML5Api27;
        }),
        (i.setPlaybackRate = function (t) {
          this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.setPlaybackRate(t)
            : (this.$VideoPlayerHTML5Api35.playbackRate = t);
        }),
        (i.getPlaybackRate = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.getPlaybackRate()
            : this.$VideoPlayerHTML5Api35.playbackRate;
        }),
        (i.getPlaybackDuration = function () {
          return this.$VideoPlayerHTML5Api1
            ? this.$VideoPlayerHTML5Api1.playbackDuration
            : this.$VideoPlayerHTML5Api35.duration || 0;
        }),
        (i.getVolume = function () {
          return this.$VideoPlayerHTML5Api35.volume;
        }),
        (i.getCurrentTimePosition = function () {
          return this.$VideoPlayerHTML5Api35.currentTime;
        }),
        (i.getBufferEndPosition = function () {
          var e = this.$VideoPlayerHTML5Api35.buffered;
          if (e && e.length > 0) {
            var t = e.length - 1;
            return e.end(t);
          }
          return null;
        }),
        (i.$VideoPlayerHTML5Api81 = function () {
          if (this.$VideoPlayerHTML5Api7.fallbackSources)
            return this.$VideoPlayerHTML5Api19 &&
              this.$VideoPlayerHTML5Api7.fallbackSources.HD
              ? this.$VideoPlayerHTML5Api7.fallbackSources.HD
              : this.$VideoPlayerHTML5Api7.fallbackSources.SD;
          var e = this.$VideoPlayerHTML5Api8;
          return e
            ? this.$VideoPlayerHTML5Api19 && e.hasHD()
              ? this.$VideoPlayerHTML5Api112()
              : this.$VideoPlayerHTML5Api113()
            : null;
        }),
        (i.$VideoPlayerHTML5Api112 = function () {
          var e = this.$VideoPlayerHTML5Api8;
          if (e)
            if (this.$VideoPlayerHTML5Api20) {
              var t;
              return (t = e.getPlayableSrcRateLimitedHD()) != null ? t : null;
            } else {
              var n;
              return (n = e.getPlayableSrcHD()) != null ? n : null;
            }
          return null;
        }),
        (i.$VideoPlayerHTML5Api113 = function () {
          var e = this.$VideoPlayerHTML5Api8;
          if (e)
            if (this.$VideoPlayerHTML5Api20) {
              var t;
              return (t = e.getPlayableSrcRateLimitedSD()) != null ? t : null;
            } else {
              var n;
              return (n = e.getPlayableSrcSD()) != null ? n : null;
            }
          return null;
        }),
        (i.toggleSubtitles = function () {
          ((this.$VideoPlayerHTML5Api53 = !this.$VideoPlayerHTML5Api53),
            this.$VideoPlayerHTML5Api90(),
            this.emit("toggleSubtitles"));
        }),
        (i.$VideoPlayerHTML5Api114 = function () {
          return !1;
        }),
        (i.hasSubtitles = function () {
          var e = this.$VideoPlayerHTML5Api8,
            t = this.$VideoPlayerHTML5Api36;
          if (this.$VideoPlayerHTML5Api114()) return !1;
          var n = e ? e.hasSubtitles() : !1;
          return n || (t ? t.areInbandCaptionsExpected() : !1);
        }),
        (i.areSubtitlesActive = function () {
          return this.$VideoPlayerHTML5Api53;
        }),
        (i.areSubtitlesAutogenerated = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.areInbandCaptionsAutogenerated()
            : !1;
        }),
        (i.areHLSActive = function () {
          return !1;
        }),
        (i.setAutogeneratedCaptionsOptions = function (t) {
          var e;
          this.$VideoPlayerHTML5Api55 = t;
          var n =
            (e = this.$VideoPlayerHTML5Api58) != null
              ? e
              : this.$VideoPlayerHTML5Api60;
          n && n.setAutogeneratedCaptionsOptions(this.$VideoPlayerHTML5Api55);
        }),
        (i.setSubtitlesStyle = function (t) {
          var e;
          this.$VideoPlayerHTML5Api54 = t;
          var n =
            (e = this.$VideoPlayerHTML5Api58) != null
              ? e
              : this.$VideoPlayerHTML5Api60;
          n && n.setCaptionsStyle(this.$VideoPlayerHTML5Api54);
        }),
        (i.$VideoPlayerHTML5Api90 = function () {
          var e,
            t = this.$VideoPlayerHTML5Api36;
          t &&
            t.areInbandCaptionsExpected() &&
            (this.$VideoPlayerHTML5Api114()
              ? t.setEnableInbandCaptionsParsing(!1)
              : t.setEnableInbandCaptionsParsing(
                  this.$VideoPlayerHTML5Api54.enabled,
                ));
          var n =
            (e = this.$VideoPlayerHTML5Api58) != null
              ? e
              : this.$VideoPlayerHTML5Api60;
          n &&
            (this.$VideoPlayerHTML5Api53 ? n.showCaptions() : n.hideCaptions());
        }),
        (i.$VideoPlayerHTML5Api115 = function () {
          var e,
            t,
            n,
            r =
              (e =
                (t = this.$VideoPlayerHTML5Api56) == null
                  ? void 0
                  : t.source) != null
                ? e
                : (n = this.$VideoPlayerHTML5Api57) == null
                  ? void 0
                  : n.source;
          (r && r.handleTimeUpdate(this.$VideoPlayerHTML5Api35.currentTime),
            this.$VideoPlayerHTML5Api18 && this.$VideoPlayerHTML5Api90(),
            this.emit("loadedSubtitles"));
        }),
        (i.$VideoPlayerHTML5Api116 = function () {
          var e = this,
            t = this.$VideoPlayerHTML5Api7.subtitleDrawer;
          if (!t || !(t instanceof r("VideoPlayerUIComponentDrawer")))
            return null;
          var n = new (r("VideoPlayerHTML5CaptionsDisplay"))({
            append: function (n) {
              return e.$VideoPlayerHTML5Api35.parentNode
                ? (r("DOM").insertAfter(e.$VideoPlayerHTML5Api35, n),
                  function () {
                    r("DOM").remove(n);
                  })
                : (r("FBLogger")("video").info(
                    "Missing video player parent element to append the captions display",
                  ),
                  function () {});
            },
            areCaptionsAutogenerated: this.areSubtitlesAutogenerated(),
            drawer: t,
            existingNodesContainer: this.$VideoPlayerHTML5Api35.parentNode,
            boundingBox: this.$VideoPlayerHTML5Api93(),
          });
          return (
            n.setCaptionsStyle(this.$VideoPlayerHTML5Api54),
            n.setAutogeneratedCaptionsOptions(this.$VideoPlayerHTML5Api55),
            n
          );
        }),
        (i.$VideoPlayerHTML5Api93 = function () {
          var e = this.$VideoPlayerHTML5Api35.getBoundingClientRect();
          return { width: e.width, height: e.height };
        }),
        (i.$VideoPlayerHTML5Api92 = function (t) {
          var e = this;
          return (
            this.$VideoPlayerHTML5Api76(),
            (this.$VideoPlayerHTML5Api58 = this.$VideoPlayerHTML5Api116()),
            (this.$VideoPlayerHTML5Api56 = new (r(
              "VideoPlayerHTML5ApiWebVttState",
            ))({
              onReady: function (r) {
                (e.$VideoPlayerHTML5Api59 &&
                  (e.$VideoPlayerHTML5Api59.destroy(),
                  (e.$VideoPlayerHTML5Api59 = null)),
                  r.loadFromUrl(t));
              },
              onCaptionsLoaded: function (n) {
                (e.$VideoPlayerHTML5Api115(),
                  (e.$VideoPlayerHTML5Api59 = new (r(
                    "VideoPlayerHTML5TrackNodeManager",
                  ))({
                    videoEl: e.$VideoPlayerHTML5Api35,
                    parsedSubRipText: n,
                  })));
              },
              captionsDisplay: this.$VideoPlayerHTML5Api58,
            })),
            this.$VideoPlayerHTML5Api56
          );
        }),
        (i.$VideoPlayerHTML5Api91 = function () {
          var e = this;
          return (
            this.$VideoPlayerHTML5Api76(),
            (this.$VideoPlayerHTML5Api60 = this.$VideoPlayerHTML5Api116()),
            (this.$VideoPlayerHTML5Api57 = new (r(
              "VideoPlayerHTML5ApiCea608State",
            ))({
              onReady: function (t) {
                t.processQueue();
              },
              onCaptionsLoaded: function () {
                e.$VideoPlayerHTML5Api115();
              },
              captionsDisplay: this.$VideoPlayerHTML5Api60,
            })),
            this.$VideoPlayerHTML5Api57
          );
        }),
        (i.$VideoPlayerHTML5Api76 = function () {
          (this.$VideoPlayerHTML5Api57 &&
            (this.$VideoPlayerHTML5Api57.destroy(),
            (this.$VideoPlayerHTML5Api57 = null)),
            this.$VideoPlayerHTML5Api56 &&
              (this.$VideoPlayerHTML5Api56.destroy(),
              (this.$VideoPlayerHTML5Api56 = null)),
            this.$VideoPlayerHTML5Api59 &&
              (this.$VideoPlayerHTML5Api59.destroy(),
              (this.$VideoPlayerHTML5Api59 = null)));
        }),
        (i.setStillFrameEnabled = function (t) {
          this.$VideoPlayerHTML5Api40 = !t;
        }),
        (i.$VideoPlayerHTML5Api62 = function () {
          if (this.$VideoPlayerHTML5Api61("use_dimensions_fallbacks", !0)) {
            var e = o("DOMDimensions").getElementDimensions(
              this.$VideoPlayerHTML5Api35,
            );
            if (e.width !== 0 && e.height !== 0) return e;
            var t =
                this.$VideoPlayerHTML5Api35.getAttribute("data-video-width"),
              n = this.$VideoPlayerHTML5Api35.getAttribute("data-video-height");
            return {
              width: Number(t) || this.$VideoPlayerHTML5Api35.width || f,
              height: Number(n) || this.$VideoPlayerHTML5Api35.height || g,
            };
          } else
            return o("DOMDimensions").getElementDimensions(
              this.$VideoPlayerHTML5Api35,
            );
        }),
        (i.getDimensionsForDevice = function () {
          var e = window.devicePixelRatio || 1,
            t = this.$VideoPlayerHTML5Api62();
          return { width: t.width * e, height: t.height * e };
        }),
        (i.$VideoPlayerHTML5Api117 = function () {
          if (!this.$VideoPlayerHTML5Api40) {
            var e;
            if (this.$VideoPlayerHTML5Api39) e = this.$VideoPlayerHTML5Api39;
            else {
              var t = this.$VideoPlayerHTML5Api62(),
                n = r("DOM").create("canvas", {
                  width: t.width,
                  height: t.height,
                  className: "_3t5i",
                });
              (r("DOM").insertAfter(this.$VideoPlayerHTML5Api35, n),
                (this.$VideoPlayerHTML5Api39 = e =
                  new (r("VideoFrameBuffer"))(n, this.$VideoPlayerHTML5Api35)));
            }
            (o("CSS").show(e.getDOMNode()),
              e.updateFrameBuffer(),
              o("CSS").hide(this.$VideoPlayerHTML5Api35));
          }
        }),
        (i.$VideoPlayerHTML5Api79 = function () {
          this.$VideoPlayerHTML5Api39 &&
            (o("CSS").hide(this.$VideoPlayerHTML5Api39.getDOMNode()),
            o("CSS").show(this.$VideoPlayerHTML5Api35));
        }),
        (i.$VideoPlayerHTML5Api83 = function (t) {
          var e = this;
          t === void 0 && (t = null);
          var o = this.$VideoPlayerHTML5Api1;
          if (!o) return (c || (c = n("Promise"))).resolve();
          if (this.$VideoPlayerHTML5Api21)
            return (
              this.$VideoPlayerHTML5Api22 || (c || (c = n("Promise"))).resolve()
            );
          var a = [];
          ((this.$VideoPlayerHTML5Api21 = !0),
            this.emit("restoringAfterAbort"),
            this.allowNextSeekInMixin());
          var i = t == null ? o.currentTime : t;
          if (this.$VideoPlayerHTML5Api36) {
            var l = function () {
                return (
                  (e.$VideoPlayerHTML5Api36 &&
                    e.$VideoPlayerHTML5Api36.reload(i)) ||
                  (c || (c = n("Promise"))).resolve()
                );
              },
              s = this.$VideoPlayerHTML5Api10
                ? this.$VideoPlayerHTML5Api10.then(l)
                : l();
            a.push(s);
          } else {
            var u,
              d = (u = this.$VideoPlayerHTML5Api81()) != null ? u : "";
            (d !== "" && (this.$VideoPlayerHTML5Api35.src = d),
              (this.$VideoPlayerHTML5Api35.preload = o.preload));
          }
          var m = new (r("Deferred"))();
          a.push(m.getPromise());
          var p = function () {
            var t = e.$VideoPlayerHTML5Api85();
            e.$VideoPlayerHTML5Api61("create_restore_abort_loading_promise", !1)
              ? m.resolve(t)
              : m.resolve();
          };
          return (
            r("seekHTMLMediaElementTo")(
              this.$VideoPlayerHTML5Api35,
              i,
              function () {
                (e.$VideoPlayerHTML5Api79(),
                  e.$VideoPlayerHTML5Api1 &&
                    ((e.$VideoPlayerHTML5Api35.muted =
                      e.$VideoPlayerHTML5Api1.mutedState),
                    (e.$VideoPlayerHTML5Api1 = null),
                    e.emit("restoredAfterAbort")),
                  (e.$VideoPlayerHTML5Api21 = !1),
                  (e.$VideoPlayerHTML5Api22 = null),
                  r("onCanPlayHTMLMediaElement").once(
                    e.$VideoPlayerHTML5Api35,
                    p,
                  ));
              },
            ),
            (this.$VideoPlayerHTML5Api22 = (c || (c = n("Promise")))
              .all(a)
              .then(function () {})),
            this.$VideoPlayerHTML5Api22
          );
        }),
        (i.abortLoadingWithoutStillFrame = function () {
          var e = this;
          if (this.$VideoPlayerHTML5Api1)
            return this.$VideoPlayerHTML5Api10
              ? this.$VideoPlayerHTML5Api10
              : (c || (c = n("Promise"))).resolve();
          var t = this.$VideoPlayerHTML5Api35.currentTime,
            o = this.isMuted(),
            a = this.$VideoPlayerHTML5Api35.duration,
            i = this.isPaused(),
            l = this.$VideoPlayerHTML5Api35.preload;
          return (
            (this.$VideoPlayerHTML5Api32 = !1),
            (this.$VideoPlayerHTML5Api1 = {
              mutedState: o,
              currentTime: t,
              playbackDuration: a,
              preload: l,
            }),
            i &&
              this.$VideoPlayerHTML5Api18 &&
              r("dispatchEvent")(this.$VideoPlayerHTML5Api35, "pause"),
            this.emit("abortedLoading"),
            this.$VideoPlayerHTML5Api76(),
            this.$VideoPlayerHTML5Api36
              ? ((this.$VideoPlayerHTML5Api10 = this.$VideoPlayerHTML5Api36
                  .unload()
                  .then(function () {
                    e.$VideoPlayerHTML5Api10 = null;
                  })
                  .catch(function () {
                    e.$VideoPlayerHTML5Api10 = null;
                  })),
                this.$VideoPlayerHTML5Api10)
              : ((this.$VideoPlayerHTML5Api35.preload = "none"),
                this.$VideoPlayerHTML5Api35.removeAttribute("src"),
                this.$VideoPlayerHTML5Api35.load(),
                (c || (c = n("Promise"))).resolve())
          );
        }),
        (i.abortLoading = function (t) {
          return (
            t === void 0 && (t = {}),
            this.$VideoPlayerHTML5Api1
              ? this.$VideoPlayerHTML5Api10
                ? this.$VideoPlayerHTML5Api10
                : (c || (c = n("Promise"))).resolve()
              : (t.disableStillFrame !== !0 && this.$VideoPlayerHTML5Api117(),
                this.abortLoadingWithoutStillFrame())
          );
        }),
        (i.setPreferredVideoQuality = function (t) {
          var e,
            n = this;
          if (
            ((this.$VideoPlayerHTML5Api31 = t), !!this.$VideoPlayerHTML5Api8)
          ) {
            if (this.$VideoPlayerHTML5Api36) {
              this.$VideoPlayerHTML5Api36.setPreferredVideoQuality(t);
              return;
            }
            (r("VideoPlayerHTML5Experiments").newStateChangeCalculation ||
              (this.$VideoPlayerHTML5Api69(
                "paused",
                this.addWatchTimeData({ reason: "toggle_hd" }),
              ),
              this.$VideoPlayerHTML5Api69("requested_playing", {
                reason: "user_initiated",
              })),
              (this.$VideoPlayerHTML5Api19 = !this.$VideoPlayerHTML5Api19));
            var o = this.$VideoPlayerHTML5Api35.currentTime,
              a = this.$VideoPlayerHTML5Api35.muted,
              i = this.$VideoPlayerHTML5Api35.volume,
              l = (e = this.$VideoPlayerHTML5Api81()) != null ? e : "";
            (l !== "" && (this.$VideoPlayerHTML5Api35.src = l),
              r("onCanPlayHTMLMediaElement").once(
                this.$VideoPlayerHTML5Api35,
                function () {
                  ((n.$VideoPlayerHTML5Api35.currentTime = o),
                    (n.$VideoPlayerHTML5Api35.muted = a),
                    (n.$VideoPlayerHTML5Api35.volume = i),
                    n.$VideoPlayerHTML5Api85(),
                    n.emit("qualityChange"));
                },
              ),
              (this.$VideoPlayerHTML5Api30 = !0),
              this.$VideoPlayerHTML5Api68(!0),
              this.$VideoPlayerHTML5Api87());
          }
        }),
        (i.unsetPreferredVideoQuality = function () {
          ((this.$VideoPlayerHTML5Api31 = null),
            this.$VideoPlayerHTML5Api36 &&
              this.$VideoPlayerHTML5Api36.unsetPreferredVideoQuality());
        }),
        (i.getPreferredVideoQuality = function () {
          return this.$VideoPlayerHTML5Api31;
        }),
        (i.getSelectedVideoQuality = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.getSelectedVideoQuality()
            : this.$VideoPlayerHTML5Api19
              ? "HD"
              : "SD";
        }),
        (i.getAvailableVideoQualities = function () {
          return this.$VideoPlayerHTML5Api7.fallbackSources
            ? o("VideoPlayerQualitiesArray").ensureVideoPlayerQualitiesArray(
                this.$VideoPlayerHTML5Api7.fallbackSources.HD
                  ? ["SD", "HD"]
                  : ["SD"],
              )
            : this.$VideoPlayerHTML5Api8
              ? this.$VideoPlayerHTML5Api36
                ? this.$VideoPlayerHTML5Api36.getAvailableVideoQualities()
                : o(
                    "VideoPlayerQualitiesArray",
                  ).ensureVideoPlayerQualitiesArray(
                    this.$VideoPlayerHTML5Api8.hasHD() ? ["SD", "HD"] : ["SD"],
                  )
              : o("VideoPlayerQualitiesArray").ensureVideoPlayerQualitiesArray(
                  [],
                );
        }),
        (i.getIsAbrEnabled = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.getIsAbrEnabled()
            : !1;
        }),
        (i.canAutoSelectVideoQuality = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.canAutoSelectVideoQuality()
            : !1;
        }),
        (i.setPreloadDisabled = function (t) {
          this.$VideoPlayerHTML5Api36 &&
            this.$VideoPlayerHTML5Api36.setPreloadDisabled(t);
        }),
        (i.restoreStreamBufferSize = function () {
          this.$VideoPlayerHTML5Api36 &&
            this.$VideoPlayerHTML5Api36.restoreStreamBufferSize();
        }),
        (a.getPlayerVersion = function () {
          return "pleasantville";
        }),
        (i.getUpdatedPlayerVersion = function () {
          return (
            (this.$VideoPlayerHTML5Api36 &&
              this.$VideoPlayerHTML5Api36.getPlayerVersion()) ||
            a.getPlayerVersion()
          );
        }),
        (i.getVideoNodeSource = function () {
          return this.$VideoPlayerHTML5Api35.src || "";
        }),
        (i.getVideoProjection = function () {
          if (this.$VideoPlayerHTML5Api33) return this.$VideoPlayerHTML5Api33;
          var e = this.$VideoPlayerHTML5Api36;
          if (e) {
            var t;
            if (
              ((this.$VideoPlayerHTML5Api33 =
                (t = e.getVideoProjection()) != null ? t : null),
              this.$VideoPlayerHTML5Api33)
            )
              return this.$VideoPlayerHTML5Api33;
          }
          var n = this.$VideoPlayerHTML5Api8;
          if (n) {
            var r;
            this.$VideoPlayerHTML5Api33 =
              (r = n.getProjection()) != null ? r : null;
          }
          return this.$VideoPlayerHTML5Api33;
        }),
        (i.$VideoPlayerHTML5Api118 = function () {
          var e = this.getCurrentTimePosition();
          e != null && (this.$VideoPlayerHTML5Api6 = e);
        }),
        (i.$VideoPlayerHTML5Api119 = function () {
          this.$VideoPlayerHTML5Api6 != null && this.$VideoPlayerHTML5Api6 !== 0
            ? ((this.$VideoPlayerHTML5Api34 = this.$VideoPlayerHTML5Api6),
              (this.$VideoPlayerHTML5Api6 = null))
            : (this.$VideoPlayerHTML5Api34 = _);
        }),
        (i.reloadDashManifest = function () {
          var e = this.$VideoPlayerHTML5Api36;
          return e
            ? (this.$VideoPlayerHTML5Api118(),
              this.abortLoading(),
              this.$VideoPlayerHTML5Api120(function () {
                return e.refreshDashManifest();
              }, this.$VideoPlayerHTML5Api34))
            : (c || (c = n("Promise"))).reject();
        }),
        (i.$VideoPlayerHTML5Api120 = function (t, n) {
          var e = this;
          return t().then(function () {
            (e.$VideoPlayerHTML5Api83(n), e.$VideoPlayerHTML5Api119());
          });
        }),
        (i.switchReplicaSet = function (t, n) {
          var e = this,
            r = this.$VideoPlayerHTML5Api36,
            o = {
              failover_response_code: n.status,
              original_url: "",
              replica: t,
            },
            a = "";
          if (r) {
            ((a = r.getManifestUrl() || a),
              (o.original_url = a),
              this.$VideoPlayerHTML5Api69("replica_switch", {
                error_code: n.status,
                error_user_info: {
                  failover_response_code: n.status,
                  url: n.url || "",
                  replica: t,
                },
              }));
            try {
              (this.abortLoading(), r.switchReplicaSet(t));
            } catch (e) {
              this.$VideoPlayerHTML5Api69("replica_switch_failed", {
                reason: e.toString(),
                error_user_info: o,
              });
              return;
            }
            this.$VideoPlayerHTML5Api83()
              .then(function () {
                e.$VideoPlayerHTML5Api69("replica_switch_success", {
                  error_code: n.status,
                  error_user_info: o,
                });
              })
              .catch(function (t) {
                e.$VideoPlayerHTML5Api69("replica_switch_failed", {
                  reason: t.toString(),
                  error_user_info: o,
                });
              });
          }
        }),
        (i.p2pPluginReady = function () {
          var e = this;
          this.$VideoPlayerHTML5Api69("live_p2p_playback_reloading", {});
          var t = function (n) {
            ((e.$VideoPlayerHTML5Api21 = !1),
              (e.$VideoPlayerHTML5Api1 = null),
              e.$VideoPlayerHTML5Api69("live_p2p_playback_plugin_failed", {
                reason: n.toString(),
              }),
              e.$VideoPlayerHTML5Api36 &&
                e.$VideoPlayerHTML5Api36.disableP2PPlayback(),
              e.abortLoading(),
              e
                .$VideoPlayerHTML5Api83()
                .then(function () {
                  e.$VideoPlayerHTML5Api36 &&
                    (e.$VideoPlayerHTML5Api30 || e.$VideoPlayerHTML5Api18) &&
                    e.$VideoPlayerHTML5Api36.play();
                })
                .catch(function () {
                  return e.$VideoPlayerHTML5Api95();
                }));
          };
          try {
            ((this.$VideoPlayerHTML5Api23 = "hive_reload"),
              this.abortLoading());
            var n = function () {
              (e.$VideoPlayerHTML5Api36 &&
                (e.$VideoPlayerHTML5Api30 || e.$VideoPlayerHTML5Api18) &&
                e.$VideoPlayerHTML5Api36.play(),
                e.$VideoPlayerHTML5Api69(
                  "live_p2p_playback_plugin_loaded",
                  {},
                ));
            };
            this.$VideoPlayerHTML5Api83().then(n).catch(t);
          } catch (e) {
            t(e);
          }
        }),
        (i.$VideoPlayerHTML5Api85 = function () {
          var e = this,
            t = (c || (c = n("Promise"))).resolve();
          if (this.$VideoPlayerHTML5Api30) {
            if (this.$VideoPlayerHTML5Api3)
              var o = r("EventListener").capture(
                this.$VideoPlayerHTML5Api35.parentNode,
                "play",
                function (e) {
                  (r("Event").kill(e), o.remove());
                },
              );
            if (
              (this.$VideoPlayerHTML5Api35.ended &&
                !this.$VideoPlayerHTML5Api35.paused &&
                r("dispatchEvent")(this.$VideoPlayerHTML5Api35, "play"),
              this.$VideoPlayerHTML5Api36)
            ) {
              var a = this.$VideoPlayerHTML5Api36;
              t = a.play();
            } else
              (r("VideoPlayerHTML5Experiments").preloadOnPlay &&
                (this.$VideoPlayerHTML5Api35.preload = "auto"),
                (t = this.$VideoPlayerHTML5Api35.play()));
            t.catch(function (t) {
              if (t != null && t.name === "NotAllowedError")
                (e.$VideoPlayerHTML5Api69("cancelled_requested_playing", {
                  reason: "not_allowed",
                }),
                  e.$VideoPlayerHTML5Api110("flash/playbackNotAllowed"));
              else if (!(t != null && t.name === "AbortError")) {
                var n,
                  o,
                  a = r("err")(
                    "Unexpected .play() promise rejection: " +
                      (t != null
                        ? ((n = t.name) != null ? n : "(no name)") +
                          ": " +
                          ((o = t.message) != null ? o : "(no message)")
                        : "(unknown)"),
                  );
                (a.stack, r("FBLogger")("video").catching(a).info(a.message));
              }
              e.$VideoPlayerHTML5Api68(!1);
            });
          }
          return (this.$VideoPlayerHTML5Api86(), t);
        }),
        (i.setEnableLiveheadCatchup = function (t) {
          this.$VideoPlayerHTML5Api36 &&
            this.$VideoPlayerHTML5Api36.setEnableLiveheadCatchup(t);
        }),
        (i.setIsLiveRewindActive = function (t) {
          ((this.$VideoPlayerHTML5Api52 = t),
            o("PlaybackSpeedExperiments").enableWwwPlaybackSpeedControl() &&
              !t &&
              this.setPlaybackRate(1),
            this.setEnableLiveheadCatchup(!t));
        }),
        (i.isFBWasLive = function () {
          return !!(
            this.$VideoPlayerHTML5Api36 &&
            this.$VideoPlayerHTML5Api36.isFBWasLive()
          );
        }),
        (i.isFBIsLiveTemplated = function () {
          return !!(
            this.$VideoPlayerHTML5Api36 &&
            this.$VideoPlayerHTML5Api36.isFBIsLiveTemplated()
          );
        }),
        (i.getFbManifestIdentifier = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.getFbManifestIdentifier()
            : "";
        }),
        (i.isFBMS = function () {
          return !!(
            this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.isFBMS()
          );
        }),
        (i.ispDASH = function () {
          return !!(
            this.$VideoPlayerHTML5Api36 && this.$VideoPlayerHTML5Api36.ispDASH()
          );
        }),
        (i.isLiveheadCatchupEnabled = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.isLiveheadCatchupEnabled()
            : !1;
        }),
        (i.getBandwidthEstimate = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.getBandwidthEstimate()
            : null;
        }),
        (i.getSeekableRanges = function () {
          if (this.$VideoPlayerHTML5Api36)
            return this.$VideoPlayerHTML5Api36.getSeekableRanges();
          var e = [];
          if (this.$VideoPlayerHTML5Api35)
            for (
              var t = this.$VideoPlayerHTML5Api35.seekable, n = 0;
              n < t.length;
              ++n
            )
              e.push({ startTime: t.start(n), endTime: t.end(n) });
          return (
            e.length === 0 && e.push({ startTime: 0, endTime: 0 }),
            new (r("TimeRanges"))(e)
          );
        }),
        (i.isDashPerfLoggingEnabled = function () {
          return this.$VideoPlayerHTML5Api36
            ? this.$VideoPlayerHTML5Api36.isDashPerfLoggingEnabled()
            : null;
        }),
        (a.getStartMutedFromConfig = function (t) {
          return t.muted;
        }),
        (a.getStreamTypeFromConfig = function (t) {
          var e = new (r("VideoData"))(t.videoData[0]);
          return e.getStreamType();
        }),
        (a.getIsServableViaFbmsFromConfig = function (t) {
          var e = new (r("VideoData"))(t.videoData[0]);
          return e.isServableViaFbms();
        }),
        (a.getIsPlayingLiveFromConfig = function (t) {
          var e = new (r("VideoData"))(t.videoData[0]);
          return e.isLiveStream();
        }),
        (a.getIsGamingFromConfig = function (t) {
          var e = new (r("VideoData"))(t.videoData[0]);
          return e.isGaming();
        }),
        (a.getIsFacecastAudioFromConfig = function (t) {
          var e = new (r("VideoData"))(t.videoData[0]);
          return e.isFacecastAudio();
        }),
        (a.getIsSpherical = function (t) {
          var e = new (r("VideoData"))(t.videoData[0]);
          return e.isSpherical();
        }),
        (a.getIsLiveTraceEnabledOnPlayer = function (t) {
          var e = new (r("VideoData"))(t.videoData[0]);
          return e.isLiveTraceEnabledOnPlayer();
        }),
        a
      );
    })(
      r("classWithMixins")(
        r("AbstractVideoPlayerApi"),
        r("mixin")(r("HVideoPlayerMixin")),
      ),
    );
    ((y.networkTimeout = 5e3), (l.default = y));
  },
  98,
);
