__d(
  "AdsInsightsSharedColumnConfigs",
  [
    "AdsAudienceDirectConfig.experimental",
    "AdsInsightsColumn",
    "AdsInsightsColumns",
    "AdsInsightsField",
    "AdsInsightsFields",
    "AdsInsightsGKByAccountDeprecated",
    "AdsInsightsGkToColumnIdsConfig",
    "AdsInsightsRelevanceScoreSubfield",
    "AdsInsightsStoreVisitsDeprecationConfig",
    "AdsMgmtColumn",
    "StrSet",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        ads_delivery_insights_optimization_preset: !0,
        ads_attention_event_reporting: !1,
        am_organic_rank_exposure: !1,
        ads_reporting_video_view_30sec_deprecation: (e = r(
          "AdsInsightsGKByAccountDeprecated",
        )).ads_reporting_video_view_30sec_deprecation,
        collab_accounts_gk: e.collab_accounts_gk,
        ads_delivery_post_conversion_optimization_beta:
          e.ads_delivery_post_conversion_optimization_beta,
        mm_in_ad_adaccount_beta: e.mm_in_ad_adaccount_beta,
        mm_offsite_metrics_h223: e.mm_offsite_metrics_h223,
        mm_liquidity_adaccount_whatsapp_m1:
          r("AdsInsightsGKByAccountDeprecated")
            .mm_liquidity_adaccount_whatsapp_m1 ||
          r("AdsInsightsGKByAccountDeprecated")
            .mm_liquidity_adaccount_messenger,
        mm_liquidity_adaccount_messenger: r("AdsInsightsGKByAccountDeprecated")
          .mm_liquidity_adaccount_messenger,
        omni_reporting_adjusted_offline_metric: r(
          "AdsInsightsGKByAccountDeprecated",
        ).omni_reporting_adjusted_offline_metric,
        message_marketing_app_metrics: r("AdsInsightsGKByAccountDeprecated")
          .message_marketing_app_metrics,
        mm_liquidity_report_tier_gk:
          r("AdsInsightsGKByAccountDeprecated").mm_liquidity_report_tier_gk ||
          r("AdsInsightsGKByAccountDeprecated")
            .mm_liquidity_adaccount_messenger,
        ocmr: r("AdsInsightsGKByAccountDeprecated").ocmr,
        ai_agent_pill_clicks_mmt: r("AdsInsightsGKByAccountDeprecated")
          .ai_agent_pill_clicks_mmt,
        result_adjusted_values_reporting_enabled: r(
          "AdsInsightsGKByAccountDeprecated",
        ).result_adjusted_values_reporting_enabled,
      },
      u = {};
    Object.keys(r("AdsInsightsGkToColumnIdsConfig").gkToColumnIds).forEach(
      function (e) {
        r("AdsInsightsGkToColumnIdsConfig").gkToColumnIds[e].forEach(
          function (t) {
            (u[t] || (u[t] = []), u[t].push(e));
          },
        );
      },
    );
    var c = [
        { id: r("AdsInsightsColumn").ACTION_DEVICE, isRemovable: !1 },
        { id: r("AdsInsightsColumn").ACTION_REACTION, isRemovable: !1 },
        { id: r("AdsInsightsColumn").ACCOUNT_CURRENCY, isRemovable: !1 },
        { id: r("AdsInsightsColumn").AGE, isRemovable: !1 },
        { id: r("AdsInsightsColumn").COST_PER_RESULT },
        { id: r("AdsInsightsColumn").COUNTRY, isRemovable: !1 },
        { id: r("AdsInsightsColumn").CAROUSEL_CARD_NAME, isRemovable: !1 },
        {
          id: r("AdsInsightsColumn").ACTION_CANVAS_COMPONENT_NAME,
          isRemovable: !1,
        },
        { id: r("AdsInsightsColumn").DESTINATION, isRemovable: !1 },
        { id: r("AdsInsightsColumn").GENDER, isRemovable: !1 },
        { id: r("AdsInsightsColumn").IMPRESSION_DEVICE, isRemovable: !1 },
        { id: r("AdsInsightsColumn").PLACEMENT, isRemovable: !1 },
        { id: r("AdsInsightsColumn").PRODUCT_ID, isRemovable: !1 },
        { id: r("AdsInsightsColumn").RELEVANCE_SCORE, isRemovable: !1 },
        { id: r("AdsInsightsColumn").RESULTS },
        { id: r("AdsInsightsColumn").VIDEO_VIEW_TYPE, isRemovable: !1 },
        { id: r("AdsInsightsColumn").STORE_VISITS },
        { id: o("AdsInsightsFields").makeStoreVisitsID("point_estimate") },
        { id: r("AdsInsightsColumn").TOTAL_LEARNING_PHASE_SPEND_RATIO },
        { id: r("AdsInsightsColumn").IN_LEARNING_SPEND },
        { id: r("AdsInsightsColumn").LEARNING_LIMITED_SPEND },
        { id: r("AdsInsightsColumn").TOTAL_RUNNING_ADS },
        { id: r("AdsInsightsColumn").RUNNING_ADS_COUNT_IN_LEARNING },
        { id: r("AdsInsightsColumn").RUNNING_ADS_COUNT_IN_LEARNING_LIMITED },
        { id: r("AdsInsightsColumn").TOTAL_RUNNING_ADSETS },
        { id: r("AdsInsightsColumn").RUNNING_ADSETS_COUNT_IN_LEARNING },
        { id: r("AdsInsightsColumn").RUNNING_ADSETS_COUNT_IN_LEARNING_LIMITED },
        { id: r("AdsInsightsColumn").TOTAL_LEARNING_PHASE_SPEND_RATIO_LEGACY },
        { id: r("AdsInsightsColumn").IN_LEARNING_SPEND_LEGACY },
        { id: r("AdsInsightsColumn").LEARNING_LIMITED_SPEND_LEGACY },
        { id: r("AdsInsightsColumn").RUNNING_ADS_COUNT_IN_LEARNING_LEGACY },
        {
          id: r("AdsInsightsColumn")
            .RUNNING_ADS_COUNT_IN_LEARNING_LIMITED_LEGACY,
        },
        { id: r("AdsInsightsColumn").RUNNING_ADSETS_COUNT_IN_LEARNING_LEGACY },
        {
          id: r("AdsInsightsColumn")
            .RUNNING_ADSETS_COUNT_IN_LEARNING_LIMITED_LEGACY,
        },
      ],
      d = {};
    c.forEach(function (e) {
      return (d[e.id] = e);
    });
    var m = r("memoize")(function () {
      var e = new (r("StrSet"))([]);
      if (
        (Object.keys(u).forEach(function (t) {
          u[t].every(function (e) {
            return s[e];
          }) || e.add(t);
        }),
        !r("AdsAudienceDirectConfig.experimental").isDirectDealsUser)
      ) {
        var t,
          n = [
            (t = r("AdsMgmtColumn")).DEAL_END,
            t.DEAL_START,
            t.BUDGET_GOAL,
            t.IMPRESSIONS_GOAL,
            t.PACING,
          ];
        e.addAll(n);
      }
      e.addAll([
        o("AdsInsightsColumns").makeActionID(
          "video_avg_percent_watched_actions",
          "video_view",
        ),
        o("AdsInsightsColumns").makeActionID(
          "canvas_avg_view_percentage_per_component",
          "canvas_view",
        ),
        o("AdsInsightsColumns").makeActionID(
          "canvas_component_avg_pct_view",
          "canvas_view",
        ),
        r("AdsInsightsField").CALL_TO_ACTION_CLICKS,
        r("AdsInsightsField").COST_PER_TOTAL_ACTIONS,
        r("AdsInsightsField").SOCIAL_REACH,
        r("AdsInsightsField").UNIQUE_SOCIAL_IMPRESSIONS,
        r("AdsInsightsField").SOCIAL_IMPRESSIONS,
        r("AdsInsightsField").SOCIAL_CLICKS,
        r("AdsInsightsField").UNIQUE_SOCIAL_CLICKS,
        r("AdsInsightsField").TODAY_SPEND,
        r("AdsInsightsField").TOTAL_ACTIONS,
        r("AdsInsightsField").TOTAL_UNIQUE_ACTIONS,
        o("AdsInsightsColumns").makeActionID("actions", "mention"),
        o("AdsInsightsColumns").makeActionID("cost_per_action_type", "mention"),
        o("AdsInsightsColumns").makeActionID("actions", "tab_view"),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "tab_view",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "app_custom_event",
        ),
        o("AdsInsightsColumns").makeRelevanceScoreID(
          r("AdsInsightsRelevanceScoreSubfield").POSITIVE_FEEDBACK,
        ),
        o("AdsInsightsColumns").makeRelevanceScoreID(
          r("AdsInsightsRelevanceScoreSubfield").NEGATIVE_FEEDBACK,
        ),
      ]);
      var a = [
        o("AdsInsightsColumns").makeActionID("actions", "offline_conversion"),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "onsite_conversion.messaging_reply",
        ),
        o("AdsInsightsColumns").makeActionID("actions", "receive_offer"),
        o("AdsInsightsColumns").makeActionID(
          "unique_actions",
          "offline_conversion",
        ),
        o("AdsInsightsColumns").makeActionID(
          "unique_actions",
          "onsite_conversion.messaging_reply",
        ),
        o("AdsInsightsColumns").makeActionID("unique_actions", "receive_offer"),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "offline_conversion",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "onsite_conversion.messaging_reply",
        ),
        o("AdsInsightsColumns").makeActionID("action_values", "receive_offer"),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "offline_conversion",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "onsite_conversion.messaging_reply",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "receive_offer",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_unique_action_type",
          "offline_conversion",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_unique_action_type",
          "onsite_conversion.messaging_reply",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_unique_action_type",
          "receive_offer",
        ),
        o("AdsInsightsColumns").makeActionID(
          "mobile_app_purchase_roas",
          "app_custom_event.fb_mobile_purchase",
        ),
        o("AdsInsightsColumns").makeActionID(
          "website_purchase_roas",
          "offsite_conversion.fb_pixel_purchase",
        ),
        o("AdsInsightsColumns").makeActionID("actions", "commerce_event"),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "commerce_event.add_to_cart",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "commerce_event.purchase",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "commerce_event.message_to_buy",
        ),
        o("AdsInsightsColumns").makeActionID("actions", "commerce_event.other"),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "commerce_event.view_content",
        ),
        o("AdsInsightsColumns").makeActionID("actions", "attention_event"),
        o("AdsInsightsColumns").makeActionID("action_values", "commerce_event"),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "commerce_event.add_to_cart",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "commerce_event.purchase",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "commerce_event.message_to_buy",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "commerce_event.other",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "commerce_event.view_content",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "attention_event",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "commerce_event",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "commerce_event.add_to_cart",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "commerce_event.purchase",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "commerce_event.message_to_buy",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "commerce_event.other",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "commerce_event.view_content",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "attention_event",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_unique_action_type",
          "commerce_event",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_unique_action_type",
          "commerce_event.add_to_cart",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_unique_action_type",
          "commerce_event.purchase",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_unique_action_type",
          "commerce_event.message_to_buy",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_unique_action_type",
          "commerce_event.other",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_unique_action_type",
          "commerce_event.view_content",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_unique_action_type",
          "attention_event",
        ),
        r("AdsInsightsField").ATTENTION_EVENTS_PER_IMPRESSION,
      ];
      e.addAll(a);
      var i = [
        o("AdsInsightsColumns").makeActionID(
          "video_10_sec_watched_actions",
          "video_view",
        ),
        o("AdsInsightsColumns").makeActionID(
          "unique_video_view_10_sec",
          "video_view",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_10_sec_video_view",
          "video_view",
        ),
        o("AdsInsightsColumns").makeActionID("actions", "leadgen.other"),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "leadgen.other",
        ),
      ];
      return (
        e.addAll(i),
        e.addAll(
          o(
            "AdsInsightsStoreVisitsDeprecationConfig",
          ).getDeprecatedStoreVisitsMetrics(),
        ),
        e
      );
    });
    l.getBlocklistedColumnIDs = m;
  },
  98,
);
