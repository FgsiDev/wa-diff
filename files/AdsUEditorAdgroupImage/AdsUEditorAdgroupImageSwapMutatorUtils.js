__d(
  "AdsUEditorAdgroupImageSwapMutatorUtils",
  [
    "AdsUEditorAdgroupImageMutators",
    "ApiAdCreativePlatformCustomizationFields",
    "forEachObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.account,
        n = e.adgroup,
        a = e.image,
        i = e.page,
        l = e.specPathPlugin,
        s = o("AdsUEditorAdgroupImageMutators").setImage(
          t,
          a.imageHash,
          a.imageURL,
          void 0,
          a.thumbnailURL,
          a.thumbnailHeight,
          a.thumbnailWidth,
          n,
          l,
          i,
        );
      return (
        r("forEachObject")(
          r("ApiAdCreativePlatformCustomizationFields"),
          function (e) {
            s = o("AdsUEditorAdgroupImageMutators").setImage(
              t,
              void 0,
              void 0,
              e,
              void 0,
              void 0,
              void 0,
              s,
              l,
              i,
            );
          },
        ),
        s
      );
    }
    l.setPrimaryImageAndClearPlatformCustomizations = e;
  },
  98,
);
