__d(
  "adsShopLevelActivationIdentitiesUtil",
  ["AdsInstagramUserIdMigrationUtils", "LoadObject", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.get(t).mapValue(function (e) {
        var t;
        return (t = r("immutable").Map(
          e.all_identities_coupon_info.reduce(function (e, t) {
            return e.set(
              {
                fb_page_id: t.fb_page_id,
                ig_user_fbidv2: o(
                  "AdsInstagramUserIdMigrationUtils",
                ).convertIGIDV2FromStringToStrongType(t.ig_user_fbidv2),
                ig_user_id: t.ig_user_id,
                shop_ids: t.shop_ids,
              },
              t.coupon_amount_in_cents,
            );
          }, new Map()),
        )) != null
          ? t
          : r("LoadObject").empty({ creatorModuleID: i.id });
      });
    }
    l.getShopLevelActivationIdentitiesCouponInfo = e;
  },
  98,
);
