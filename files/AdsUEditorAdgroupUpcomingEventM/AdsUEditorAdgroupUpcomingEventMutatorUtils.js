__d(
  "AdsUEditorAdgroupUpcomingEventMutatorUtils",
  [
    "AdsClientAdAssetFeedSpecFields",
    "adsConvertAdObjectRecordToPlainJS",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = r("adsConvertAdObjectRecordToPlainJS")(e),
        a = o == null || (n = o.creative) == null ? void 0 : n.asset_feed_spec;
      return a == null || r("isEmptyObject")(a)
        ? !1
        : a != null && a[t] != null
          ? r("AdsClientAdAssetFeedSpecFields").every(function (e) {
              var n,
                a =
                  (n = o.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n[e];
              return e === t
                ? !0
                : a instanceof Array
                  ? a.length === 0
                  : a instanceof Object && r("isEmptyObject")(a)
                    ? !0
                    : a == null;
            })
          : !1;
    }
    l.isAdgroupUsingOnlySingleFieldInAssetFeedFromRecord = e;
  },
  98,
);
