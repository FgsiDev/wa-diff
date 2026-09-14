__d(
  "adsCollectionAdRemoveCollectionRetailersItemIDs",
  ["AdsAPIObjectives", "AdsAdgroupRecordAccessors", "AdsAdgroupSemanticFields"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var o = e;
      return (
        r("AdsAdgroupSemanticFields").retailerItemIDs.isSupported(t, e) &&
          ((o = r("AdsAdgroupSemanticFields").retailerItemIDs.delete(t, o)),
          (o =
            n === r("AdsAPIObjectives").APP_INSTALLS
              ? o
              : r("AdsAdgroupRecordAccessors").creative.product_set_id.delete(
                  o,
                ))),
        r("AdsAdgroupSemanticFields").postClickItemDescription.isSupported(
          t,
          o,
        ) &&
          (o = r("AdsAdgroupSemanticFields").postClickItemDescription.delete(
            t,
            o,
          )),
        r("AdsAdgroupSemanticFields").postClickItemHeadline.isSupported(t, o) &&
          (o = r("AdsAdgroupSemanticFields").postClickItemHeadline.delete(
            t,
            o,
          )),
        o
      );
    }
    l.default = e;
  },
  98,
);
