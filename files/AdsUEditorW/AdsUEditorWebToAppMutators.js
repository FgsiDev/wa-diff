__d(
  "AdsUEditorWebToAppMutators",
  ["AdsAdgroupRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (t = r("AdsAdgroupRecordAccessors").creative) == null ||
        (t = t.asset_feed_spec) == null
        ? void 0
        : t.web_destination_spec.delete(e);
    }
    function s(e, t, n) {
      return (
        n === void 0 && (n = ""),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.web_destination_spec.url.set(n, e)
      );
    }
    ((l.clearWebToAppFields = e), (l.setWebToAppFields = s));
  },
  98,
);
