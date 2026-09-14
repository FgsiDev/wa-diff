__d(
  "adsUEditorAdgroupIsVideoSelectedSelector",
  ["AdsAdgroupSemanticFields", "AdsUEditorSelectors", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorSelectors").adgroup.bulkBySemanticField(
        r("AdsAdgroupSemanticFields").videoID.get,
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.getValues().filter(Boolean);
          return e.length !== 0;
        },
        { name: i.id + ".adsUEditorAdgroupIsVideoSelectedSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
