__d(
  "AdsUEditorCampaignDeliveryClearCustomEventTypeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryClearCustomEventTypeActionFlux",
    "AdsUEditorCampaignReducerUtils",
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
              r("AdsCampaignRecordAccessors").promoted_object.custom_event_type
                .delete,
            );
          },
          o("AdsUEditorCampaignDeliveryClearCustomEventTypeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
