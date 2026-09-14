__d(
  "adsUEditorAdgroupEligibleForCFPSelector",
  [
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupEligibleForCFPSelectorUtils",
    "adsUEditorCampaignMMOnlyPlacementSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
          r("adsUEditorAccountSelector"),
          o("adsUEditorCampaignMMOnlyPlacementSelector")
            .areAnySelectedCampaignsMarketingMessagesOnlySelector,
        ],
        function (t, n, r) {
          return o(
            "adsUEditorAdgroupEligibleForCFPSelectorUtils",
          ).adsUEditorAdgroupEligibleForCFP(t, n, r);
        },
        { name: i.id + ".adsUEditorAdgroupEligibleForCFPSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
