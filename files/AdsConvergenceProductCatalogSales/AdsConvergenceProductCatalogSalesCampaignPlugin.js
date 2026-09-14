__d(
  "AdsConvergenceProductCatalogSalesCampaignPlugin",
  [
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsConvergenceDefaultCampaignPlugin",
    "AdsDynamicTargetingPackageViewedAddedToCardNotPurchasedPlugin",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsConvergenceDefaultCampaignPlugin"), {
        type: "convergenceCampaign",
        key: "campaign/product-catalog-sales",
        pivots: { objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES },
        __mergeObjectiveSpecificStaticDefaults: function (t, n) {
          return t.withMutations(function (e) {
            var t, o;
            (r(
              "AdsCampaignRecordAccessors",
            ).promoted_object.custom_event_type.set("PURCHASE", e),
              r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.product_set_id.set(
                n == null ||
                  (t = n.catalogSalesData) == null ||
                  (t = t.productSet) == null
                  ? void 0
                  : t.id,
                e,
              ));
            var a = n == null ? void 0 : n.account,
              i =
                (n == null ||
                (o = n.catalogSalesData) == null ||
                (o = o.dynamicTargetingPlugin) == null
                  ? void 0
                  : o.usesProductAudiences) && a == null;
            return (
              i === !0 &&
                (r(
                  "AdsCampaignRecordAccessors",
                ).targeting.product_audience_specs.set(
                  r("immutable").fromJS(
                    r(
                      "AdsDynamicTargetingPackageViewedAddedToCardNotPurchasedPlugin",
                    ).defaultFields.map(function (e) {
                      var t, r;
                      return babelHelpers.extends(
                        {},
                        e,
                        ((r = {}),
                        (r.product_set_id =
                          n == null ||
                          (t = n.catalogSalesData) == null ||
                          (t = t.productSet) == null
                            ? void 0
                            : t.id),
                        r),
                      );
                    }),
                  ),
                  e,
                ),
                r(
                  "AdsCampaignRecordAccessors",
                ).targeting.excluded_product_audience_specs.delete(e)),
              e
            );
          });
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
