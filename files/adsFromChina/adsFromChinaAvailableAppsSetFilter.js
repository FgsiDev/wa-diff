__d(
  "adsFromChinaAvailableAppsSetFilter",
  ["adsFromChinaGetPromotableAppsSet"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("adsFromChinaGetPromotableAppsSet")(t);
      return e.filter(function (e) {
        var t = n.includes(e.id),
          r =
            e.object_store_urls || e.objectStoreURL
              ? n.some(function (t) {
                  return Object.values(
                    e.object_store_urls || e.objectStoreURL,
                  ).includes(t);
                })
              : !1;
        return t || r;
      });
    }
    l.default = e;
  },
  98,
);
