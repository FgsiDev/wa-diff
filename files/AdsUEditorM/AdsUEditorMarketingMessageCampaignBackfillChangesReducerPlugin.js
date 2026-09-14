__d(
  "AdsUEditorMarketingMessageCampaignBackfillChangesReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorSetMarketingMessageCampaignBackfillChangesActionFlux",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return r("gkx")("11469")
              ? o("AdsMutators").mutateEach(
                  e,
                  t.campaignIDs,
                  o("AdsMutators").chain(
                    r("AdsCampaignRecordAccessors").promoted_object
                      .whats_app_business_phone_number_id.delete,
                    r("AdsCampaignRecordAccessors").targeting
                      .subscriber_universe.whatsapp_subscriber_source.delete,
                  ),
                )
              : o("AdsMutators").mutateEach(
                  e,
                  t.campaignIDs,
                  o("AdsMutators").chain(
                    r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.whats_app_business_phone_number_id.set(
                      t.whatsAppNumberID,
                    ),
                  ),
                );
          },
          [
            r("AdsUEditorSetMarketingMessageCampaignBackfillChangesActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
