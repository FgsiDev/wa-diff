__d(
  "AdsCategoryAssetStore",
  [
    "AdsCategoryAssetDataManager",
    "AdsCategoryAssetImportActionFlux",
    "AdsCategoryAssetLoadErrorActionFlux",
    "AdsCategoryAssetLoadedActionFlux",
    "AdsCategoryAssetUpdateActionFlux",
    "AdsCategoryAssetUpdatedActionFlux",
    "AdsDataAtom",
    "ProductsFluxMultiParamLoadObjectStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.__loadImpl = function (e, t, n, r) {
              o("AdsCategoryAssetDataManager").loadCategoryAssetData(
                t,
                n,
                r,
                e,
              );
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.reduce = function (t, n) {
            var e = this,
              r = n.action,
              a = r.catalogID,
              i = r.filter,
              l = r.productSetID;
            switch (r.type) {
              case o("AdsCategoryAssetLoadedActionFlux").actionType:
                return this.__handle(t, r.data, r.criteria, a, l, i);
              case o("AdsCategoryAssetLoadErrorActionFlux").actionType:
                return this.__handle(t, r.error, r.criteria, a, l, i);
              case o("AdsCategoryAssetImportActionFlux").actionType:
                return this.__setLoading(t, [
                  this.getKey([r.criteria, a, l, i]),
                ]);
              case o("AdsCategoryAssetUpdateActionFlux").actionType:
                o("AdsCategoryAssetDataManager").update(
                  a,
                  l,
                  i,
                  r.updatedData,
                  r.updatedCategoryAssetDataMap,
                );
                var s = r.updatedCategoryAssetDataMap
                  .keySeq()
                  .toArray()
                  .map(function (t) {
                    return e.getKey([t, a, l, i]);
                  });
                return this.__setUpdating(t, s);
              case o("AdsCategoryAssetUpdatedActionFlux").actionType:
                return this.__handleMany(
                  t,
                  r.updatedCategoryAssetDataMap.mapKeys(function (e) {
                    return e;
                  }),
                  a,
                  l,
                  i,
                );
              default:
                return t;
            }
          }),
          t
        );
      })(r("ProductsFluxMultiParamLoadObjectStore")),
      u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
