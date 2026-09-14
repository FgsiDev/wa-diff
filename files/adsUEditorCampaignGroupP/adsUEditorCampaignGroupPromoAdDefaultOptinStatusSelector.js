__d(
  "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
  [
    "AdsPromoAdsAdgroupDefaultOptinStickySettingDataProvider",
    "AdsPromoAdsEmailCaptureAdgroupDefaultOptinStickySettingDataProvider",
    "PromoAdsAdsManagerDefaultOptInUtils",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupPromoAdCreativeFieldSelector",
    "adsUEditorAdgroupPromoAdDataSelector",
    "adsUEditorAdgroupPromoAdRelayStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          o("adsUEditorAdgroupPromoAdDataSelector").creativeCouponCodeSelector,
          o("adsUEditorAdgroupPromoAdRelayStoreSelector")
            .promoAdsStickySettingStoreSelector,
          r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
          o("adsUEditorAdgroupPromoAdRelayStoreSelector")
            .promoAdAccountStickyStoreSelector,
          o("adsUEditorAdgroupPromoAdCreativeFieldSelector")
            .allowedCouponCodeSourcesSelector,
          r(
            "AdsPromoAdsAdgroupDefaultOptinStickySettingDataProvider",
          ).toFluxSelector(),
          r(
            "AdsPromoAdsEmailCaptureAdgroupDefaultOptinStickySettingDataProvider",
          ).toFluxSelector(),
          o("adsUEditorAdgroupPromoAdCreativeFieldSelector")
            .commonLogDataSelector,
        ],
        function (t, n, r, a, i, l, s, u, c) {
          return o(
            "PromoAdsAdsManagerDefaultOptInUtils",
          ).getPromoAdsDefaultOptInStatus(t, n, a, i, l, s, u, r, c);
        },
        {
          name:
            i.id + ".adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
