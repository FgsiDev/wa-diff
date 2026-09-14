__d(
  "AdsInsightsGkToColumnIdsConfig",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      gkToColumnIds: {
        ads_delivery_insights_optimization_preset: [
          "optimization_results",
          "cost_per_optimization_result",
          "last_significant_edit",
        ],
        ads_attention_event_reporting: [
          "actions:attention_event",
          "cost_per_action_type:attention_event",
          "attention_events_per_impression",
        ],
        ai_agent_pill_clicks_mmt: ["clicks_to_business_ai"],
        am_organic_rank_exposure: ["relevance_score:organic_rank"],
        ads_reporting_video_view_30sec_deprecation: [
          "video_30_sec_watched_actions:video_view",
        ],
        ads_delivery_post_conversion_optimization_beta: [
          "post_conversion_signal_result",
          "cost_per_post_conversion_signal",
        ],
        mm_in_ad_adaccount_beta: [
          "marketing_messages_sent",
          "marketing_messages_delivered",
          "marketing_messages_read_rate",
          "marketing_messages_language",
          "marketing_messages_link_btn_click",
          "marketing_messages_link_btn_click_rate",
          "marketing_messages_cost_per_delivered",
          "marketing_messages_cost_per_link_btn_click",
          "marketing_messages_spend",
          "marketing_messages_website_add_to_cart",
          "marketing_messages_website_initiate_checkout",
          "marketing_messages_website_purchase",
          "marketing_messages_website_purchase_values",
        ],
        mm_liquidity_adaccount_whatsapp_m1: ["messages_delivered"],
        omni_reporting_adjusted_offline_metric: ["adjusted_offline_purchase"],
        message_marketing_app_metrics: [
          "marketing_messages_app_purchase",
          "marketing_messages_app_purchase_values",
          "marketing_messages_app_add_to_cart",
          "marketing_messages_app_initiate_checkout",
          "marketing_messages_activate_app_actions",
        ],
        mm_liquidity_report_tier_gk: [
          "cost_per_message_delivered",
          "messages_delivered_ctr",
          "read_rate",
        ],
        ocmr: ["ad_extension_url", "ad_extension_domain"],
      },
    });
    i.default = e;
  },
  66,
);
