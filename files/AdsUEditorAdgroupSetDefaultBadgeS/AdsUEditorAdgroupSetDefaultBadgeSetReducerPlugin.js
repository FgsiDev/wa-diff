__d(
  "AdsUEditorAdgroupSetDefaultBadgeSetReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetDefaultBadgeSpecDataActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("immutable").fromJS([t.badgeSet]);
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.badge_sets.set(n, e);
            });
          },
          r("AdsUEditorAdgroupSetDefaultBadgeSpecDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
