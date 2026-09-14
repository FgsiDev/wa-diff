__d(
  "AdsUEditorAdgroupSetPromotedObjectTypeOmnichannelVariationReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupShopAdsBundle",
    "AdsUEditorCampaignSetPromotedObjectTypeOmnichannelVariationDataActionFlux",
    "adsUEditorAreSomeCampaignGroupsBwISelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            isBwPCampaignGroup: r("adsUEditorAreSomeCampaignGroupsBwISelector"),
          },
          function (e, t, n) {
            var a = t.adgroupIDs,
              i = t.isSelected,
              l = n.isBwPCampaignGroup;
            return l
              ? e
              : o("AdsMutators").mutateEach(e, a, function (e, t) {
                  if (i) return e;
                  var n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.shops_bundle.delete(e);
                  n = o(
                    "AdsUEditorAdgroupShopAdsBundle",
                  ).ShopAdsBundleComponents.reduce(function (e, t) {
                    return t.toggle(e, !1);
                  }, n);
                  var a = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.get(n);
                  return a != null && a.isEmpty()
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.delete(n)
                    : n;
                });
          },
          r(
            "AdsUEditorCampaignSetPromotedObjectTypeOmnichannelVariationDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
