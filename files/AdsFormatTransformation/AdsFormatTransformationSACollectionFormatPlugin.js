__d(
  "AdsFormatTransformationSACollectionFormatPlugin",
  [
    "fbt",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatConstants",
    "AdsFlexibleFormatSACarouselToggleOptedInStatusAction",
    "AdsFlexibleFormatToggleForOptionAction",
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
      c = {
        type: "format_transformation/format",
        key: "sa_collection",
        previewFormat: "COLLECTION",
        getDescription: function (t) {
          return (t == null && s._(/*BTDS*/ "On"), s._(/*BTDS*/ "On"));
        },
        getIsCollapsed: function () {
          return !0;
        },
        getIsSelected: function (t) {
          return !0;
        },
        getIsEligible: function (t) {
          return t.isPCAUnifiedScaledAlpha
            ? !0
            : t.originalFormat === "sa_carousel"
              ? !o("AdsFormatTransformationUtils").isSACarouselVideoAd(t)
              : t.adObjectsList.some(function (e) {
                  var n = e.adgroup,
                    r = e.campaign,
                    a = e.campaignGroup;
                  return o(
                    "AdsFlexibleFormatAdexUtils",
                  ).isEligibleForEPASingleMediaSurface(
                    n,
                    t.existingPostPhotoCount,
                  ) ||
                    o(
                      "AdsFlexibleFormatAdexUtils",
                    ).isEligibleForEPAMultiMediaSurface(
                      n,
                      t.existingPostPhotoCount,
                    )
                    ? !0
                    : o(
                        "AdsFlexibleFormatAdexUtils",
                      ).isEligibleForReactiveControlPESE(r, a, n, !0);
                });
        },
        supportedSources: ["catalog", "site_links", "manual_uploads"],
        getTitle: function (t, n, r) {
          var e;
          return n == null &&
            ((t == null ? void 0 : t.uxVersion) === "format" ||
              r === !0 ||
              (t == null ? void 0 : t.uxVersion) === "modal_format_preview")
            ? o("AdsFlexibleFormatConstants").COLLECTION_FORMAT_HEADING
            : n == null &&
                o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
                  (e = t == null ? void 0 : t.uxVersion) != null ? e : "",
                )
              ? o("AdsFlexibleFormatConstants").SIMPLIFIED_COLLECTION_LABEL
              : o("AdsFlexibleFormatConstants").COLLECTION_OPTION_LABEL;
        },
        toggleOptedInStatus: function (t, n, o, a) {
          if (t.length === 1) {
            var e = a == null ? void 0 : a.adObjectsList[0].adgroup;
            if (!(e == null || a == null)) {
              var l = a == null ? void 0 : a.originalFormat;
              (l === "sa_carousel" &&
                o === "manual_uploads" &&
                r(
                  "AdsFlexibleFormatSACarouselToggleOptedInStatusAction",
                ).dispatch(
                  {
                    adgroupIDs: t,
                    hasOptedIn: n,
                    dataSource: o,
                    context: a,
                    targetFormat: c.key,
                  },
                  {
                    line: "140",
                    module:
                      "AdsFormatTransformationSACollectionFormatPlugin.js",
                    moduleID: i.id,
                  },
                ),
                o != null &&
                  a.isEligibleForPESE === !0 &&
                  r("AdsFlexibleFormatToggleForOptionAction").dispatch(
                    {
                      adgroupIDs: t,
                      hasOptedIn: n,
                      context: a,
                      dataSource: o,
                      targetFormat: "sa_collection",
                    },
                    {
                      line: "154",
                      module:
                        "AdsFormatTransformationSACollectionFormatPlugin.js",
                      moduleID: i.id,
                    },
                  ));
            }
          }
        },
        tooltipComponent: function (t) {
          return (t == null ? void 0 : t.isEligibleForPESE) === !0 &&
            (t == null ? void 0 : t.uxVersion) !== "simplified_format"
            ? null
            : u.jsx(
                o("AdsFlexibleFormatTooltipComponent.react")
                  .AdsFlexibleFormatTooltipComponent,
                {
                  description: o("AdsFlexibleFormatConstants")
                    .SA_COLLECTION_FORMAT_TOOLTIP_CONTENT,
                  imageBackgroundStyle: {
                    backgroundColor: "#F2F2F2",
                    flexGrow: 1,
                    padding: "16px 0px 10px 0px",
                  },
                  imageSrc:
                    "/images/ads/ads_manager/metadata/collection_ff.png",
                  imageStyle: { width: "135px", height: "auto" },
                  logData:
                    (t == null ? void 0 : t.logData) == null
                      ? void 0
                      : babelHelpers.extends(
                          {},
                          t == null ? void 0 : t.logData,
                          { format: "sa_collection" },
                        ),
                  showImageInMiddle: !1,
                  title: o("AdsFlexibleFormatConstants")
                    .COLLECTION_FORMAT_HEADING,
                },
              );
        },
        tooltipConfig: function (t) {
          if ((t == null ? void 0 : t.isEligibleForPESE) === !0)
            return {
              title: o("AdsFlexibleFormatConstants").COLLECTION_FORMAT_HEADING,
              description: o("AdsFlexibleFormatConstants")
                .SA_COLLECTION_FORMAT_TOOLTIP_CONTENT,
              image: "/images/ads/ads_manager/metadata/collection_ff.png",
            };
        },
        imageSrc: function (t) {
          var e;
          return o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
            (e = t == null ? void 0 : t.uxVersion) != null ? e : "",
          )
            ? u.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-large-rectangle-three-squares-outline-16")
                  .metaBrandLargeRectangleThreeSquaresOutline16,
              })
            : (t == null ? void 0 : t.uxVersion) === "modal_format_preview"
              ? u.jsx(r("GeoIcon.react"), {
                  icon: o("meta-brand-large-rectangle-three-squares-outline-16")
                    .metaBrandLargeRectangleThreeSquaresGrid13Outline16,
                })
              : null;
        },
      },
      d = c;
    l.default = d;
  },
  226,
);
