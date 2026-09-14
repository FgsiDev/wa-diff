__d(
  "VideoWatchAndScrollController",
  [
    "csx",
    "cx",
    "invariant",
    "Arbiter",
    "CSS",
    "DOM",
    "DOMDimensions",
    "Event",
    "EventListener",
    "Locale",
    "ReactDOM_DEPRECATED",
    "SubscriptionsHandler",
    "Tahoe",
    "VideoAutoplayControllerX",
    "VideoChannelStoryFetcher",
    "VideoFrameBuffer",
    "VideoPlayerExperiments",
    "VideoPlayerVolumeSettings",
    "VideoWatchAndScrollContainer.react",
    "VideoWatchAndScrollVariables.experimental",
    "ViewportBounds",
    "cancelAnimationFrame",
    "clearTimeout",
    "destroyOnUnload",
    "getViewportDimensions",
    "ifRequired",
    "react",
    "setTimeoutAcrossTransitions",
    "shouldWNSRenderToRHC",
    "throttle",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    var e,
      d = e || (e = o("react")),
      m = 158,
      p = 280,
      _ = 10,
      f = 42,
      g = f + _,
      h = 476,
      y = 230,
      C = ["autoplay_initiated", "page_visibility_initiated"],
      b = 750,
      v = 308,
      S = 3,
      R = null;
    function L() {
      return Math.max(r("getViewportDimensions")().height, 400) - f - 80;
    }
    var E = (function () {
      function e(e, t, n, o, a) {
        var i,
          l = this;
        ((this.$30 = new (r("SubscriptionsHandler"))()),
          (this.$31 = new (r("SubscriptionsHandler"))()),
          (this.$1 = !1),
          (this.$2 = null),
          (this.$3 = null),
          (this.$4 = !1),
          (this.$34 = n),
          (this.$37 = !1),
          (this.$29 = !1),
          (this.$47 = o),
          (this.$48 = o),
          (this.$52 = a),
          (this.$33 = new (r("VideoChannelStoryFetcher"))(
            t,
            e,
            this.$34,
            null,
          )),
          (this.$35 = []),
          (this.$36 = 0),
          (this.$38 = []),
          (this.$39 = []),
          (this.$5 = m),
          (this.$6 = p),
          (this.$10 = window.document.getElementById("leftCol")),
          (this.$11 = window.document.getElementById("rightCol")),
          (this.$12 = window.document.getElementById("pagelet_bluebar")),
          (this.$43 = {}),
          (this.$46 = null),
          this.$53(),
          (i = this.$30).addSubscriptions.apply(i, this.$54()),
          r("VideoPlayerExperiments").persistentWNSEnabled ||
            r("destroyOnUnload")(function () {
              (l.$55(),
                l.$4 && l.$56(),
                l.$30 && l.$30.release(),
                l === R && (R = null));
            }));
      }
      var t = e.prototype;
      return (
        (t.$54 = function () {
          var e = this,
            t = [];
          return (
            t.push(
              r("Arbiter").subscribe(
                "VideoChannelView/opened",
                function (t, n) {
                  e.$4 && (!n.controller || e.$16 !== n.controller) && e.$56();
                },
              ),
            ),
            t.push(
              r("Arbiter").subscribe(
                "fbVideoWatchAndScroll/closeWNS",
                function () {
                  if (e.$4) {
                    var t = e.$16,
                      n = t.getOption(
                        "CommercialBreakVideoAdOverlay",
                        "videoController",
                      );
                    (n && (t = n),
                      t.logEvent("watch_and_scroll_exited"),
                      e.$57());
                  }
                },
              ),
            ),
            r("VideoPlayerExperiments").rhcWNSEnabled &&
              (t.push(
                r("Arbiter").subscribe(
                  "RHCVideoWNSController/collapseStart",
                  function () {
                    var t = e.$14;
                    !t ||
                      !r("shouldWNSRenderToRHC")() ||
                      t.setState({ endScreenFadeOut: !0, endScreenShown: !1 });
                  },
                ),
                r("Arbiter").subscribe(
                  "RHCVideoWNSController/collapseEnd",
                  function () {
                    var t = e.$14;
                    !t ||
                      !r("shouldWNSRenderToRHC")() ||
                      (e.pauseActiveVideo("user_initiated"),
                      t.setState({ endScreenFadeOut: !1 }));
                  },
                ),
                r("Arbiter").subscribe(
                  "RHCVideoWNSController/expandStart",
                  function () {
                    var t = e.$14;
                    !t ||
                      !e.isActiveVideoDonePlaying() ||
                      !r("shouldWNSRenderToRHC")() ||
                      t.setState({ endScreenShown: !0 });
                  },
                ),
              ),
              r("VideoPlayerExperiments").persistentWNSEnabled &&
                t.push(
                  r("Arbiter").subscribe(
                    "RHCVideoWNSController/eject",
                    function (t, n) {
                      r("shouldWNSRenderToRHC")() &&
                        ((e.$2 = n),
                        r("DOM").appendContent(document.body, n),
                        e.$16.isState("playing") &&
                          e.playActiveVideo("user_initiated"));
                    },
                  ),
                  r("Arbiter").subscribe(
                    "RHCVideoWNSController/dock",
                    function () {
                      r("shouldWNSRenderToRHC")() &&
                        e.$16.isState("playing") &&
                        e.playActiveVideo("user_initiated");
                    },
                  ),
                  r("Event").listen(
                    window,
                    "resize",
                    r("throttle")(function () {
                      r("shouldWNSRenderToRHC")() && e.$58();
                    }),
                  ),
                  r("Arbiter").subscribe(
                    "RHCVideoWNSController/mount",
                    function () {
                      e.$58();
                    },
                  ),
                )),
            t
          );
        }),
        (t.$58 = function () {
          var e = this.$14;
          if (!(!e || this.$37)) {
            var t = this.$16.getVideoNode(),
              n = this.$59(t);
            (this.$16.removeOffsetStylings(),
              this.$16.setDimensions(n.width, n.height),
              e.setState({ width: n.width, height: n.height }),
              (this.$46 = n),
              r("Arbiter").inform("VideoWatchAndScrollController/resize"));
          }
        }),
        (t.isActiveVideoDonePlaying = function () {
          var e = this.$16.getState();
          return e === "finished";
        }),
        (e.isActiveVideoDonePlaying = function () {
          return R ? R.isActiveVideoDonePlaying() : !1;
        }),
        (t.$60 = function (t, n, o) {
          var e = this;
          (t || c(0, 3963),
            n.length || c(0, 3964),
            (this.$47 = !0),
            (this.$37 = !1),
            (this.$31 = new (r("SubscriptionsHandler"))()),
            (this.$36 = o),
            (this.$33 = t),
            (this.$38 = t.getPreloadedData().thumbnails || []),
            (this.$39 = []),
            (this.$35 = n.slice(0)),
            this.$35.forEach(function (t) {
              (e.$61(t), e.$62(t), t.updateSource("watch_scroll"));
            }));
          var a = this.$35.shift();
          this.$63(a, "user_initiated");
        }),
        (t.$64 = function (t, n, r, o, a) {
          var e = this;
          ((this.$9 = a),
            (this.$46 = this.$59(a.videoRootNode)),
            this.$60(t, n, r),
            this.$14 &&
              this.$14.setState({ channelVideoElements: o }, function () {
                e.$65();
              }),
            (this.$9 = null));
        }),
        (e.registerVideoController = function (n, r, o, a, i) {
          if (
            (R == null &&
              (R = new e(n.getVideoChannelID(), n.getVideoID(), r, a, i)),
            R.$30.addSubscriptions(
              n.addListener("enterWatchAndScroll", function () {
                R && R.$66(n);
              }),
              n.addListener("crossfadeWatchAndScroll", function () {
                if (R) {
                  R.$67();
                  var e = n.getVideoNode();
                  ((R.$46 = R.$59(e)),
                    R.$63(n, "user_initiated", !1, !0),
                    n.unmute());
                }
              }),
              n.addListener("exitWatchAndScroll", function () {
                R && R.$4 && R.$56();
              }),
              n.addListener("VideoChannelController/enterChannel", function () {
                R && (R.$37 = !0);
              }),
              n.addListener("VideoChannelController/exitChannel", function () {
                R && (R.$37 = !1);
              }),
            ),
            r === "wns" && R.$35.push(n),
            !!o)
          ) {
            var t = [
              "beginPlayback",
              "changeVolume",
              "muteVideo",
              "toggleFullscreen",
              "unmuteVideo",
              "VideoChannelController/enterChannel",
            ];
            t.forEach(function (e) {
              R &&
                R.$30.addSubscriptions(
                  n.addListener(e, function (t) {
                    R && R.$68(n, e, t);
                  }),
                );
            });
          }
        }),
        (e.isActive = function () {
          return R ? R.$4 && !R.$37 : !1;
        }),
        (e.updateSlidingCalculations = function () {
          R && R.$19 && R.$69(R.$19);
        }),
        (e.registerChannelVideoController = function (t) {
          R &&
            (t.updateSource("watch_scroll"), R.$61(t), R.$62(t), R.$35.push(t));
        }),
        (e.getStoryFetcherData = function () {
          return R && R.$70();
        }),
        (t.$70 = function () {
          return {
            storyFetcher: this.$33,
            videoPlayerControllers: this.$35,
            channelVideoIndex: this.$36,
            rootVideoPlayerController: this.$17,
            channelInteractionsToRegister: this.$39,
            isFromWNS: !0,
          };
        }),
        (e.getVideoPlaceholder = function () {
          return R ? R.$18 : null;
        }),
        (e.getReactContainer = function () {
          return R ? R.$14 : null;
        }),
        (e.registerChannelInteraction = function (t) {
          R && R.$39.push(t);
        }),
        (e.onEnterTahoe = function () {
          R && R.$71();
        }),
        (t.$71 = function () {
          ((this.$37 = !0), this.$33.abandonRequest());
        }),
        (e.onEnterChannel = function () {
          R && R.$72();
        }),
        (t.$72 = function () {
          ((this.$37 = !0), this.$33.abandonRequest());
          var e = this.$14;
          if (e) {
            var t = ["._23if", "._23ig", "._452w", "._2i7a"];
            e.getChannelVideoElements().forEach(function (e) {
              t.forEach(function (t) {
                var n = r("DOM").scry(e, t),
                  a = n[0];
                a && o("CSS").show(a);
              });
              var n = r("DOM").scry(e, "._2337"),
                a = n[0];
              a &&
                (o("CSS").removeClass(a, "_2337"),
                o("CSS").addClass(a, "_3pay"));
            });
          }
        }),
        (e.resetFromChannelView = function (t, n, r) {
          R && R.$60(t, n, r);
        }),
        (e.startFromChannelView = function (t, n, r, o, a) {
          R && R.$64(t, n, r, o, a);
        }),
        (t.$68 = function (t, n, r) {
          if (this.$4) {
            if (
              this.$16 === t ||
              (r && C.includes(r.reason)) ||
              !t.isIntentionallyViewing()
            )
              return;
            var e = this.$16.getOption("VideoWithLiveBroadcast", "isLive");
            e ? this.$16.mute() : this.$16.pause("user_initiated");
          }
          if (
            (n === "toggleFullscreen" && t.isFullscreen()) ||
            n === "VideoChannelController/enterChannel"
          )
            this.$19 && this.$55();
          else if (
            (n !== "beginPlayback" ||
              (r && r.reason === "user_initiated") ||
              t.getSource() === "permalink") &&
            t.isIntentionallyViewing() &&
            !t.isFullscreen() &&
            !t.getIsInChannel()
          ) {
            var o = this.$73(t.getVideoNode()),
              a = o.top;
            (a > window.scrollY ||
              (n === "beginPlayback" &&
                r &&
                r.reason === "autoplay_initiated")) &&
              this.$69(t);
          }
        }),
        (t.$74 = function (t) {
          this.$37 ||
            t !== this.$16 ||
            (this.$14 &&
              this.$14.setState({
                endScreenShown: !0,
                playbackFinished: !0,
                timeUntilNext: this.$50 ? S : 0,
              }));
        }),
        (t.$75 = function (t) {
          var e = this;
          return t.addListener("finishPlayback", function () {
            return e.$74(t);
          });
        }),
        (t.$69 = function (t) {
          var e = t.getVideoNode();
          e.offsetParent &&
            ((this.$19 = t),
            (this.$25 = r("throttle")(this.$76.bind(this), 100)),
            window.addEventListener("resize", this.$25),
            this.$77(e),
            r("VideoPlayerExperiments").enableClickOnlyWatchAndScroll ||
              this.$78());
        }),
        (t.$76 = function () {
          this.$19 &&
            (this.$77(this.$18 || this.$19.getVideoNode()),
            this.$26 && this.$26());
        }),
        (t.$79 = function (t) {
          var e = this.$73(t),
            n = t.scrollWidth,
            r = t.scrollHeight,
            o = y,
            a = h;
          n < r && ((o *= n / r), (a *= n / r));
          var i = o;
          if (this.$10 && this.$10.children.length) {
            var l = this.$73(this.$10);
            if (l.left <= e.left) i = Math.min(l.left - 2 * _, a);
            else if (this.$11 && this.$11.children.length) {
              var s = this.$73(this.$11);
              i = Math.min(s.left - 2 * _, a);
            }
          } else {
            var u = document.getElementById("timeline_tab_content");
            if (u) {
              var c = this.$73(u).left;
              i = Math.min(c - 2 * _, a);
            }
          }
          return Math.max(i, o);
        }),
        (t.$73 = function (t) {
          var e = { left: 0, top: 0 };
          do ((e.top += t.offsetTop), (e.left += t.offsetLeft));
          while ((t = t.offsetParent));
          return e;
        }),
        (t.$80 = function () {
          if (r("VideoPlayerExperiments").rhcWNSEnabled) return v;
          var e = 0;
          if (this.$10 && this.$10.children.length) {
            var t = this.$73(this.$10),
              n = window.getComputedStyle(this.$10),
              o = parseInt(n.width, 10);
            (r("VideoPlayerExperiments").persistentWNSEnabled && (o = o || p),
              (e = o + t.left - _));
          } else {
            var a = document.getElementById("timeline_tab_content");
            if (!a) {
              var i = document.getElementById("pagelet_timeline_main_column");
              i
                ? (a = i.parentNode)
                : (a = document.getElementById("contentArea"));
            }
            if (a) {
              var l = this.$73(a).left;
              e = l - 2 * _;
            }
          }
          return e;
        }),
        (t.$59 = function (t) {
          var e = !t && this.$9,
            n = 16,
            a = 9;
          if (e !== !0) {
            ((a = 1),
              (n = parseFloat(t.getAttribute("data-original-aspect-ratio"))));
            var i = t.parentElement;
            (!n || a === 0) && i && ((n = i.scrollWidth), (a = i.scrollHeight));
          }
          var l = y,
            s = h;
          n < a && ((l *= n / a), (s *= n / a));
          var u = this.$80(),
            c = _;
          (this.$12 && (c += this.$12.scrollHeight), (c = Math.max(c, g)));
          var d = r("VideoPlayerExperiments").rhcWNSEnabled
              ? u
              : Math.max(Math.min(u, s), y),
            m;
          r("VideoPlayerExperiments").rhcWNSEnabled
            ? (m = o("Locale").isRTL()
                ? _ + r("ViewportBounds").getRight()
                : r("getViewportDimensions")().width - d - _)
            : ((m = u > s ? u - s + _ : _), (m = Math.max(m, _)));
          var p = (d * a) / n;
          return (
            r("VideoPlayerExperiments").rhcWNSEnabled && (p = Math.min(p, L())),
            {
              hasEnoughSpace: e === !0 || u >= l,
              height: p,
              left: m,
              top: c,
              width: d,
            }
          );
        }),
        (e.hasEnoughSpaceToEnter = function (t) {
          if (!R || !t || !t.getVideoNode()) return !1;
          var e = t.getVideoNode(),
            n = 1,
            r = parseFloat(e.getAttribute("data-original-aspect-ratio")),
            o = e.parentElement;
          (!r || n === 0) && o && ((r = o.scrollWidth), (n = o.scrollHeight));
          var a = y;
          return (r < n && (a *= r / n), R.$80() > a);
        }),
        (t.$77 = function (t) {
          ((this.$22 = this.$73(t)),
            (this.$27 = t.scrollWidth),
            (this.$28 = t.scrollHeight));
          var e = Math.max(this.$27, this.$28);
          if (e < y) {
            var n = y / e;
            ((this.$27 *= n), (this.$28 *= n));
          }
          ((this.$21 = this.$22.top + this.$28 * 0.5 - f),
            (this.$20 = this.$22.top + this.$28 * 0.5 - window.innerHeight),
            (this.$46 = this.$59(t)),
            (this.$29 = !this.$46.hasEnoughSpace));
        }),
        (t.$78 = function () {
          this.$19.isIntentionallyViewing()
            ? (this.$81(this.$82.bind(this)), this.$82())
            : this.$55();
        }),
        (e.isVideoAlmostFinished = function (t) {
          var e = t.getPlaybackDuration(),
            n = t.getCurrentTimePosition(),
            o = r(
              "VideoWatchAndScrollVariables.experimental",
            ).noWNSRemainingTime;
          return e * 0.2 < o ? n / e > 0.8 : e - n < o;
        }),
        (e.isSlidingEnabled = function (n) {
          var t = R;
          if (t == null) return !1;
          var r = t.$19;
          return r == null || r !== n
            ? !1
            : t.$29 ||
                !n.isIntentionallyViewing() ||
                !n.getVideoNode().offsetParent ||
                e.isVideoAlmostFinished(n) ||
                n.getSource() === "tahoe" ||
                n.hasLooped()
              ? (t.$55(), !1)
              : !0;
        }),
        (t.$82 = function () {
          var t = this.$19;
          if (t != null) {
            if (!t.isIntentionallyViewing() || !t.getVideoNode().offsetParent) {
              this.$55();
              return;
            }
            (window.scrollY > this.$21 || window.scrollY < this.$20) &&
              e.isSlidingEnabled(t) &&
              t !== this.$16 &&
              !t.isFullscreen() &&
              !this.$37 &&
              (this.$67(),
              r("VideoPlayerExperiments").fixFeedVideosPlayOffscreen &&
                t.emit("enterWatchAndScroll"),
              this.$63(t, "autoplay_initiated", !1, !0),
              this.$55());
          }
        }),
        (t.$67 = function () {
          this.$47 = this.$48;
        }),
        (t.$81 = function (t) {
          (window.removeEventListener("scroll", this.$26),
            (this.$26 = t || null),
            window.addEventListener("scroll", this.$26),
            r("cancelAnimationFrame")(this.$32),
            delete this.$32);
        }),
        (t.$55 = function () {
          (window.removeEventListener("resize", this.$25),
            this.$81(),
            delete this.$19,
            (this.$29 = !1));
        }),
        (t.$66 = function (t) {
          (this.$55(),
            this.$4 && this.$16 !== t
              ? this.$83(t)
              : ((this.$46 = this.$59(t.getVideoNode())),
                this.$67(),
                this.$63(t, "user_initiated")));
        }),
        (t.$83 = function (t) {
          ((this.$23 = t), this.$84());
        }),
        (t.$63 = function (t, n, a, i) {
          var e,
            l = this;
          if (t.getSource() === "tahoe") {
            this.$37 = !1;
            var s = r("Tahoe").get();
            s && s.onExit("wns");
          }
          var u = !!this.$45;
          this.$45 &&
            (r("clearTimeout")(this.$45),
            (this.$45 = null),
            o("ReactDOM_DEPRECATED").unmountComponentAtNode_DEPRECATED(
              this.$85(),
            ),
            this.$86());
          var c =
            this.$1 && (a === !0 || i === !0) && !!this.$17 && this.$17 !== t;
          (c === !0 &&
            ((this.$36 = 0),
            (this.$35 = []),
            (this.$38 = []),
            (this.$41 = this.$17),
            (this.$43 = babelHelpers.extends({}, this.$8)),
            (this.$44 = this.$18),
            (this.$40 = this.$14),
            (this.$42 = this.$2),
            (this.$2 = null),
            this.$13 && this.$13.remove(),
            this.$31.release(),
            (this.$31 = new (r("SubscriptionsHandler"))())),
            (this.$17 = t),
            this.$87(this.$14 && this.$36 > 0 ? this.$88(this.$36) : t),
            this.$49
              ? this.$49.add(t.getVideoID())
              : (this.$49 = new Set([t.getVideoID()])),
            this.$14 &&
              this.$35.length > this.$36 &&
              this.$88(this.$36 + 1).preload(),
            (this.$15 = this.$16.getRootNode()));
          var d =
              (!this.$1 &&
                !((e = this.$52) != null && e.disableAlwaysStartMuted)) ||
              !this.$16.isMuted(),
            m = !this.$1 || this.$16.isState("playing"),
            p = this.$1 && this.$16.isState("finished");
          if (!this.$1 || c === !0) {
            if (
              ((a !== !0 || u) &&
                (u && (this.$46 = this.$59(this.$15)), this.$53(this.$15)),
              this.$9)
            ) {
              if (((this.$8 = this.$9), this.$8.videoRootNode)) {
                ((this.$18 = this.$89(
                  this.$8.dimensions,
                  this.$17.getVideoNode(),
                )),
                  r("DOM").appendContent(this.$8.videoRootNode, this.$18));
                var _ = r("DOM").scry(this.$8.videoRootNode, "._344x"),
                  f = _[0];
                f && r("DOM").remove(f);
              }
            } else
              ((this.$8 = {
                videoRootNode: this.$15.parentNode,
                dimensions: o("DOMDimensions").getElementDimensions(this.$15),
                source: this.$16.getSource(),
              }),
                (this.$18 = this.$89(
                  this.$8.dimensions,
                  this.$16.getVideoNode(),
                )),
                r("DOM").insertAfter(this.$15, this.$18));
            var g = null;
            (this.$9 && (g = this.$9.videoRootNode),
              !g && this.$15 && (g = this.$15.parentNode),
              g &&
                (this.$13 = r("EventListener").listen(g, "click", function () {
                  (l.$57(),
                    t.play("user_initiated"),
                    r("setTimeoutAcrossTransitions")(function () {
                      l.$68(t, "beginPlayback", { reason: "user_initiated" });
                    }, b));
                })),
              this.$16.pause("user_initiated"),
              this.$16.isPlayerVersion("silvercity") &&
                this.$16.detachRootNode());
            var h = this.$7 ? this.$7.width : this.$6,
              y = this.$7 ? this.$7.height : this.$5;
            (this.$16.removeOffsetStylings(),
              this.$16.setDimensions(h, y),
              (this.$4 = !0),
              c === !0 && this.$90(),
              (this.$14 = this.$91()),
              !this.$1 &&
                r("shouldWNSRenderToRHC")() &&
                r("Arbiter").inform("VideoWatchAndScrollController/init"),
              p && this.$74(this.$16));
          } else (this.$16.pause("user_initiated"), this.$65());
          if (
            (m && this.$16.play(n),
            d && (this.$16.unmute(), this.$16.getVolume() === 0))
          ) {
            var C =
              r("VideoPlayerVolumeSettings").getLastVolumeBeforeMute() || 1;
            (this.$16.setVolume(C), this.$16.emit("unmuteVideo"));
          }
          this.$16.updateSource("watch_scroll");
          var v = this.$33;
          ((!this.$1 || c === !0) &&
            v &&
            (v.abandonRequest(),
            this.$9 || v.reset(t.getVideoID(), t.getVideoChannelID()),
            this.$92(),
            this.$61(t),
            this.$62(t)),
            (this.$1 = !0),
            r("shouldWNSRenderToRHC")() &&
              r("Arbiter").inform("VideoWatchAndScrollController/start"));
        }),
        (t.$61 = function (n) {
          n.hasOption("WatchAndScroll", "isActive") ||
            n.registerOption("WatchAndScroll", "isActive", e.isActive);
        }),
        (t.$62 = function (t) {
          var e = this;
          this.$31.addSubscriptions(
            this.$75(t),
            t.addListener("VideoChannelController/enterChannel", function () {
              e.$31.release();
            }),
            t.addListener("WatchAndScroll/close", function () {
              e.$57();
            }),
          );
        }),
        (t.$93 = function () {
          this.$14 &&
            (this.$14.setState({ endScreenShown: !1 }),
            this.$16 && this.$16.play("user_initiated"));
        }),
        (t.$92 = function () {
          var e = this;
          this.$47 &&
            this.$33.fetchStories(!0, function (t, n) {
              var o = e.$14;
              if (!(!t || !t.length || !o)) {
                var a = o.getChannelVideoElements().concat(t);
                (o.setState({ channelVideoElements: a }, function () {
                  r("setTimeoutAcrossTransitions")(function () {
                    e.$88(e.$36 + 1).preload();
                  });
                }),
                  (e.$38 = e.$38.concat(n)));
              }
            });
        }),
        (t.$88 = function (t) {
          var e = this.$14 ? this.$14.getChannelVideoElements() : [],
            n = [this.$17].concat(this.$35),
            r = null;
          return (
            n.forEach(function (n) {
              e[t].contains(n.getRootNode()) && (r = n);
            }),
            r || c(0, 3965),
            r
          );
        }),
        (t.$94 = function () {
          if (R && R.$50)
            for (var e = 0; e < R.$35.length; e++) {
              var t = R.$35[e];
              if (R.$50.contains(t.getRootNode())) return t;
            }
          return null;
        }),
        (t.$65 = function () {
          var e = this.$16.isMuted();
          (this.$16.pause("user_initiated"),
            this.$16 !== this.$17 && this.$16.abortLoading(),
            this.$87(this.$88(this.$36)),
            (this.$15 = this.$16.getRootNode()));
          var t = this.$16.getVideoNode(),
            n = parseFloat(t.getAttribute("data-original-aspect-ratio"));
          n || (n = 16 / 9);
          var o = this.$46;
          (o || (o = this.$59(t)),
            this.$14 && (o.width = this.$14.getWidth()),
            (o.height = o.width / n),
            r("VideoPlayerExperiments").rhcWNSEnabled
              ? (o.height = Math.min(o.height, L()))
              : o.height > h && ((o.height = h), (o.width = o.height * n)),
            this.$16.removeOffsetStylings(),
            this.$16.setDimensions(o.width, o.height),
            this.$53(t),
            this.$14 &&
              this.$14.setState(
                {
                  playbackFinished: !1,
                  videoIndex: this.$36,
                  width: o.width,
                  height: o.height,
                },
                function () {
                  r("shouldWNSRenderToRHC")() &&
                    r("Arbiter").inform("VideoWatchAndScrollController/resize");
                },
              ),
            (this.$46 = o),
            this.$16.play("autoplay_initiated"),
            e && this.$16.mute(),
            this.$35.length <= this.$36
              ? this.$92()
              : this.$88(this.$36 + 1).preload());
        }),
        (t.$95 = function () {
          var e = _;
          return (this.$12 && (e += this.$12.scrollHeight), Math.max(e, g));
        }),
        (t.$53 = function (t) {
          if (this.$46) {
            this.$7 = {
              height: this.$46.height,
              left: this.$46.left,
              top: this.$46.top,
              width: this.$46.width,
            };
            return;
          }
          if (t) {
            var e = t.scrollWidth,
              n = t.scrollHeight,
              r = this.$79(t),
              o = (r * n) / e;
            ((this.$7.height = o), (this.$7.width = r));
          } else
            this.$7 = {
              height: this.$5,
              left: _,
              top: this.$95(),
              width: this.$6,
            };
        }),
        (t.$89 = function (t, n) {
          var e = r("DOM").create("canvas", { className: "_57n6" });
          if (
            ((e.height = t.height),
            (e.width = t.width),
            e.getContext && e.getContext("2d"))
          ) {
            if (n.scrollHeight === 0) {
              var o = r("DOM").scry(n.parentNode, "._3t5i"),
                a = o[0];
              if (a) {
                var i = e.getContext("2d");
                i.drawImage(a, 0, 0);
              }
            } else if (n instanceof window.HTMLVideoElement) {
              var l = new (r("VideoFrameBuffer"))(e, n);
              l.updateFrameBuffer();
            }
          }
          var s = r("DOM").create("div");
          s.appendChild(e);
          var u = r("DOM").create("i", { className: "_1jto _bsl _3htz" });
          return (s.appendChild(u), s);
        }),
        (t.$57 = function () {
          (this.$19 && this.$55(), this.$16.pause("user_initiated"));
          var e = this.$94();
          (e && e.pause("user_initiated"), R && (R.$50 = null), this.$84());
        }),
        (t.$96 = function () {
          this.$16.emit("WatchAndScroll/collapse");
        }),
        (t.$97 = function () {
          var e = this.$89(this.$7, this.$16.getVideoNode(), !0);
          (this.$14 &&
            this.$14.setState({ fadeOut: !0, fadeOutPlaceholder: e }),
            this.$98(this.$17, this.$8),
            this.$18 && (r("DOM").remove(this.$18), (this.$18 = null)),
            this.$13 && (this.$13.remove(), (this.$13 = null)));
        }),
        (t.$98 = function (t, n, a) {
          var e;
          (t.pause("user_initiated"),
            t.isPlayerVersion("silvercity") && t.detachRootNode(),
            a && o("ReactDOM_DEPRECATED").unmountComponentAtNode_DEPRECATED(a),
            n.dimensions &&
              n.dimensions.width &&
              n.dimensions.height &&
              (t.addOffsetStylings(),
              t.setDimensions(n.dimensions.width, n.dimensions.height)),
            n.videoRootNode &&
              r("DOM").appendContent(n.videoRootNode, t.getRootNode()),
            t.emit("WatchAndScroll/positionUpdated"),
            t.updateSource(n.source || "inline"));
          var i = this.$73(t.getVideoNode()),
            l = i.top,
            s = r("getViewportDimensions")().height;
          (!((e = this.$52) != null && e.disableMuteOnExit) &&
            t.getSource() !== "permalink" &&
            t.mute(),
            l < window.scrollY || l > window.scrollY + s || this.$51 === !1
              ? (t.pause("autoplay_initiated"), t.emit("resumeAutoplay"))
              : t.play("user_initiated"));
        }),
        (t.$90 = function () {
          var e = this;
          (this.$4 || c(0, 3966),
            this.$40 || c(0, 3967),
            this.$40.setState({ fadeOut: !0 }),
            (this.$45 = r("setTimeoutAcrossTransitions")(function () {
              (e.$41 || c(0, 3968),
                e.$42 || c(0, 3969),
                e.$98(e.$41, e.$43, e.$42),
                e.$44 && (r("DOM").remove(e.$44), (e.$44 = null)),
                (e.$45 = null));
            }, b)));
        }),
        (t.$56 = function () {
          var e = this;
          (this.$4 || c(0, 3966),
            this.$14 || c(0, 3970),
            !this.$23 &&
              r("shouldWNSRenderToRHC")() &&
              r("Arbiter").inform("VideoWatchAndScrollController/exit"),
            this.$35.forEach(function (e) {
              return e.abortLoading();
            }),
            this.$97(),
            (this.$45 = r("setTimeoutAcrossTransitions")(function () {
              (o("ReactDOM_DEPRECATED").unmountComponentAtNode_DEPRECATED(
                e.$85(),
              ),
                e.$86());
            }, b)));
        }),
        (t.$86 = function () {
          (this.$4 || c(0, 3966),
            this.$33 && this.$33.abandonRequest(),
            (this.$36 = 0),
            (this.$1 = !1),
            this.$31.release(),
            (this.$31 = new (r("SubscriptionsHandler"))()),
            (this.$8 = {}),
            (this.$16 = null),
            (this.$17 = null),
            (this.$4 = !1),
            (this.$35 = []),
            (this.$38 = []),
            (this.$14 = null),
            r("clearTimeout")(this.$45),
            (this.$45 = null),
            this.$41 &&
              this.$42 &&
              this.$43 &&
              this.$98(this.$41, this.$43, this.$42),
            (this.$41 = null),
            (this.$43 = {}),
            this.$44 && (r("DOM").remove(this.$44), (this.$44 = null)),
            r("VideoAutoplayControllerX").setShouldAutoplay(!0),
            (this.$2 = null),
            this.$23 &&
              ((this.$46 = this.$59(this.$23.getVideoNode())),
              this.$67(),
              this.$63(this.$23, "user_initiated"),
              (this.$23 = null)),
            (this.$29 = !1),
            (this.$46 = null));
        }),
        (t.$91 = function () {
          var e = this;
          return (
            r("vulture")("5JMibEZjzxbD4RM0DtgE93Vyris="),
            o("ReactDOM_DEPRECATED").render_DEPRECATED(
              d.jsx(r("VideoWatchAndScrollContainer.react"), {
                isDrawerEnabled:
                  r("VideoPlayerExperiments").rhcWNSDrawerEnabled &&
                  r("shouldWNSRenderToRHC")() &&
                  r("VideoPlayerExperiments").rhcWNSExpandToTahoe,
                isLiveVideo: function () {
                  return e.$16.isLiveVideo();
                },
                initialPosition: this.$7,
                initialVideoElement: this.$15,
                onChannelNavigation: this.$99.bind(this),
                onClick: this.$100.bind(this),
                onClose: this.$57.bind(this),
                onCollapse: this.$96.bind(this),
                onDrop: this.$101.bind(this),
                onGrab: this.$102.bind(this),
                onInitialPositionUpdate: this.$103.bind(this),
                onLoadUpNext: this.registerUpNextUnit.bind(this),
                onPlayNext: this.$104.bind(this),
                onReplay: this.$93.bind(this),
                viewedVideos: Array.from(this.$49),
                videoID: this.$16.getVideoID(),
              }),
              this.$85(),
            )
          );
        }),
        (t.$84 = function () {
          this.$17 && this.$17.emit("exitWatchAndScroll");
          var e = this.$94();
          e && e.emit("exitWatchAndScroll");
        }),
        (t.$99 = function (t) {
          if (t > 0 && this.$35.length <= this.$36) {
            r("shouldWNSRenderToRHC")() || this.$57();
            return;
          }
          ((this.$36 += t), this.$65());
        }),
        (t.$104 = function () {
          var e = this.$94();
          e &&
            ((this.$50 = null),
            e.emit("crossfadeWatchAndScroll"),
            this.$51 === !0
              ? e.play("autoplay_initiated")
              : (e.preload(), e.emit("showOverlay")));
        }),
        (t.$102 = function () {
          this.$19 && this.$55();
          var e = this.$16.getOption("VideoWithLiveBroadcast", "isLive");
          e ||
            ((this.$24 = this.$16.isState("playing")),
            this.$16.pause("user_initiated"));
        }),
        (t.$101 = function () {
          var e = this.$16.getOption("VideoWithLiveBroadcast", "isLive");
          e ||
            (this.$24 === !0 && this.$16.play("user_initiated"),
            (this.$24 = null));
        }),
        (t.$100 = function () {
          var e = this.$16.getOption("VideoWithLiveBroadcast", "isLive");
          this.$19 ||
            e ||
            (this.$16.isState("playing")
              ? this.$16.pause("user_initiated")
              : (this.$16.isState("paused") ||
                  this.$16.isState("finished") ||
                  this.$16.isState("ready")) &&
                this.$16.play("user_initiated"));
        }),
        (t.$87 = function (t) {
          var e = this;
          this.$16 !== t &&
            (r("VideoPlayerExperiments").rhcWNSEnabled &&
              t.addListener("WatchAndScroll/collapse", function () {
                if (t != e.$16) {
                  t.removeCurrentListener();
                  return;
                }
                r("shouldWNSRenderToRHC")() &&
                  r("Arbiter").inform("VideoWatchAndScrollController/collapse");
              }),
            (this.$16 = t));
        }),
        (t.pauseActiveVideo = function (t) {
          this.$16 && this.$16.pause(t);
        }),
        (e.pauseActiveVideo = function (t) {
          (t === void 0 && (t = "user_initiated"), R && R.pauseActiveVideo(t));
        }),
        (t.playActiveVideo = function (t) {
          this.$16 && this.$16.play(t);
        }),
        (t.registerUpNextUnit = function (t, n) {
          var e = r("DOM").find(t, "._3iqr");
          !R ||
            !e ||
            ((R.$50 = t),
            (R.$51 = n),
            r("EventListener").listen(e, "click", function (e) {
              if (R) {
                var t = R.$94();
                t &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  (R.$50 = null),
                  t.emit("crossfadeWatchAndScroll"),
                  t.play("user_initiated"));
              }
            }));
        }),
        (e.playActiveVideo = function (t) {
          (t === void 0 && (t = "user_initiated"), R && R.playActiveVideo(t));
        }),
        (t.$103 = function (t) {
          ((this.$7 = t),
            this.$14 &&
              !this.$14.getFadeOutStatus() &&
              (this.$16.removeOffsetStylings(),
              this.$16.setDimensions(t.width, t.height),
              this.$16.emit("WatchAndScroll/positionUpdated")));
        }),
        (t.$105 = function () {
          var e = r("DOM").create("div");
          return (
            r("shouldWNSRenderToRHC")()
              ? r("ifRequired")("RHCVideoWNSController", function (t) {
                  return t.mount(e);
                })
              : r("DOM").appendContent(document.body, e),
            e
          );
        }),
        (t.$85 = function () {
          return (this.$2 || (this.$2 = this.$105()), this.$2);
        }),
        e
      );
    })();
    l.default = E;
  },
  98,
);
