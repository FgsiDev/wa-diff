__d(
  "adsGetMessageMarketingUpstreamSettingsFromCampaignIDSelector",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsPromotedObjectTypeOmnichannelVariationUtils",
    "AdsPromotedObjectTypeUIProvider",
    "AdsPromotedObjectUtils",
    "AdsRegulatedCategory",
    "AdsSearchAppsTypeaheadProvider",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "findAppInfoInAppSearchResults",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateDynamicSelector")(
      r("adsCreateSelector")(
        [
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
          o("AdsPECampaignSelectors").getCachedByFieldsSelector,
          o("AdsPECampaignGroupSelectors").getCachedByFieldsSelector,
          r("AdsPromotedObjectTypeUIProvider").toFluxSelector(),
          r("AdsSearchAppsTypeaheadProvider").toFluxSelector(),
        ],
        function (t, n, a, i, l) {
          var e,
            s,
            u,
            c,
            d,
            m,
            p,
            _,
            f = {
              id: null,
              campaign_id: null,
              optimization_goal: null,
              is_dynamic_creative: null,
              targeting: null,
              promoted_object: null,
              destination_type: null,
              naming_template_custom_fields: null,
            },
            g = {
              id: null,
              objective: null,
              promoted_object: null,
              special_ad_categories: null,
              budget_remaining: null,
              daily_budget: null,
              lifetime_budget: null,
              smart_promotion_type: null,
              collaborative_ads_partner_info: null,
            },
            h = n(t, f).getValue();
          if (h == null) return null;
          var y = h.campaign_id,
            C = a(y, g).getValue();
          if (C == null) return null;
          var b = o("AdsAPICampaignRecordUtils").getDerivedPromotedObjectType(
              h,
              C,
              i.get(t),
            ),
            v = o(
              "AdsPromotedObjectTypeOmnichannelVariationUtils",
            ).addVariation(
              o("AdsPromotedObjectUtils").getTypeForUI(b),
              h.destination_type,
            ),
            S = r("findAppInfoInAppSearchResults")(
              (e = h.promoted_object) == null ? void 0 : e.application_id,
              l,
            );
          return {
            objective:
              (s = C.objective) != null ? s : r("AdsAPIObjectives").NONE,
            hasProductCatalog:
              ((u = C.promoted_object) == null
                ? void 0
                : u.product_catalog_id) != null,
            specialAdCategories: o("immutable").List(
              (c = C.special_ad_categories) != null
                ? c
                : [r("AdsRegulatedCategory").NONE],
            ),
            promotedObjectType: v,
            optimizationGoal:
              (d = h.optimization_goal) != null
                ? d
                : r("AdsAPIOptimizationGoals").NONE,
            dynamicCreative: (m = h.is_dynamic_creative) != null ? m : !1,
            hasIncompatibleProductCatalog: !1,
            smartPromotionType:
              (p = C.smart_promotion_type) != null ? p : void 0,
            appHasUnsupportedMMP:
              (_ =
                S == null
                  ? void 0
                  : S.has_unsupported_mmp_for_marketing_messages) != null
                ? _
                : !1,
          };
        },
        { name: i.id },
      ),
    );
    l.adsGetMessageMarketingUpstreamSettingsFromCampaignIDSelector = e;
  },
  98,
);
