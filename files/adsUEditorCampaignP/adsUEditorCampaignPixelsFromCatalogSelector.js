__d(
  "adsUEditorCampaignPixelsFromCatalogSelector",
  [
    "adsCreateSelector",
    "adsUEditorCampaignEventSourcesFromCatalogSelector",
    "adsUEditorCampaignEventSourcesFromCatalogSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorCampaignEventSourcesFromCatalogSelector")],
        function (t) {
          return o(
            "adsUEditorCampaignEventSourcesFromCatalogSelectorUtils",
          ).getAdsUEditorCampaignPixelsFromCatalog(t);
        },
        { name: i.id + ".adsUEditorCampaignPixelsFromCatalogSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
