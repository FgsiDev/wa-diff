__d(
  "AdsInstreamVideoErrorUtils",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdsAPIAdgroupPaths",
    "AdsError",
    "AdsInstreamCapabilityUtils",
    "AdsVideoConfig.experimental",
    "AdsVideoConstraintsUtils",
    "LiveVideoPostUtil",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    function e(e) {
      e === void 0 && (e = r("AdsError").Level.RECOMMEND);
      var t;
      return (
        e === r("AdsError").Level.RECOMMEND
          ? (t = c._(
              /*BTDS*/ "This video can't be used for in-stream ads, but it can still run in your other placements.",
            ))
          : (t = c._(/*BTDS*/ "This video can't be used for in-stream ads.")),
        t
      );
    }
    function d(e, t, n, o, a) {
      if (
        (t === void 0 && (t = r("AdsError").Level.RECOMMEND),
        n === void 0 && (n = !1),
        o === void 0 && (o = !1),
        a === void 0 && (a = !1),
        !e)
      )
        return null;
      switch (e) {
        case "ELIGIBLE":
          return null;
        case "INELIGIBLE_VIDEO_NOT_READY":
          return f(t);
        case "INELIGIBLE_VIDEO_LENGTH_SHORT_ADS":
          return o ? null : f(t);
        case "INELIGIBLE_VIDEO_LENGTH_LONGER_ADS":
          return f(t, o);
        case "INELIGIBLE_SLIDESHOW":
          return a ? null : y(t);
        case "INELIGIBLE_SPHERICAL":
          return g(t);
        case "ELIGIBLE_VERTICAL_ASPECT_RATIO":
          return n ? h(t) : null;
        default:
          return null;
      }
    }
    function m(e, t, n, a) {
      (t === void 0 && (t = r("AdsError").Level.RECOMMEND),
        n === void 0 && (n = !1),
        a === void 0 && (a = !1));
      var i = [];
      if (o("LiveVideoPostUtil").isLiveVideoAndEligibleForUsabilityFix(e))
        return i;
      var l = d(e.instream_eligibility, t, n, a);
      return (l && i.push(l), i);
    }
    function p(e, t, n, a) {
      (t === void 0 && (t = r("AdsError").Level.RECOMMEND),
        n === void 0 && (n = !1));
      var i = a.every(function (e) {
          return o(
            "AdsInstreamCapabilityUtils",
          ).isEligibleForInstreamLongVideoAds(!0, e);
        }),
        l = new Map();
      return (
        e &&
          e.forEach(function (e) {
            l.set(e.promotable_id, m(e, t, n, i));
          }),
        l
      );
    }
    function _(e, t, n, a, i) {
      (t === void 0 && (t = r("AdsError").Level.RECOMMEND),
        n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1));
      var l = [],
        s = a
          ? o(
              "AdsVideoConstraintsUtils",
            ).getInstreamVideoDRLongMaxDurationInSec()
          : r("AdsVideoConfig.experimental").instreamVideoMaxDurationInSec;
      if (
        ((e.length <
          r("AdsVideoConfig.experimental").instreamVideoMinDurationInSec ||
          e.length > s) &&
          l.push(f(t, a)),
        e.spherical && l.push(g(t)),
        !i && e.creator_product === 5 && l.push(y(t)),
        n)
      ) {
        var u = e.width / e.height;
        u &&
          (u <
            r("AdsVideoConfig.experimental").instreamPACMinWarningAspectRatio ||
            u >
              r("AdsVideoConfig.experimental")
                .instreamPACMaxWarningAspectRatio) &&
          l.push(h(t));
      }
      return l;
    }
    function f(e, t, n) {
      return (
        e === void 0 && (e = r("AdsError").Level.RECOMMEND),
        new (r("AdsError"))(
          2490277,
          u._(
            function (e, t) {
              return e._(
                /*BTDS*/ "The length of your video is not supported for the {placement} placement. Upload a video that is {minLength}-{maxLength} seconds long to deliver to this placement.",
                [
                  e._param("placement", t.placement),
                  e._param("minLength", t.minLength),
                  e._param("maxLength", t.maxLength),
                ],
              );
            },
            {
              placement: n != null ? n : c._(/*BTDS*/ "In-stream"),
              minLength: r("AdsVideoConfig.experimental")
                .instreamVideoMinDurationInSec,
              maxLength: t
                ? o(
                    "AdsVideoConstraintsUtils",
                  ).getInstreamVideoDRLongMaxDurationInSecToShow()
                : r("AdsVideoConfig.experimental")
                    .instreamVideoMaxDurationInSecToShow,
            },
          ),
          {
            level: e,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .VIDEO_ID,
          },
        )
      );
    }
    function g(e) {
      return (
        e === void 0 && (e = r("AdsError").Level.RECOMMEND),
        new (r("AdsError"))(
          1815483,
          u._(function (e, t) {
            return e._(/*BTDS*/ "In-stream ads do not support 360 videos.");
          }, {}),
          {
            level: e,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .VIDEO_ID,
          },
        )
      );
    }
    function h(e) {
      return (
        e === void 0 && (e = r("AdsError").Level.RECOMMEND),
        new (r("AdsError"))(
          1815896,
          u._(function (e, t) {
            return e._(/*BTDS*/ "In-stream reels must be square or landscape.");
          }, {}),
          {
            level: e,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .VIDEO_ID,
          },
        )
      );
    }
    function y(e) {
      return (
        e === void 0 && (e = r("AdsError").Level.RECOMMEND),
        new (r("AdsError"))(
          1815490,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "In-stream ads do not support slideshow videos.",
            );
          }, {}),
          {
            level: e,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .VIDEO_ID,
          },
        )
      );
    }
    ((l.getInstreamVideoErrorTitle = e),
      (l.getIneligibleInstreamPostError = d),
      (l.getErrorsForSinglePost = m),
      (l.getErrorsForAllPosts = p),
      (l.getErrorsForSingleVideo = _),
      (l.getWrongLengthError = f),
      (l.getSphericalError = g),
      (l.getAspectRatioError = h),
      (l.getSlideShowError = y));
  },
  226,
);
