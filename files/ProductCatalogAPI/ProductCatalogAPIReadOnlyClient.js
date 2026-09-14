__d(
  "ProductCatalogAPIReadOnlyClient",
  [
    "AdsCatalogSelectorOptimisationUtils",
    "AdsGraphAPI",
    "CatalogUnreadableIDCache",
    "catalogConvertKeyValuePairsToMap",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (
        n === void 0 && (n = r("emptyFunction").thatReturnsArgument),
        o("CatalogUnreadableIDCache").guardCatalogRead(e, function () {
          var a = n(o("AdsGraphAPI").get(i.id).object("product_catalog", e));
          o(
            "AdsCatalogSelectorOptimisationUtils",
          ).isCatalogPreloadOptimisationEnabled() || (a = a.batched());
          var l = a.get({ date_format: "U", fields: t });
          return l.then(function (e) {
            return babelHelpers.extends({}, e, {
              capabilities:
                e.capabilities != null
                  ? r("catalogConvertKeyValuePairsToMap")(e.capabilities).toJS()
                  : null,
            });
          });
        })
      );
    }
    l.loadWithFields = e;
  },
  98,
);
