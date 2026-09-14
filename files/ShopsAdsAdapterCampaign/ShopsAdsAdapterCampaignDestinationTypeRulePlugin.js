__d(
  "ShopsAdsAdapterCampaignDestinationTypeRulePlugin",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_rule",
        key: "shops_ads_destination_type_rule",
        isCompatible: function (t, n) {
          if (
            t.destination_type == null ||
            t.destination_type === r("AdCampaignDestination").WEBSITE ||
            t.destination_type === r("AdCampaignDestination").UNDEFINED
          ) {
            var e = o("AdsAPICampaignRecordUtils").getDerivedPromotedObjectType(
              t,
              n,
            );
            if (
              e === r("AdsPromotedObjectTypes").PIXEL ||
              e === r("AdsPromotedObjectTypes").PRODUCT_SET
            )
              return null;
          }
          return "destination_type";
        },
        pivots: { ruleType: "shops_ads_destination_type_rule" },
        transform: function (t, n) {
          return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
