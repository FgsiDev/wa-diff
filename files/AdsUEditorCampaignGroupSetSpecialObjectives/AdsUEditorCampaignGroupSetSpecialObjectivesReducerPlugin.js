__d(
  "AdsUEditorCampaignGroupSetSpecialObjectivesReducerPlugin",
  [
    "AdsAPICampaignGroupRecord",
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAutomationUnificationUtils",
    "AdsBuyingTypes",
    "AdsCampaignGroupLVACardDefaultUtils",
    "AdsCampaignGroupLVACardUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsFrequencyControlGKUtils",
    "AdsLeadGenAutomationBrandingQEUtils",
    "AdsLeadGenAutomationQEUtils",
    "AdsLiveVideoAdUtils",
    "AdsMutators",
    "AdsPCAUnificationUtils",
    "AdsProgressiveDisclosureUtils",
    "AdsSmartAppPromotionUtils",
    "AdsTargetFrequencyInAuctionUtils",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetSpecialObjectivesActionFlux",
    "adsUEditorAccountSelector",
    "defaultCampaignGroupWithBudget",
    "getShouldDefaultToCampaignGroupBudget",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (
        (o(
          "AdsPCAUnificationUtils",
        ).AdsIsPcaUnificationWs1BetaWithMandatoryCatalogGKEnabled(),
        !o("AdsPCAUnificationUtils").getIsEligibleForPCAUnificationBeta(t))
      )
        return e;
      var a = r("AdsCampaignGroupRecordAccessors").is_pca_unified.set(!0, e);
      return (
        a.collaborative_ads_partner_info == null &&
          n != null &&
          (a = r(
            "AdsCampaignGroupRecordAccessors",
          ).promoted_object.product_catalog_id.set(n, a)),
        a
      );
    }
    var s = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (t, n, a) {
            var i = a.account;
            return o("AdsMutators").mutateEach(
              t,
              n.campaignGroupIDs,
              function (t, a) {
                var l,
                  s,
                  u,
                  c = new (r("AdsAPICampaignGroupRecord"))(
                    ((l = {}),
                    (l.name = t.name),
                    (l.id = a),
                    (l.buying_type = r("AdsBuyingTypes").AUCTION),
                    (l.lightweight_split_test = t.lightweight_split_test),
                    (l.objective = n.newObjective),
                    (l.special_ad_categories = t.special_ad_categories),
                    (l.special_ad_category_country =
                      t.special_ad_category_country),
                    (l.status = t.status),
                    (l.source_campaign_id = t.source_campaign_id),
                    (l.is_odax_campaign_group = t.is_odax_campaign_group),
                    (l.smart_promotion_type = n.smartPromotionType),
                    (l.budget_strategy = t.budget_strategy),
                    l),
                  );
                if (
                  ((c = e(
                    c,
                    n.newObjective,
                    (s = n.defaultPCAUCatalogID) != null ? s : null,
                  )),
                  (o(
                    "AdsProgressiveDisclosureUtils",
                  ).getIsAutomationUnifiedCampaignType(t) ||
                    !o(
                      "AdsAutomationUnificationUtils",
                    ).isObjectiveEligibleForUnification(t.objective)) &&
                    o(
                      "AdsProgressiveDisclosureUtils",
                    ).getIsProgressiveDisclosureUnifiedAppSalesTestVariationWithoutLog(
                      n.newObjective,
                    ) &&
                    (c = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).automation_unified_campaign_type.set(
                      o(
                        "AdsProgressiveDisclosureUtils",
                      ).getAutomationUnifedCampaignType(n.newObjective),
                      c,
                    )),
                  (o(
                    "AdsProgressiveDisclosureUtils",
                  ).getIsAutomationUnifiedCampaignType(c) ||
                    !o("AdsLeadGenAutomationQEUtils").isLeadsObjective(
                      t.objective,
                    )) &&
                    o(
                      "AdsLeadGenAutomationBrandingQEUtils",
                    ).getIsPGDLeadGenAutomationBrandingExpVariationWithoutLog(
                      n.newObjective,
                    ) &&
                    (c = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).automation_unified_campaign_type.set(
                      o(
                        "AdsProgressiveDisclosureUtils",
                      ).getLeadsAutomationUnifiedCampaignType(n.newObjective),
                      c,
                    )),
                  (o(
                    "AdsProgressiveDisclosureUtils",
                  ).getIsAutomationUnifiedCampaignType(c) ||
                    !o("AdsLeadGenAutomationQEUtils").isUpperFunnelObjective(
                      t.objective,
                    )) &&
                    o(
                      "AdsLeadGenAutomationQEUtils",
                    ).isUpperFunnelObjectiveAndInAUUXHarmonyGK(
                      n.newObjective,
                    ) &&
                    (c = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).automation_unified_campaign_type.set(
                      o(
                        "AdsProgressiveDisclosureUtils",
                      ).getAutomationUnifedCampaignType(n.newObjective),
                      c,
                    )),
                  n.newObjective === r("AdsAPIObjectives").STORE_VISITS)
                ) {
                  var d,
                    m,
                    p =
                      (d = n.objectiveSpecificDependencies.storeTrafficData) ==
                      null
                        ? void 0
                        : d.locationPage;
                  c = r(
                    "AdsCampaignGroupRecordAccessors",
                  ).promoted_object.page_id.set(
                    (m = p == null ? void 0 : p.id) != null ? m : "",
                    c,
                  );
                } else if (
                  n.newObjective === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES
                ) {
                  var _;
                  c = r(
                    "AdsCampaignGroupRecordAccessors",
                  ).promoted_object.product_catalog_id.set(
                    (_ = n.objectiveSpecificDependencies.catalogSalesData) ==
                      null || (_ = _.productSet) == null
                      ? void 0
                      : _.catalogID,
                    c,
                  );
                }
                c = o("AdsSmartAppPromotionUtils").removeSAPFlag(
                  c,
                  n.newObjective,
                );
                var f = !1;
                (n.isSetBuyingType &&
                  n.campaignGroupBudgetAccountDefaultOnData != null &&
                  (f = r("getShouldDefaultToCampaignGroupBudget")(
                    r("AdsBuyingTypes").AUCTION,
                    n.newObjective,
                    n.campaignGroupBudgetAccountDefaultOnData,
                  )),
                  (o(
                    "AdsProgressiveDisclosureUtils",
                  ).getIsProgressiveDisclosureUnifiedAppSalesTestVariationWithoutLog(
                    n.newObjective,
                  ) ||
                    o(
                      "AdsLeadGenAutomationBrandingQEUtils",
                    ).getIsPGDLeadGenAutomationBrandingExpVariationWithoutLog(
                      n.newObjective,
                    )) &&
                    (f = !0));
                var g = o("AdsAPICampaignGroupRecordUtils").hasBudget_LEGACY(t),
                  h = t.budget_strategy === "CAMPAIGN_FLEX_BUDGET",
                  y = t.frequency_control_specs;
                if (
                  (y != null &&
                    y.size > 0 &&
                    o(
                      "AdsTargetFrequencyInAuctionUtils",
                    ).isTargetFrequencyInAuctionEligibleObjective(
                      n.newObjective,
                    ) &&
                    o(
                      "AdsFrequencyControlGKUtils",
                    ).isAccountEligibleForTargetFrequencyAuctionCBOWriteExperience() &&
                    (c = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).frequency_control_specs.set(y, c)),
                  (g || f || h) &&
                    (c = r("defaultCampaignGroupWithBudget")(i, c)),
                  o(
                    "AdsCampaignGroupLVACardUtils",
                  ).isEligibleObjectiveForCampaignGroupLVACard(
                    n.newObjective,
                  ) &&
                    ((u = t.promoted_object) == null
                      ? void 0
                      : u.live_video_destination) != null)
                ) {
                  var C,
                    b,
                    v =
                      (C = t.promoted_object) == null
                        ? void 0
                        : C.live_video_destination,
                    S = o(
                      "AdsCampaignGroupLVACardUtils",
                    ).getEligibleLVADestinations(n.newObjective, {
                      silent: !0,
                    }),
                    R = S.includes(v) ? v : (b = S[0]) != null ? b : null;
                  R != null &&
                    (c = o(
                      "AdsCampaignGroupLVACardDefaultUtils",
                    ).setCampaignGroupLiveVideoDestionationWithCampaignDefault(
                      c,
                      R,
                      g,
                      i,
                      n.hostID,
                      o("AdsLiveVideoAdUtils").LiveVideoAdConfigUpdateAction
                        .OPT_IN,
                    ));
                }
                return c;
              },
            );
          },
          o("AdsUEditorCampaignGroupSetSpecialObjectivesActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
