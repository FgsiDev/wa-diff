__d(
  "AdsUEditorCampaignPromotedObjectSetWabaIdReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectSetWabaIdActionFlux",
    "AdsUEditorCampaignReducerUtils",
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
              ).promoted_object.whatsapp_business_account_id.set(t.wabaID, e);
            });
          },
          [r("AdsUEditorCampaignPromotedObjectSetWabaIdActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
