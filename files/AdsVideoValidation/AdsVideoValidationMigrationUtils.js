__d(
  "AdsVideoValidationMigrationUtils",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdsAPIAdgroupPaths",
    "AdsAccountUtils",
    "AdsCampaignLiveVideoAdsUtils",
    "AdsError",
    "AdsInstagramErrorUtils",
    "AdsInstagramMediaSpecs",
    "AdsInstreamCapabilityUtils",
    "AdsInstreamVideoErrorUtils",
    "AdsThreadsMediaSpecs",
    "AdsVideoConfig.experimental",
    "AdsVideoConstraintsUtils",
    "AdsVideoSpecs",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e = 0.5625,
      d = 9 / 16,
      m = 0.5625,
      p = 0.8,
      _ = 0,
      f = 1.91,
      g = 0.01;
    function h(e, t, n) {
      return e >= (t != null ? t : -1 / 0) && e <= (n != null ? n : 1 / 0);
    }
    function y(e, t) {
      var n,
        r = (n = t.aspectRatioTolerance) != null ? n : g,
        o =
          t.minWarningAspectRatio != null
            ? t.minWarningAspectRatio * (1 - r)
            : null,
        a =
          t.maxWarningAspectRatio != null
            ? t.maxWarningAspectRatio * (1 + r)
            : null;
      return h(e, o, a);
    }
    function C(e, t) {
      var n = [];
      if (
        (t.maxWarningLength != null &&
          Math.floor(e.length) > Number(t.maxWarningLength) &&
          n.push(
            new (r("AdsError"))(
              1443209,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "The video duration for ads in Facebook Stories can not be longer than 120 seconds.",
                );
              }, {}),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        e.height && e.width)
      ) {
        var o = e.width / e.height;
        y(o, t) ||
          n.push(
            new (r("AdsError"))(
              1443208,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Ads in Facebook Stories must have an aspect ratio ranging from 9:16 to 1.91:1.",
                );
              }, {}),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          );
      }
      return (
        h(e.width, t.minWarningWidth) ||
          n.push(
            new (r("AdsError"))(
              1443205,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "The width of photo and video has to be larger than 500px for ads in Facebook Stories.",
                );
              }, {}),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        e.spherical &&
          n.push(
            new (r("AdsError"))(
              1443214,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Spherical Video is currently not supported in ads in Facebook Stories.",
                );
              }, {}),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        n
      );
    }
    function b(e, t, n) {
      n === void 0 && (n = !1);
      var r =
          n === !0
            ? t == null
              ? void 0
              : t.max_video_duration_for_carousel
            : t == null
              ? void 0
              : t.max_video_duration,
        o = r == null ? void 0 : r.value,
        a = r == null ? void 0 : r.error_code_name;
      if (!h(Math.floor(e.length), 0, o)) return a;
    }
    function v(e, t) {
      for (var n = !1, r = 0; r < t.length; r++) {
        var o,
          a = (o = t[r]) == null ? void 0 : o.supported_aspect_ratio,
          i = a[0] * (1 - g),
          l = a[1] * (1 + g),
          s = h(e, i, l);
        n = n || s;
      }
      return n;
    }
    function S(e, t, n) {
      n === void 0 && (n = !1);
      var r =
          n === !0
            ? t == null
              ? void 0
              : t.carousel_video_ratio
            : t == null
              ? void 0
              : t.single_video_ratio,
        o = r == null ? void 0 : r.value,
        a = r == null ? void 0 : r.error_code_name;
      if (e.height && e.width && o) {
        var i = e.width / e.height;
        if (!v(i, o)) return a;
      }
    }
    function R(e, t, n, o, a) {
      (t === void 0 && (t = 0),
        n === void 0 && (n = 0),
        o === void 0 && (o = 0),
        a === void 0 && (a = 0));
      var i, l;
      return (
        !h(
          e.width,
          r("AdsInstagramMediaSpecs").MIN_VIDEO_WIDTH_WITH_SR_FOR_IG,
        ) ||
        (!h(e.width, r("AdsInstagramMediaSpecs").MIN_MEDIA_WIDTH_LOW_RES) &&
          h(
            Math.floor(e.length),
            0,
            r("AdsInstagramMediaSpecs").MAX_VIDEO_DURATION_WITH_SR,
          ))
          ? ((i = t), (l = n))
          : ((i = o), (l = a)),
        { minWarningWidth: i, minWarningHeight: l }
      );
    }
    function L(e, t, n, r, o, a, i, l) {
      (n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        o === void 0 && (o = 0),
        a === void 0 && (a = 0),
        i === void 0 && (i = 0),
        l === void 0 && (l = 0));
      var s = n
          ? t == null
            ? void 0
            : t.min_carousel_video_width
          : t == null
            ? void 0
            : t.min_video_width,
        u = s == null ? void 0 : s.value,
        c = s == null ? void 0 : s.error_code_name;
      if (r) {
        var d = R(e, o, a, i, l),
          m = d.minWarningWidth;
        u = m;
      }
      if (!h(e.width, u)) return c;
    }
    function E(e, t, n, a) {
      var i = [],
        l = o("AdsVideoConstraintsUtils").getMaxVideoDurationInSecForStories();
      if (
        (h(Math.floor(e.length), t.minWarningLength, l) ||
          i.push(
            new (r("AdsError"))(
              2875022,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Your ad won't run on Instagram because the selected video is longer than 60 minutes. Select a different video.",
                );
              }, {}),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        !h(
          e.width,
          r("AdsInstagramMediaSpecs").MIN_VIDEO_WIDTH_WITH_SR_FOR_IG,
        ) ||
        (!h(e.width, r("AdsInstagramMediaSpecs").MIN_MEDIA_WIDTH_LOW_RES) &&
          h(
            Math.floor(e.length),
            0,
            r("AdsInstagramMediaSpecs").MAX_VIDEO_DURATION_WITH_SR,
          ))
          ? ((t.minWarningWidth = r(
              "AdsInstagramMediaSpecs",
            ).MIN_VIDEO_WIDTH_WITH_SR_FOR_IG),
            (t.minWarningHeight = r(
              "AdsInstagramMediaSpecs",
            ).MIN_VIDEO_HEIGHT_WITH_SR_FOR_IG_STORY_REELS))
          : ((t.minWarningWidth = r(
              "AdsInstagramMediaSpecs",
            ).MIN_MEDIA_WIDTH_LOW_RES),
            (t.minWarningHeight = r(
              "AdsInstagramMediaSpecs",
            ).MIN_STORY_MEDIA_HEIGHT_LOW_RES)),
        h(e.width, t.minWarningWidth) ||
          i.push(
            new (r("AdsError"))(
              1772076,
              o("AdsInstagramErrorUtils")
                .getWrongVideoDimensionErrorMessage(
                  t.minWarningWidth,
                  t.minWarningHeight,
                )
                .toString(),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        e.height && e.width)
      ) {
        var s = e.width / e.height;
        !y(s, t) &&
          !y(s, r("AdsVideoSpecs").INSTAGRAM_STREAM) &&
          i.push(
            new (r("AdsError"))(
              1772130,
              u
                ._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Story media aspect ratio has to be smaller than or equal to 9:16",
                  );
                }, {})
                .toString(),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          );
      }
      return i;
    }
    function k(e, t) {
      var n = [],
        o = e.width,
        a = e.height,
        i = a > 0 ? o / a : 0,
        l = Math.floor(e.length);
      l > r("AdsThreadsMediaSpecs").MAX_VIDEO_DURATION_IN_SEC &&
        n.push(
          new (r("AdsError"))(
            4588030,
            u._(function (e, t) {
              return e._(
                /*BTDS*/ "Video ad won't run on Threads because the selected video is too long.",
              );
            }, {}),
            {
              level: r("AdsError").Level.WARN,
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                .VIDEO_DATA.VIDEO_ID,
            },
          ),
        );
      var s = r("gkx")("1742"),
        c = s ? 4588046 : 4588035,
        d = s
          ? u._(function (e, t) {
              return e._(
                /*BTDS*/ "Threads feed supports media aspect ratios 1.91:1 to 9:16. This image or video will be cropped to fit.",
              );
            }, {})
          : u._(function (e, t) {
              return e._(
                /*BTDS*/ "Threads feed supports media aspect ratios 1.91:1 to 4:5. This image or video will be cropped to fit.",
              );
            }, {});
      return (
        y(i, t) ||
          n.push(
            new (r("AdsError"))(c, d, {
              level: r("AdsError").Level.RECOMMEND,
              path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                .VIDEO_DATA.VIDEO_ID,
            }),
          ),
        n
      );
    }
    function I(t, n, a, i) {
      var l = [];
      if (i != null) {
        var s;
        (b(t, i, a),
          S(t, i, a),
          L(
            t,
            i,
            a,
            !0,
            (s = r("AdsInstagramMediaSpecs")).MIN_VIDEO_WIDTH_WITH_SR_FOR_IG,
            s.MIN_VIDEO_HEIGHT_WITH_SR_FOR_IG_FEED,
            s.MIN_MEDIA_WIDTH_LOW_RES,
            s.MIN_STREAM_MEDIA_HEIGHT_LOW_RES,
          ));
      }
      var c =
        n.supportsCarousel === !0
          ? n.maxWarningLength
          : o(
              "AdsVideoConstraintsUtils",
            ).getMaxVideoDurationInSecForSingleVideoStream();
      if (!h(Math.floor(t.length), n.minWarningLength, c)) {
        var d = n.supportsCarousel === !0 ? 2238149 : 2238132,
          m =
            n.supportsCarousel === !0
              ? u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Instagram feed carousel videos must be shorter than 120 seconds.",
                  );
                }, {})
              : u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Instagram feed video duration can not be longer than 60 minutes.",
                  );
                }, {});
        l.push(
          new (r("AdsError"))(d, m, {
            level: r("AdsError").Level.WARN,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .VIDEO_ID,
          }),
        );
      }
      if (
        (!h(
          t.width,
          r("AdsInstagramMediaSpecs").MIN_VIDEO_WIDTH_WITH_SR_FOR_IG,
        ) ||
        (!h(t.width, r("AdsInstagramMediaSpecs").MIN_MEDIA_WIDTH_LOW_RES) &&
          h(
            Math.floor(t.length),
            0,
            r("AdsInstagramMediaSpecs").MAX_VIDEO_DURATION_WITH_SR,
          ))
          ? ((n.minWarningWidth = r(
              "AdsInstagramMediaSpecs",
            ).MIN_VIDEO_WIDTH_WITH_SR_FOR_IG),
            (n.minWarningHeight = r(
              "AdsInstagramMediaSpecs",
            ).MIN_VIDEO_HEIGHT_WITH_SR_FOR_IG_FEED))
          : ((n.minWarningWidth = r(
              "AdsInstagramMediaSpecs",
            ).MIN_MEDIA_WIDTH_LOW_RES),
            (n.minWarningHeight = r(
              "AdsInstagramMediaSpecs",
            ).MIN_STREAM_MEDIA_HEIGHT_LOW_RES)),
        h(t.width, n.minWarningWidth) ||
          l.push(
            new (r("AdsError"))(
              1772076,
              o("AdsInstagramErrorUtils")
                .getWrongVideoDimensionErrorMessage(
                  n.minWarningWidth,
                  n.minWarningHeight,
                )
                .toString(),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        t.height && t.width)
      ) {
        var p = t.width / t.height,
          _ =
            n.supportsCarousel === !1
              ? babelHelpers.extends({}, n, { minWarningAspectRatio: e })
              : n;
        y(p, _) ||
          l.push(
            new (r("AdsError"))(
              1772074,
              o("AdsInstagramErrorUtils").getWrongVideoRatioErrorMessage(
                _.maxWarningAspectRatio,
                _.minWarningAspectRatio,
              ),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          );
      }
      return l;
    }
    function T(e, t) {
      var n = [],
        a =
          t.supportsCarousel === !0
            ? t.maxWarningLength
            : r("AdsInstagramMediaSpecs")
                .MAX_PROFILE_FEED_VIDEO_DURATION_IN_SEC_FOR_GREATER_THAN_TWO_MIN_ADS;
      if (!h(Math.floor(e.length), t.minWarningLength, a)) {
        var i = t.supportsCarousel === !0 ? 2238232 : 2238251,
          l =
            t.supportsCarousel === !0
              ? u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Instagram Profile feed carousel videos must be shorter than 120 seconds.",
                  );
                }, {})
              : u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Instagram Profile feed video duration can not be longer than 60 minutes.",
                  );
                }, {});
        n.push(
          new (r("AdsError"))(i, l, {
            level: r("AdsError").Level.WARN,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .VIDEO_ID,
          }),
        );
      }
      var s = !h(
          e.width,
          r("AdsInstagramMediaSpecs").MIN_VIDEO_WIDTH_WITH_SR_FOR_IG,
        ),
        c = !h(e.width, r("AdsInstagramMediaSpecs").MIN_MEDIA_WIDTH_LOW_RES),
        m = h(
          Math.floor(e.length),
          0,
          r("AdsInstagramMediaSpecs").MAX_VIDEO_DURATION_WITH_SR,
        );
      if (
        (s || (c && m)
          ? ((t.minWarningWidth = r(
              "AdsInstagramMediaSpecs",
            ).MIN_VIDEO_WIDTH_WITH_SR_FOR_IG),
            (t.minWarningHeight = r(
              "AdsInstagramMediaSpecs",
            ).MIN_VIDEO_HEIGHT_WITH_SR_FOR_IG_FEED))
          : ((t.minWarningWidth = r(
              "AdsInstagramMediaSpecs",
            ).MIN_MEDIA_WIDTH_LOW_RES),
            (t.minWarningHeight = r(
              "AdsInstagramMediaSpecs",
            ).MIN_STREAM_MEDIA_HEIGHT_LOW_RES)),
        h(e.width, t.minWarningWidth) ||
          n.push(
            new (r("AdsError"))(
              1772141,
              o("AdsInstagramErrorUtils")
                .getWrongVideoDimensionErrorMessage(
                  t.minWarningWidth,
                  t.minWarningHeight,
                )
                .toString(),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        e.height && e.width)
      ) {
        var p = e.width / e.height,
          _ = babelHelpers.extends({}, t, { minWarningAspectRatio: d }),
          f = 2875087,
          g = t.supportsCarousel === !1 ? _ : t;
        (!y(p, g) &&
          t.supportsCarousel === !1 &&
          n.push(
            new (r("AdsError"))(
              f,
              o("AdsInstagramErrorUtils").getWrongVideoRatioErrorMessage(
                g.maxWarningAspectRatio,
                g.minWarningAspectRatio,
              ),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
          !y(p, g) &&
            t.supportsCarousel === !0 &&
            n.push(
              new (r("AdsError"))(
                1772048,
                o("AdsInstagramErrorUtils").getWrongVideoRatioErrorMessage(
                  g.maxWarningAspectRatio,
                  g.minWarningAspectRatio,
                ),
                {
                  level: r("AdsError").Level.WARN,
                  path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                    .VIDEO_DATA.VIDEO_ID,
                },
              ),
            ));
      }
      return n;
    }
    function D(t, n, a) {
      var i = [],
        l = n.maxWarningLength;
      if (!h(Math.floor(t.length), n.minWarningLength, l)) {
        var s = n.supportsCarousel === !0 ? 2238235 : 2238236,
          c =
            n.supportsCarousel === !0
              ? u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Carousel videos for ads in Instagram search results feed can\u2019t be longer than 2 minutes. Please shorten your video.",
                  );
                }, {})
              : u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Videos for ads in Instagram search results feed can\u2019t be longer than 60 minutes. Please shorten your video.",
                  );
                }, {});
        i.push(
          new (r("AdsError"))(s, c, {
            level: r("AdsError").Level.WARN,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .VIDEO_ID,
          }),
        );
      }
      if (
        ((n.minWarningWidth = r(
          "AdsInstagramMediaSpecs",
        ).MIN_MEDIA_WIDTH_LOW_RES),
        (n.minWarningHeight = r(
          "AdsInstagramMediaSpecs",
        ).MIN_STREAM_MEDIA_HEIGHT_LOW_RES),
        h(t.width, n.minWarningWidth) ||
          i.push(
            new (r("AdsError"))(
              1772141,
              o("AdsInstagramErrorUtils")
                .getWrongVideoDimensionErrorMessage(
                  n.minWarningWidth,
                  n.minWarningHeight,
                )
                .toString(),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        t.height && t.width)
      ) {
        var d = t.width / t.height,
          m =
            n.supportsCarousel === !1
              ? babelHelpers.extends({}, n, { minWarningAspectRatio: e })
              : n;
        (!y(d, m) &&
          n.supportsCarousel === !1 &&
          i.push(
            new (r("AdsError"))(
              2875072,
              o("AdsInstagramErrorUtils").getWrongVideoRatioErrorMessage(
                m.maxWarningAspectRatio,
                m.minWarningAspectRatio,
              ),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
          !y(d, m) &&
            n.supportsCarousel === !0 &&
            i.push(
              new (r("AdsError"))(
                2875010,
                o("AdsInstagramErrorUtils").getWrongVideoRatioErrorMessage(
                  m.maxWarningAspectRatio,
                  m.minWarningAspectRatio,
                ),
                {
                  level: r("AdsError").Level.WARN,
                  path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                    .VIDEO_DATA.VIDEO_ID,
                },
              ),
            ));
      }
      return i;
    }
    function x(e, t) {
      var n = [],
        a = t.maxWarningLength;
      if (!h(Math.floor(e.length), t.minWarningLength, a)) {
        var i = t.supportsCarousel === !0 ? 2238241 : 2238242,
          l =
            t.supportsCarousel === !0
              ? u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Instagram Explore home carousel videos must be shorter than 120 seconds.",
                  );
                }, {})
              : u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Instagram Explore home video duration can not be longer than 60 minutes.",
                  );
                }, {});
        n.push(
          new (r("AdsError"))(i, l, {
            level: r("AdsError").Level.WARN,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .VIDEO_ID,
          }),
        );
      }
      if (
        ((t.minWarningWidth = r(
          "AdsInstagramMediaSpecs",
        ).MIN_MEDIA_WIDTH_LOW_RES),
        (t.minWarningHeight = r(
          "AdsInstagramMediaSpecs",
        ).MIN_EXPLORE_HOME_MEDIA_HEIGHT_LOW_RES),
        h(e.width, t.minWarningWidth) ||
          n.push(
            new (r("AdsError"))(
              1772141,
              o("AdsInstagramErrorUtils")
                .getWrongVideoDimensionErrorMessage(
                  t.minWarningWidth,
                  t.minWarningHeight,
                )
                .toString(),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        e.height && e.width)
      ) {
        var s = e.width / e.height,
          c = $(t);
        if (!y(s, c)) {
          var d = P(c);
          n.push(
            new (r("AdsError"))(
              d,
              o("AdsInstagramErrorUtils").getWrongVideoRatioErrorMessage(
                c.maxWarningAspectRatio,
                c.minWarningAspectRatio,
              ),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          );
        }
      }
      return n;
    }
    function $(e) {
      var t = r("gkx")("5365"),
        n = r("gkx")("21469"),
        o = t
          ? babelHelpers.extends({}, e, { maxWarningAspectRatio: p })
          : n
            ? babelHelpers.extends({}, e, { maxWarningAspectRatio: m })
            : e;
      return o;
    }
    function P(e) {
      var t = 2238260;
      return (
        e.maxWarningAspectRatio === m && (t = 2238270),
        e.maxWarningAspectRatio === p && (t = 2238293),
        e.supportsCarousel === !0 && (t = 2238243),
        t
      );
    }
    function N(e, t) {
      var n = [],
        a =
          e.liveStatus === "UNPUBLISHED" &&
          o("AdsCampaignLiveVideoAdsUtils").isSLVAEligible(),
        i = r("AdsInstagramMediaSpecs").MAX_REELS_VIDEO_DURATION_IN_SEC;
      if (
        (!a &&
          !h(Math.floor(e.length), t.minWarningLength, i) &&
          n.push(
            new (r("AdsError"))(
              2238152,
              u._(function (e, t) {
                return e._(/*BTDS*/ "Video length is not valid for Reels ads");
              }, {}),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        !h(
          e.width,
          r("AdsInstagramMediaSpecs").MIN_VIDEO_WIDTH_WITH_SR_FOR_IG,
        ) ||
        (!h(e.width, r("AdsInstagramMediaSpecs").MIN_MEDIA_WIDTH_LOW_RES) &&
          h(
            Math.floor(e.length),
            0,
            r("AdsInstagramMediaSpecs").MAX_VIDEO_DURATION_WITH_SR,
          ))
          ? ((t.minWarningWidth = r(
              "AdsInstagramMediaSpecs",
            ).MIN_VIDEO_WIDTH_WITH_SR_FOR_IG),
            (t.minWarningHeight = r(
              "AdsInstagramMediaSpecs",
            ).MIN_VIDEO_HEIGHT_WITH_SR_FOR_IG_STORY_REELS))
          : ((t.minWarningWidth = r(
              "AdsInstagramMediaSpecs",
            ).MIN_MEDIA_WIDTH_LOW_RES),
            (t.minWarningHeight = r(
              "AdsInstagramMediaSpecs",
            ).MIN_STORY_MEDIA_HEIGHT_LOW_RES)),
        h(e.width, t.minWarningWidth) ||
          n.push(
            new (r("AdsError"))(
              1772076,
              o("AdsInstagramErrorUtils").getWrongVideoDimensionErrorMessage(
                t.minWarningWidth,
                t.minWarningHeight,
              ),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        e.height && e.width)
      ) {
        var l = e.width / e.height,
          s = babelHelpers.extends({}, t, {
            maxWarningAspectRatio: f,
            minWarningAspectRatio: _,
          });
        y(l, s) ||
          n.push(
            new (r("AdsError"))(
              2238153,
              u._(function (e, t) {
                return e._(/*BTDS*/ "Aspect ratio is not valid for reels ads");
              }, {}),
              {
                level: r("AdsError").Level.WARN,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          );
      }
      return n;
    }
    function M(e, t, n, a, i) {
      n === void 0 && (n = r("AdsError").Level.RECOMMEND);
      var l = [],
        s = o("AdsInstreamCapabilityUtils").isEligibleForInstreamLongVideoAds(
          !0,
          i,
        ),
        u = t.maxWarningLength;
      (s &&
        (u = o(
          "AdsVideoConstraintsUtils",
        ).getInstreamVideoDRLongMaxDurationInSec()),
        h(e.length, t.minWarningLength, u) ||
          l.push(o("AdsInstreamVideoErrorUtils").getWrongLengthError(n, s)));
      var c = r("AdsAccountUtils").hasCapabilityFromList(
        a,
        "ADS_INSTREAM_VIDEO_ENABLE_SLIDE_SHOW",
      );
      return (
        !c &&
          e.creator_product === 5 &&
          l.push(o("AdsInstreamVideoErrorUtils").getSlideShowError(n)),
        e.spherical &&
          l.push(o("AdsInstreamVideoErrorUtils").getSphericalError(n)),
        l
      );
    }
    function w(e, t, n) {
      n === void 0 && (n = r("AdsError").Level.WARN);
      var o = [],
        a = t.maxWarningLength;
      if (
        (h(e.length, t.minWarningLength, a) ||
          o.push(
            new (r("AdsError"))(
              1815755,
              c._(
                /*BTDS*/ "Make this video {minimum Audience Network InStream video duration} - {maximum Audience Network InStream video duration} seconds long.",
                [
                  c._param(
                    "minimum Audience Network InStream video duration",
                    t.minWarningLength,
                  ),
                  c._param(
                    "maximum Audience Network InStream video duration",
                    a != null ? a - 1 : null,
                  ),
                ],
              ),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        h(
          e.length,
          r("AdsVideoConfig.experimental")
            .audienceNetworkInStreamVideoCTVMinDurationInSec,
          r("AdsVideoConfig.experimental")
            .audienceNetworkInStreamVideoCTVMaxDurationInSec,
        ) ||
          o.push(
            new (r("AdsError"))(
              2016032,
              u._(function (e, t) {
                return e._(/*BTDS*/ "Make this video 10-30 seconds long.");
              }, {}),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        e.height && e.width)
      ) {
        var i = e.width / e.height;
        y(i, t) ||
          o.push(
            new (r("AdsError"))(
              1815754,
              c._(/*BTDS*/ "Change the aspect ratio to 16:9, 5:3, 4:3 or 1:1."),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          );
      }
      return (
        t.hasSound &&
          !e.has_sound &&
          o.push(
            new (r("AdsError"))(
              2016029,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Add sound to your video, or upload a video with sound",
                );
              }, {}),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        t.hasHDQuality &&
          !e.has_hd_quality &&
          o.push(
            new (r("AdsError"))(
              1885566,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Make the video at least 720p, or upload a video that's 720p",
                );
              }, {}),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        e.spherical &&
          o.push(
            new (r("AdsError"))(
              1815287,
              c._(
                /*BTDS*/ "360 videos are not supported by the Audience Network InStream Format.",
              ),
              {
                level: n,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        o
      );
    }
    function A(e, t) {
      var n = [];
      return (
        e.creator_product === 5 &&
          n.push(
            new (r("AdsError"))(
              1885824,
              c._(
                /*BTDS*/ "Rewarded video ads do not support slideshow videos.",
              ),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        n
      );
    }
    function F(e, t) {
      return [];
    }
    function O(e, t) {
      var n = [];
      if (e.height && e.width) {
        var o = e.width / e.height;
        y(o, t) ||
          n.push(
            new (r("AdsError"))(
              2446111,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "The aspect ratio of the media in the ad is not valid.",
                );
              }, {}),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          );
      }
      return (
        e.spherical &&
          n.push(
            new (r("AdsError"))(
              1815287,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "You can't use 360 videos in one or more of your placements. Please select a different video, or change where your ads are shown.",
                );
              }, {}),
              {
                level: r("AdsError").Level.RECOMMEND,
                path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                  .VIDEO_DATA.VIDEO_ID,
              },
            ),
          ),
        n
      );
    }
    ((l.inRange = h),
      (l.isValidAspectRatio = y),
      (l.validateFBStory = C),
      (l.validateInstagramStory = E),
      (l.validateThreadsStream = k),
      (l.validateInstagramStream = I),
      (l.validateInstagramProfileFeed = T),
      (l.validateInstagramSearchFeed = D),
      (l.validateInstagramExploreHome = x),
      (l.validateInstagramReels = N),
      (l.validateFacebookInstreamVideo = M),
      (l.validateAudienceNetworkVideo = w),
      (l.validateAudienceNetworkRewardedVideo = A),
      (l.validateWhatsAppStatus = F),
      (l.validateMessengerInbox = O));
  },
  226,
);
