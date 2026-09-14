__d(
  "AdsFormatPlugins",
  [
    "AdsFormatCarouselPlugin",
    "AdsFormatCollectionPlugin",
    "AdsFormatFlexiblePlugin",
    "AdsFormatSingleMediaPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsFormatCarouselPlugin"),
        n("AdsFormatCollectionPlugin"),
        n("AdsFormatFlexiblePlugin"),
        n("AdsFormatSingleMediaPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
