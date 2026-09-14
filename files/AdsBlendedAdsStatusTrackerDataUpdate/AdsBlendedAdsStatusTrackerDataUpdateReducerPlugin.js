__d(
  "AdsBlendedAdsStatusTrackerDataUpdateReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.set(n.campaignID, {
            status: n.status,
            adgroupID: n.adgroupID,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
