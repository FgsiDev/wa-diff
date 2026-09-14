__d(
  "adsUEditorCampaignEventSourcesFromCatalogSelector",
  [
    "AdsUEditorSelectors",
    "ExternalEventSourceListStore",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorCampaignEventSourcesFromCatalogSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
              function (e) {
                var t;
                return (t = e.promoted_object) == null
                  ? void 0
                  : t.product_catalog_id;
              },
            ),
          ),
          r("ExternalEventSourceListStore").getSelector,
        ],
        function (t, n) {
          return o(
            "adsUEditorCampaignEventSourcesFromCatalogSelectorUtils",
          ).adsUEditorCampaignEventSourcesFromCatalog(t, n);
        },
        { name: i.id + ".adsUEditorCampaignEventSourcesFromCatalogSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
