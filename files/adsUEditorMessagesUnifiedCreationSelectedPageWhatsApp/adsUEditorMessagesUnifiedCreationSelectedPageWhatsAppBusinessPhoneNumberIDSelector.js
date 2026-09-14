__d(
  "adsUEditorMessagesUnifiedCreationSelectedPageWhatsAppBusinessPhoneNumberIDSelector",
  [
    "AdsCampaignRecordAccessors",
    "AdsUEditorSelectors",
    "adsGetUniformValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaign.bulkByAccessor(
          r("AdsCampaignRecordAccessors").promoted_object
            .whats_app_business_phone_number_id.get,
        ),
        null,
      ),
      s = e;
    l.default = s;
  },
  98,
);
