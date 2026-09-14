__d(
  "AdsFormatTransformationDataSourcePlugins",
  [
    "AdsFormatTransformationAppInformationPlugin",
    "AdsFormatTransformationCatalogPlugin",
    "AdsFormatTransformationExistingPostMediaPlugin",
    "AdsFormatTransformationManualUploadAssetPlugin",
    "AdsFormatTransformationRelatedMediaPlugin",
    "AdsFormatTransformationSiteLinksPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsFormatTransformationAppInformationPlugin"),
        n("AdsFormatTransformationCatalogPlugin"),
        n("AdsFormatTransformationExistingPostMediaPlugin"),
        n("AdsFormatTransformationManualUploadAssetPlugin"),
        n("AdsFormatTransformationRelatedMediaPlugin"),
        n("AdsFormatTransformationSiteLinksPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
