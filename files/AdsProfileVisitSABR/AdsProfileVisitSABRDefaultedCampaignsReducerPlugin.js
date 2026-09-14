__d(
  "AdsProfileVisitSABRDefaultedCampaignsReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.withMutations(function (e) {
            n.campaignIDs.forEach(function (t, r) {
              n.marked ? e.set(t, n.markers[r]) : e.delete(t);
            });
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
