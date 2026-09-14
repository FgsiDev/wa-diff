__d(
  "AdsUEditorCampaignPromotedObjectSetWhatsAppNumberIdReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectSetWhatsAppNumberIdActionFlux",
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
              ).promoted_object.whats_app_business_phone_number_id.set(
                t.whatsAppNumberID,
                e,
              );
              return (
                r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.whatsapp_phone_number.get(e) != null &&
                  o("AdsWhatsAppFeatureGating").shouldClearPWANOnPageSwitch() &&
                  (n = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.whatsapp_phone_number.delete(n)),
                n
              );
            });
          },
          [
            r("AdsUEditorCampaignPromotedObjectSetWhatsAppNumberIdActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
