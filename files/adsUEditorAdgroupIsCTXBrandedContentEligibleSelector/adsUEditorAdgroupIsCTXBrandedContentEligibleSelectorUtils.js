__d(
  "adsUEditorAdgroupIsCTXBrandedContentEligibleSelectorUtils",
  [
    "AdsLinkTypeUtils",
    "AdsUEditorMessagingDestinationUtils",
    "WAMOStatusAdsManagerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r =
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          e,
        ) || o("AdsLinkTypeUtils").isMessagingDestination(t);
      return n &&
        !o(
          "WAMOStatusAdsManagerUtils",
        ).isAdAccountEligibleForPartnershipAdsExpansion()
        ? !1
        : r;
    }
    l.adsUEditorAdgroupIsCTXBrandedContentEligible = e;
  },
  98,
);
