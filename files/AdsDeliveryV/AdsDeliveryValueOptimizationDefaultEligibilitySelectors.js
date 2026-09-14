__d(
  "AdsDeliveryValueOptimizationDefaultEligibilitySelectors",
  [
    "AdsCanUseDynamicAdsValueOptimizationSelector",
    "AdsTrustTierAccountSelectors",
    "AdsUEditorSelectors",
    "ProductSetDataProvider",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").campaign.bulkByAccessorToJS(function (e) {
              var t;
              return (t = e.promoted_object) == null
                ? void 0
                : t.product_set_id;
            }),
            null,
          ),
          r("ProductSetDataProvider").toFluxSelector(),
          r("AdsCanUseDynamicAdsValueOptimizationSelector"),
        ],
        function (t, n, r) {
          if (!r) return !1;
          if (t != null) {
            var e = n.get(t).getValue();
            if (e != null) return e.is_eligible_for_value_optimization_new;
          }
          return !1;
        },
        {
          name:
            i.id +
            ".canUseDAValueOptimizationBasedOnProductSetAndCapabilitySelector",
        },
      ),
      s = r("adsCreateSelector")(
        [
          o("AdsTrustTierAccountSelectors").isTrustTier0AccountSelector,
          o("AdsTrustTierAccountSelectors").isTrustTier1AccountSelector,
          e,
        ],
        function (t, n, o) {
          return t || n ? !1 : r("gkx")("21417") ? !0 : o;
        },
        { name: i.id + ".canUseVOForCatalogSalesSelector" },
      );
    l.canUseVOForCatalogSalesSelector = s;
  },
  98,
);
