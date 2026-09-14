__d(
  "ProductCatalogDataManagerBasicFields",
  ["GraphAPIFieldUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "business",
      "capabilities",
      "capability_features",
      "catalog_item_type",
      o("GraphAPIFieldUtils").getFieldWithParameterizedSubfields(
        "external_event_sources",
        { limit: "0", summary: "true" },
      ),
      "feed_count",
      "has_external_event_source_associated_skip_privacy",
      "id",
      "name",
      "vertical",
      o("GraphAPIFieldUtils").getFieldWithParameterizedSubfields(
        "smart_pixel_settings",
        { fields: ["id", "is_update_enabled", "default_currency"] },
      ),
      "source_app",
    ];
    l.default = e;
  },
  98,
);
