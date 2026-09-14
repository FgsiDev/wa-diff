__d(
  "getInvalidObjectiveErrorForASA",
  ["AdsAPIObjectives", "AutomatedShoppingAdsDuplicationTooltipStrings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Set([
        r("AdsAPIObjectives").OUTCOME_SALES,
        r("AdsAPIObjectives").CONVERSIONS,
        r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
      ]);
      return t.has(e)
        ? null
        : o("AutomatedShoppingAdsDuplicationTooltipStrings")
            .DUPLICATION_AD_OBJECTIVE_INELIGIBLE_FOR_ASC_TOOLTIP;
    }
    l.default = e;
  },
  98,
);
