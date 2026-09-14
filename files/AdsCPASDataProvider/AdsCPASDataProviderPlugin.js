__d(
  "AdsCPASDataProviderPlugin",
  ["ProductSetAPIClient", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "catalog_segment_type",
        "business",
        "id",
        "parent_catalog_id",
        "cpas_is_mpa_lite_omni_enabled_catalog_segment",
      ],
      s = function (n) {
        return r("ProductSetAPIClient")
          .loadFromCatalogWithFields(n, e)
          .then(function (e) {
            var t, n;
            return {
              catalogSegmentType: e.catalog_segment_type,
              businessName: (t = e.business) == null ? void 0 : t.name,
              businessID: (n = e.business) == null ? void 0 : n.id,
              catalogID: e.id,
              parentCatalogID: e.parent_catalog_id,
              isMPALiteOmniEnabled:
                e.cpas_is_mpa_lite_omni_enabled_catalog_segment,
            };
          });
      },
      u = {
        initialState: r(
          "loadObjectMapProvider",
        ).withSingleKeyLoader_USE_SPARINGLY(s),
      },
      c = u;
    l.default = c;
  },
  98,
);
