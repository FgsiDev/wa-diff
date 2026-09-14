__d(
  "AdsAdgroupPlatformCustomizationsPrefiller",
  [
    "AdsAPIAdgroupPaths",
    "AdsImageSpecsForAdgroupUtils",
    "ApiAdPageTypeToPlatformMap",
    "enumUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        key: "platform",
        genPaths: function (t) {
          var e,
            n = r("AdsAPIAdgroupPaths").CREATIVE.PLATFORM_CUSTOMIZATIONS.path,
            a =
              (e = t.original.adgroup.creative) == null
                ? void 0
                : e.platform_customizations,
            i = o("AdsImageSpecsForAdgroupUtils").getImageSpecsForAdgroup(
              t.current.adgroup,
              t.current.campaign,
            ),
            l = i.imageSpecs,
            s = r("immutable").Set(
              l.map(function (e) {
                return e.placement;
              }),
            ),
            u = s.filter(Boolean).map(function (e) {
              return o("enumUtils").coerceFromKey(
                e,
                r("ApiAdPageTypeToPlatformMap"),
              );
            });
          return a &&
            Object.keys(a.toObject()).every(function (e) {
              return u.has(e);
            })
            ? [{ current: n, original: n }]
            : [];
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
