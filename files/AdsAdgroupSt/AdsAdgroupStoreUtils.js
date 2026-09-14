__d(
  "AdsAdgroupStoreUtils",
  [
    "AdsAccountStore",
    "AdsAdgroupCombinedListStore",
    "Promise",
    "adsStorePromiseAsyncGetForSyncStore",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var a = r("AdsAccountStore").getSelectedAccountID();
      return r("isFalsey")(a)
        ? (e || (e = n("Promise"))).resolve([])
        : r("adsStorePromiseAsyncGetForSyncStore")(
            o("AdsAdgroupCombinedListStore").AdsAdgroupCombinedListStore,
            function () {
              return o(
                "AdsAdgroupCombinedListStore",
              ).AdsAdgroupCombinedListStore.getForCampaigns(a, t);
            },
          ).then(function (e) {
            var t = [];
            return (
              e.forEach(function (e) {
                t.push.apply(t, e.list);
              }),
              t
            );
          });
    }
    function u(e) {
      return s(e);
    }
    l.loadAdgroupIDsInCampaigns = u;
  },
  98,
);
