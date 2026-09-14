__d(
  "AdsCampaignStoreUtils",
  [
    "AdsAccountStore",
    "AdsCampaignCombinedListStore",
    "Promise",
    "adsStoreFlattenLists",
    "adsStorePromiseAsyncGetForSyncStore",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var o = r("AdsAccountStore").getSelectedAccountID();
      return r("isFalsey")(o)
        ? (e || (e = n("Promise"))).resolve([])
        : r("adsStorePromiseAsyncGetForSyncStore")(
            r("AdsCampaignCombinedListStore"),
            function () {
              return r("AdsCampaignCombinedListStore").getForCampaignGroups(
                o,
                t,
              );
            },
          ).then(function (e) {
            return r("adsStoreFlattenLists")(e);
          });
    }
    l.loadCampaignIDsInCampaignGroups = s;
  },
  98,
);
