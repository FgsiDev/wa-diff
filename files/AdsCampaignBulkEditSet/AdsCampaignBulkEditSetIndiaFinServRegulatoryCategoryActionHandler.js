__d(
  "AdsCampaignBulkEditSetIndiaFinServRegulatoryCategoryActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsUEditorInitIndiaFinServRegulatoryCategoryActionFlux",
    "AdsUEditorInitIndiaFinServRegulatoryCategoryReducerPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: r("AdsUEditorInitIndiaFinServRegulatoryCategoryActionFlux")
          .actionType,
        mutate: function (t, n) {
          var e = r(
            "AdsUEditorInitIndiaFinServRegulatoryCategoryReducerPlugin",
          ).reduce.reduceFn(
            o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
              n,
              t.campaignIDs,
            ),
            t,
          );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys")
              .CAMPAIGN_INDIA_FINSERV_ADS_BENEFICIARY_AND_PAYER,
            t.campaignIDs,
            n,
            e,
            function (e) {
              var t = e.regional_regulated_categories,
                n = e.regional_regulation_identities;
              return [t, n].join(":");
            },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
