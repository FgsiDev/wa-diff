__d(
  "AdsUEditorCampaignCampaignGroupSetRegulatedCategoryReducerPlugin",
  [
    "AdsAPICampaignGoalRecord",
    "AdsCampaignRecordAccessors",
    "AdsContextualDiscoveryAdsUtils",
    "AdsEditingCampaignEditorContext",
    "AdsMutators",
    "AdsRegulatedCategory",
    "AdsSmartAppPromotionUtils",
    "AdsSpecialAdCategoryMutateCampaignTargeting",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupSetRegulatedCategoryActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AutomatedShoppingAdsConstants",
    "adsCreateStoreSelector",
    "adsRegulatedCategoryIsHECRegulatedCategory",
    "adsTargetingRelaxationRolloutSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignMultiAdsEligibilitySelector",
    "areEqual",
    "handleMarketingMessagesSACCampaignUpdate",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedCampaignsSelector;
          return t.getStores();
        },
        function (t) {
          return r("ifRequired")(
            "adsUEditorCampaignAdvisoryMinAgeStateSelector",
            function (e) {
              return e(t);
            },
          );
        },
        { name: i.id + ".minAgeStateSelector" },
      ),
      d = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignGroupMap: (s = o(
              "AdsUEditorCampaignSelectors",
            )).adObjectsList.mapTransform(
              (u = o("AdsUEditorCampaignGroupAdObjectsUtils")).getCampaignGroup,
            ),
            campaignIDToBuyingTypeMap: s.adObjectsList.mapTransform(
              u.getBuyingType,
            ),
            campaignIDToObjectiveMap: s.adObjectsList.mapTransform(
              u.getObjective,
            ),
            campaignIDToRegulatedCategoriesMap: s.adObjectsList.mapTransform(
              u.getRegulatedCategories,
            ),
            campaignIdToTargetingOptimisationMap: s.adObjectsList.mapTransform(
              o("AdsUEditorCampaignAdObjectsUtils")
                .getCampaignTargetingOptimization,
            ),
            eligibilityInformationMap: s.eligibilityInformationMap,
            minAgeState: c,
            multiAdsEligibilityState: r(
              "adsUEditorCampaignMultiAdsEligibilitySelector",
            ),
          },
          function (t, n, a) {
            var i,
              l = a.account,
              s = a.campaignGroupMap,
              u = a.campaignIDToBuyingTypeMap,
              c = a.campaignIDToObjectiveMap,
              d = a.campaignIDToRegulatedCategoriesMap,
              m = a.campaignIdToTargetingOptimisationMap,
              p = a.eligibilityInformationMap,
              _ = a.minAgeState,
              f = a.multiAdsEligibilityState;
            if (n.campaignIDs == null) return t;
            var g = (i = n.campaignIDs) != null ? i : [],
              h = t;
            return (
              n.shouldTuneAudiences === !0 &&
                !(e || (e = r("areEqual")))(n.regulatedCategories, [
                  r("AdsRegulatedCategory").NONE,
                ]) &&
                n.regulatedCategories.length > 0 &&
                n.selectedCountries.length > 0 &&
                (h = o(
                  "AdsSpecialAdCategoryMutateCampaignTargeting",
                ).AdsSpecialAdCategoryMutateCampaignTargeting(
                  h,
                  l.account_id,
                  g,
                  n.hostID,
                  n.regulatedCategories,
                  n.selectedCountries,
                  {
                    account: l,
                    campaignIDToObjectiveMap: c,
                    campaignIDToRegulatedCategoriesMap: d,
                    campaignIDToBuyingTypeMap: u,
                    campaignIdToTargetingOptimisationMap: m,
                    enableAutomationForPharmaAdvertiser: o(
                      "adsTargetingRelaxationRolloutSelectors",
                    ).passesEnableAutomationForPharmaAdvertiser(),
                    eligibilityInformationMap: p,
                  },
                )),
              o("AdsMutators").mutateEach(h, g, function (t, a) {
                var i = t;
                if (
                  !(e || (e = r("areEqual")))(n.regulatedCategories, [
                    r("AdsRegulatedCategory").NONE,
                  ])
                ) {
                  var u = r(
                    "AdsCampaignRecordAccessors",
                  ).existing_customer_budget_percentage.get(t);
                  u == null ||
                    u ===
                      o("AutomatedShoppingAdsConstants")
                        .EXISTING_CUSTOMERS_BUDGET_PERCENTAGE_FOR_HEC ||
                    (i = r(
                      "AdsCampaignRecordAccessors",
                    ).existing_customer_budget_percentage.set(
                      o("AutomatedShoppingAdsConstants")
                        .EXISTING_CUSTOMERS_BUDGET_PERCENTAGE_FOR_HEC,
                      i,
                    ));
                }
                var c = n.regulatedCategories.some(
                    r("adsRegulatedCategoryIsHECRegulatedCategory"),
                  ),
                  d = c && n.selectedCountries.includes("US");
                if (_ != null) {
                  var m = s.get(a);
                  m != null &&
                    (i = o(
                      "AdsSmartAppPromotionUtils",
                    ).setAdvisoryMinAgeTargetingSpec(
                      m,
                      i,
                      c,
                      _.hasCustomAudienceExclusion,
                      _.appDestinationDataMinAge,
                      _.appSettingsMinAge,
                      _.accountSettingsMinAge,
                      _.aacAccountControlEligible,
                      _.countries,
                      _.locales,
                    ));
                }
                if (c) {
                  var g = i.get("campaign_goal");
                  g != null &&
                    (i = i.set(
                      "campaign_goal",
                      new (r("AdsAPICampaignGoalRecord"))({ type: 0 }),
                    ));
                }
                if (
                  (d &&
                    r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.value_semantic_type.get(i) ===
                      "LIFETIME_VALUE" &&
                    (i = r(
                      "AdsCampaignRecordAccessors",
                    ).promoted_object.value_semantic_type.set(null, i)),
                  (i = o(
                    "AdsContextualDiscoveryAdsUtils",
                  ).maybeUpdateMultiAdsDefaultOptInFromRegulatedCategory(
                    l,
                    i,
                    f,
                    n.regulatedCategories,
                  )),
                  n.shouldUpdateMarketingMessagesSettings === !0)
                ) {
                  var h,
                    y =
                      (h = p == null ? void 0 : p.get(a)) != null
                        ? h
                        : o(
                            "AdsUEditorCampaignSelectors",
                          ).eligibilityInformationSelector(
                            r("AdsEditingCampaignEditorContext"),
                          );
                  i = o(
                    "handleMarketingMessagesSACCampaignUpdate",
                  ).handleMarketingMessagesSACCampaignUpdate(
                    i,
                    a,
                    n.hostID,
                    y,
                    !0,
                  );
                }
                return i;
              })
            );
          },
          r("AdsUEditorCampaignGroupSetRegulatedCategoryActionFlux").actionType,
        ),
      },
      m = d;
    l.default = m;
  },
  98,
);
