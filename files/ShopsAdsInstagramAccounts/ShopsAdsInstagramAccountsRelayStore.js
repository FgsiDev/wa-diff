__d(
  "ShopsAdsInstagramAccountsRelayStore",
  [
    "ShopsAdsInstagramAccountsStoreSourceServerQuery.graphql",
    "adsCreateRelayStoreForMigration",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateRelayStoreForMigration")(
        r("ShopsAdsInstagramAccountsStoreSourceServerQuery.graphql"),
        function (e) {
          return { ad_account_id: e };
        },
        function (e) {
          var t;
          return e == null || (t = e.ad_account) == null
            ? void 0
            : t.shops_ads_instagram_accounts;
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
