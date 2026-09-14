__d(
  "AdsUEditorAdgroupShopAdsBundleMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupShopAdsBundle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t != null)
        switch (t.mode) {
          case "automatic":
            return o("AdsMutators").chain(function (e) {
              return o(
                "AdsUEditorAdgroupShopAdsBundle",
              ).ShopAdsBundleComponents.reduce(function (e, t) {
                return t.toggle(e, !1);
              }, e);
            }, r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.shops_bundle.set(!0))(
              e,
            );
          case "manual":
            return o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                .shops_bundle.delete,
              function (e) {
                return o(
                  "AdsUEditorAdgroupShopAdsBundle",
                ).ShopAdsBundleComponents.reduce(function (e, t) {
                  return t.toggle(e, !1);
                }, e);
              },
              function (e) {
                return t.components.reduce(function (e, t) {
                  return o("AdsUEditorAdgroupShopAdsBundle")
                    .getComponentFromType(t.name)
                    .toggle(e, t.enabled);
                }, e);
              },
            )(e);
          default: {
            t.mode;
            var n = new Error("Unknown mode: " + t.mode);
            throw (n.stack, n);
          }
        }
      return e;
    }
    l.processShopAdsBundleEditorState = e;
  },
  98,
);
