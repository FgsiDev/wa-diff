__d(
  "AdsConvergenceProductCatalogSalesAdgroupPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsConvergenceAdgroupUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsMutators",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "CPASURLTagsLoggingClient",
    "CatalogCommerceUtils",
    "URI",
    "catalogSegmentGetMerchantPredefinedUTMs",
    "catalogSegmentIsCatalogSegment",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        type: "convergenceAdgroup",
        key: "adgroup/product-catalog-sales",
        pivots: { objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES },
        generateDefaultAdgroupSpec: function (n, a, i) {
          var t = n.catalogSalesData,
            l = t == null ? void 0 : t.templatePlugin,
            s = t == null ? void 0 : t.catalog,
            u = n.account,
            c = o("AdsMutators").chain(
              function (e) {
                return r("AdsAdgroupSemanticFields").multiShareEndCard.set(
                  i,
                  e,
                  !1,
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").callToActionType.set(
                  i,
                  e,
                  "SHOP_NOW",
                );
              },
              function (e) {
                return r(
                  "AdsAdgroupSemanticFields",
                ).catalogAssetFormatOption.set(
                  i,
                  e,
                  "carousel_images_multi_items",
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").pageID.set(i, e, n.pageID);
              },
              function (e) {
                var n;
                return r("AdsAdgroupSemanticFields").productSetID.set(
                  i,
                  e,
                  t == null || (n = t.productSet) == null ? void 0 : n.id,
                );
              },
              function (e) {
                var t, r, a, i;
                return o(
                  "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                ).updateContextualDiscoveryAdsEligibilitySpec(e, {
                  shouldOptIn:
                    ((t = n.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : t.shouldOptIn) === !0,
                  shouldRenderCheckbox:
                    n == null ||
                    (r = n.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : r.shouldRenderCheckbox,
                  isExplicitOptOut:
                    n == null ||
                    (a = n.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : a.isExplicitOptOut,
                  actionMetadataType:
                    (i = n.contextualDiscoveryAdsEligibilityState) == null
                      ? void 0
                      : i.actionMetadataType,
                });
              },
            )(o("AdsConvergenceAdgroupUtils").EMPTY_SHARE_ADGROUP_RECORD);
          l != null &&
            (c = o("AdsMutators").chain(
              function (e) {
                return r("AdsAdgroupSemanticFields").headline.set(
                  i,
                  e,
                  l.getDefaultName(),
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").linkDescription.set(
                  i,
                  e,
                  l.getDefaultDescription(),
                );
              },
            )(c));
          var d = n.campaign;
          if (d.destination_type === r("AdCampaignDestination").FACEBOOK)
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.call_to_action.value.app_destination.set(
              "MARKETPLACE",
              c,
            );
          else {
            var m;
            ((m = c.creative) == null ||
            (m = m.object_story_spec) == null ||
            (m = m.template_data) == null ||
            (m = m.call_to_action) == null ||
            (m = m.value) == null
              ? void 0
              : m.app_destination) === "MARKETPLACE" &&
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.call_to_action.value.app_destination.delete(
                c,
              );
          }
          if (r("gkx")("3461")) {
            var p, _;
            if (
              (((p = d.promoted_object) == null
                ? void 0
                : p.place_page_set_id) != null &&
                (c = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.dynamic_ad_voice.set("STORY_OWNER", c)),
              ((_ = d.promoted_object) == null ? void 0 : _.product_set_id) !=
                null)
            ) {
              var f;
              c = r("AdsAdgroupRecordAccessors").creative.product_set_id.set(
                (f = d.promoted_object) == null ? void 0 : f.product_set_id,
                c,
              );
            }
          }
          if (r("catalogSegmentIsCatalogSegment")(s)) {
            c = o("AdsMutators").chain(
              function (e) {
                return r("AdsAdgroupSemanticFields").multiShareEndCard.set(
                  i,
                  e,
                  !1,
                );
              },
              function (e) {
                return r("AdsAdgroupSemanticFields").linkURL.set(i, e, "");
              },
            )(c);
            var g = t == null ? void 0 : t.cpasCatalog;
            if (g != null) {
              var h = r("catalogSegmentGetMerchantPredefinedUTMs")(
                g == null
                  ? void 0
                  : g.ad_account_to_collaborative_ads_share_settings,
              );
              if (h == null)
                return o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
                  c,
                  n.specialAdCategories,
                );
              (r("AdsAdgroupRecordAccessors").creative.url_tags.set(h, c),
                o("CPASURLTagsLoggingClient").CPASURLTagsLoggingClient.log({
                  advertiserAccountID: u.account_id,
                  catalogSegmentID: g.id,
                  component: o("CPASURLTagsLoggingClient")
                    .CPASURLTagsLoggingComponent
                    .ADS_CF_DYNAMIC_ADGROUP_PLUGIN_COMMON,
                  event: "producer_ads_creation_flow",
                  newURLTags: h,
                }));
            }
            return o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
              c,
              n.specialAdCategories,
            );
          }
          if (
            s &&
            o("AdsLoadStateUtils_LEGACY").isLoaded(s) &&
            o("CatalogCommerceUtils").isContactMerchantShopCatalog(s)
          ) {
            var y = o("CatalogCommerceUtils").getPageLinkFromCatalog(s),
              C = o("CatalogCommerceUtils").getPageIDFromCatalog(s);
            C != null && C !== "" && y != null;
          }
          return o("AdsConvergenceAdgroupUtils").maySetPoliticalAd(
            c,
            n.specialAdCategories,
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
