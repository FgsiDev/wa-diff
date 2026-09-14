__d(
  "adsMgmtTableColumnConfigActionFieldTypeOverrides",
  [
    "AdsInsightsActionFieldTypes",
    "AdsInsightsActionTypeAttributionWindiow",
    "AdsInsightsSortDirection",
    "adsInsightsColumnConfigsGetDescriptor",
    "createObjectFrom",
    "memoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        { actionFieldType: "actions", props: { sampleContentKey: "results" } },
        {
          actionFieldType: "unique_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "action_values",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "cost_per_action_type",
          props: {
            sampleContentKey: "cost",
            sampleContentLargeKey: "costLarge",
          },
        },
        {
          actionFieldType: "conversions",
          props: { isSortable: !1, sampleContentKey: "results" },
        },
        {
          actionFieldType: "conversion_values",
          props: { isSortable: !1, sampleContentKey: "results" },
        },
        {
          actionFieldType: "cost_per_conversion",
          props: {
            isSortable: !1,
            sampleContentKey: "cost",
            sampleContentLargeKey: "costLarge",
          },
        },
        {
          actionFieldType: "cost_per_unique_action_type",
          props: {
            sampleContentKey: "cost",
            sampleContentLargeKey: "costLarge",
          },
        },
        {
          actionFieldType: "video_avg_pct_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_avg_percent_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_avg_sec_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_avg_time_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_complete_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_p100_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_p25_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_p50_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_p75_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_p95_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_10_sec_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_thruplay_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_6_sec_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_30_sec_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "unique_video_continuous_2_sec_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "video_continuous_2_sec_watched_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "cost_per_2_sec_continuous_video_view",
          props: {
            sampleContentKey: "cost",
            sampleContentLargeKey: "costLarge",
          },
        },
        {
          actionFieldType: "website_ctr",
          props: {
            sampleContentKey: "percentage",
            supportAttributionWindow: !1,
          },
        },
        {
          actionFieldType: "cost_per_10_sec_video_view",
          props: {
            sampleContentKey: "cost",
            sampleContentLargeKey: "costLarge",
          },
        },
        {
          actionFieldType: "cost_per_thruplay",
          props: {
            sampleContentKey: "cost",
            sampleContentLargeKey: "costLarge",
          },
        },
        {
          actionFieldType: "cost_per_6_sec_video_view",
          props: {
            sampleContentKey: "cost",
            sampleContentLargeKey: "costLarge",
          },
        },
        {
          actionFieldType: "store_visit_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "cost_per_store_visit_action",
          props: { sampleContentKey: "cost" },
        },
        {
          actionFieldType: "purchase_roas",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "average_purchases_conversion_value",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "website_purchase_roas",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "mobile_app_purchase_roas",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "outbound_clicks",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "unique_outbound_clicks",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "outbound_clicks_ctr",
          props: { sampleContentKey: "percentage" },
        },
        {
          actionFieldType: "unique_outbound_clicks_ctr",
          props: { sampleContentKey: "percentage" },
        },
        {
          actionFieldType: "video_view_per_impression",
          props: { sampleContentKey: "percentage" },
        },
        {
          actionFieldType: "cost_per_outbound_click",
          props: {
            sampleContentKey: "cost",
            sampleContentLargeKey: "costLarge",
          },
        },
        {
          actionFieldType: "cost_per_unique_outbound_click",
          props: {
            sampleContentKey: "cost",
            sampleContentLargeKey: "costLarge",
          },
        },
        {
          actionFieldType: "catalog_segment_actions",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "catalog_segment_value",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "catalog_segment_value_omni_purchase_roas",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "catalog_segment_value_mobile_purchase_roas",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "catalog_segment_value_website_purchase_roas",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "custom_derived_metrics",
          props: { sampleContentKey: "results" },
        },
        {
          actionFieldType: "promoted_product_set_value",
          props: { sampleContentKey: "results" },
        },
      ],
      s = r("createObjectFrom")(
        e.map(function (e) {
          return e.actionFieldType;
        }),
        e,
      );
    function u(e) {
      var t,
        n = e.id,
        o = r("adsInsightsColumnConfigsGetDescriptor")(n),
        a = o.actionFieldType,
        i = o.actionType,
        l = a && ((t = s[a]) == null ? void 0 : t.props),
        u = !r("AdsInsightsActionTypeAttributionWindiow").INLINE_ONLY.includes(
          i,
        );
      return babelHelpers.extends(
        { actionFieldType: a, supportAttributionWindow: u },
        l,
      );
    }
    function c(e) {
      var t = r("adsInsightsColumnConfigsGetDescriptor")(e.id).actionFieldType;
      return t != null && s[t] != null;
    }
    var d = r("memoizeWithArgs")(
        function (e) {
          var t = s[e];
          if (t) {
            var n = {};
            t.props.isSortable !== !1 &&
              (n = { defaultSortingOrder: r("AdsInsightsSortDirection").DESC });
            var a = babelHelpers.extends(
              {},
              n,
              { actionFieldType: e, supportAttributionWindow: !0 },
              t.props,
            );
            return o("AdsInsightsActionFieldTypes").isValid(e) ? a : null;
          }
        },
        function (e) {
          return e;
        },
      ),
      m = { getProps: u, isApplicable: c, getActionFieldTypeConfigOrNull: d };
    l.default = m;
  },
  98,
);
