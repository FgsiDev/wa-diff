__d(
  "adsBulkEditDialogCBOBidStrategyChangeLevelSelector",
  [
    "AdsCampaignGroupToggleBidStrategyDialogUIDataProvider",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r(
        "AdsCampaignGroupToggleBidStrategyDialogUIDataProvider",
      ).toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return u(t);
        },
        { name: i.id + ".adsBulkEditDialogCBOBidStrategyChangeLevelSelector" },
      );
    function u(e) {
      var t = e.newBidStrategy;
      return t == null ? null : "campaign";
    }
    ((l.adsBulkEditDialogCBOBidStrategyChangeLevelSelector = s),
      (l.adsBulkEditDialogCBOBidStrategyChangeLevel = u));
  },
  98,
);
