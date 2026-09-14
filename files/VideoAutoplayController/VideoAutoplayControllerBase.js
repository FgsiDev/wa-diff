__d(
  "VideoAutoplayControllerBase",
  [
    "Arbiter",
    "DesktopHscrollUnitEventConstants",
    "Event",
    "ShakaConstants",
    "SubscriptionsHandler",
    "VideoAutoplayControllerAbortLoadingHelper",
    "VideoPlayerExperiments",
    "VideoPlayerShakaGlobalConfig",
    "VideoScrollTracker",
    "Visibility",
    "clearTimeout",
    "debounce",
    "destroyOnUnload",
    "emptyFunction",
    "setTimeout",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = [];
      return function () {
        var r = Date.now();
        n.unshift(r);
        for (var o = 0; n[++o] + t > r; );
        return ((n = n.slice(0, o)), n.length <= e);
      };
    }
    function s(e, t, n) {
      var o = null;
      return function () {
        for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
          i[l] = arguments[l];
        if (t())
          return (e.apply(void 0, i), r("emptyFunction").thatReturnsFalse);
        if (!o) {
          var s = r("setTimeout")(function () {
            ((o = null), e.apply(void 0, i));
          }, n);
          o = function () {
            return o ? (r("clearTimeout")(s), (o = null), !0) : !1;
          };
        }
        return o;
      };
    }
    var u = (function () {
      function t(t) {
        var n = this;
        ((this.$8 = r("emptyFunction")),
          (this.$9 = r("emptyFunction")),
          (this.$3 = null),
          (this.$2 = null),
          (this.$10 = []),
          (this.$1 = t),
          (this.$4 = null),
          (this.$5 = new (r("SubscriptionsHandler"))()),
          (this.$11 = new (r("VideoScrollTracker"))(document.body)),
          this.$11.start(),
          r("destroyOnUnload")(function () {
            ((n.$10 = []),
              (n.$3 = null),
              n.$4 && (n.$4.remove(), (n.$4 = null)),
              n.$5.release(),
              n.$11 && n.$11.destroy());
          }),
          r("VideoPlayerExperiments").autoplayMaxCallsPerWindow &&
            (this.$6 = s(
              function (e) {
                var t = n.$3;
                t && t.playWithoutUnmute(e);
              },
              e(
                r("VideoPlayerExperiments").autoplayMaxCallsPerWindow,
                r("VideoPlayerExperiments").autoplayThrottleWindow,
              ),
              r("VideoPlayerExperiments").autoplayThrottleDelay,
            )),
          (this.$7 = r("emptyFunction").thatReturnsFalse));
      }
      var n = t.prototype;
      return (
        (n.getVideoUnits = function () {
          return this.$10;
        }),
        (n.addVideoUnit = function (t) {
          var e = this,
            n = t.getVideoPlayerController();
          (n &&
            n.registerOption(
              "VideoAutoplayControllerBase/VideoScrollTracker",
              "getLastScrollDirection",
              function () {
                return e.getLastScrollDirection();
              },
            ),
            this.$10.push(t));
        }),
        (n.removeVideoUnit = function (t) {
          var e = this.$10.findIndex(function (e) {
            return e === t;
          });
          if (e > -1) {
            this.$10.splice(e, 1);
            var n = t.getVideoPlayerController();
            n &&
              n.unregisterOption(
                "VideoAutoplayControllerBase/VideoScrollTracker",
                "getLastScrollDirection",
              );
          }
        }),
        (n.getPlayingVideoUnit = function () {
          return this.$3;
        }),
        (n.setPlayingVideoUnit = function (t) {
          ((this.$3 = t), this.$3 && this.setupPlayingVideoUnitSubscriptions());
        }),
        (n.getLastScrollDirection = function () {
          return this.$11 ? this.$11.getLastScrollDirection() : null;
        }),
        (n.playVideo = function (t, n) {
          if (
            r("VideoPlayerExperiments").disableAutoplayForInactiveTab &&
            r("Visibility").isHidden()
          ) {
            if (r("VideoPlayerExperiments").removeHiddenVideoTracking) {
              this.setPlayingVideoUnit(null);
              return;
            }
            this.$2 = t;
            return;
          }
          if ((this.setPlayingVideoUnit(t), this.$3)) {
            var e = this.$6;
            e ? (this.$7 = e.call(this, n)) : this.$3.playWithoutUnmute(n);
          }
        }),
        (n.setupPlayingVideoUnitSubscriptions = function () {
          throw new Error("Should be overridden");
        }),
        (n.addSubscriberVideoUnit = function () {
          var e = this;
          if (!this.getVideoUnits().length) {
            var t;
            (this.$5.addSubscriptions(
              r("Event").listen(window, "resize", function () {
                return e.updateAutoplay();
              }),
              r("Event").listen(window, "blur", function () {
                return e.$12();
              }),
              r("Event").listen(window, "focus", function () {
                return e.$13();
              }),
              (t = r("Visibility")).addListener(t.HIDDEN, function () {
                return e.$12();
              }),
              t.addListener(t.VISIBLE, function () {
                return e.$13();
              }),
              r("Arbiter").subscribe(
                o("DesktopHscrollUnitEventConstants").HSCROLL_ITEM_SHOWN_EVENT,
                function () {
                  return e.updateAutoplay();
                },
              ),
            ),
              this.$14() || this.$15());
          }
        }),
        (n.$12 = function () {
          r("VideoPlayerExperiments").removeHiddenVideoTracking
            ? this.$16("page_visibility_initiated")
            : this.$2 ||
              ((this.$2 = this.getPlayingVideoUnit()),
              this.$16("page_visibility_initiated"));
        }),
        (n.$13 = function () {
          r("VideoPlayerExperiments").removeHiddenVideoTracking
            ? this.updateAutoplay()
            : this.$2 &&
              (this.playVideo(this.$2, "page_visibility_initiated"),
              (this.$2 = null));
        }),
        (n.$15 = function () {
          var e = this,
            t = function () {
              (e.$11 && e.$11.onScroll(), e.updateAutoplay());
            };
          (this.$4 && this.$4.remove(),
            (this.$8 = r("throttle")(t, this.$1)),
            (this.$9 = r("debounce")(function () {
              return e.updateAutoplay();
            }, this.$1)));
          var n = function () {
            return t();
          };
          this.$4 = r("Event").listen(window, "scroll", n);
        }),
        (n.$14 = function () {
          return !!this.$4;
        }),
        (n.getClosestVideoUnits = function (t) {
          return this.$10
            .filter(function (e) {
              return e.getDistanceToViewport() >= 0;
            })
            .sort(function (e, t) {
              return e.getDistanceToViewport() - t.getDistanceToViewport();
            })
            .slice(0, t);
        }),
        (n.getVisibleUnits = function () {
          var e = [];
          return (
            this.$10.forEach(function (t) {
              var n = t.getVideoPlayerController();
              t.isVisible()
                ? (e.push(t),
                  t.wasVisible ||
                    ((t.wasVisible = !0),
                    t.logDisplayed(),
                    n && n.emit("becomeVisible")))
                : t.wasVisible &&
                  (n && n.emit("becomeInvisible"), (t.wasVisible = !1));
            }),
            e
          );
        }),
        (n.$17 = function (t) {
          var e = o("VideoPlayerShakaGlobalConfig").getBool(
              "oz_www_allow_abort_loading_from_autoplay_controller",
              !1,
            ),
            n =
              r("ShakaConstants").strings
                .defer_which_video_to_abort_loading_decisioning_logic,
            a = t.getVideoPlayerController();
          if (!e && a && a.isPlayerVersion("oz")) return !1;
          var i = a ? a.isLiveVideo() : null;
          return i !== null && ((n === "vod" && i) || (n === "live" && !i))
            ? !1
            : r(
                "VideoAutoplayControllerAbortLoadingHelper",
              ).shouldAbortLoadingVideoUnit(t);
        }),
        (n.pausePlayingVideo = function (t, n) {
          var e = this.$3;
          if (e) {
            var o = function () {
              if (!e.isState("playing")) {
                if (
                  r("VideoPlayerExperiments")
                    .abortLoadingReUpStillVisibleVideos &&
                  e.isVisible()
                ) {
                  r("setTimeout")(
                    o,
                    r("ShakaConstants").numbers.abort_loading_delay,
                  );
                  return;
                }
                typeof e.abortLoading == "function" && e.abortLoading();
              }
            };
            if (e.isVisible()) {
              var a = e.getVideoPlayerController();
              if (a && a.isPlayRequestPending()) return;
            }
            (this.$7() || e.pause(t),
              r("VideoPlayerExperiments").decoupleAbortLoadingFromPause ||
                (this.$17(e) &&
                  n !== !0 &&
                  r("setTimeout")(
                    o,
                    r("ShakaConstants").numbers.abort_loading_delay,
                  )),
              (this.$3 = null));
          }
        }),
        (n.$16 = function (t) {
          this.pausePlayingVideo(t, !0);
        }),
        (n.updateAutoplay = function () {
          throw new Error("Should be overridden");
        }),
        t
      );
    })();
    l.default = u;
  },
  98,
);
