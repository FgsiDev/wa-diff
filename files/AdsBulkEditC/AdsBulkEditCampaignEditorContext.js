__d(
  "AdsBulkEditCampaignEditorContext",
  [
    "AdsBulkEditCampaignContext",
    "AdsCampaignBulkEditStore",
    "AdsUEditorContextFactory",
    "adsCreateSelector",
    "adsStoreToSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsStoreToSelector")(r("AdsCampaignBulkEditStore"))],
        function (t) {
          return Array.from(t.rows.keys());
        },
        { name: i.id + ".selectedCampaignIDsSelector" },
      ),
      s = o("AdsUEditorContextFactory").getForIDsSelector(
        r("AdsBulkEditCampaignContext"),
        e,
        i.id,
      ),
      u = s;
    l.default = u;
  },
  98,
);
