__d(
  "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupported",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsUEditorCampaignAdObjectsUtils",
    "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupportedWithParamsMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r(
        "adsUEditorDynamicAdsRemoveSingleMediaIfUnsupportedWithParamsMutator",
      )(
        e,
        t.campaign,
        r("AdsCampaignGroupRecordAccessors").buying_type.get(t.campaignGroup),
        r("AdsCampaignGroupRecordAccessors").objective.get(t.campaignGroup),
        o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(t),
        t.campaign.optimization_goal,
        null,
        o("AdsAPICampaignGroupRecordUtils").isAutomatedShoppingAds(
          t.campaignGroup,
        ),
      );
    }
    l.default = e;
  },
  98,
);
