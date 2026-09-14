__d(
  "adsUEditorCampaignShopAdsHasOptimizedSelector",
  ["adsCreateSelector", "adsUEditorCampaignShopAdsIsOptimizedSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorCampaignShopAdsIsOptimizedSelector")],
        function (t) {
          return t.mapValue(function (e) {
            return e.getValues().includes(!0);
          });
        },
        { name: i.id + ".adsUEditorCampaignShopAdsHasOptimizedSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
