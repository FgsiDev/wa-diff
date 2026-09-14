__d(
  "CatalogCreationUIStateCatalogItemCreatedLoggerPlugin",
  ["CatalogBusinessEventsLoggerHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("CatalogBusinessEventsLoggerHelper")
            .getCatalogCreateFlowLogger()
            .setEvent("catalog_create_flow_simple_catalog_manager_item_added")
            .log();
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
