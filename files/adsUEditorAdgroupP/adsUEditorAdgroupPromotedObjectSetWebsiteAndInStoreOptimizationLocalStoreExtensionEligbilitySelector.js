__d(
  "adsUEditorAdgroupPromotedObjectSetWebsiteAndInStoreOptimizationLocalStoreExtensionEligbilitySelector",
  [
    "AdsAdgroupLocalStoreExtensionUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          var e = new Map();
          return (
            t.forEach(function (t) {
              var n = t.adgroup,
                r = t.campaign,
                a = t.campaignGroup,
                i = n.id;
              i != null &&
                e.set(
                  i,
                  o(
                    "AdsAdgroupLocalStoreExtensionUtils",
                  ).isEligibleForLocalStoreExtensionByCampaignAndAdgroupForWebsiteAndInStore(
                    r,
                    a,
                    n,
                  ),
                );
            }),
            e
          );
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupPromotedObjectSetWebsiteAndInStoreOptimizationLocalStoreExtensionEligbilitySelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
