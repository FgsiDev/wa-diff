__d(
  "adsExperimentsGetLightweightCatalogData",
  ["isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = JSON.parse(e != null ? e : "{}");
      return {
        description: t.description != null ? String(t.description) : null,
        headline: t.headline != null ? String(t.headline) : null,
        primaryText: t.primary_text != null ? String(t.primary_text) : null,
        productCatalogID:
          t.product_catalog_id != null ? String(t.product_catalog_id) : null,
        productSetID:
          t.product_set_id != null ? String(t.product_set_id) : null,
        auto_change_budget_to_winner: r("isTruthy")(
          t.auto_change_budget_to_winner,
        )
          ? !0
          : void 0,
      };
    }
    l.default = e;
  },
  98,
);
