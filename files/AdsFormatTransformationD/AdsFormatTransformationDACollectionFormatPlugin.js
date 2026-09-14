__d(
  "AdsFormatTransformationDACollectionFormatPlugin",
  [
    "fbt",
    "AdsDASingleMediaFormatLiquidityUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatConstants",
    "AdsFlexibleFormatDACollectionToggleOptedInStatusAction",
    "AdsFlexibleFormatDAUtils",
    "AdsFlexibleFormatFormatTransformationDataSourceAction",
    "AdsFlexibleFormatTooltipComponent.react",
    "AdsFormatTransformationUtils",
    "GeoIcon.react",
    "meta-brand-large-rectangle-three-squares-outline-16",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = function (t) {
        var e;
        return (
          t != null &&
          o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
            (e = t.uxVersion) != null ? e : "",
          ) &&
          t.isEligibleForDACarouselNewDesign
        );
      },
      d = {
        type: "format_transformation/format",
        key: "da_collection",
        previewFormat: "COLLECTION",
        getDescription: function () {
          return null;
        },
        getIsCollapsed: function () {
          return !1;
        },
        disabledPlaceholder: function (t) {
          return t != null &&
            o(
              "AdsFormatTransformationUtils",
            ).getAdsPcaUnificationFormatEligibility(t)
            ? o("AdsFlexibleFormatConstants").CATALOG_MISSING
            : "";
        },
        disabledMessage: function (t) {
          return t != null &&
            o(
              "AdsFormatTransformationUtils",
            ).getAdsPcaUnificationFormatEligibility(t)
            ? o("AdsFlexibleFormatConstants").DA_FORMATS_DISABLED
            : null;
        },
        getIsDisabled: function (t) {
          return !!(
            o(
              "AdsFormatTransformationUtils",
            ).getAdsPcaUnificationFormatEligibility(t) &&
            !o(
              "AdsFormatTransformationUtils",
            ).getPcaUnificationDynamicDataSourceEligibility(t)
          );
        },
        getIsSelected: function (t) {
          var e = o(
            "AdsDASingleMediaFormatLiquidityUtils",
          ).getAdsDASingleMediaFormatLiquidityEligibility(t);
          return e
            ? t.adObjectsList.every(function (e) {
                return o(
                  "AdsDASingleMediaFormatLiquidityUtils",
                ).isOptedInForDASingleMediaRenderAsCollectionForAdObjects(e);
              })
            : o(
                "AdsFormatTransformationUtils",
              ).getIsOptedInForDACarouselToCollectionTransformation(t);
        },
        getIsEligible: function (t) {
          return t.isPCAUnifiedScaledAlpha
            ? !1
            : o(
                "AdsDASingleMediaFormatLiquidityUtils",
              ).getAdsDASingleMediaFormatLiquidityEligibility(t) ||
                o(
                  "AdsFormatTransformationUtils",
                ).getAdsPcaUnificationFormatEligibility(t) ||
                c(t) ||
                t.adObjectsList.some(function (e) {
                  var t = e.adgroup;
                  return o(
                    "AdsFlexibleFormatDAUtils",
                  ).isReactiveControlCardVisibleForDA(t);
                });
        },
        supportedSources: ["catalog", "manual_uploads", "related_media"],
        getTitle: function (t, n, r) {
          return t != null &&
            (o(
              "AdsFormatTransformationUtils",
            ).getAdsPcaUnificationFormatEligibility(t) ||
              t.uxVersion === "modal_format_preview")
            ? o("AdsFlexibleFormatConstants")
                .COLLECTION_UNFICATION_FORMAT_HEADING
            : c(t) ||
                o(
                  "AdsDASingleMediaFormatLiquidityUtils",
                ).getAdsDASingleMediaFormatLiquidityEligibility(t)
              ? r === !0
                ? o("AdsFlexibleFormatConstants")
                    .COLLECTION_UNFICATION_FORMAT_HEADING
                : o("AdsFlexibleFormatConstants").SIMPLIFIED_COLLECTION_LABEL
              : s._(/*BTDS*/ "Show ad as a collection");
        },
        toggleOptedInStatus: function (t, n, a, l) {
          var e = o(
            "AdsDASingleMediaFormatLiquidityUtils",
          ).getAdsDASingleMediaFormatLiquidityEligibility(l);
          if (
            l != null &&
            a != null &&
            (e ||
              o(
                "AdsFormatTransformationUtils",
              ).getAdsPcaUnificationFormatEligibility(l) ||
              l.isPCAUnifiedScaledAlpha ||
              l.isEligibleForDACarouselNewDesign)
          ) {
            r("AdsFlexibleFormatFormatTransformationDataSourceAction").dispatch(
              {
                adgroupIDs: t,
                dataSource: a,
                format: d.key,
                hasOptedIn: n,
                hostID: l == null ? void 0 : l.hostID,
                skipAssetFeedSpecChanges: l.isPCAUnifiedOldFlow || e,
              },
              {
                line: "159",
                module: "AdsFormatTransformationDACollectionFormatPlugin.js",
                moduleID: i.id,
              },
            );
            return;
          }
          r("AdsFlexibleFormatDACollectionToggleOptedInStatusAction").dispatch(
            { adgroupIDs: t, hasOptedIn: n, dataSource: a },
            {
              line: "171",
              module: "AdsFormatTransformationDACollectionFormatPlugin.js",
              moduleID: i.id,
            },
          );
        },
        imageSrc: function (t) {
          return c(t) ||
            (t == null ? void 0 : t.uxVersion) === "modal_format_preview"
            ? u.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-large-rectangle-three-squares-outline-16")
                  .metaBrandLargeRectangleThreeSquaresGrid13Outline16,
              })
            : null;
        },
        tooltipComponent: function (t) {
          var e = o(
            "AdsDASingleMediaFormatLiquidityUtils",
          ).getAdsDASingleMediaFormatLiquidityEligibility(t);
          return c(t) || e
            ? u.jsx(
                o("AdsFlexibleFormatTooltipComponent.react")
                  .AdsFlexibleFormatTooltipComponent,
                {
                  description: e
                    ? o("AdsFlexibleFormatConstants")
                        .DA_COLLECTION_FORMAT_TOOLTIP_CONTENT_FOR_DA_SM
                    : o("AdsFlexibleFormatConstants")
                        .DA_COLLECTION_FORMAT_TOOLTIP_CONTENT,
                  imageBackgroundStyle: {
                    backgroundColor: "#F2F2F2",
                    flexGrow: 1,
                    padding: "16px 0px 10px 0px",
                  },
                  imageSrc:
                    "/images/ads/ads_manager/metadata/collection_ff.png",
                  imageStyle: { width: "135px", height: "auto" },
                  logData: t == null ? void 0 : t.logData,
                  showImageInMiddle: !1,
                  title: o("AdsFlexibleFormatConstants")
                    .COLLECTION_FORMAT_HEADING,
                },
              )
            : null;
        },
        tooltipConfig: function (t) {
          if (c(t))
            return {
              title: o("AdsFlexibleFormatConstants").COLLECTION_FORMAT_HEADING,
              description: o("AdsFlexibleFormatConstants")
                .DA_COLLECTION_FORMAT_TOOLTIP_CONTENT,
              image: "/images/ads/ads_manager/metadata/collection_ff.png",
            };
        },
      },
      m = d;
    l.default = m;
  },
  226,
);
