__d(
  "ShopsAdsAdapterConversionCampaignPromotedObjectRulePlugin",
  [
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "ShopsAdsAdapterCampaignPromotedObjectRulePlugin",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("ShopsAdsAdapterCampaignPromotedObjectRulePlugin"),
        {
          type: "shops_ads_adapter_website_and_shop_opt_in_rule",
          key: "shops_ads_conversion_promoted_object_rule",
          pivots: {
            ruleType: "shops_ads_campaign_promoted_object_rule",
            objective: r("AdsAPIObjectives").CONVERSIONS,
          },
          transform: function (t, n) {
            var e,
              a = r(
                "ShopsAdsAdapterCampaignPromotedObjectRulePlugin",
              ).transform(t, n),
              i = r("AdsCampaignRecordAccessors").promoted_object.pixel_id.get(
                t,
              ),
              l =
                (e = r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.pixel_rule.get(t)) != null
                  ? e
                  : null;
            return o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").promoted_object.delete,
              r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.omnichannel_object.pixel.set(
                i != null
                  ? r("immutable").List([
                      r("immutable").Map([
                        ["pixel_id", i],
                        ["pixel_rule", l],
                        ["custom_event_type", "PURCHASE"],
                      ]),
                    ])
                  : r("immutable").List(),
              ),
            )(a);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
