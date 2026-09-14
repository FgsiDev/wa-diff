__d(
  "adsUEditorSelectedCampaignGroupLoadObjectsSelector",
  [
    "LoadObject",
    "adsCreateStoreSelector",
    "adsUEditorCampaignGroupSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          return [].concat(
            o(
              "adsUEditorSelectedCampaignGroupIDsSelector",
            ).adsUEditorSelectedCampaignGroupIDsSelector.getStores(e),
            r("adsUEditorCampaignGroupSelector").getStores(e),
          );
        },
        function (t) {
          var e = o(
              "adsUEditorSelectedCampaignGroupIDsSelector",
            ).adsUEditorSelectedCampaignGroupIDsSelector(t),
            n = [];
          for (var a of e) {
            var l = r("adsUEditorCampaignGroupSelector")({
              campaignGroupID: a,
              campaignGroupSelector: t.campaignGroupSelector,
            });
            if (l == null)
              return r("LoadObject").loading({ creatorModuleID: i.id });
            n.push(l);
          }
          return r("LoadObject").withValue(n, { creatorModuleID: i.id });
        },
        { name: i.id + ".adsUEditorSelectedCampaignGroupLoadObjectsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
