__d(
  "adsMgmtAdgroupIDsFromSelectedParentIDsByLevelSelector",
  [
    "AdsAccountStore",
    "AdsAdgroupCombinedListStore",
    "adsCreateStoreSelector",
    "adsMgmtCampaignSelectedIdsByLevelSelector",
    "adsStoreFlattenLists",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateStoreSelector")(
        [
          o("AdsAdgroupCombinedListStore").AdsAdgroupCombinedListStore,
          r("AdsAccountStore"),
        ].concat(r("adsMgmtCampaignSelectedIdsByLevelSelector").getStores()),
        function () {
          var e = r("adsMgmtCampaignSelectedIdsByLevelSelector")(),
            t = o(
              "AdsAdgroupCombinedListStore",
            ).AdsAdgroupCombinedListStore.getForCampaigns(
              r("AdsAccountStore").getSelectedAccountIDX(),
              e,
            );
          return r("adsStoreFlattenLists")(t);
        },
        { name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
