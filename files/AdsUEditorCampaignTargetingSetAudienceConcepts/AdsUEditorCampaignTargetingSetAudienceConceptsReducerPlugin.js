__d(
  "AdsUEditorCampaignTargetingSetAudienceConceptsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetAudienceConceptsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (e, t) {
            if (t.campaignIDs == null || t.hostID == null) return e;
            var n = t.campaignIDs;
            return o("AdsMutators").mutateEach(e, n, function (e, n) {
              return r(
                "AdsCampaignRecordAccessors",
              ).targeting.audience_concepts.set(
                r("immutable").fromJS(t.audienceConcepts),
              )(e);
            });
          },
          r("AdsUEditorCampaignTargetingSetAudienceConceptsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
