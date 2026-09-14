__d(
  "adsUEditorCampaignUniformPromotedObjectPageIDSelector",
  [
    "AdsCampaignRecordAccessors",
    "AdsUEditorSelectors",
    "adsGetUniformValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaign.bulkByAccessor(
          r("AdsCampaignRecordAccessors").promoted_object.page_id.get,
        ),
        null,
      ),
      s = e;
    l.default = s;
  },
  98,
);
