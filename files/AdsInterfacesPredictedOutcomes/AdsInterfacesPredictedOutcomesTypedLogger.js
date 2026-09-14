__d(
  "AdsInterfacesPredictedOutcomesTypedLogger",
  ["Banzai", "GeneratedLoggerUtils"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = {};
        }
        var t = e.prototype;
        return (
          (t.log = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:AdsInterfacesPredictedOutcomesLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:AdsInterfacesPredictedOutcomesLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:AdsInterfacesPredictedOutcomesLoggerConfig",
              this.$1,
              { signal: !0 },
              t,
            );
          }),
          (t.clear = function () {
            return ((this.$1 = {}), this);
          }),
          (t.getData = function () {
            return babelHelpers.extends({}, this.$1);
          }),
          (t.updateData = function (t) {
            return ((this.$1 = babelHelpers.extends({}, this.$1, t)), this);
          }),
          (t.setBid = function (t) {
            return ((this.$1.bid = t), this);
          }),
          (t.setBidStrategy = function (t) {
            return ((this.$1.bid_strategy = t), this);
          }),
          (t.setCampaignID = function (t) {
            return ((this.$1.campaign_id = t), this);
          }),
          (t.setDailyActiveUsers = function (t) {
            return ((this.$1.daily_active_users = t), this);
          }),
          (t.setDailyBudget = function (t) {
            return ((this.$1.daily_budget = t), this);
          }),
          (t.setErrorCode = function (t) {
            return ((this.$1.error_code = t), this);
          }),
          (t.setEvent = function (t) {
            return ((this.$1.event = t), this);
          }),
          (t.setHasError = function (t) {
            return ((this.$1.has_error = t), this);
          }),
          (t.setIsAutobid = function (t) {
            return ((this.$1.is_autobid = t), this);
          }),
          (t.setIsCboEnabled = function (t) {
            return ((this.$1.is_cbo_enabled = t), this);
          }),
          (t.setIsIos14AdCampaign = function (t) {
            return ((this.$1.is_ios14_ad_campaign = t), this);
          }),
          (t.setLongTermPredictionID = function (t) {
            return ((this.$1.long_term_prediction_id = t), this);
          }),
          (t.setMonthlyActiveUsers = function (t) {
            return ((this.$1.monthly_active_users = t), this);
          }),
          (t.setObjective = function (t) {
            return ((this.$1.objective = t), this);
          }),
          (t.setOptimizationGoal = function (t) {
            return ((this.$1.optimization_goal = t), this);
          }),
          (t.setPredictedActionsCumulative = function (t) {
            return (
              (this.$1.predicted_actions_cumulative = n(
                "GeneratedLoggerUtils",
              ).serializeVector(t)),
              this
            );
          }),
          (t.setPredictedActionsMax = function (t) {
            return ((this.$1.predicted_actions_max = t), this);
          }),
          (t.setPredictedActionsMedian = function (t) {
            return ((this.$1.predicted_actions_median = t), this);
          }),
          (t.setPredictedActionsMin = function (t) {
            return ((this.$1.predicted_actions_min = t), this);
          }),
          (t.setPredictedActionsWithBid = function (t) {
            return ((this.$1.predicted_actions_with_bid = t), this);
          }),
          (t.setPredictedCampaignGroupActionsMax = function (t) {
            return ((this.$1.predicted_campaign_group_actions_max = t), this);
          }),
          (t.setPredictedCampaignGroupActionsMedian = function (t) {
            return (
              (this.$1.predicted_campaign_group_actions_median = t),
              this
            );
          }),
          (t.setPredictedCampaignGroupActionsMin = function (t) {
            return ((this.$1.predicted_campaign_group_actions_min = t), this);
          }),
          (t.setPredictedCampaignGroupReachMax = function (t) {
            return ((this.$1.predicted_campaign_group_reach_max = t), this);
          }),
          (t.setPredictedCampaignGroupReachMedian = function (t) {
            return ((this.$1.predicted_campaign_group_reach_median = t), this);
          }),
          (t.setPredictedCampaignGroupReachMin = function (t) {
            return ((this.$1.predicted_campaign_group_reach_min = t), this);
          }),
          (t.setPredictedCampaignGroupSpend = function (t) {
            return ((this.$1.predicted_campaign_group_spend = t), this);
          }),
          (t.setPredictedReachCumulative = function (t) {
            return (
              (this.$1.predicted_reach_cumulative = n(
                "GeneratedLoggerUtils",
              ).serializeVector(t)),
              this
            );
          }),
          (t.setPredictedReachMax = function (t) {
            return ((this.$1.predicted_reach_max = t), this);
          }),
          (t.setPredictedReachMedian = function (t) {
            return ((this.$1.predicted_reach_median = t), this);
          }),
          (t.setPredictedReachMin = function (t) {
            return ((this.$1.predicted_reach_min = t), this);
          }),
          (t.setPredictedReachWithBid = function (t) {
            return ((this.$1.predicted_reach_with_bid = t), this);
          }),
          (t.setPredictedSpend = function (t) {
            return ((this.$1.predicted_spend = t), this);
          }),
          (t.setPredictedSpendCumulative = function (t) {
            return (
              (this.$1.predicted_spend_cumulative = n(
                "GeneratedLoggerUtils",
              ).serializeVector(t)),
              this
            );
          }),
          (t.setPredictedSpendWithBid = function (t) {
            return ((this.$1.predicted_spend_with_bid = t), this);
          }),
          (t.setPredictionID = function (t) {
            return ((this.$1.prediction_id = t), this);
          }),
          (t.setPredictionSurface = function (t) {
            return ((this.$1.prediction_surface = t), this);
          }),
          (t.setSessionID = function (t) {
            return ((this.$1.session_id = t), this);
          }),
          (t.setShowZeroConversionNotice = function (t) {
            return ((this.$1.show_zero_conversion_notice = t), this);
          }),
          (t.setShowedActions = function (t) {
            return ((this.$1.showed_actions = t), this);
          }),
          (t.setZeroConversionWwwRequestID = function (t) {
            return ((this.$1.zero_conversion_www_request_id = t), this);
          }),
          e
        );
      })(),
      l = {
        bid: !0,
        bid_strategy: !0,
        campaign_id: !0,
        daily_active_users: !0,
        daily_budget: !0,
        error_code: !0,
        event: !0,
        has_error: !0,
        is_autobid: !0,
        is_cbo_enabled: !0,
        is_ios14_ad_campaign: !0,
        long_term_prediction_id: !0,
        monthly_active_users: !0,
        objective: !0,
        optimization_goal: !0,
        predicted_actions_cumulative: !0,
        predicted_actions_max: !0,
        predicted_actions_median: !0,
        predicted_actions_min: !0,
        predicted_actions_with_bid: !0,
        predicted_campaign_group_actions_max: !0,
        predicted_campaign_group_actions_median: !0,
        predicted_campaign_group_actions_min: !0,
        predicted_campaign_group_reach_max: !0,
        predicted_campaign_group_reach_median: !0,
        predicted_campaign_group_reach_min: !0,
        predicted_campaign_group_spend: !0,
        predicted_reach_cumulative: !0,
        predicted_reach_max: !0,
        predicted_reach_median: !0,
        predicted_reach_min: !0,
        predicted_reach_with_bid: !0,
        predicted_spend: !0,
        predicted_spend_cumulative: !0,
        predicted_spend_with_bid: !0,
        prediction_id: !0,
        prediction_surface: !0,
        session_id: !0,
        show_zero_conversion_notice: !0,
        showed_actions: !0,
        zero_conversion_www_request_id: !0,
      };
    i.default = e;
  },
  66,
);
