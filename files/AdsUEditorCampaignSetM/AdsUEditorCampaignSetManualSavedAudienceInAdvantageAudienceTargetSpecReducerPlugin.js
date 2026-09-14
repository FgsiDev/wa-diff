__d(
  "AdsUEditorCampaignSetManualSavedAudienceInAdvantageAudienceTargetSpecReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdvantageAudienceReducerUtils",
    "AdsAudienceMode",
    "AdsCampaignRecordAccessors",
    "AdsLeadGenAutomationBrandingQEUtils",
    "AdsMutators",
    "AdsProgressiveDisclosureUtils",
    "AdsScalingPGDBundle1AwarenessExperimentUtils",
    "AdsScalingPGDBundle1TrafficExperimentUtils",
    "AdsTargetingPGDIndividualSettingUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupBulkSelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetSavedAudienceReducerUtils",
    "AdsUEditorSelectManualSavedAudienceInAdvantageAudienceActionFlux",
    "WAMOUnknownAgeUtils",
    "adsDSABeneficiaryAndPayorAutofillValuesSelector",
    "adsTargetingFlatPageSetIDsSelector",
    "adsTargetingRelaxationRolloutSelectors",
    "adsUEditorAccountSelector",
    "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
    "getOnlyMessageMarketingCustomAudiences",
    "gkx",
    "isMessageMarketingChannelSetFromCampaign",
    "isMessageMarketingEnabledFromCampaign",
    "maybeUpdateCampaignDSASpec",
    "maybeUpdateCampaignRegulationsSpec",
    "restoreMessageMarketingAudiencesAndPlacementCampaignMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            adAccount: r("adsUEditorAccountSelector"),
            bulkPromotedPageID: o(
              "AdsUEditorCampaignGroupBulkSelectors",
            ).selectorByCampaignGroupFn(
              o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID,
            ),
            flatPageSetIDsLoadObject: r("adsTargetingFlatPageSetIDsSelector"),
            campaignIDToRegulatedCategoriesMap: (e = o(
              "AdsUEditorCampaignSelectors",
            )).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getRegulatedCategories,
            ),
            objectiveMap: e.adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            targetingTypeIsRetargeting: r(
              "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
            ),
            campaignIDToBuyingTypeMap: e.adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getBuyingType,
            ),
            accountInfo: r("adsUEditorAccountSelector"),
            autofillValues: o("adsDSABeneficiaryAndPayorAutofillValuesSelector")
              .adsDSABeneficiaryAndPayorAutofillValuesSelector,
            eligibilityInformation: e.eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.accountInfo,
              i = n.adAccount,
              l = n.autofillValues,
              s = n.bulkPromotedPageID,
              c = n.campaignIDToBuyingTypeMap,
              d = n.campaignIDToRegulatedCategoriesMap,
              m = n.eligibilityInformation,
              p = n.flatPageSetIDsLoadObject,
              _ = n.objectiveMap,
              f = n.targetingTypeIsRetargeting;
            return t.campaignIDs == null || t.hostID == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, n) {
                  var i,
                    g = _.get(n, r("AdsAPIObjectives").NONE),
                    h = (i = d.get(n)) == null ? void 0 : i.toArray(),
                    y = r("gkx")("13496")
                      ? o(
                          "isMessageMarketingChannelSetFromCampaign",
                        ).isMessageMarketingChannelSetFromCampaign(e)
                      : !1,
                    C = y ? u(e) : null;
                  return (
                    o(
                      "WAMOUnknownAgeUtils",
                    ).updateUnknownAgeForSetManualSavedAudienceInAdvantageAudienceTargetSpec(
                      e,
                      t.savedAudience,
                      m,
                      t.hostID,
                    ),
                    o("AdsMutators").chain(
                      function (e) {
                        return o(
                          "AdsUEditorCampaignSetSavedAudienceReducerUtils",
                        ).campaignSetTargeting({
                          campaign: e,
                          objective: g,
                          oldTargetingSpec: e.targeting,
                          newTargetingSpec: t.savedAudience.targeting,
                          savedAudienceID: null,
                        });
                      },
                      function (e) {
                        var t;
                        return r("maybeUpdateCampaignDSASpec")(e, {
                          defaultDSABeneficiary: l.beneficiary,
                          defaultDSAPayor: l.payor,
                          locationApiSpec:
                            (t = e.targeting) == null ||
                            (t = t.geo_locations) == null
                              ? void 0
                              : t.toJS(),
                        });
                      },
                      function (e) {
                        var t, n;
                        return r("maybeUpdateCampaignRegulationsSpec")(e, {
                          excludedLocations:
                            (t = e.targeting) == null ||
                            (t = t.excluded_geo_locations) == null
                              ? void 0
                              : t.toJS(),
                          includedLocations:
                            (n = e.targeting) == null ||
                            (n = n.geo_locations) == null
                              ? void 0
                              : n.toJS(),
                        });
                      },
                      r("AdsCampaignRecordAccessors").saved_audience_id.set(
                        null,
                      ),
                      r("AdsCampaignRecordAccessors").saved_audience.set(null),
                      function (e) {
                        return o(
                          "AdsAdvantageAudienceReducerUtils",
                        ).setAdvantageAudienceAndRelatedEffectsOnSpec({
                          campaign: e,
                          bulkPromotedPageID: s,
                          flatPageSetIDsLoadObject: p,
                          regulatedCategories: h,
                          targetingSpec: t.defaultTargetingSpec,
                          targetingAutomationFromAction: {
                            advantage_audience: 1,
                          },
                          deleteAutomation: !1,
                          targetingTypeIsRetargeting: f,
                          buyingType: c.get(n),
                          canUseAdvantageAudience: !0,
                          accountInfo: a,
                          defaultMinAge: t.defaultMinAge,
                          enableAutomationForPharmaAdvertiser: o(
                            "adsTargetingRelaxationRolloutSelectors",
                          ).passesEnableAutomationForPharmaAdvertiser(),
                        });
                      },
                      function (e) {
                        return o(
                          "AdsProgressiveDisclosureUtils",
                        ).getIsProgressiveDisclosureUnifiedAppSalesTestVariationWithoutLog(
                          g,
                        ) ||
                          o(
                            "AdsLeadGenAutomationBrandingQEUtils",
                          ).getIsPGDLeadGenAutomationBrandingExpVariationWithoutLog(
                            g,
                          ) ||
                          o(
                            "AdsScalingPGDBundle1AwarenessExperimentUtils",
                          ).isEligibleAndTest(g, { logExposure: !1 }) ||
                          o(
                            "AdsScalingPGDBundle1TrafficExperimentUtils",
                          ).isEligibleAndTest(g, { logExposure: !1 })
                          ? o(
                              "AdsTargetingPGDIndividualSettingUtils",
                            ).applyDefaultTargetingAutomationIndividualSetting(
                              e,
                            )
                          : e;
                      },
                      function (e) {
                        var t;
                        return y
                          ? r(
                              "restoreMessageMarketingAudiencesAndPlacementCampaignMutator",
                            )(
                              e,
                              m,
                              C == null ? void 0 : C.phoneNumberID,
                              C == null ? void 0 : C.whatsAppSubscriberPoolID,
                              C == null ? void 0 : C.includedCustomAudiences,
                              C == null ? void 0 : C.excludedCustomAudiences,
                              (t = C == null ? void 0 : C.isPlacementEnabled) !=
                                null
                                ? t
                                : !1,
                            )
                          : e;
                      },
                    )(e)
                  );
                });
          },
          r("AdsUEditorSelectManualSavedAudienceInAdvantageAudienceActionFlux")
            .actionType,
        ),
      };
    function u(e) {
      var t, n;
      return {
        phoneNumberID:
          (t = e.targeting) == null ||
          (t = t.subscriber_universe) == null ||
          (t = t.whatsapp_subscriber_source) == null
            ? void 0
            : t.id,
        whatsAppSubscriberPoolID:
          (n = e.targeting) == null ||
          (n = n.subscriber_universe) == null ||
          (n = n.whatsapp_subscriber_pool) == null
            ? void 0
            : n.id,
        includedCustomAudiences: o(
          "getOnlyMessageMarketingCustomAudiences",
        ).getOnlyMessageMarketingCustomAudiences(
          e,
          r("AdsAudienceMode").INCLUDE,
        ),
        excludedCustomAudiences: o(
          "getOnlyMessageMarketingCustomAudiences",
        ).getOnlyMessageMarketingCustomAudiences(
          e,
          r("AdsAudienceMode").EXCLUDE,
        ),
        isPlacementEnabled: o(
          "isMessageMarketingEnabledFromCampaign",
        ).isMessageMarketingEnabledFromCampaign(e),
      };
    }
    var c = s;
    l.default = c;
  },
  98,
);
