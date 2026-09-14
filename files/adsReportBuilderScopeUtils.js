__d(
  "adsReportBuilderScopeUtils",
  ["AdsReportBuilderScopeType", "BizSiteIdentifier.brands"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t =
        o("BizSiteIdentifier.brands").getBusinessID() != null &&
        (e === "BUSINESS_VIEW_REPORT" ||
          e === "MANAGE_REPORTS" ||
          e === "EXPORT_HISTORY" ||
          e === "PERSONALIZED_INSIGHTS" ||
          e === "CREATIVE_INSIGHTS" ||
          e === "PRODUCT_INSIGHTS" ||
          e === "PRODUCT_REPORTS" ||
          e === "PRODUCTS" ||
          e === "MCR_VIEW_REPORT");
      return t
        ? r("AdsReportBuilderScopeType").BUSINESS
        : r("AdsReportBuilderScopeType").ACCOUNT;
    }
    l.getReportBuilderScope = e;
  },
  98,
);
