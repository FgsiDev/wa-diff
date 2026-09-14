__d(
  "AdsInstagramErrorUtils",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "AdImageSpecs",
    "AdImageSpecsUtils",
    "AdsError",
    "AdsInstagramMediaSpecs",
    "AdsValidationConfig.experimental",
    "AdsVideoConstraintsUtils",
    "Link.react",
    "qex",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e,
      d = e || (e = o("react"));
    function m(e, t) {
      if (!e.length) return null;
      var n =
          e.length > 1
            ? e
                .map(function (e) {
                  return c._(/*BTDS*/ "{bullet} {error message}", [
                    c._param("bullet", "\u2022"),
                    c._param("error message", e.message),
                  ]);
                })
                .join("\n")
            : e[0].message,
        r = p(e);
      return r != null
        ? c._(/*BTDS*/ "{title} {combined}", [
            c._param("title", r),
            c._param("combined", n),
          ])
        : n;
    }
    function p(e) {
      if (!e.length) return null;
      if (e.length > 1)
        return c._(/*BTDS*/ "This image won't work on Instagram.");
      switch (e[0].key) {
        case 1772077:
        case 2016005:
          return c._(/*BTDS*/ "This image is too small for Instagram.");
        case 1772073:
          return c._(
            /*BTDS*/ "This image's aspect ratio won't work on Instagram.",
          );
        case 2016007:
          return c._(
            /*BTDS*/ "This cropped image is too small for Instagram ads.",
          );
        case 2016006:
          return c._(/*BTDS*/ "This image won't work on Instagram.");
        case 1772069:
          return c._(/*BTDS*/ "Image required for Instagram ads.");
      }
      return null;
    }
    function _(e, t, n) {
      return c._(
        /*BTDS*/ "Some media is missing or can't be used for Instagram ads",
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t, n) {
      return n === r("AdsError").Level.RECOMMEND
        ? c._(
            /*BTDS*/ "Choose another media if you want to reach people on both Instagram and Facebook.",
          )
        : t === !0
          ? c._(/*BTDS*/ "Choose other media for this ad.")
          : c._(/*BTDS*/ "Choose other media for these ads.");
    }
    function g(e, t, n, o) {
      return (
        r("vulture")("zZryt5YRkM28P9gyXVJfJFvLDv4="),
        e && n
          ? c._(
              /*BTDS*/ "{=Remove image} or {=remove Instagram as a placement} for this ad set.",
              [
                c._param("=Remove image", o ? C(o) : y(t)),
                c._param("=remove Instagram as a placement", h(n)),
              ],
            )
          : c._(/*BTDS*/ "{=Remove image} for this ad set.", [
              c._param("=Remove image", o ? C(o) : y(t)),
            ])
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return (
        r("vulture")("zVa-ZKTtZb9gdDvS1qKeO46OKxw="),
        d.jsx(r("Link.react"), {
          onClick: e,
          children: c._(/*BTDS*/ "remove Instagram as a placement"),
        })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return (
        r("vulture")("WwFRCbYJdWVj4WL_V7nORavgtW4="),
        d.jsx(r("Link.react"), {
          onClick: e,
          children: c._(/*BTDS*/ "Remove image"),
        })
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      return (
        r("vulture")("tOtdHFJFT6_QLBoF3MF9dWgp1IQ="),
        d.jsx(r("Link.react"), {
          onClick: e,
          children: c._(/*BTDS*/ "Select a different image"),
        })
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t) {
      return c._(
        /*BTDS*/ "Videos must be at least {minimum Instagram ad video width} x {minimum Instagram ad video height} pixels.",
        [
          c._param(
            "minimum Instagram ad video width",
            e != null ? e : r("AdsInstagramMediaSpecs").MIN_MEDIA_WIDTH,
          ),
          c._param(
            "minimum Instagram ad video height",
            t != null ? t : r("AdsInstagramMediaSpecs").MIN_STREAM_MEDIA_HEIGHT,
          ),
        ],
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t) {
      return t != null && e != null && t === e
        ? c._(
            /*BTDS*/ "Aspect ratios of videos need to be {Instagram ad video aspect ratio}:1.",
            [c._param("Instagram ad video aspect ratio", e)],
          )
        : c._(
            /*BTDS*/ "Aspect ratios of videos need to be between {maximum Instagram ad video aspect ratio}:1 and {minimum Instagram ad video aspect ratio}:1.",
            [
              c._param(
                "maximum Instagram ad video aspect ratio",
                e != null
                  ? e
                  : r("AdImageSpecs").INSTAGRAM_STREAM_NO_CROP
                      .maxWarningAspectRatio,
              ),
              c._param(
                "minimum Instagram ad video aspect ratio",
                t != null
                  ? t
                  : r("AdImageSpecs").INSTAGRAM_STREAM_NO_CROP
                      .minWarningAspectRatio,
              ),
            ],
          );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      return (
        r("vulture")("HWbczMKnmTd6t4SXY_7U9k2nHr4="),
        e.key === 2016004 ||
          e.key === 2016005 ||
          e.key === 2016007 ||
          e.key === 2016006 ||
          e.key === 1772077 ||
          e.key === 1772073
      );
    }
    function R(e, t) {
      var n, a;
      switch (e) {
        case "ineligible_caption_too_long":
          return (
            (a = !0),
            (n = c._(
              /*BTDS*/ "This caption is too long. Instagram has a limit of {maximum caption length} characters.",
              [
                c._param(
                  "maximum caption length",
                  a
                    ? r("AdsValidationConfig.experimental")
                        .instagramAdsMaxLongCaptionLength
                    : r("AdsValidationConfig.experimental")
                        .instagramAdsMaxCaptionLength,
                ),
              ],
            )),
            n
          );
        case "ineligible_media_square_dimension":
          return (
            (n = c._(
              /*BTDS*/ "Media needs to be at least {minimum width} pixels in width and height for carousel ads on Instagram.",
              [
                c._param(
                  "minimum width",
                  o("AdImageSpecsUtils").getMinSizeForIGAdImages(
                    r("AdsInstagramMediaSpecs").MIN_MEDIA_WIDTH,
                  ),
                ),
              ],
            )),
            n
          );
        case "ineligible_image_square_aspect_ratio":
          return (
            (n = c._(
              /*BTDS*/ "Media aspect ratio of this image needs to be 1:1 on Instagram.",
            )),
            n
          );
        case "ineligible_video_square_aspect_ratio":
          return (
            (n = c._(
              /*BTDS*/ "Videos in carousels used on Instagram should be square with an aspect ratio of 1:1.",
            )),
            n
          );
        case "ineligible_media_aspect_ratio":
          return (
            (n = c._(
              /*BTDS*/ "Media aspect ratios need to be between {minimum Instagram ad video aspect ratio}:1 and {maximum Instagram ad video aspect ratio}:1 on Instagram.",
              [
                c._param(
                  "minimum Instagram ad video aspect ratio",
                  r("AdImageSpecs").INSTAGRAM_STREAM_NO_CROP
                    .minWarningAspectRatio,
                ),
                c._param(
                  "maximum Instagram ad video aspect ratio",
                  r("AdImageSpecs").INSTAGRAM_STREAM_NO_CROP
                    .maxWarningAspectRatio,
                ),
              ],
            )),
            n
          );
        case "ineligible_stream_or_story_aspect_ratio":
          return (
            (n = c._(
              /*BTDS*/ "Media aspect ratios need to be between {minimum Instagram ad video aspect ratio}:1 and {maximum Instagram ad video aspect ratio}:1 for Instagram stream and {maximum Instagram story ad video aspect ratio}:1 for Instagram story.",
              [
                c._param(
                  "minimum Instagram ad video aspect ratio",
                  r("AdImageSpecs").INSTAGRAM_STREAM_NO_CROP
                    .minWarningAspectRatio,
                ),
                c._param(
                  "maximum Instagram ad video aspect ratio",
                  r("AdImageSpecs").INSTAGRAM_STREAM_NO_CROP
                    .maxWarningAspectRatio,
                ),
                c._param(
                  "maximum Instagram story ad video aspect ratio",
                  r("AdsInstagramMediaSpecs").MAX_STORY_ASPECT_RATIO,
                ),
              ],
            )),
            n
          );
        case "ineligible_media_dimension":
          return (
            (n = c._(
              /*BTDS*/ "Media needs to be at least {minimum width} pixels wide and {minimum height} pixels high on Instagram.",
              [
                c._param(
                  "minimum width",
                  o("AdImageSpecsUtils").getMinSizeForIGAdImages(
                    r("AdsInstagramMediaSpecs").MIN_MEDIA_WIDTH,
                  ),
                ),
                c._param(
                  "minimum height",
                  o("AdImageSpecsUtils").getMinSizeForIGAdImages(
                    r("AdsInstagramMediaSpecs").MIN_STREAM_MEDIA_HEIGHT,
                  ),
                ),
              ],
            )),
            n
          );
        case "ineligible_story_aspect_ratio":
          return (
            (n = c._(
              /*BTDS*/ "Media aspect ratios need to be smaller than or equal to {maximum Instagram story ad video aspect ratio}:1 for Instagram story.",
              [
                c._param(
                  "maximum Instagram story ad video aspect ratio",
                  r("AdsInstagramMediaSpecs").MAX_STORY_ASPECT_RATIO,
                ),
              ],
            )),
            n
          );
        case "ineligible_video_length":
          return c._(
            /*BTDS*/ "Videos can't be longer than {maximum video length} seconds for Instagram feed.",
            [
              c._param(
                "maximum video length",
                o(
                  "AdsVideoConstraintsUtils",
                ).getMaxVideoDurationInSecForSingleVideoStream(),
              ),
            ],
          );
        case "ineligible_video_length_for_stories":
          return c._(
            /*BTDS*/ "Videos can't be longer than {maximum video length} seconds for Instagram story.",
            [
              c._param(
                "maximum video length",
                o(
                  "AdsVideoConstraintsUtils",
                ).getMaxVideoDurationInSecForStories(),
              ),
            ],
          );
        case "ineligible_video_length_for_stories_carousel":
          return c._(
            /*BTDS*/ "Videos can't be longer than {maximum video length} seconds for Carousel for Instagram Stories.",
            [
              c._param(
                "maximum video length",
                r("AdsInstagramMediaSpecs")
                  .MAX_STORY_VIDEO_DURATION_IN_SEC_FOR_CAROUSEL_VIDEOS,
              ),
            ],
          );
        case "ineligible_post_album_upload":
          return (
            (n = c._(
              /*BTDS*/ "Post contains a photo album with multiple photos. Posts can only contain one photo or video on Instagram.",
            )),
            n
          );
        case "ineligible_post_multi_photo":
          return (
            (n = c._(
              /*BTDS*/ "Post uses multiple photos. Posts can only use one photo or video on Instagram.",
            )),
            n
          );
        case "ineligible_post_no_media":
          return (
            (n = c._(
              /*BTDS*/ "Post uses only text. Post must contain an image or video on Instagram.",
            )),
            n
          );
        case "inelegible_data_type_in_carousel":
          return (
            (n = c._(
              /*BTDS*/ "Only photos and videos with external websites can be used in Instagram Carousel ads.",
            )),
            n
          );
        case "inelegible_caption_too_many_hashtags":
          if (r("qex")._("1494") === !0)
            return c._(
              /*BTDS*/ "Remove some hashtags to use this post. Instagram only allows 30 hashtags per post.",
            );
          break;
        case "ineligible_caption_mentions_not_allowed":
          if (r("qex")._("1494") === !0)
            return c._(
              /*BTDS*/ "Remove \u0040mentions from this post to use it. They're not allowed in Instagram ads.",
            );
          break;
        case "inelegible_call_to_action_type":
          if (r("qex")._("1494") === !0)
            return c._(
              /*BTDS*/ "This post has a call to action that isn't supported on Instagram. To use it, try changing or removing the call to action.",
            );
          break;
        case "ineligible_post_type":
          if (r("qex")._("1494") === !0)
            return c._(
              /*BTDS*/ "This post type isn't supported on Instagram. Try a different post.",
            );
          break;
        case "inelegible_store_locator_destination":
          if (r("qex")._("1494") === !0)
            return c._(
              /*BTDS*/ "This post has a call to action that isn't supported on Instagram. To use it, try changing or removing the call to action.",
            );
          break;
        default:
          return (
            (n = c._(/*BTDS*/ "This post can't be used for ads on Instagram.")),
            n
          );
      }
      return c._(/*BTDS*/ "This post can't be used for ads on Instagram.");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e, t) {
      var n,
        o,
        a = r("AdsError").Level.WARN;
      switch (e) {
        case "INELIGIBLE_VIDEO_LENGTH_FOR_FEED":
          ((n = 2238173),
            (o = u._(
              function (e, t) {
                return e._(
                  /*BTDS*/ "Videos longer than {max_duration_s} seconds can't be boosted on Instagram. You can create a new ad using a longer video or select a shorter video to boost.",
                  [e._param("max_duration_s", t.max_duration_s)],
                );
              },
              {
                max_duration_s: r("AdsInstagramMediaSpecs")
                  .MAX_STREAM_VIDEO_DURATION_IN_SEC_FOR_GREATER_THAN_TWO_MIN_ADS,
              },
            )));
          break;
        case "EXPERIMENTAL_INTERACTIVE_STICKERS":
          if (r("qex")._("553")) return null;
          ((n = 2238023),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "You can't promote stories with elements like questions, link stickers or music.",
              );
            }, {})));
          break;
        case "INELIGIBLE_INTERACTIVE_STICKERS":
          ((n = 2238023),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "You can't promote stories with elements like questions, link stickers or music.",
              );
            }, {})));
          break;
        case "IS_REELS_WITH_TAPPABLE_ELEMENTS":
          ((n = 2875039),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "Reels containing tappable elements can't be used for ads. Choose a different post to create an ad.",
              );
            }, {})));
          break;
        case "IS_REELS_WITH_CAMERA_EFFECTS":
          ((n = 2875041),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "Reels with effects can't be used for ads. Choose a different post to create an ad.",
              );
            }, {})));
          break;
        case "IS_REELS_WITH_THIRD_PARTY_CAMERA_EFFECTS":
          ((n = 2875080),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "Reels with third-party effects can't be used for ads. Choose a different post to create an ad.",
              );
            }, {})));
          break;
        case "HAS_SELLER_COLLECTIONS":
          ((n = 2238182),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "This video isn't available for ads because it includes a tagged collection.",
              );
            }, {})));
          break;
        case "HAS_PINNED_PRODUCTS":
          ((n = 2238180),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "This video isn't available for ads because it includes pinned products.",
              );
            }, {})));
          break;
        case "IS_CLIPS_WITH_COPYRIGHTED_LICENSED_MUSIC":
          ((n = 2875030),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "Reels that use copyrighted music can't be boosted as ads.",
              );
            }, {})));
          break;
        case "IS_INVALID_CLIP_VIDEO_DURATION":
          ((n = 2875031),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "Reels must be 15 minutes or shorter to be boosted as ads.",
              );
            }, {})));
          break;
        case "IS_REELS_WITH_PRODUCT_TAG":
          if (r("qex")._("553")) return null;
          ((n = 2875034),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "Reels with product tags can't be boosted as ads.",
              );
            }, {})));
          break;
        case "ALLOWS_IGTV_ADS":
          ((n = 2238194),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "Videos can't be monetized while they are used for ads. If you select this video, it will be monetized again after your ad stops running.",
              );
            }, {})),
            (a = r("AdsError").Level.NOTIFY));
          break;
        case "HAS_COUNTDOWN_STICKER":
          ((n = 2238023),
            (o = u._(function (e, t) {
              return e._(
                /*BTDS*/ "You can't promote stories with elements like questions, link stickers or music.",
              );
            }, {})));
          break;
        default:
          return null;
      }
      return new (r("AdsError"))(n, o, { level: a });
    }
    ((l.getCombinedErrorMessage = m),
      (l.getImageErrorsTitle = p),
      (l.getCarouselErrorTitle = _),
      (l.getCarouselErrorSuggestions = f),
      (l.getWrongVideoDimensionErrorMessage = b),
      (l.getWrongVideoRatioErrorMessage = v),
      (l.isInstagramSpecificError = S),
      (l.getIneligibilityReason = R),
      (l.getBoostIneligibilityError = L));
  },
  226,
);
