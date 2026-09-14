__d(
  "adsUEditorAdgroupHasInstagramPlacementsSelector",
  [
    "AdsInstagramApplicabilityUtils",
    "adsCreateSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.some(function (e) {
            var t = e.campaign;
            return r("AdsInstagramApplicabilityUtils").hasInstagramPlacement(t);
          });
        },
        { name: i.id + ".adsUEditorAdgroupHasInstagramPlacementsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
