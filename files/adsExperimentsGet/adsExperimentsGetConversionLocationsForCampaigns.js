__d(
  "adsExperimentsGetConversionLocationsForCampaigns",
  ["AdsAPICampaignRecordUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.campaignGroup,
        n = e.campaigns;
      return n.map(function (e) {
        return o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          t.objective,
          e,
        );
      });
    }
    l.default = e;
  },
  98,
);
