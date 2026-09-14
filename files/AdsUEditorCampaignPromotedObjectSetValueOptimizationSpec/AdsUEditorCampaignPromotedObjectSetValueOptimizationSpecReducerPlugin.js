__d(
  "AdsUEditorCampaignPromotedObjectSetValueOptimizationSpecReducerPlugin",
  [
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectSetValueOptimizationSpecDataActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.value_semantic_type.set(t.valueSemanticType, e);
              if (
                t.valueSemanticType != null &&
                t.valueSemanticType !== "VALUE"
              ) {
                var o = r("AdsCampaignDraftFragmentStore").isNew(n.id);
                o &&
                  (n = r(
                    "AdsCampaignRecordAccessors",
                  ).is_incremental_attribution_enabled.set(!1, n));
              }
              return n;
            });
          },
          r(
            "AdsUEditorCampaignPromotedObjectSetValueOptimizationSpecDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
