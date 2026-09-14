__d(
  "AdsCampaignSetWhatsAppAccountIDReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsCampaignSetWhatsAppAccountIDActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsWhatsAppFeatureGating",
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
              ).promoted_object.page_whatsapp_number_id.set(
                t.pageWhatsAppNumberID,
                e,
              );
              return (
                t.whatsappPhoneNumber != null
                  ? (n = r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.whatsapp_phone_number.set(
                      t.whatsappPhoneNumber,
                      n,
                    ))
                  : r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.whatsapp_phone_number.get(n) != null &&
                    o(
                      "AdsWhatsAppFeatureGating",
                    ).shouldClearPWANOnPageSwitch() &&
                    (n = r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.whatsapp_phone_number.delete(n)),
                n
              );
            });
          },
          o("AdsCampaignSetWhatsAppAccountIDActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
