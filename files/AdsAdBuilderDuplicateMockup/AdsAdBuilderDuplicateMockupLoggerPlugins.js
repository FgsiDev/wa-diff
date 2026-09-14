__d(
  "AdsAdBuilderDuplicateMockupLoggerPlugins",
  ["AdsAdBuilderLogger", "first"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = t.duplicatingAdGroupID,
            n = t.source;
          o("AdsAdBuilderLogger").log("mockup_duplicate_started", {
            mockup_id: e,
            event_source: n,
          });
        },
      },
      s = {
        log: function (t) {
          var e = t.adgroupIDs,
            n = t.duplicationSourceAdgroupID,
            a = r("first")(e != null ? e : []);
          n == null ||
            e == null ||
            a == null ||
            o("AdsAdBuilderLogger").log("mockup_duplicate_completed", {
              duplication_source_mockup_id: n,
              mockup_id: a,
            });
        },
      };
    ((l.AdsAdBuilderDuplicateMockupStartedLoggerPlugin = e),
      (l.AdsAdBuilderDuplicateMockupCompletedLoggerPlugin = s));
  },
  98,
);
