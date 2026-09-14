__d(
  "ShopsAdsAdapterCampaignPromotedObjectRulePlugin",
  [
    "AdsAPIOmnichannelConversionEventType",
    "AdsCampaignRecordAccessors",
    "AdsSAIPAllowAllSpecUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_rule",
        key: "shops_ads_promoted_object_rule",
        isCompatible: function (t) {
          var e, n, a;
          return ((e = t.promoted_object) == null
            ? void 0
            : e.custom_event_type) !==
            r("AdsAPIOmnichannelConversionEventType").PURCHASE &&
            (((n = t.promoted_object) == null ? void 0 : n.custom_event_type) ==
              null ||
              !o("AdsSAIPAllowAllSpecUtils").getNonOCRLaunchEligibility(
                (a = t.promoted_object) == null ? void 0 : a.custom_event_type,
                t.optimization_goal,
              ))
            ? "custom_event_type"
            : null;
        },
        pivots: { ruleType: "shops_ads_campaign_promoted_object_rule" },
        transform: function (t, n) {
          return n.isShopsAdsIncentiveProgramEnabled
            ? r("AdsCampaignRecordAccessors").promoted_object.offer_id.delete(t)
            : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
