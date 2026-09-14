__d(
  "adsCollaborationMerchantPartnerBusinessIDSelector",
  ["AdsBulkValueUtils", "AdsUEditorSelectors", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(
            function (e) {
              return e.collaborative_ads_partner_info;
            },
          ),
        ],
        function (t) {
          var e,
            n = o("AdsBulkValueUtils").getUniformValue(t);
          return (e = n == null ? void 0 : n.merchant_partner_business_id) !=
            null
            ? e
            : null;
        },
        { name: i.id + ".adsCollaborationMerchantPartnerBusinessIDSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
