__d(
  "AdsFormatTransformationCollageFormatPlugin",
  [
    "fbt",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatConstants",
    "AdsFlexibleFormatPreviewVariationConfig",
    "AdsFlexibleFormatToggleForOptionAction",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "GeoIcon.react",
    "meta-brand-four-squares-grid-filled-16",
    "meta-brand-four-squares-grid-outline-16",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        type: "format_transformation/format",
        key: "collage",
        previewFormat: "SINGLE_MEDIA",
        getDescription: function (t) {
          return s._(/*BTDS*/ "On");
        },
        getIsCollapsed: function () {
          return !0;
        },
        getIsSelected: function (t) {
          return !0;
        },
        getIsEligible: function (t) {
          if (t.uxVersion !== "modal_format_preview") return !1;
          var e = t.adObjectsList[0],
            n = o(
              "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
            ).getAdgroupSpecPathPlugin(e);
          if (
            o(
              "AdsFlexibleFormatPreviewVariationConfig",
            ).isEligibleForEPAMultiPhotoToCollage(
              e == null ? void 0 : e.adgroup,
              t.existingPostPhotoCount,
              t.originalFormat,
            ) ||
            o(
              "AdsFlexibleFormatPreviewVariationConfig",
            ).isEligibleForSASingleToCollage(
              e == null ? void 0 : e.adgroup,
              t.originalFormat,
            )
          )
            return !0;
          var r = o(
            "AdsFlexibleFormatPreviewVariationConfig",
          ).isEligibleForSACarouselToCollage(
            e == null ? void 0 : e.adgroup,
            n,
            t.originalFormat,
          );
          return (
            r && o("AdsFlexibleFormatAdexUtils").logCarouselToCollageExposure(),
            r
          );
        },
        supportedSources: [
          "catalog",
          "site_links",
          "manual_uploads",
          "existing_post_media",
        ],
        getTitle: function (t, n, r) {
          return o("AdsFlexibleFormatConstants").COLLAGE_FORMAT_HEADING;
        },
        horizontalHeaderConfig: function () {
          return {
            icon: u.jsx(r("GeoIcon.react"), {
              icon: o("meta-brand-four-squares-grid-filled-16")
                .metaBrandFourSquaresGridGrid4Filled16,
            }),
            title: o("AdsFlexibleFormatConstants")
              .COLLAGE_HORIZONTAL_TAB_HEADING,
            tooltip: o("AdsFlexibleFormatConstants")
              .COLLAGE_HORIZONTAL_TAB_TOOLTIP,
          };
        },
        imageSrc: function (t) {
          return (t == null ? void 0 : t.uxVersion) === "modal_format_preview"
            ? u.jsx(r("GeoIcon.react"), {
                icon: o("meta-brand-four-squares-grid-outline-16")
                  .metaBrandFourSquaresGridGrid4Outline16,
              })
            : null;
        },
        toggleOptedInStatus: function (t, n, o, a) {
          t.length === 1 &&
            (a == null ||
              o == null ||
              r("AdsFlexibleFormatToggleForOptionAction").dispatch(
                {
                  adgroupIDs: t,
                  hasOptedIn: n,
                  context: a,
                  dataSource: o,
                  targetFormat: "collage",
                },
                {
                  line: "138",
                  module: "AdsFormatTransformationCollageFormatPlugin.js",
                  moduleID: i.id,
                },
              ));
        },
        tooltipConfig: function (t) {
          return {
            title: o("AdsFlexibleFormatConstants").COLLAGE_FORMAT_HEADING,
            description: o("AdsFlexibleFormatConstants")
              .COLLAGE_FORMAT_TOOLTIP_CONTENT,
            image: "/images/ads/ads_manager/metadata/collection_ff.png",
          };
        },
      },
      d = c;
    l.default = d;
  },
  226,
);
