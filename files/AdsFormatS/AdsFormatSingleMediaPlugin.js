__d(
  "AdsFormatSingleMediaPlugin",
  [
    "fbt",
    "ix",
    "AMClickToMarketplaceAdsUtils",
    "AdsAdgroupFormatLabels",
    "AdsCreativeContentSimplificationUtils",
    "AdsFormatEligibilityUtils",
    "AdsFormatSupportedMedia",
    "AdsLinkPostFormat",
    "AdsUIMediaFormat",
    "isAccountEligibleForThreeCOL2AdEx",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        type: "format",
        key: "single_media",
        uiFormat: r("AdsLinkPostFormat").SINGLE,
        getTitle: function (t) {
          return t ===
            o("AdsFormatSupportedMedia").AdsFormatSupportedMedia.IMAGE_ONLY
            ? s._(/*BTDS*/ "Single image")
            : t ===
                o("AdsFormatSupportedMedia").AdsFormatSupportedMedia.VIDEO_ONLY
              ? s._(/*BTDS*/ "Single video")
              : s._(/*BTDS*/ "Single image or video");
        },
        getDescription: function (t) {
          return t ===
            o("AdsFormatSupportedMedia").AdsFormatSupportedMedia.IMAGE_ONLY
            ? o("AdsAdgroupFormatLabels").getDescriptionForMediaFormat(
                r("AdsUIMediaFormat").SINGLE_IMAGE,
              )
            : t ===
                o("AdsFormatSupportedMedia").AdsFormatSupportedMedia.VIDEO_ONLY
              ? o("AdsAdgroupFormatLabels").getDescriptionForMediaFormat(
                  r("AdsUIMediaFormat").SINGLE_VIDEO,
                )
              : o(
                    "AdsCreativeContentSimplificationUtils",
                  ).passL1ContentSimplificationExperiment()
                ? ""
                : s._(
                    /*BTDS*/ "One image or video, or a slideshow with multiple images",
                  );
        },
        getImageSrc: function (t, n) {
          return u(n ? (t ? "158122" : "158123") : t ? "711839" : "711838");
        },
        getSupportedMedia: function (t) {
          return t
            ? o("AdsFormatSupportedMedia").AdsFormatSupportedMedia.IMAGE_ONLY
            : o("AdsFormatSupportedMedia").AdsFormatSupportedMedia
                .IMAGE_AND_VIDEO;
        },
        isShown: function (t) {
          return o("AdsFormatEligibilityUtils").shouldShowSingleMediaFormat(t);
        },
        isSelected: function (t) {
          return !1;
        },
        getDisableReason: function (t) {
          return null;
        },
        getDisableTooltip: function (t, n, a, i, l, u, c, d, m, p, _) {
          return r("isTruthy")(p) &&
            !o("isAccountEligibleForThreeCOL2AdEx").is3coEnableCarouselFormat()
            ? {
                "data-tooltip-content": s._(
                  /*BTDS*/ "Single image or video is the only format option available when using website and app as a conversion location.",
                ),
              }
            : r("isTruthy")(_)
              ? {
                  "data-tooltip-content": s._(
                    /*BTDS*/ "Single image or video is the only format option available when using website, app and in-store as a conversion location.",
                  ),
                }
              : t === !0
                ? o("AMClickToMarketplaceAdsUtils").getAdFormatDisabledTooltip()
                : r("isTruthy")(i)
                  ? {
                      "data-tooltip-content": s._(
                        /*BTDS*/ "This format is not available because you\u2019re using dynamic creative for this ad set. Turn off dynamic creative to use this format.",
                      ),
                    }
                  : null;
        },
      },
      c = e;
    l.default = c;
  },
  226,
);
