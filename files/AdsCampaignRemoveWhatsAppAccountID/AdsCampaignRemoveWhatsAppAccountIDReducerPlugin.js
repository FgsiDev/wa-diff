__d(
  "AdsCampaignRemoveWhatsAppAccountIDReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsCampaignRemoveWhatsAppAccountIDActionFlux",
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
              var t = r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.page_whatsapp_number_id.delete(e);
              return (
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.whatsapp_phone_number.get(e) != null &&
                  o("AdsWhatsAppFeatureGating").shouldClearPWANOnPageSwitch() &&
                  (t = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.whatsapp_phone_number.delete(t)),
                t
              );
            });
          },
          o("AdsCampaignRemoveWhatsAppAccountIDActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
