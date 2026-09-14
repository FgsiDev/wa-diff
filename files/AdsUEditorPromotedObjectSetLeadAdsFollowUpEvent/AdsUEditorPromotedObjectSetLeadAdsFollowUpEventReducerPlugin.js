__d(
  "AdsUEditorPromotedObjectSetLeadAdsFollowUpEventReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorPromotedObjectSetLeadAdsFollowUpEventActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.lead_ads_follow_up_event.set(
                t.leadAdsFollowUpEvent,
                e,
              );
            });
          },
          o("AdsUEditorPromotedObjectSetLeadAdsFollowUpEventActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
