__d(
  "AdsUEditorAdgroupPlacementsCreativeQualityUpdatePlacementReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupPlacementsCreativeQualityUpdatePlacementActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e,
                o = t.adgroupPlacements;
              return (
                (n = r("AdsAdgroupRecordAccessors").placement.set(
                  r("immutable").fromJS(o),
                  n,
                )),
                n
              );
            });
            return n;
          },
          r(
            "AdsUEditorAdgroupPlacementsCreativeQualityUpdatePlacementActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
