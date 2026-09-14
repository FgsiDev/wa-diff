__d(
  "AdsUEditorAdgroupSetPlaceReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPageStore",
    "AdsPlaceDataUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPlaceDataDataActionFlux",
    "AdsUEditorCampaignAdObjectsUtils",
    "nullthrows",
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
            getPage: r("AdsPageStore").getSelector,
          },
          function (e, t, n) {
            var a = n.getPage,
              i = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("nullthrows")(i.get(e.id)),
                l = n.campaign,
                s = n.campaignGroup,
                u = n.specPlugin,
                c = t.index,
                d = t.placeDataType,
                m = r("AdsAdgroupSemanticFields").pageID.get(u, e);
              if (m == null) return e;
              var p = m ? a(m) : null,
                _ = o("AdsODAXUtils").maybeTranslateObjective(
                  s.objective,
                  o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
                    campaignGroup: s,
                    campaign: l,
                  }),
                  l.optimization_goal,
                );
              _ === r("AdsAPIObjectives").NONE && (_ = s.objective);
              var f = o("AdsPlaceDataUtils").processInteractiveComponents(e, c);
              return o("AdsPlaceDataUtils").addPlaceData({
                adgroup: f,
                specPlugin: u,
                objective: _,
                page: p,
                placeDataType: d,
                index: c,
              });
            });
          },
          o("AdsUEditorAdgroupSetPlaceDataDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
