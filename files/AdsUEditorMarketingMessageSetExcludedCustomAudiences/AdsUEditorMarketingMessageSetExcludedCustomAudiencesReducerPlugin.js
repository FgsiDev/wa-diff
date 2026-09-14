__d(
  "AdsUEditorMarketingMessageSetExcludedCustomAudiencesReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorMarketingMessageSetExcludedCustomAudiencesActionFlux",
    "setMessageMarketingExcludedAudiencesCampaignMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                return r("setMessageMarketingExcludedAudiencesCampaignMutator")(
                  e,
                  t.excludedCustomAudiences,
                  t.isSeperateTabWCA,
                );
              },
            );
          },
          r("AdsUEditorMarketingMessageSetExcludedCustomAudiencesActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
