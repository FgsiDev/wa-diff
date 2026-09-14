__d(
  "adsExperimentsIsCampaignGroupMultiCampaign",
  ["AdsAdObjectsSelectors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsAdObjectsSelectors")
        .getChildAdObjectIDsLoadObjectSelector({
          accountID: t.account_id,
          adObjectLevel: "ad_set",
          campaignGroupIDs: [e],
        })
        .mapValue(function (e) {
          return e.length > 1;
        });
    }
    l.default = e;
  },
  98,
);
