__d(
  "VideoControls",
  [
    "csx",
    "cx",
    "Arbiter",
    "AsyncRequest",
    "Bootloader",
    "CSS",
    "DeferredComponent.react",
    "EventListener",
    "FullScreen",
    "LiveRewindUtils",
    "LiveVideoPlayerActions",
    "Parent",
    "PlaybackSpeedExperiments",
    "ReactDOM",
    "SubscriptionsHandler",
    "VideoPlayerExperiments",
    "VideoPlayerUIComponentDrawer",
    "VideoWatchAndScrollController",
    "XBasicFBNuxGenShouldShowControllerRouteBuilder",
    "cancelAnimationFrame",
    "containsNode",
    "destroyOnUnload",
    "getActiveElement",
    "logVideosClickTracking",
    "react",
    "requestAnimationFrame",
    "shouldWNSRenderToRHC",
    "throttle",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = new Set([
        "embedded",
        "embedded_video",
        "embedded_video_preview",
        "embedded_page_plugin",
        "embedded_video_from_ufi",
      ]),
      m = 200,
      p = 4936,
      _ = 36,
      f = 5e3,
      g = (function () {
        function e(e, t, n) {
          var a = this,
            i,
            l;
          ((this.$16 = { current: null }),
            (this.$133 = function () {
              ((a.$11 = !1), a.scheduleRenderReactComponent());
            }),
            (this.$15 = e),
            (this.$16.current = this.$15),
            (this.$91 = t),
            (this.$124 = o("ReactDOM").createRoot(t)),
            (this.$10 = 0),
            (this.$84 = 0),
            (this.$83 = 0),
            (this.$29 = 0),
            (this.$123 = !1),
            (this.$92 = !1),
            (this.$50 = n.hideOnEvents.autoplay),
            (this.$51 = n.hideOnEvents.finish),
            (this.$43 = n.hideOnEvents.pause),
            (this.$105 = n.unhideOnHover),
            (this.$44 = n.hidePlaybackControl),
            (this.$45 = n.isWatchIconEligible),
            (this.$46 = n.hidePlaybackScrubber),
            (this.$106 = n.showPlaybackRateControl),
            (this.$109 = n.showVideoSliderWarningTooltip),
            (this.$47 = n.hideRemainingTime),
            (this.$48 = n.hideSettings),
            (this.$49 = n.hideMoreSettingsLink),
            (this.$120 = n.useTwoRows),
            (this.$57 = n.isCommentAttachment),
            (this.$85 = n.pointsOfInterestConfig || {}),
            (this.$18 = n.displayElapsedTime || !1),
            (this.$19 = n.showControlsOnFullScreenOnly || !1),
            (this.$20 = n.displayMilliseconds || !1),
            (this.$21 = n.displayDurationLimit),
            (this.$22 = n.displayTimeOffset),
            (this.$1 = n.adBreaks),
            (this.$2 = n.adBreaksDisableReasons),
            (this.$87 = (i = n.pollTimestamps) != null ? i : []),
            (this.$70 = !1),
            (this.$102 = n.shouldShowWNSNUX),
            (this.$11 = !1),
            (this.$38 = !1),
            (this.$52 = n.insertedAdBreaks),
            (this.$53 = n.isAdBreakDisabled),
            (this.$54 = n.isAdBreakInsertionWithoutGapRule),
            (this.$103 =
              (l = n.showEligibleStarsCueTimeSegments) != null ? l : !1),
            (this.$104 = n.selectedStarsCueTimestamp),
            (this.$64 = n.isLiveRewindEnabled || this.$15.isFBWasLive()),
            (this.$65 = this.$15.isFBWasLive()),
            (this.$77 = null),
            (this.$107 = n.showPlayButtonForLive),
            (this.$121 = n.videoClipInfo),
            (this.$98 = !!n.videoClipInfo),
            (this.$13 = null));
          var s = e.isHtml5Player(),
            u = e.getPlayerSuborigin();
          ((this.$40 = n.showButtons.watchandscroll && s && u !== "topic_live"),
            (this.$3 = n.showButtons.casting),
            (this.$4 =
              n.showButtons.fullscreen && !!r("FullScreen").isSupported()),
            (this.$5 = n.showButtons.audioButton),
            (this.$81 = n.permalinkURL),
            (this.$99 = n.shouldShowInlineCopyLinkOption),
            (this.$100 = n.shouldShowInlineVideoReportOption),
            (this.$101 = n.shouldShowPermalinkButton),
            (this.$62 = n.isLive),
            (this.$63 = n.isGamingVideo),
            (this.$71 = n.isSphericalVideo),
            (this.$30 = n.forceVisible || !1),
            (this.$31 = n.forceVisibleOnMount || !1),
            (this.$42 = n.hideGradient || !1),
            (this.$118 = n.useDarkTheme || !1),
            (this.$55 = !1),
            (this.$41 = !1),
            (this.$68 = !1),
            (this.$69 = !1),
            (this.$108 = n.showQualitySelector),
            (this.$88 = n.qualitySelectorMinStreams),
            (this.$75 = function () {
              return a.liveRewindToBeginning();
            }),
            (this.$73 = function () {
              return a.liveRewindSeekBack();
            }),
            (this.$74 = function () {
              return a.liveRewindSeekForward();
            }),
            (this.$76 = function () {
              return a.liveRewindToLive();
            }),
            (this.$26 = function () {
              return a.enterWatchAndScroll();
            }),
            (this.$25 = function () {
              return a.enterTahoe();
            }),
            (this.$82 = function () {
              return a.play();
            }),
            (this.$80 = function () {
              return a.pause();
            }),
            (this.$93 = function () {
              return a.scrubBegin();
            }),
            (this.$94 = function (e) {
              return a.scrubEnd(e);
            }),
            (this.$110 = function () {
              return a.startCasting();
            }),
            (this.$111 = function () {
              return a.stopCasting();
            }),
            (this.$113 = function () {
              return a.toggleFullscreen();
            }),
            (this.$114 = function () {
              return a.toggleHD();
            }),
            (this.$115 = function () {
              return a.toggleHLS();
            }),
            (this.$116 = function () {
              return a.toggleMuted();
            }),
            (this.$117 = function () {
              return a.toggleCaptions();
            }),
            (this.$12 = function (e) {
              return a.changeVolume(e);
            }),
            (this.$97 = function (e) {
              return a.setVideoPlaybackRate(e);
            }),
            (this.$96 = function (e) {
              return a.setPreferredVideoQuality(e);
            }),
            (this.$24 = this.$15.registerDrawer(
              r("VideoPlayerUIComponentDrawer").priorities.EmbeddedControls,
              _,
            )),
            (this.$79 = n.needsInitialVideoInfoUpdate),
            (this.$17 = this.$15.getSource()),
            (this.$33 = n.gamesVideoClipButtonEnabled),
            (this.$34 = !!n.gamesVideoCreatorClippingGK && !d.has(this.$17)),
            (this.$35 = n.gamesDefaultClipLengthInSec),
            (this.$7 = n.annotatedMomentsOfInterest || {}),
            (this.$58 = n.isEmbeddedPlayerRedesignEnabled),
            (this.$119 = n.useLargerGradient || !1),
            r("VideoPlayerExperiments").persistentWNSEnabled ||
              r("destroyOnUnload")(function () {
                var e;
                (e = a.$124) == null || e.unmount();
              }));
          var c = this.$15.getRootNode();
          (r("EventListener").listen(this.$91, "focusin", function () {
            ((a.$28 = !0), a.scheduleRenderReactComponent());
          }),
            r("EventListener").listen(this.$91, "focusout", function () {
              r("containsNode")(a.$91, r("getActiveElement")()) ||
                ((a.$28 = !1), a.scheduleRenderReactComponent());
            }),
            r("EventListener").listen(c, "click", function (e) {
              if (a.$28 && e.detail) {
                var t = r("getActiveElement")();
                t && t.blur();
              }
            }),
            r("EventListener").listen(c, "mouseleave", function () {
              ((a.$78 = !1), a.scheduleRenderReactComponent());
            }),
            r("EventListener").listen(c, "mouseenter", function () {
              ((a.$78 = !0), a.scheduleRenderReactComponent());
            }),
            this.$15.registerOption(
              "VideoControls",
              "acquireForceHideLock",
              function () {
                return (
                  a.$29++,
                  {
                    release: function () {
                      (a.$29--, a.scheduleRenderReactComponent());
                    },
                  }
                );
              },
            ),
            this.$15.registerOption(
              "VideoControls",
              "hideOnFinish",
              function () {
                return a.$51;
              },
              function (e) {
                a.$51 = e;
              },
            ),
            this.$15.registerOption(
              "VideoControls",
              "hideOnPause",
              function () {
                return a.$43;
              },
              function (e) {
                a.$43 = e;
              },
            ),
            this.$15.registerOption(
              "VideoControls",
              "unhideOnHover",
              function () {
                return a.$105;
              },
              function (e) {
                a.$105 = e;
              },
            ),
            this.$15.registerOption(
              "VideoControls",
              "hidePlaybackControl",
              function () {
                return a.$44;
              },
              function (e) {
                ((a.$44 = e), a.scheduleRenderReactComponent());
              },
            ),
            this.$15.registerOption("VideoControls", "available", function () {
              return !0;
            }),
            this.$15.registerOption(
              "VideoControls",
              "areControlsVisible",
              function () {
                return a.areControlsVisible();
              },
            ),
            ["mousemove", "mousedown", "keydown"].forEach(function (e) {
              r("EventListener").listen(
                a.$15.getRootNode(),
                e,
                r("throttle")(function () {
                  return a.flashControls();
                }, 200),
              );
            }),
            (this.$112 = new (r("SubscriptionsHandler"))()),
            this.scheduleRenderReactComponent());
          var m = [
            "changeVolume",
            "loadedSubtitles",
            "captionsAvailabilityChanged",
            "muteVideo",
            "pausePlayback",
            "stateChange",
            "toggleFullscreen",
            "toggleSubtitles",
            "updateMetadata",
            "unmuteVideo",
            "qualityChange",
            "casting/receiverStateChange",
            "casting/supportStateChange",
            "casting/castingStateChange",
            "casting/playStateChange",
          ];
          (m.forEach(function (e) {
            return a.$112.addSubscriptions(
              a.$15.addListener(e, function () {
                return a.scheduleRenderReactComponentWithVideoInfoUpdate();
              }),
            );
          }),
            this.$112.addSubscriptions(
              this.$15.addListener("pauseRequested", function (e) {
                a.$125(e);
              }),
              this.$15.addListener("playRequested", function (e) {
                a.$126(e);
              }),
              this.$15.addListener("beginPlayback", function () {
                return a.$127();
              }),
              this.$15.addListener("updateStatus", function (e) {
                if (a.$64) {
                  var t = a.$15.getSeekableRanges();
                  if (
                    a.$65 &&
                    o(
                      "PlaybackSpeedExperiments",
                    ).enableWwwPlaybackSpeedControl()
                  ) {
                    var n,
                      r,
                      i = (n = a.$15.getCurrentTimePosition()) != null ? n : 0,
                      l =
                        t != null && (r = t.end(t.length() - 1)) != null
                          ? r
                          : 0;
                    i > 0 && l > 0 && i >= l && a.liveRewindToLive();
                  }
                  t &&
                    (a.$72 = o("LiveRewindUtils").getRelativePosition(
                      e.position,
                      t,
                    ));
                }
                ((a.$84 = e.position),
                  a.$22 != null && (a.$84 -= a.$22),
                  a.scheduleRenderReactComponent());
              }),
              this.$15.addListener("casting/updateStatus", function (e) {
                if (a.$64) {
                  var t = a.$15.getSeekableRanges();
                  t &&
                    (a.$72 = o("LiveRewindUtils").getRelativePosition(
                      e.position,
                      t,
                    ));
                }
                ((a.$84 = e.position), a.scheduleRenderReactComponent());
              }),
              this.$15.addListener("seekRangeChanged", function () {
                if (a.$64) {
                  var e = a.$15.getSeekableRanges();
                  e && (a.$83 = o("LiveRewindUtils").getTotalDuration(e));
                }
              }),
              this.$15.addListener("updateBuffer", function (e) {
                ((a.$10 = e.duration + e.offset),
                  a.scheduleRenderReactComponent());
              }),
              this.$15.addListener("optionsChange", function () {
                a.$128();
              }),
              this.$15.addListener("resumeAutoplay", function () {
                (a.$129(), a.scheduleRenderReactComponentWithVideoInfoUpdate());
              }),
              this.$15.addListener("turnOffAutoplay", function () {
                a.$56 = !1;
              }),
              this.$15.addListener("LivePlayer/isRewoundChanged", function () {
                var e = a.$15.getOption("LivePlayer", "isRewound");
                a.$65 !== e && ((a.$65 = e), a.scheduleRenderReactComponent());
              }),
              this.$15.addListener("blockAudio", function (e) {
                e || (a.$55 = !0);
              }),
              this.$15.addListener("unblockAudio", function (e) {
                e || (a.$55 = !1);
              }),
            ),
            this.$102 &&
              this.$112.addSubscriptions(
                this.$15.addListener(
                  "VideoWithStallRecovery/bufferingStateOn",
                  function () {
                    a.$38 || a.$130(p);
                  },
                ),
                this.$15.addListener(
                  "VideoWithStallRecovery/bufferingStateOff",
                  function () {
                    a.$11 = !1;
                  },
                ),
              ),
            this.$112.addSubscriptions(
              this.$15.addListener("finishPlayback", function () {
                a.scheduleRenderReactComponent(!0);
              }),
            ),
            this.$128());
        }
        var t = e.prototype;
        return (
          (t.$131 = function () {
            ((this.$95 = this.$15.getOption(
              "VideoScrubberPreviewComponent",
              "scrubberPreviewSprites",
            )),
              (this.$37 = this.$15.getOption(
                "VideoScrubberPreviewComponent",
                "hasPreviewThumbnails",
              )),
              (this.$86 = this.$15.getOption(
                "VideoScrubberPreviewComponent",
                "previewThumbnailInformation",
              )));
          }),
          (t.$129 = function () {
            this.$56 = this.$15.getOption("FeedAutoplay", "isAutoplaying");
          }),
          (t.$128 = function () {
            (this.$129(), this.$131());
          }),
          (t.$125 = function (t) {
            var e = this;
            (this.scheduleRenderReactComponentWithVideoInfoUpdate(),
              this.$62 &&
                this.$64 &&
                t === "user_initiated" &&
                !this.$65 &&
                this.$77 === null &&
                (this.$77 = window.setTimeout(function () {
                  ((e.$77 = null),
                    o("LiveVideoPlayerActions").setIsRewound(e.$15, !0));
                }, m)));
          }),
          (t.$126 = function (t) {
            this.$62 &&
              this.$64 &&
              t === "user_initiated" &&
              this.$77 !== null &&
              (window.clearTimeout(this.$77), (this.$77 = null));
          }),
          (t.$127 = function () {
            (this.flashControls(),
              this.$132(),
              (this.$67 = !0),
              this.scheduleRenderReactComponentWithVideoInfoUpdate());
          }),
          (t.$130 = function (t) {
            var e = this,
              n = r("XBasicFBNuxGenShouldShowControllerRouteBuilder").buildUri({
                nux_id: t,
              });
            new (r("AsyncRequest"))()
              .setURI(n)
              .setMethod("GET")
              .setReadOnly(!0)
              .setHandler(function (t) {
                var n = t.getPayload();
                e.$11 = n.should_show_nux;
              })
              .send();
          }),
          (t.updateConfig_DEPRECATED = function (t, n) {
            ((this.$81 = t.permalinkURL || null),
              (this.$3 = t.showButtons ? t.showButtons.casting : !1),
              (this.$62 = !!t.isLive),
              (this.$1 = t.adBreaks || null),
              (this.$119 = t.useLargerGradient || !1),
              (this.$106 = t.showPlaybackRateControl || !1),
              this.scheduleRenderReactComponent());
          }),
          (t.updateAdBreaksConfig = function (t) {
            ((this.$52 = t.insertedAdBreaks),
              (this.$53 = t.isAdBreakDisabled),
              (this.$54 = t.isAdBreakInsertionWithoutGapRule),
              (this.$30 = !t.isPreviewingAdBreak),
              this.scheduleRenderReactComponent());
          }),
          (t.updateStarsCueConfig = function (t) {
            ((this.$104 = t.selectedStarsCueTimestamp),
              this.scheduleRenderReactComponent());
          }),
          (t.updateTwoRowsConfig = function (t) {
            ((this.$120 = t.useTwoRows),
              (this.$57 = t.isCommentAttachment),
              this.scheduleRenderReactComponent());
          }),
          (t.flashControls = function () {
            var e = this;
            (this.$89 || ((this.$89 = !0), this.scheduleRenderReactComponent()),
              window.clearTimeout(this.$27),
              (this.$27 = window.setTimeout(function () {
                ((e.$27 = null),
                  (e.$89 = !1),
                  e.scheduleRenderReactComponent());
              }, 3e3)));
          }),
          (t.$132 = function () {
            var e = this;
            this.$31 &&
              (window.clearTimeout(this.$32),
              (this.$32 = window.setTimeout(function () {
                ((e.$32 = null),
                  (e.$31 = !1),
                  e.scheduleRenderReactComponent());
              }, f)));
          }),
          (t.areControlsVisible = function () {
            var e = this;
            if (!this.areControlsEnabled()) return !1;
            if (this.$30 || this.$11 || this.$68 || this.$69 || this.$31)
              return !0;
            if (this.$15.isState("playing"))
              return this.$98
                ? (this.$13 ||
                    (this.$13 = window.setTimeout(function () {
                      e.$98 = !1;
                    }, 5e3)),
                  !0)
                : this.$50 && this.$56
                  ? !1
                  : this.$28 || (this.$78 && this.$89);
            if (this.$15.isState("finished")) {
              var t = this.$15.getSource() === "tahoe";
              return this.$15.isFullscreen() || t || !this.$51;
            } else if (this.$15.isState("paused"))
              return (
                this.$15.isFullscreen() ||
                !this.$43 ||
                (this.$105 && (this.$28 || (this.$78 && this.$89)))
              );
            return !1;
          }),
          (t.areControlsEnabled = function () {
            var e = this.$15.getSource() === "tahoe";
            return !(
              this.$29 > 0 ||
              this.$15.isState("loading") ||
              this.$15.isState("fallback") ||
              this.$15.getOption("SottoPaywall", "enable") ||
              (this.$15.isState("finished") &&
                this.$51 &&
                !this.$15.isFullscreen() &&
                !e)
            );
          }),
          (t.scheduleRenderReactComponentWithVideoInfoUpdate = function () {
            ((this.$79 = !0), this.scheduleRenderReactComponent(!0));
          }),
          (t.shouldRenderComponent = function () {
            return this.$15.isState("loading") || this.$15.isState("fallback")
              ? !1
              : this.areControlsVisible()
                ? ((this.$41 = !1), !0)
                : this.$41
                  ? !1
                  : ((this.$41 = !0), !0);
          }),
          (t.scheduleRenderReactComponent = function (t) {
            var e = this;
            (t === void 0 && (t = !1),
              !(!t && !this.shouldRenderComponent()) &&
                (r("cancelAnimationFrame")(this.$90),
                (this.$90 = r("requestAnimationFrame")(function () {
                  return e.renderReactComponent();
                }))));
          }),
          (t.renderReactComponent = function () {
            var e = this;
            if (
              r("VideoPlayerExperiments").delayVideoControlRenderForApiReady &&
              this.$15.getState() === "loading" &&
              !this.$92
            ) {
              ((this.$92 = !0),
                this.$15.runOnApiReady(function () {
                  e.scheduleRenderReactComponent();
                }));
              return;
            }
            this.$79 && this.$134();
            var t = this.areControlsVisible();
            (this.$123 !== t &&
              (this.$15.emit("VideoControls/visibilityUpdate", {
                areControlsVisible: t,
              }),
              t ? this.$24.reserve() : this.$24.release(),
              this.$15.isState("destroyed") ||
                o("CSS").conditionClass(this.$15.getRootNode(), "_302m", !t)),
              (this.$123 = t));
            var n = this.$15.getAvailableVideoQualities(),
              i = this.$15.getPreferredVideoQuality(),
              l = this.$15.getSelectedVideoQuality(),
              s = this.$15.canAutoSelectVideoQuality(),
              u = this.$15.getStreamingFormat(),
              m = this.$70;
            ((this.$70 =
              r("VideoPlayerExperiments").slidingWNSv3 &&
              this.$40 &&
              r("VideoWatchAndScrollController").isSlidingEnabled(this.$15)),
              m !== this.$70 &&
                this.$15.logEvent(
                  this.$70
                    ? "watch_and_scroll_icon_highlighted"
                    : "watch_and_scroll_icon_unhighlighted",
                ));
            var p = this.$15.getSource() === "tahoe",
              _ = this.$15.getSource() === "watch_scroll",
              f = this.$15.isFBIsLiveTemplated() || this.$15.isFBWasLive(),
              g =
                this.$64 &&
                f &&
                (this.$15.isFBWasLive() || this.$15.getState() !== "finished"),
              h = c.jsx(r("DeferredComponent.react"), {
                deferredPlaceholder: c.jsx("span", {}),
                deferredComponent: function (t) {
                  return a(["VideoControls.react"], t);
                },
                allowCasting: this.$3,
                allowFullscreen: this.$4,
                allowAudioButton: this.$5,
                annotatedMomentsOfInterest: this.$7,
                areCaptionsActive: this.$8,
                areCaptionsAutogenerated: this.$9,
                areHLSActive: this.$6,
                bufferedPosition: this.$10,
                finishedPlaying: this.$15.isState("finished"),
                hasFoundReceiver: this.hasFoundReceiver(),
                hasHD: this.$36,
                hasCaptions: this.$39,
                hasWatchAndScroll: this.$40 && !this.getIsInChannel(),
                hidden: !this.areControlsEnabled(),
                hideGradient: this.$42,
                isAudioBlocked: this.$55,
                isCasting: this.isCasting(),
                isCastingSupported: this.isCastingSupported(),
                isCommentAttachment: this.$57,
                isEmbedded: d.has(this.$17),
                isEmbeddedPlayerRedesignEnabled: this.$58,
                isFullscreen: this.$59,
                isHD: this.$60,
                isInline: this.$61,
                isInTahoe: p,
                isInWatchAndScroll: _,
                isLive: this.$62,
                isLiveRewindEnabled: g,
                isLiveRewound: this.$65,
                isFBWasLive: this.$15.isFBWasLive(),
                isSphericalVideo: this.$71,
                isMuted: this.$66,
                isPlaying: this.$67,
                isSidePaneOpen:
                  this.getIsInChannel() &&
                  !!o("Parent").bySelector(this.$91, "._57bj"),
                isSlidingWNSEligible: this.$70,
                interestLevels: null,
                liveRelativePlaybackPosition: this.$72,
                drawer: this.$24,
                onActionsClick: function () {
                  e.$69 = !e.$69;
                },
                onAnnotatedMomentOfInterestSelect: function (n) {
                  e.$15.seek(n);
                },
                onEnterWatchAndScroll: this.$26,
                onEnterTahoe: this.$25,
                doesFullscreenEnterTahoe: this.$23,
                onLiveRewindToBeginning: this.$75,
                onLiveRewindSeekBack: this.$73,
                onLiveRewindSeekForward: this.$74,
                onLiveRewindToLive: this.$76,
                onWNSNUXClose: this.$133,
                onClipVideo: this.$14,
                onPause: this.$80,
                onPlay: this.$82,
                onScrubBegin: this.$93,
                onScrubEnd: this.$94,
                onSetVideoPlaybackRate: this.$97,
                onSettingsClick: function () {
                  e.$68 = !e.$68;
                },
                onSidePaneToggle: function () {
                  r("Arbiter").inform("VideoChannelView/sidePaneToggle", {});
                },
                onStartCast: this.$110,
                onStopCast: this.$111,
                onToggleFullscreen: this.$113,
                onToggleHD: this.$114,
                onToggleHLS: this.$115,
                onToggleMuted: this.$116,
                onToggleCaptions: this.$117,
                onVolumeChange: this.$12,
                permalinkURL: this.$81,
                showInlineCopyLinkOption: this.$99,
                showInlineVideoReportOption: this.$100,
                showPermalinkButton: this.$101,
                playbackDuration: this.$83,
                playbackPosition: this.$84,
                transparent: !t,
                hidePlaybackControl: this.$44,
                isWatchIconEligible: this.$45,
                hidePlaybackScrubber: this.$46,
                showPlaybackRateControl: this.$106,
                showPlayButtonForLive: this.$107,
                showVideoSliderWarningTooltip: this.$109,
                hideRemainingTime: this.$47,
                hideSettings: this.$48,
                hideMoreSettingsLink: this.$49,
                useTwoRows: this.$120,
                volume: this.$122,
                scrubberPreviewSprites: this.$95,
                hasScrubberPreview: this.$37 && !_,
                previewThumbnailInformation: this.$86,
                availableQualities: n,
                selectedQuality: l,
                preferredQuality: i,
                canAutoSelectVideoQuality: s,
                onSelectQuality: this.$96,
                showQualitySelector: this.$108,
                qualitySelectorMinStreams: this.$88,
                streamingFormat: u,
                onPointOfInterestSelect: this.$85.onPointOfInterestSelect,
                currentPointOfInterest: this.$85.currentPointOfInterest,
                pointsOfInterest: this.$85.pointsOfInterest,
                showPointOfInterestTimestamps:
                  this.$85.showPointOfInterestTimestamps,
                displayElapsedTime: this.$18,
                showControlsOnFullScreenOnly: this.$19,
                displayMilliseconds: this.$20,
                adBreaks: this.$1,
                pollTimestamps: this.$87.filter(function (t) {
                  return t <= e.$83;
                }),
                vpcID: this.$15.getVideoPlayerID(),
                adBreaksDisableReasons: this.$2,
                showSidePaneToggle: !1,
                showWNSNUX: this.$11 && this.areControlsEnabled() && this.$102,
                insertedAdBreaks: this.$52,
                isAdBreakDisabled: this.$53,
                isAdBreakInsertionWithoutGapRule: this.$54,
                showEligibleStarsCueTimeSegments: this.$103,
                selectedStarsCueTimestamp: this.$104,
                useDarkTheme: this.$118,
                videoID: this.$15.getVideoID(),
                videoClipInfo: this.$121 ? this.$121 : void 0,
                gamesVideoClipButtonEnabled: this.$33,
                gamesVideoCreatorClipping: this.$34,
                gamesDefaultClipLengthInSec: this.$35,
                useLargerGradient: this.$119,
              });
            (o("ReactDOM").flushSync(function () {
              var t;
              (t = e.$124) == null || t.render(h);
            }),
              this.$11 &&
                this.areControlsEnabled() &&
                this.$102 &&
                (this.$38 = !0));
          }),
          (t.$134 = function () {
            var e = this.$15.getVideoInfo_DEPRECATED();
            if (e) {
              if (
                ((this.$8 = this.$15.areSubtitlesActive()),
                (this.$9 = this.$15.areSubtitlesAutogenerated()),
                (this.$39 = this.$15.hasSubtitles()),
                (this.$36 = e.hasHD),
                (this.$60 = e.isHD),
                (this.$66 = e.isMuted),
                (this.$67 = e.isPlaying || this.isCastPlaying()),
                this.$64)
              ) {
                var t = this.$15.getSeekableRanges();
                t && (this.$83 = o("LiveRewindUtils").getTotalDuration(t));
              } else
                this.$21 != null
                  ? (this.$83 = Math.min(e.playbackDuration, this.$21))
                  : (this.$83 = e.playbackDuration);
              this.$122 = e.volume;
              var n = this.$15.getOption(
                "CommercialBreakVideoAdOverlay",
                "videoController",
              );
              n
                ? (this.$59 = n.isFullscreen())
                : (this.$59 = this.$15.isFullscreen());
              var r = this.$15.getPlayerOrigin();
              switch (this.$15.getSource()) {
                case "inline":
                case "discover":
                case "continue_watching_recommendation":
                case "topic_live":
                case "entry_point":
                  this.$61 = !0;
                  break;
                case "permalink":
                  this.$61 = r === "video_home";
                  break;
                case "games_video_home_hero":
                  this.$61 = r === "games_video_hub";
                  break;
                default:
                  this.$61 = !1;
                  break;
              }
              ((this.$62 = e.isLiveStream),
                (this.$6 = e.areHLSActive),
                (this.$79 = !1),
                (this.$23 = this.$15.listeners("enterTahoe").length !== 0));
            }
          }),
          (t.toggleHD = function () {
            this.$15.toggleHD();
          }),
          (t.setPreferredVideoQuality = function (t) {
            t != null && t !== ""
              ? this.$15.setPreferredVideoQuality(t)
              : this.$15.unsetPreferredVideoQuality();
          }),
          (t.toggleHLS = function () {
            this.$15.switchToStreamType("hls");
          }),
          (t.enterWatchAndScroll = function () {
            r("shouldWNSRenderToRHC")()
              ? this.$15.emit("crossfadeWatchAndScroll")
              : this.$15.emit("enterWatchAndScroll");
          }),
          (t.enterTahoe = function () {
            var e = this;
            this.$15.getSource() === "watch_scroll"
              ? (this.$15.logEvent("watch_and_scroll_channel_entered"),
                r("Bootloader").loadModules(
                  ["TahoeController", "URI"],
                  function (t, n) {
                    var o = new n(e.$15.getVideoURL()),
                      a = babelHelpers.extends(
                        {},
                        n.getRequestURI().getQueryData(),
                        { ref: "tahoe" },
                      );
                    (r("VideoWatchAndScrollController").onEnterTahoe(),
                      t.openFromVideoPlayer(
                        e.$15,
                        o.setQueryData(a),
                        e.$15.getVideoChannelID(),
                        "wns",
                      ));
                  },
                  "VideoControls",
                ))
              : this.$15.emit("enterTahoe");
          }),
          (t.scrubBegin = function () {
            this.isCasting() || this.$15.pause("seek_initiated");
          }),
          (t.scrubEnd = function (t) {
            var e = t;
            if (this.$64) {
              var n = this.$15.getSeekableRanges();
              if (n) {
                var r = this.$72;
                ((this.$72 = e),
                  (e = o("LiveRewindUtils").getAbsolutePosition(e, n)));
                var a = o("LiveRewindUtils").getLiveHeadTimestamp(n),
                  i = a - e < 1;
                (o("LiveVideoPlayerActions").setIsRewound(this.$15, !i),
                  o("LiveRewindUtils").logLiveRewindEvent(
                    "scrubber",
                    this.$15,
                    r,
                    null,
                    null,
                    e,
                  ));
              }
            }
            (this.$22 != null && (e += this.$22),
              this.$15.seek(e, "user_initiated"),
              (this.$84 = e));
            var l = this.$67 || (this.$15.isState("finished") && !this.$51);
            !this.isCasting() && l && this.$15.play("seek_initiated");
          }),
          (t.toggleMuted = function () {
            this.$15.isMuted()
              ? (r("logVideosClickTracking")(this.$15.getVideoNode()),
                this.$15.unmute())
              : this.$15.mute();
          }),
          (t.toggleFullscreen = function () {
            (this.$15.isFullscreen() ||
              r("logVideosClickTracking")(this.$15.getVideoNode()),
              this.$15.toggleFullscreen());
          }),
          (t.toggleCaptions = function () {
            (this.$15.toggleSubtitles(), this.scheduleRenderReactComponent());
          }),
          (t.changeVolume = function (t) {
            this.$15.setVolume(t);
          }),
          (t.liveRewindToBeginning = function () {
            o("LiveRewindUtils").goToBeginning(this.$15);
          }),
          (t.liveRewindSeekBack = function () {
            o("LiveRewindUtils").seekBack(this.$15);
          }),
          (t.liveRewindSeekForward = function () {
            o("LiveRewindUtils").seekForward(this.$15);
          }),
          (t.liveRewindToLive = function () {
            o("LiveRewindUtils").goToLive(this.$15);
          }),
          (t.play = function () {
            (r("logVideosClickTracking")(this.$15.getVideoNode()),
              this.isCasting()
                ? this.$15.setOption("casting", "isPlaying", !0)
                : this.$15.play("user_initiated"),
              this.$62 &&
                this.$64 &&
                o("LiveRewindUtils").logLiveRewindEvent(
                  "play",
                  this.$15,
                  this.$72,
                  null,
                  this.$72,
                  null,
                ));
          }),
          (t.pause = function () {
            (this.isCasting()
              ? this.$15.setOption("casting", "isPlaying", !1)
              : this.$15.pause("user_initiated"),
              this.$62 &&
                this.$64 &&
                (o("LiveVideoPlayerActions").setIsRewound(this.$15, !0),
                o("LiveRewindUtils").logLiveRewindEvent(
                  "pause",
                  this.$15,
                  this.$72,
                  null,
                  this.$72,
                  null,
                )));
          }),
          (t.setVideoPlaybackRate = function (t) {
            this.$15.setPlaybackRate(t);
          }),
          (t.startCasting = function () {
            this.$15.setOption("casting", "isCasting", !0);
          }),
          (t.stopCasting = function () {
            this.$15.setOption("casting", "isCasting", !1);
          }),
          (t.isCastPlaying = function () {
            return this.$15.getOption("casting", "isPlaying");
          }),
          (t.hasFoundReceiver = function () {
            return this.$15.getOption("casting", "hasFoundReceiver");
          }),
          (t.isCasting = function () {
            return this.$15.getOption("casting", "isCasting");
          }),
          (t.isCastingSupported = function () {
            return this.$15.getOption("casting", "isSupported");
          }),
          (t.updatePointsOfInterestConfig = function (t) {
            (Object.assign(this.$85, t), this.scheduleRenderReactComponent());
          }),
          (t.updateDisplayElapsedTime = function (t) {
            ((this.$18 = t), this.scheduleRenderReactComponent());
          }),
          (t.updateDisplayTimeRangeConfig = function (t) {
            ((this.$21 = t.displayDurationLimit),
              (this.$22 = t.displayTimeOffset),
              this.scheduleRenderReactComponentWithVideoInfoUpdate());
          }),
          (t.getIsInChannel = function () {
            return this.$15.getIsInChannel();
          }),
          (t.$135 = function () {
            var e = [this.$13, this.$27, this.$32, this.$77];
            (e.forEach(function (e) {
              return window.clearTimeout(e);
            }),
              (this.$13 = null),
              (this.$27 = null),
              (this.$32 = null),
              (this.$77 = null));
          }),
          (t.unregister = function () {
            (r("cancelAnimationFrame")(this.$90),
              this.$112.release(),
              (this.$16.current = null),
              this.$135());
          }),
          e
        );
      })();
    l.default = g;
  },
  98,
);
