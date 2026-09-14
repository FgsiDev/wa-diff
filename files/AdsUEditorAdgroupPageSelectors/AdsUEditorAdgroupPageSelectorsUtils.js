__d(
  "AdsUEditorAdgroupPageSelectorsUtils",
  ["AdsBulkValueUtils", "AdsEmptyValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e instanceof r("AdsEmptyValue")
        ? r("AdsEmptyValue").instance()
        : o("AdsBulkValueUtils").aggregate(t);
    }
    l.bulkPageLogic = e;
  },
  98,
);
