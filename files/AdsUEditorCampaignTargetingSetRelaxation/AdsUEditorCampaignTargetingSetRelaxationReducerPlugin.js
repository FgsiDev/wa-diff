__d(
  "AdsUEditorCampaignTargetingSetRelaxationReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetRelaxationActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs;
            if (n == null || t.hostID == null) return e;
            var a = o("AdsMutators").mutateEach(e, n, function (e) {
              var n;
              t &&
              t.targetingRelaxationTypes &&
              t.targetingRelaxationTypes.custom_audience != null
                ? (n = r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.targeting_relaxation_types.custom_audience.set(
                    t.targetingRelaxationTypes.custom_audience,
                  ))
                : (n = r("AdsCampaignRecordAccessors").targeting
                    .targeting_relaxation_types.custom_audience.delete);
              var a;
              t &&
              t.targetingRelaxationTypes &&
              t.targetingRelaxationTypes.lookalike != null
                ? (a = r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.targeting_relaxation_types.lookalike.set(
                    t.targetingRelaxationTypes.lookalike,
                  ))
                : (a = r("AdsCampaignRecordAccessors").targeting
                    .targeting_relaxation_types.lookalike.delete);
              var i;
              t &&
              t.targetingRelaxationTypes &&
              t.targetingRelaxationTypes.detailed_targeting != null
                ? (i = r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.targeting_relaxation_types.detailed_targeting.set(
                    t.targetingRelaxationTypes.detailed_targeting,
                  ))
                : (i = r("AdsCampaignRecordAccessors").targeting
                    .targeting_relaxation_types.detailed_targeting.delete);
              var l;
              return (
                t &&
                t.targetingRelaxationTypes &&
                t.targetingRelaxationTypes.user_selection_is_cae_overriden !=
                  null
                  ? (l = r(
                      "AdsCampaignRecordAccessors",
                    ).targeting.targeting_relaxation_types.user_selection_is_cae_overriden.set(
                      t.targetingRelaxationTypes
                        .user_selection_is_cae_overriden,
                    ))
                  : (l = r("AdsCampaignRecordAccessors").targeting
                      .targeting_relaxation_types
                      .user_selection_is_cae_overriden.delete),
                o("AdsMutators").chain(n, a, i, l)(e)
              );
            });
            return a;
          },
          r("AdsUEditorCampaignTargetingSetRelaxationActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
