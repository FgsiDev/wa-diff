__d(
  "AdsUEditorAdgroupCachedSetMediaFormatActionHandler",
  [
    "AdsUEditorAdgroupCachedSetMediaFormatMutators",
    "AdsUEditorAdgroupSetMediaFormatDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorAdgroupSetMediaFormatDataActionFlux").actionType,
        mutate: function (t, n) {
          var e = t.adgroupIDs,
            r = t.adgroupsToCache,
            a = t.mediaFormat;
          return r
            ? o(
                "AdsUEditorAdgroupCachedSetMediaFormatMutators",
              ).updateCacheForAdgroupIDs(r, e, a, n)
            : n;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
