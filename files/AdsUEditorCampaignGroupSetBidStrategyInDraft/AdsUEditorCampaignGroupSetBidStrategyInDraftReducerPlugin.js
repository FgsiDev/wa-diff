__d(
  "AdsUEditorCampaignGroupSetBidStrategyInDraftReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetBidStrategyInDraftActionFlux",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return (
              r("vulture")("u721RM0kSGVtF2h3Z8PUM2_rMcY="),
              o("AdsMutators").mutateEach(e, t.campaignGroupIDs, function (e) {
                return r("AdsCampaignGroupRecordAccessors").bid_strategy.set(
                  t.newBidStrategy,
                  e,
                );
              })
            );
          },
          [
            o("AdsUEditorCampaignGroupSetBidStrategyInDraftActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
