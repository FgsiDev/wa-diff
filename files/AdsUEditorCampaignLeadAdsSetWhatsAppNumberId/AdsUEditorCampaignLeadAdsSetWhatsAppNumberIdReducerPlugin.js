__d(
  "AdsUEditorCampaignLeadAdsSetWhatsAppNumberIdReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignLeadAdsSetWhatsAppNumberIdActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.page_whatsapp_number_id.set(null, e);
              return (
                (n = r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.whats_app_business_phone_number_id.set(
                  null,
                  n,
                )),
                t.pageWhatsAppNumberId != null
                  ? r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.page_whatsapp_number_id.set(
                      t.pageWhatsAppNumberId,
                      n,
                    )
                  : t.whatsAppBusinessPhoneNumberId != null
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.whats_app_business_phone_number_id.set(
                        t.whatsAppBusinessPhoneNumberId,
                        n,
                      )
                    : n
              );
            });
          },
          [
            r("AdsUEditorCampaignLeadAdsSetWhatsAppNumberIdActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
