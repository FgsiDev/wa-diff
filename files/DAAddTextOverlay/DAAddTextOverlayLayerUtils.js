__d(
  "DAAddTextOverlayLayerUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["type"];
    function l(t) {
      var n,
        r,
        o,
        a,
        i,
        l =
          (n = t.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.template_data) == null
            ? void 0
            : n.image_layer_specs;
      if (l == null) return null;
      var s =
        (r = l.find(function (e) {
          return e.get("layer_type") === "text_overlay";
        })) == null
          ? void 0
          : r.toJS();
      if (s == null) return null;
      var u = (o = s.content) != null ? o : {},
        c = u.type,
        d = babelHelpers.objectWithoutPropertiesLoose(u, e),
        m = c
          ? [c]
          : (a = (i = s.content) == null ? void 0 : i.types) != null
            ? a
            : [];
      return babelHelpers.extends({}, s, {
        content: babelHelpers.extends({}, d, { types: m }),
      });
    }
    i.getTextOverlayLayerFromAdgroup = l;
  },
  66,
);
