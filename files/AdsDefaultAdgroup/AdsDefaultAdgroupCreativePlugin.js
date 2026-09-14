__d(
  "AdsDefaultAdgroupCreativePlugin",
  ["AdsUEditorAdgroupCreativeFormat", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adgroup/creative",
        key: "default",
        pivots: {},
        getSupportedMediaFormats: function (t) {
          return new Set(["IMAGE", "VIDEO", "CAROUSEL"]);
        },
        isCanvasCollectionsOnly: function (t) {
          return !1;
        },
        getVideoLPPFormat: function (t) {
          return null;
        },
        getSupportedCanvasCheckboxMediaFormats: function () {
          return new Set([]);
        },
        allowUsingExistingPost: function () {
          return !1;
        },
        supportsLandingView: function () {
          return !1;
        },
        getSupportedCallToActiveValueFields: function () {
          return r("immutable").Set();
        },
        usesTemplateDataForStaticCarousel: function () {
          return !1;
        },
        supportsNonCommerceCatalogs: function (t) {
          return t !== r("AdsUEditorAdgroupCreativeFormat").ACO;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
