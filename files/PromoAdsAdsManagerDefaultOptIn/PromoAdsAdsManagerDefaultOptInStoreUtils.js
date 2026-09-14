__d(
  "PromoAdsAdsManagerDefaultOptInStoreUtils",
  [
    "AdsAdgroupDraftFragmentStore",
    "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("immutable").Set(
        e
          .map(function (e) {
            var t = e.adgroup,
              n = e.campaign,
              a = e.campaignGroup,
              i = r("AdsAdgroupDraftFragmentStore").isNew(t.id);
            if (i !== !1) return null;
            var l = o(
              "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
            ).isPromoAdOptedInForAdgroup(t, n, a, !0);
            return l ? null : t.id;
          })
          .filter(Boolean),
      );
    }
    function s(e) {
      return r("immutable").Set(
        e
          .map(function (e) {
            var t = e.adgroup,
              n = e.campaign,
              a = e.campaignGroup,
              i = r("AdsAdgroupDraftFragmentStore").isNew(t.id);
            if (i !== !1) return null;
            var l = o(
              "adsUEditorAdgroupPromoAdCreativeFieldSelectorUtil",
            ).isEmailCaptureOptedInForAdgroup(t, n, a, !0);
            return l ? null : t.id;
          })
          .filter(Boolean),
      );
    }
    ((l.getEditedNotOptedInAdgroupIDs = e),
      (l.getEmailCaptureEditedNotOptedInAdgroupIDs = s));
  },
  98,
);
