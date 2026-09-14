__d(
  "adsCollectionAdRemoveCollectionThumbnails",
  ["AdsAdgroupSemanticFields"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return r("AdsAdgroupSemanticFields").collectionThumbnails.isSupported(
        t,
        e,
      )
        ? r("AdsAdgroupSemanticFields").collectionThumbnails.delete(t, e)
        : e;
    }
    l.default = e;
  },
  98,
);
