__d(
  "adsUEditorCampaignShopAdsIsOptimizedSelector",
  [
    "AdsBulkValueUtils",
    "LoadObject",
    "adsCreateSelector",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsForSelectedCampaignsSelector")],
        function (t) {
          var e = t.map(function () {
            return !1;
          });
          return r("LoadObject").withValue(
            o("AdsBulkValueUtils").aggregate(e),
            { creatorModuleID: i.id },
          );
        },
        { name: i.id + ".adsUEditorCampaignShopAdsIsOptimizedSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
