__d(
  "AdsMgmtColumnCategoriesOmniConversionUtils",
  [
    "AdsInsightsFields",
    "AdsLandingPageViewsUtils",
    "AdsMgmtColumnCategoriesConversionUtils",
    "AdsMgmtColumnCategoriesCoversionCategoryUtils",
    "adsMemoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      o("AdsInsightsFields").makeActionID("actions", "omni_landing_page_view"),
    ]);
    function s(e, t, n, r, o) {
      (t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        r === void 0 && (r = !1),
        o === void 0 && (o = !1));
      var a = c(null, t, n, r, o);
      return Object.keys(a).find(function (t) {
        return t === e || a[t].includes(e);
      });
    }
    var u = r("adsMemoizeWithArgs")(
        function (e, t, n, r) {
          return (
            e === void 0 && (e = !1),
            t === void 0 && (t = !1),
            n === void 0 && (n = !1),
            r === void 0 && (r = !1),
            [
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "purchase_roas",
                  "omni_purchase",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "website_purchase_roas",
                    "offsite_conversion.fb_pixel_purchase",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "mobile_app_purchase_roas",
                    "app_custom_event.fb_mobile_purchase",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_spend_credits",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "actions",
                    "app_custom_event.fb_mobile_spent_credits",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "actions",
                    "credit_spent",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_spend_credits",
                ),
                channels: [],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "unique_actions",
                  "omni_spend_credits",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "unique_actions",
                    "app_custom_event.fb_mobile_spent_credits",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "cost_per_unique_action_type",
                  "omni_spend_credits",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "cost_per_unique_action_type",
                    "app_custom_event.fb_mobile_spent_credits",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_spend_credits",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "action_values",
                    "app_custom_event.fb_mobile_spent_credits",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "action_values",
                    "credit_spent",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_app_install",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "actions",
                    "mobile_app_install",
                  ),
                  o("AdsInsightsFields").makeActionID("actions", "app_install"),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_app_install",
                ),
                channels: [],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "catalog_segment_actions",
                  "omni_purchase",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_actions",
                    "offsite_conversion.fb_pixel_purchase",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_actions",
                    "app_custom_event.fb_mobile_purchase",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_actions",
                    "offline_conversion.purchase",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "catalog_segment_actions",
                  "omni_add_to_cart",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_actions",
                    "offsite_conversion.fb_pixel_add_to_cart",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_actions",
                    "app_custom_event.fb_mobile_add_to_cart",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "catalog_segment_actions",
                  "omni_view_content",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_actions",
                    "offsite_conversion.fb_pixel_view_content",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_actions",
                    "app_custom_event.fb_mobile_content_view",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "catalog_segment_value",
                  "omni_purchase",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_value",
                    "offsite_conversion.fb_pixel_purchase",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_value",
                    "app_custom_event.fb_mobile_purchase",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_value",
                    "offline_conversion.purchase",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "catalog_segment_value",
                  "omni_add_to_cart",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_value",
                    "offsite_conversion.fb_pixel_add_to_cart",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_value",
                    "app_custom_event.fb_mobile_add_to_cart",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "catalog_segment_value_omni_purchase_roas",
                  "omni_purchase",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_value_website_purchase_roas",
                    "offsite_conversion.fb_pixel_purchase",
                  ),
                  o("AdsInsightsFields").makeActionID(
                    "catalog_segment_value_mobile_purchase_roas",
                    "app_custom_event.fb_mobile_purchase",
                  ),
                ],
              },
              {
                omniConversion: o("AdsInsightsFields").makeActionID(
                  "donation_roas",
                  "donate_total",
                ),
                channels: [
                  o("AdsInsightsFields").makeActionID(
                    "donation_roas",
                    "donate_on_facebook",
                  ),
                ],
              },
            ]
              .concat(
                o(
                  "AdsMgmtColumnCategoriesCoversionCategoryUtils",
                ).getNewConversionChannelMetrics(e, t),
              )
              .concat(
                o(
                  "AdsMgmtColumnCategoriesCoversionCategoryUtils",
                ).getCurrentConversionChannelMetrics(n),
              )
              .concat(
                r
                  ? [
                      {
                        omniConversion: o("AdsInsightsFields").makeActionID(
                          "actions",
                          "omni_landing_page_view",
                        ),
                        channels: [
                          o("AdsInsightsFields").makeActionID(
                            "actions",
                            "app_site_visit",
                          ),
                          o("AdsInsightsFields").makeActionID(
                            "actions",
                            "landing_page_view",
                          ),
                        ].concat(
                          o(
                            "AdsLandingPageViewsUtils",
                          ).shouldUseLPVToVisitsRebranding()
                            ? ["page_visit_view", "profile_visit_view"]
                            : [],
                        ),
                      },
                    ]
                  : [],
              )
              .concat([
                {
                  omniConversion: o("AdsInsightsFields").makeActionID(
                    "converted_product_quantity",
                    "omni_purchase",
                  ),
                  channels: [
                    o("AdsInsightsFields").makeActionID(
                      "converted_product_quantity",
                      "offsite_conversion.fb_pixel_purchase",
                    ),
                    o("AdsInsightsFields").makeActionID(
                      "converted_product_quantity",
                      "app_custom_event.fb_mobile_purchase",
                    ),
                    o("AdsInsightsFields").makeActionID(
                      "converted_product_quantity",
                      "offline_conversion.purchase",
                    ),
                  ],
                },
                {
                  omniConversion: o("AdsInsightsFields").makeActionID(
                    "converted_product_value",
                    "omni_purchase",
                  ),
                  channels: [
                    o("AdsInsightsFields").makeActionID(
                      "converted_product_value",
                      "offsite_conversion.fb_pixel_purchase",
                    ),
                    o("AdsInsightsFields").makeActionID(
                      "converted_product_value",
                      "app_custom_event.fb_mobile_purchase",
                    ),
                    o("AdsInsightsFields").makeActionID(
                      "converted_product_value",
                      "offline_conversion.purchase",
                    ),
                  ],
                },
                {
                  omniConversion: o("AdsInsightsFields").makeActionID(
                    "converted_promoted_product_quantity",
                    "omni_purchase",
                  ),
                  channels: [
                    o("AdsInsightsFields").makeActionID(
                      "converted_promoted_product_quantity",
                      "offsite_conversion.fb_pixel_purchase",
                    ),
                    o("AdsInsightsFields").makeActionID(
                      "converted_promoted_product_quantity",
                      "app_custom_event.fb_mobile_purchase",
                    ),
                    o("AdsInsightsFields").makeActionID(
                      "converted_promoted_product_quantity",
                      "offline_conversion.purchase",
                    ),
                  ],
                },
                {
                  omniConversion: o("AdsInsightsFields").makeActionID(
                    "converted_promoted_product_value",
                    "omni_purchase",
                  ),
                  channels: [
                    o("AdsInsightsFields").makeActionID(
                      "converted_promoted_product_value",
                      "offsite_conversion.fb_pixel_purchase",
                    ),
                    o("AdsInsightsFields").makeActionID(
                      "converted_promoted_product_value",
                      "app_custom_event.fb_mobile_purchase",
                    ),
                    o("AdsInsightsFields").makeActionID(
                      "converted_promoted_product_value",
                      "offline_conversion.purchase",
                    ),
                  ],
                },
              ])
          );
        },
        function (e, t, n, r) {
          return (
            e === void 0 && (e = !1),
            t === void 0 && (t = !1),
            n === void 0 && (n = !1),
            r === void 0 && (r = !1),
            String(e) + ":" + String(t) + ":" + String(n) + ":" + String(r)
          );
        },
        i.id,
      ),
      c = r("adsMemoizeWithArgs")(
        function (t, n, r, a, i) {
          (t === void 0 && (t = null),
            n === void 0 && (n = !1),
            r === void 0 && (r = !1),
            a === void 0 && (a = !1),
            i === void 0 && (i = !1));
          var l = u(n, r, a, i);
          return l.reduce(function (n, r) {
            var a = r.channels,
              i = r.omniConversion;
            return (
              e.has(i)
                ? (n[i] = a)
                : (n[i] = a.filter(function (e) {
                    return (
                      t == null ||
                      t.includes(
                        o(
                          "AdsMgmtColumnCategoriesConversionUtils",
                        ).channelOfColumnID(e),
                      )
                    );
                  })),
              n
            );
          }, {});
        },
        function (e, t, n, r, o) {
          (e === void 0 && (e = null),
            t === void 0 && (t = !1),
            n === void 0 && (n = !1),
            r === void 0 && (r = !1),
            o === void 0 && (o = !1));
          var a =
            String(t) + ":" + String(n) + ":" + String(r) + ":" + String(o);
          return e != null ? JSON.stringify(e) + ":" + a : a;
        },
        i.id,
      );
    ((l.getOmniConversionColumnIDOfColumn = s),
      (l.getMergedOmniConversionChannels = u),
      (l.getMergedOmniConversionChannelsMap = c));
  },
  98,
);
