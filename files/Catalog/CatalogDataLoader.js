__d(
  "CatalogDataLoader",
  ["AdsGraphAPI", "CatalogUnreadableIDCache"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("CatalogUnreadableIDCache").guardCatalogRead(e, function () {
        return o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", e)
          .setPriority("HIGH")
          .batched()
          .get({ fields: t });
      });
    }
    function s(e, t) {
      return o("CatalogUnreadableIDCache").guardCatalogRead(e, function () {
        return o("AdsGraphAPI")
          .get(i.id)
          .object("product_catalog", e)
          .setPriority("HIGH")
          .batched()
          .get({ fields: t });
      });
    }
    function u(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .object("product_set", e)
        .setPriority("HIGH")
        .batched()
        .get({ fields: "product_catalog{id}" })
        .then(function (e) {
          return e.product_catalog.id;
        });
    }
    var c = {
        loadCatalogWithFields: e,
        loadCPASCatalogWithFieldsInAdsManager: s,
        loadCatalogIDFromProductSetID: u,
      },
      d = c;
    l.default = d;
  },
  98,
);
