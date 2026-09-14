__d(
  "adsUEditorCampaignCombinedErrorsForSelectedCampaignsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.campaignCombinedErrorsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.campaignCombinedErrorsSelector;
          return e();
        },
        {
          name:
            i.id +
            ".adsUEditorCampaignCombinedErrorsForSelectedCampaignsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
