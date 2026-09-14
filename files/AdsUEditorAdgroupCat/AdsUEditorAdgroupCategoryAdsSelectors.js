__d(
  "AdsUEditorAdgroupCategoryAdsSelectors",
  [
    "AdsBulkValueUtils",
    "AdsCategoryAssetStore",
    "AdsMixedValue",
    "AdsUEditorAdgroupCatalogOptions",
    "AdsUEditorSelectors",
    "DynamicCategorizationCriteria",
    "LoadObject",
    "ProductSetDataProvider",
    "adsCreateSelector",
    "adsUEditorSelectedAdgroupIDsSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "immutable",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("adsCreateSelector"))(
        [
          o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null ? void 0 : t.product_set_id;
          }),
        ],
        function (t) {
          return t instanceof r("AdsMixedValue");
        },
        { name: i.id + ".isMixedProductSetSelector" },
      ),
      u = e(
        [
          o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null ? void 0 : t.product_set_id;
          }),
        ],
        function (t) {
          return o("AdsBulkValueUtils").getUniformValue(t);
        },
        { name: i.id + ".productSetIDSelector" },
      ),
      c = e(
        [u, r("ProductSetDataProvider").toFluxSelector()],
        function (t, n) {
          return t == null
            ? r("LoadObject").empty({ creatorModuleID: i.id })
            : n.get(t);
        },
        { name: i.id + ".productSetDataSelector" },
      ),
      d = e(
        [c, r("AdsCategoryAssetStore").getForSelector],
        function (t, n) {
          var e = r("objectValues")(r("DynamicCategorizationCriteria")),
            o = Object.keys(r("DynamicCategorizationCriteria")).map(
              function (o, a) {
                var l = e[a];
                if (t.isLoading())
                  return [
                    l,
                    r("LoadObject").loading({ creatorModuleID: i.id }),
                  ];
                if (t.isEmpty())
                  return [l, r("LoadObject").empty({ creatorModuleID: i.id })];
                var s = t.getValueEnforcing(),
                  u = n(o, s.catalogID, s.id, s.filter);
                return [l, u];
              },
            );
          return r("immutable").Map(o);
        },
        { name: i.id + ".categoryAssetDataSelector" },
      ),
      m = e(
        [d],
        function (t) {
          var e = r("immutable").Set();
          return (
            r("objectValues")(r("DynamicCategorizationCriteria")).map(
              function (n) {
                var r = t.get(n);
                e =
                  r == null ||
                  !r.isDone() ||
                  !r.hasValue() ||
                  r.getValueEnforcing().size < 4
                    ? e.add(n)
                    : e.remove(n);
              },
            ),
            e
          );
        },
        { name: i.id + ".disabledCriteriaSelector" },
      ),
      p = e(
        [
          o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null ? void 0 : t.category_media_source;
          }),
        ],
        function (t) {
          return o("AdsBulkValueUtils").mapBulkValue(t, function (e) {
            return e === "CATEGORY";
          });
        },
        { name: i.id + ".bulkIsCategoryMediaSourceCheckedSelector" },
      ),
      _ = e(
        [r("adsUEditorSelectedAdgroupPlainObjectsSelector")],
        function (t) {
          return new Map(
            t.map(function (e) {
              var t;
              return [
                e.id,
                (t = e.creative) == null ? void 0 : t.categorization_criteria,
              ];
            }),
          );
        },
        { name: i.id + ".categorizationCriteriaMapSelector" },
      ),
      f = e(
        [_],
        function (t) {
          return o("AdsBulkValueUtils").aggregate(Array.from(t.values()));
        },
        { name: i.id + ".bulkCategorizationCriteriaSelector" },
      ),
      g = e(
        [r("adsUEditorSelectedAdgroupPlainObjectsSelector")],
        function (t) {
          return new Map(
            t.map(function (e) {
              var t;
              return [
                e.id,
                (t = e.creative) == null ||
                (t = t.object_story_spec) == null ||
                (t = t.template_data) == null
                  ? void 0
                  : t.format_option,
              ];
            }),
          );
        },
        { name: i.id + ".formatOptionMapSelector" },
      ),
      h = e(
        [r("adsUEditorSelectedAdgroupIDsSelector"), g],
        function (t, n) {
          return new Map(
            t.map(function (e) {
              return n.get(e) === "carousel_images_single_item"
                ? [
                    e,
                    o("AdsUEditorAdgroupCatalogOptions")
                      .AdsUEditorAdgroupCatalogOptions.SHOW_BY_SINGLE_PRODUCT,
                  ]
                : [
                    e,
                    o("AdsUEditorAdgroupCatalogOptions")
                      .AdsUEditorAdgroupCatalogOptions
                      .SHOW_BY_INDIVIDUAL_PRODUCTS,
                  ];
            }),
          );
        },
        { name: i.id + ".selectedCatalogOptionMapSelector" },
      ),
      y = e(
        [h],
        function (t) {
          var e;
          return (e = o("AdsBulkValueUtils").getUniformValue(
            o("AdsBulkValueUtils").aggregate(Array.from(t.values())),
          )) != null
            ? e
            : o("AdsUEditorAdgroupCatalogOptions")
                .AdsUEditorAdgroupCatalogOptions.MIXED_CRITERIA;
        },
        { name: i.id + ".selectedCatalogOptionSelector" },
      );
    ((l.isMixedProductSetSelector = s),
      (l.productSetDataSelector = c),
      (l.categoryAssetDataSelector = d),
      (l.disabledCriteriaSelector = m),
      (l.bulkIsCategoryMediaSourceCheckedSelector = p),
      (l.bulkCategorizationCriteriaSelector = f),
      (l.selectedCatalogOptionMapSelector = h),
      (l.selectedCatalogOptionSelector = y));
  },
  98,
);
