__d(
  "AdsUEditorCampaignPromotedObjectSetCustomAudienceIDsReducerPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectSetCustomAudienceIDsActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.customAudienceIDs,
              i = a != null && a.length > 0;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var n = r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.custom_audience_ids.set(
                a != null ? r("immutable").List(a) : null,
                e,
              );
              if (t.applyGoalSwitch !== !0) return n;
              var o = r("AdsCampaignRecordAccessors").optimization_goal.get(e);
              return i && o === r("AdsAPIOptimizationGoals").QUALITY_LEAD
                ? r("AdsCampaignRecordAccessors").optimization_goal.set(
                    r("AdsAPIOptimizationGoals").LEAD_GENERATION,
                    n,
                  )
                : !i && o === r("AdsAPIOptimizationGoals").LEAD_GENERATION
                  ? r("AdsCampaignRecordAccessors").optimization_goal.set(
                      r("AdsAPIOptimizationGoals").QUALITY_LEAD,
                      n,
                    )
                  : n;
            });
          },
          o("AdsUEditorCampaignPromotedObjectSetCustomAudienceIDsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
