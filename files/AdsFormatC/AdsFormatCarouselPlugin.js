__d(
  "AdsFormatCarouselPlugin",
  [
    "fbt",
    "ix",
    "AdsAdgroupFormatLabels",
    "AdsFormatEligibilityUtils",
    "AdsLinkPostFormat",
    "AdsReelsTrendingAdsStrings",
    "AdsUIMediaFormat",
    "PartnershipAdsStrings",
    "Tooltip",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        type: "format",
        key: "carousel",
        uiFormat: r("AdsLinkPostFormat").MULTIPLE,
        getTitle: function (t) {
          return s._(/*BTDS*/ "Carousel");
        },
        getDescription: function (t, n) {
          return n === !0
            ? o("AdsAdgroupFormatLabels").CAROUSEL_FORMAT_DCO_DESCRIPTION
            : o("AdsAdgroupFormatLabels").getDescriptionForMediaFormat(
                r("AdsUIMediaFormat").CAROUSEL,
              );
        },
        getImageSrc: function (t, n) {
          var e;
          return (
            n
              ? (e = u(t ? "158118" : "158119"))
              : (e = u(t ? "711835" : "711834")),
            e
          );
        },
        getSupportedMedia: function (t) {
          return null;
        },
        isShown: function (t) {
          return o("AdsFormatEligibilityUtils").shouldShowCarouselFormat(t);
        },
        isSelected: function (t) {
          return !1;
        },
        getDisableReason: function (t) {
          return o("AdsFormatEligibilityUtils").getDisableReasonForCarousel(t);
        },
        getDisableTooltip: function (t, n, a, i, l, u, c, d, m) {
          return c
            ? {
                "data-tooltip-content": o("AdsReelsTrendingAdsStrings")
                  .CAROUSEL_FORMAT_DISABLED,
              }
            : l === !0
              ? {
                  "data-tooltip-content": s._(
                    /*BTDS*/ "This option isn't available. WhatsApp Status only supports ads using a single image or video.",
                  ),
                }
              : r("isTruthy")(m)
                ? r("Tooltip").propsFor(
                    o(
                      "PartnershipAdsStrings",
                    ).getFormatNotSupportedWithDynamicPartnerContentDelivery(),
                  )
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
