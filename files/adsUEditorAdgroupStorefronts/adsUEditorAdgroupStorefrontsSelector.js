__d(
  "adsUEditorAdgroupStorefrontsSelector",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsLoadObjectUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "LoadObject",
    "adsUEditorAdgroupStorefrontsCrossChannelCampaignSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, l) {
      var s = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e),
        u = o("AdsAPIAdgroupRecordUtils").getPrimaryPageIDInSpec(e.adgroup, s),
        c = r("AdsAdgroupSemanticFields").instagramActorID.get(s, e.adgroup),
        d = function (t) {
          var e;
          return ((e = t.mini_shop_storefront) == null ||
          (e = e.commerce_merchant_settings) == null
            ? void 0
            : e.id) != null
            ? babelHelpers.extends({}, t.mini_shop_storefront, {
                shop_catalog:
                  t.mini_shop_storefront.commerce_merchant_settings
                    .shop_catalog,
                ig_user: babelHelpers.extends(
                  {},
                  t.mini_shop_storefront.ig_user,
                  { username: t == null ? void 0 : t.username },
                ),
                page: babelHelpers.extends({}, t.mini_shop_storefront.page, {
                  name: t == null ? void 0 : t.name,
                }),
              })
            : null;
        },
        m =
          r("isTruthy")(u) && u != null
            ? t(u).mapValue(d)
            : r("LoadObject").withValue(null, { creatorModuleID: i.id }),
        p = o(
          "adsUEditorAdgroupStorefrontsCrossChannelCampaignSelector",
        ).getInstagramStorefrontLoadObject(a, l, c, u, n, d);
      return o("AdsLoadObjectUtils")
        .all([m, p])
        .mapValue(function (e) {
          var t = e[0],
            n = e[1];
          return { facebookStorefront: t, instagramStorefront: n };
        });
    }
    l.getStorefrontsForAdObject = e;
  },
  98,
);
