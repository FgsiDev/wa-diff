__d(
  "adsUEditorCTXSMCCatalogSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorCTXSMCCatalogSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
      function (t) {
        return o(
          "adsUEditorCTXSMCCatalogSelectorUtils",
        ).adsUEditorIsCampaignCTMAd(t);
      },
      { name: i.id + ".adsUEditorIsCampaignCTMAdSelector" },
    );
    l.adsUEditorIsCampaignCTMAdSelector = e;
  },
  98,
);
