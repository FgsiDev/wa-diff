__d(
  "AdsUEditorCampaignTargetingResetGenderForRegulatedCategoriesReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsHECAdvantageAudienceUtils",
    "AdsMutators",
    "AdsRegulatedCategory",
    "AdsRegulatedCategoryConstants",
    "AdsTargetingAsSignalUtils",
    "AdsTargetingPGDIndividualSettingUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingResetGenderForRegulatedCategoriesActionFlux",
    "adsTargetingPGDIsEligibleForIndividualSetting",
    "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {
            objectiveMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective,
            ),
            targetingTypeIsRetargeting: r(
              "adsUEditorProductAudienceBulkTargetingTypeIsRetargetingSelector",
            ),
          },
          function (e, t, n) {
            var a,
              i,
              l = n.objectiveMap,
              s = n.targetingTypeIsRetargeting,
              u = t.campaignIDs,
              c =
                (a = t == null ? void 0 : t.regulatedCategories) != null
                  ? a
                  : [],
              d =
                (i = t == null ? void 0 : t.safrGenderConfig) != null
                  ? i
                  : null;
            return u == null ||
              t.hostID == null ||
              c == null ||
              !o("AdsTargetingAsSignalUtils").isCampaignGroupRegulated(c) ||
              d == null ||
              c.every(function (e) {
                return (
                  o(
                    "AdsRegulatedCategoryConstants",
                  ).AdsRegulatedCategorySIEPCategories.includes(e) ||
                  e === r("AdsRegulatedCategory").NONE
                );
              }) ||
              !o(
                "AdsHECAdvantageAudienceUtils",
              ).getAdAccountPassesHEFAutomationUnificationGK() ||
              d.is_enabled
              ? e
              : o("AdsMutators").mutateEach(e, u, function (e, t) {
                  var n = l.get(t, r("AdsAPIObjectives").NONE);
                  return n != null &&
                    !r("adsTargetingPGDIsEligibleForIndividualSetting")(n, c, s)
                    ? e
                    : o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").targeting.genders.set(
                          r("immutable").List(),
                        ),
                        o(
                          "AdsTargetingPGDIndividualSettingUtils",
                        ).maybeEnableIndividualSettingGender([]),
                      )(e);
                });
          },
          r(
            "AdsUEditorCampaignTargetingResetGenderForRegulatedCategoriesActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
