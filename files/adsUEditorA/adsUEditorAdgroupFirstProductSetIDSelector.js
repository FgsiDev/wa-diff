__d(
  "adsUEditorAdgroupFirstProductSetIDSelector",
  [
    "AdsAdgroupRecordAccessors",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").adgroup.bulkByAccessor(
            r("AdsAdgroupRecordAccessors").creative.product_set_id.get,
          ),
          o("adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector")
            .adsUEditorAdgroupIsEligiblePCAUnifiedL1Selector,
          r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector"),
        ],
        function (t, n, r) {
          var e;
          if (n) {
            var o, a;
            return (o =
              (a = r[0]) == null ||
              (a = a.adgroup) == null ||
              (a = a.creative) == null ||
              (a = a.creative_sourcing_spec) == null
                ? void 0
                : a.associated_product_set_id) != null
              ? o
              : null;
          }
          return (e = t.getValues()[0]) != null ? e : null;
        },
        { name: i.id + ".adsUEditorAdgroupFirstProductSetIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
