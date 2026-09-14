__d(
  "adsDeleteProductAudienceSpecsFromCampaignRecord",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "adsDeleteProductAudiencesAndCustomAudiencesFromFlexibleSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").targeting.product_audience_specs.delete,
        r("adsDeleteProductAudiencesAndCustomAudiencesFromFlexibleSpec"),
      )(e);
    }
    l.default = e;
  },
  98,
);
