__d(
  "adsBulkEditCampaignStructureCurrentTabSelectedIDsSelector",
  ["AdsBulkEditCampaignStructureProvider", "adsCreateSelector", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsBulkEditCampaignStructureProvider").toFluxSelector()],
        function (t) {
          var e = t.selectedIDs,
            n = t.selectedTab;
          return e.get(n) || r("immutable").List();
        },
        {
          name:
            i.id + ".adsBulkEditCampaignStructureCurrentTabSelectedIDsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
