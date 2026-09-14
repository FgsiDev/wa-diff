__d(
  "AdsAdgroupPageIDAndInstagramActorIDPrefiller",
  [
    "AdsAdgroupInstagramActorIDPrefillUtils",
    "AdsAdgroupPrefillerUtils",
    "AdsUnifiedCreativeAPIFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        key: "pageID_instagramActorID",
        genPaths: function (t) {
          var e = o("AdsAdgroupPrefillerUtils").genPathsForUnifiedField(
              t,
              r("AdsUnifiedCreativeAPIFields").pageID,
            ),
            n = e.current,
            a = e.original,
            i = n && a ? [{ current: n, original: a }] : [],
            l = n && a ? t.original.adgroup.getIn(a) : null;
          return l
            ? [].concat(
                i,
                o("AdsAdgroupInstagramActorIDPrefillUtils").genPaths(t),
              )
            : [].concat(i);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
