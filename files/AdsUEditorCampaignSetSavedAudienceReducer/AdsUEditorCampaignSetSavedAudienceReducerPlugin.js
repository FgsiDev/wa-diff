__d(
  "AdsUEditorCampaignSetSavedAudienceReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdvantageAudienceReducerUtils",
    "AdsAdvantageAudienceUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementTargetingFields",
    "AdsTargetingPGDIndividualSettingUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupBulkSelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetSavedAudienceActionFlux",
    "AdsUEditorCampaignSetSavedAudienceReducerUtils",
    "AdsUEditorHostIDs",
    "adsDSABeneficiaryAndPayorAutofillValuesSelector",
    "adsTargetingFlatPageSetIDsSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignTargetingAudienceDefaultSpecSelector",
    "adsUEditorCampaignTargetingDefaultMinAgeSelector",
    "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
    "maybeUpdateCampaignDSASpec",
    "maybeUpdateCampaignRegulationsSpec",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            bulkPromotedPageID: o(
              "AdsUEditorCampaignGroupBulkSelectors",
            ).selectorByCampaignGroupFn(
              o("AdsAPICampaignGroupRecordUtils").getPromotedObjectPageID,
            ),
            flatPageSetIDsLoadObject: r("adsTargetingFlatPageSetIDsSelector"),
            objectiveMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            adAccount: r("adsUEditorAccountSelector"),
            autofillValues: o("adsDSABeneficiaryAndPayorAutofillValuesSelector")
              .adsDSABeneficiaryAndPayorAutofillValuesSelector,
            defaultMinAge: r(
              "adsUEditorCampaignTargetingDefaultMinAgeSelector",
            ),
            defaultTargetingSpec: r(
              "adsUEditorCampaignTargetingAudienceDefaultSpecSelector",
            ),
            targetingTypeIsRetargeting: r(
              "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
            ),
          },
          function (e, t, n) {
            var a = n.adAccount,
              i = n.autofillValues,
              l = n.bulkPromotedPageID,
              s = n.defaultMinAge,
              u = n.defaultTargetingSpec,
              c = n.flatPageSetIDsLoadObject,
              d = n.objectiveMap,
              m = n.targetingTypeIsRetargeting;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var a = d.get(n, r("AdsAPIObjectives").NONE),
                  p = e.targeting || {};
                return o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").saved_audience_id.set(
                    t.savedAudienceID,
                  ),
                  r("AdsCampaignRecordAccessors").saved_audience.id.set(
                    t.savedAudienceID,
                  ),
                  r("AdsCampaignRecordAccessors").saved_audience.name.set(
                    t.savedAudienceName,
                  ),
                  function (e) {
                    return o(
                      "AdsUEditorCampaignSetSavedAudienceReducerUtils",
                    ).campaignSetTargeting({
                      campaign: e,
                      objective: a,
                      oldTargetingSpec: p,
                      newTargetingSpec: t.targetingSpec,
                      savedAudienceID: t.savedAudienceID,
                    });
                  },
                  function (e) {
                    if (t.resetTargetingRelaxation === !0)
                      switch (t.targetingRelaxationType) {
                        case "lookalike":
                          return r(
                            "AdsCampaignRecordAccessors",
                          ).targeting.targeting_relaxation_types.delete(e);
                        case "detailed_targeting":
                          return r(
                            "AdsCampaignRecordAccessors",
                          ).targeting.targeting_optimization.delete(e);
                        default:
                          return e;
                      }
                    else return e;
                  },
                  function (e) {
                    return t.enableTargetingRelaxation === !0
                      ? r(
                          "AdsCampaignRecordAccessors",
                        ).targeting.targeting_optimization.set(
                          "expansion_all",
                          e,
                        )
                      : e;
                  },
                  function (e) {
                    return t.enableAdvantageAudience === !0
                      ? o(
                          "AdsAdvantageAudienceReducerUtils",
                        ).setTargetingAutomationFlag(e, 1)
                      : e;
                  },
                  function (e) {
                    return t.initAgeRange === !0
                      ? o(
                          "AdsAdvantageAudienceReducerUtils",
                        ).turnAgeMinMaxIntoAgeRange(e, s, u)
                      : t.enableAdvantageAudience === !0
                        ? o(
                            "AdsAdvantageAudienceReducerUtils",
                          ).resetAgeMinAndAgeMax(e, s, u)
                        : e;
                  },
                  function (e) {
                    return o(
                      "AdsAdvantageAudienceReducerUtils",
                    ).maybeRemoveRetargetingOptions(
                      e,
                      o(
                        "AdsAdvantageAudienceUtils",
                      ).isAdvantageAudienceEnabledInTargetSpec(t.targetingSpec)
                        ? 1
                        : 0,
                      m,
                    );
                  },
                  function (e) {
                    return t.initAutomationIndividualSettings === !0
                      ? o(
                          "AdsTargetingPGDIndividualSettingUtils",
                        ).applyDefaultTargetingAutomationIndividualSetting(e)
                      : e;
                  },
                  function (e) {
                    return t.hostID === r("AdsUEditorHostIDs").CREATION
                      ? e
                      : r("AdsCampaignRecordAccessors").placement.set(
                          r("whitelistObjectKeys")(
                            p,
                            r("AdsPlacementTargetingFields"),
                          ),
                          e,
                        );
                  },
                  function (e) {
                    var n,
                      a,
                      s,
                      u,
                      d = o(
                        "AdsUEditorCampaignSetSavedAudienceReducerUtils",
                      ).setFlatPageSetIfRequired(
                        e,
                        l,
                        c,
                        ((n = t.targetingSpec) == null
                          ? void 0
                          : n.geo_locations) != null,
                      );
                    return (
                      (d = r("maybeUpdateCampaignDSASpec")(d, {
                        defaultDSABeneficiary: i.beneficiary,
                        defaultDSAPayor: i.payor,
                        locationApiSpec:
                          (a = d.targeting) == null ||
                          (a = a.geo_locations) == null
                            ? void 0
                            : a.toJS(),
                      })),
                      (d = r("maybeUpdateCampaignRegulationsSpec")(d, {
                        excludedLocations:
                          (s = d.targeting) == null ||
                          (s = s.excluded_geo_locations) == null
                            ? void 0
                            : s.toJS(),
                        includedLocations:
                          (u = d.targeting) == null ||
                          (u = u.geo_locations) == null
                            ? void 0
                            : u.toJS(),
                      })),
                      d
                    );
                  },
                )(e);
              },
            );
          },
          o("AdsUEditorCampaignSetSavedAudienceActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
