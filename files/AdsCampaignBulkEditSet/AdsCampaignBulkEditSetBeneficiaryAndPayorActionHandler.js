__d(
  "AdsCampaignBulkEditSetBeneficiaryAndPayorActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsDSASetBeneficiaryPayorInfoActionFlux",
    "AdsUEditorDSASetBeneficiaryPayorInfoReducerPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: r("AdsDSASetBeneficiaryPayorInfoActionFlux").actionType,
        mutate: function (t, n) {
          var e = r(
            "AdsUEditorDSASetBeneficiaryPayorInfoReducerPlugin",
          ).reduce.reduceFn(
            o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
              n,
              t.campaignIDs,
            ),
            t,
            {},
          );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys")
              .CAMPAIGN_DSA_BENEFICIARY_AND_PAYOR,
            t.campaignIDs,
            n,
            e,
            function (e) {
              var t = e.dsa_beneficiary,
                n = e.dsa_payor;
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
