__d(
  "AdsUEditorCampaignSmartAttributionWindowReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSmartAttributionWindowActionFlux",
    "adsUEditorCampaignSapAttributionWindowUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o(
                "adsUEditorCampaignSapAttributionWindowUtil",
              ).sapAttributionWindowMutator(
                e,
                t.attributionWindowDays,
                e.optimization_goal,
                t.isSKAdNetworkAttribution,
                !1,
                o(
                  "adsUEditorCampaignSapAttributionWindowUtil",
                ).isCustomEventOptimization(
                  t.promotedEventType.customEventType,
                ),
              );
            });
          },
          o("AdsUEditorCampaignSmartAttributionWindowActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
