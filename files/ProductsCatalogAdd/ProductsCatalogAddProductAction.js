__d(
  "ProductsCatalogAddProductAction",
  ["CatalogCreationUIStateCatalogItemCreatedLoggerPlugin", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "CatalogCreationUIStateCatalogItemCreatedLoggerPlugin",
            n("CatalogCreationUIStateCatalogItemCreatedLoggerPlugin"),
            {},
          ),
        ];
      },
      "ProductCatalog.CATALOG.ADD_PRODUCT",
    );
    a.exports = e;
  },
  null,
);
