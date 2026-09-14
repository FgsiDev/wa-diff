__d(
  "AdsMgmtCampaignTableColumnSuggestionOrders",
  [
    "AdsInsightsField",
    "AdsInsightsFields",
    "AdsMgmt2025H1ExperimentUtils",
    "AdsMgmt2025H2ExperimentUtils",
    "AdsMgmt2025PerformancePresetVariantGatingUtils",
    "AdsMgmtWTMMessagingColumnOrderingGating",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      if (
        o(
          "AdsMgmt2025H1ExperimentUtils",
        ).getIsAccountInWTWAMessagingColumnOrdering() ||
        o(
          "AdsMgmt2025H1ExperimentUtils",
        ).getIsAccountInWTDMessagingColumnOrdering() ||
        o(
          "AdsMgmtWTMMessagingColumnOrderingGating",
        ).getIsAccountInWTMMessagingColumnOrdering()
      )
        return d;
      var e = o(
        "AdsMgmt2025PerformancePresetVariantGatingUtils",
      ).getPerformancePresetVariantForAccountWithoutExposure();
      return e ===
        o("AdsMgmt2025PerformancePresetVariantGatingUtils")
          .AdsInsightsPerformancePresetVariant.REORDER
        ? m
        : e ===
            o("AdsMgmt2025PerformancePresetVariantGatingUtils")
              .AdsInsightsPerformancePresetVariant.WTWA_MESSAGING_FIRST
          ? d
          : (e ===
              o("AdsMgmt2025PerformancePresetVariantGatingUtils")
                .AdsInsightsPerformancePresetVariant.DEFAULT,
            c);
    }
    var c = [
        "name",
        "delivery",
        "recommendations_guidance",
        "creative_potential",
        "campaign_name",
        "bid",
        "budget",
        (s = r("AdsInsightsField")).LAST_SIGNIFICANT_EDIT,
        s.ATTRIBUTION_SETTING,
        s.RESULTS,
        s.RESULT_ROAS,
        s.RESULT_VALUES,
        s.REACH,
        s.IMPRESSIONS,
        s.FREQUENCY,
        s.CPM,
        (e = o("AdsInsightsFields")).makeActionID("actions", "video_view"),
        s.COST_PER_RESULT,
        e.makeActionID("actions", "like"),
        e.makeActionID("actions", "link_click"),
        e.makeActionID("unique_actions", "link_click"),
        e.makeActionID(
          "actions",
          "onsite_conversion.total_messaging_connection",
        ),
        e.makeActionID("actions", "onsite_conversion.messaging_first_reply"),
        e.makeActionID("actions", "omni_purchase"),
        e.makeActionID("actions", "offsite_conversion.fb_pixel_purchase"),
        e.makeActionID("actions", "onsite_conversion.purchase"),
        e.makeActionID("actions", "app_custom_event.fb_mobile_purchase"),
        e.makeActionID("action_values", "offsite_conversion.fb_pixel_purchase"),
        e.makeActionID("actions", "app_install"),
        e.makeActionID("actions", "mobile_app_install"),
        e.makeActionID(
          "actions",
          "offsite_conversion.fb_pixel_complete_registration",
        ),
        e.makeActionID("actions", "offsite_conversion.fb_pixel_lead"),
        e.makeActionID("actions", "offsite_conversion"),
        e.makeActionID("video_avg_time_watched_actions", "video_view"),
        e.makeActionID("video_avg_percent_watched_actions", "video_view"),
        s.QUALITY_SCORE_ORGANIC,
        s.QUALITY_SCORE_ECTR,
        s.QUALITY_SCORE_ECVR,
        e.makeActionID("purchase_roas", "omni_purchase"),
        s.ESTIMATED_AD_RECALL_RATE,
        e.makeActionID("catalog_segment_actions", "omni_view_content"),
        e.makeActionID("catalog_segment_actions", "omni_add_to_cart"),
        e.makeActionID("catalog_segment_value", "omni_add_to_cart"),
        e.makeActionID("catalog_segment_actions", "omni_purchase"),
        e.makeActionID("catalog_segment_value", "omni_purchase"),
        e.makeActionID(
          "catalog_segment_value_omni_purchase_roas",
          "omni_purchase",
        ),
        s.SPEND,
        "end_time",
        "stop_time",
        "schedule",
      ],
      d = [
        "name",
        "delivery",
        "recommendations_guidance",
        "creative_potential",
        "campaign_name",
        "bid",
        "budget",
        s.LAST_SIGNIFICANT_EDIT,
        s.ATTRIBUTION_SETTING,
        s.RESULTS,
        s.RESULT_ROAS,
        s.RESULT_VALUES,
        e.makeActionID(
          "actions",
          "onsite_conversion.total_messaging_connection",
        ),
        e.makeActionID("actions", "onsite_conversion.messaging_first_reply"),
        s.REACH,
        s.IMPRESSIONS,
        s.FREQUENCY,
        s.CPM,
        e.makeActionID("actions", "video_view"),
        s.COST_PER_RESULT,
        e.makeActionID("actions", "like"),
        e.makeActionID("actions", "link_click"),
        e.makeActionID("unique_actions", "link_click"),
        e.makeActionID("actions", "omni_purchase"),
        e.makeActionID("actions", "offsite_conversion.fb_pixel_purchase"),
        e.makeActionID("actions", "onsite_conversion.purchase"),
        e.makeActionID("actions", "app_custom_event.fb_mobile_purchase"),
        e.makeActionID("action_values", "offsite_conversion.fb_pixel_purchase"),
        e.makeActionID("actions", "app_install"),
        e.makeActionID("actions", "mobile_app_install"),
        e.makeActionID(
          "actions",
          "offsite_conversion.fb_pixel_complete_registration",
        ),
        e.makeActionID("actions", "offsite_conversion.fb_pixel_lead"),
        e.makeActionID("actions", "offsite_conversion"),
        e.makeActionID("video_avg_time_watched_actions", "video_view"),
        e.makeActionID("video_avg_percent_watched_actions", "video_view"),
        s.QUALITY_SCORE_ORGANIC,
        s.QUALITY_SCORE_ECTR,
        s.QUALITY_SCORE_ECVR,
        e.makeActionID("purchase_roas", "omni_purchase"),
        s.ESTIMATED_AD_RECALL_RATE,
        e.makeActionID("catalog_segment_actions", "omni_view_content"),
        e.makeActionID("catalog_segment_actions", "omni_add_to_cart"),
        e.makeActionID("catalog_segment_value", "omni_add_to_cart"),
        e.makeActionID("catalog_segment_actions", "omni_purchase"),
        e.makeActionID("catalog_segment_value", "omni_purchase"),
        e.makeActionID(
          "catalog_segment_value_omni_purchase_roas",
          "omni_purchase",
        ),
        s.SPEND,
        "end_time",
        "stop_time",
        "schedule",
      ],
      m = [
        "name",
        "delivery",
        "recommendations_guidance",
        "creative_potential",
        o(
          "AdsMgmt2025H2ExperimentUtils",
        ).getIsAccountInPassbackOpenBetaReportingWithoutExposure()
          ? r("AdsInsightsField").ATTRIBUTION_SETTING
          : null,
        r("AdsInsightsField").RESULTS,
        r("AdsInsightsField").COST_PER_RESULT,
        r("AdsInsightsField").RESULT_ROAS,
        r("AdsInsightsField").RESULT_VALUES,
        "budget",
        r("AdsInsightsField").SPEND,
        r("AdsInsightsField").IMPRESSIONS,
        r("AdsInsightsField").REACH,
        r("AdsInsightsField").FREQUENCY,
        r("AdsInsightsField").CPM,
        o("AdsInsightsFields").makeActionID("actions", "video_view"),
        o("AdsInsightsFields").makeActionID("actions", "like"),
        o("AdsInsightsFields").makeActionID("actions", "link_click"),
        o("AdsInsightsFields").makeActionID("unique_actions", "link_click"),
        o("AdsInsightsFields").makeActionID(
          "actions",
          "onsite_conversion.total_messaging_connection",
        ),
        o("AdsInsightsFields").makeActionID(
          "actions",
          "onsite_conversion.messaging_first_reply",
        ),
        o("AdsInsightsFields").makeActionID("actions", "omni_purchase"),
        o("AdsInsightsFields").makeActionID(
          "actions",
          "offsite_conversion.fb_pixel_purchase",
        ),
        o("AdsInsightsFields").makeActionID(
          "actions",
          "onsite_conversion.purchase",
        ),
        o("AdsInsightsFields").makeActionID(
          "actions",
          "app_custom_event.fb_mobile_purchase",
        ),
        o("AdsInsightsFields").makeActionID(
          "action_values",
          "offsite_conversion.fb_pixel_purchase",
        ),
        o("AdsInsightsFields").makeActionID("actions", "app_install"),
        o("AdsInsightsFields").makeActionID("actions", "mobile_app_install"),
        o("AdsInsightsFields").makeActionID(
          "actions",
          "offsite_conversion.fb_pixel_complete_registration",
        ),
        o("AdsInsightsFields").makeActionID(
          "actions",
          "offsite_conversion.fb_pixel_lead",
        ),
        o("AdsInsightsFields").makeActionID("actions", "offsite_conversion"),
        o("AdsInsightsFields").makeActionID(
          "video_avg_time_watched_actions",
          "video_view",
        ),
        o("AdsInsightsFields").makeActionID(
          "video_avg_percent_watched_actions",
          "video_view",
        ),
        r("AdsInsightsField").ESTIMATED_AD_RECALL_RATE,
        o("AdsInsightsFields").makeActionID(
          "catalog_segment_actions",
          "omni_view_content",
        ),
        o("AdsInsightsFields").makeActionID(
          "catalog_segment_actions",
          "omni_add_to_cart",
        ),
        o("AdsInsightsFields").makeActionID(
          "catalog_segment_value",
          "omni_add_to_cart",
        ),
        o("AdsInsightsFields").makeActionID(
          "catalog_segment_actions",
          "omni_purchase",
        ),
        o("AdsInsightsFields").makeActionID(
          "catalog_segment_value",
          "omni_purchase",
        ),
        o("AdsInsightsFields").makeActionID(
          "catalog_segment_value_omni_purchase_roas",
          "omni_purchase",
        ),
        "schedule",
        "end_time",
        "stop_time",
        o(
          "AdsMgmt2025H2ExperimentUtils",
        ).getIsAccountInPassbackOpenBetaReportingWithoutExposure()
          ? null
          : r("AdsInsightsField").ATTRIBUTION_SETTING,
        "bid",
        r("AdsInsightsField").LAST_SIGNIFICANT_EDIT,
        r("AdsInsightsField").QUALITY_SCORE_ORGANIC,
        r("AdsInsightsField").QUALITY_SCORE_ECTR,
        r("AdsInsightsField").QUALITY_SCORE_ECVR,
        "campaign_name",
      ].filter(Boolean);
    ((l.getPerformancePresetVariance = u),
      (l.DEFAULT_PERFORMANCE_PRESET_COLUMNS_ORDER = c));
  },
  98,
);
