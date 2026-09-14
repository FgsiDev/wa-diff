__d(
  "AdsUEditorAdgroupPlacementsCreativeQualityIncludePlacementReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPlacementsCreativeQualityUtils",
    "AdsUEditorAdgroupPlacementsCreativeQualityIncludePlacementActionFlux",
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
              var n,
                a = (n = e.placement) == null ? void 0 : n.toJS();
              if (a == null) return e;
              var i = e;
              return (
                t.platformPositions.forEach(function (e) {
                  a &&
                    (a = o(
                      "AdsPlacementsCreativeQualityUtils",
                    ).includeL1Placement(a, e.platform, e.position));
                }),
                (i = r("AdsAdgroupRecordAccessors").placement.set(
                  r("immutable").fromJS(a),
                  i,
                )),
                i
              );
            });
            return n;
          },
          r(
            "AdsUEditorAdgroupPlacementsCreativeQualityIncludePlacementActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
