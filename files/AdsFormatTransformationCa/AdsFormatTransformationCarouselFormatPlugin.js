__d(
  "AdsFormatTransformationCarouselFormatPlugin",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatConstants",
    "AdsFlexibleFormatFormatTransformationDataSourceAction",
    "AdsFlexibleFormatToggleForOptionAction",
    "AdsFlexibleFormatTooltipComponent.react",
    "AdsFormatTransformationUtils",
    "AdsUEditorMessagingDestinationUtils",
    "GeoIcon.react",
    "gkx",
    "meta-brand-three-horizontal-rectangles-outline-16",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { rotatedIcon: { transform: "x1iffjtl", $$css: !0 } },
      d = {
        type: "format_transformation/format",
        key: "carousel",
        previewFormat: "CAROUSEL",
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
          return !0;
        },
        getIsEligible: function (t) {
          return t.isPCAUnifiedScaledAlpha ||
            o(
              "AdsFormatTransformationUtils",
            ).getAdsPcaUnificationFormatEligibility(t) ||
            (t.uxVersion === "modal_format_preview" &&
              t.originalFormat === "sa_carousel") ||
            (t.uxVersion === "modal_format_preview" &&
              t.originalFormat === "da_carousel")
            ? !0
            : t.adObjectsList.some(function (e) {
                var n = e.adgroup,
                  a = e.campaign,
                  i = e.campaignGroup;
                return (a.destination_type ===
                  r("AdCampaignDestination").WHATSAPP &&
                  r("gkx")("24498")) ||
                  (o("AdsUEditorMessagingDestinationUtils").isCTM(
                    a.destination_type,
                  ) &&
                    r("gkx")("20779"))
                  ? !1
                  : o(
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
                      ).isEligibleForReactiveControlPESEOrAppInfo(a, i, n, !0);
              });
        },
        supportedSources: [
          "catalog",
          "site_links",
          "manual_uploads",
          "app_information",
        ],
        getTitle: function (t, n, r) {
          var e;
          return (t == null ? void 0 : t.uxVersion) === "modal_format_preview"
            ? o("AdsFlexibleFormatConstants").CAROUSEL_FORMAT_HEADING
            : t != null &&
                o(
                  "AdsFormatTransformationUtils",
                ).getAdsPcaUnificationFormatEligibility(t)
              ? o("AdsFlexibleFormatConstants")
                  .CAROUSEL_UNIFICATION_FORMAT_HEADING
              : n == null &&
                  ((t == null ? void 0 : t.uxVersion) === "format" || r === !0)
                ? o("AdsFlexibleFormatConstants").CAROUSEL_FORMAT_HEADING
                : n == null &&
                    o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
                      (e = t == null ? void 0 : t.uxVersion) != null ? e : "",
                    )
                  ? o("AdsFlexibleFormatConstants").SIMPLIFIED_CAROUSEL_LABEL
                  : o("AdsFlexibleFormatConstants").CAROUSEL_OPTION_LABEL;
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
                format: d.key,
                hasOptedIn: n,
                hostID: l == null ? void 0 : l.hostID,
                skipAssetFeedSpecChanges: l.isPCAUnifiedOldFlow,
              },
              {
                line: "221",
                module: "AdsFormatTransformationCarouselFormatPlugin.js",
                moduleID: i.id,
              },
            );
            return;
          }
          if (!(a == null || l == null)) {
            if (
              l.originalFormat === "sa_single_image" &&
              a === "app_information"
            ) {
              r(
                "AdsFlexibleFormatFormatTransformationDataSourceAction",
              ).dispatch(
                {
                  adgroupIDs: t,
                  dataSource: a,
                  format: d.key,
                  hasOptedIn: n,
                  hostID: l == null ? void 0 : l.hostID,
                  skipAssetFeedSpecChanges: !1,
                },
                {
                  line: "239",
                  module: "AdsFormatTransformationCarouselFormatPlugin.js",
                  moduleID: i.id,
                },
              );
              return;
            }
            l.isEligibleForPESE === !0 &&
              r("AdsFlexibleFormatToggleForOptionAction").dispatch(
                {
                  context: l,
                  adgroupIDs: t,
                  hasOptedIn: n,
                  dataSource: a,
                  targetFormat: "carousel",
                },
                {
                  line: "251",
                  module: "AdsFormatTransformationCarouselFormatPlugin.js",
                  moduleID: i.id,
                },
              );
          }
        },
        tooltipComponent: function (t) {
          if (
            (t == null ? void 0 : t.isEligibleForPESE) === !0 &&
            (t == null ? void 0 : t.uxVersion) !== "simplified_format"
          )
            return null;
          var e =
            (t == null
              ? void 0
              : t.adObjectsList.some(function (e) {
                  var t = e.campaignGroup;
                  return t.objective === r("AdsAPIObjectives").APP_INSTALLS;
                })) === !0;
          return u.jsx(
            o("AdsFlexibleFormatTooltipComponent.react")
              .AdsFlexibleFormatTooltipComponent,
            {
              description: e
                ? o("AdsFlexibleFormatConstants")
                    .CAROUSEL_APP_INFO_FORMAT_TOOLTIP_CONTENT
                : o("AdsFlexibleFormatConstants")
                    .CAROUSEL_FORMAT_TOOLTIP_CONTENT,
              imageBackgroundStyle: {
                backgroundColor: "#F2F2F2",
                flexGrow: 1,
                padding: "16px 0px 10px 0px",
              },
              imageSrc: e
                ? "/images/ads/ads_manager/metadata/AM-APlusC-Carousel-Spot-b4b_light-4x.png"
                : "/images/ads/ads_manager/metadata/carousel_ff.png",
              imageStyle: { width: e ? "300px" : "135px", height: "auto" },
              logData:
                (t == null ? void 0 : t.logData) == null
                  ? void 0
                  : babelHelpers.extends({}, t == null ? void 0 : t.logData, {
                      format: "carousel",
                    }),
              showImageInMiddle: !1,
              title: o("AdsFlexibleFormatConstants").CAROUSEL_FORMAT_HEADING,
            },
          );
        },
        tooltipConfig: function (t) {
          if ((t == null ? void 0 : t.isEligibleForPESE) === !0) {
            var e =
              (t == null
                ? void 0
                : t.adObjectsList.some(function (e) {
                    var t = e.campaignGroup;
                    return t.objective === r("AdsAPIObjectives").APP_INSTALLS;
                  })) === !0;
            return {
              title: o("AdsFlexibleFormatConstants").CAROUSEL_FORMAT_HEADING,
              description: e
                ? o("AdsFlexibleFormatConstants")
                    .CAROUSEL_APP_INFO_FORMAT_TOOLTIP_CONTENT
                : o("AdsFlexibleFormatConstants")
                    .CAROUSEL_FORMAT_TOOLTIP_CONTENT,
              image: e
                ? "/images/ads/ads_manager/metadata/AM-APlusC-Carousel-Spot-b4b_light-4x.png"
                : "/images/ads/ads_manager/metadata/carousel_ff.png",
            };
          }
        },
        imageSrc: function (t) {
          var e;
          if (
            o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
              (e = t == null ? void 0 : t.uxVersion) != null ? e : "",
            ) ||
            (t == null ? void 0 : t.uxVersion) === "modal_format_preview"
          )
            return u.jsx("div", {
              className: "xvy4d1p xxk0z11 x78zum5 x6s0dn4 xl56j7k",
              children: u.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-three-horizontal-rectangles-outline-16")
                  .metaBrandThreeHorizontalRectanglesOutline16,
                xstyle: c.rotatedIcon,
              }),
            });
        },
      },
      m = d;
    l.default = m;
  },
  226,
);
