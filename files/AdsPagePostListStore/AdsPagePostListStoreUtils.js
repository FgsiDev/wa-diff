__d(
  "AdsPagePostListStoreUtils",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsPagePostListStore",
    "adsStorePromiseAsyncGetForSyncStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("adsStorePromiseAsyncGetForSyncStore")(
        r("AdsPagePostListStore"),
        function () {
          return r("AdsPagePostListStore").getFor(e);
        },
        function (e) {
          return (
            e != null &&
            (e.list.length > 0 || o("AdsLoadStateUtils_LEGACY").isLoaded(e))
          );
        },
      );
    }
    l.loadPagePosts = e;
  },
  98,
);
