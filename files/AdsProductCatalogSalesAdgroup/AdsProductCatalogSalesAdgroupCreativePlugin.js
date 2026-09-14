__d(
  "AdsProductCatalogSalesAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsChildAttachmentsUtils",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsDynamicAdgroupCreativePluginCommon",
    "AdsDynamicAdsFormatUtils",
    "AdsUEditorAdgroupCreativeFormat",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsDynamicAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "product-catalog-sales",
          pivots: { objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES },
          allowUsingExistingPost: function () {
            return !0;
          },
          getSupportedCanvasCheckboxMediaFormats: function (t, n) {
            var e = new Set([r("AdsUEditorAdgroupCreativeFormat").COLLECTIONS]),
              a = t == null ? void 0 : t.adgroup;
            if (a == null) return e;
            var i = o("AdsChildAttachmentsUtils").isCarouselAd(a),
              l = o("AdsDynamicAdsFormatUtils").getIsDynamicAdSingleMediaFormat(
                a,
              );
            return (
              (i || l) &&
                r("gkx")("22844") &&
                (i && e.add(r("AdsUEditorAdgroupCreativeFormat").CAROUSEL),
                l &&
                  (e.add(r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE),
                  e.add(r("AdsUEditorAdgroupCreativeFormat").SINGLE_VIDEO))),
              e
            );
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
