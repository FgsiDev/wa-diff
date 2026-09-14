__d(
  "AdsCampaignGroupToggleBidStrategyDialogUIDataProviderPlugin",
  ["ImmutableRecordWithV4Types", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        campaignsByCampaignGroupID: null,
        campaignGroupIDs: null,
        campaignIDs: r("immutable").List(),
        newBidStrategy: null,
        budgetAmount: null,
        budgetMode: null,
      };
    }
    var s = o("ImmutableRecordWithV4Types").Record(e()),
      u = { initialState: s() },
      c = u;
    l.default = c;
  },
  98,
);
