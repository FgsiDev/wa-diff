__d(
  "AdsCampaignBulkEditRemoveRegionalRegulatoryCategoriesActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignRecordAccessors",
    "AdsFinservRemoveRegionalRegulatoryCategoriesActionFlux",
    "AdsUEditorFinservRemoveRegionalRegulatoryCategoriesReducerPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: r("AdsFinservRemoveRegionalRegulatoryCategoriesActionFlux")
          .actionType,
        mutate: function (t, n) {
          var e = r(
            "AdsUEditorFinservRemoveRegionalRegulatoryCategoriesReducerPlugin",
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
