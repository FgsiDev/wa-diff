__d(
  "ShopsAdsShopLevelActivationCouponAlreadyAppliedToCampaignGroupProviderPlugin",
  ["adsShopLevelActivationFetchAPIUtils", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r("loadObjectMapProvider").keyed(
          o("adsShopLevelActivationFetchAPIUtils")
            .adsShopLevelActivationFetchCouponAlreadyAppliedToCampaignGroup,
          function (e) {
            return e;
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
