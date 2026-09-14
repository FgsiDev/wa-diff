__d(
  "VideoAutoplayControllerX",
  [
    "csx",
    "AsyncRequest",
    "DOM",
    "DocumentFocusForMutedVideoAutoplayRule",
    "Event",
    "Network",
    "Run",
    "ShakaConstants",
    "SubscriptionsHandler",
    "ThisControllerNoLongerExists",
    "VideoAutoplayControllerAbortLoadingHelper",
    "VideoAutoplayControllerBase",
    "VideoPlayerExperiments",
    "XVideoAutoplayNuxAsyncController",
    "clearTimeout",
    "destroyOnUnload",
    "getViewportDimensions",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = null,
      u = !1;
    function c(e) {
      return e
        ? !0
        : !r("VideoPlayerExperiments").delayAutoplayUntilAfterLoad || u;
    }
    var d = (function (t) {
      function n() {
        var n;
        ((n =
          t.call(this, r("VideoPlayerExperiments").videoPollingFrequency) ||
          this),
          (n.$VideoAutoplayControllerX$p_4 = !1),
          (n.$VideoAutoplayControllerX$p_5 = !1),
          (n.$VideoAutoplayControllerX$p_6 = 0),
          (n.$VideoAutoplayControllerX$p_17 = new (r(
            "VideoAutoplayControllerAbortLoadingHelper",
          ))()),
          (n.$VideoAutoplayControllerX$p_10 = new (r(
            "SubscriptionsHandler",
          ))()),
          (n.$VideoAutoplayControllerX$p_18 = new (r(
            "SubscriptionsHandler",
          ))()),
          (n.$VideoAutoplayControllerX$p_12 = !0),
          (n.$VideoAutoplayControllerX$p_9 = !0),
          (n.$VideoAutoplayControllerX$p_13 = !0),
          (n.$VideoAutoplayControllerX$p_2 = null),
          (n.$VideoAutoplayControllerX$p_1 = null),
          (n.$VideoAutoplayControllerX$p_14 = !1),
          (n.$VideoAutoplayControllerX$p_3 = null),
          (n.$VideoAutoplayControllerX$p_7 = !1),
          (n.$VideoAutoplayControllerX$p_16 = !1),
          (n.$VideoAutoplayControllerX$p_15 = !1));
        var a = r("XVideoAutoplayNuxAsyncController").getURIBuilder().getURI();
        return (
          new (r("AsyncRequest"))(a).setMethod("GET").setReadOnly(!0).send(),
          r("destroyOnUnload")(function () {
            (n.$VideoAutoplayControllerX$p_19(),
              r("VideoPlayerExperiments").disableAutoplayOnHomePgUpPgDownEnd &&
                (n.$VideoAutoplayControllerX$p_11 &&
                  r("clearTimeout")(n.$VideoAutoplayControllerX$p_11),
                n.$VideoAutoplayControllerX$p_8.remove()),
              n === e && (e = null));
          }),
          o("Run").onAfterLoad(function () {
            ((u = !0),
              r("VideoPlayerExperiments").delayAutoplayUntilAfterLoad &&
                e &&
                e.updateAutoplay(),
              document.hasFocus() || r("Event").fire(window, "blur"),
              r("VideoPlayerExperiments").disableAutoplayOnHomePgUpPgDownEnd &&
                n.$VideoAutoplayControllerX$p_20());
          }),
          n.$VideoAutoplayControllerX$p_21(),
          n
        );
      }
      (babelHelpers.inheritsLoose(n, t),
        (n.$VideoAutoplayControllerX$p_22 = function (t) {
          return r("VideoPlayerExperiments").fixVPCCallBeforeLoaded
            ? !(t.isState("fallback") || t.isState("loading"))
            : !0;
        }));
      var a = n.prototype;
      return (
        (a.$VideoAutoplayControllerX$p_20 = function () {
          var e = this,
            t = 33,
            n = 34,
            o = 35,
            a = 36;
          this.$VideoAutoplayControllerX$p_11 = null;
          var i = function () {
            (e.$VideoAutoplayControllerX$p_23(e.$VideoAutoplayControllerX$p_9),
              r("clearTimeout")(e.$VideoAutoplayControllerX$p_11),
              (e.$VideoAutoplayControllerX$p_11 = null));
          };
          this.$VideoAutoplayControllerX$p_8 = r("Event").listen(
            document.body,
            "keydown",
            function (l) {
              var s = -1;
              switch (l.keyCode) {
                case t:
                case n:
                  s = r(
                    "VideoPlayerExperiments",
                  ).pressPgUpPgDownAutoplayShutoffInterval;
                  break;
                case o:
                case a:
                  s = r(
                    "VideoPlayerExperiments",
                  ).pressHomeEndAutoplayShutoffInterval;
                  break;
                default:
                  break;
              }
              s > -1 &&
                (e.$VideoAutoplayControllerX$p_11
                  ? (r("clearTimeout")(e.$VideoAutoplayControllerX$p_11),
                    (e.$VideoAutoplayControllerX$p_11 = r("setTimeout")(i, s)))
                  : e.$VideoAutoplayControllerX$p_12 &&
                    (e.$VideoAutoplayControllerX$p_23(!1),
                    (e.$VideoAutoplayControllerX$p_11 = r("setTimeout")(
                      i,
                      s,
                    ))));
            },
          );
        }),
        (a.$VideoAutoplayControllerX$p_23 = function (t) {
          ((this.$VideoAutoplayControllerX$p_12 = t), this.updateAutoplay());
        }),
        (n.registerVideoUnit = function (o) {
          (e == null && (e = new n()),
            e.addSubscriberVideoUnit(),
            e.registerDefaultAutoplayRules(o),
            e.addVideoUnit(o));
          var t = new (r("SubscriptionsHandler"))();
          return (
            t.addSubscriptions.apply(t, e.$VideoAutoplayControllerX$p_24(o)),
            e.$VideoAutoplayControllerX$p_25(),
            o.isVisible() &&
              c(o.shouldImmediatelyAutoplayOnRegister()) &&
              e.updateAutoplay(),
            e.shouldRestoreAllSubsequentStreamBufferSizes() &&
              e.restoreStreamBufferSize(),
            function () {
              (e && e.removeVideoUnit(o),
                t.release(),
                e &&
                  o === e.getPlayingVideoUnit() &&
                  (e.$VideoAutoplayControllerX$p_18.release(),
                  e.setPlayingVideoUnit(null)));
            }
          );
        }),
        (n.setShouldAutoplay = function (r) {
          (e == null && (e = new n()),
            (e.$VideoAutoplayControllerX$p_12 = r),
            (e.$VideoAutoplayControllerX$p_13 = r),
            (e.$VideoAutoplayControllerX$p_9 = r),
            e.updateAutoplay());
        }),
        (a.$VideoAutoplayControllerX$p_19 = function () {
          (this.$VideoAutoplayControllerX$p_10.release(),
            this.$VideoAutoplayControllerX$p_18.release());
        }),
        (n.setAutoplayNux = function (n, o) {
          var t = e;
          if (t) {
            ((t.$VideoAutoplayControllerX$p_2 = n),
              (t.$VideoAutoplayControllerX$p_1 = o),
              (t.$VideoAutoplayControllerX$p_14 = !0));
            var a = r("DOM").find(o.getContentRoot(), "._5cqr");
            r("Event").listen(a, "click", function () {
              t.$VideoAutoplayControllerX$p_26();
            });
            var i = r("DOM").scry(o.getContentRoot(), "._36gl")[0];
            i &&
              r("Event").listen(i, "click", function () {
                t.$VideoAutoplayControllerX$p_26();
              });
          }
        }),
        (a.$VideoAutoplayControllerX$p_26 = function () {
          (this.$VideoAutoplayControllerX$p_1 &&
            this.$VideoAutoplayControllerX$p_1.hide(),
            (this.$VideoAutoplayControllerX$p_14 = !1));
          var e = o("ThisControllerNoLongerExists")
            .__DEADBUILDER__("flhg1h0jl")
            .getURI();
          new (r("AsyncRequest"))(e).setAllowCrossPageTransition().send();
        }),
        (a.registerDefaultAutoplayRules = function (t) {
          r("VideoPlayerExperiments").useBringYourOwnAutoplayRule &&
            r("VideoPlayerExperiments").pauseMutedIfNoDocumentFocus &&
            t.registerAutoplayRule(
              new (r("DocumentFocusForMutedVideoAutoplayRule"))(t),
            );
        }),
        (a.setupPlayingVideoUnitSubscriptions = function () {
          var e = this,
            t = this.getPlayingVideoUnit();
          t &&
            t.addListener &&
            (this.$VideoAutoplayControllerX$p_10.release(),
            this.$VideoAutoplayControllerX$p_10.engage(),
            t.isLooping() ||
              this.$VideoAutoplayControllerX$p_10.addSubscriptions(
                t.addListener("finishPlayback", function () {
                  e.setPlayingVideoUnit(null);
                }),
              ),
            this.$VideoAutoplayControllerX$p_10.addSubscriptions(
              t.addListener("turnOffAutoplay", function () {
                e.setPlayingVideoUnit(null);
              }),
              t.addListener("pausePlayback", function () {
                e.$VideoAutoplayControllerX$p_25();
              }),
              t.addListener("finishPlayback", function () {
                e.$VideoAutoplayControllerX$p_25();
              }),
              r("Network").addListener("online", function () {
                e.$VideoAutoplayControllerX$p_25();
              }),
              r("Network").addListener("offline", function () {
                e.$VideoAutoplayControllerX$p_25();
              }),
            ));
        }),
        (a.$VideoAutoplayControllerX$p_25 = function () {
          var e = this;
          if (r("VideoPlayerExperiments").webVideosBlockAutoplayWhenOffline)
            if (r("Network").isOnline())
              this.$VideoAutoplayControllerX$p_12 =
                this.$VideoAutoplayControllerX$p_13;
            else {
              ((this.$VideoAutoplayControllerX$p_13 =
                this.$VideoAutoplayControllerX$p_12),
                (this.$VideoAutoplayControllerX$p_12 = !1));
              return;
            }
          for (var t = this.getVideoUnits(), o = 0; o < t.length; o++) {
            var a = t[o].getVideoPlayerController();
            a &&
              (a.getDataInsertionPosition() === "0" &&
                ((this.$VideoAutoplayControllerX$p_7 = !0),
                this.$VideoAutoplayControllerX$p_16 === !1 &&
                  (n.$VideoAutoplayControllerX$p_22(a) &&
                    a.restoreStreamBufferSize(),
                  a.once("beginPlayback", function () {
                    ((e.$VideoAutoplayControllerX$p_15 = !0),
                      e.restoreStreamBufferSize());
                  }),
                  (this.$VideoAutoplayControllerX$p_16 = !0))),
              r("VideoPlayerExperiments").autoplayBlockBlacklist ||
                a.updateAutoplayRestrained());
          }
          this.$VideoAutoplayControllerX$p_7 || this.restoreStreamBufferSize();
        }),
        (a.shouldRestoreAllSubsequentStreamBufferSizes = function () {
          return this.$VideoAutoplayControllerX$p_7
            ? this.$VideoAutoplayControllerX$p_15
            : !0;
        }),
        (a.restoreStreamBufferSize = function () {
          for (var e = this.getVideoUnits(), t = 0; t < e.length; t++) {
            var r = e[t].getVideoPlayerController();
            r &&
              n.$VideoAutoplayControllerX$p_22(r) &&
              r.restoreStreamBufferSize();
          }
        }),
        (a.$VideoAutoplayControllerX$p_24 = function (t) {
          var e = this,
            n;
          if (!t.addListener) return [];
          var r = function () {
              if (!t.isMuted() && t.isState("playing")) {
                var n = e.$VideoAutoplayControllerX$p_3;
                if (n && n !== t) {
                  var r = n.getVideoPlayerController();
                  if (r) {
                    var o = r.getOption("VideoWithLiveBroadcast", "isLive");
                    o ? r.mute() : r.pause("user_initiated");
                  }
                  try {
                    n.pause("user_initiated");
                  } catch (e) {}
                }
                e.$VideoAutoplayControllerX$p_3 = t;
              }
            },
            o = [
              t.addListener("beginPlayback", r),
              t.addListener("changeVolume", r),
              t.addListener("unmuteVideo", r),
            ];
          return (
            (n = this.$VideoAutoplayControllerX$p_18).addSubscriptions.apply(
              n,
              o,
            ),
            o
          );
        }),
        (a.$VideoAutoplayControllerX$p_27 = function (t) {
          var e = this,
            n = t.length,
            o = null;
          if (n === 1)
            ((o = t[0]),
              (o = o.isAutoplayable() ? o : null),
              r("VideoPlayerExperiments").useBringYourOwnAutoplayRule &&
                o &&
                (o = this.$VideoAutoplayControllerX$p_28(o) ? o : null));
          else if (n > 1) {
            var a = r("getViewportDimensions")().height / 2;
            t.forEach(function (t) {
              if (
                t.isAutoplayable() &&
                !(
                  r("VideoPlayerExperiments").useBringYourOwnAutoplayRule &&
                  !e.$VideoAutoplayControllerX$p_28(t)
                )
              ) {
                var n = t.getDOMPosition(),
                  i = n.y + n.height / 2,
                  l = Math.abs(i - a);
                ((t.playPriority = l),
                  (!o ||
                    o.playPriority == null ||
                    t.playPriority < o.playPriority) &&
                    (o = t));
              }
            });
          }
          return o;
        }),
        (a.$VideoAutoplayControllerX$p_28 = function (t) {
          for (var e = !0, n = t.getAutoplayRules(), r = 0; r < n.length; ++r) {
            var o = n[r].calculateAutoplayScore();
            if (((e = o !== 0), !e)) break;
          }
          return e;
        }),
        (a.showAutoplayNUX = function (t) {
          var e = this.$VideoAutoplayControllerX$p_1;
          if (e && !e.isShown()) {
            var n = t.getVideoPlayerController(),
              a = n ? n.getRootNode() : null;
            (r("DOM").prependContent(a, this.$VideoAutoplayControllerX$p_2),
              e.show());
            var i = o("ThisControllerNoLongerExists")
              .__DEADBUILDER__("vpqic3cf")
              .getURI();
            new (r("AsyncRequest"))(i).setAllowCrossPageTransition().send();
          }
          this.$VideoAutoplayControllerX$p_14 = !1;
        }),
        (a.addVideoUnit = function (n) {
          (n && t.prototype.addVideoUnit.call(this, n),
            r("VideoPlayerExperiments").decoupleAbortLoadingFromPause &&
              n &&
              this.$VideoAutoplayControllerX$p_17.addVideoUnit(n));
        }),
        (a.removeVideoUnit = function (n) {
          (n && t.prototype.removeVideoUnit.call(this, n),
            r("VideoPlayerExperiments").decoupleAbortLoadingFromPause &&
              n &&
              this.$VideoAutoplayControllerX$p_17.removeVideoUnit(n));
        }),
        (a.$VideoAutoplayControllerX$p_21 = function () {
          var e = this;
          (this.$VideoAutoplayControllerX$p_29(),
            r("setTimeout")(function () {
              e.$VideoAutoplayControllerX$p_21();
            }, r("VideoPlayerExperiments").videoPollingFrequency));
        }),
        (a.$VideoAutoplayControllerX$p_29 = function () {
          var e = this.$VideoAutoplayControllerX$p_3,
            t = Date.now(),
            n = t - this.$VideoAutoplayControllerX$p_6,
            o = r("ShakaConstants").numbers.autoplay_start_video_interval;
          if (
            (this.$VideoAutoplayControllerX$p_4 &&
              r("VideoPlayerExperiments").pauseAudioUnitsOffscreen &&
              e &&
              e.shouldPauseWhenScrolledOffscreen() &&
              !e.isVisible() &&
              e.pause("autoplay_initiated"),
            !this.$VideoAutoplayControllerX$p_12)
          ) {
            this.pausePlayingVideo("autoplay_initiated");
            return;
          }
          var a = this.getVideoUnits(),
            i = this.getPlayingVideoUnit(),
            l = this.$VideoAutoplayControllerX$p_4 ? null : i;
          if (
            (this.$VideoAutoplayControllerX$p_4 &&
              i &&
              i.isVisible() &&
              (l = this.$VideoAutoplayControllerX$p_27([i])),
            i && i !== l && this.pausePlayingVideo("autoplay_initiated"),
            n >= o)
          ) {
            if (
              ((this.$VideoAutoplayControllerX$p_6 = t),
              this.$VideoAutoplayControllerX$p_5)
            ) {
              for (var s = this.getVisibleUnits(), u = 0; u < a.length; ++u)
                a[u].isMuted() &&
                  s.indexOf(a[u]) === -1 &&
                  a[u].pause("autoplay_initiated");
              ((l = this.$VideoAutoplayControllerX$p_27(s)),
                l &&
                  l !== i &&
                  (i && this.pausePlayingVideo("autoplay_initiated"),
                  this.playVideo(l, "autoplay_initiated"),
                  this.$VideoAutoplayControllerX$p_14 &&
                    this.showAutoplayNUX(l)),
                this.getClosestVideoUnits(
                  r("VideoPlayerExperiments").preloadVideosCount,
                ).forEach(function (e) {
                  return e.preload();
                }),
                l &&
                  r("VideoPlayerExperiments")
                    .adjustPriorityBasedOnAutoplayIndex &&
                  this.$VideoAutoplayControllerX$p_30(l));
            }
            this.$VideoAutoplayControllerX$p_5 = !1;
          }
          this.$VideoAutoplayControllerX$p_4 = !1;
        }),
        (a.updateAutoplay = function () {
          ((this.$VideoAutoplayControllerX$p_4 = !0),
            (this.$VideoAutoplayControllerX$p_5 = !0));
        }),
        (a.$VideoAutoplayControllerX$p_30 = function (t) {
          var e = -1,
            n = this.getVideoUnits();
          if (t) {
            var o = n.findIndex(function (e) {
              return e === t;
            });
            o >= 0 && (e = o + 1);
          } else
            for (
              var a = r("getViewportDimensions")().height / 2, i = 0;
              i < n.length;
              i++
            ) {
              var l = n[i],
                s = l.getDOMPosition(),
                u = s.y + s.height / 2;
              if (u - a > 0) {
                e = i;
                break;
              }
            }
          if (e !== -1)
            for (var c = 0; c < n.length; c++) {
              var d = n[c],
                m = d.getVideoPlayerController();
              m &&
                (c === e
                  ? m.setVideoPriorityAdjustment(0.1)
                  : d === t
                    ? m.setVideoPriorityAdjustment(
                        r("VideoPlayerExperiments").offsetToBestUnitPriority,
                      )
                    : r("VideoPlayerExperiments").dePrioritizeUpfoldVideos &&
                        c < e
                      ? m.setVideoPriorityAdjustment(-0.5)
                      : m.setVideoPriorityAdjustment(0));
            }
        }),
        n
      );
    })(r("VideoAutoplayControllerBase"));
    l.default = d;
  },
  98,
);
