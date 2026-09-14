__d(
  "AdsTargetingPGDIndividualSettingUtils",
  [
    "AdsAPIObjectives",
    "AdsAdvantageAudienceReducerUtils",
    "AdsCampaignRecordAccessors",
    "AdsHECAdvantageAudienceUtils",
    "AdsInterfacesLogger",
    "AdsLeadGenAutomationBrandingQEUtils",
    "AdsMutators",
    "AdsProgressiveDisclosureUnifiedEngagementVariation",
    "AdsProgressiveDisclosureUtils",
    "AdsScalingPGDBundle1AwarenessExperimentUtils",
    "AdsScalingPGDBundle1TrafficExperimentUtils",
    "AdsTargetingAsSignalUtils",
    "AdsTargetingConstants",
    "AdsValidationConsts",
    "EngagementUnitificationGating",
    "adsCommonTargetingGetDefaultCountry",
    "adsReconcileDeviceIndividualSetting",
    "adsTargetingGetDefaultTargetingSpec",
    "adsTargetingPGDIsEligibleForIndividualSetting",
    "adsTargetingPGDIsIndividualSettingCampaign",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = r("AdsCampaignRecordAccessors").targeting_as_signal.get(t);
        return e == null
          ? t
          : e === 3
            ? r("AdsCampaignRecordAccessors").targeting_as_signal.set(2, t)
            : e === 1
              ? r("AdsCampaignRecordAccessors").targeting_as_signal.delete(t)
              : t;
      },
      s = [
        ["age", 1],
        ["gender", 1],
      ],
      u = r("gkx")("1943"),
      c = r("gkx")("21293"),
      d = function (t, n, o) {
        return n &&
          r(
            "AdsCampaignRecordAccessors",
          ).targeting.targeting_automation.individual_setting[t].get(o) === 0
          ? r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.individual_setting[t].set(1, o)
          : o;
      },
      m = function (t) {
        return function (e) {
          var n = r("gkx")("1943"),
            a =
              (t.length === 0 ||
                t[0] === o("AdsTargetingConstants").GENDERS.All) &&
              !n;
          return d("gender", a, e);
        };
      },
      p = function (t, n, a) {
        return function (e) {
          if (n == null) return e;
          var i = r("gkx")("1943"),
            l = t === n && a === r("AdsValidationConsts").maxAge && !i;
          return o("AdsMutators").chain(
            function (e) {
              return d("age", l, e);
            },
            function (e) {
              return l
                ? o(
                    "AdsAdvantageAudienceReducerUtils",
                  ).turnAgeMinMaxIntoAgeRange(e, n)
                : e;
            },
          )(e);
        };
      },
      _ = function (t, n) {
        return function (e) {
          if (n == null) return e;
          if (
            r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.individual_setting.age.get(e) ===
              1 &&
            t < n
          ) {
            var a;
            return o("AdsMutators").chain(
              r(
                "AdsCampaignRecordAccessors",
              ).targeting.targeting_automation.individual_setting.age.set(0),
              r("AdsCampaignRecordAccessors").targeting.age_min.set(
                (a = r("AdsCampaignRecordAccessors").targeting.age_range.get(
                  e,
                )) == null
                  ? void 0
                  : a.first(),
              ),
              o("AdsAdvantageAudienceReducerUtils").turnAgeRangeIntoAgeMinMax,
            )(e);
          }
          return e;
        };
      },
      f = function (t) {
        return o("AdsMutators").chain.apply(
          o("AdsMutators"),
          s.map(function (e) {
            var t = e[0],
              n = e[1];
            return r(
              "AdsCampaignRecordAccessors",
            ).targeting.targeting_automation.individual_setting[t].set(n);
          }),
        )(t);
      },
      g = function (t) {
        return o("AdsMutators").chain(
          r(
            "AdsCampaignRecordAccessors",
          ).targeting.targeting_automation.individual_setting.age.set(0),
          r(
            "AdsCampaignRecordAccessors",
          ).targeting.targeting_automation.individual_setting.gender.set(0),
        )(t);
      },
      h = function (t) {
        return function (e) {
          if (
            !o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(t) ||
            o(
              "AdsHECAdvantageAudienceUtils",
            ).isCampaignGroupRegulatedAndIneligibleForAutomationUnification(t)
          )
            return e;
          var n = r(
            "AdsCampaignRecordAccessors",
          ).targeting.targeting_automation.individual_setting.device.delete(e);
          return o(
            "AdsHECAdvantageAudienceUtils",
          ).isCampaignGroupRegulatedAndEligibleForBroadGeo(t)
            ? n
            : o("AdsMutators").chain(
                r(
                  "AdsCampaignRecordAccessors",
                ).targeting.targeting_automation.individual_setting.geo.set(0),
              )(n);
        };
      },
      y = function (n) {
        var t;
        return o("AdsMutators").chain(
          (t = r(
            "AdsCampaignRecordAccessors",
          )).targeting.targeting_automation.individual_setting.age.set(0),
          t.targeting.targeting_automation.individual_setting.gender.set(0),
          t.targeting.targeting_automation.individual_setting.detailed_targeting.set(
            0,
          ),
          t.targeting.targeting_optimization.set("none"),
          e,
        )(n);
      };
    function C(e, t) {
      var n = o(
        "AdsProgressiveDisclosureUtils",
      ).getProgressiveDisclosureUnifiedAppSalesVariation(e, !1);
      return [
        n != null &&
        (t === r("AdsAPIObjectives").APP_INSTALLS ||
          t === r("AdsAPIObjectives").OUTCOME_SALES)
          ? n
          : null,
      ].some(
        o("AdsProgressiveDisclosureUtils")
          .getIsProgressiveDisclosureTestVariation,
      );
    }
    function b() {
      return [
        o(
          "AdsLeadGenAutomationBrandingQEUtils",
        ).getTargetingPGDVariationForLeadGenAutomationBrandingExp(!1, !1),
      ].some(
        o("AdsProgressiveDisclosureUtils")
          .getIsProgressiveDisclosureTestVariation,
      );
    }
    function v(e) {
      return (
        [
          o(
            "AdsProgressiveDisclosureUnifiedEngagementVariation",
          ).getProgressiveDisclosureUnifiedEngagementVariation(!1, e),
        ].some(
          o("AdsProgressiveDisclosureUtils")
            .getIsProgressiveDisclosureTestVariation,
        ) ||
        o("EngagementUnitificationGating").getEULaunch1AudienceExperiment(!1)
      );
    }
    var S = function (t, n, a, i, l) {
      if (t != null && a != null) {
        var e = !1;
        switch (a) {
          case r("AdsAPIObjectives").APP_INSTALLS:
          case r("AdsAPIObjectives").OUTCOME_SALES:
            e = C(t, a);
            break;
          case r("AdsAPIObjectives").OUTCOME_LEADS:
          case r("AdsAPIObjectives").LEAD_GENERATION:
            e = b();
            break;
          case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
            e = v(t.account_id);
            break;
          default:
            e = !1;
        }
        if (
          (o(
            "AdsScalingPGDBundle1AwarenessExperimentUtils",
          ).isAwarenessObjective(a)
            ? (e = o("AdsScalingPGDBundle1AwarenessExperimentUtils").isTest({
                logExposure: !1,
              }))
            : o(
                "AdsScalingPGDBundle1TrafficExperimentUtils",
              ).isTrafficObjective(a) &&
              (e = o("AdsScalingPGDBundle1TrafficExperimentUtils").isTest({
                logExposure: !1,
              })),
          (!c || u) &&
            e &&
            r("adsTargetingPGDIsEligibleForIndividualSetting")(a, i, l))
        )
          return (
            r("AdsInterfacesLogger").log({
              eventName:
                "ads_progressive_disclosure_individual_settings_toggle",
              data: { is_enabled: !0, message: i },
            }),
            u
              ? o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsAdvantageAudienceReducerUtils",
                    ).setTargetingAutomationFlag(e, 0);
                  },
                  g,
                  o("AdsAdvantageAudienceReducerUtils")
                    .turnAgeRangeIntoAgeMinMax,
                  h(i),
                )(n)
              : o("AdsMutators").chain(
                  function (e) {
                    return o(
                      "AdsProgressiveDisclosureUtils",
                    ).getIsTargetingProgressiveDisclosureTestVariation(t, a)
                      ? o(
                          "AdsAdvantageAudienceReducerUtils",
                        ).setTargetingAutomationFlag(e, 1)
                      : o(
                          "AdsAdvantageAudienceReducerUtils",
                        ).maybeDisableAdvantageAudience(e);
                  },
                  f,
                  r("adsReconcileDeviceIndividualSetting")(a),
                  function (e) {
                    return o(
                      "AdsAdvantageAudienceReducerUtils",
                    ).turnAgeMinMaxIntoAgeRange(
                      e,
                      o("adsTargetingGetDefaultTargetingSpec").getCountryMinAge(
                        r("adsCommonTargetingGetDefaultCountry")(t),
                      ),
                    );
                  },
                  h(i),
                )(n)
          );
      }
      return o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(i)
        ? o("AdsAdvantageAudienceReducerUtils").isAdvantageAudienceEnabled(n) &&
          o(
            "AdsHECAdvantageAudienceUtils",
          ).isCampaignGroupRegulatedAndEligibleForAdvantageAudience(i)
          ? o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").targeting.targeting_automation
                .individual_setting.delete,
            )(n)
          : o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").targeting.targeting_automation
                .individual_setting.delete,
              o("AdsAdvantageAudienceReducerUtils")
                .maybeRemoveAutomationFromSpecIfEmpty,
              o("AdsAdvantageAudienceReducerUtils").turnAgeRangeIntoAgeMinMax,
            )(n)
        : r("adsTargetingPGDIsIndividualSettingCampaign")(n)
          ? (r("AdsInterfacesLogger").log({
              eventName:
                "ads_progressive_disclosure_individual_settings_toggle",
              data: { is_enabled: !1, message: i },
            }),
            o("AdsMutators").chain(
              r("AdsCampaignRecordAccessors").targeting.targeting_automation
                .individual_setting.delete,
              o("AdsAdvantageAudienceReducerUtils")
                .maybeRemoveAutomationFromSpecIfEmpty,
              o("AdsAdvantageAudienceReducerUtils").turnAgeRangeIntoAgeMinMax,
            )(n))
          : n;
    };
    ((l.maybeEnableIndividualSettingGender = m),
      (l.maybeEnableIndividualSettingAge = p),
      (l.maybeDisableIndividualSettingAge = _),
      (l.applyDefaultTargetingAutomationIndividualSetting = f),
      (l.applyDisabledTargetingAutomationIndividualSettingAgeAndGender = g),
      (l.maybeDisableIndividualSettingsForAUEligibleRegulatedCategories = h),
      (l.applyDisabledTargetingAutomationIndividualSettingForUpperFunnel = y),
      (l.maybeApplyTargetingAutomationIndividualSetting = S));
  },
  98,
);
