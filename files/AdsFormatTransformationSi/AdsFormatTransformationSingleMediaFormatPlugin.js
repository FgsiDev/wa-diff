__d(
  "AdsFormatTransformationSingleMediaFormatPlugin",
  [
    "fbt",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatConstants",
    "AdsFlexibleFormatFormatTransformationDataSourceAction",
    "AdsFlexibleFormatSACarouselToggleOptedInStatusAction",
    "AdsFlexibleFormatTooltipComponent.react",
    "AdsFormatTransformationUtils",
    "DAFlexibleFormatUtils",
    "GeoIcon.react",
    "immutable",
    "meta-brand-mountain-square-filled-16",
    "meta-brand-mountain-square-outline-16",
    "meta-business-illustrations-am-aplusc-single-image-video-spot-b4b",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        type: "format_transformation/format",
        key: "single_media",
        previewFormat: "SINGLE_MEDIA",
        getDescription: function (t) {
          return (t == null && s._(/*BTDS*/ "On"), s._(/*BTDS*/ "On"));
        },
        getIsCollapsed: function () {
          return !0;
        },
        disabledPlaceholder: function (t) {
          return t != null &&
            o(
              "AdsFormatTransformationUtils",
            ).getAdsPcaUnificationFormatEligibility(t)
            ? o("AdsFlexibleFormatConstants").MANUAL_UPLOADS_AND_CATALOG_MISSING
            : "";
        },
        getIsDisabled: function (t) {
          return !!(
            o(
              "AdsFormatTransformationUtils",
            ).getAdsPcaUnificationFormatEligibility(t) &&
            !(
              o(
                "AdsFormatTransformationUtils",
              ).getPcaUnificationDynamicDataSourceEligibility(t) ||
              o(
                "AdsFormatTransformationUtils",
              ).getPcaUnificationStaticDataSourceEligibility(t)
            )
          );
        },
        getIsSelected: function (t) {
          var e,
            n = t.adObjectsList[0].adgroup,
            a =
              n == null || (e = n.creative) == null
                ? void 0
                : e.format_transformation_spec;
          if (t.originalFormat === "sa_carousel") {
            var i,
              l =
                (n == null ||
                (i = n.creative) == null ||
                (i = i.degrees_of_freedom_spec) == null ||
                (i = i.creative_features_spec) == null ||
                (i = i.carousel_to_video) == null
                  ? void 0
                  : i.enroll_status) === "OPT_OUT";
            return a == null
              ? !l
              : a.size === 0
                ? !0
                : a.some(function (e) {
                    var t = e.get("data_source");
                    return (
                      e.get("format") === "single_media" &&
                      t instanceof r("immutable").List &&
                      t.includes("manual_uploads")
                    );
                  });
          } else if (t.originalFormat === "da_carousel") {
            var s;
            return o(
              "AdsFormatTransformationUtils",
            ).getIsEligibleForDACatalogSingleMediaFormatTransformation(t, !0) &&
              o(
                "AdsFormatTransformationUtils",
              ).getIsOptedInForDACatalogSingleMediaFormatTransformation(t)
              ? !0
              : a == null || a.size === 0
                ? !1
                : t.hasGlobalishRelatedMedia === !0 &&
                    !o(
                      "AdsFormatTransformationUtils",
                    ).hasFormatTransformationWithDataSource(
                      (s = t.adObjectsList[0]) == null ? void 0 : s.adgroup,
                      "single_media",
                      "none",
                    )
                  ? !0
                  : a.some(function (e) {
                      var t = e.get("data_source");
                      return (
                        e.get("format") === "single_media" &&
                        t instanceof r("immutable").List &&
                        t.includes("related_media")
                      );
                    });
          }
          return !1;
        },
        getIsEligible: function (t) {
          return t.isPCAUnifiedScaledAlpha ||
            (t.uxVersion === "modal_format_preview" &&
              t.originalFormat === "sa_single_image")
            ? !0
            : t.originalFormat === "sa_carousel"
              ? !o("AdsFormatTransformationUtils").isSACarouselVideoAd(t)
              : !!(
                  o(
                    "AdsFormatTransformationUtils",
                  ).getAdsPcaUnificationFormatEligibility(t) === !0 ||
                  o(
                    "AdsFormatTransformationUtils",
                  ).getIsEligibleForDACatalogSingleMediaFormatTransformation(
                    t,
                    !0,
                  ) ||
                  (t.originalFormat === "da_carousel" &&
                    t.isEligibleForDACarouselNewDesign &&
                    (t.hasGlobalishRelatedMedia === !0 ||
                      t.adObjectsList.every(function (e) {
                        return (
                          o("DAFlexibleFormatUtils").hasRelatedMedia(
                            e.adgroup,
                          ) ||
                          o("DAFlexibleFormatUtils").hasDAIntroCard(e.adgroup)
                        );
                      })))
                );
        },
        supportedSources: ["catalog", "manual_uploads", "related_media"],
        getTitle: function (t, n, r) {
          return (t == null ? void 0 : t.uxVersion) === "modal_format_preview"
            ? o("AdsFlexibleFormatConstants").SINGLE_MEDIA_FORMAT_HEADING
            : (t == null ? void 0 : t.originalFormat) === "da_carousel" &&
                r !== !0
              ? o("AdsFlexibleFormatConstants").DA_CAROUSEL_SINGLE_MEDIA_HEADING
              : o("AdsFlexibleFormatConstants")
                  .UNIFICATION_SINGLE_MEDIA_HEADING;
        },
        horizontalHeaderConfig: function () {
          return {
            icon: u.jsx(r("GeoIcon.react"), {
              icon: o("meta-brand-mountain-square-filled-16")
                .metaBrandMountainSquarePhotoSquareFilled16,
            }),
            title: o("AdsFlexibleFormatConstants")
              .SINGLE_MEDIA_HORIZONTAL_TAB_HEADING,
            tooltip: o("AdsFlexibleFormatConstants")
              .SINGLE_MEDIA_HORIZONTAL_TAB_TOOLTIP,
          };
        },
        toggleOptedInStatus: function (t, n, a, l) {
          if (
            l != null &&
            a != null &&
            (o(
              "AdsFormatTransformationUtils",
            ).getAdsPcaUnificationFormatEligibility(l) ||
              l.isPCAUnifiedScaledAlpha)
          ) {
            r("AdsFlexibleFormatFormatTransformationDataSourceAction").dispatch(
              {
                adgroupIDs: t,
                dataSource: a,
                format: c.key,
                hasOptedIn: n,
                hostID: l == null ? void 0 : l.hostID,
                skipAssetFeedSpecChanges: l.isPCAUnifiedOldFlow,
              },
              {
                line: "217",
                module: "AdsFormatTransformationSingleMediaFormatPlugin.js",
                moduleID: i.id,
              },
            );
            return;
          }
          var e = l == null ? void 0 : l.originalFormat;
          if (t.length === 1) {
            var s = l == null ? void 0 : l.adObjectsList[0].adgroup;
            s == null ||
              l == null ||
              (e === "sa_carousel" &&
                a === "manual_uploads" &&
                r(
                  "AdsFlexibleFormatSACarouselToggleOptedInStatusAction",
                ).dispatch(
                  {
                    adgroupIDs: t,
                    hasOptedIn: n,
                    dataSource: a,
                    context: l,
                    targetFormat: c.key,
                  },
                  {
                    line: "239",
                    module: "AdsFormatTransformationSingleMediaFormatPlugin.js",
                    moduleID: i.id,
                  },
                ),
              e === "da_carousel" &&
                a != null &&
                r(
                  "AdsFlexibleFormatFormatTransformationDataSourceAction",
                ).dispatch(
                  {
                    adgroupIDs: t,
                    dataSource: a,
                    format: c.key,
                    formatTransformationSpecFormat:
                      a === "catalog" ? "catalog_single_media" : void 0,
                    hasOptedIn: n,
                    hostID: l == null ? void 0 : l.hostID,
                    skipAssetFeedSpecChanges: !0,
                  },
                  {
                    line: "249",
                    module: "AdsFormatTransformationSingleMediaFormatPlugin.js",
                    moduleID: i.id,
                  },
                ));
          }
        },
        imageSrc: function (t) {
          var e;
          return o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
            (e = t == null ? void 0 : t.uxVersion) != null ? e : "",
          ) || (t == null ? void 0 : t.uxVersion) === "modal_format_preview"
            ? u.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-mountain-square-outline-16")
                  .metaBrandMountainSquarePhotoSquareOutline16,
              })
            : null;
        },
        tooltipComponent: function (t) {
          var e;
          return t != null &&
            o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
              (e = t.uxVersion) != null ? e : "",
            ) &&
            t.isEligibleForDACarouselNewDesign
            ? u.jsx(
                o("AdsFlexibleFormatTooltipComponent.react")
                  .AdsFlexibleFormatTooltipComponent,
                {
                  description: o("AdsFlexibleFormatConstants")
                    .SINGLE_MEDIA_FORMAT_TOOLTIP_CONTENT,
                  imageBackgroundStyle: {
                    backgroundColor: "#F2F2F2",
                    flexGrow: 1,
                    padding: "16px 0px 10px 0px",
                  },
                  imageSrc: o(
                    "meta-business-illustrations-am-aplusc-single-image-video-spot-b4b",
                  ).metaBusinessIllustrationsAmApluscSingleImageVideoSpotB4b,
                  imageStyle: { width: "135px", height: "auto" },
                  showImageInMiddle: !1,
                  title: o("AdsFlexibleFormatConstants")
                    .SINGLE_MEDIA_FORMAT_TOOLTIP_TITLE,
                },
              )
            : null;
        },
      },
      d = c;
    l.default = d;
  },
  226,
);
