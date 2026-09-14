__d(
  "AdsCampaignBulkEditAddRegionalRegulatoryCategoriesActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignRecordAccessors",
    "AdsFinservAddRegionalRegulatoryCategoriesActionFlux",
    "AdsUEditorFinservAddRegionalRegulatoryCategoriesReducerPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: r("AdsFinservAddRegionalRegulatoryCategoriesActionFlux")
          .actionType,
        mutate: function (t, n) {
          var e = r(
            "AdsUEditorFinservAddRegionalRegulatoryCategoriesReducerPlugin",
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
            r("AdsCampaignRecordAccessors").regional_regulated_categories.get,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
