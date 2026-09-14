__d(
  "AdsMgmtColumnCategoriesCapabilityChecks",
  ["AdsAccountUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e != null &&
        e.capabilities != null &&
        r("AdsAccountUtils").hasCapability(
          e,
          "CAN_RUN_CAMPAIGN_WITH_CATALOG_SEGMENT",
        )
      );
    }
    function s(e) {
      return (
        e != null &&
        e.capabilities != null &&
        r("AdsAccountUtils").hasCapability(
          e,
          "COLLABORATIVE_ADS_HAS_CREATED_CASS",
        )
      );
    }
    ((l.canAccountSeeCatalogSegmentMetrics = e),
      (l.canAccountSeeOfflineSharedItemMetrics = s));
  },
  98,
);
