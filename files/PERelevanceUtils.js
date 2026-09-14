__d(
  "PERelevanceUtils",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "gkx",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === !0 ? !1 : r("gkx")("2898");
    }
    function s(e) {
      return e === !0 ? !1 : r("gkx")("1972");
    }
    function u() {
      return s() || r("gkx")("19674");
    }
    function c(t) {
      return t === !0 ? !1 : e(t) || s(t);
    }
    function d(e) {
      return s(e) ? r("gkx")("26739") : !1;
    }
    function m() {
      return r("justknobx")._("3925");
    }
    function p(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.ad_extensions_relevancy_spec;
      return (
        u() &&
        (r == null || (n = r.get("extension_specs")) == null || n.some == null
          ? void 0
          : n.some(function (e) {
              return (
                (e == null ? void 0 : e.get("extension_type")) ===
                  "product_extensions" &&
                (e == null ? void 0 : e.get("virtual_pset_id")) != null
              );
            })) === !0
      );
    }
    function _(e) {
      var t, n;
      if (!u()) return null;
      var r =
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.ad_extensions_relevancy_spec) == null ||
        (t = t.get("extension_specs")) == null ||
        t.find == null
          ? void 0
          : t.find(function (e) {
              return (
                (e == null ? void 0 : e.get("extension_type")) ===
                "product_extensions"
              );
            });
      return (n = r == null ? void 0 : r.get("virtual_pset_id")) != null
        ? n
        : null;
    }
    function f(e) {
      var t,
        n,
        r =
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.ad_extensions_relevancy_spec) == null ||
          (t = t.get("extension_specs")) == null ||
          t.find == null
            ? void 0
            : t.find(function (e) {
                return (
                  (e == null ? void 0 : e.get("extension_type")) ===
                  "product_extensions"
                );
              });
      return (n = r == null ? void 0 : r.get("selected_strategy_id")) != null
        ? n
        : null;
    }
    function g(e) {
      var t;
      if (!u()) return !1;
      var n =
        e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null
          ? void 0
          : t.ad_extensions_relevancy_spec;
      if (n == null) return !1;
      if (n instanceof r("immutable").Map) {
        var o = n.get("extension_specs");
        return (
          o instanceof r("immutable").List &&
          o.some(function (e) {
            return (
              e instanceof r("immutable").Map &&
              e.get("extension_type") === "product_extensions" &&
              (e.get("virtual_pset_id") != null ||
                e.get("selected_strategy_id") != null)
            );
          })
        );
      }
      var a = n.extension_specs;
      return (
        Array.isArray(a) &&
        a.some(function (e) {
          return (
            (e == null ? void 0 : e.extension_type) === "product_extensions" &&
            ((e == null ? void 0 : e.virtual_pset_id) != null ||
              (e == null ? void 0 : e.selected_strategy_id) != null)
          );
        })
      );
    }
    function h(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.ad_extensions_relevancy_spec;
      return (
        (r == null || (n = r.get("extension_specs")) == null || n.some == null
          ? void 0
          : n.some(function (e) {
              return (
                (e == null ? void 0 : e.get("extension_type")) ===
                  "product_extensions" &&
                (e == null ? void 0 : e.get("selected_strategy_id")) != null
              );
            })) === !0
      );
    }
    function y(e) {
      var t,
        n,
        r =
          e == null || (t = e.extension_specs) == null
            ? void 0
            : t.find(function (e) {
                return (
                  (e == null ? void 0 : e.extension_type) ===
                  "product_extensions"
                );
              });
      return (n = r == null ? void 0 : r.selected_strategy_id) != null
        ? n
        : null;
    }
    function C(e) {
      var t, n;
      if (!u()) return null;
      var r =
        e == null || (t = e.extension_specs) == null
          ? void 0
          : t.find(function (e) {
              return (
                (e == null ? void 0 : e.extension_type) === "product_extensions"
              );
            });
      return (r == null ? void 0 : r.virtual_pset_id) == null
        ? null
        : (n = r == null ? void 0 : r.selected_strategy_id) != null
          ? n
          : null;
    }
    function b(e) {
      var t, n;
      if (!u()) return null;
      var r =
        e == null || (t = e.extension_specs) == null
          ? void 0
          : t.find(function (e) {
              return (
                (e == null ? void 0 : e.extension_type) === "product_extensions"
              );
            });
      return (n = r == null ? void 0 : r.virtual_pset_id) != null ? n : null;
    }
    function v(e) {
      return b(e) != null;
    }
    function S(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.creative_sourcing_spec.ad_extensions_relevancy_spec.delete(e);
    }
    function R(e) {
      return e === "MANUAL" ? "MANUAL" : "DEFAULT";
    }
    function L(e, t) {
      t === void 0 && (t = "MANUAL");
      var a = n("AdsAdgroupFormatTransformationMutators"),
        i = a.adsAdgroupMixedCollageRelevanceOptInMutator,
        l = a.adsAdgroupReactiveControlOptionOptInWithBoundleMutationMutator,
        s = R(t),
        u = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.catalog.enroll_status.set("OPT_IN"),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.catalog.action_metadata.type.set(t),
        )(e);
      return (
        (u = l(u, "sa_collection", "catalog", s)),
        r("justknobx")._("1114") && (u = l(u, "carousel", "catalog", s)),
        (u = i(u)),
        u
      );
    }
    function E(e, t) {
      t === void 0 && (t = "MANUAL");
      var r = n("AdsAdgroupFormatTransformationMutators"),
        o = r.adsAdgroupReactiveControlOptionOptOutWithBoundleMutationMutator,
        a = R(t),
        i = o(e, "sa_collection", "catalog", void 0, a);
      return ((i = o(i, "carousel", "catalog", void 0, a)), i);
    }
    ((l.isPEVisibleProductsAdexGKOrLLMGKEnabled = c),
      (l.isPELLMProductsSectionInCreativeSetupEnabled = d),
      (l.isPEVisibleProductsRemoveProductsEnabled = m),
      (l.hasVirtualProductSetId = p),
      (l.getVirtualProductSetIdFromAdgroup = _),
      (l.getSelectedRelevancyStrategyIDFromAdgroup = f),
      (l.hasLLMRelevanceStrategySelected = g),
      (l.hasSelectedRelevancyStrategyIgnoringGK = h),
      (l.getSelectedRelevancyStrategyIDIgnoringGK = y),
      (l.getLLMStrategySelectionFromRelevancySpec = C),
      (l.getVirtualProductSetIDFromRelevancySpec = b),
      (l.hasVirtualProductSetIDFromRelevancySpec = v),
      (l.mayBeDeleteAdExtensionsRelevancySpecFromAdgroup = S),
      (l.applyVirtualPsetCatalogAndFormatOptIn = L),
      (l.applyVirtualPsetCatalogAndFormatOptOut = E));
  },
  98,
);
