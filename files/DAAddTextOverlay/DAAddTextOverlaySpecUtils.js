__d(
  "DAAddTextOverlaySpecUtils",
  ["AdsDynamicOverlayContentTypeToShapesMapping", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e != null) return { customizations: { catalog_text_overlay: e } };
    }
    function s(e, t) {
      return e != null ? e : t != null ? "OPT_IN" : null;
    }
    function u(e, t) {
      var n,
        o,
        a,
        i =
          (n = e.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.template_data) == null
            ? void 0
            : n.image_layer_specs,
        l =
          i &&
          i.filter(function (e) {
            return e.get("layer_type") !== "text_overlay";
          }),
        s = t.da_add_text_overlay,
        u =
          s == null || (o = s.customizations) == null
            ? void 0
            : o.catalog_text_overlay,
        d =
          l == null
            ? void 0
            : l.find(function (e) {
                return e.get("layer_type") === "image";
              }),
        m = c(d),
        p = d != null && (l == null ? void 0 : l.size) === 1 && m;
      if (u == null) return p ? null : l == null ? void 0 : l.toArray();
      var _ = (a = l == null ? void 0 : l.toArray()) != null ? a : [];
      if (d == null) {
        var f = r("immutable").OrderedMap({
          layer_type: "image",
          image_source: "catalog",
        });
        _.push(f);
      }
      return (_.push(r("immutable").OrderedMap(u)), _);
    }
    function c(e) {
      return (
        (e == null ? void 0 : e.get("pad_image")) == null &&
        (e == null ? void 0 : e.get("crop_image")) == null
      );
    }
    function d(e, t) {
      return babelHelpers.extends({}, e, {
        customizations: babelHelpers.extends({}, e.customizations, {
          catalog_text_overlay: t,
        }),
        enroll_status: "OPT_IN",
      });
    }
    function m(e, t) {
      var n;
      return ((n = e.customizations) == null
        ? void 0
        : n.catalog_text_overlay) == null
        ? e
        : babelHelpers.extends({}, e, {
            customizations: babelHelpers.extends({}, e.customizations, {
              catalog_text_overlay: babelHelpers.extends(
                {},
                e.customizations.catalog_text_overlay,
                { content: t },
              ),
            }),
            enroll_status: "OPT_IN",
          });
    }
    function p(e, t) {
      return t == null
        ? void 0
        : t.some(function (t) {
            return (e == null ? void 0 : e.includes(t)) === !0;
          });
    }
    function _(e, t) {
      var n;
      return (n =
        e == null
          ? void 0
          : e.every(function (e) {
              return t.includes(e);
            })) != null
        ? n
        : !0;
    }
    function f(e) {
      if (e.length === 0) return [];
      var t = e
        .map(function (e) {
          var t;
          return (t = r("AdsDynamicOverlayContentTypeToShapesMapping").get(
            e,
          )) != null
            ? t
            : [];
        })
        .flat();
      return Array.from(new Set(t));
    }
    function g(e, t) {
      var n = f(e);
      if (!n.includes(t.overlay_shape)) {
        var r;
        return (r = n.at(0)) != null ? r : "none";
      }
      return t.overlay_shape;
    }
    ((l.getCustomizations = e),
      (l.getEnrollStatus = s),
      (l.getUpdatedImageLayerSpec = u),
      (l.imageLayerHasNoCustomizations = c),
      (l.setCatalogTextOverlay = d),
      (l.setCatalogTextOverlayContent = m),
      (l.isAnyOfSearchMetadataPresent = p),
      (l.isOnlySearchMetadataPresent = _),
      (l.getValidShapes = f),
      (l.getOverlayShape = g));
  },
  98,
);
