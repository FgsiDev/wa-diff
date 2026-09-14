__d(
  "AdsConnectedSourcesEPACatalogDefaultOn",
  [
    "AdsAdgroupConnectedSourcesMutators",
    "AdsConnectedSourcesSourceUrlFallbackCatalog",
    "AdsMetadataConnectedSourcesUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        o,
        a =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.catalog,
        i =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null
            ? void 0
            : n.product_extensions;
      return (
        ((a == null || (r = a.action_metadata) == null ? void 0 : r.type) ===
          "MANUAL" &&
          (a == null ? void 0 : a.enroll_status) === "OPT_OUT") ||
        ((i == null || (o = i.action_metadata) == null ? void 0 : o.type) ===
          "MANUAL" &&
          (i == null ? void 0 : i.enroll_status) === "OPT_OUT")
      );
    }
    function s(e) {
      var t = o(
        "AdsConnectedSourcesSourceUrlFallbackCatalog",
      ).getSourceUrlFallbackCatalogProductSetLO(e);
      if (t.isLoading() || !t.hasValueWithoutError()) return null;
      var n = t.getValue();
      return n == null || n.id == null ? null : n.id;
    }
    function u(t, n) {
      var r, a, i;
      if (
        n === "" ||
        ((r = t.creative) == null || (r = r.creative_sourcing_spec) == null
          ? void 0
          : r.associated_product_set_id) != null ||
        e(t)
      )
        return t;
      var l = s(n);
      if (l == null) return t;
      var u = o(
        "AdsAdgroupConnectedSourcesMutators",
      ).setConnectedSourcesCatalogEnrollStatusMutator(
        t,
        l,
        !0,
        "DEFAULT",
        null,
        null,
      );
      return (
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).logPESourceUrlFallbackCatalogDefaulted(
          (a = t.account_id) != null ? a : null,
          (i = t.id) != null ? i : null,
          l,
          n,
          "l1_inline",
        ),
        u
      );
    }
    function c(t, n) {
      var r, a;
      if (n === "" || e(t)) return t;
      var i = s(n);
      if (i == null) return t;
      var l = o(
          "AdsAdgroupConnectedSourcesMutators",
        ).clearDefaultSourcedCatalogMutator(t),
        u = o(
          "AdsAdgroupConnectedSourcesMutators",
        ).setConnectedSourcesCatalogEnrollStatusMutator(
          l,
          i,
          !0,
          "DEFAULT",
          null,
          null,
        );
      return (
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).logPESourceUrlFallbackCatalogDefaulted(
          (r = t.account_id) != null ? r : null,
          (a = t.id) != null ? a : null,
          i,
          n,
          "l1_inline",
        ),
        u
      );
    }
    ((l.hasManualCatalogOptOut = e),
      (l.applyEPACatalogDefaultOn = u),
      (l.applyEPACatalogReDefaultOn = c));
  },
  98,
);
