__d(
  "AdsUEditorAdgroupRemovePlaceReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsChildAttachmentsUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemovePlaceDataDataActionFlux",
    "AdsUEditorAdgroupSelectors",
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
        },
        function (e, t, n) {
          var a = n.parentData;
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
            var t = r("nullthrows")(a.get(e.id)),
              n = t.campaign,
              i = t.campaignGroup,
              l = t.specPlugin,
              u = o("AdsODAXUtils").maybeTranslateObjective(
                i.objective,
                o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType({
                  campaignGroup: i,
                  campaign: n,
                }),
                n.optimization_goal,
              );
            u === r("AdsAPIObjectives").NONE && (u = i.objective);
            var c = s(e, l);
            return o(
              "AdsUEditorAdgroupChildAttachmentsMutators",
            ).removePlaceData(c, l, u);
          });
        },
        o("AdsUEditorAdgroupRemovePlaceDataDataActionFlux").actionType,
      ),
    };
    function s(e, t) {
      var n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.interactive_components_spec.child_attachments.get(e),
        a = o("AdsChildAttachmentsUtils").getPlaceDataIndex(e, t);
      return n == null || a === -1
        ? e
        : o(
            "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
          ).syncChildAttachments(n.delete(a), e);
    }
    var u = e;
    l.default = u;
  },
  98,
);
