__d(
  "adsExperimentsIsCampaignMultiAdgroup",
  ["AdsAdObjectsSelectors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsAdObjectsSelectors")
        .getChildAdObjectIDsLoadObjectSelector({
          accountID: t.account_id,
          campaignIDs: [e],
          adObjectLevel: "ad",
        })
        .mapValue(function (e) {
          return e.length > 1;
        });
    }
    l.default = e;
  },
  98,
);
