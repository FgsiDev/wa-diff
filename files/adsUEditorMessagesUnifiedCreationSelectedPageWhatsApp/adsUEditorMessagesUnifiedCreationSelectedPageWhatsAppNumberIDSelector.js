__d(
  "adsUEditorMessagesUnifiedCreationSelectedPageWhatsAppNumberIDSelector",
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
            .page_whatsapp_number_id.get,
        ),
        null,
      ),
      s = e;
    l.default = s;
  },
  98,
);
