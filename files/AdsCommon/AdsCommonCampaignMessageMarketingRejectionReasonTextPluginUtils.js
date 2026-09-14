__d(
  "AdsCommonCampaignMessageMarketingRejectionReasonTextPluginUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      switch (e) {
        case "ABUSIVE_CONTENT":
          return s._(/*BTDS*/ "on abusive content");
        case "INVALID_FORMAT":
          return s._(/*BTDS*/ "on message formats");
        case "PROMOTIONAL":
          return s._(/*BTDS*/ "on promotional content");
        case "TAG_CONTENT_MISMATCH":
          return s._(/*BTDS*/ "on mismatched content and tags");
        case "INCORRECT_CATEGORY":
        case "CATEGORY_NOT_AVAILABLE":
          return s._(/*BTDS*/ "on message categories");
        default:
          return null;
      }
    }
    l.getWhatsAppTemplateRejectionReasonText = e;
  },
  226,
);
