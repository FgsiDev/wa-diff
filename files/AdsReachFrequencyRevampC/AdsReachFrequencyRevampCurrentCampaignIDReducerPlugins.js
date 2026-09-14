__d(
  "AdsReachFrequencyRevampCurrentCampaignIDReducerPlugins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return { currentCampaignID: null };
        },
      },
      l = {
        reduce: function (t, n) {
          return n.campaignIDs.length !== 1 || n.campaignGroupIDs.length !== 1
            ? t
            : { currentCampaignID: n.campaignIDs[0] };
        },
      },
      s = {
        reduce: function (t, n) {
          return { currentCampaignID: n.campaignID };
        },
      };
    ((i.createStartQuickCreate = e),
      (i.setRFObjective = l),
      (i.setCampaignID = s));
  },
  66,
);
