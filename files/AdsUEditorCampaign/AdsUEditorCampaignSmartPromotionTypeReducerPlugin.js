__d(
  "AdsUEditorCampaignSmartPromotionTypeReducerPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsDCOUtils",
    "AdsMutators",
    "AdsPlacementUtils",
    "AdsSmartAppPromotionUtils",
    "AdsSmartPromotion",
    "AdsSmartPromotionConstants",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupRegulatedCategorySelectors",
    "AdsUEditorCampaignGroupSmartPromotionTypeChangeActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "IsAppAdUtils",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignSapAttributionWindowUtil",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {
          account: r("adsUEditorAccountSelector"),
          campaignIDToCampaignGroupMap: o(
            "AdsUEditorCampaignSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
          ),
          eligibilityInformation: o("AdsUEditorCampaignSelectors")
            .eligibilityInformationSelector,
          isSelectedRegulatedCategory: o(
            "AdsUEditorCampaignGroupRegulatedCategorySelectors",
          ).isSelectedRegulatedCategorySelector,
        },
        function (e, t, n) {
          var a = n.account,
            i = n.campaignIDToCampaignGroupMap,
            l = n.eligibilityInformation,
            u = n.isSelectedRegulatedCategory;
          return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, n) {
            var o = r(
                "AdsPlacementUtils",
              ).getAutomaticCampaignPlacementWithEligibilityInformation(
                babelHelpers.extends({}, l, { containsDCO: !0, account: a }),
              ),
              c = r("nullthrows")(i.get(n));
            switch (t.smartPromotionType) {
              case r("AdsSmartPromotion").SMART_APP_PROMOTION:
                return s(a, t.actionEntryPoint, c, e, o, u);
              default:
                return e;
            }
          });
        },
        o("AdsUEditorCampaignGroupSmartPromotionTypeChangeActionFlux")
          .actionType,
      ),
    };
    function s(e, t, n, a, i, l) {
      return r("IsAppAdUtils").isMAIIOS14CampaignGroup(n)
        ? o("AdsMutators").chain(
            function (t) {
              return o(
                "AdsSmartAppPromotionUtils",
              ).resetCampaignTargetingForSAP(t, e, n, l);
            },
            function (e) {
              return o("AdsSmartAppPromotionUtils").resetPromotedObjectForSAP(
                e,
                n,
              );
            },
            function (t) {
              return o(
                "AdsCampaignGroupBudgetMutationUtils",
              ).resetCampaignWhenCampaignBudgetEnabled(e, n, t);
            },
            function (e) {
              return o("AdsDCOUtils").convertDynamicCreativeToStorySpecCampaign(
                e,
                i,
              );
            },
            function (e) {
              return o(
                "AdsSmartAppPromotionUtils",
              ).setSAPOptimizationGoalAndCustomEventTypeFromDuplication(t, e);
            },
            r("AdsCampaignRecordAccessors").targeting.age_min.set(
              l
                ? o("AdsSmartPromotionConstants").DEFAULT_AGE_MIN
                : o("AdsSmartPromotionConstants")
                    .SMART_APP_PROMOTION_DEFAULT_MIN_AGE,
            ),
            r("AdsCampaignRecordAccessors").targeting.user_os.set(
              r("immutable").List(
                o("AdsSmartPromotionConstants").DEFAULT_IOS_14_PLUS_IOS_VERSION,
              ),
            ),
            function (e) {
              return o(
                "adsUEditorCampaignSapAttributionWindowUtil",
              ).sapAttributionWindowMutator(
                e,
                "1_day_view_through",
                r("AdsAPIOptimizationGoals").APP_INSTALLS,
                !0,
              );
            },
          )(a)
        : o("AdsMutators").chain(
            function (t) {
              return o(
                "AdsSmartAppPromotionUtils",
              ).resetCampaignTargetingForSAP(t, e, n, l);
            },
            function (e) {
              return o("AdsSmartAppPromotionUtils").resetPromotedObjectForSAP(
                e,
                n,
              );
            },
            function (t) {
              return o(
                "AdsCampaignGroupBudgetMutationUtils",
              ).resetCampaignWhenCampaignBudgetEnabled(e, n, t);
            },
            function (e) {
              return o("AdsDCOUtils").convertDynamicCreativeToStorySpecCampaign(
                e,
                i,
              );
            },
            function (e) {
              return o(
                "AdsSmartAppPromotionUtils",
              ).setSAPOptimizationGoalAndCustomEventTypeFromDuplication(t, e);
            },
            r("AdsCampaignRecordAccessors").targeting.age_min.set(
              l
                ? o("AdsSmartPromotionConstants").DEFAULT_AGE_MIN
                : o("AdsSmartPromotionConstants")
                    .SMART_APP_PROMOTION_DEFAULT_MIN_AGE,
            ),
            function (e) {
              return o(
                "adsUEditorCampaignSapAttributionWindowUtil",
              ).sapAttributionWindowMutator(e);
            },
          )(a);
    }
    var u = e;
    l.default = u;
  },
  98,
);
