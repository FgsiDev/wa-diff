__d(
  "AdsUEditorCampaignDeliveryChangeAttributionTypeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeAttributionTypeActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = t.attributionType === 1;
              return o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).is_incremental_attribution_enabled.set(n),
              )(e);
            });
          },
          o("AdsUEditorCampaignDeliveryChangeAttributionTypeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
