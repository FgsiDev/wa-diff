__d(
  "AdsUEditAdgroupImageGenReducerUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = {};
      for (var o of e)
        o.id != null &&
          (r[o.id] = {
            generationPath: o.generationPath,
            imageVariationId: o.id,
            model: o.model,
            recipeType: o.recipeType,
          });
      var a = {};
      return (
        n.xfb_create_ad_images_for_variants.forEach(function (e, n) {
          var o,
            i,
            l =
              (o = (i = e.ad_image) == null ? void 0 : i.hash) != null ? o : "",
            s = t[n] != null ? r[t[n]] : void 0;
          l !== "" && s != null && (a[l] = s);
        }),
        a
      );
    }
    function l(e) {
      var t = new Set();
      return e.filter(function (e) {
        var n = e.hash;
        return n == null || t.has(n) ? !1 : (t.add(n), !0);
      });
    }
    ((i.buildVariantMetadataMap = e), (i.dedupeGASImagesByHash = l));
  },
  66,
);
