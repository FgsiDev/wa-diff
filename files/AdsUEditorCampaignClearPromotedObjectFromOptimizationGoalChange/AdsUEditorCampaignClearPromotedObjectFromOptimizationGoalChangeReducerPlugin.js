__d(
  "AdsUEditorCampaignClearPromotedObjectFromOptimizationGoalChangeReducerPlugin",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignClearPromotedObjectFromOptimizationGoalChangeActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsWebsiteOptimizationUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorCampaignSelectors").adObjectsList.mapTransform(
        function (e) {
          var t = e.campaignGroup;
          return t;
        },
      ),
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          { campaignGroupsByCampaignID: e },
          function (e, t, n) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, t) {
                var a = n.campaignGroupsByCampaignID,
                  i = a.get(t),
                  l = i.objective,
                  s = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                    l,
                    e,
                  ),
                  u = o("AdsAPICampaignRecordUtils").getOptimizationGoal(e);
                return s === r("AdsPromotedObjectTypes").LIVE_VIDEO ||
                  u === r("AdsAPIOptimizationGoals").QUALITY_LEAD
                  ? o(
                      "AdsWebsiteOptimizationUtil",
                    ).resetPixelOptimizationFields(e)
                  : r("AdsCampaignRecordAccessors").promoted_object.delete(e);
              },
            );
          },
          o(
            "AdsUEditorCampaignClearPromotedObjectFromOptimizationGoalChangeActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
