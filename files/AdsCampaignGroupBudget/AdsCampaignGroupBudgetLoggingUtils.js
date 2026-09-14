__d(
  "AdsCampaignGroupBudgetLoggingUtils",
  [
    "invariant",
    "AdsBulkEditChangeAllCampaignBudgetsDataActionFlux",
    "AdsBulkEditOpenAllCampaignBudgetsDialogDataActionFlux",
    "AdsCampaignGroupBlockChangeBudgetDataActionFlux",
    "AdsCampaignGroupBudgetGenImpressionDataActionFlux",
    "AdsCampaignGroupBudgetMidFlightToggleLoggingDataAction",
    "AdsCampaignGroupBudgetMidFlightToggleLoggingDataActionFlux",
    "AdsCampaignGroupBudgetMidFlightToggleLoggingEvents",
    "AdsCampaignGroupBudgetResetDialogMode",
    "AdsCampaignGroupBudgetSectionShownDataActionFlux",
    "AdsCampaignGroupCancelChangeBudgetDataActionFlux",
    "AdsUEditorCampaignClearSpendingControlsActionFlux",
    "AdsUEditorCampaignGroupEnableAutoBidActionFlux",
    "AdsUEditorCampaignGroupEnableCostCapDataActionFlux",
    "AdsUEditorCampaignGroupEnableMaxBidActionFlux",
    "AdsUEditorCampaignGroupEnableMinRoasActionFlux",
    "AdsUEditorCampaignGroupSetBidStrategyActionFlux",
    "AdsUEditorCampaignGroupSetBudgetAmountActionFlux",
    "AdsUEditorCampaignGroupSetBudgetToggleActionFlux",
    "AdsUEditorCampaignGroupSetBudgetTypeActionFlux",
    "AdsUEditorCampaignGroupToggleAcceleratedDeliveryActionFlux",
    "AdsUEditorCampaignGroupToggleDayPartingActionFlux",
    "AdsUEditorCampaignSetMinSpendTargetActionFlux",
    "AdsUEditorCampaignSetSpendCapActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("immutable").Set([
        o("AdsUEditorCampaignGroupSetBidStrategyActionFlux").actionType,
        o("AdsUEditorCampaignGroupSetBudgetToggleActionFlux").actionType,
        o("AdsUEditorCampaignGroupEnableAutoBidActionFlux").actionType,
        o("AdsUEditorCampaignGroupEnableMaxBidActionFlux").actionType,
        o("AdsUEditorCampaignGroupEnableMinRoasActionFlux").actionType,
        o("AdsUEditorCampaignGroupEnableCostCapDataActionFlux").actionType,
        o("AdsCampaignGroupBlockChangeBudgetDataActionFlux").actionType,
        o("AdsCampaignGroupCancelChangeBudgetDataActionFlux").actionType,
        o("AdsCampaignGroupBudgetSectionShownDataActionFlux").actionType,
        o("AdsCampaignGroupBudgetGenImpressionDataActionFlux").actionType,
        o("AdsUEditorCampaignGroupToggleDayPartingActionFlux").actionType,
        o("AdsUEditorCampaignGroupToggleAcceleratedDeliveryActionFlux")
          .actionType,
        o("AdsUEditorCampaignGroupSetBudgetAmountActionFlux").actionType,
        o("AdsUEditorCampaignGroupSetBudgetTypeActionFlux").actionType,
        o("AdsBulkEditOpenAllCampaignBudgetsDialogDataActionFlux").actionType,
        o("AdsCampaignGroupBudgetMidFlightToggleLoggingDataActionFlux")
          .actionType,
      ]),
      u = r("immutable").Set([
        o("AdsUEditorCampaignSetMinSpendTargetActionFlux").actionType,
        o("AdsUEditorCampaignClearSpendingControlsActionFlux").actionType,
        o("AdsUEditorCampaignSetSpendCapActionFlux").actionType,
        o("AdsBulkEditChangeAllCampaignBudgetsDataActionFlux").actionType,
      ]);
    function c(e) {
      switch (e.type) {
        case o("AdsUEditorCampaignGroupSetBidStrategyActionFlux").actionType:
          return y("set_L3_bid_strategy");
        case o("AdsUEditorCampaignGroupSetBudgetToggleActionFlux").actionType:
          return d(e);
        case o("AdsUEditorCampaignGroupSetBudgetAmountActionFlux").actionType:
          return e.budgetType === "daily"
            ? y("set_daily_budget_amount")
            : y("set_lifetime_budget_amount");
        case o("AdsUEditorCampaignGroupSetBudgetTypeActionFlux").actionType:
          return e.budgetType === "daily"
            ? y("set_daily_budget_type")
            : y("set_lifetime_budget_type");
        case o("AdsUEditorCampaignGroupEnableAutoBidActionFlux").actionType:
          return y("enable_auto_bid");
        case o("AdsUEditorCampaignGroupEnableMaxBidActionFlux").actionType:
          return y("enable_max_bid");
        case o("AdsUEditorCampaignGroupEnableMinRoasActionFlux").actionType:
          return y("enable_min_roas");
        case o("AdsUEditorCampaignGroupEnableCostCapDataActionFlux").actionType:
          return y("enable_cost_cap");
        case o("AdsCampaignGroupBlockChangeBudgetDataActionFlux").actionType:
          return f(e.mode);
        case o("AdsCampaignGroupCancelChangeBudgetDataActionFlux").actionType:
          return y("cancel_changing_campaign_group_budget_fields");
        case o("AdsCampaignGroupBudgetSectionShownDataActionFlux").actionType:
          return e.isQuickCreate
            ? y("budget_section_shown_quick_create")
            : y("budget_section_shown");
        case o("AdsCampaignGroupBudgetGenImpressionDataActionFlux").actionType:
          return y("generate_impression");
        case o("AdsUEditorCampaignClearSpendingControlsActionFlux").actionType:
          return y("campaign_clear_spending_controls");
        case o("AdsUEditorCampaignSetMinSpendTargetActionFlux").actionType:
          return y("campaign_set_min_spend_target");
        case o("AdsUEditorCampaignSetSpendCapActionFlux").actionType:
          return y("campaign_set_spend_cap");
        case o("AdsUEditorCampaignGroupToggleDayPartingActionFlux").actionType:
          return e.useDayParting
            ? y("enable_day_parting")
            : y("disable_day_parting");
        case o("AdsUEditorCampaignGroupToggleAcceleratedDeliveryActionFlux")
          .actionType:
          return e.useAcceleratedDelivery
            ? y("enable_accelerated_delivery")
            : y("disable_accelerated_delivery");
        case o("AdsBulkEditOpenAllCampaignBudgetsDialogDataActionFlux")
          .actionType:
          return o("AdsCampaignGroupBudgetMidFlightToggleLoggingEvents")
            .ToggleOffOpen;
        case o("AdsBulkEditChangeAllCampaignBudgetsDataActionFlux").actionType:
          return o("AdsCampaignGroupBudgetMidFlightToggleLoggingEvents")
            .ToggleOffChangeBudget;
        case o("AdsCampaignGroupBudgetMidFlightToggleLoggingDataActionFlux")
          .actionType:
          return e.eventName;
        default:
          s(0, 3304, e.type);
      }
    }
    function d(e) {
      var t = e.isQuickCreate ? "_quick_create" : "";
      return e.isOptedInForCampaignGroupBudget
        ? y("opt_in" + t)
        : y("opt_out" + t);
    }
    function m(e) {
      return (
        g(e.type) || s(0, 3305, e.type),
        e.campaignsByCampaignGroupID && e.campaignsByCampaignGroupID.size > 0
          ? Array.from(e.campaignsByCampaignGroupID.keys())
          : e.ids || e.campaignGroupIDs || []
      );
    }
    function p(e) {
      return (h(e.type) || s(0, 3306, e.type), e.ids || e.adObjectIDs || []);
    }
    function _(e) {
      h(e.type) || g(e.type) || s(0, 3307, e.type);
      var t = { object_ids: g(e.type) ? m(e) : p(e) };
      switch (e.type) {
        case o("AdsBulkEditChangeAllCampaignBudgetsDataActionFlux").actionType:
          return babelHelpers.extends({}, t, { new_value: e.budget });
        case o("AdsCampaignGroupBudgetMidFlightToggleLoggingDataActionFlux")
          .actionType:
          return {
            object_ids: e.object_ids || [],
            old_value: e.old_value,
            new_value: e.new_value,
            event_source: e.eventSource,
          };
        case o("AdsUEditorCampaignGroupSetBudgetAmountActionFlux").actionType:
          return babelHelpers.extends({}, t, { new_value: e.budgetAmount });
        default:
          return t;
      }
    }
    function f(e) {
      switch (e) {
        case o("AdsCampaignGroupBudgetResetDialogMode").ToggleBudgetSwitch:
          return y("block_toggling_budget_switch");
        case o("AdsCampaignGroupBudgetResetDialogMode").ChangeBudgetMode:
          return y("block_changing_budget_mode");
        case o("AdsCampaignGroupBudgetResetDialogMode").ChangeBidStrategy:
          return y("block_changing_bid_strategy");
        case o("AdsCampaignGroupBudgetResetDialogMode").ToggleDayParting:
          return y("block_toggling_day_parting");
        case o("AdsCampaignGroupBudgetResetDialogMode")
          .ToggleAcceleratedDelivery:
          return y("block_toggling_accelerated_delivery");
        default:
          s(0, 3308);
      }
    }
    function g(t) {
      return e.has(t);
    }
    function h(e) {
      return u.has(e);
    }
    function y(e) {
      return "campaign_group_budget_" + e;
    }
    function C(e, t, n, o, a) {
      (n === void 0 && (n = null),
        o === void 0 && (o = null),
        a === void 0 && (a = null),
        r("AdsCampaignGroupBudgetMidFlightToggleLoggingDataAction").dispatch(
          {
            eventName: e,
            object_ids: t,
            old_value: n,
            new_value: o,
            eventSource: a,
          },
          {
            line: "391",
            module: "AdsCampaignGroupBudgetLoggingUtils.js",
            moduleID: i.id,
          },
        ));
    }
    ((l.getEventName = c),
      (l.getCampaignGroupIDs = m),
      (l.getCampaignIDs = p),
      (l.getExtraLoggingParams = _),
      (l.isCampaignGroupBudgetActions = g),
      (l.isCampaignGroupBudgetCampaignActions = h),
      (l.logMidFlightToggleEvent = C));
  },
  98,
);
