__d(
  "AdsCollectionSetIsManuallyPickFeatureProductsDataActionLoggerPlugin",
  ["AdsLinkPostFormat", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.isManuallyPickFeaturedProducts &&
            r("adsMgmtLogger")(
              "collection_set_is_manually_pick_feature_products",
              { link_post_format: r("AdsLinkPostFormat").COLLECTIONS },
            );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
