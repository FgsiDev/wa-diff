__d(
  "AdsUEditorAdgroupShopAdsBundleCreativeEditorSelectors",
  ["adsCreateSelector", "adsUEditorSelectedCampaignPlainObjectsSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorSelectedCampaignPlainObjectsSelector")],
        function (t) {
          return !1;
        },
        { name: i.id + ".areAllCampaignsWebsiteAndShopSelector" },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return t;
        },
        { name: i.id + ".adsUEditorShopAdsBundleCreativeEditorSelector" },
      );
    ((l.areAllCampaignsWebsiteAndShopSelector = e),
      (l.adsUEditorShopAdsBundleCreativeEditorSelector = s));
  },
  98,
);
