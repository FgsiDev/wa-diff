__d(
  "AdsCategoryAssetDataManager",
  [
    "AdsCategoryAssetImportAction",
    "AdsCategoryAssetLoadErrorAction",
    "AdsCategoryAssetLoadedAction",
    "AdsCategoryAssetUpdatedAction",
    "AdsGraphAPI",
    "immutable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "image_url",
      "name",
      "num_items",
      "criteria_value",
      "description",
      "destination_uri",
    ];
    function s(e, t, n, o) {
      r("AdsCategoryAssetImportAction").dispatch(
        { catalogID: e, productSetID: t, filter: n, criteria: o },
        {
          line: "39",
          module: "AdsCategoryAssetDataManager.js",
          moduleID: i.id,
        },
      );
    }
    function u(t, n, a, l) {
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", t)
          .edge("categories")
          .batched()
          .get({ categorization_criteria: l, fields: e, filter: a }),
        function (e) {
          r("AdsCategoryAssetLoadedAction").dispatch(
            {
              catalogID: t,
              productSetID: n,
              filter: a,
              criteria: l,
              data: r("immutable").List(e.data),
            },
            {
              line: "64",
              module: "AdsCategoryAssetDataManager.js",
              moduleID: i.id,
            },
          );
        },
        function (e) {
          return r("AdsCategoryAssetLoadErrorAction").dispatch(
            { catalogID: t, productSetID: n, filter: a, criteria: l, error: e },
            {
              line: "73",
              module: "AdsCategoryAssetDataManager.js",
              moduleID: i.id,
            },
          );
        },
      );
    }
    function c(e, t, n, a, l) {
      r("promiseDone")(
        o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", e)
          .edge("categories")
          .batched()
          .post({ data: a }),
        function (o) {
          r("AdsCategoryAssetUpdatedAction").dispatch(
            {
              catalogID: e,
              productSetID: t,
              filter: n,
              updatedCategoryAssetDataMap: l,
            },
            {
              line: "101",
              module: "AdsCategoryAssetDataManager.js",
              moduleID: i.id,
            },
          );
        },
      );
    }
    ((l.importCategoryAsset = s),
      (l.loadCategoryAssetData = u),
      (l.update = c));
  },
  98,
);
