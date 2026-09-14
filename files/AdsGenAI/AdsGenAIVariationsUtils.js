__d(
  "AdsGenAIVariationsUtils",
  [
    "AdsCreativeGenAITypes",
    "AdsGenAIMapKeyUtils",
    "AdsMetadataBrandKitColorUtils",
    "AdsMetadataBrandKitGetColorCacheKey",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u = r("immutable").Set(
          t
            .map(function (e) {
              return e.text;
            })
            .filter(function (e) {
              return e !== "";
            }),
        ),
        c = u.toArray().sort(),
        d = new Map();
      t.forEach(function (e) {
        var t;
        d.set((t = e == null ? void 0 : e.text) != null ? t : "", e);
      });
      var m = new Map();
      (i.forEach(function (e) {
        var t;
        m.set((t = e == null ? void 0 : e.hash) != null ? t : "", e);
      }),
        (!a || u.size === 0) && (c = [""]));
      var p = i
        .filter(function (e) {
          return e.hash !== null;
        })
        .map(function (e) {
          return e.hash;
        });
      (!l || p.length === 0) && (p = [""]);
      var _ = r("immutable").Set();
      return (
        c.forEach(function (t) {
          p.forEach(function (i) {
            var u,
              c = o("AdsGenAIMapKeyUtils").getMediaVariationsMapOverlayKey(
                t,
                n,
                i != null ? i : "",
                r("AdsMetadataBrandKitGetColorCacheKey")(s),
              ),
              p = (u = e.get(c)) == null ? void 0 : u.toSet();
            (p == null ||
              p.forEach(function (e) {
                e.asset.metadata != null &&
                  (e.asset.metadata = babelHelpers.extends(
                    {},
                    e.asset.metadata,
                    {
                      text_overlay: a ? d.get(t) : null,
                      logo_overlay: l ? m.get(i != null ? i : "") : null,
                    },
                  ));
              }),
              (_ = p ? _.union(p) : _));
          });
        }),
        _
      );
    }
    function s(e) {
      if (e == null) return [];
      var t = [];
      return (
        e.forEach(function (e) {
          var n, r, a, i, l, s, d, m, p, _, f, g, h;
          t.push({
            image_variation_id: (n = e.asset.assetID) != null ? n : void 0,
            stable_image_id:
              (r = e.asset.metadata) == null ? void 0 : r.stable_image_id,
            hash: e.asset.imageHash,
            enroll_status: e.isSelected === "OPT_OUT" ? "OPT_OUT" : "OPT_IN",
            everstore_handle:
              (a = e.asset.metadata) == null ? void 0 : a.everstore_handle,
            original_image_handle:
              (i = e.asset.metadata) == null ? void 0 : i.original_image_handle,
            layout_type:
              (l = e.asset.metadata) == null ? void 0 : l.layout_type,
            base_image_caption:
              (s = e.asset.metadata) == null ? void 0 : s.base_image_caption,
            seed_image_source:
              (d = e.asset.metadata) == null ? void 0 : d.seed_image_source,
            is_from_cache:
              (m = e.asset.metadata) == null ? void 0 : m.is_from_cache,
            generation_path:
              ((p = e.asset.metadata) == null ? void 0 : p.generation_path) ===
              o("AdsCreativeGenAITypes").GenAIAssetGenerationPath.HERO
                ? "HERO"
                : "NON_HERO",
            text_overlay: u(
              (_ = e.asset.metadata) == null ? void 0 : _.text_overlay,
            ),
            logo_overlay: c(
              (f = e.asset.metadata) == null ? void 0 : f.logo_overlay,
            ),
            is_suggested:
              (g = e.asset.metadata) == null ? void 0 : g.is_suggested,
            model: (h = e.asset.metadata) == null ? void 0 : h.model,
          });
        }),
        t.sort(function (e, t) {
          return e.hash > t.hash ? 1 : -1;
        })
      );
    }
    function u(e) {
      return e == null ? null : { text: e.text, source: e.source };
    }
    function c(e) {
      var t, n;
      return e == null
        ? null
        : {
            hash: (t = e.hash) != null ? t : "",
            selected: (n = e.isSelected) != null ? n : !1,
          };
    }
    function d(t, n, r, o, a, i, l) {
      var u = e(t, n, r, o, a, i, l),
        c = s(u);
      if (c.length === 0) {
        var d;
        return s((d = t.get("")) == null ? void 0 : d.toSet()).flat();
      }
      return c;
    }
    var m = function (t) {
      var e;
      return d(
        t.textOverlayImageVariations,
        (e = t.textOverlays) != null ? e : [{ text: "", source: "DEFAULT" }],
        t.textOverlayFontStyle,
        t.isTextOverlaySelected,
        t.logoAssets.filter(function (e) {
          return e.isSelected;
        }),
        t.isLogoOverlaySelected,
        t.colors,
      );
    };
    function p(e, t) {
      var n, r, a, i, l, s, u;
      if (e.editStatus === "FROM_EDIT") return !0;
      var c =
          (n =
            (r = t.textOverlays.getValue()) == null
              ? void 0
              : r.filter(function (e) {
                  return e != null && e.text !== "";
                })) != null
            ? n
            : [],
        d = t.logoAssets.filter(function (e) {
          return e.isSelected === !0;
        }),
        m = t.textOverlayFontStyle,
        p =
          (a = e.composExtraData) == null || (a = a.text) == null
            ? void 0
            : a.text,
        _ = t.isTextOverlaySelected
          ? c.some(function (e) {
              return e.text === p;
            }) &&
            JSON.stringify(m) ===
              JSON.stringify(
                (i = e.composExtraData) == null ? void 0 : i.textStyle,
              )
          : p == null || p === "",
        f =
          t.isLogoOverlaySelected && d.length > 0
            ? d.some(function (t) {
                var n;
                return (
                  t.hash ===
                  ((n = e.composExtraData) == null || (n = n.logo) == null
                    ? void 0
                    : n.hash)
                );
              })
            : ((l = e.composExtraData) == null ? void 0 : l.logo) == null ||
              Object.keys((s = e.composExtraData) == null ? void 0 : s.logo)
                .length === 0,
        g = o("AdsMetadataBrandKitColorUtils").isBrandKitColorMatched(
          t.colors,
          (u = e.composExtraData) == null ? void 0 : u.brandkit,
        );
      return _ && f && g;
    }
    ((l.getGeneratedVariablesFromActionParams = m), (l.shouldBeDisplayed = p));
  },
  98,
);
