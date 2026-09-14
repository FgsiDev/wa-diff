__d(
  "AdsPELoggerGetExtraSetActionLoggingParams",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPICampaignGroupPaths",
    "AdsAPICampaignPaths",
    "AdsAdgroupBulkEditApplyChangesDataActionFlux",
    "AdsAdgroupBulkEditColumnKeys",
    "AdsAdgroupInstantPublishNameFieldActionFlux",
    "AdsAdgroupReplaceInDataActionFlux",
    "AdsBulkEditOpenAllCampaignBudgetsDialogDataActionFlux",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGroupBudgetLoggingUtils",
    "AdsCampaignGroupBulkEditApplyChangesDataActionFlux",
    "AdsCampaignGroupBulkEditColumnKeys",
    "AdsCampaignGroupReplaceInDataActionFlux",
    "AdsCampaignGroupSetAdLabelsDataActionFlux",
    "AdsPEAdgroupLiveStatusChangeActionFlux",
    "AdsPECampaignGroupLiveStatusChangeActionFlux",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsPELoggerUtils",
    "AdsPublishSourceTypes",
    "AdsSmartPromotionTypeUtils",
    "AdsUEditorAdgroupSetNameDataActionFlux",
    "AdsUEditorCampaignBulkEditApplyChangesActionFlux",
    "AdsUEditorCampaignBulkSetNameActionFlux",
    "AdsUEditorCampaignChangeExistingUserBudgetPercentageActionFlux",
    "AdsUEditorCampaignDeliveryChangeBudgetAmountActionFlux",
    "AdsUEditorCampaignDeliveryChangeScheduleActionFlux",
    "AdsUEditorCampaignGroupBulkSetNameActionFlux",
    "AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux",
    "AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux",
    "AdsUEditorCampaignGroupSetNameActionFlux",
    "AdsUEditorCampaignGroupSetRegulatedCategoryActionFlux",
    "AdsUEditorCampaignInstantPublishBidFieldActionFlux",
    "AdsUEditorCampaignInstantPublishBudgetFieldActionFlux",
    "AdsUEditorCampaignInstantPublishNameFieldActionFlux",
    "AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux",
    "AdsUEditorCampaignInstantPublishScheduleFieldActionFlux",
    "AdsUEditorCampaignReplaceInActionFlux",
    "AdsUEditorCampaignSetBudgetActionFlux",
    "AdsUEditorCampaignSetDeliveryActionFlux",
    "AdsUEditorCampaignSetNameActionFlux",
    "AdsUEditorCampaignSetTargetingSpecActionFlux",
    "AdsUEditorPECampaignLiveStatusChangeActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.changedColumnsByRowMap.values();
      for (var n of t)
        for (var o of n) {
          if (o === r("AdsAdgroupBulkEditColumnKeys").ADGROUP_NAME)
            return r("AdsAPIAdgroupPaths").NAME;
          if (o === r("AdsCampaignBulkEditColumnKeys").CAMPAIGN_NAME)
            return r("AdsAPICampaignPaths").NAME;
          if (o === r("AdsCampaignGroupBulkEditColumnKeys").CAMPAIGN_GROUP_NAME)
            return r("AdsAPICampaignGroupPaths").NAME;
        }
      return [];
    }
    function s(e) {
      return e.actionType ===
        o("AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux").actionType
        ? {
            object_ids: e.campaignGroupIDs,
            event_source: r("AdsPublishSourceTypes").TABLE,
            new_value: e.name,
            old_value: e.oldName,
          }
        : e.actionType ===
            o("AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux")
              .actionType
          ? {
              object_ids: e.campaignGroupIDs,
              event_source: r("AdsPublishSourceTypes").TABLE,
              new_value: e.budgetAmount,
              old_value: e.oldBudget,
            }
          : e.actionType ===
              o("AdsAdgroupInstantPublishNameFieldActionFlux").actionType
            ? {
                object_ids: e.ids,
                event_source: r("AdsPublishSourceTypes").TABLE,
                new_value: e.name,
                old_value: e.oldName,
              }
            : e.actionType ===
                o("AdsUEditorCampaignInstantPublishBidFieldActionFlux")
                  .actionType
              ? {
                  object_ids: e.campaignIDs,
                  event_source: r("AdsPublishSourceTypes").TABLE,
                  new_value: e.bidAmount,
                  old_value: e.oldBidAmount,
                }
              : e.actionType ===
                  o(
                    "AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux",
                  ).actionType
                ? {
                    object_ids: e.campaignIDs,
                    event_source: r("AdsPublishSourceTypes").TABLE,
                    new_value: e.optimizationGoal,
                  }
                : e.actionType ===
                    o("AdsPECampaignGroupLiveStatusChangeActionFlux").actionType
                  ? {
                      object_ids: e.ids,
                      event_source: r("AdsPublishSourceTypes").TABLE,
                    }
                  : e.actionType ===
                      o("AdsPEAdgroupLiveStatusChangeActionFlux").actionType
                    ? {
                        object_ids: e.ids,
                        event_source: r("AdsPublishSourceTypes").TABLE,
                      }
                    : e.actionType ===
                        o("AdsUEditorCampaignInstantPublishNameFieldActionFlux")
                          .actionType
                      ? {
                          object_ids: e.campaignIDs,
                          event_source: r("AdsPublishSourceTypes").TABLE,
                          new_value: e.name,
                          old_value: e.oldName,
                        }
                      : e.actionType ===
                          o("AdsUEditorPECampaignLiveStatusChangeActionFlux")
                            .actionType
                        ? {
                            object_ids: e.campaignIDs,
                            event_source: r("AdsPublishSourceTypes").TABLE,
                          }
                        : {};
    }
    function u(t) {
      var n,
        a,
        l,
        u,
        c,
        d,
        m = function (t, n) {
          return n === void 0
            ? null
            : o("AdsPELoggerUtils").bulkValueTransformer(t, n);
        },
        p = null;
      switch (t.actionType) {
        case r("AdsCampaignGroupSetAdLabelsDataActionFlux").actionType:
        case o("AdsUEditorCampaignSetBudgetActionFlux").actionType:
          return { edit_source: t.editSource };
        case o("AdsUEditorCampaignGroupSetNameActionFlux").actionType:
        case o("AdsUEditorCampaignSetNameActionFlux").actionType:
        case o("AdsUEditorAdgroupSetNameDataActionFlux").actionType:
          return {
            edit_source: t.source,
            field_names: r("AdsAPICampaignGroupPaths").NAME,
          };
        case o("AdsUEditorCampaignSetDeliveryActionFlux").actionType:
          var _ = o("AdsBulkValueUtils").getObjectDiff(
            t.deliverySpec,
            t.oldBulkSpec,
          );
          return { changed_values: JSON.stringify(_, m) };
        case o("AdsUEditorCampaignSetTargetingSpecActionFlux").actionType:
          return { changed_values: JSON.stringify(t.targetingSpecDiff, m) };
        case o("AdsUEditorCampaignGroupInstantPublishNameFieldActionFlux")
          .actionType:
        case o("AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux")
          .actionType:
        case o("AdsAdgroupInstantPublishNameFieldActionFlux").actionType:
        case o("AdsUEditorCampaignInstantPublishBidFieldActionFlux").actionType:
        case o("AdsUEditorCampaignInstantPublishOptimalOptimizationActionFlux")
          .actionType:
        case o("AdsPECampaignGroupLiveStatusChangeActionFlux").actionType:
        case o("AdsPEAdgroupLiveStatusChangeActionFlux").actionType:
        case o("AdsUEditorCampaignInstantPublishNameFieldActionFlux")
          .actionType:
        case o("AdsUEditorPECampaignLiveStatusChangeActionFlux").actionType:
          return s(t);
        case r("AdsUEditorCampaignGroupSetRegulatedCategoryActionFlux")
          .actionType:
          return {
            smart_promotion_type: r("AdsSmartPromotionTypeUtils")(
              (n = o("AdsPECampaignGroupSelectors")
                .getCachedByFieldsSelector()(
                  t.campaignGroupIDs[0],
                  { smart_promotion_type: null },
                  i.id,
                )
                .getValue()) == null
                ? void 0
                : n.smart_promotion_type,
            ),
          };
        case o("AdsUEditorCampaignInstantPublishBudgetFieldActionFlux")
          .actionType:
          var f = t.dailyBudget != null ? t.dailyBudget : t.lifetimeBudget;
          return {
            object_ids: t.campaignIDs,
            event_source: r("AdsPublishSourceTypes").TABLE,
            new_value: f,
            old_value: t.oldBudget,
          };
        case o("AdsUEditorCampaignInstantPublishScheduleFieldActionFlux")
          .actionType:
          return {
            object_ids: t.campaignIDs,
            event_source: r("AdsPublishSourceTypes").TABLE,
          };
        case o("AdsBulkEditOpenAllCampaignBudgetsDialogDataActionFlux")
          .actionType:
          return {
            object_ids: o(
              "AdsCampaignGroupBudgetLoggingUtils",
            ).getCampaignGroupIDs(t),
          };
        case o("AdsUEditorCampaignDeliveryChangeScheduleActionFlux").actionType:
          return {
            old_value: JSON.stringify(t.oldStartTimeEndTime),
            edit_source: t.source,
            smart_promotion_type: r("AdsSmartPromotionTypeUtils")(
              (a = o("AdsPECampaignGroupSelectors")
                .getCachedByFieldsSelector()(
                  t.campaignGroupIDs[0],
                  { smart_promotion_type: null },
                  i.id,
                )
                .getValue()) == null
                ? void 0
                : a.smart_promotion_type,
            ),
          };
        case r("AdsUEditorCampaignDeliveryChangeBudgetAmountActionFlux")
          .actionType:
          return (
            (p =
              (l = o("AdsPECampaignSelectors")
                .getCachedByFieldsSelector()(
                  t.campaignIDs[0],
                  { campaign_id: null },
                  i.id,
                )
                .getValue()) == null
                ? void 0
                : l.campaign_id),
            {
              smart_promotion_type:
                p != null
                  ? r("AdsSmartPromotionTypeUtils")(
                      (u = o("AdsPECampaignGroupSelectors")
                        .getCachedByFieldsSelector()(
                          p,
                          { smart_promotion_type: null },
                          i.id,
                        )
                        .getValue()) == null
                        ? void 0
                        : u.smart_promotion_type,
                    )
                  : null,
            }
          );
        case r("AdsUEditorCampaignChangeExistingUserBudgetPercentageActionFlux")
          .actionType:
          return (
            (p =
              (c = o("AdsPECampaignSelectors")
                .getCachedByFieldsSelector()(
                  t.campaignIDs[0],
                  { campaign_id: null },
                  i.id,
                )
                .getValue()) == null
                ? void 0
                : c.campaign_id),
            {
              smart_promotion_type:
                p != null
                  ? r("AdsSmartPromotionTypeUtils")(
                      (d = o("AdsPECampaignGroupSelectors")
                        .getCachedByFieldsSelector()(
                          p,
                          { smart_promotion_type: null },
                          i.id,
                        )
                        .getValue()) == null
                        ? void 0
                        : d.smart_promotion_type,
                    )
                  : null,
            }
          );
        case o("AdsCampaignGroupBulkEditApplyChangesDataActionFlux").actionType:
        case o("AdsUEditorCampaignBulkEditApplyChangesActionFlux").actionType:
        case o("AdsAdgroupBulkEditApplyChangesDataActionFlux").actionType:
          return { field_names: e(t) };
        case o("AdsUEditorCampaignGroupBulkSetNameActionFlux").actionType:
          return { field_names: r("AdsAPICampaignGroupPaths").NAME };
        case o("AdsUEditorCampaignBulkSetNameActionFlux").actionType:
          return { field_names: r("AdsAPICampaignPaths").NAME };
        case o("AdsCampaignGroupReplaceInDataActionFlux").actionType:
          return { field_names: [t.path.join(".")] };
        case o("AdsUEditorCampaignReplaceInActionFlux").actionType:
          return { field_names: [t.path.join(".")] };
        case o("AdsAdgroupReplaceInDataActionFlux").actionType:
          return { field_names: [t.path.join(".")] };
      }
      return o(
        "AdsCampaignGroupBudgetLoggingUtils",
      ).isCampaignGroupBudgetActions(t.actionType) ||
        o(
          "AdsCampaignGroupBudgetLoggingUtils",
        ).isCampaignGroupBudgetCampaignActions(t.actionType)
        ? o("AdsCampaignGroupBudgetLoggingUtils").getExtraLoggingParams(t)
        : {};
    }
    l.default = u;
  },
  98,
);
