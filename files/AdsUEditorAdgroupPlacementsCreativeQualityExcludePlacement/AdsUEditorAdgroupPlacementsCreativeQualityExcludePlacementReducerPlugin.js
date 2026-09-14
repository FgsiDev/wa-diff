__d(
  "AdsUEditorAdgroupPlacementsCreativeQualityExcludePlacementReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsPlacementsCreativeQualityUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupPlacementsCreativeQualityExcludePlacementActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData,
              i = o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                var n,
                  i = (n = e.placement) == null ? void 0 : n.toJS();
                if (i == null || Object.keys(i).length === 0) {
                  var l,
                    s = (l = a.get(e.id)) == null ? void 0 : l.campaign;
                  if (s == null) return e;
                  i = o(
                    "AdsPlacementsCreativeQualityUtils",
                  ).getAdgroupPlacementSpecFromCampaignTargetingSpec(s);
                }
                if (i == null) return e;
                var u = e,
                  c = t.platform,
                  d = t.position;
                return (
                  (i = o(
                    "AdsPlacementsCreativeQualityUtils",
                  ).excludeL1Placement(i, c, d)),
                  (u = r("AdsAdgroupRecordAccessors").placement.set(
                    r("immutable").fromJS(i),
                    u,
                  )),
                  u
                );
              });
            return i;
          },
          r(
            "AdsUEditorAdgroupPlacementsCreativeQualityExcludePlacementActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
