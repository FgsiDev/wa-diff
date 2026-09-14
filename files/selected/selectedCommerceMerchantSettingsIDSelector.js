__d(
  "selectedCommerceMerchantSettingsIDSelector",
  [
    "AdsDeliveryOmnichannelSelectors",
    "AdsUEditorAdgroupShopAdsUtils",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [o("AdsDeliveryOmnichannelSelectors").bulkOnsiteObjectSelector],
        function (t) {
          return o("AdsUEditorAdgroupShopAdsUtils").getCmsIDFromOnsiteObject(t);
        },
        { name: i.id + ".selectedCommerceMerchantSettingsIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
