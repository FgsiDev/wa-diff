__d(
  "adsUEditorIsAdgroupEligibleForCtwaPeSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "useAdsUEditorIsAdgroupEligibleForCtwaPe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return o(
            "useAdsUEditorIsAdgroupEligibleForCtwaPe",
          ).isAdgroupEligibleForCtwaPeBusinessLogic(t);
        },
        { name: i.id + ".adsUEditorIsAdgroupEligibleForCtwaPeSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
