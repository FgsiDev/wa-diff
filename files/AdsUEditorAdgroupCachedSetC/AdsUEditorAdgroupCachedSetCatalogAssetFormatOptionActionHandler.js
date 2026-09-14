__d(
  "AdsUEditorAdgroupCachedSetCatalogAssetFormatOptionActionHandler",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsUEditorAdgroupCachedRecord",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCatalogAssetFormatOptionDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, r) {
        if (!t || !n) return r;
        var e = o("AdsAPIAdgroupRecordUtils").getAdditionalImageIndex(t, n);
        return r.set("additionalImageIndex", e);
      },
      s = {
        type: o("AdsUEditorAdgroupSetCatalogAssetFormatOptionDataActionFlux")
          .actionType,
        fluxInputs: {
          plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
            o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
              .getAdgroupSpecPathPlugin,
          ),
        },
        mutate: function (n, o, a) {
          var t = a.plugins,
            i = n.adgroupIDs,
            l = n.adgroupsToCache,
            s = n.formatOption;
          if (!l) return o;
          var u = o;
          return (
            i.forEach(function (n) {
              if (s === "carousel_slideshows") {
                var o = r("nullthrows")(t.get(n)),
                  a = e(
                    l.get(n),
                    o,
                    u.get(n) || new (r("AdsUEditorAdgroupCachedRecord"))(),
                  );
                u = u.set(n, a);
              }
            }),
            u
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
