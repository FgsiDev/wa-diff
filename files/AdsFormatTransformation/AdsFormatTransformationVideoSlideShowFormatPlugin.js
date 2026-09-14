__d(
  "AdsFormatTransformationVideoSlideShowFormatPlugin",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatConstants",
    "AdsFlexibleFormatDropdownTooltipUtils",
    "AdsFlexibleFormatFormatTransformationDataSourceAction",
    "AdsFlexibleFormatPreviewVariationConfig",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "GeoIcon.react",
    "meta-brand-triangle-right-square-filled-16",
    "meta-brand-triangle-right-square-outline-16",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c =
        "/images/ads/ads_manager/metadata/AM-APlusC-Single-Image-Video-Spot-b4b_light-4x.png",
      d = {
        type: "format_transformation/format",
        key: "video_slideshow",
        previewFormat: "SINGLE_MEDIA",
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
          var e = t.adObjectsList[0],
            n = o(
              "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
            ).getAdgroupSpecPathPlugin(e);
          if (!t.isPCAUnifiedScaledAlpha) {
            if (
              o("AdsFlexibleFormatAdexUtils").passGKForC2V() &&
              o(
                "AdsFlexibleFormatPreviewVariationConfig",
              ).isEligibleForSACarouselToVideoSlideshow(
                e == null ? void 0 : e.adgroup,
                n,
                t.originalFormat,
                !0,
              )
            )
              return !0;
            if (
              t.uxVersion === "modal_format_preview" &&
              t.originalFormat === "sa_single_image" &&
              o(
                "AdsFlexibleFormatPreviewVariationConfig",
              ).isEligibleForSEToVideo(e == null ? void 0 : e.adgroup)
            )
              return o(
                "AdsFlexibleFormatAdexUtils",
              ).isEligibleForReactiveControlPESEOrAppInfo(
                e == null ? void 0 : e.campaign,
                e == null ? void 0 : e.campaignGroup,
                e == null ? void 0 : e.adgroup,
                !0,
              );
          }
          return t.adObjectsList.some(function (e) {
            var t = e.adgroup,
              n = e.campaign,
              a = e.campaignGroup;
            return (
              a.objective === r("AdsAPIObjectives").APP_INSTALLS &&
              o(
                "AdsFlexibleFormatAdexUtils",
              ).isEligibleForReactiveControlPESEOrAppInfo(n, a, t, !0)
            );
          });
        },
        supportedSources: ["manual_uploads", "app_information", "site_links"],
        getTitle: function (t, n, r) {
          var e;
          return n == null &&
            ((t == null ? void 0 : t.uxVersion) === "format" || r === !0)
            ? o("AdsFlexibleFormatConstants").VIDEO_SLIDESHOW_FORMAT_HEADING
            : n == null &&
                o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
                  (e = t == null ? void 0 : t.uxVersion) != null ? e : "",
                )
              ? o("AdsFlexibleFormatConstants").SIMPLIFIED_VIDEO_SLIDESHOW_LABEL
              : o("AdsFlexibleFormatConstants").VIDEO_SLIDESHOW_FORMAT_HEADING;
        },
        horizontalHeaderConfig: function () {
          return {
            icon: u.jsx(r("GeoIcon.react"), {
              icon: o("meta-brand-triangle-right-square-filled-16")
                .metaBrandTriangleRightSquareNucleusVideoFilled16,
            }),
            title: o("AdsFlexibleFormatConstants")
              .VIDEO_SLIDESHOW_HORIZONTAL_TAB_HEADING,
            tooltip: o("AdsFlexibleFormatConstants")
              .VIDEO_SLIDESHOW_HORIZONTAL_TAB_TOOLTIP,
          };
        },
        tooltipComponent: function (t) {
          var e = o(
            "AdsFlexibleFormatConstants",
          ).VIDEO_SLIDESHOW_FORMAT_TOOLTIP_CONTENT;
          return o(
            "AdsFlexibleFormatDropdownTooltipUtils",
          ).renderFdoDropdownTooltip(
            o("AdsFlexibleFormatConstants").VIDEO_SLIDESHOW_FORMAT_HEADING,
            e,
            c,
            t,
          );
        },
        tooltipConfig: function (t) {
          return {
            title: o("AdsFlexibleFormatConstants")
              .VIDEO_SLIDESHOW_FORMAT_HEADING,
            description: o("AdsFlexibleFormatConstants")
              .VIDEO_SLIDESHOW_FORMAT_TOOLTIP_CONTENT,
            image: c,
          };
        },
        imageSrc: function (t) {
          var e;
          return o("AdsFlexibleFormatAdexUtils").SIMPLIFIED_FORMATS.includes(
            (e = t == null ? void 0 : t.uxVersion) != null ? e : "",
          )
            ? u.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-triangle-right-square-outline-16")
                  .metaBrandTriangleRightSquareVideoOutline16,
              })
            : null;
        },
        toggleOptedInStatus: function (t, n, o, a) {
          var e = a == null ? void 0 : a.originalFormat;
          if (e === "sa_single_image" && o != null) {
            var l;
            r("AdsFlexibleFormatFormatTransformationDataSourceAction").dispatch(
              {
                adgroupIDs: t,
                dataSource: o,
                eligibleDataSources:
                  a == null || (l = a.eligibleFormatDataSourceMap) == null
                    ? void 0
                    : l.get("video_slideshow"),
                format: d.key,
                hasOptedIn: n,
                hostID: a == null ? void 0 : a.hostID,
                skipAssetFeedSpecChanges: !1,
                useReactiveControlOptOut: !0,
              },
              {
                line: "167",
                module: "AdsFormatTransformationVideoSlideShowFormatPlugin.js",
                moduleID: i.id,
              },
            );
          }
          if (e === "sa_carousel" && o != null) {
            var s;
            r("AdsFlexibleFormatFormatTransformationDataSourceAction").dispatch(
              {
                adgroupIDs: t,
                dataSource: o,
                eligibleDataSources:
                  a == null || (s = a.eligibleFormatDataSourceMap) == null
                    ? void 0
                    : s.get("video_slideshow"),
                format: d.key,
                hasOptedIn: n,
                hostID: a == null ? void 0 : a.hostID,
                skipAssetFeedSpecChanges: !1,
                useReactiveControlOptOut: !1,
              },
              {
                line: "180",
                module: "AdsFormatTransformationVideoSlideShowFormatPlugin.js",
                moduleID: i.id,
              },
            );
          }
        },
      },
      m = d;
    l.default = m;
  },
  226,
);
