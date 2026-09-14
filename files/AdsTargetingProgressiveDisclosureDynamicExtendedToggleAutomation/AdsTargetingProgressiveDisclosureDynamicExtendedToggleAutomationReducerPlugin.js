__d(
  "AdsTargetingProgressiveDisclosureDynamicExtendedToggleAutomationReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAdvantageAudienceReducerUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsTargetingPGDIndividualSettingUtils",
    "AdsTargetingProgressiveDisclosureDynamicExtendedToggleAutomationActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingReducerUtils",
    "CapaUtils",
    "adsTargetingGetDefaultTargetingSpec",
    "adsTargetingRelaxationRolloutSelectors",
    "adsUEditorPcaUnificationSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a, i, l) {
        var e = t;
        !r("CapaUtils").shouldEnableCapaForCampaignWhenAdvantageTurnedOff(
          e,
          void 0,
          i,
        ) &&
          !r("CapaUtils").shouldEnableCapaL0ForCampaignWhenAdvantageTurnedOff(
            e,
            void 0,
            i,
            l,
          ) &&
          (e = r("AdsCampaignRecordAccessors").targeting.age_min.set(
            n.defaultMinAge,
            e,
          ));
        var s = 0;
        if (
          ((e = o(
            "AdsAdvantageAudienceReducerUtils",
          ).setTargetingAutomationFlag(e, s)),
          a)
        ) {
          var u;
          ((e = o(
            "AdsTargetingPGDIndividualSettingUtils",
          ).applyDisabledTargetingAutomationIndividualSettingAgeAndGender(e)),
            (e = (u = o(
              "AdsAdvantageAudienceReducerUtils",
            )).turnAgeRangeIntoAgeMinMax(e)),
            (e = u.setTargetingRelaxationFlags(e, s)),
            (e = u.setTargetingAsSignalFlag(e, s, a)),
            (e = u.setTargetingOptimizationFlag(e, s)));
        } else
          n.isInUpperFunnelUXHarmonizationQE === !0
            ? (e = o(
                "AdsTargetingPGDIndividualSettingUtils",
              ).applyDisabledTargetingAutomationIndividualSettingForUpperFunnel(
                e,
              ))
            : (e = o(
                "AdsTargetingPGDIndividualSettingUtils",
              ).applyDefaultTargetingAutomationIndividualSetting(e));
        return (
          (r("CapaUtils").shouldEnableCapaForCampaignWhenAdvantageTurnedOff(
            e,
            void 0,
            i,
          ) ||
            r("CapaUtils").shouldEnableCapaL0ForCampaignWhenAdvantageTurnedOff(
              e,
              void 0,
              i,
              l,
            )) &&
            (e = o(
              "AdsUEditorCampaignSetTargetingAutomationCreativeAudiencePairingReducerUtils",
            ).updateCampaignCreativeAudiencePairing(e, 1)),
          e
        );
      },
      s = function (t, n) {
        var e,
          a = t,
          i = 1,
          l = r(
            "AdsCampaignRecordAccessors",
          ).targeting.product_audience_specs.get(a);
        a = o("AdsAdvantageAudienceReducerUtils").maybeRemoveRetargetingOptions(
          a,
          i,
          l != null,
        );
        var s =
          (e = r(
            "AdsCampaignRecordAccessors",
          ).targeting.targeting_automation.individual_setting.age.get(a)) !=
          null
            ? e
            : 0;
        return (
          s === 0 &&
            !r("CapaUtils").isCapaEnabledInCampaign(a) &&
            !r("CapaUtils").isCapaL0EnabledInCampaign(a) &&
            (a = o(
              "AdsAdvantageAudienceReducerUtils",
            ).turnAgeMinMaxIntoAgeRange(
              a,
              n.defaultMinAge,
              n.defaultTargetingSpec,
            )),
          (a = o(
            "AdsAdvantageAudienceReducerUtils",
          ).maybeRemoveLookalikeAudiences(a, i)),
          (a = o(
            "AdsAdvantageAudienceReducerUtils",
          ).maybeRemoveDetailedTargetingExclusions(a, i)),
          (a = o(
            "AdsAdvantageAudienceReducerUtils",
          ).setTargetingOptimizationFlag(a, i)),
          (a = o(
            "AdsAdvantageAudienceReducerUtils",
          ).setTargetingRelaxationFlags(a, i)),
          (a = o("AdsAdvantageAudienceReducerUtils").setTargetingAutomationFlag(
            a,
            i,
          )),
          (a = o(
            "AdsAdvantageAudienceReducerUtils",
          ).maybeDeleteCreativeAudiencePairing(a, i)),
          o(
            "AdsTargetingPGDIndividualSettingUtils",
          ).applyDefaultTargetingAutomationIndividualSetting(a)
        );
      },
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            objectiveMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            isL3ProductCatalogPresent: o("adsUEditorPcaUnificationSelectors")
              .isL3ProductCatalogPresentSelector,
          },
          function (t, n, a) {
            var i = a.isL3ProductCatalogPresent,
              l = a.objectiveMap;
            return o("AdsMutators").mutateEach(
              t,
              n.campaignIDs,
              function (t, a) {
                var u = l.get(a, r("AdsAPIObjectives").NONE);
                return o("AdsMutators").chain(function (t) {
                  var r =
                      t.targeting != null
                        ? o(
                            "adsTargetingGetDefaultTargetingSpec",
                          ).getMinLegallyViableAgeForTargetingCountries(
                            t.targeting,
                          )
                        : n.defaultMinAge,
                    a = babelHelpers.extends({}, n, {
                      defaultMinAge: r < n.defaultMinAge ? n.defaultMinAge : r,
                    });
                  return o(
                    "AdsAdvantageAudienceReducerUtils",
                  ).isAdvantageAudienceEnabled(t) ||
                    n.isE2ECampaignEligibleForAutomation
                    ? e(
                        t,
                        a,
                        o(
                          "adsTargetingRelaxationRolloutSelectors",
                        ).passesEnableAutomationForPharmaAdvertiser(),
                        u,
                        i,
                      )
                    : s(t, a);
                }, o("AdsAdvantageAudienceReducerUtils").maybeRemoveSavedAudience)(
                  t,
                );
              },
            );
          },
          r(
            "AdsTargetingProgressiveDisclosureDynamicExtendedToggleAutomationActionFlux",
          ).actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
