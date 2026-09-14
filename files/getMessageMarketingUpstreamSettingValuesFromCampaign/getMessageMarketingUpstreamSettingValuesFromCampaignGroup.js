__d(
  "getMessageMarketingUpstreamSettingValuesFromCampaignGroup",
  ["AdsAPICampaignGroupRecordUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return {
        objective: e.objective,
        specialAdCategories: o("immutable").List(
          (t = e.special_ad_categories) != null ? t : [],
        ),
        hasProductCatalog:
          o("AdsAPICampaignGroupRecordUtils").getPromotedObjectProductCatalogID(
            e,
          ) != null,
      };
    }
    l.default = e;
  },
  98,
);
