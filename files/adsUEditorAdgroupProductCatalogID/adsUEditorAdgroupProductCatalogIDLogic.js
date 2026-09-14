__d(
  "adsUEditorAdgroupProductCatalogIDLogic",
  ["AdsBulkValueUtils", "AdsLoadObjectUtils", "LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a, l) {
        var e = l,
          s = e.map(function (e, o) {
            var l = t.getValueForIndex(o);
            if (l != null)
              return r("LoadObject").withValue(l, { creatorModuleID: i.id });
            if (e != null)
              return r("LoadObject").withValue(e, { creatorModuleID: i.id });
            var s = n.getValueForIndex(o);
            return s == null
              ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
              : a.get(s).map(function (e) {
                  return e.catalogID;
                });
          });
        return o("AdsLoadObjectUtils")
          .all(s)
          .map(function (e) {
            return o("AdsBulkValueUtils").aggregate(e);
          });
      },
      s = e;
    l.default = s;
  },
  98,
);
