__d(
  "AdsInstagramStoryUnifiedCarouselUtils",
  ["AdsInstagramStoryPreviewConstants", "Event", "FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = -1,
      u = 0,
      c = function (t, n, r) {
        return (t + r + n) % n;
      },
      d = function (t) {
        return t != null && t instanceof HTMLVideoElement
          ? Math.min(
              o("AdsInstagramStoryPreviewConstants")
                .CAROUSEL_PRE_OPT_IN_VIDEO_MAX_DURATION_IN_MS,
              (t.duration - t.currentTime) * 1e3,
            )
          : o("AdsInstagramStoryPreviewConstants").CAROUSEL_DURATION_IN_MS;
      },
      m = function (t) {
        var e = Date.now() - t;
        return (
          o("AdsInstagramStoryPreviewConstants").CAROUSEL_DURATION_IN_MS - e
        );
      },
      p = function (t) {
        return t != null && t instanceof HTMLVideoElement
          ? t.duration * 1e3
          : o("AdsInstagramStoryPreviewConstants").CAROUSEL_DURATION_IN_MS;
      },
      _ = function (t) {
        t != null &&
          t instanceof HTMLVideoElement &&
          ((t.currentTime = 0),
          r("Event").listen(t, "canplay", function () {
            var e = t.play();
            e.catch(function (e) {
              r("FBLogger")("ads", "video_player_issues").warn(
                "Tried to play a video in %s, but failed because of error %s. This needs the right paused fallback UI, see https://goo.gl/LdLk22.",
                i.id,
                r("getErrorSafe")(e).message,
              );
            });
          }));
      };
    function f() {
      return {
        autoplayTimeoutID: null,
        autoplayTimeout: null,
        autoplayTimeoutSetTime: Date.now(),
        currentMediaCardIndex: o("AdsInstagramStoryPreviewConstants")
          .INITIAL_MEDIA_CARD_INDEX,
        carouselType: "SMART_OPT_IN",
        storiesExpanded: !1,
      };
    }
    function g(e, t) {
      var n;
      switch (t.type) {
        case o("AdsInstagramStoryPreviewConstants").OPT_IN_BUTTON_CLICK_ACTION:
          return babelHelpers.extends({}, e, { storiesExpanded: !0 });
        case o("AdsInstagramStoryPreviewConstants").UPDATE_CAROUSEL_TYPE:
          return babelHelpers.extends({}, e, {
            carouselType: t.payload.carouselType,
            storiesExpanded: t.payload.carouselType === "MPS",
          });
        case o("AdsInstagramStoryPreviewConstants").SET_TIMER:
          return babelHelpers.extends({}, e, {
            currentMediaCardIndex:
              (n = t.payload.index) != null ? n : e.currentMediaCardIndex,
            autoplayTimeout: t.payload.autoplayTimeout,
            autoplayTimeoutID: t.payload.autoplayTimeoutID,
            autoplayTimeoutSetTime: t.payload.autoplayTimeoutSetTime,
          });
        default: {
          var r = new Error();
          throw (r.stack, r);
        }
      }
    }
    function h(e, t) {
      var n = (1 * e) / (1 * t);
      return (
        Math.abs(
          n - o("AdsInstagramStoryPreviewConstants").MAX_IG_STORY_MEDIA_RATIO,
        ) <= o("AdsInstagramStoryPreviewConstants").MEDIA_ASPECT_RATIO_TOLERNACE
      );
    }
    function y(e, t) {
      if (t === 0) return !1;
      var n = (1 * e) / (1 * t);
      return (
        n <=
        o("AdsInstagramStoryPreviewConstants").MAX_IG_FEED_TALL_MEDIA_RATIO -
          o("AdsInstagramStoryPreviewConstants").MEDIA_ASPECT_RATIO_TOLERNACE
      );
    }
    function C(e) {
      var t = e.width,
        n = e.height;
      return t != null && n != null && t !== 0 && n !== 0 ? h(t, n) : !1;
    }
    function b(e, t, n) {
      return e === "FORCED_DELIVERY" &&
        t > o("AdsInstagramStoryPreviewConstants").FORCE_DELIVERY_LIMIT &&
        n === !1
        ? o("AdsInstagramStoryPreviewConstants").FORCE_DELIVERY_LIMIT
        : e === "SMART_OPT_IN" && n === !1
          ? 1
          : t;
    }
    ((l.NEXT_MEDIA_INDEX_CHANGE = e),
      (l.PREV_MEDIA_INDEX_CHANGE = s),
      (l.NO_MEDIA_INDEX_CHANGE = u),
      (l.getNextMediaCardIndex = c),
      (l.calculateRepeatMediaAutoplayTimeout = d),
      (l.calculateRemainingMediaAutoplayTimeout = m),
      (l.calculateNextCardAutoplayTimeout = p),
      (l.resetMedia = _),
      (l.init = f),
      (l.stateReducer = g),
      (l.isFullscreenMediaAspectRatio = h),
      (l.isTallVideoMediaAspectRatio = y),
      (l.getIsFullScreenCarouselMediaCard = C),
      (l.getVisibleMediaLength = b));
  },
  98,
);
