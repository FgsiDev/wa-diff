__d(
  "AdsUEditorCampaignGroupSetMarketingKPIsReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetMarketingKPIsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).advertiser_intent.marketing_kpis.set(
                  r("immutable").List(
                    t.marketingKPIs.map(function (e) {
                      return r("immutable").Map(e);
                    }),
                  ),
                  e,
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupSetMarketingKPIsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
