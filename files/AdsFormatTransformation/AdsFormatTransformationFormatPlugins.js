__d(
  "AdsFormatTransformationFormatPlugins",
  [
    "AdsFormatTransformationCarouselFormatPlugin",
    "AdsFormatTransformationCollageFormatPlugin",
    "AdsFormatTransformationDACollectionFormatPlugin",
    "AdsFormatTransformationSACollectionFormatPlugin",
    "AdsFormatTransformationSingleMediaFormatPlugin",
    "AdsFormatTransformationVideoSlideShowFormatPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsFormatTransformationCarouselFormatPlugin"),
        n("AdsFormatTransformationCollageFormatPlugin"),
        n("AdsFormatTransformationDACollectionFormatPlugin"),
        n("AdsFormatTransformationSACollectionFormatPlugin"),
        n("AdsFormatTransformationSingleMediaFormatPlugin"),
        n("AdsFormatTransformationVideoSlideShowFormatPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
