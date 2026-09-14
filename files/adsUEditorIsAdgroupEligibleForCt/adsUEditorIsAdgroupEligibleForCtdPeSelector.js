__d(
  "adsUEditorIsAdgroupEligibleForCtdPeSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "useAdsUEditorIsAdgroupEligibleForCtdPe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return o(
            "useAdsUEditorIsAdgroupEligibleForCtdPe",
          ).isAdgroupEligibleForCtdPe(t);
        },
        { name: i.id + ".adsUEditorIsAdgroupEligibleForCtdPeSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
