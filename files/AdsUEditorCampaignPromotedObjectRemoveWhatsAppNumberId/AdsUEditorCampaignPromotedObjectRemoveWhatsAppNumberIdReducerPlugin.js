__d(
  "AdsUEditorCampaignPromotedObjectRemoveWhatsAppNumberIdReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectRemoveWhatsAppNumberIdActionFlux",
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
              ).promoted_object.whats_app_business_phone_number_id.delete(e);
            });
          },
          [
            r(
              "AdsUEditorCampaignPromotedObjectRemoveWhatsAppNumberIdActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
