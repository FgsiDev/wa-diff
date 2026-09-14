__d(
  "AdsFacebookReelsOverlayVideoErrorUtils",
  ["errorCode", "errorDesc", "AdsAPIAdgroupPaths", "AdsError"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = r("AdsError").Level.RECOMMEND),
        new (r("AdsError"))(
          2490366,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Facebook reels postloop ads videos must be less than 10mins long",
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
    function c(e) {
      return (
        e === void 0 && (e = r("AdsError").Level.RECOMMEND),
        new (r("AdsError"))(
          2490368,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Facebook Reels Postloop ads do not support 360 videos.",
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
    function d(e) {
      return (
        e === void 0 && (e = r("AdsError").Level.RECOMMEND),
        new (r("AdsError"))(
          2490367,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Facebook Reels Postloop video ratio must be between 9:16 and 16:9",
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
    function m(e) {
      return (
        e === void 0 && (e = r("AdsError").Level.RECOMMEND),
        new (r("AdsError"))(
          2490365,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Facebook Reels Postloop ads do not support slideshow videos.",
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
    ((l.getInvalidLengthError = e),
      (l.getSphericalError = c),
      (l.getInvalidAspectRatioError = d),
      (l.getSlideShowError = m));
  },
  226,
);
