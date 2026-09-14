__d(
  "AdsFormatTransformationManualUploadAssetPlugin",
  [
    "fbt",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatConstants",
    "AdsFlexibleFormatDropdownTooltipUtils",
    "AdsFlexibleFormatLoggingUtils",
    "AdsFlexibleFormatPreviewVariationConfig",
    "AdsFormatTransformationUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "DAFlexibleFormatUtils",
    "GeoColorSelectors",
    "GeoIcon.react",
    "GeoMediaItem.react",
    "GeoTooltip.react",
    "isTruthy",
    "meta-brand-i-circle-filled-12",
    "meta-brand-large-rectangle-three-squares-outline-16",
    "meta-brand-mountain-square-outline-24",
    "meta-brand-mountain-square-stacked-outline-16",
    "meta-brand-triangle-right-square-outline-16",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = { square: { width: "xh8yej3", height: "x5yr21d", $$css: !0 } },
      m = function (t, n) {
        var e = t.adObjectsList[0].adgroup,
          r = t.adObjectsList[0],
          a = o(
            "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
          ).getAdgroupSpecPathPlugin(r);
        return t.originalFormat === "sa_carousel"
          ? o(
              "AdsFormatTransformationUtils",
            ).getIsOptedInForSACarouselFormatTransformation(e, n, a)
          : !1;
      },
      p = {
        type: "format_transformation/data_source",
        key: "manual_uploads",
        getDescription: function (t) {
          return null;
        },
        getIsCollapsed: function () {
          return !1;
        },
        getIsSelected: function (t, n) {
          var e;
          return (t.uxVersion === "modal_format_preview" &&
            !t.isPCAUnifiedScaledAlpha &&
            o("AdsFormatTransformationUtils").isOriginalFormatPreview(
              t.originalFormat,
              n,
            )) ||
            (t.isPCAUnifiedScaledAlpha &&
              (o(
                "AdsFormatTransformationUtils",
              ).getPcaUnificationUploadedMediaPresent(null, t) ||
                o(
                  "AdsFormatTransformationUtils",
                ).getPcaUnificationRelatedMediaPresent(null, t))) ||
            (n === "single_media" &&
              t.originalFormat === "da_carousel" &&
              t.hasGlobalishRelatedMedia === !0 &&
              !o(
                "AdsFormatTransformationUtils",
              ).hasFormatTransformationWithDataSource(
                (e = t.adObjectsList[0]) == null ? void 0 : e.adgroup,
                "single_media",
                "none",
              ))
            ? !0
            : n != null &&
                (t.isPCAUnifiedOldFlow ||
                  t.isPCAUnifiedScaledAlpha ||
                  (t.uxVersion === "modal_format_preview" &&
                    t.originalFormat !== "sa_carousel") ||
                  (t.isEligibleForDACarouselNewDesign &&
                    t.adObjectsList.every(function (e) {
                      return o("DAFlexibleFormatUtils").hasDAIntroCard(
                        e.adgroup,
                      );
                    })))
              ? o("AdsFormatTransformationUtils").shouldSelectDataSource(
                  t,
                  n,
                  p.key,
                )
              : m(t, n);
        },
        getIsEligible: function (t, n) {
          if (r("isTruthy")(t.isPCAUnifiedScaledAlpha))
            return n === "single_media";
          if (
            t.uxVersion === "modal_format_preview" &&
            !t.isPCAUnifiedScaledAlpha &&
            t.originalFormat === "da_carousel"
          ) {
            if (n === "single_media") {
              var e,
                a = (e = t.adObjectsList[0]) == null ? void 0 : e.adgroup;
              return (
                t.hasGlobalishRelatedMedia === !0 ||
                (a != null && o("DAFlexibleFormatUtils").hasDAIntroCard(a)) ||
                (a != null && o("DAFlexibleFormatUtils").hasRelatedMedia(a))
              );
            }
            if (n === "da_collection") return !1;
          }
          if (
            (t.uxVersion === "modal_format_preview" &&
              n === "single_media" &&
              t.originalFormat === "sa_single_image") ||
            t.isPCAUnifiedOldFlow
          )
            return !0;
          if (t.originalFormat === "da_carousel")
            return !t.isEligibleForDACarouselNewDesign ||
              !t.adObjectsList.every(function (e) {
                return o("DAFlexibleFormatUtils").hasDAIntroCard(e.adgroup);
              })
              ? !1
              : n === "da_collection" ||
                  (n === "single_media" &&
                    o(
                      "DAFlexibleFormatUtils",
                    ).passFlexibleFormatAndRelatedMediaAdexGK("silent"));
          if (
            t.originalFormat !== "sa_carousel" ||
            t.adObjectsList.length !== 1
          )
            return !1;
          var i = t.adObjectsList[0],
            l = o(
              "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
            ).getAdgroupSpecPathPlugin(i);
          return n === "sa_collection"
            ? o(
                "AdsFlexibleFormatPreviewVariationConfig",
              ).isEligibleForSACarouselToStaticCollection(
                i.adgroup,
                l,
                t.originalFormat,
              ) ||
                o(
                  "AdsFlexibleFormatPreviewVariationConfig",
                ).isEligibleForSACarouselToVideoCollection(
                  i.adgroup,
                  l,
                  t.originalFormat,
                )
            : n === "single_media"
              ? o(
                  "AdsFlexibleFormatPreviewVariationConfig",
                ).isEligibleForSACarouselToSingleMedia(
                  i.adgroup,
                  l,
                  t.originalFormat,
                )
              : n === "video_slideshow"
                ? o(
                    "AdsFlexibleFormatPreviewVariationConfig",
                  ).isEligibleForSACarouselToVideoSlideshow(
                    i.adgroup,
                    l,
                    t.originalFormat,
                    !0,
                  )
                : n === "carousel" && t.uxVersion === "modal_format_preview"
                  ? !0
                  : n === "collage"
                    ? o(
                        "AdsFlexibleFormatPreviewVariationConfig",
                      ).isEligibleForSACarouselToCollage(
                        i.adgroup,
                        l,
                        t.originalFormat,
                      )
                    : !1;
        },
        getIsAvailable: function (t, n, a) {
          if ((t == null ? void 0 : t.uxVersion) === "modal_format_preview") {
            if (!t.isPCAUnifiedScaledAlpha) {
              if (
                o("AdsFormatTransformationUtils").isOriginalFormatPreview(
                  t.originalFormat,
                  n,
                )
              )
                return !1;
              if (t.originalFormat === "sa_carousel") {
                var e;
                if (
                  !o("AdsFormatTransformationUtils").hasSACarouselChildMedia(
                    (e = t.adObjectsList[0]) == null ? void 0 : e.adgroup,
                  )
                )
                  return !1;
              }
              return t.originalFormat === "da_carousel" && n === "single_media"
                ? !0
                : !o("AdsFormatTransformationUtils").genIsLastOptedInFormat(
                    t,
                    n,
                    p,
                    a,
                  );
            }
            var i = o(
                "AdsFormatTransformationUtils",
              ).getPcaUnificationUploadedMediaPresent(null, t),
              l = o(
                "AdsFormatTransformationUtils",
              ).getPcaUnificationRelatedMediaPresent(null, t);
            if (!r("isTruthy")(i || l)) return !1;
            var s = p.getIsSelected(t, n);
            return n === "single_media" && s
              ? !1
              : !o("AdsFormatTransformationUtils").genIsLastOptedInFormat(
                  t,
                  n,
                  p,
                  a,
                );
          }
          return t.isPCAUnifiedOldFlow
            ? !(
                !o(
                  "AdsFormatTransformationUtils",
                ).getPcaUnificationStaticDataSourceEligibility(t) ||
                (o(
                  "AdsFormatTransformationUtils",
                ).getPcaUnificationStaticDataSourceEligibility(t) &&
                  o("AdsFormatTransformationUtils").genIsLastOptedInFormat(
                    t,
                    n,
                    p,
                  ))
              )
            : !0;
        },
        unavailableMessage: function (t, n) {
          if (
            (t == null ? void 0 : t.uxVersion) === "modal_format_preview" &&
            !t.isPCAUnifiedScaledAlpha &&
            n === "single_media" &&
            (t == null ? void 0 : t.originalFormat) === "sa_single_image"
          )
            return o("AdsFlexibleFormatConstants").ADD_UPLOADED_MEDIA;
          if (
            t != null &&
            (t.isPCAUnifiedOldFlow || t.isPCAUnifiedScaledAlpha)
          ) {
            var e = t.isPCAUnifiedScaledAlpha;
            return o("AdsFormatTransformationUtils").genIsLastOptedInFormat(
              t,
              n,
              p,
            )
              ? o("AdsFlexibleFormatConstants").LAST_SELECTED_FORMAT_LOCKED
              : e
                ? o("AdsFlexibleFormatConstants").ADD_UPLOADED_MEDIA
                : o("AdsFlexibleFormatConstants").UPLOADED_MEDIA_UNAVAILABLE;
          }
        },
        getTitle: function (n, a, i) {
          if ((a == null ? void 0 : a.originalFormat) === "sa_carousel" && !n)
            return o("AdsFlexibleFormatConstants").SA_CAROUSEL_OPTION_LABEL;
          if (n == null)
            return o("AdsFlexibleFormatConstants").MANUAL_FORMAT_HEADER_LABEL;
          if (
            a != null &&
            r("isTruthy")(a == null ? void 0 : a.isPCAUnifiedScaledAlpha)
          )
            return o("AdsFlexibleFormatConstants")
              .USE_MANUAL_UPLOADS_FOR_PCAU_FORMAT_TRANSFORMATION_LABEL;
          if (
            i === !0 &&
            r("isTruthy")(a == null ? void 0 : a.isPCAUnifiedOldFlow)
          )
            return o("AdsFlexibleFormatConstants").MANUAL_FORMAT_HEADER_LABEL;
          if (a != null && a.isPCAUnifiedOldFlow)
            switch (n) {
              case "carousel":
                return o("AdsFlexibleFormatConstants")
                  .MANUAL_CAROUSEL_FORMAT_TRANSFORMATION_LABEL;
              case "da_collection":
                return o("AdsFlexibleFormatConstants")
                  .MANUAL_COLLECTION_FORMAT_TRANSFORMATION_LABEL;
              default:
                return o("AdsFlexibleFormatConstants")
                  .MANUAL_FORMAT_TRANSFORMATION_LABEL;
            }
          if (
            n === "da_collection" &&
            a != null &&
            a.isEligibleForDACarouselNewDesign &&
            a.adObjectsList.every(function (e) {
              return o("DAFlexibleFormatUtils").hasDAIntroCard(e.adgroup);
            })
          )
            return o("AdsFlexibleFormatConstants")
              .MANUAL_COLLECTION_FORMAT_TRANSFORMATION_LABEL_DA_REVAMP;
          if ((a == null ? void 0 : a.originalFormat) === "sa_carousel" && n) {
            var t = a.adObjectsList[0].adgroup.id,
              l = m(a, n),
              u = a.originalFormat,
              _,
              f,
              g = null,
              h;
            switch (n) {
              case "single_media":
                (o("AdsFlexibleFormatAdexUtils").passGKForC2V()
                  ? (f = o(
                      "AdsFlexibleFormatDropdownTooltipUtils",
                    ).renderFdoDropdownTooltip(
                      o("AdsFlexibleFormatConstants")
                        .SINGLE_MEDIA_FORMAT_HEADING,
                      o("AdsFlexibleFormatConstants")
                        .C2V_SINGLE_MEDIA_FORMAT_TOOLTIP_CONTENT,
                      "/images/ads/ads_manager/metadata/AM-APlusC-Single-Image-Video-Spot-b4b_light-4x.png",
                      a,
                    ))
                  : (_ = o(
                      "AdsFlexibleFormatConstants",
                    ).SINGLE_MEDIA_OPTION_LABEL_TOOLTIP),
                  (g = o(
                    "meta-brand-mountain-square-stacked-outline-16",
                  ).metaBrandMountainSquareStackedPhotoOutline16),
                  (h =
                    (a == null ? void 0 : a.uxVersion) ===
                    "modal_format_preview"
                      ? o("AdsFlexibleFormatConstants")
                          .SA_SINGLE_MEDIA_OPTION_LABEL_RC
                      : o("AdsFlexibleFormatConstants")
                          .SA_CAROUSEL_SINGLE_MEDIA_OPTION_LABEL));
                break;
              case "sa_collection":
                (o("AdsFlexibleFormatAdexUtils").passGKForC2V()
                  ? (f = o(
                      "AdsFlexibleFormatDropdownTooltipUtils",
                    ).renderFdoDropdownTooltip(
                      o("AdsFlexibleFormatConstants").COLLECTION_FORMAT_HEADING,
                      o("AdsFlexibleFormatConstants")
                        .C2V_COLLECTION_FORMAT_TOOLTIP_CONTENT,
                      "/images/ads/ads_manager/metadata/AM-APlusC-Collection-Spot-b4b_light-4x.png",
                      a,
                      { width: "135px", height: "auto" },
                    ))
                  : (_ = o(
                      "AdsFlexibleFormatConstants",
                    ).COLLECTION_OPTION_LABEL_TOOLTIP),
                  (g = o(
                    "meta-brand-large-rectangle-three-squares-outline-16",
                  ).metaBrandLargeRectangleThreeSquaresGrid13Outline16),
                  (h =
                    (a == null ? void 0 : a.uxVersion) ===
                    "modal_format_preview"
                      ? o("AdsFlexibleFormatConstants")
                          .SA_SINGLE_MEDIA_OPTION_LABEL_RC
                      : o("AdsFlexibleFormatConstants")
                          .SA_CAROUSEL_COLLECTION_OPTION_LABEL));
                break;
              case "video_slideshow":
                ((f = o(
                  "AdsFlexibleFormatDropdownTooltipUtils",
                ).renderFdoDropdownTooltip(
                  o("AdsFlexibleFormatConstants")
                    .VIDEO_SLIDESHOW_FORMAT_HEADING,
                  o("AdsFlexibleFormatConstants")
                    .C2V_VIDEO_SLIDESHOW_FORMAT_TOOLTIP_CONTENT,
                  "/images/ads/ads_manager/metadata/AM-APlusC-Single-Image-Video-Spot-b4b_light-4x.png",
                  a,
                )),
                  (g = o(
                    "meta-brand-triangle-right-square-outline-16",
                  ).metaBrandTriangleRightSquareVideoOutline16),
                  (h =
                    (a == null ? void 0 : a.uxVersion) ===
                    "modal_format_preview"
                      ? o("AdsFlexibleFormatConstants")
                          .SA_SINGLE_MEDIA_OPTION_LABEL_RC
                      : o("AdsFlexibleFormatConstants")
                          .SA_CAROUSEL_VIDEO_SLIDESHOW_OPTION_LABEL));
                break;
              case "carousel":
              case "collage":
                h = o(
                  "AdsFlexibleFormatConstants",
                ).SA_SINGLE_MEDIA_OPTION_LABEL_RC;
                break;
              default:
                h = o("AdsFlexibleFormatConstants").MANUAL_UPLOADS_LABEL;
            }
            if ((a == null ? void 0 : a.uxVersion) === "modal_format_preview")
              return h;
            var y =
                f != null
                  ? f
                  : _ != null
                    ? c.jsx(r("GeoTooltip.react"), {
                        content: _,
                        onToggle: function () {
                          o(
                            "AdsFlexibleFormatLoggingUtils",
                          ).logFormatTransformationReactiveControlTooltipToggle(
                            babelHelpers.extends({}, a.logData, {
                              adgroupID: t,
                              enrollStatus: l === !0 ? "OPT_IN" : "OPT_OUT",
                              dataSource: p.key,
                              format: n,
                              originalFormat: u,
                            }),
                          );
                        },
                        position: "right",
                        children: c.jsx(r("GeoIcon.react"), {
                          icon: o("meta-brand-i-circle-filled-12")
                            .metaBrandICircleInfoCircleFilled12,
                        }),
                      })
                    : null,
              C =
                g != null &&
                (a == null ? void 0 : a.uxVersion) !== "modal_format_preview"
                  ? c.jsx(r("GeoMediaItem.react"), {
                      media: c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(
                            "div",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(
                                d.square,
                                o(
                                  "GeoColorSelectors",
                                ).selectStaticBackgroundColor({
                                  surface: "page",
                                }),
                              ),
                            ),
                          ),
                          c.jsx(r("GeoIcon.react"), { icon: g }),
                        ],
                      }),
                      size: 24,
                    })
                  : null;
            return s._(/*BTDS*/ "{content}", [
              s._param(
                "content",
                c.jsxs("span", {
                  style: { display: "flex", alignItems: "center", gap: "4px" },
                  children: [C, h, y],
                }),
              ),
            ]);
          }
          if (
            (a == null ? void 0 : a.uxVersion) === "modal_format_preview" &&
            n === "single_media" &&
            ((a == null ? void 0 : a.originalFormat) === "sa_single_image" ||
              (a == null ? void 0 : a.originalFormat) === "da_carousel")
          )
            return o("AdsFlexibleFormatConstants")
              .SA_SINGLE_MEDIA_OPTION_LABEL_RC;
          switch (n) {
            case "sa_collection":
              return o("AdsFlexibleFormatConstants").COLLECTION_OPTION_LABEL;
            case "single_media":
              return o("AdsFlexibleFormatConstants").SINGLE_MEDIA_OPTION_LABEL;
            default:
              return o("AdsFlexibleFormatConstants").MANUAL_UPLOADS_LABEL;
          }
        },
        linkedDataSources: function (t, n) {
          return t.uxVersion === "modal_format_preview" &&
            !t.isPCAUnifiedScaledAlpha &&
            n === "single_media" &&
            t.originalFormat === "da_carousel"
            ? ["related_media"]
            : null;
        },
        imageSrcs: function (t) {
          if (t.isEligibleForDACarouselNewDesign) return null;
          if (t.isPCAUnifiedOldFlow) {
            var e = o(
                "meta-brand-mountain-square-outline-24",
              ).metaBrandMountainSquarePhotoSquareOutline24,
              n = String(e);
            return [n];
          }
          return [];
        },
        tooltipMessage: function (t) {
          return t != null && t.isPCAUnifiedScaledAlpha
            ? s._(
                /*BTDS*/ "Includes all uploaded, related and generated media.",
              )
            : null;
        },
        formatModalPreviewConfig: function (t, n) {
          if (t === "carousel")
            return (n == null ? void 0 : n.originalFormat) === "sa_carousel"
              ? {
                  previewDescription: o("AdsFlexibleFormatConstants")
                    .SA_CAROUSEL_ORIGINAL_PREVIEW_DESCRIPTION,
                }
              : {};
          if (t === "single_media") {
            if (
              (n == null ? void 0 : n.uxVersion) === "modal_format_preview" &&
              !(n != null && n.isPCAUnifiedScaledAlpha) &&
              (n == null ? void 0 : n.originalFormat) === "da_carousel"
            )
              return {
                getPreviewDescription: function (t) {
                  var e = t == null ? void 0 : t.assetSource;
                  return e === "related-media" || e === "related-media-da"
                    ? s._(
                        /*BTDS*/ "Show either a single image or video from your related media.",
                      )
                    : s._(
                        /*BTDS*/ "Show either a single image or video from your uploaded media.",
                      );
                },
              };
            var e = (n == null ? void 0 : n.isPCAUnifiedScaledAlpha) === !0;
            return e
              ? {
                  getPreviewDescription: function (t) {
                    var e = t == null ? void 0 : t.assetSource;
                    return e === "gen-ai"
                      ? s._(
                          /*BTDS*/ "Show either a single image or video from your generated media.",
                        )
                      : e === "related-media" || e === "related-media-da"
                        ? s._(
                            /*BTDS*/ "Show either a single image or video from your related media.",
                          )
                        : s._(
                            /*BTDS*/ "Show either a single image or video from your uploaded media.",
                          );
                  },
                  tooltipMessage: o("AdsFlexibleFormatConstants")
                    .SINGLE_MEDIA_OPTION_LABEL_TOOLTIP,
                }
              : (n == null ? void 0 : n.uxVersion) === "modal_format_preview" &&
                  !(n != null && n.isPCAUnifiedScaledAlpha) &&
                  (n == null ? void 0 : n.originalFormat) === "sa_single_image"
                ? {
                    getPreviewDescription: function (t) {
                      var e = t == null ? void 0 : t.assetSource;
                      return e === "gen-ai"
                        ? o("AdsFlexibleFormatConstants")
                            .SA_SINGLE_MEDIA_GEN_AI_PREVIEW_DESCRIPTION
                        : e === "related-media" || e === "related-media-da"
                          ? o("AdsFlexibleFormatConstants")
                              .SA_SINGLE_MEDIA_RELATED_MEDIA_PREVIEW_DESCRIPTION
                          : o("AdsFlexibleFormatConstants")
                              .SA_SINGLE_MEDIA_PREVIEW_DESCRIPTION;
                    },
                    tooltipMessage: o("AdsFlexibleFormatConstants")
                      .SINGLE_MEDIA_OPTION_LABEL_TOOLTIP,
                  }
                : {
                    previewDescription:
                      (n == null ? void 0 : n.originalFormat) === "sa_carousel"
                        ? o("AdsFlexibleFormatConstants")
                            .SA_CAROUSEL_TO_SINGLE_MEDIA_PREVIEW_DESCRIPTION
                        : o("AdsFlexibleFormatConstants")
                            .SA_SINGLE_MEDIA_PREVIEW_DESCRIPTION,
                    tooltipMessage: o("AdsFlexibleFormatConstants")
                      .SINGLE_MEDIA_OPTION_LABEL_TOOLTIP,
                  };
          }
          return t === "sa_collection"
            ? {
                previewDescription:
                  (n == null ? void 0 : n.originalFormat) === "sa_carousel"
                    ? o("AdsFlexibleFormatConstants")
                        .SA_CAROUSEL_TO_COLLECTION_PREVIEW_DESCRIPTION
                    : void 0,
                tooltipMessage: o("AdsFlexibleFormatConstants")
                  .COLLECTION_OPTION_LABEL_TOOLTIP,
              }
            : t === "video_slideshow"
              ? {
                  previewDescription: s._(
                    /*BTDS*/ "Show your carousel cards together in a video slideshow.",
                  ),
                }
              : t === "collage"
                ? {
                    previewDescription: s._(
                      /*BTDS*/ "Show this ad's uploaded media together in a collage.",
                    ),
                  }
                : {};
        },
      },
      _ = p;
    l.default = _;
  },
  226,
);
