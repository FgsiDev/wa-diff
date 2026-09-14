__d(
  "AdsUEditorCampaignSetBudgetSplitMetadataIDReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetBudgetSplitMetadataIDActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n;
            return o("AdsMutators").mutateEach(
              e,
              (n = t.campaignIDs) != null ? n : [],
              function (e) {
                var n = e;
                return (
                  (n = r(
                    "AdsCampaignRecordAccessors",
                  ).budget_split_metadata_id.set(t.budgetSplitMetadataID, n)),
                  n
                );
              },
            );
          },
          r("AdsUEditorCampaignSetBudgetSplitMetadataIDActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
