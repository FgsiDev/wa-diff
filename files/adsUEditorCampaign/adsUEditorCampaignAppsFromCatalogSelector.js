__d(
  "adsUEditorCampaignAppsFromCatalogSelector",
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
          ).adsUEditorCampaignAppsFromCatalog(t);
        },
        { name: i.id + ".adsUEditorCampaignAppsFromCatalogSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
