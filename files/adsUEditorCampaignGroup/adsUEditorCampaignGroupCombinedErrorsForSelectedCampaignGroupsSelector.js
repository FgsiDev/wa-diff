__d(
  "adsUEditorCampaignGroupCombinedErrorsForSelectedCampaignGroupsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
      function (e) {
        var t = e.campaignGroupCombinedErrorsSelector;
        return t.getStores();
      },
      function (t) {
        var e = t.campaignGroupCombinedErrorsSelector;
        return e();
      },
      {
        name:
          i.id +
          ".adsUEditorCampaignGroupCombinedErrorsForSelectedCampaignGroupsSelector",
      },
    );
    l.adsUEditorCampaignGroupCombinedErrorsForSelectedCampaignGroupsSelector =
      e;
  },
  98,
);
