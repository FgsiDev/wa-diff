__d(
  "AdsMgmtColumnCategoriesUtils",
  [
    "fbt",
    "AdsExperimentsScenarioTestStrings",
    "AdsInsightsColumn",
    "AdsInsightsColumnCategory",
    "AdsInsightsField",
    "AdsInsightsFields",
    "AdsLandingPageViewsUtils",
    "AdsMgmt2024H2ExperimentUtils",
    "AdsMgmtColumnCategoriesCoversionCategoryUtils",
    "AdsMgmtColumnCategoriesOmniConversionUtils",
    "AdsMgmtColumnCategoriesUtilsMetricsKeys",
    "adsInsightsColumnConfigsGetBlocklistedColumnIDs",
    "adsMemoizeWithArgs",
    "filterNulls",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (e = r("adsMemoizeWithArgs"))(
        function (e, t, n, a, i, l, u, m, p, _, f) {
          (e === void 0 && (e = !1),
            t === void 0 && (t = !1),
            n === void 0 && (n = !1),
            a === void 0 && (a = !1),
            i === void 0 && (i = !1),
            l === void 0 && (l = !1),
            u === void 0 && (u = !1),
            m === void 0 && (m = !1),
            p === void 0 && (p = !1),
            _ === void 0 && (_ = !1),
            f === void 0 && (f = !1));
          var g = r("filterNulls")(
            [
              {
                label: s._(/*BTDS*/ "Adds of payment info"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "add_payment_info",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "add_payment_info",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "add_payment_info",
                ),
                id: r("AdsInsightsColumnCategory").ADD_PAYMENT_INFO,
              },
              {
                label: s._(/*BTDS*/ "Adds to cart"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_add_to_cart",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_add_to_cart",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_add_to_cart",
                ),
                id: r("AdsInsightsColumnCategory").ADD_TO_CART,
              },
              {
                label: s._(/*BTDS*/ "Adds to wishlist"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_add_to_wishlist",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_add_to_wishlist",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_add_to_wishlist",
                ),
                id: r("AdsInsightsColumnCategory").ADD_TO_WISHLIST,
              },
              {
                label: s._(/*BTDS*/ "Registrations completed"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_complete_registration",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_complete_registration",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_complete_registration",
                ),
                predictedLifetimeValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_complete_registration_pltv",
                ),
                id: r("AdsInsightsColumnCategory").COMPLETE_REGISTRATION,
              },
              {
                label: s._(/*BTDS*/ "Checkouts initiated"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_initiated_checkout",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_initiated_checkout",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_initiated_checkout",
                ),
                id: r("AdsInsightsColumnCategory").INITIATE_CHECKOUT,
              },
              {
                label: s._(/*BTDS*/ "Leads"),
                action: o("AdsInsightsFields").makeActionID("actions", "lead"),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "lead",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "lead",
                ),
                id: r("AdsInsightsColumnCategory").LEAD,
              },
              {
                label: s._(/*BTDS*/ "Purchases"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_purchase",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_purchase",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_purchase",
                ),
                margin: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_purchase_margin",
                ),
                predictedLifetimeValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_purchase_pltv",
                ),
                id: r("AdsInsightsColumnCategory").PURCHASE,
              },
              {
                label: s._(/*BTDS*/ "Searches"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_search",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_search",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_search",
                ),
                id: r("AdsInsightsColumnCategory").SEARCH,
              },
              {
                label: s._(/*BTDS*/ "Content views"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_view_content",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_view_content",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_view_content",
                ),
                id: r("AdsInsightsColumnCategory").VIEW_CONTENT,
              },
              {
                label: s._(/*BTDS*/ "Ratings submitted"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_rate",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_rate",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_rate",
                ),
                id: r("AdsInsightsColumnCategory").RATE,
              },
              {
                label: s._(/*BTDS*/ "Levels achieved"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_level_achieved",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_level_achieved",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_level_achieved",
                ),
                id: r("AdsInsightsColumnCategory").LEVEL_ACHIEVED,
              },
              {
                label: s._(/*BTDS*/ "Tutorials completed"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_tutorial_completion",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_tutorial_completion",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_tutorial_completion",
                ),
                id: r("AdsInsightsColumnCategory").TUTORIAL_COMPLETION,
              },
              {
                label: s._(/*BTDS*/ "Achievements unlocked"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_achievement_unlocked",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_achievement_unlocked",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_achievement_unlocked",
                ),
                id: r("AdsInsightsColumnCategory").ACHIEVEMENT_UNLOCKED,
              },
              {
                label: s._(/*BTDS*/ "App activations"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_activate_app",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_activate_app",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_activate_app",
                ),
                id: r("AdsInsightsColumnCategory").ACTIVATE_APP,
              },
              {
                label: s._(/*BTDS*/ "Store visits"),
                action: o("AdsInsightsFields").makeActionID(
                  "store_visit_actions",
                  "store_visit",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_store_visit_action",
                  "store_visit",
                ),
                id: r("AdsInsightsColumnCategory").STORE_VISITS,
              },
              {
                label: s._(/*BTDS*/ "App installs"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_app_install",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_app_install",
                ),
                predictedLifetimeValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_app_install_pltv",
                ),
                id: r("AdsInsightsColumnCategory").APP_INSTALL,
              },
              {
                label: s._(/*BTDS*/ "Credit spends"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_spend_credits",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_spend_credits",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "omni_spend_credits",
                ),
                id: r("AdsInsightsColumnCategory").SPENT_CREDITS,
              },
              {
                label: s._(/*BTDS*/ "Custom events"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_custom",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_custom",
                ),
                id: r("AdsInsightsColumnCategory").CUSTOM_EVENT,
              },
              {
                label: s._(/*BTDS*/ "Desktop app engagements"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "app_engagement",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "app_engagement",
                ),
                id: r("AdsInsightsColumnCategory").APP_ENGAGEMENT,
              },
              {
                label: s._(/*BTDS*/ "Desktop app story engagements"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "app_story",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "app_story",
                ),
                id: r("AdsInsightsColumnCategory").APP_STORY,
              },
              {
                label: s._(/*BTDS*/ "Desktop app uses"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "app_use",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "app_use",
                ),
                id: r("AdsInsightsColumnCategory").APP_USE,
              },
              {
                label: s._(/*BTDS*/ "Offline other conversions"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "offline_conversion.other",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "offline_conversion.other",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "offline_conversion.other",
                ),
                id: r("AdsInsightsColumnCategory").OTHER,
              },
              o(
                "AdsMgmtColumnCategoriesCoversionCategoryUtils",
              ).getNewConversionTotalMetrics(
                "contact",
                s._(/*BTDS*/ "Contacts"),
              ),
              o(
                "AdsMgmtColumnCategoriesCoversionCategoryUtils",
              ).getNewConversionTotalMetrics(
                "customize_product",
                s._(/*BTDS*/ "Products customized"),
              ),
              o(
                "AdsMgmtColumnCategoriesCoversionCategoryUtils",
              ).getNewConversionTotalMetrics(
                "donate",
                s._(/*BTDS*/ "Donations"),
              ),
              o(
                "AdsMgmtColumnCategoriesCoversionCategoryUtils",
              ).getNewConversionTotalMetrics(
                "find_location",
                s._(/*BTDS*/ "Location searches"),
              ),
              o(
                "AdsMgmtColumnCategoriesCoversionCategoryUtils",
              ).getNewConversionTotalMetrics(
                "schedule",
                s._(/*BTDS*/ "Appointments scheduled"),
              ),
              o(
                "AdsMgmtColumnCategoriesCoversionCategoryUtils",
              ).getNewConversionTotalMetricsIncludePLTV(
                "start_trial",
                s._(/*BTDS*/ "Trials started"),
              ),
              o(
                "AdsMgmtColumnCategoriesCoversionCategoryUtils",
              ).getNewConversionTotalMetrics(
                "submit_application",
                s._(/*BTDS*/ "Applications submitted"),
              ),
              o(
                "AdsMgmtColumnCategoriesCoversionCategoryUtils",
              ).getNewConversionTotalMetricsIncludePLTV(
                "subscribe",
                s._(/*BTDS*/ "Subscriptions"),
              ),
              {
                label: s._(/*BTDS*/ "In-app ad clicks"),
                action: o("AdsInsightsFields").makeActionID(
                  "conversions",
                  "ad_click_mobile_app",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_conversion",
                  "ad_click_mobile_app",
                ),
                id: r("AdsInsightsColumnCategory").AD_CLICK,
              },
              l
                ? {
                    label: s._(/*BTDS*/ "In-app ad impressions"),
                    action: o("AdsInsightsFields").makeActionID(
                      "conversions",
                      "ad_impression_mobile_app",
                    ),
                    costPerAction: o("AdsInsightsFields").makeActionID(
                      "cost_per_conversion",
                      "ad_impression_mobile_app",
                    ),
                    conversionValue: o("AdsInsightsFields").makeActionID(
                      "conversion_values",
                      "ad_impression_mobile_app",
                    ),
                    id: r("AdsInsightsColumnCategory").AD_IMPRESSION,
                  }
                : {
                    label: s._(/*BTDS*/ "In-app ad impressions"),
                    action: o("AdsInsightsFields").makeActionID(
                      "conversions",
                      "ad_impression_mobile_app",
                    ),
                    costPerAction: o("AdsInsightsFields").makeActionID(
                      "cost_per_conversion",
                      "ad_impression_mobile_app",
                    ),
                    id: r("AdsInsightsColumnCategory").AD_IMPRESSION,
                  },
              {
                label: s._(/*BTDS*/ "Game plays"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "games.plays",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "games.plays",
                ),
                id: r("AdsInsightsColumnCategory").GAME_PLAYS,
              },
              {
                label: s._(/*BTDS*/ "Mobile app D2 retention"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "app_custom_event.fb_mobile_d2_retention",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "app_custom_event.fb_mobile_d2_retention",
                ),
                id: r("AdsInsightsColumnCategory").MOBILE_D2_RETENTION,
              },
              {
                label: s._(/*BTDS*/ "Mobile app D7 retention"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "app_custom_event.fb_mobile_d7_retention",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "app_custom_event.fb_mobile_d7_retention",
                ),
                id: r("AdsInsightsColumnCategory").MOBILE_D7_RETENTION,
              },
              {
                label: s._(/*BTDS*/ "Meta workflow completions"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "onsite_conversion.flow_complete",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "onsite_conversion.flow_complete",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "onsite_conversion.flow_complete",
                ),
                id: r("AdsInsightsColumnCategory")
                  .ONSITE_CONVERSION_FLOW_COMPLETE,
              },
              {
                label: s._(/*BTDS*/ "On-Facebook messages to buy"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "onsite_conversion.message_to_buy",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "onsite_conversion.message_to_buy",
                ),
                id: r("AdsInsightsColumnCategory")
                  .ONSITE_CONVERSION_MESSAGE_TO_BUY,
              },
              {
                label: s._(/*BTDS*/ "Leads (Forms)"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "leadgen.other",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "leadgen.other",
                ),
                id: r("AdsInsightsColumnCategory").LEADGEN,
              },
              {
                label: s._(/*BTDS*/ "Commerce actions"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "commerce_event",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "commerce_event",
                ),
                id: r("AdsInsightsColumnCategory").COMMERCE_EVENT,
              },
              {
                label: s._(/*BTDS*/ "Other commerce actions"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "commerce_event.other",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "commerce_event.other",
                ),
                id: r("AdsInsightsColumnCategory").COMMERCE_EVENT_OTHER,
              },
              {
                label: s._(/*BTDS*/ "Purchases (Commerce)"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "commerce_event.purchase",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "commerce_event.purchase",
                ),
                conversionValue: o("AdsInsightsFields").makeActionID(
                  "action_values",
                  "commerce_event.purchase",
                ),
                id: r("AdsInsightsColumnCategory").COMMERCE_EVENT_PURCHASE,
              },
              {
                label: s._(/*BTDS*/ "Adds to cart (Commerce)"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "commerce_event.add_to_cart",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "commerce_event.add_to_cart",
                ),
                id: r("AdsInsightsColumnCategory").COMMERCE_EVENT_ADD_TO_CART,
              },
              {
                label: s._(/*BTDS*/ "Product views (Commerce)"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "commerce_event.view_content",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "commerce_event.view_content",
                ),
                id: r("AdsInsightsColumnCategory").COMMERCE_EVENT_VIEW_CONTENT,
              },
              {
                label: s._(/*BTDS*/ "Messages To Buy (Commerce)"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "commerce_event.message_to_buy",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "commerce_event.message_to_buy",
                ),
                id: r("AdsInsightsColumnCategory")
                  .COMMERCE_EVENT_MESSAGE_TO_BUY,
              },
              {
                label: s._(/*BTDS*/ "Purchase ROAS (Return on ad spend)"),
                action: o("AdsInsightsFields").makeActionID(
                  "purchase_roas",
                  "omni_purchase",
                ),
                id: r("AdsInsightsColumnCategory").PURCHASE_ROAS,
              },
              {
                label: s._(/*BTDS*/ "Phone number clicks"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "onsite_conversion.click_to_call",
                ),
                id: r("AdsInsightsColumnCategory")
                  .ONSITE_CONVERSION_CLICK_TO_CALL,
              },
              {
                label: s._(/*BTDS*/ "Get directions clicks"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "onsite_conversion.find_location",
                ),
                id: r("AdsInsightsColumnCategory")
                  .ONSITE_CONVERSION_FIND_LOCATION,
              },
              a
                ? {
                    label: s._(/*BTDS*/ "Offline purchases with shared items"),
                    action: o("AdsInsightsFields").makeActionID(
                      "catalog_segment_actions",
                      "offline_conversion.purchase",
                    ),
                    conversionValue: o("AdsInsightsFields").makeActionID(
                      "catalog_segment_value",
                      "offline_conversion.purchase",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CATALOG_SEGMENT_OFFLINE_PURCHASE,
                  }
                : null,
              n
                ? {
                    label: s._(
                      /*BTDS*/ "Website purchases converted product value",
                    ),
                    action: o("AdsInsightsFields").makeActionID(
                      "actions",
                      "offsite_conversion.fb_pixel_purchase",
                    ),
                    conversionValue: o("AdsInsightsFields").makeActionID(
                      "converted_product_value",
                      "offsite_conversion.fb_pixel_purchase",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CONVERTED_PRODUCT_QUANTITY_OFFSITE_CONVERSION_FB_PIXEL_PURCHASE,
                  }
                : null,
              n
                ? {
                    label: s._(
                      /*BTDS*/ "Mobile purchases converted product value",
                    ),
                    action: o("AdsInsightsFields").makeActionID(
                      "actions",
                      "app_custom_event.fb_mobile_purchase",
                    ),
                    conversionValue: o("AdsInsightsFields").makeActionID(
                      "converted_product_value",
                      "app_custom_event.fb_mobile_purchase",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CONVERTED_PRODUCT_QUANTITY_APP_CUSTOM_EVENT_FB_MOBILE_PURCHASE,
                  }
                : null,
              n
                ? {
                    label: s._(
                      /*BTDS*/ "Offline purchases converted product value",
                    ),
                    action: o("AdsInsightsFields").makeActionID(
                      "actions",
                      "offline_conversion.purchase",
                    ),
                    conversionValue: o("AdsInsightsFields").makeActionID(
                      "converted_product_value",
                      "offline_conversion.purchase",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CONVERTED_PRODUCT_QUANTITY_OFFLINE_CONVERSION_PURCHASE,
                  }
                : null,
              n
                ? {
                    label: s._(
                      /*BTDS*/ "Website purchases converted product quantity",
                    ),
                    action: o("AdsInsightsFields").makeActionID(
                      "actions",
                      "offsite_conversion.fb_pixel_purchase",
                    ),
                    conversionValue: o("AdsInsightsFields").makeActionID(
                      "converted_product_quantity",
                      "offsite_conversion.fb_pixel_purchase",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CONVERTED_PRODUCT_VALUE_OFFSITE_CONVERSION_FB_PIXEL_PURCHASE,
                  }
                : null,
              n
                ? {
                    label: s._(
                      /*BTDS*/ "Mobile purchases converted product quantity",
                    ),
                    action: o("AdsInsightsFields").makeActionID(
                      "actions",
                      "app_custom_event.fb_mobile_purchase",
                    ),
                    conversionValue: o("AdsInsightsFields").makeActionID(
                      "converted_product_quantity",
                      "app_custom_event.fb_mobile_purchase",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CONVERTED_PRODUCT_VALUE_APP_CUSTOM_EVENT_FB_MOBILE_PURCHASE,
                  }
                : null,
              n
                ? {
                    label: s._(
                      /*BTDS*/ "Offline purchases converted product quantity",
                    ),
                    action: o("AdsInsightsFields").makeActionID(
                      "actions",
                      "offline_conversion.purchase",
                    ),
                    conversionValue: o("AdsInsightsFields").makeActionID(
                      "converted_product_quantity",
                      "offline_conversion.purchase",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CONVERTED_PRODUCT_VALUE_OFFLINE_CONVERSION_PURCHASE,
                  }
                : null,
            ]
              .concat(
                u
                  ? [
                      {
                        label: o("AdsExperimentsScenarioTestStrings")
                          .SHOPS_ASSISTED_PURCHASES_LABEL,
                        action: r("AdsInsightsField").SHOPS_ASSISTED_PURCHASES,
                        id: r("AdsInsightsColumnCategory")
                          .SHOPS_ASSISTED_PURCHASES,
                      },
                      {
                        label: o("AdsExperimentsScenarioTestStrings")
                          .DIRECT_WEBSITE_PURCHASES_LABEL,
                        action: r("AdsInsightsField").DIRECT_WEBSITE_PURCHASES,
                        id: r("AdsInsightsColumnCategory")
                          .DIRECT_WEBSITE_PURCHASES,
                      },
                      {
                        label: o("AdsExperimentsScenarioTestStrings")
                          .SHOPS_ASSISTED_PURCHASES_CONVERSION_VALUE_LABEL,
                        action:
                          r("AdsInsightsField")
                            .SHOPS_ASSISTED_PURCHASES_CONVERSION_VALUE,
                        id: r("AdsInsightsColumnCategory")
                          .SHOPS_ASSISTED_PURCHASES_CONVERSION_VALUE,
                      },
                      {
                        label: o("AdsExperimentsScenarioTestStrings")
                          .DIRECT_WEBSITE_PURCHASES_CONVERSION_VALUE_LABEL,
                        action:
                          r("AdsInsightsField")
                            .DIRECT_WEBSITE_PURCHASES_CONVERSION_VALUE,
                        id: r("AdsInsightsColumnCategory")
                          .DIRECT_WEBSITE_PURCHASES_CONVERSION_VALUE,
                      },
                    ]
                  : null,
              )
              .concat(
                i
                  ? {
                      label: s._(/*BTDS*/ "Donation ROAS (Return on ad spend)"),
                      action: o("AdsInsightsFields").makeActionID(
                        "donation_roas",
                        "donate_total",
                      ),
                      id: r("AdsInsightsColumnCategory").DONATION_ROAS,
                    }
                  : [],
              )
              .concat(d(e))
              .concat([
                {
                  label: s._(/*BTDS*/ "Orders created"),
                  action: o("AdsInsightsFields").makeActionID(
                    "actions",
                    "onsite_conversion.messaging_order_created_v2",
                  ),
                  id: r("AdsInsightsColumnCategory")
                    .ONSITE_CONVERSION_MESSAGING_ORDER_CREATED_V2,
                },
                {
                  label: s._(/*BTDS*/ "Orders shipped"),
                  action: o("AdsInsightsFields").makeActionID(
                    "actions",
                    "onsite_conversion.messaging_order_shipped_v2",
                  ),
                  id: r("AdsInsightsColumnCategory")
                    .ONSITE_CONVERSION_MESSAGING_ORDER_SHIPPED_V2,
                },
              ])
              .concat(
                m
                  ? {
                      label: s._(/*BTDS*/ "Auto-detected purchases"),
                      action:
                        r("AdsInsightsColumn")
                          .ONSITE_CONVERSION_MESSAGING_DETECTED_PURCHASE_DEDUPED,
                      id: r("AdsInsightsColumnCategory")
                        .ONSITE_CONVERSION_MESSAGING_DETECTED_PURCHASE_DEDUPED,
                    }
                  : [],
              )
              .concat({
                label: o(
                  "AdsLandingPageViewsUtils",
                ).shouldUseLPVToVisitsRebranding()
                  ? s._(/*BTDS*/ "Visits")
                  : s._(/*BTDS*/ "Landing page views"),
                action: o("AdsInsightsFields").makeActionID(
                  "actions",
                  "omni_landing_page_view",
                ),
                costPerAction: o("AdsInsightsFields").makeActionID(
                  "cost_per_action_type",
                  "omni_landing_page_view",
                ),
                id: r("AdsInsightsColumnCategory").LANDING_PAGE_VIEW,
              })
              .concat(
                p
                  ? {
                      label: s._(/*BTDS*/ "App store views"),
                      action: o("AdsInsightsFields").makeActionID(
                        "actions",
                        "app_store_visit",
                      ),
                      costPerAction: o("AdsInsightsFields").makeActionID(
                        "cost_per_action_type",
                        "app_store_visit",
                      ),
                      id: r("AdsInsightsColumnCategory").APP_STORE_VISIT,
                    }
                  : null,
              )
              .concat(
                _
                  ? {
                      label: s._(/*BTDS*/ "Engaged page views"),
                      action: o("AdsInsightsFields").makeActionID(
                        "actions",
                        "onsite_conversion.engaged_page_view",
                      ),
                      costPerAction: o("AdsInsightsFields").makeActionID(
                        "cost_per_action_type",
                        "onsite_conversion.engaged_page_view",
                      ),
                      id: r("AdsInsightsColumnCategory")
                        .ONSITE_CONVERSION_ENGAGED_PAGE_VIEW,
                    }
                  : null,
              )
              .concat(
                f
                  ? [
                      {
                        label: s._(/*BTDS*/ "Preferred lead"),
                        action:
                          r("AdsInsightsColumn")
                            .ONSITE_CONVERSION_LEADGEN_PREFERRED_LEAD,
                        id: r("AdsInsightsColumnCategory")
                          .ONSITE_CONVERSION_LEADGEN_PREFERRED_LEAD,
                      },
                      {
                        label: s._(/*BTDS*/ "Non-preferred lead"),
                        action:
                          r("AdsInsightsColumn")
                            .ONSITE_CONVERSION_LEADGEN_NON_PREFERRED_LEAD,
                        id: r("AdsInsightsColumnCategory")
                          .ONSITE_CONVERSION_LEADGEN_NON_PREFERRED_LEAD,
                      },
                    ]
                  : null,
              ),
          ).sort(function (e, t) {
            return e.label.toString() > t.label.toString() ? 1 : -1;
          });
          return c(g);
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
      );
    function c(e) {
      var t = r("adsInsightsColumnConfigsGetBlocklistedColumnIDs")(),
        n = [];
      return (
        e.forEach(function (e) {
          (o("AdsMgmtColumnCategoriesUtilsMetricsKeys").METRICS_KEYS.forEach(
            function (n) {
              e[n] != null && t.contains(e[n]) && delete e[n];
            },
          ),
            o("AdsMgmt2024H2ExperimentUtils").getIsAccountInPLTV() ||
              delete e.predictedLifetimeValue,
            o("AdsMgmt2024H2ExperimentUtils").getIsAccountInMargin() ||
              delete e.margin,
            Object.keys(e).some(function (e) {
              return o(
                "AdsMgmtColumnCategoriesUtilsMetricsKeys",
              ).METRICS_KEYS.includes(e);
            }) && n.push(e));
        }),
        n
      );
    }
    var d = e(
        function (e) {
          return (
            e === void 0 && (e = !1),
            e
              ? [
                  {
                    label: s._(/*BTDS*/ "Content views with shared items"),
                    action: o("AdsInsightsFields").makeActionID(
                      "catalog_segment_actions",
                      "omni_view_content",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CATALOG_SEGMENT_OMNI_VIEW_CONTENT,
                  },
                  {
                    label: s._(/*BTDS*/ "Adds to cart with shared items"),
                    action: o("AdsInsightsFields").makeActionID(
                      "catalog_segment_actions",
                      "omni_add_to_cart",
                    ),
                    conversionValue: o("AdsInsightsFields").makeActionID(
                      "catalog_segment_value",
                      "omni_add_to_cart",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CATALOG_SEGMENT_OMNI_ADD_TO_CART,
                  },
                  {
                    label: s._(/*BTDS*/ "Purchases with shared items"),
                    action: o("AdsInsightsFields").makeActionID(
                      "catalog_segment_actions",
                      "omni_purchase",
                    ),
                    conversionValue: o("AdsInsightsFields").makeActionID(
                      "catalog_segment_value",
                      "omni_purchase",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CATALOG_SEGMENT_OMNI_PURCHASE,
                  },
                  {
                    label: s._(/*BTDS*/ "Purchase ROAS for shared items only"),
                    action: o("AdsInsightsFields").makeActionID(
                      "catalog_segment_value_omni_purchase_roas",
                      "omni_purchase",
                    ),
                    id: r("AdsInsightsColumnCategory")
                      .CATALOG_SEGMENT_OMNI_PURCHASE_ROAS,
                  },
                ]
              : []
          );
        },
        function (e) {
          return (e === void 0 && (e = !1), String(e));
        },
        i.id,
      ),
      m = e(
        function (e) {
          e === void 0 && (e = !1);
          var t = d(e);
          return t.reduce(function (e, t) {
            return (
              o("AdsMgmtColumnCategoriesUtilsMetricsKeys").METRICS_KEYS.forEach(
                function (n) {
                  r("isTruthy")(t[n]) && e.push(t[n]);
                },
              ),
              e
            );
          }, []);
        },
        function (e) {
          return (e === void 0 && (e = !1), String(e));
        },
        i.id,
      );
    function p(e, t, n, a, i, l, s, c, d, m, p) {
      (e === void 0 && (e = !1),
        t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        l === void 0 && (l = !1),
        s === void 0 && (s = !1),
        c === void 0 && (c = !1),
        d === void 0 && (d = !1),
        m === void 0 && (m = !1));
      var f = [];
      return (
        u(e, t, n, a, i, l, s, c, d, m, !1)
          .filter(function (e) {
            return (
              !_(e.id) ||
              (p != null &&
                p.capabilities != null &&
                p.capabilities.includes("CAN_SEE_APP_AD_EVENTS"))
            );
          })
          .forEach(function (e) {
            o("AdsMgmtColumnCategoriesUtilsMetricsKeys").METRICS_KEYS.forEach(
              function (t) {
                return (f = f.concat(r("isTruthy")(e[t]) ? e[t] : []));
              },
            );
          }),
        f
      );
    }
    function _(e) {
      return e.startsWith("ad_click") || e.startsWith("ad_impression");
    }
    function f(e) {
      return [
        "actions",
        "action_values",
        "conversions",
        "conversion_values",
      ].some(function (t) {
        return e.startsWith(t + ":");
      });
    }
    var g = e(
      function (e, t, n, r, a) {
        (e === void 0 && (e = null),
          t === void 0 && (t = !1),
          n === void 0 && (n = !1),
          r === void 0 && (r = !1),
          a === void 0 && (a = !1));
        var i = o(
          "AdsMgmtColumnCategoriesOmniConversionUtils",
        ).getMergedOmniConversionChannelsMap(e, t, n, r, a);
        return Object.keys(i).filter(function (e) {
          return i[e].length > 0 && f(e);
        });
      },
      function (e, t, n) {
        return (
          e === void 0 && (e = null),
          t === void 0 && (t = !1),
          n === void 0 && (n = !1),
          e != null ? JSON.stringify(e) : ":" + String(t) + ":" + String(n)
        );
      },
      i.id,
    );
    ((l.getMergedStandardEventCategoryColumns = u),
      (l.getMergedCatalogSegmentMetricsColumnActionIDs = m),
      (l.getMergedStandardEventCategoryColumnActionIDs = p),
      (l.getColumnIDsCanShowNux = g));
  },
  226,
);
