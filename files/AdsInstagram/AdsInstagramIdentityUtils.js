__d(
  "AdsInstagramIdentityUtils",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "igAccessAdsManagerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (!o("AdsLoadStateUtils_LEGACY").isLoaded(t)) return null;
      var a = t.page_backed_instagram_accounts,
        i = t.instagram_accounts,
        l = t.instagram_business_account;
      return (e !== !0 || n === !0) && i && i.data && i.data.length > 0
        ? i.data[0]
        : a && a.data && a.data.length > 0
          ? a.data[0]
          : l && o("igAccessAdsManagerUtils").isIGAccessParityEnabled()
            ? {
                id: l.id,
                username: l.username,
                profile_pic: l.profile_picture_url,
                is_business: l.is_business_account,
                is_private: l.is_private,
                is_professional: l.is_professional,
                is_published: !l.is_unpublished,
                is_shopping_onsite_checkout_enabled:
                  l.is_shopping_onsite_checkout_enabled,
                shopping_review_status: l.shopping_review_status,
                loadState: r("AdsLoadState_LEGACY").LOADED,
              }
            : null;
    }
    l.getEligibleInstagramAccount = e;
  },
  98,
);
