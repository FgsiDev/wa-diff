__d(
  "AdsCampaignShopsAdsTransformMutator",
  [
    "ShopsAdsAdapterCampaignRulePluginResolver",
    "ShopsAdsAdapterOptInWebsiteAndShopsTransformationRuleSet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e;
      for (var o of r(
        "ShopsAdsAdapterOptInWebsiteAndShopsTransformationRuleSet",
      ).ad_set) {
        var a = r("ShopsAdsAdapterCampaignRulePluginResolver").resolve({
          ruleType: o,
          objective: t.objective,
        });
        n = a.transform(n, t);
      }
      return n;
    }
    l.transformCampaignToShopsAds = e;
  },
  98,
);
