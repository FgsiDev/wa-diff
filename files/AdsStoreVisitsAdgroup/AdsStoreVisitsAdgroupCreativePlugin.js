__d(
  "AdsStoreVisitsAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsCollectionsAdUtils",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsUEditorAdgroupCreativeFormat",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultAdgroupCreativePlugin"), {
        type: "adgroup/creative",
        key: "store-visits",
        pivots: { objective: r("AdsAPIObjectives").STORE_VISITS },
        getSupportedMediaFormats: function (t) {
          var e,
            n = t.adgroup,
            a = (e = n.creative) == null ? void 0 : e.product_set_id,
            i = o("AdsCollectionsAdUtils").isCollectionsAd(n.creative);
          return r("isTruthy")(a) && !i
            ? new Set(["CAROUSEL", "IMAGE"])
            : new Set(["CAROUSEL", "IMAGE", "VIDEO"]);
        },
        getSupportedCanvasCheckboxMediaFormats: function (t, n) {
          return n !== !0
            ? new Set([
                r("AdsUEditorAdgroupCreativeFormat").CAROUSEL,
                r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE,
                r("AdsUEditorAdgroupCreativeFormat").SINGLE_VIDEO,
                r("AdsUEditorAdgroupCreativeFormat").COLLECTIONS,
              ])
            : new Set([]);
        },
        usesTemplateDataForStaticCarousel: function () {
          return !0;
        },
        supportsNonCommerceCatalogs: function (t) {
          return t !== r("AdsUEditorAdgroupCreativeFormat").CAROUSEL;
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
