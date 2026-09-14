__d(
  "adsUEditorFormatTransformationOriginalFormatSelector",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsChildAttachmentsUtils",
    "AdsDASingleMediaFormatLiquidityUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatPacCarouselUtils",
    "AdsObjectTypeUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupExistingPostPhotoCountSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          r("adsUEditorAdgroupExistingPostPhotoCountSelector"),
        ],
        function (t, n, r) {
          if (n == null || n.length !== 1) return "unknown";
          var e = n[0];
          return !o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
            (o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
              (o("AdsAssetFeedUtils").hasPACCarouselFormat(e) &&
                o("AdsFlexibleFormatPacCarouselUtils").passGKForPACCarousel(
                  !0,
                )))
            ? "sa_carousel"
            : o(
                  "AdsFlexibleFormatAdexUtils",
                ).isEligibleForEPASingleMediaSurface(e, r)
              ? "epa_single_media"
              : o(
                    "AdsFlexibleFormatAdexUtils",
                  ).isEligibleForEPAMultiMediaSurface(e, r)
                ? "epa_multi_medias"
                : o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(
                      e,
                    ) && !o("AdsAPIAdgroupRecordUtils").isFlexibleFormatAd(e)
                  ? "sa_single_image"
                  : o("AdsObjectTypeUtils").isDynamicProductAd(e) &&
                      o("AdsObjectTypeUtils").isTemplateCreative(e) &&
                      o(
                        "AdsDynamicAdsFormatUtils",
                      ).getIsDynamicAdCarouselMediaFormat(e)
                    ? "da_carousel"
                    : t.length > 0 &&
                        t.every(function (e) {
                          return o(
                            "AdsDASingleMediaFormatLiquidityUtils",
                          ).isEligibleForDASingleMediaFormatLiquidity(e);
                        })
                      ? "da_single_media"
                      : "unknown";
        },
        {
          name: i.id + ".adsUEditorFormatTransformationOriginalFormatSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
