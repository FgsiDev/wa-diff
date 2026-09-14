__d(
  "AdsCampaignBulkEditActionHandlersMutators",
  [
    "AdsBulkEditCAAPInitFinServRegionalRegulatoryCategoriesActionHandler",
    "AdsBulkEditChangeCustomAudienceDataActionHandler",
    "AdsCampaignBulkEditAddMultiplePlacementsActionHandler",
    "AdsCampaignBulkEditAddRegionalRegulatoryCategoriesActionHandler",
    "AdsCampaignBulkEditPlacementAddActionHandler",
    "AdsCampaignBulkEditPlacementRemoveActionHandler",
    "AdsCampaignBulkEditPlacementResetActionHandler",
    "AdsCampaignBulkEditRemoveMultiplePlacementsActionHandler",
    "AdsCampaignBulkEditRemoveRegionalRegulatoryCategoriesActionHandler",
    "AdsCampaignBulkEditSetBeneficiaryAndPayorActionHandler",
    "AdsCampaignBulkEditSetDevicePlatformsActionHandler",
    "AdsCampaignBulkEditSetGoalEngagedAudiencesAudienceLabelExclusionsActionHandler",
    "AdsCampaignBulkEditSetGoalEngagedAudiencesExclusionsActionHandler",
    "AdsCampaignBulkEditSetGoalEngagedAudiencesInclusionsActionHandler",
    "AdsCampaignBulkEditSetGoalExclusionAutoSelectionStateActionHandler",
    "AdsCampaignBulkEditSetGoalExistingCustomersAudienceLabelExclusionsActionHandler",
    "AdsCampaignBulkEditSetGoalExistingCustomersAutoExclusionRetentionDaysActionHandler",
    "AdsCampaignBulkEditSetGoalExistingCustomersExclusionsActionHandler",
    "AdsCampaignBulkEditSetGoalExistingCustomersInclusionsActionHandler",
    "AdsCampaignBulkEditSetGoalIsCAExpansionEnabledActionHandler",
    "AdsCampaignBulkEditSetGoalIsLookalikeInclusionEnabledActionHandler",
    "AdsCampaignBulkEditSetGoalLookalikeInclusionsActionHandler",
    "AdsCampaignBulkEditSetGoalTypeActionHandler",
    "AdsCampaignBulkEditSetIndiaFinServRegulatoryCategoryActionHandler",
    "AdsCampaignBulkEditSetMessagingStructuredLeadSpecActionHandler",
    "AdsCampaignBulkEditSetMobileDeviceTypesActionHandler",
    "AdsCampaignBulkEditSetPixelIDActionHandler",
    "AdsCampaignBulkEditSetRegionalRegulationIdentityInfoActionHandler",
    "AdsCampaignBulkEditStore",
    "AdsDataAtom",
    "AdsSelectorUtils",
    "AdsUEditorHostIDs",
    "AdsUEditorUtils",
    "adsBulkEditGetCampaignContext",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "createObjectBy",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("createObjectBy")(
        [
          r("AdsCampaignBulkEditSetDevicePlatformsActionHandler"),
          r("AdsCampaignBulkEditSetMobileDeviceTypesActionHandler"),
          r("AdsCampaignBulkEditPlacementAddActionHandler"),
          r("AdsCampaignBulkEditPlacementRemoveActionHandler"),
          r("AdsCampaignBulkEditAddMultiplePlacementsActionHandler"),
          r("AdsCampaignBulkEditRemoveMultiplePlacementsActionHandler"),
          r("AdsCampaignBulkEditPlacementResetActionHandler"),
          r("AdsCampaignBulkEditSetPixelIDActionHandler"),
          r("AdsBulkEditChangeCustomAudienceDataActionHandler"),
          r("AdsCampaignBulkEditSetBeneficiaryAndPayorActionHandler"),
          r("AdsCampaignBulkEditAddRegionalRegulatoryCategoriesActionHandler"),
          r(
            "AdsCampaignBulkEditRemoveRegionalRegulatoryCategoriesActionHandler",
          ),
          r(
            "AdsCampaignBulkEditSetIndiaFinServRegulatoryCategoryActionHandler",
          ),
          r(
            "AdsCampaignBulkEditSetRegionalRegulationIdentityInfoActionHandler",
          ),
          r(
            "AdsBulkEditCAAPInitFinServRegionalRegulatoryCategoriesActionHandler",
          ),
          r("AdsCampaignBulkEditSetGoalTypeActionHandler"),
          r(
            "AdsCampaignBulkEditSetGoalExistingCustomersExclusionsActionHandler",
          ),
          r(
            "AdsCampaignBulkEditSetGoalExistingCustomersAudienceLabelExclusionsActionHandler",
          ),
          r(
            "AdsCampaignBulkEditSetGoalExistingCustomersInclusionsActionHandler",
          ),
          r(
            "AdsCampaignBulkEditSetGoalEngagedAudiencesExclusionsActionHandler",
          ),
          r(
            "AdsCampaignBulkEditSetGoalEngagedAudiencesAudienceLabelExclusionsActionHandler",
          ),
          r(
            "AdsCampaignBulkEditSetGoalEngagedAudiencesInclusionsActionHandler",
          ),
          r("AdsCampaignBulkEditSetGoalIsCAExpansionEnabledActionHandler"),
          r(
            "AdsCampaignBulkEditSetGoalExistingCustomersAutoExclusionRetentionDaysActionHandler",
          ),
          r(
            "AdsCampaignBulkEditSetGoalExclusionAutoSelectionStateActionHandler",
          ),
          r(
            "AdsCampaignBulkEditSetGoalIsLookalikeInclusionEnabledActionHandler",
          ),
          r("AdsCampaignBulkEditSetGoalLookalikeInclusionsActionHandler"),
          r("AdsCampaignBulkEditSetMessagingStructuredLeadSpecActionHandler"),
        ],
        function (e) {
          return e.type;
        },
      ),
      c = r("adsCreateSelector")([], r("emptyFunction"), {
        name: i.id + ".emptySelector",
      });
    function d(t, a) {
      var l = a.action,
        d = u[l.type];
      if (
        d &&
        o("AdsUEditorUtils").shouldHostHandleAction(
          l,
          r("AdsUEditorHostIDs").BULK_EDIT_DIALOG,
        )
      ) {
        var m,
          p = d.fluxInputs,
          _ = p ? r("adsCreateStructuredSelector")(p, i.id) : c,
          f = r("adsBulkEditGetCampaignContext")(
            (m = l.adObjectIDs) != null ? m : [],
          ),
          g = n("AdsCampaignBulkEditStore"),
          h = (s || (s = o("AdsSelectorUtils")))
            .getStoreDispatchTokens([_], f)
            .filter(function (e) {
              return e !== g.getDispatchToken();
            });
        return (
          (e || (e = r("AdsDataAtom"))).waitFor(h),
          d
            .mutate(l, t, _(f))
            .merge({
              capturedActionDispatches: t.capturedActionDispatches.push(
                babelHelpers.extends({}, l, { actionType: d.type }),
              ),
            })
        );
      }
      return t;
    }
    l.reduce = d;
  },
  98,
);
