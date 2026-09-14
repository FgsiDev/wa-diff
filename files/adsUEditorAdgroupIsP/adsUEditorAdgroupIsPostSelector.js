__d(
  "adsUEditorAdgroupIsPostSelector",
  [
    "AdsAPIAdgroupRecordUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
      function (t) {
        return t.some(function (e) {
          return o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e.adgroup);
        });
      },
      { name: i.id + ".adsUEditorAdgroupIsExistingPostAdSelector" },
    );
    l.adsUEditorAdgroupIsExistingPostAdSelector = e;
  },
  98,
);
