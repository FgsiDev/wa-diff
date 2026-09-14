__d(
  "AdsUEditorCampaignODAXDfoChangeObjectiveReducerPlugin",
  [
    "AdCampaignDestination",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPromotedObjectTypes",
    "AdsUEditorCampaignGroupODAXDfoChangeObjectiveActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a =
                t.destinationType == null ||
                t.destinationType === r("AdCampaignDestination").UNDEFINED
                  ? r("AdCampaignDestination").MESSENGER
                  : t.destinationType;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              var n = e;
              return (
                (n = r("AdsCampaignRecordAccessors").conversion_locations.set(
                  r("AdsPromotedObjectTypes").MESSENGER,
                  n,
                )),
                (n = r("AdsCampaignRecordAccessors").optimization_goal.set(
                  t.optimizationGoal,
                  n,
                )),
                (n = r("AdsCampaignRecordAccessors").destination_type.set(
                  a,
                  n,
                )),
                n
              );
            });
          },
          r("AdsUEditorCampaignGroupODAXDfoChangeObjectiveActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
