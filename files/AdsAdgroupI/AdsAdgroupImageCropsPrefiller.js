__d(
  "AdsAdgroupImageCropsPrefiller",
  [
    "AdsAdgroupPrefillerUtils",
    "AdsImageSpecsForAdgroupUtils",
    "AdsUnifiedCreativeAPIFields",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        key: "imageCrops",
        genPaths: function (t) {
          var e = o("AdsAdgroupPrefillerUtils").genPathsForUnifiedField(
              t,
              r("AdsUnifiedCreativeAPIFields").imageCrops,
            ),
            n = e.current,
            a = e.original;
          if (!n || !a) return [];
          var i = t.original.adgroup.getIn(a),
            l = o("AdsImageSpecsForAdgroupUtils").getImageSpecsForAdgroup(
              t.current.adgroup,
              t.current.campaign,
            ),
            s = l.disabledSpecs,
            u = l.imageSpecs,
            c = r("immutable").Set(
              u.map(function (e) {
                return e.cropKey;
              }),
            ),
            d = r("immutable").Set(
              s.map(function (e) {
                return e.cropKey;
              }),
            );
          return i &&
            Array.from(i.keys()).every(function (e) {
              return c.has(e) && !d.has(e);
            })
            ? [{ current: n, original: a }]
            : [];
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
