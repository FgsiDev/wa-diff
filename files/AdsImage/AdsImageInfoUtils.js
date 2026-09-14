__d(
  "AdsImageInfoUtils",
  ["$InternalEnum", "AdsImageIDClasses", "Cache", "immutable", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "-query-type-",
      s = r("immutable").Record({
        displayHeight: null,
        displayWidth: null,
        height: null,
        name: null,
        realHeight: null,
        realWidth: null,
        url: null,
        width: null,
        isSphericalPhoto: null,
        variants: null,
        ads_integrity_review_info: null,
      }),
      u = n("$InternalEnum").Mirrored([
        "FULL_SIZE",
        "FULL_SIZE_URL",
        "NAME",
        "PREVIEW",
        "THUMBNAIL",
        "THUMBNAIL_URL",
        "HIGH_RES_THUMBNAIL",
        "HIGH_RES_THUMBNAIL_URL",
        "IS_SPHERICAL_PHOTO",
        "VARIANTS",
        "ADS_INTEGRITY_REVIEW_INFO",
      ]),
      c = new (r("Cache"))();
    function d(t, n) {
      var r = "" + t.getSignature() + e + n.valueOf();
      return (c.set(r, { imageID: t, queryType: n }), r);
    }
    function m(t) {
      var n = c.get(t);
      if (n != null) return n;
      var a = t.split(e),
        i = a[0],
        l = a[1];
      return {
        queryType: r("nullthrows")(u.cast(l)),
        imageID: o("AdsImageIDClasses").AdsImageID.fromSignature(i),
      };
    }
    ((l.InternalImage = s),
      (l.QueryTypes = u),
      (l.convertQueryToCacheKey = d),
      (l.convertCacheKeyToQuery = m));
  },
  98,
);
