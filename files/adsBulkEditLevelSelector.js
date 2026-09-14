__d(
  "adsBulkEditLevelSelector",
  [
    "AdsBulkEditCampaignStructureProvider",
    "adsBulkEditDialogCBOBidStrategyChangeLevelSelector",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsBulkEditDialogCBOBidStrategyChangeLevelSelector")
            .adsBulkEditDialogCBOBidStrategyChangeLevelSelector,
          r("AdsBulkEditCampaignStructureProvider").toFluxSelector(),
        ],
        function (t, n) {
          var e = n.selectedTab;
          return t != null ? t : e;
        },
        { name: i.id + ".adsBulkEditLevelSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
