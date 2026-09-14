__d(
  "adsUEditorCampaignIsCollaborativeAdsSelectorUtils",
  ["AdsBulkValueUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("AdsBulkValueUtils").getUniformValue(e);
      return (
        (n == null ? void 0 : n.merchant_partner_business_id) != null ||
        t.getValue() === !0
      );
    }
    l.adsUEditorCampaignIsCollaborativeAds = e;
  },
  98,
);
