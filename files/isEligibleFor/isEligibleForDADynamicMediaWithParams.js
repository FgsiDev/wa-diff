__d(
  "isEligibleForDADynamicMediaWithParams",
  [
    "AdsDynamicAdsUtils",
    "AdsODAXUtils",
    "AdsObjectTypeUtils",
    "ODS",
    "getSupportedObjectivesForMediaTypeAutomation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a) {
      if (
        ((e || (e = o("ODS"))).bumpEntityKey(
          679,
          "da_media_type_automation",
          "is_eligible_for_da_dynamic_media_with_params.call",
        ),
        !o("AdsObjectTypeUtils").isDynamicProductAd(t))
      )
        return (
          (e || (e = o("ODS"))).bumpEntityKey(
            679,
            "da_media_type_automation",
            "is_eligible_for_da_dynamic_media_with_params.not_dynamic_ad",
          ),
          !1
        );
      if (o("AdsDynamicAdsUtils").isStaticAdUsingProductSet(t))
        return (
          (e || (e = o("ODS"))).bumpEntityKey(
            679,
            "da_media_type_automation",
            "is_eligible_for_da_dynamic_media_with_params.static_ad_using_product_set",
          ),
          !1
        );
      var i = o("AdsODAXUtils").maybeTranslateObjective(n, a);
      return r("getSupportedObjectivesForMediaTypeAutomation")().includes(i)
        ? (e.bumpEntityKey(
            679,
            "da_media_type_automation",
            "is_eligible_for_da_dynamic_media_with_params.supported",
          ),
          !0)
        : ((e || (e = o("ODS"))).bumpEntityKey(
            679,
            "da_media_type_automation",
            "is_eligible_for_da_dynamic_media_with_params.objective_not_supported_" +
              String(i != null ? i : "unknown") +
              "_objective_" +
              String(n != null ? n : "unknown"),
          ),
          !1);
    }
    l.default = s;
  },
  98,
);
