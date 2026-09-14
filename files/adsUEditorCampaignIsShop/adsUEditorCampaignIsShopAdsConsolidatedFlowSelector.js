__d(
  "adsUEditorCampaignIsShopAdsConsolidatedFlowSelector",
  ["AdsUEditorCampaignSelectors", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [o("AdsUEditorCampaignSelectors").campaigns.some(s)],
      function (t) {
        return t;
      },
      { name: i.id + ".adsUEditorCampaignIsShopAdsConsolidatedFlowSelector" },
    );
    function s(e) {
      return !1;
    }
    var u = e;
    l.default = u;
  },
  98,
);
