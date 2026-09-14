__d(
  "AdsFormatFlexiblePlugin",
  [
    "ix",
    "AdCampaignDestination",
    "AdsAdgroupFormatLabels",
    "AdsBulkValueUtils",
    "AdsFlexibleFormatLoggerUtils",
    "AdsFlexibleFormatStrings",
    "AdsFormatEligibilityUtils",
    "AdsLinkPostFormat",
    "AdsUIMediaFormat",
    "PartnershipAdsStrings",
    "Tooltip",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        type: "format",
        key: "flexible",
        uiFormat: r("AdsLinkPostFormat").FLEXIBLE,
        supportsInitialPageLoadCollapse: !1,
        getTitle: function (t) {
          return o("AdsFlexibleFormatStrings").FLEXIBLE_FORMAT_PLUGIN_TITLE;
        },
        getDescription: function (t, n, a) {
          return o("AdsAdgroupFormatLabels").getDescriptionForMediaFormat(
            r("AdsUIMediaFormat").FLEXIBLE,
            a,
          );
        },
        getImageSrc: function (t, n) {
          return s(n ? (t ? "158122" : "158123") : t ? "711839" : "711838");
        },
        getSupportedMedia: function (t) {
          return null;
        },
        isShown: function (t) {
          var e = o("AdsBulkValueUtils").getUniformValueOrDefault(
              t.bulkCampaignDestination,
              r("AdCampaignDestination").UNDEFINED,
            ),
            n = o("AdsFormatEligibilityUtils").shouldShowFlexibleFormat(
              t,
              !0,
              !0,
              !0,
              !0,
            );
          return (
            n &&
              o("AdsFlexibleFormatLoggerUtils").logOnceFlexibleFormatImpression(
                t.adgroupIDs,
                t.objective,
                t.promotedObjectType,
                e,
              ),
            n
          );
        },
        isSelected: function (t) {
          return !1;
        },
        getDisableReason: function (t) {
          return null;
        },
        getDisableTooltip: function (t, n, a, i, l, s, u, c, d) {
          return r("isTruthy")(d)
            ? r("Tooltip").propsFor(
                o(
                  "PartnershipAdsStrings",
                ).getFormatNotSupportedWithDynamicPartnerContentDelivery(),
              )
            : null;
        },
      },
      u = e;
    l.default = u;
  },
  98,
);
