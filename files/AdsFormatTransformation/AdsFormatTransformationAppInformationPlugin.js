__d(
  "AdsFormatTransformationAppInformationPlugin",
  [
    "fbt",
    "AdsFlexibleFormatConstants",
    "AdsFlexibleFormatTransformationUtils",
    "AdsMetadataConnectedSourcesUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "format_transformation/data_source",
        key: "app_information",
        getDescription: function (t) {
          return o("AdsFlexibleFormatConstants")
            .USING_APP_INFORMATION_FOR_FORMAT_TRANSFORMATION_LABEL;
        },
        getIsCollapsed: function () {
          return !1;
        },
        getIsSelected: function (t, n) {
          return t.adObjectsList.some(function (e) {
            var t = e.adgroup;
            return n == null ||
              !o("AdsMetadataConnectedSourcesUtils").isFFForAppInstallEnabled()
              ? !1
              : o(
                  "AdsFlexibleFormatTransformationUtils",
                ).getHasOptedInAppInformationForGivenTargetFormat(t, n);
          });
        },
        getIsEligible: function (t, n) {
          return t.adObjectsList.some(function (e) {
            var t,
              n = e.adgroup,
              r = e.campaign,
              a = e.campaignGroup,
              i =
                ((t = n.creative) == null ||
                (t = t.creative_sourcing_spec) == null ||
                (t = t.app_info_spec) == null
                  ? void 0
                  : t.enroll_status) === "OPT_IN";
            return (
              i &&
              o(
                "AdsMetadataConnectedSourcesUtils",
              ).isEligibleForAppInformationByCampaignAndAdgroup(r, a, n)
            );
          });
        },
        getTitle: function (t, n) {
          return (n == null ? void 0 : n.uxVersion) === "modal_format_preview"
            ? o("AdsFlexibleFormatConstants").APP_INFORMATION_SECTION_HEADING_RC
            : o("AdsFlexibleFormatConstants").APP_INFORMATION_SECTION_HEADING;
        },
        imageSrcs: function (t) {
          var e,
            n = t.adObjectsList[0].adgroup,
            r =
              (e = n.creative) == null ||
              (e = e.creative_sourcing_spec) == null ||
              (e = e.app_info_spec) == null
                ? void 0
                : e.media;
          if (r == null) return [];
          var o = [],
            a = r.icon_image_url;
          a != null && o.push(String(a));
          var i = r.screenshot_urls;
          return (
            i != null &&
              i.forEach(function (e) {
                e != null && o.push(String(e));
              }),
            o
          );
        },
        formatModalPreviewConfig: function (t) {
          return t === "carousel"
            ? {
                previewDescription: s._(
                  /*BTDS*/ "Show app store details as carousel cards.",
                ),
              }
            : {};
        },
      },
      u = e;
    l.default = u;
  },
  226,
);
