__d(
  "adsCallToActionGetOfferStateType",
  [
    "AdsAPIObjectives",
    "AdsAssetFeedUtils",
    "AdsOfferState",
    "adsCampaignGetOfferStateType",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a;
      return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(n)
        ? r("adsCampaignGetOfferStateType")(e)
        : t === r("AdsAPIObjectives").CONVERSIONS &&
            r("isTruthy")((a = e.promoted_object) == null ? void 0 : a.pixel_id)
          ? r("AdsOfferState").HAS_OFFER
          : r("adsCampaignGetOfferStateType")(e);
    }
    l.default = e;
  },
  98,
);
