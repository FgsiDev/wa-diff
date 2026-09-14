__d(
  "AdsUEditorProductCatalogVerticalsSelectors",
  [
    "AdsBulkValueUtils",
    "AdsUEditorSelectors",
    "CatalogVertical",
    "LoadObject",
    "adsCreateSelector",
    "adsManagerCatalogDefaultSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(function (e) {
          var t;
          return (t = e.promoted_object) == null
            ? void 0
            : t.product_catalog_id;
        }),
        r("adsManagerCatalogDefaultSelector"),
      ],
      function (t, n) {
        var e = o("AdsBulkValueUtils").getUniformValueOrDefault(t, null);
        return r("isTruthy")(e)
          ? n(e).mapValue(function (e) {
              return (e == null ? void 0 : e.vertical) != null
                ? [e.vertical]
                : [r("CatalogVertical").NONE];
            })
          : r("LoadObject").withValue([r("CatalogVertical").NONE], {
              creatorModuleID: i.id,
            });
      },
      { name: i.id + ".adsUEditorCampaignProductCatalogVerticalsSelector" },
    );
    l.adsUEditorCampaignProductCatalogVerticalsSelector = e;
  },
  98,
);
