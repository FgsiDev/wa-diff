__d(
  "AdsUEditorAdgroupCachedCallToActionMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsUEditorAdgroupCachedRecord",
    "adsCallToActionShouldCacheCTAType",
    "adsConvertAdObjectRecordToPlainJS",
    "immutable",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a, i) {
        if (!t || !n) return a;
        var e = o("AdsAPIAdgroupRecordUtils").getCallToActionType(t, n),
          l,
          s = r("adsConvertAdObjectRecordToPlainJS")(t);
        o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).isUnifiedCreativePhotoData(s) &&
        r("AdsAdgroupSemanticFields").linkURL.isSupported(n, t)
          ? (l = r("AdsAdgroupSemanticFields").linkURL.get(n, t))
          : (l = o("AdsAPIAdgroupRecordUtils").getCallToActionLink(t, n));
        var u = r("isTruthy")(i) ? i : l;
        if (
          r("isFalsey")(e) ||
          u == null ||
          u === "" ||
          !r("adsCallToActionShouldCacheCTAType")(e)
        )
          return a;
        var c = a.callToActionValue;
        return (
          c || (c = r("immutable").Map()),
          e != null && (c = c.set(e, u)),
          a.set("callToActionValue", c)
        );
      },
      s = function (n, o, a, i, l) {
        var t = a;
        return (
          o.forEach(function (o) {
            var a = i.get(o),
              s = e(
                n.get(o),
                a,
                t.get(o) || new (r("AdsUEditorAdgroupCachedRecord"))(),
                l,
              );
            t = t.set(o, s);
          }),
          t
        );
      };
    ((l.getUpdatedCache = e), (l.updateCacheForAdgroupIDs = s));
  },
  98,
);
