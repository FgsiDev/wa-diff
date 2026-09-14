__d(
  "AdsPEAdgroupLiveSelectors",
  [
    "AdsAPIAdgroupRecord",
    "AdsAdObjectLiveStoreUtils",
    "AdsAdgroupLiveStoreDataFields.experimental",
    "AdsInsightsQueryFieldUtil",
    "L1LiveReverseInteropStore",
    "adsCreateStoreThunkSelector",
    "memoizeMapImmutableMap",
    "memoizeWithArgsByKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("AdsInsightsQueryFieldUtil").toAPIFieldsMap(
        r("AdsAdgroupLiveStoreDataFields.experimental").cheapFields,
        !0,
      ),
      c = o("AdsInsightsQueryFieldUtil").normalizeFields(u),
      d = r("memoizeWithArgsByKey")(function (e) {
        return e.map(function (e) {
          if (e != null) return new (r("AdsAPIAdgroupRecord"))(e);
        });
      }),
      m = r("memoizeMapImmutableMap")(d),
      p = (e = r("adsCreateStoreThunkSelector"))(
        (s = r("L1LiveReverseInteropStore")),
        function (e) {
          var t;
          return (t = o("AdsAdObjectLiveStoreUtils").getDraft(e, "ad")) != null
            ? t
            : r("L1LiveReverseInteropStore").getByFields(e, c);
        },
      ),
      _ = e(s, function (e) {
        var t,
          n = r("L1LiveReverseInteropStore").getByFields(e, c);
        return (t = o("AdsAdObjectLiveStoreUtils").getDraft(e, "ad")) != null
          ? t
          : d(e, n);
      }),
      f = e(s, function (e) {
        var t = r("L1LiveReverseInteropStore").getAllByFields(e, c);
        return t.map(function (e, t) {
          var n;
          return (n = o("AdsAdObjectLiveStoreUtils").getDraft(t, "ad")) != null
            ? n
            : e;
        });
      }),
      g = e(s, function (e) {
        var t = r("L1LiveReverseInteropStore").getAllByFields(e, c),
          n = t.map(function (e, t) {
            var n;
            return (n = o("AdsAdObjectLiveStoreUtils").getDraft(t, "ad")) !=
              null
              ? n
              : e;
          });
        return m(n);
      }),
      h = e(s, function (e, t) {
        var n;
        return (n = o("AdsAdObjectLiveStoreUtils").getDraft(e, "ad")) != null
          ? n
          : r("L1LiveReverseInteropStore").getByFields(e, t);
      }),
      y = e(s, function (e, t) {
        var n;
        return (n = o("AdsAdObjectLiveStoreUtils").getDraft(e, "ad")) != null
          ? n
          : r("L1LiveReverseInteropStore").getCachedByFields(e, t);
      });
    ((l.getSelector = p),
      (l.getRecordSelector = _),
      (l.getAllSelector = f),
      (l.getAllRecordsSelector = g),
      (l.getByFieldsSelector = h),
      (l.getCachedByFieldsSelector = y));
  },
  98,
);
