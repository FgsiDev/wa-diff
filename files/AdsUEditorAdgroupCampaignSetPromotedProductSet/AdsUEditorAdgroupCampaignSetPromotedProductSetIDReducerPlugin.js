__d(
  "AdsUEditorAdgroupCampaignSetPromotedProductSetIDReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsDefaultPageDataProvider",
    "AdsDynamicAdsUtils",
    "AdsMutators",
    "AdsODAXStoreUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignSetPromotedProductSetIDDataActionFlux",
    "PERelevanceUtils",
    "adsAdgroupSetProductSetPromotedObjectReducerFn",
    "adsPlacementAssetMutationConvertFromAssetFeedSpec",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "adsUEditorAreSomeCampaignGroupsBwISelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsUEditorPlacementCustomizationDefaultMediaAssetLabelSelector",
    "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
    "isFalsey",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            defaultMedia: r(
              "adsUEditorPlacementCustomizationDefaultMediaAssetLabelSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            account: r("adsUEditorAccountSelector"),
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
            campaignsMap: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaign;
              return t;
            }),
            defaultPageValuesForAccount: r(
              "AdsDefaultPageDataProvider",
            ).toFluxSelector(),
            specialAdCategoriesMap: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(function (e) {
              var t = e.campaignGroup;
              return t.special_ad_categories;
            }),
            contextualDiscoveryAdsEligibilityState: r(
              "adsUEditorisEligibleForContextualDiscoveryAdsDefaultOnSelector",
            ),
            isBwPCampaignGroup: r("adsUEditorAreSomeCampaignGroupsBwISelector"),
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
          },
          function (e, t, n) {
            var a,
              i = n.account,
              l = n.bizAIEligibility,
              s = n.campaignsMap,
              u = n.contextualDiscoveryAdsEligibilityState,
              c = n.defaultMedia,
              d = n.defaultPageValuesForAccount,
              m = n.isBwPCampaignGroup,
              p = n.parentData,
              _ = n.promoAdDefaultOptinStatus,
              f = n.specialAdCategoriesMap;
            if (m)
              return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                return t.productSetID != null
                  ? r("AdsAdgroupRecordAccessors").creative.product_set_id.set(
                      t.productSetID,
                      e,
                    )
                  : r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.product_set_id.delete(e);
              });
            var g = t.adgroupIDs,
              h = t.catalogSalesData,
              y = t.productSetID,
              C =
                (a = d.get(i.account_id).getValue()) == null
                  ? void 0
                  : a.pageID,
              b = r("justknobx")._("4270");
            return o("AdsMutators").mutateEach(e, g, function (e, n) {
              var a,
                d,
                m,
                g = r("nullthrows")(
                  p.get(n),
                  "AdsUEditorAdgroupCampaignSetPromotedProductSetIDReducerPlugin: Parent data must exist for each adgroup ID.",
                ),
                v = g.campaign,
                S = g.campaignGroup,
                R = g.specPlugin,
                L =
                  ((a = v.promoted_object) == null
                    ? void 0
                    : a.full_funnel_objective) != null &&
                  ((d = v.promoted_object) == null
                    ? void 0
                    : d.full_funnel_objective) !==
                    r("AdsAPIObjectives").OUTCOME_SALES;
              if (L) return e;
              var E = o(
                  "AdsUEditorCampaignAdObjectsUtils",
                ).getPromotedObjectType({ campaign: v, campaignGroup: S }),
                k = o("AdsODAXUtils").maybeTranslateObjective(
                  S.objective,
                  E,
                  v.optimization_goal,
                ),
                I = E === r("AdsPromotedObjectTypes").MOBILE_APP && !b,
                T = e,
                D =
                  (m = e.creative) == null || (m = m.object_story_spec) == null
                    ? void 0
                    : m.page_id;
              if (
                (C == null && D != null && (C = D),
                (T =
                  S.is_odax_campaign_group === !0 &&
                  t.shouldRefreshSpec === !0 &&
                  !I
                    ? r("adsAdgroupSetProductSetPromotedObjectReducerFn")(e, {
                        account: i,
                        bizAIEligibility: l,
                        campaignsMap: s,
                        specialAdCategoriesMap: f,
                        catalogSalesData: h,
                        mappedObjective: k,
                        pageID: C,
                        parentData: p,
                      })
                    : T),
                S.is_odax_campaign_group === !0 && t.shouldRefreshSpec !== !0)
              ) {
                var x;
                if (o("AdsDynamicAdsUtils").isDynamicAd(e) && !I)
                  T = r("adsAdgroupSetProductSetPromotedObjectReducerFn")(e, {
                    account: i,
                    bizAIEligibility: l,
                    campaignsMap: s,
                    specialAdCategoriesMap: f,
                    catalogSalesData: h,
                    mappedObjective: k,
                    pageID: C,
                    parentData: p,
                  });
                else if (
                  ((x = e.creative) == null ||
                  (x = x.creative_sourcing_spec) == null
                    ? void 0
                    : x.associated_product_set_id) != null ||
                  o("PERelevanceUtils").hasSelectedRelevancyStrategyIgnoringGK(
                    e,
                  )
                ) {
                  var $;
                  T = o("AdsMutators").chain(
                    o("PERelevanceUtils")
                      .mayBeDeleteAdExtensionsRelevancySpecFromAdgroup,
                    ($ = r(
                      "AdsAdgroupRecordAccessors",
                    )).creative.creative_sourcing_spec.catalog.action_metadata.type.set(
                      "MANUAL",
                    ),
                    $.creative.creative_sourcing_spec.catalog.enroll_status.set(
                      "OPT_OUT",
                    ),
                    $.creative.creative_sourcing_spec.associated_product_set_id
                      .delete,
                    $.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
                      "OPT_OUT",
                    ),
                    $.creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
                      "MANUAL",
                    ),
                  )(T);
                }
              }
              return (
                (T =
                  y != null
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.product_set_id.set(y, T)
                    : r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.product_set_id.delete(T)),
                (T =
                  t.shouldSetPageID === !0 && r("isFalsey")(C)
                    ? o("AdsODAXStoreUtils").maybeSetDefaultPageIDOnAdgroup(
                        T,
                        R,
                      )
                    : T),
                o("AdsAssetFeedUtils").isPACAdgroupFromRecord(T) &&
                  (T = r("adsPlacementAssetMutationConvertFromAssetFeedSpec")(
                    c.defaultMediaFormat,
                    T,
                    k,
                  )),
                (T = o(
                  "AdsUEditorAdgroupContextualDiscoveryAdsMutator",
                ).updateContextualDiscoveryAdsEligibilitySpec(T, {
                  shouldOptIn: u.shouldOptIn === !0,
                  isExplicitOptOut: u.isExplicitOptOut,
                  shouldRenderCheckbox: u.shouldRenderCheckbox,
                  actionMetadataType: u.actionMetadataType,
                })),
                _ != null &&
                  (T = o(
                    "AdsUEditorAdgroupPromoAdMutators",
                  ).updatePromoAdForDefaultOptIn(
                    { adgroup: T, campaign: v, campaignGroup: S },
                    i,
                    R,
                    _,
                    o("AdsUEditorAdgroupPromoAdMutatorUtils")
                      .PromoAdDefaultOptInCallSite
                      .SET_PRODUCT_SET_ID_ON_CAMPAIGN,
                  )),
                T
              );
            });
          },
          o("AdsUEditorCampaignSetPromotedProductSetIDDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
