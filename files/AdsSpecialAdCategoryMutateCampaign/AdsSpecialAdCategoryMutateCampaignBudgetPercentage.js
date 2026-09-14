__d(
  "AdsSpecialAdCategoryMutateCampaignBudgetPercentage",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsRegulatedCategory",
    "AutomatedShoppingAdsConstants",
    "areEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a) {
      return n == null ||
        (e || (e = r("areEqual")))(a, [r("AdsRegulatedCategory").NONE])
        ? t
        : o("AdsMutators").mutateEach(t, n != null ? n : [], function (e) {
            var t = r(
              "AdsCampaignRecordAccessors",
            ).existing_customer_budget_percentage.get(e);
            return t == null ||
              t ===
                o("AutomatedShoppingAdsConstants")
                  .EXISTING_CUSTOMERS_BUDGET_PERCENTAGE_FOR_HEC
              ? e
              : r(
                  "AdsCampaignRecordAccessors",
                ).existing_customer_budget_percentage.set(
                  o("AutomatedShoppingAdsConstants")
                    .EXISTING_CUSTOMERS_BUDGET_PERCENTAGE_FOR_HEC,
                  e,
                );
          });
    }
    l.default = s;
  },
  98,
);
