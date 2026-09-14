__d(
  "adsUEditorAnyAdgroupHasMediaSelector",
  ["AdsAdgroupSemanticFields", "AdsUEditorSelectors", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorSelectors").adgroup.bulkBySemanticField(
        r("AdsAdgroupSemanticFields").imageHash.get,
      ),
      s = o("AdsUEditorSelectors").adgroup.bulkBySemanticField(
        r("AdsAdgroupSemanticFields").imageURL.get,
      ),
      u = o("AdsUEditorSelectors").adgroup.bulkBySemanticField(
        r("AdsAdgroupSemanticFields").videoID.get,
      ),
      c = r("adsCreateSelector")(
        [e, s, u],
        function (t, n, r) {
          var e = t.getValues().filter(Boolean),
            o = n.getValues().filter(Boolean),
            a = r.getValues().filter(Boolean),
            i = e.length !== 0 || o.length !== 0,
            l = a.length !== 0;
          return i || l;
        },
        { name: i.id + ".adsUEditorAnyAdgroupHasMediaSelector" },
      ),
      d = c;
    l.default = d;
  },
  98,
);
