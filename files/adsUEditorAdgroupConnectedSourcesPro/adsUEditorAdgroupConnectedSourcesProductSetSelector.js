__d(
  "adsUEditorAdgroupConnectedSourcesProductSetSelector",
  [
    "AdsUEditorSelectors",
    "LoadObject",
    "ProductSetDataProvider",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "catalogEnrollTypesToIgnoreForPE",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.creative) == null ||
                (t = t.creative_sourcing_spec) == null
                ? void 0
                : t.associated_product_set_id;
            }),
          ),
          r("ProductSetDataProvider").toFluxSelector(),
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.creative) == null ||
                (t = t.creative_sourcing_spec) == null ||
                (t = t.catalog) == null ||
                (t = t.action_metadata) == null
                ? void 0
                : t.type;
            }),
          ),
        ],
        function (t, n, a) {
          return a != null &&
            o(
              "catalogEnrollTypesToIgnoreForPE",
            ).CATALOG_ENROLL_TYPES_TO_IGNORE.includes(a)
            ? r("LoadObject").empty({ creatorModuleID: i.id })
            : t == null
              ? r("LoadObject").empty({ creatorModuleID: i.id })
              : n.get(t);
        },
        { name: i.id + ".adsUEditorAdgroupConnectedSourcesProductSetSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
