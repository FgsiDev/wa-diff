__d(
  "AdsUEditorAdgroupSetBadgeSetReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupBadgesMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetBadgeSpecDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupBadgesMutators",
              ).sanitizeBadgeItemSpecMap(t.badgeSet, e);
            });
          },
          r("AdsUEditorAdgroupSetBadgeSpecDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
