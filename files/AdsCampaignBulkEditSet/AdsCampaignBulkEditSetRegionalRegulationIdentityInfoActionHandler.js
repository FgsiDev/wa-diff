__d(
  "AdsCampaignBulkEditSetRegionalRegulationIdentityInfoActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignRecordAccessors",
    "AdsFinservSetRegionalRegulationIdentityInfoActionFlux",
    "AdsUEditorFinservSetRegionalRegulationIdentityInfoReducerPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: r("AdsFinservSetRegionalRegulationIdentityInfoActionFlux")
          .actionType,
        mutate: function (t, n) {
          var e = r(
            "AdsUEditorFinservSetRegionalRegulationIdentityInfoReducerPlugin",
          ).reduce.reduceFn(
            o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
              n,
              t.campaignIDs,
            ),
            t,
          );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys")
              .CAMPAIGN_FINSERV_ADS_BENEFICIARY_AND_PAYER,
            t.campaignIDs,
            n,
            e,
            r("AdsCampaignRecordAccessors").regional_regulation_identities.get,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
