__d(
  "adsUEditorAdgroupUniversalStorefrontsSelector",
  [
    "AdsAccountStore",
    "AdsBulkValueUtils",
    "AdsLoadObjectUtils",
    "AdsUEditorPageIGAccountWithAdgroupSelector",
    "ShopAdsPageToCommerceMerchantSettingsSelector",
    "ShopsAdsInstagramAccountsSelector",
    "adsCreateSelector",
    "adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector",
    "adsUEditorAdgroupStorefrontsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector"),
        r("ShopAdsPageToCommerceMerchantSettingsSelector"),
        r("AdsAccountStore").getSelectedAccountID,
        o("ShopsAdsInstagramAccountsSelector")
          .ShopsAdsInstagramAccountsSelector,
        o("AdsUEditorPageIGAccountWithAdgroupSelector")
          .AdsUEditorPageIGAccountWithAdgroupSelector,
      ],
      function (t, n, r, o, a) {
        return s(t, n, r, o, a);
      },
      { name: i.id + ".adsUEditorAdgroupUniversalStorefrontsSelector" },
    );
    function s(e, t, n, r, a, i) {
      return e.mapValue(function (e) {
        return o("AdsLoadObjectUtils")
          .all(
            e.map(function (e) {
              return o(
                "adsUEditorAdgroupStorefrontsSelector",
              ).getStorefrontsForAdObject(e, t, n, r, a);
            }),
          )
          .mapValue(function (e) {
            return o("AdsBulkValueUtils").aggregate([].concat(e));
          });
      });
    }
    ((l.adsUEditorAdgroupUniversalStorefrontsSelector = e),
      (l.adsUEditorAdgroupUniversalStorefronts = s));
  },
  98,
);
