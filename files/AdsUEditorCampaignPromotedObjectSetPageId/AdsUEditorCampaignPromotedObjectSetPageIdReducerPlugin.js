__d(
  "AdsUEditorCampaignPromotedObjectSetPageIdReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectSetPageIdDataActionFlux",
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
              ).promoted_object.page_id.set(t.pageID, e);
              return (
                (r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.page_whatsapp_number_id.get(n) != null ||
                  r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.whats_app_business_phone_number_id.get(n) !=
                    null) &&
                  o("AdsWhatsAppFeatureGating").shouldClearPWANOnPageSwitch() &&
                  ((n = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.page_whatsapp_number_id.delete(n)),
                  (n = r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.whats_app_business_phone_number_id.delete(
                    n,
                  ))),
                n
              );
            });
          },
          o("AdsUEditorCampaignPromotedObjectSetPageIdDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
