__d(
  "AdsFormatCollectionPlugin",
  [
    "fbt",
    "ix",
    "AMClickToMarketplaceAdsUtils",
    "AdsAdgroupFormatLabels",
    "AdsFormatEligibilityUtils",
    "AdsLinkPostFormat",
    "AdsReelsTrendingAdsStrings",
    "AdsUIMediaFormat",
    "InstantExperienceAdsStrings",
    "PartnershipAdsStrings",
    "Tooltip",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        type: "format",
        key: "collection",
        uiFormat: r("AdsLinkPostFormat").COLLECTIONS,
        getTitle: function (t) {
          return s._(/*BTDS*/ "Collection");
        },
        getDescription: function (t) {
          return o("AdsAdgroupFormatLabels").getDescriptionForMediaFormat(
            r("AdsUIMediaFormat").COLLECTIONS,
          );
        },
        getImageSrc: function (t, n) {
          var e;
          return (
            n
              ? (e = u(t ? "158120" : "158121"))
              : (e = u(t ? "711837" : "711836")),
            e
          );
        },
        getSupportedMedia: function (t) {
          return null;
        },
        isShown: function (t) {
          return o("AdsFormatEligibilityUtils").shouldShowCollectionFormat(t);
        },
        isSelected: function (t) {
          return !1;
        },
        getDisableReason: function (t) {
          return o("AdsFormatEligibilityUtils").getDisableReasonForCollection(
            t,
          );
        },
        getDisableTooltip: function (t, n, a, i, l, u, c, d, m) {
          return c
            ? {
                "data-tooltip-content": o("AdsReelsTrendingAdsStrings")
                  .COLLECTION_FORMAT_DISABLED,
              }
            : t === !0
              ? o("AMClickToMarketplaceAdsUtils").getAdFormatDisabledTooltip()
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
                  : r("isTruthy")(d)
                    ? {
                        "data-tooltip-content": o("InstantExperienceAdsStrings")
                          .COLLECTION_FORMAT_DISABLED_FOR_IX_ADS,
                      }
                    : null;
        },
      },
      c = e;
    l.default = c;
  },
  226,
);
