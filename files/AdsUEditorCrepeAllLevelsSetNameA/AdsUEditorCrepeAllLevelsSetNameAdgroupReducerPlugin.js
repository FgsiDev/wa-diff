__d(
  "AdsUEditorCrepeAllLevelsSetNameAdgroupReducerPlugin",
  [
    "AdsAutoNamingConfig",
    "AdsUEditorAdgroupMutationUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorCrepeAllLevelsSetNameActionFlux",
    "AdsUEditorCrepeNamingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsUEditorAdgroupMutationUtils").setNameForEach(
              e,
              t.adgroupIDs,
              o("AdsUEditorCrepeNamingUtils").getCrepeAdsObjectName(
                o("AdsAutoNamingConfig").CATEGORIES.ADGROUP,
                t.name,
              ),
            );
          },
          o("AdsUEditorCrepeAllLevelsSetNameActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
