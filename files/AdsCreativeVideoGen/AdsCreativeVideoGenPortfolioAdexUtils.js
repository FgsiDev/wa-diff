__d(
  "AdsCreativeVideoGenPortfolioAdexUtils",
  [
    "AdsCreativeVideoGenAdoptablePreviewUtils",
    "AdsCreativeVideoGenModalContext",
    "AdsCreativeVideoGenRecipeLabels",
    "AdsCreativeVideoGenTypes",
    "WebStorage",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useSyncExternalStore,
      m = 4,
      p = 10,
      _ = 1,
      f = {
        1: "website_image_showcase",
        2: "website_image_showcase",
        3: "lifestyle_showcase",
        4: "simple_animation",
        5: "simple_animation",
        6: "website_image_showcase",
        7: "ugc_tryon",
        8: "lifestyle_showcase",
        9: "background_swaps",
        10: "slideshow",
        11: "lifestyle_showcase",
        12: "studio_showcase",
        13: "website_image_showcase",
        14: "ugc_pas",
        15: "website_image_showcase",
        16: "ugc_pas_service",
        17: "ugc_top_reasons_service",
        18: "ad_showcase",
        19: "ad_showcase",
        20: "hero_shot",
        21: "image_animation",
      };
    function g(e) {
      var t;
      return e == null ? null : (t = f[String(e)]) != null ? t : null;
    }
    function h(e, t) {
      return e + t >= p;
    }
    function y(e, t) {
      var n;
      if (t == null) return null;
      var r = e.find(function (e) {
        return e.variantId === t;
      });
      if (r != null) return r;
      var o = g(t);
      return o == null
        ? null
        : (n = e.find(function (e) {
              return g(e.variantId) === o;
            })) != null
          ? n
          : null;
    }
    function C(e) {
      return (
        e === o("AdsCreativeVideoGenTypes").VideoGenModalStep.PRE_GEN ||
        e ===
          o("AdsCreativeVideoGenTypes").VideoGenModalStep
            .PROGRESSIVE_SCRIPTING ||
        e === o("AdsCreativeVideoGenTypes").VideoGenModalStep.CONCEPT_EDITOR
      );
    }
    function b(e, t) {
      if (e.length === 0) return [];
      var n = [].concat(e).sort(function (e, t) {
        var n,
          r,
          o = (n = e.script_variant_name) != null ? n : "",
          a = (r = t.script_variant_name) != null ? r : "";
        return o.localeCompare(a);
      });
      return n
        .map(function (e) {
          return e.id;
        })
        .filter(Boolean)
        .slice(0, t);
    }
    function v() {
      return !o(
        "AdsCreativeVideoGenAdoptablePreviewUtils",
      ).isAdoptablePreviewEnabled();
    }
    function S() {
      var e = o("react-compiler-runtime").c(2),
        t = o(
          "AdsCreativeVideoGenModalContext",
        ).useAdsCreativeVideoGenModalContext(),
        n = t.state,
        r = n.portfolioSelectedIDs,
        a;
      return (
        e[0] !== r
          ? ((a = v() && r.length >= m), (e[0] = r), (e[1] = a))
          : (a = e[1]),
        a
      );
    }
    function R(e, t) {
      return (
        e !== o("AdsCreativeVideoGenTypes").VideoStatusIDSource.FROM_SPEC && !t
      );
    }
    var L = "video_gen_regen_",
      E = new Map(),
      k = new Map();
    function I(t) {
      var n = L + t;
      try {
        var o = (e || (e = r("WebStorage"))).getLocalStorageForRead(),
          a = o == null ? void 0 : o.getItem(n);
        if (a != null) return JSON.parse(a);
      } catch (e) {}
      return { pendingVariantIds: [], regeneratedEntIds: [] };
    }
    function T(t, n) {
      var o = L + t,
        a = (e || (e = r("WebStorage"))).getLocalStorage(),
        i = {
          pendingVariantIds: [].concat(n.pendingVariantIds),
          regeneratedEntIds: [].concat(n.regeneratedEntIds),
        };
      (e.setItemGuarded(a, o, JSON.stringify(i)), E.set(t, i));
      for (var l of (s = k.get(t)) != null ? s : []) {
        var s;
        l();
      }
    }
    function D(e) {
      var t = E.get(e);
      if (t != null) return t;
      var n = I(e);
      return (E.set(e, n), n);
    }
    function x(e, t) {
      var n,
        r = (n = k.get(e)) != null ? n : new Set();
      return (
        r.add(t),
        k.set(e, r),
        function () {
          (r.delete(t), r.size === 0 && k.delete(e));
        }
      );
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e
        ? ((n = function (n) {
            return x(e, n);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = n,
        a;
      t[2] !== e
        ? ((a = function () {
            return D(e);
          }),
          (t[2] = e),
          (t[3] = a))
        : (a = t[3]);
      var i = a;
      return d(r, i, i);
    }
    function P(e, t) {
      var n = I(e);
      ((n.pendingVariantIds = Array.from(
        new Set([].concat(n.pendingVariantIds, t)),
      )),
        T(e, n));
    }
    function N(e, t) {
      var n = I(e),
        r = new Set(t),
        o = n.pendingVariantIds.filter(function (e) {
          return !r.has(e);
        });
      o.length !== n.pendingVariantIds.length &&
        ((n.pendingVariantIds = o), T(e, n));
    }
    function M(e) {
      return I(e).pendingVariantIds;
    }
    function w(e, t, n) {
      var r = I(e);
      if (!r.regeneratedEntIds.includes(n)) {
        var o = r.pendingVariantIds.indexOf(t);
        (o !== -1 && r.pendingVariantIds.splice(o, 1),
          r.regeneratedEntIds.push(n),
          T(e, r));
      }
    }
    function A(e) {
      return I(e).regeneratedEntIds;
    }
    function F(e, t) {
      if (t.length === 0) return [].concat(e);
      var n = new Set(t),
        r = new Map(
          e
            .filter(function (e) {
              return e.id != null;
            })
            .map(function (e) {
              var t;
              return [(t = e.id) != null ? t : "", e];
            }),
        );
      return [].concat(
        e.filter(function (e) {
          return e.id == null || !n.has(e.id);
        }),
        t
          .map(function (e) {
            return r.get(e);
          })
          .filter(Boolean),
      );
    }
    function O(e, t, n) {
      var r = I(e);
      return (
        r.regeneratedEntIds.includes(t) ||
        (n != null && r.pendingVariantIds.includes(n))
      );
    }
    function B(e, t, n) {
      var r,
        o = M(e),
        a =
          o.length === 0
            ? []
            : (r =
                  t == null
                    ? void 0
                    : t.filter(function (e) {
                        return (
                          e.id != null &&
                          !n.has(e.id) &&
                          e.variant_id != null &&
                          e.is_recipe_selected === !0 &&
                          o.includes(e.variant_id)
                        );
                      })) != null
              ? r
              : [];
      a.sort(function (e, t) {
        var n, r;
        return (
          o.indexOf((n = e.variant_id) != null ? n : -1) -
          o.indexOf((r = t.variant_id) != null ? r : -1)
        );
      });
      for (var i of a) {
        var l = i.id,
          s = i.variant_id;
        l != null && s != null && (w(e, s, l), n.add(l));
      }
      for (var u of t != null ? t : []) u.id != null && n.add(u.id);
    }
    ((l.VARIANT_ID_TO_FBT_LABEL_MAP = o(
      "AdsCreativeVideoGenRecipeLabels",
    ).VARIANT_ID_TO_FBT_LABEL_MAP),
      (l.VARIANT_ID_TO_FBT_SUBTITLE_MAP = o(
        "AdsCreativeVideoGenRecipeLabels",
      ).VARIANT_ID_TO_FBT_SUBTITLE_MAP),
      (l.VARIANT_ID_TO_LEGACY_FBT_LABEL_MAP = o(
        "AdsCreativeVideoGenRecipeLabels",
      ).VARIANT_ID_TO_LEGACY_FBT_LABEL_MAP),
      (l.getVideoGenRecipeLabel = o(
        "AdsCreativeVideoGenRecipeLabels",
      ).getVideoGenRecipeLabel),
      (l.MAX_PORTFOLIO_SELECTIONS = m),
      (l.PORTFOLIO_EXPANSION_CACHING_TREATMENT = _),
      (l.VARIANT_ID_TO_RECIPE_GROUP = f),
      (l.getRecipeGroupKey = g),
      (l.hasReachedGrabAndGoGenerationLimit = h),
      (l.findRecipeForVariant = y),
      (l.shouldOverridePrimaryAndSecondaryButton = C),
      (l.capSelectedIdsByVariantDiversity = b),
      (l.isPortfolioSelectionCapEnforced = v),
      (l.useIsPortfolioSelectionDisabled = S),
      (l.shouldFireProgressiveScriptingPortfolio = R),
      (l.useVideoGenRegenData = $),
      (l.addPendingVariantIds = P),
      (l.removePendingVariantIds = N),
      (l.getPendingVariantIds = M),
      (l.getRegeneratedEntIds = A),
      (l.orderRegeneratedNodesLast = F),
      (l.isRegeneratedCard = O),
      (l.resolveNewRegeneratedEnts = B));
  },
  98,
);
