__d(
  "AdsMgmtColumnCategories",
  [
    "fbt",
    "AdFLEXConfig",
    "AdsAgencyFeeUtils",
    "AdsApplicationUtils",
    "AdsBudgetPoolGatingUtils",
    "AdsGuidanceActionsQEUtils",
    "AdsInsightsColumn",
    "AdsInsightsColumnCategory",
    "AdsInsightsColumnCategoryConsts",
    "AdsInsightsColumnUtil",
    "AdsInsightsColumns",
    "AdsInsightsCreativeGenerationInsightsUtils",
    "AdsInsightsField",
    "AdsInsightsFields",
    "AdsMgmtArrayUtils",
    "AdsMgmtColumn",
    "AdsMgmtColumnCategoriesCanSeeUtils",
    "AdsMgmtColumnCategoriesCapabilityChecks",
    "AdsMgmtColumnCategoriesCoversionCategoryUtils",
    "AdsMgmtColumnCategoriesUtils",
    "AdsMgmtCreativeWorkspaceGatingUtils",
    "AdsMgmtCustomMetricsCategoryConfigs",
    "AdsReportingCreativeInsightsUtils",
    "adsInsightsColumnConfigsGetBlocklistedColumnIDs",
    "adsMemoizeWithArgs",
    "canAccountSeeAdCampaignLabels",
    "filterNulls",
    "gkx",
    "ifRequired",
    "isAccountEligibleForMessengerMarketingMessages",
    "isSixSecondVideoViewsEnabledForAccount",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = o("AdsApplicationUtils").isPowerEditor(),
      m;
    r("ifRequired")(
      "AdsAccountStore",
      function (e) {
        m = e.getSelectedAccount().getValue();
      },
      function () {},
    );
    var p = r("canAccountSeeAdCampaignLabels")(m),
      _ = o(
        "AdsMgmtColumnCategoriesCapabilityChecks",
      ).canAccountSeeCatalogSegmentMetrics(m),
      f = (c = o(
        "AdsMgmtColumnCategoriesCanSeeUtils",
      )).canSeeOnFacebookInitiateCheckouts(m),
      g = m != null,
      h = m != null,
      y = c.canSeeOnFacebookDonationMetric(m),
      C = c.canSeePostConversionSignal(m),
      b = c.canSeePostInteractionsMetric(),
      v =
        (e =
          r("AdFLEXConfig") == null ||
          (u = r("AdFLEXConfig").get()) == null ||
          u.canSeeInsightsColumnCategory == null
            ? void 0
            : u.canSeeInsightsColumnCategory(
                r("AdsInsightsColumnCategory").MARKETING_MESSAGES,
              )) != null
          ? e
          : !1,
      S =
        r("gkx")("13496") ||
        o(
          "isAccountEligibleForMessengerMarketingMessages",
        ).isAccountEligibleForMessengerMarketingMessages(),
      R =
        r("gkx")("9124") ||
        o(
          "isAccountEligibleForMessengerMarketingMessages",
        ).isAccountEligibleForMessengerMarketingMessages(),
      L = r("gkx")("12510"),
      E = o("AdsMgmtColumnCategoriesCanSeeUtils").canSeeMessageExchangesMetrics(
        m,
      ),
      k = o(
        "AdsMgmtColumnCategoriesCanSeeUtils",
      ).canSeeMessagingContactsMetricsFn(m),
      I = o(
        "AdsMgmtColumnCategoriesCanSeeUtils",
      ).canSeeConversionLeadsMetrics(),
      T = m != null,
      D = o(
        "AdsMgmtColumnCategoriesCanSeeUtils",
      ).canSeeWAMOChannelFollowsMetrics(),
      x = r("gkx")("20691"),
      $ =
        (o("AdsApplicationUtils").isOnAdsManagerCampaigns() ||
          o("AdsApplicationUtils").isOnAdsManagerCampaignGroups()) &&
        o(
          "AdsInsightsCreativeGenerationInsightsUtils",
        ).isCreativeDiversityExperimentEnabled(),
      P =
        o("AdsApplicationUtils").isOnAdsManagerCampaigns() &&
        o(
          "AdsMgmtColumnCategoriesCanSeeUtils",
        ).canSeeComparisonBenchmarkColumn(),
      N =
        o("AdsApplicationUtils").isOnAdsManagerCampaigns() &&
        o(
          "AdsMgmtColumnCategoriesCanSeeUtils",
        ).canSeeHistoricalBenchmarkColumn(),
      M = o("AdsApplicationUtils").isAdsReporting(),
      w = [
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "onsite_conversion.add_to_cart",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "onsite_conversion.message_to_buy",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "onsite_conversion.view_content",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "onsite_conversion.purchase",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "onsite_conversion.flow_complete",
        ),
        o("AdsInsightsColumns").makeActionID("actions", "leadgen.other"),
      ],
      A = [
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "onsite_conversion.add_to_cart",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "onsite_conversion.message_to_buy",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "onsite_conversion.view_content",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "onsite_conversion.purchase",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "onsite_conversion.flow_complete",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "leadgen.other",
        ),
      ],
      F = [
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "onsite_conversion.purchase",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "onsite_conversion.flow_complete",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "onsite_conversion.lead_grouped",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "onsite_conversion.lead_grouped",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "onsite_conversion.click_to_call",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "onsite_conversion.find_location",
        ),
      ],
      O = function () {
        var e,
          t = o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
            d,
            [
              r("AdsInsightsColumn").OBJECTIVE,
              (e = r("AdsMgmtColumn")).PERFORMANCE_GOAL,
              e.BUYING_TYPE,
              e.BID,
              e.BUDGET,
              e.BUDGET_REMAINING,
              e.SCHEDULE,
              e.SPEND_LIMIT,
              e.AD_SCHEDULE,
              e.CONVERSION_LOCATION,
            ].concat(
              o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
                o("AdsAgencyFeeUtils").canSeeAgencyFeeInsightsColumns(m),
                [r("AdsInsightsColumn").AGENCY_FEE_MARKUP],
              ),
            ),
          ),
          n = M ? t.concat([r("AdsMgmtColumn").SPENT_PERCENT]) : t,
          a = o(
            "AdsBudgetPoolGatingUtils",
          ).getIsAccountInBudgetPoolsCreationWithoutExposure()
            ? n.concat([
                r("AdsMgmtColumn").BUDGET_POOL_VALUE_MULTIPLIER,
                r("AdsMgmtColumn").BUDGET_POOL_SHARED_BUDGET,
                r("AdsMgmtColumn").BUDGET_POOL_VALUE_WEIGHTED_CONVERSIONS,
                r("AdsMgmtColumn").BUDGET_POOL_VALUE_WEIGHTED_CPA,
              ])
            : n;
        return a.concat(
          o("AdsMgmtArrayUtils").emptyArrayIfFalsy(r("gkx")("15494"), [
            r("AdsInsightsColumn").MSA_SELLER_BUDGET,
          ]),
        );
      };
    if (f) {
      var B;
      (w.push(
        (B = o("AdsInsightsColumns")).makeActionID(
          "actions",
          "onsite_conversion.initiate_checkout",
        ),
      ),
        w.push(B.makeActionID("actions", "onsite_conversion.add_to_wishlist")),
        F.push(
          B.makeActionID(
            "action_values",
            "onsite_conversion.initiate_checkout",
          ),
        ),
        F.push(
          B.makeActionID("action_values", "onsite_conversion.add_to_wishlist"),
        ));
    }
    var W = [
        r("AdsInsightsColumnCategory").ADVANCED_METRICS,
        r("AdsInsightsColumnCategory").KEY_METRICS,
        r("AdsInsightsColumnCategory").DIAGNOSTICS,
        r("AdsInsightsColumnCategory").SETTINGS,
        r("AdsInsightsColumnCategory").CUSTOM_METRICS,
        r("AdsInsightsColumnCategory").CUSTOM_CONVERSIONS,
      ],
      q = [r("AdsInsightsColumn").PURCHASE_PER_LANDING_PAGE_VIEW],
      U = [r("AdsInsightsColumn").PURCHASES_PER_LINK_CLICK],
      V = [r("AdsInsightsColumn").LANDING_PAGE_VIEW_PER_LINK_CLICK],
      H = [],
      G = [r("AdsInsightsColumn").LINK_CLICKS_PER_RESULTS],
      z = [
        r("AdsInsightsColumn").ESTIMATED_AD_RECALLERS,
        r("AdsInsightsColumn").ESTIMATED_AD_RECALL_RATE,
      ],
      j = [r("AdsInsightsColumn").COST_PER_ESTIMATED_AD_RECALLERS];
    function K() {
      return [
        { id: r("AdsInsightsColumnCategory").ROOT, hideToggleAllButton: !0 },
      ];
    }
    function Q() {
      var e,
        t = [
          {
            id: (e = r("AdsInsightsColumnCategory")).PERFORMANCE,
            name: s._(/*BTDS*/ "Performance"),
            parent: e.ROOT,
          },
          {
            id: e.PERFORMANCE_PLACEHOLDER,
            name: s._(/*BTDS*/ "Performance"),
            parent: e.PERFORMANCE,
            headerHidden: "both",
          },
          {
            id: e.PERFORMANCE_COST,
            name: s._(/*BTDS*/ "Cost"),
            parent: e.PERFORMANCE,
          },
          {
            id: e.PERFORMANCE_FUNNEL,
            name: s._(/*BTDS*/ "Performance funnel"),
            parent: e.PERFORMANCE,
          },
          {
            id: e.ATTRIBUTION_SETTING,
            name: s._(/*BTDS*/ "Attribution setting"),
            parent: e.PERFORMANCE,
          },
        ];
      return t;
    }
    function X() {
      var e;
      return [
        { id: (e = r("AdsInsightsColumnCategory")).KEY_METRICS, align: "left" },
        {
          id: e.RESULTS_AND_SPEND,
          name: s._(/*BTDS*/ "Results & spend"),
          parent: e.KEY_METRICS,
        },
        {
          id: e.DISTRIBUTION,
          name: s._(/*BTDS*/ "Distribution"),
          parent: e.KEY_METRICS,
        },
        {
          id: e.AWARENESS_CATEGORY,
          name: s._(/*BTDS*/ "Awareness"),
          parent: e.KEY_METRICS,
        },
        {
          id: e.ENGAGEMENT_KEY_METRICS,
          name: s._(/*BTDS*/ "Engagement"),
          parent: e.KEY_METRICS,
        },
        {
          id: e.CONVERSIONS,
          name: s._(/*BTDS*/ "Conversions"),
          parent: e.KEY_METRICS,
        },
      ];
    }
    function Y() {
      var e,
        t = [
          {
            id: (e = r("AdsInsightsColumnCategory")).RESULTS,
            name: s._(/*BTDS*/ "Results"),
            parent: e.RESULTS_AND_SPEND,
            headerHidden: "both",
          },
          {
            id: e.SPEND,
            name: s._(/*BTDS*/ "Spend"),
            parent: e.RESULTS_AND_SPEND,
          },
        ];
      return t;
    }
    function J() {
      var e,
        t = [
          {
            id: (e = r("AdsInsightsColumnCategory")).VIEWS,
            name: s._(/*BTDS*/ "Views"),
            parent: e.DISTRIBUTION,
          },
          {
            id: e.IMPRESSIONS,
            name: s._(/*BTDS*/ "Impressions"),
            parent: e.DISTRIBUTION,
          },
        ];
      return t;
    }
    function Z() {
      var e;
      return [
        {
          id: (e = r("AdsInsightsColumnCategory")).CLICKS_KEY_METRICS,
          name: s._(/*BTDS*/ "Clicks"),
          parent: e.ENGAGEMENT_KEY_METRICS,
        },
        {
          id: e.TRAFFIC,
          name: s._(/*BTDS*/ "Traffic"),
          parent: e.ENGAGEMENT_KEY_METRICS,
        },
        {
          id: e.LIKES,
          name: s._(/*BTDS*/ "Follows & Likes"),
          parent: e.ENGAGEMENT_KEY_METRICS,
        },
        {
          id: e.ENGAGEMENT_SUBCATEGORY,
          name: s._(/*BTDS*/ "Engagement"),
          parent: e.ENGAGEMENT_KEY_METRICS,
        },
        {
          id: e.MESSAGING_ENGAGEMENT_KEY_METRICS,
          name: s._(/*BTDS*/ "Messaging"),
          parent: e.ENGAGEMENT_KEY_METRICS,
        },
        {
          id: e.CALLING_ENGAGEMENT_KEY_METRICS,
          name: s._(/*BTDS*/ "Calling"),
          parent: e.ENGAGEMENT_KEY_METRICS,
        },
      ];
    }
    function ee() {
      var e;
      return [
        {
          id: (e = r("AdsInsightsColumnCategory")).ENGAGEMENT,
          name: s._(/*BTDS*/ "Engagement"),
          parent: e.ROOT,
        },
        {
          id: e.ENGAGEMENT_PAGE_AND_POST,
          name: s._(/*BTDS*/ "Page post"),
          parent: e.ENGAGEMENT,
        },
        {
          id: e.ENGAGEMENT_PAGE_AND_POST_COST,
          name: s._(/*BTDS*/ "Cost: Page and post"),
          parent: e.ENGAGEMENT_PAGE_AND_POST,
        },
        {
          id: e.ENGAGEMENT_PAGE_AND_POST_VALUE,
          name: s._(/*BTDS*/ "Conversion value: Page and post"),
          parent: e.ENGAGEMENT_PAGE_AND_POST,
        },
        { id: e.CALLING, name: s._(/*BTDS*/ "Calling"), parent: e.ENGAGEMENT },
        {
          id: e.MESSAGING,
          name: s._(/*BTDS*/ "Messaging"),
          parent: e.ENGAGEMENT,
        },
        {
          id: e.MESSAGING_COST,
          name: s._(/*BTDS*/ "Cost: Messaging"),
          parent: e.MESSAGING,
        },
        { id: e.MEDIA, name: s._(/*BTDS*/ "Media"), parent: e.ENGAGEMENT },
        {
          id: e.MEDIA_COST,
          name: s._(/*BTDS*/ "Cost: media"),
          parent: e.MEDIA,
        },
        { id: e.CLICKS, name: s._(/*BTDS*/ "Clicks"), parent: e.ENGAGEMENT },
        {
          id: e.CLICKS_COST,
          name: s._(/*BTDS*/ "Cost: Clicks"),
          parent: e.CLICKS,
        },
        {
          id: e.AWARENESS,
          name: s._(/*BTDS*/ "Awareness"),
          parent: e.ENGAGEMENT,
        },
        {
          id: e.AWARENESS_COST,
          name: s._(/*BTDS*/ "Cost: Awareness"),
          parent: e.AWARENESS,
        },
        { id: e.LEADS, name: s._(/*BTDS*/ "Leads"), parent: e.CONVERSIONS },
      ];
    }
    function te() {
      var e;
      return [
        (e = o("AdsInsightsColumns")).makeActionID(
          "video_continuous_2_sec_watched_actions",
          "video_view",
        ),
        e.makeActionID("actions", "video_view"),
        e.makeActionID("cost_per_action_type", "video_view"),
        e.makeActionID("cost_per_2_sec_continuous_video_view", "video_view"),
        e.makeActionID("video_thruplay_watched_actions", "video_view"),
        e.makeActionID("cost_per_thruplay", "video_view"),
      ].concat(
        o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
          r("isSixSecondVideoViewsEnabledForAccount")(),
          [
            e.makeActionID("video_6_sec_watched_actions", "video_view"),
            e.makeActionID("cost_per_6_sec_video_view", "video_view"),
          ],
        ),
        [
          e.makeActionID("video_play_actions", "video_view"),
          e.makeActionID(
            "unique_video_continuous_2_sec_watched_actions",
            "video_view",
          ),
        ],
      );
    }
    function ne() {
      var e,
        t = [
          (e = o("AdsInsightsColumns")).makeActionID(
            "unique_video_continuous_2_sec_watched_actions",
            "video_view",
          ),
          e.makeActionID(
            "video_continuous_2_sec_watched_actions",
            "video_view",
          ),
          e.makeActionID("actions", "video_view"),
          e.makeActionID("video_10_sec_watched_actions", "video_view"),
          e.makeActionID("unique_video_view_10_sec", "video_view"),
          e.makeActionID("video_thruplay_watched_actions", "video_view"),
        ].concat(
          o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
            r("isSixSecondVideoViewsEnabledForAccount")(),
            [e.makeActionID("video_6_sec_watched_actions", "video_view")],
          ),
          [e.makeActionID("video_30_sec_watched_actions", "video_view")],
        );
      return (
        (t = t.concat([
          e.makeActionID("video_avg_percent_watched_actions", "video_view"),
          e.makeActionID("video_play_actions", "video_view"),
        ])),
        (t = t.concat([
          r("AdsInsightsColumn").CANVAS_AVG_VIEW_TIME,
          r("AdsInsightsColumn").CANVAS_AVG_VIEW_PERCENT,
        ])),
        g &&
          M &&
          (t = t.concat([
            o("AdsInsightsColumns").makeActionID(
              "instant_experience_element_impressions",
              "instant_experience_element_impression",
            ),
            o("AdsInsightsColumns").makeActionID(
              "instant_experience_element_reach",
              "instant_experience_element_impression",
            ),
          ])),
        t
      );
    }
    function re() {
      return M
        ? []
        : [
            {
              id: r("AdsInsightsColumnCategory").MEDIA_AWARENESS_KEY_METRICS,
              name: s._(/*BTDS*/ "Media"),
              parent: r("AdsInsightsColumnCategory").AWARENESS_CATEGORY,
            },
          ];
    }
    function oe() {
      return [r("AdsInsightsColumn").COST_PER_RESULT].concat(
        x ? [r("AdsInsightsColumn").RESULT_ADJUSTED_VALUES] : [],
        [r("AdsInsightsColumn").RESULT_VALUES],
        x ? [r("AdsInsightsColumn").RESULT_ADJUSTED_ROAS] : [],
        [
          r("AdsInsightsColumn").RESULT_ROAS,
          r("AdsInsightsColumn").RESULT_RATE,
          r("AdsInsightsColumn").RESULTS,
        ],
      );
    }
    function ae() {
      return [r("AdsMgmtColumn").SPENT_PERCENT, r("AdsMgmtColumn").spend];
    }
    function ie() {
      var e;
      return [
        (e = r("AdsInsightsColumn")).IMPRESSIONS,
        e.CPM,
        e.FREQUENCY,
        e.REACH,
        e.CPP,
      ];
    }
    function le() {
      var e;
      return [
        (e = o("AdsInsightsColumns")).makeActionID(
          "cost_per_action_type",
          "like",
        ),
        e.makeActionID("actions", "like"),
        r("AdsInsightsColumn").INSTAGRAM_PROFILE_FOLLOW_V2,
      ].concat(
        o("AdsMgmtArrayUtils").emptyArrayIfFalsy(D, [
          e.makeActionID("actions", "wa_promo_channel_follow"),
          e.makeActionID("cost_per_action_type", "wa_promo_channel_follow"),
        ]),
      );
    }
    function se() {
      var e;
      return [
        (e = o("AdsInsightsColumns")).makeActionID(
          "cost_per_action_type",
          "omni_landing_page_view",
        ),
        e.makeActionID("actions", "omni_landing_page_view"),
        r("AdsInsightsColumn").PROFILE_VISIT_VIEW,
      ].concat(
        o("AdsMgmtArrayUtils").emptyArrayIfFalsy(L, [
          e.makeActionID(
            "cost_per_action_type",
            "onsite_conversion.engaged_page_view",
          ),
          e.makeActionID("actions", "onsite_conversion.engaged_page_view"),
        ]),
      );
    }
    function ue() {
      var e, t;
      return [
        (t = o("AdsInsightsColumns")).makeActionID("actions", "checkin"),
        t.makeActionID("cost_per_action_type", "rsvp"),
        t.makeActionID("cost_per_action_type", "page_engagement"),
        t.makeActionID("cost_per_action_type", "post_engagement"),
        t.makeActionID("ar_effect_share", "ar_effect_share"),
        t.makeActionID("actions", "group_join"),
        t.makeActionID("actions", "rsvp"),
        t.makeActionID("actions", "page_engagement"),
        t.makeActionID("actions", "comment"),
        t.makeActionID("actions", "post_engagement"),
        t.makeActionID("actions", "post_reaction"),
        t.makeActionID("actions", "onsite_conversion.post_save"),
        t.makeActionID("actions", "post"),
        t.makeActionID(
          "actions",
          "instagram_upcoming_event_reminder_toggle_on",
        ),
      ]
        .concat(
          o("AdsMgmtArrayUtils").emptyArrayIfFalsy(g, [
            t.makeActionID("cost_per_action_type", "group_join"),
            (e = r("AdsInsightsColumn")).INSTAGRAM_UPCOMING_EVENT_REMINDERS_SET,
          ]),
        )
        .concat(
          o("AdsMgmtArrayUtils").emptyArrayIfFalsy(b, [
            t.makeActionID("actions", "post_interaction_gross"),
            t.makeActionID("cost_per_action_type", "post_interaction_gross"),
          ]),
        )
        .concat(
          o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
            o(
              "AdsMgmtColumnCategoriesCanSeeUtils",
            ).canSeePlayableFunnelColumns(),
            [
              e.PLAYABLE_GAME_STARTED,
              e.PLAYABLE_PRESENTED,
              e.PLAYABLE_DISMISSED,
              e.PLAYABLE_CTA_CLICK,
              e.PLAYABLE_GAME_START_RATE,
              e.PLAYABLE_AVERAGE_GAME_LENGTH,
            ],
          ),
        );
    }
    function ce() {
      return M ? [] : z.concat(j);
    }
    function de() {
      return [
        r("AdsInsightsColumn").MEDIA_VIEWS,
        r("AdsInsightsColumn").MEDIA_VIEWERS,
      ];
    }
    function me() {
      var e, t;
      return [
        (t = r("AdsInsightsColumn")).CALL_TO_ACTION_CLICKS,
        t.UNIQUE_CLICKS,
        t.UNIQUE_CTR,
        t.SOCIAL_CLICKS,
        t.UNIQUE_SOCIAL_CLICKS,
        t.CPC,
        (e = o("AdsInsightsColumns")).makeActionID(
          "cost_per_action_type",
          "link_click",
        ),
        e.makeActionID("actions", "photo_view"),
        e.makeActionID("cost_per_unique_action_type", "link_click"),
        e.makeActionID("cost_per_outbound_click", "outbound_click"),
        e.makeActionID("cost_per_unique_outbound_click", "outbound_click"),
        t.COST_PER_UNIQUE_CLICK,
      ].concat(o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d, [t.CLICKS, t.CTR]));
    }
    function pe() {
      return M
        ? []
        : [
            r("AdsInsightsColumn").CANVAS_AVG_VIEW_TIME,
            r("AdsInsightsColumn").CANVAS_AVG_VIEW_PERCENT,
          ];
    }
    function _e() {
      var e,
        t = [
          (e = o("AdsInsightsColumns")).makeActionID("actions", "link_click"),
        ]
          .concat(
            o("AdsMgmtArrayUtils").emptyArrayIfFalsy(T, [
              r("AdsInsightsColumn").SHOP_CLICKS,
            ]),
          )
          .concat(
            o("AdsMgmtArrayUtils").emptyArrayIfFalsy(r("gkx")("9120"), [
              r("AdsInsightsColumn").CLICKS_TO_BUSINESS_AI,
            ]),
          )
          .concat([
            e.makeActionID("unique_actions", "link_click"),
            e.makeActionID("outbound_clicks", "outbound_click"),
            e.makeActionID("unique_outbound_clicks", "outbound_click"),
            e.makeActionID("website_ctr", "link_click"),
            r("AdsInsightsColumn").UNIQUE_LINK_CLICKS_CTR,
            e.makeActionID("outbound_clicks_ctr", "outbound_click"),
            e.makeActionID("unique_outbound_clicks_ctr", "outbound_click"),
          ]);
      if (!M) return t.concat(me());
      var n = []
        .concat(
          o("AdsMgmtArrayUtils").emptyArrayIfFalsy(g, [
            r("AdsInsightsColumn").INSTAGRAM_UPCOMING_EVENT_REMINDERS_SET,
          ]),
        )
        .concat([r("AdsInsightsColumn").PROFILE_VISIT_VIEW]);
      return d
        ? t
            .concat([
              r("AdsInsightsColumn").CALL_TO_ACTION_CLICKS,
              r("AdsInsightsColumn").UNIQUE_CLICKS,
              r("AdsInsightsColumn").UNIQUE_CTR,
              r("AdsInsightsColumn").SOCIAL_CLICKS,
              r("AdsInsightsColumn").UNIQUE_SOCIAL_CLICKS,
              r("AdsInsightsColumn").INSTANT_EXPERIENCE_CLICKS_TO_OPEN,
              r("AdsInsightsColumn").INSTANT_EXPERIENCE_CLICKS_TO_START,
              o("AdsInsightsColumns").makeActionID(
                "instant_experience_outbound_clicks",
                "outbound_click",
              ),
            ])
            .concat(n)
        : t
            .concat([
              r("AdsInsightsColumn").CALL_TO_ACTION_CLICKS,
              r("AdsInsightsColumn").CLICKS,
              r("AdsInsightsColumn").UNIQUE_CLICKS,
              r("AdsInsightsColumn").CTR,
              r("AdsInsightsColumn").UNIQUE_CTR,
              r("AdsInsightsColumn").SOCIAL_CLICKS,
              r("AdsInsightsColumn").UNIQUE_SOCIAL_CLICKS,
              r("AdsInsightsColumn").INSTANT_EXPERIENCE_CLICKS_TO_OPEN,
              r("AdsInsightsColumn").INSTANT_EXPERIENCE_CLICKS_TO_START,
              o("AdsInsightsColumns").makeActionID(
                "instant_experience_outbound_clicks",
                "outbound_click",
              ),
            ])
            .concat(n);
    }
    function fe() {
      var e,
        t,
        n = [
          (t = o("AdsInsightsColumns")).makeActionID("actions", "link_click"),
        ]
          .concat(
            o("AdsMgmtArrayUtils").emptyArrayIfFalsy(T, [
              (e = r("AdsInsightsColumn")).SHOP_CLICKS,
            ]),
          )
          .concat(
            o("AdsMgmtArrayUtils").emptyArrayIfFalsy(r("gkx")("9120"), [
              e.CLICKS_TO_BUSINESS_AI,
            ]),
          )
          .concat([
            t.makeActionID("unique_actions", "link_click"),
            t.makeActionID("outbound_clicks", "outbound_click"),
            t.makeActionID("unique_outbound_clicks", "outbound_click"),
            t.makeActionID("website_ctr", "link_click"),
            e.UNIQUE_LINK_CLICKS_CTR,
            t.makeActionID("outbound_clicks_ctr", "outbound_click"),
            t.makeActionID("unique_outbound_clicks_ctr", "outbound_click"),
          ]),
        a = []
          .concat(
            o("AdsMgmtArrayUtils").emptyArrayIfFalsy(g, [
              e.INSTAGRAM_UPCOMING_EVENT_REMINDERS_SET,
            ]),
          )
          .concat([e.PROFILE_VISIT_VIEW]);
      return d
        ? n
            .concat([
              r("AdsInsightsColumn").CALL_TO_ACTION_CLICKS,
              r("AdsInsightsColumn").UNIQUE_CLICKS,
              r("AdsInsightsColumn").UNIQUE_CTR,
              r("AdsInsightsColumn").SOCIAL_CLICKS,
              r("AdsInsightsColumn").UNIQUE_SOCIAL_CLICKS,
              r("AdsInsightsColumn").INSTANT_EXPERIENCE_CLICKS_TO_OPEN,
              r("AdsInsightsColumn").INSTANT_EXPERIENCE_CLICKS_TO_START,
              o("AdsInsightsColumns").makeActionID(
                "instant_experience_outbound_clicks",
                "outbound_click",
              ),
            ])
            .concat(a)
        : n
            .concat([
              r("AdsInsightsColumn").CALL_TO_ACTION_CLICKS,
              r("AdsInsightsColumn").CLICKS,
              r("AdsInsightsColumn").UNIQUE_CLICKS,
              r("AdsInsightsColumn").CTR,
              r("AdsInsightsColumn").UNIQUE_CTR,
              r("AdsInsightsColumn").SOCIAL_CLICKS,
              r("AdsInsightsColumn").UNIQUE_SOCIAL_CLICKS,
              r("AdsInsightsColumn").INSTANT_EXPERIENCE_CLICKS_TO_OPEN,
              r("AdsInsightsColumn").INSTANT_EXPERIENCE_CLICKS_TO_START,
              o("AdsInsightsColumns").makeActionID(
                "instant_experience_outbound_clicks",
                "outbound_click",
              ),
            ])
            .concat(a);
    }
    function ge() {
      return M
        ? []
        : [
            o("AdsInsightsColumns").makeActionID(
              "cost_per_unique_action_type",
              "onsite_conversion.messaging_first_reply",
            ),
          ]
            .concat(
              o("AdsMgmtArrayUtils").emptyArrayIfFalsy(k, [
                o("AdsInsightsColumns").makeActionID(
                  "cost_per_unique_action_type",
                  "onsite_conversion.total_messaging_connection",
                ),
                r("AdsInsightsColumn")
                  .COST_PER_ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION,
              ]),
            )
            .concat([
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "onsite_conversion.messaging_reply",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "onsite_conversion.messaging_conversation_started_7d",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "onsite_conversion.messaging_conversation_started_7d",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "onsite_conversion.messaging_user_subscribed",
              ),
              o("AdsInsightsColumns").makeActionID(
                "unique_actions",
                "onsite_conversion.messaging_first_reply",
              ),
              o("AdsInsightsColumns").makeActionID(
                "unique_actions",
                "onsite_conversion.total_messaging_connection",
              ),
              r("AdsInsightsColumn")
                .ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION,
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "onsite_conversion.messaging_welcome_message_view",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "onsite_conversion.messaging_user_subscribed",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "onsite_conversion.messaging_conversation_replied_7d",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "onsite_conversion.messaging_reply",
              ),
            ])
            .concat(
              o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d && R, [
                r("AdsInsightsField").MESSAGES_DELIVERED_CTR,
                r("AdsInsightsColumn").READ_RATE,
                r("AdsInsightsColumn").COST_PER_MESSAGE_DELIVERED,
              ]),
            )
            .concat(
              o("AdsMgmtArrayUtils").emptyArrayIfFalsy(S, [
                r("AdsInsightsColumn").MESSAGES_DELIVERED,
              ]),
            )
            .concat(
              o("AdsMgmtArrayUtils").emptyArrayIfFalsy(E, [
                o("AdsInsightsColumns").makeActionID(
                  "actions",
                  "onsite_conversion.messaging_user_depth_2_message_send",
                ),
                o("AdsInsightsColumns").makeActionID(
                  "actions",
                  "onsite_conversion.messaging_user_depth_3_message_send",
                ),
                o("AdsInsightsColumns").makeActionID(
                  "actions",
                  "onsite_conversion.messaging_user_depth_5_message_send",
                ),
              ]),
            );
    }
    function he() {
      var e;
      return [
        (e = o("AdsInsightsColumns")).makeActionID(
          "unique_actions",
          "onsite_conversion.messaging_first_reply",
        ),
      ]
        .concat(
          o("AdsMgmtArrayUtils").emptyArrayIfFalsy(k, [
            e.makeActionID(
              "unique_actions",
              "onsite_conversion.total_messaging_connection",
            ),
            r("AdsInsightsColumn")
              .ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION,
          ]),
        )
        .concat([
          e.makeActionID("actions", "onsite_conversion.messaging_reply"),
        ])
        .concat([
          e.makeActionID(
            "actions",
            "onsite_conversion.messaging_conversation_started_7d",
          ),
          e.makeActionID(
            "actions",
            "onsite_conversion.messaging_user_subscribed",
          ),
        ])
        .concat([
          e.makeActionID(
            "actions",
            "onsite_conversion.messaging_welcome_message_view",
          ),
        ])
        .concat([
          e.makeActionID(
            "actions",
            "onsite_conversion.messaging_conversation_replied_7d",
          ),
        ])
        .concat(
          o("AdsMgmtArrayUtils").emptyArrayIfFalsy(E, [
            e.makeActionID(
              "actions",
              "onsite_conversion.messaging_user_depth_2_message_send",
            ),
            e.makeActionID(
              "actions",
              "onsite_conversion.messaging_user_depth_3_message_send",
            ),
            e.makeActionID(
              "actions",
              "onsite_conversion.messaging_user_depth_5_message_send",
            ),
          ]),
        );
    }
    function ye() {
      return M
        ? []
        : [
            o("AdsInsightsColumns").makeActionID(
              "actions",
              "click_to_call_callback_request_submitted",
            ),
            o("AdsInsightsColumns").makeActionID(
              "actions",
              "onsite_conversion.messaging_user_call_placed",
            ),
            o("AdsInsightsColumns").makeActionID(
              "actions",
              "click_to_call_native_call_placed",
            ),
          ];
    }
    function Ce() {
      return []
        .concat([
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "click_to_call_native_call_placed",
          ),
        ])
        .concat([
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "click_to_call_callback_request_submitted",
          ),
        ])
        .concat([
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "onsite_conversion.messaging_user_call_placed",
          ),
        ]);
    }
    function be() {
      var e = [].concat(
        M
          ? [
              {
                id: r("AdsInsightsColumnCategory").SETTINGS,
                align: "left",
                parent: r("AdsInsightsColumnCategory").ROOT,
                name: s._(/*BTDS*/ "Settings"),
              },
            ]
          : [
              {
                id: r("AdsInsightsColumnCategory").SETTINGS,
                align: "left",
                parent: r("AdsInsightsColumnCategory").ROOT,
                headerHidden: "both",
              },
            ],
      );
      if (!d) {
        var t;
        e.push(
          {
            id: (t = r("AdsInsightsColumnCategory")).SETTINGS_PLACEHOLDER,
            align: "left",
            name: s._(/*BTDS*/ "Settings"),
            parent: t.SETTINGS,
            headerHidden: "both",
          },
          {
            id: t.SETTINGS_LEVEL_1,
            align: "left",
            name: s._(/*BTDS*/ "Ads only"),
            parent: t.SETTINGS_PLACEHOLDER,
          },
          {
            id: t.SETTINGS_LEVEL_2,
            align: "left",
            name: s._(/*BTDS*/ "Ad Sets only"),
            parent: t.SETTINGS_PLACEHOLDER,
          },
          {
            id: t.SETTINGS_LEVEL_3,
            align: "left",
            name: s._(/*BTDS*/ "Campaigns only"),
            parent: t.SETTINGS_PLACEHOLDER,
          },
        );
      }
      return (
        e.push(
          {
            id: r("AdsInsightsColumnCategory").STATUS_AND_DATES,
            align: "left",
            name: s._(/*BTDS*/ "Status & dates"),
            parent: r("AdsInsightsColumnCategory").SETTINGS,
          },
          {
            id: r("AdsInsightsColumnCategory").OBJECT_NAMES_AND_IDS,
            align: "left",
            name: s._(/*BTDS*/ "Object names & IDs"),
            parent: r("AdsInsightsColumnCategory").SETTINGS,
          },
          {
            id: r("AdsInsightsColumnCategory").GOAL_BUDGET_AND_SCHEDULE,
            align: "left",
            name: s._(/*BTDS*/ "Goal, budget & schedule"),
            parent: r("AdsInsightsColumnCategory").SETTINGS,
          },
          {
            id: r("AdsInsightsColumnCategory").TARGETING,
            align: "left",
            name: s._(/*BTDS*/ "Targeting"),
            parent: r("AdsInsightsColumnCategory").SETTINGS,
          },
          {
            id: r("AdsInsightsColumnCategory").AD_CREATIVE,
            align: "left",
            name: s._(/*BTDS*/ "Ad creative"),
            parent: r("AdsInsightsColumnCategory").SETTINGS,
          },
          {
            id: r("AdsInsightsColumnCategory").TRACKING,
            align: "left",
            name: s._(/*BTDS*/ "Tracking source"),
            parent: r("AdsInsightsColumnCategory").SETTINGS,
            gk: !0,
          },
          {
            id: r("AdsInsightsColumnCategory").MARKETING_MESSAGES,
            align: "left",
            name: s._(/*BTDS*/ "Marketing messages"),
            parent: r("AdsInsightsColumnCategory").SETTINGS,
            gk: v,
          },
        ),
        e
      );
    }
    function ve() {
      var e;
      return [
        {
          id: (e = r("AdsInsightsColumnCategory")).ADVANCED_METRICS,
          align: "left",
        },
        {
          id: e.DISTRIBUTION_ADVANCED,
          align: "left",
          name: s._(/*BTDS*/ "Distribution"),
          parent: e.ADVANCED_METRICS,
        },
        {
          id: e.AWARENESS_ADVANCED,
          align: "left",
          name: s._(/*BTDS*/ "Awareness"),
          parent: e.ADVANCED_METRICS,
        },
        {
          id: e.ENGAGEMENT_ADVANCED,
          align: "left",
          name: s._(/*BTDS*/ "Engagement"),
          parent: e.ADVANCED_METRICS,
        },
        {
          id: e.CONVERSIONS_ADVANCED,
          align: "left",
          name: s._(/*BTDS*/ "Conversions"),
          parent: e.ADVANCED_METRICS,
        },
      ];
    }
    function Se() {
      var e;
      return [
        {
          id: (e = r("AdsInsightsColumnCategory")).IMPRESSIONS_ADVANCED,
          align: "left",
          name: s._(/*BTDS*/ "Impressions"),
          parent: e.DISTRIBUTION_ADVANCED,
        },
        {
          id: e.OPTIMIZATION_ADVANCED,
          align: "left",
          name: s._(/*BTDS*/ "Optimization events"),
          parent: e.DISTRIBUTION_ADVANCED,
        },
        {
          id: e.VIEWS_ADVANCED,
          align: "left",
          name: s._(/*BTDS*/ "Views"),
          parent: e.AWARENESS_ADVANCED,
        },
        {
          id: e.BRAND_LIFT,
          align: "left",
          name: s._(/*BTDS*/ "Brand lift"),
          parent: e.AWARENESS_ADVANCED,
        },
        {
          id: e.CLICKS_ADVANCED_SUBCATEGORY,
          align: "left",
          name: s._(/*BTDS*/ "Clicks"),
          parent: e.ENGAGEMENT_ADVANCED,
        },
        {
          id: e.PERFORMANCE_FUNNEL_ADVANCED,
          align: "left",
          name: s._(/*BTDS*/ "Performance funnel"),
          parent: e.ENGAGEMENT_ADVANCED,
        },
        {
          id: e.STANDARD_EVENTS_ADVANCED_SUBCATEGORY,
          align: "left",
          name: s._(/*BTDS*/ "Standard events"),
          parent: e.CONVERSIONS_ADVANCED,
        },
      ];
    }
    function Re() {
      return M
        ? []
        : [
            o("AdsInsightsColumns").makeActionID(
              "actions",
              "app_custom_event.fb_mobile_d2_retention",
            ),
            o("AdsInsightsColumns").makeActionID(
              "actions",
              "app_custom_event.fb_mobile_d7_retention",
            ),
            o("AdsInsightsColumns").makeActionID(
              "cost_per_action_type",
              "app_custom_event.fb_mobile_d2_retention",
            ),
            o("AdsInsightsColumns").makeActionID(
              "cost_per_action_type",
              "app_custom_event.fb_mobile_d7_retention",
            ),
            o("AdsInsightsColumns").makeActionID(
              "average_purchases_conversion_value",
              "omni_purchase",
            ),
          ];
    }
    function Le() {
      return M
        ? []
        : [
            r("AdsInsightsColumn").IMPRESSIONS_AUTO_REFRESH,
            r("AdsInsightsColumn").IMPRESSIONS_GROSS,
            o("AdsInsightsColumns").makeActionID(
              "instant_experience_element_impressions",
              "instant_experience_element_impression",
            ),
            o("AdsInsightsColumns").makeActionID(
              "instant_experience_element_reach",
              "instant_experience_element_impression",
            ),
          ];
    }
    function Ee() {
      var e;
      return [
        {
          id: (e = r("AdsInsightsColumnCategory")).DIAGNOSTICS,
          name: s._(/*BTDS*/ "Diagnostics"),
          parent: e.ROOT,
        },
        {
          id: e.AD_RELEVANCE,
          name: s._(/*BTDS*/ "Ad relevance"),
          parent: e.DIAGNOSTICS,
        },
        {
          id: e.MESSAGING_AND_CALLING,
          name: s._(/*BTDS*/ "Messaging and calling"),
          parent: e.DIAGNOSTICS,
        },
        {
          id: e.MEDIA_TRACKING_TAB,
          name: s._(/*BTDS*/ "Media"),
          parent: e.DIAGNOSTICS,
        },
      ];
    }
    function ke() {
      return M
        ? []
        : o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d, [
            r("AdsInsightsColumn").INSTANT_EXPERIENCE_CLICKS_TO_OPEN,
            r("AdsInsightsColumn").INSTANT_EXPERIENCE_CLICKS_TO_START,
            o("AdsInsightsColumns").makeActionID(
              "instant_experience_outbound_clicks",
              "outbound_click",
            ),
          ]);
    }
    function Ie() {
      var e,
        t = [
          (e = o("AdsInsightsColumns")).makeActionID(
            "cost_per_action_type",
            "games.plays",
          ),
          e.makeActionID("cost_per_action_type", "app_engagement"),
          e.makeActionID("cost_per_action_type", "app_install"),
          e.makeActionID("cost_per_action_type", "app_story"),
          e.makeActionID("cost_per_action_type", "app_use"),
          e.makeActionID("cost_per_action_type", "credit_spent"),
          e.makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_achievement_unlocked",
          ),
          e.makeActionID("cost_per_action_type", "app_custom_event"),
          e.makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_add_to_cart",
          ),
          e.makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_add_to_wishlist",
          ),
          e.makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_initiated_checkout",
          ),
          e.makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_content_view",
          ),
        ];
      return (
        M &&
          t.push(
            o("AdsInsightsColumns").makeActionID(
              "cost_per_action_type",
              "app_custom_event.fb_mobile_d2_retention",
            ),
            o("AdsInsightsColumns").makeActionID(
              "cost_per_action_type",
              "app_custom_event.fb_mobile_d7_retention",
            ),
          ),
        t.push(
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_spent_credits",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "mobile_app_install",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_level_achieved",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_add_payment_info",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_purchase",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_rate",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_complete_registration",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_search",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_activate_app",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "app_custom_event.fb_mobile_tutorial_completion",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "app_custom_event.other",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_achievement_unlocked",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_add_to_cart",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_add_to_wishlist",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_initiated_checkout",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_content_view",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_d2_retention",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_d7_retention",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_spent_credits",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_level_achieved",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_add_payment_info",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_purchase",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_rate",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_complete_registration",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_search",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_activate_app",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_unique_action_type",
            "app_custom_event.fb_mobile_tutorial_completion",
          ),
        ),
        t
      );
    }
    function Te() {
      var e,
        t = [
          (e = o("AdsInsightsColumns")).makeActionID("actions", "games.plays"),
          e.makeActionID("actions", "app_engagement"),
          e.makeActionID("actions", "app_install"),
          e.makeActionID("actions", "app_story"),
          e.makeActionID("actions", "app_use"),
          e.makeActionID("actions", "credit_spent"),
          e.makeActionID(
            "actions",
            "app_custom_event.fb_mobile_achievement_unlocked",
          ),
          e.makeActionID("actions", "app_custom_event"),
          e.makeActionID("actions", "app_custom_event.fb_mobile_add_to_cart"),
          e.makeActionID(
            "actions",
            "app_custom_event.fb_mobile_add_to_wishlist",
          ),
          e.makeActionID(
            "actions",
            "app_custom_event.fb_mobile_initiated_checkout",
          ),
          e.makeActionID("actions", "app_custom_event.fb_mobile_content_view"),
        ];
      return (
        M &&
          t.push(
            o("AdsInsightsColumns").makeActionID(
              "actions",
              "app_custom_event.fb_mobile_d2_retention",
            ),
            o("AdsInsightsColumns").makeActionID(
              "actions",
              "app_custom_event.fb_mobile_d7_retention",
            ),
          ),
        t.push(
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "app_custom_event.fb_mobile_spent_credits",
          ),
        ),
        _ &&
          t.push(
            o("AdsInsightsColumns").makeActionID(
              "catalog_segment_value",
              "app_custom_event.fb_mobile_purchase",
            ),
            o("AdsInsightsColumns").makeActionID(
              "catalog_segment_value_mobile_purchase_roas",
              "app_custom_event.fb_mobile_purchase",
            ),
          ),
        t.push(
          o("AdsInsightsColumns").makeActionID("actions", "mobile_app_install"),
          o("AdsInsightsColumns").makeActionID("actions", "app_site_visit"),
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "app_custom_event.fb_mobile_level_achieved",
          ),
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "app_custom_event.fb_mobile_add_payment_info",
          ),
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "app_custom_event.fb_mobile_purchase",
          ),
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "app_custom_event.fb_mobile_rate",
          ),
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "app_custom_event.fb_mobile_complete_registration",
          ),
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "app_custom_event.fb_mobile_search",
          ),
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "app_custom_event.fb_mobile_activate_app",
          ),
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "app_custom_event.fb_mobile_tutorial_completion",
          ),
          o("AdsInsightsColumns").makeActionID(
            "actions",
            "app_custom_event.other",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_achievement_unlocked",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_add_to_cart",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_add_to_wishlist",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_initiated_checkout",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_content_view",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_d2_retention",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_d7_retention",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_spent_credits",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_level_achieved",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_add_payment_info",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_purchase",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_rate",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_complete_registration",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_search",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_activate_app",
          ),
          o("AdsInsightsColumns").makeActionID(
            "unique_actions",
            "app_custom_event.fb_mobile_tutorial_completion",
          ),
        ),
        t
      );
    }
    function De() {
      var e = [
        r("AdsInsightsColumn").OPTIMIZATION_RESULTS,
        r("AdsInsightsColumn").COST_PER_OPTIMIZATION_RESULT,
      ];
      return M ? e.concat([r("AdsInsightsColumn").LAST_SIGNIFICANT_EDIT]) : e;
    }
    var xe = De();
    function $e() {
      return [
        {
          id: r("AdsInsightsColumnCategory").OPTIMIZATION,
          name: s._(/*BTDS*/ "Optimization"),
          parent: r("AdsInsightsColumnCategory").ROOT,
        },
      ];
    }
    var Pe = [].concat(K(), Q(), ee(), be(), Ee(), $e());
    function Ne() {
      return M ? Pe : [].concat(X(), Y(), J(), re(), Z(), ve(), Se(), Pe);
    }
    var Me = [
        o("AdsInsightsColumns").makeActionID("cost_per_action_type", "comment"),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "post_like",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "post_reaction",
        ),
        o("AdsInsightsColumns").makeActionID("cost_per_action_type", "post"),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "photo_view",
        ),
        o("AdsInsightsColumns").makeActionID("cost_per_action_type", "checkin"),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "offsite_conversion.add_to_cart",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "offsite_conversion.checkout",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "offsite_conversion.key_page_view",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "offsite_conversion.lead",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "offsite_conversion.other",
        ),
        o("AdsInsightsColumns").makeActionID(
          "actions",
          "offsite_conversion.registration",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "offsite_conversion.add_to_cart",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "offsite_conversion.checkout",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "offsite_conversion.key_page_view",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "offsite_conversion.lead",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "offsite_conversion.other",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "offsite_conversion.registration",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "offsite_conversion.add_to_cart",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "offsite_conversion.checkout",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "offsite_conversion.key_page_view",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "offsite_conversion.lead",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "offsite_conversion.other",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "offsite_conversion.registration",
        ),
        o("AdsInsightsColumns").makeActionID(
          "catalog_segment_value",
          "offsite_conversion.add_to_cart",
        ),
        o("AdsInsightsColumns").makeActionID(
          "catalog_segment_value",
          "offsite_conversion.checkout",
        ),
        o("AdsInsightsColumns").makeActionID(
          "catalog_segment_value",
          "offsite_conversion.fb_pixel_lead",
        ),
        o("AdsInsightsColumns").makeActionID(
          "catalog_segment_value",
          "offsite_conversion.other",
        ),
        o("AdsInsightsColumns").makeActionID(
          "catalog_segment_value",
          "offsite_conversion.registration",
        ),
        o("AdsInsightsColumns").makeActionID("actions", "offsite_conversion"),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "offsite_conversion",
        ),
        o("AdsInsightsColumns").makeActionID(
          "action_values",
          "offsite_conversion",
        ),
        o("AdsInsightsColumns").makeActionID("actions", "app_custom_event"),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_action_type",
          "app_custom_event",
        ),
        r("AdsInsightsField").TOTAL_ACTION_VALUE,
      ],
      we = [
        r("AdsInsightsColumnCategory").AD_CREATIVE,
        r("AdsInsightsColumnCategory").TARGETING,
        r("AdsInsightsColumnCategory").TRACKING,
      ],
      Ae = o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
        o("AdsGuidanceActionsQEUtils").canSeeActionsColumn(),
        [r("AdsMgmtColumn").RECOMMENDATIONS_GUIDANCE],
      ),
      Fe = o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
        o("AdsMgmtColumnCategoriesCanSeeUtils").canSeeMonitorFlagColumn(),
        [r("AdsMgmtColumn").MONITOR_FLAG],
      ),
      Oe = o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
        o(
          "AdsMgmtCreativeWorkspaceGatingUtils",
        ).getIsAccountInCreativeWorkspace(),
        [r("AdsMgmtColumn").CREATIVE_POTENTIAL],
      ),
      Be = function () {
        var e,
          t = [(e = r("AdsInsightsColumn")).RESULTS];
        return (
          t.push(
            e.RESULT_RATE,
            e.REACH,
            e.FREQUENCY,
            e.IMPRESSIONS,
            e.MEDIA_VIEWS,
          ),
          h && t.push(r("AdsInsightsColumn").MEDIA_VIEWERS),
          t.push(r("AdsMgmtColumn").DELIVERY),
          d && t.push(r("AdsInsightsColumn").CAMPAIGN_DELIVERY),
          t.push(
            r("AdsInsightsColumn").SOCIAL_REACH,
            r("AdsInsightsColumn").SOCIAL_IMPRESSIONS,
            r("AdsInsightsColumn").TOTAL_ACTIONS,
            r("AdsInsightsColumn").TOTAL_UNIQUE_ACTIONS,
            r("AdsInsightsColumn").SPEND,
            r("AdsInsightsColumn").TODAY_SPEND,
          ),
          o("AdsAgencyFeeUtils").canSeeAgencyFeeInsightsColumns(m) &&
            (t.push(r("AdsInsightsColumn").BILLABLE_AMOUNT_SPENT),
            t.push(r("AdsInsightsColumn").AGENCY_FEE_AMOUNT)),
          d
            ? t.push(
                r("AdsInsightsColumn").CLICKS,
                r("AdsInsightsColumn").CPC,
                r("AdsInsightsColumn").CTR,
              )
            : t.push(
                r("AdsMgmtColumn").BUDGET_GOAL,
                r("AdsMgmtColumn").IMPRESSIONS_GOAL,
                r("AdsMgmtColumn").PACING,
              ),
          t.push(
            r("AdsInsightsColumn").IMPRESSIONS_GROSS,
            r("AdsInsightsColumn").IMPRESSIONS_AUTO_REFRESH,
          ),
          t.push(r("AdsInsightsColumn").ATTRIBUTION_SETTING),
          C && t.push(r("AdsInsightsColumn").POST_CONVERSION_SIGNAL_RESULT),
          t.push.apply(t, Ae),
          t.push.apply(t, Oe),
          S && t.push(r("AdsInsightsColumn").MESSAGES_DELIVERED),
          d &&
            R &&
            t.push(
              r("AdsInsightsField").MESSAGES_DELIVERED_CTR,
              r("AdsInsightsColumn").READ_RATE,
            ),
          t.push(
            o("AdsInsightsColumns").makeActionID(
              "average_purchases_conversion_value",
              "omni_purchase",
            ),
          ),
          M &&
            (t.push.apply(t, G),
            t.push.apply(t, q),
            t.push.apply(t, U),
            t.push.apply(t, V)),
          t.push(r("AdsInsightsColumn").RESULT_VALUES),
          x && t.push(r("AdsInsightsColumn").RESULT_ADJUSTED_VALUES),
          x && t.push(r("AdsInsightsColumn").RESULT_ADJUSTED_ROAS),
          t.push(r("AdsInsightsColumn").RESULT_ROAS),
          t
        );
      },
      We = [].concat(q, U, V);
    function qe() {
      return M ? [] : We.concat(G);
    }
    function Ue() {
      return {
        AD_RELEVANCE: []
          .concat(N ? [r("AdsInsightsColumn").HISTORICAL_BENCHMARK] : [], [
            r("AdsInsightsColumn").QUALITY_SCORE_ORGANIC,
            r("AdsInsightsColumn").QUALITY_SCORE_ECTR,
            r("AdsInsightsColumn").QUALITY_SCORE_ECVR,
          ])
          .concat(
            o("AdsMgmtArrayUtils").emptyArrayIfFalsy($, [
              r("AdsInsightsColumn").CREATIVE_DIVERSITY_LABEL,
            ]),
          )
          .concat(
            o("AdsMgmtArrayUtils").emptyArrayIfFalsy(P, [
              r("AdsInsightsColumn").CPR_BENCHMARK,
            ]),
          ),
        RESULTS: oe(),
        SPEND: ae(),
        VIEWS: de(),
        VIEWS_ADVANCED: pe(),
        IMPRESSIONS: ie(),
        LIKES: le(),
        TRAFFIC: se(),
        ENGAGEMENT_SUBCATEGORY: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
          !M,
          ue(),
        ),
        IMPRESSIONS_ADVANCED: Le(),
        BRAND_LIFT: ce(),
        AWARENESS: z,
        AWARENESS_COST: j,
      };
    }
    function Ve() {
      var e, t;
      return {
        PERFORMANCE: Be(),
        PERFORMANCE_RELEVANCE_DIAGNOSTICS: (t = o("AdsMgmtArrayUtils"))
          .emptyArrayIfFalsy(N, [
            (e = r("AdsInsightsColumn")).HISTORICAL_BENCHMARK,
          ])
          .concat([
            e.QUALITY_SCORE_ORGANIC,
            e.QUALITY_SCORE_ECTR,
            e.QUALITY_SCORE_ECVR,
          ])
          .concat(t.emptyArrayIfFalsy($, [e.CREATIVE_DIVERSITY_LABEL]))
          .concat(t.emptyArrayIfFalsy(P, [e.CPR_BENCHMARK])),
        PERFORMANCE_COST: [e.COST_PER_RESULT]
          .concat([e.CPP, e.CPM, e.COST_PER_TOTAL_ACTIONS])
          .concat(t.emptyArrayIfFalsy(C, [e.COST_PER_POST_CONVERSION_SIGNAL]))
          .concat(t.emptyArrayIfFalsy(R, [e.COST_PER_MESSAGE_DELIVERED])),
        PERFORMANCE_FUNNEL: H.concat(G).concat(We),
        PERFORMANCE_FUNNEL_ADVANCED: qe(),
      };
    }
    function He() {
      var e, t;
      return {
        ENGAGEMENT_PAGE_AND_POST: [
          (e = o("AdsInsightsColumns")).makeActionID(
            "actions",
            "page_engagement",
          ),
          e.makeActionID("actions", "like"),
        ]
          .concat([r("AdsInsightsColumn").INSTAGRAM_PROFILE_FOLLOW_V2])
          .concat(
            (t = o("AdsMgmtArrayUtils")).emptyArrayIfFalsy(g, [
              e.makeActionID("actions", "group_join"),
            ]),
          )
          .concat([
            e.makeActionID("actions", "mention"),
            e.makeActionID("actions", "tab_view"),
            e.makeActionID("actions", "comment"),
            e.makeActionID("actions", "post_engagement"),
            e.makeActionID(
              "actions",
              o("AdsInsightsFields").getPostReactionActionTypeName(),
            ),
            e.makeActionID("actions", "onsite_conversion.post_save"),
            e.makeActionID("actions", "post"),
            e.makeActionID("actions", "photo_view"),
            e.makeActionID("actions", "rsvp"),
            e.makeActionID("actions", "receive_offer"),
            e.makeActionID("actions", "checkin"),
            e.makeActionID("ar_effect_share", "ar_effect_share"),
          ])
          .concat(
            t.emptyArrayIfFalsy(b, [
              e.makeActionID("actions", "post_interaction_gross"),
            ]),
          ),
        ENGAGEMENT_PAGE_AND_POST_COST: [
          e.makeActionID("cost_per_action_type", "page_engagement"),
          e.makeActionID("cost_per_action_type", "like"),
        ]
          .concat(
            t.emptyArrayIfFalsy(g, [
              e.makeActionID("cost_per_action_type", "group_join"),
            ]),
          )
          .concat([
            e.makeActionID("cost_per_action_type", "mention"),
            e.makeActionID("cost_per_action_type", "tab_view"),
            e.makeActionID("cost_per_action_type", "comment"),
            e.makeActionID("cost_per_action_type", "post_engagement"),
            e.makeActionID(
              "cost_per_action_type",
              o("AdsInsightsFields").getPostReactionActionTypeName(),
            ),
            e.makeActionID("cost_per_action_type", "post"),
            e.makeActionID("cost_per_action_type", "photo_view"),
            e.makeActionID("cost_per_action_type", "rsvp"),
            e.makeActionID("cost_per_action_type", "receive_offer"),
            e.makeActionID("cost_per_action_type", "checkin"),
          ])
          .concat(
            t.emptyArrayIfFalsy(b, [
              e.makeActionID("cost_per_action_type", "post_interaction_gross"),
            ]),
          ),
      };
    }
    function Ge() {
      return {
        SETTINGS: d
          ? []
          : r("filterNulls")([
              r("AdsInsightsField").DATE_START,
              r("AdsInsightsField").DATE_STOP,
              r("AdsInsightsColumn").ACCOUNT_ID,
              r("AdsInsightsColumn").ACCOUNT_NAME,
              o("AdsApplicationUtils").isFAME()
                ? r("AdsInsightsColumn").ACCOUNT_CURRENCY
                : null,
              r("AdsInsightsColumn").CAMPAIGN_GROUP_NAME,
              r("AdsInsightsColumn").CAMPAIGN_GROUP_ID,
              r("AdsInsightsColumn").CAMPAIGN_NAME,
              r("AdsInsightsColumn").CAMPAIGN_ID,
              r("AdsInsightsColumn").ADGROUP_ID,
              r("AdsInsightsColumn").ADGROUP_NAME,
              p ? r("AdsMgmtColumn").LABELS : null,
            ]),
        SETTINGS_LEVEL_3: d
          ? []
          : [
              r("AdsInsightsColumn").OBJECTIVE,
              r("AdsMgmtColumn").BUYING_TYPE,
              r("AdsMgmtColumn").START_TIME,
              r("AdsMgmtColumn").STOP_TIME,
            ],
        SETTINGS_LEVEL_2: d
          ? []
          : [
              r("AdsMgmtColumn").BID,
              r("AdsMgmtColumn").BUDGET,
              r("AdsMgmtColumn").SCHEDULE,
              r("AdsMgmtColumn").DEAL_START,
              r("AdsMgmtColumn").DEAL_END,
            ],
        SETTINGS_LEVEL_1: [],
        OBJECT_NAMES_AND_IDS: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d, [
          r("AdsInsightsColumn").ACCOUNT_ID,
          r("AdsInsightsColumn").ACCOUNT_NAME,
          r("AdsInsightsColumn").CAMPAIGN_GROUP_NAME,
          r("AdsInsightsColumn").CAMPAIGN_GROUP_ID,
          r("AdsInsightsColumn").CAMPAIGN_NAME,
          r("AdsInsightsColumn").CAMPAIGN_ID,
          r("AdsInsightsColumn").ADGROUP_ID,
          r("AdsInsightsColumn").ADGROUP_NAME,
          r("AdsMgmtColumn").LABELS,
        ]),
        STATUS_AND_DATES: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
          d,
          [
            r("AdsMgmtColumn").DATE_CREATED,
            r("AdsMgmtColumn").DATE_LAST_EDITED,
            r("AdsMgmtColumn").START,
            r("AdsMgmtColumn").END,
            r("AdsInsightsField").DATE_START,
            r("AdsInsightsField").DATE_STOP,
            r("AdsMgmtColumn").TIME_ELAPSED_PERCENT,
          ].concat(
            o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
              !M,
              [
                r("AdsInsightsColumn").LAST_SIGNIFICANT_EDIT,
                r("AdsMgmtColumn").DELIVERY,
                r("AdsMgmtColumn").attribution_setting,
                r("AdsInsightsColumn").CAMPAIGN_DELIVERY,
              ].concat(Ae, Oe, Fe),
            ),
          ),
        ),
        GOAL_BUDGET_AND_SCHEDULE: O(),
        TARGETING: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d, [
          r("AdsMgmtColumn").LOCATION,
          r("AdsMgmtColumn").AGE,
          r("AdsMgmtColumn").GENDER,
          r("AdsMgmtColumn").CUSTOM_AUDIENCES,
          r("AdsMgmtColumn").EXCLUDED_CUSTOM_AUDIENCES,
        ]),
        AD_CREATIVE: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d, [
          r("AdsMgmtColumn").RELATED_PAGE,
          r("AdsMgmtColumn").TITLE,
          r("AdsMgmtColumn").BODY,
          r("AdsMgmtColumn").LINK,
          r("AdsMgmtColumn").DESTINATION,
          r("AdsMgmtColumn").PREVIEW_LINK,
        ]),
        TRACKING: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d, [
          r("AdsMgmtColumn").URL_TAGS,
          r("AdsMgmtColumn").CONVERSION_TRACKING_PIXEL,
          r("AdsMgmtColumn").APP_TRACKING_EVENT,
          r("AdsMgmtColumn").OFFLINE_TRACKING_EVENT,
        ]),
      };
    }
    function ze() {
      var e;
      return {
        CALLING: Ce(),
        CALLING_ENGAGEMENT_KEY_METRICS: ye(),
        MESSAGING: he(),
        MESSAGING_ENGAGEMENT_KEY_METRICS: ge(),
        MESSAGING_AND_CALLING: [
          (e = o("AdsInsightsColumns")).makeActionID(
            "actions",
            "click_to_call_native_20s_call_connect",
          ),
          e.makeActionID("actions", "click_to_call_native_60s_call_connect"),
          e.makeActionID(
            "actions",
            "onsite_conversion.messaging_20s_call_connect",
          ),
          e.makeActionID(
            "actions",
            "onsite_conversion.messaging_60s_call_connect",
          ),
          e.makeActionID("actions", "onsite_conversion.messaging_block"),
        ],
        MESSAGING_COST: [
          e.makeActionID(
            "cost_per_unique_action_type",
            "onsite_conversion.messaging_first_reply",
          ),
        ]
          .concat(
            o("AdsMgmtArrayUtils").emptyArrayIfFalsy(k, [
              e.makeActionID(
                "cost_per_unique_action_type",
                "onsite_conversion.total_messaging_connection",
              ),
              r("AdsInsightsColumn")
                .COST_PER_ONSITE_CONVERSION_RETURNING_MESSAGING_CONNECTION,
            ]),
          )
          .concat([
            e.makeActionID(
              "cost_per_action_type",
              "onsite_conversion.messaging_reply",
            ),
            e.makeActionID(
              "cost_per_action_type",
              "onsite_conversion.messaging_conversation_started_7d",
            ),
            e.makeActionID(
              "cost_per_action_type",
              "onsite_conversion.messaging_user_subscribed",
            ),
          ]),
      };
    }
    function je() {
      return {
        MEDIA: ne(),
        MEDIA_AWARENESS_KEY_METRICS: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
          !M,
          te(),
        ),
        MEDIA_TRACKING_TAB: o("AdsMgmtArrayUtils")
          .emptyArrayIfFalsy(
            !M &&
              o(
                "AdsReportingCreativeInsightsUtils",
              ).shouldShowHookAndHoldRateMetrics(),
            [
              o("AdsInsightsColumns").makeActionID(
                "video_hook_rate",
                "video_view",
              ),
              o("AdsInsightsColumns").makeActionID(
                "video_hold_rate",
                "video_view",
              ),
            ],
          )
          .concat([
            o("AdsInsightsColumns").makeActionID(
              "video_avg_time_watched_actions",
              "video_view",
            ),
            o("AdsInsightsColumns").makeActionID(
              "video_p25_watched_actions",
              "video_view",
            ),
            o("AdsInsightsColumns").makeActionID(
              "video_p50_watched_actions",
              "video_view",
            ),
            o("AdsInsightsColumns").makeActionID(
              "video_p75_watched_actions",
              "video_view",
            ),
            o("AdsInsightsColumns").makeActionID(
              "video_p95_watched_actions",
              "video_view",
            ),
            o("AdsInsightsColumns").makeActionID(
              "video_p100_watched_actions",
              "video_view",
            ),
          ])
          .concat(
            o("AdsMgmtArrayUtils").emptyArrayIfFalsy(!M, [
              o("AdsInsightsColumns").makeActionID(
                "video_view_per_impression",
                "video_view",
              ),
            ]),
          ),
        MEDIA_COST: [
          o("AdsInsightsColumns").makeActionID(
            "cost_per_2_sec_continuous_video_view",
            "video_view",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_action_type",
            "video_view",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_10_sec_video_view",
            "video_view",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_thruplay",
            "video_view",
          ),
        ].concat(
          o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
            r("isSixSecondVideoViewsEnabledForAccount")(),
            [
              o("AdsInsightsColumns").makeActionID(
                "cost_per_6_sec_video_view",
                "video_view",
              ),
            ],
          ),
        ),
        CLICKS: fe(),
        CLICKS_ADVANCED_SUBCATEGORY: ke(),
        CLICKS_KEY_METRICS: _e(),
        CLICKS_COST: d
          ? [
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "link_click",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_unique_action_type",
                "link_click",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_outbound_click",
                "outbound_click",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_unique_outbound_click",
                "outbound_click",
              ),
              r("AdsInsightsColumn").COST_PER_UNIQUE_CLICK,
            ]
          : [
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "link_click",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_unique_action_type",
                "link_click",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_outbound_click",
                "outbound_click",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_unique_outbound_click",
                "outbound_click",
              ),
              r("AdsInsightsColumn").CPC,
              r("AdsInsightsColumn").COST_PER_UNIQUE_CLICK,
            ],
      };
    }
    function Ke() {
      return {
        ON_FACEBOOK: w,
        ON_FACEBOOK_COST: A,
        ON_FACEBOOK_CONVERSION_VALUE: F,
        LEADS: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(I, [
          o("AdsInsightsColumns").makeActionID(
            "conversion_leads",
            "conversion_lead",
          ),
          o("AdsInsightsColumns").makeActionID(
            "cost_per_conversion_lead",
            "conversion_lead",
          ),
          o("AdsInsightsColumns").makeActionID(
            "conversion_lead_rate",
            "conversion_lead",
          ),
        ]),
      };
    }
    function Qe() {
      var e;
      return {
        CONVERSIONS: [],
        STANDARD_EVENTS: o(
          "AdsMgmtColumnCategoriesUtils",
        ).getMergedStandardEventCategoryColumnActionIDs(
          o(
            "AdsMgmtColumnCategoriesCapabilityChecks",
          ).canAccountSeeCatalogSegmentMetrics(m),
          (e = o(
            "AdsMgmtColumnCategoriesCanSeeUtils",
          )).canSeeOnFacebookInitiateCheckouts(m),
          e.canSeeBrandCategoryReportingMetrics(m),
          o(
            "AdsMgmtColumnCategoriesCapabilityChecks",
          ).canAccountSeeOfflineSharedItemMetrics(m),
          e.canSeeOnFacebookDonationMetric(m),
          m != null,
          m != null,
          e.canSeeAutoDetectedPurchaseMetric(m),
          e.canSeeAppStoreVisitMetric(),
          e.canSeeOnsiteConversionEngagedPageViewMetric(),
        ),
        STANDARD_EVENTS_ADVANCED_SUBCATEGORY: Re(),
      };
    }
    function Xe() {
      var e;
      return {
        OPTIMIZATION: xe,
        OPTIMIZATION_ADVANCED: xe,
        MARKETING_MESSAGES: [
          (e = r("AdsInsightsColumn")).MARKETING_MESSAGES_SENT,
          e.MARKETING_MESSAGES_DELIVERED,
          e.MARKETING_MESSAGES_LINK_BTN_CLICK,
          e.MARKETING_MESSAGES_LINK_BTN_CLICK_RATE,
          e.MARKETING_MESSAGES_COST_PER_LINK_BTN_CLICK,
          e.MARKETING_MESSAGES_COST_PER_DELIVERED,
          e.MARKETING_MESSAGES_SPEND,
          e.MARKETING_MESSAGES_READ_RATE,
          e.MARKETING_MESSAGES_LANGUAGE,
        ],
      };
    }
    var Ye = function () {
        var e;
        return babelHelpers.extends(
          {},
          Ue(),
          Ve(),
          He(),
          ze(),
          je(),
          Ke(),
          Qe(),
          Xe(),
          Ge(),
          {
            WEBSITE_ACTIONS_FB_PIXEL: [
              (e = o("AdsInsightsColumns")).makeActionID(
                "actions",
                "offsite_conversion",
              ),
              e.makeActionID(
                "actions",
                "offsite_conversion.fb_pixel_add_payment_info",
              ),
              e.makeActionID(
                "actions",
                "offsite_conversion.fb_pixel_add_to_cart",
              ),
              e.makeActionID(
                "actions",
                "offsite_conversion.fb_pixel_add_to_wishlist",
              ),
              e.makeActionID(
                "actions",
                "offsite_conversion.fb_pixel_complete_registration",
              ),
              e.makeActionID(
                "actions",
                "offsite_conversion.fb_pixel_initiate_checkout",
              ),
              e.makeActionID("actions", "offsite_conversion.fb_pixel_lead"),
              e.makeActionID("actions", "offsite_conversion.fb_pixel_purchase"),
              e.makeActionID("actions", "offsite_conversion.fb_pixel_search"),
              e.makeActionID(
                "actions",
                "offsite_conversion.fb_pixel_view_content",
              ),
            ],
            WEBSITE_CPA_FB_PIXEL: [
              e.makeActionID("cost_per_action_type", "offsite_conversion"),
              e.makeActionID(
                "cost_per_action_type",
                "offsite_conversion.fb_pixel_add_payment_info",
              ),
              e.makeActionID(
                "cost_per_action_type",
                "offsite_conversion.fb_pixel_add_to_cart",
              ),
              e.makeActionID(
                "cost_per_action_type",
                "offsite_conversion.fb_pixel_add_to_wishlist",
              ),
              e.makeActionID(
                "cost_per_action_type",
                "offsite_conversion.fb_pixel_complete_registration",
              ),
              e.makeActionID(
                "cost_per_action_type",
                "offsite_conversion.fb_pixel_initiate_checkout",
              ),
              e.makeActionID(
                "cost_per_action_type",
                "offsite_conversion.fb_pixel_lead",
              ),
              e.makeActionID(
                "cost_per_action_type",
                "offsite_conversion.fb_pixel_purchase",
              ),
              e.makeActionID(
                "cost_per_action_type",
                "offsite_conversion.fb_pixel_search",
              ),
              e.makeActionID(
                "cost_per_action_type",
                "offsite_conversion.fb_pixel_view_content",
              ),
              e.makeActionID("cost_per_action_type", "landing_page_view"),
              e.makeActionID(
                "cost_per_unique_action_type",
                "landing_page_view",
              ),
            ],
            WEBSITE_CONVERSIONS_FB_PIXEL: r("filterNulls")([
              e.makeActionID(
                "website_purchase_roas",
                "offsite_conversion.fb_pixel_purchase",
              ),
              _
                ? o("AdsInsightsColumns").makeActionID(
                    "catalog_segment_value",
                    "offsite_conversion.fb_pixel_purchase",
                  )
                : null,
              _
                ? o("AdsInsightsColumns").makeActionID(
                    "catalog_segment_value_website_purchase_roas",
                    "offsite_conversion.fb_pixel_purchase",
                  )
                : null,
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.fb_pixel_add_payment_info",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.fb_pixel_add_to_cart",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.fb_pixel_add_to_wishlist",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.fb_pixel_complete_registration",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.fb_pixel_initiate_checkout",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.fb_pixel_lead",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.fb_pixel_purchase",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.fb_pixel_search",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.fb_pixel_view_content",
              ),
            ]),
            WEBSITE_ACTIONS_CONVERSION_PIXEL: [
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offsite_conversion.add_to_cart",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offsite_conversion.checkout",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offsite_conversion.key_page_view",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offsite_conversion.lead",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offsite_conversion.registration",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offsite_conversion.other",
              ),
            ].concat([
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "landing_page_view",
              ),
            ]),
            WEBSITE_CPA_CONVERSION_PIXEL: [
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offsite_conversion.add_to_cart",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offsite_conversion.checkout",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offsite_conversion.key_page_view",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offsite_conversion.lead",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offsite_conversion.registration",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offsite_conversion.other",
              ),
            ],
            WEBSITE_CONVERSIONS_CONVERSION_PIXEL: [
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.add_to_cart",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.checkout",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.key_page_view",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.lead",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.registration",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offsite_conversion.other",
              ),
            ],
            WEBSITE_ACTIONS_CUSTOM_CONVERSIONS: [],
            WEBSITE_CPA_CUSTOM_CONVERSIONS: [],
            WEBSITE_CONVERSIONS_CUSTOM_CONVERSIONS: [],
            APPS: Te(),
            APPS_CPA: Ie(),
            APPS_CONVERSIONS: [
              o("AdsInsightsColumns").makeActionID(
                "mobile_app_purchase_roas",
                "app_custom_event.fb_mobile_purchase",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "app_custom_event",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "app_custom_event.fb_mobile_content_view",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "app_custom_event.fb_mobile_rate",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "app_custom_event.fb_mobile_add_to_cart",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "app_custom_event.fb_mobile_add_to_wishlist",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "app_custom_event.fb_mobile_initiated_checkout",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "app_custom_event.fb_mobile_purchase",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "app_custom_event.fb_mobile_search",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "app_custom_event.fb_mobile_spent_credits",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "credit_spent",
              ),
            ],
            APP_ACTIONS_CUSTOM_CONVERSIONS: [],
            APP_CPA_CUSTOM_CONVERSIONS: [],
            APP_CONVERSIONS_CUSTOM_CONVERSIONS: [],
            ON_FACEBOOK: w,
            ON_FACEBOOK_COST: A,
            ON_FACEBOOK_CONVERSION_VALUE: F,
            OFFLINE: [
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offline_conversion.add_payment_info",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offline_conversion.add_to_cart",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offline_conversion.add_to_wishlist",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offline_conversion.complete_registration",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offline_conversion.initiate_checkout",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offline_conversion.lead",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offline_conversion.purchase",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offline_conversion.search",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offline_conversion.view_content",
              ),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "offline_conversion.other",
              ),
            ],
            STORE_VISITS: [
              o("AdsInsightsColumns").makeActionID(
                "store_visit_actions",
                "store_visit",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_store_visit_action",
                "store_visit",
              ),
            ],
            OFFLINE_ACTIONS_CPA: [
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offline_conversion.add_payment_info",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offline_conversion.add_to_cart",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offline_conversion.add_to_wishlist",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offline_conversion.complete_registration",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offline_conversion.initiate_checkout",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offline_conversion.lead",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offline_conversion.purchase",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offline_conversion.search",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offline_conversion.view_content",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "offline_conversion.other",
              ),
            ],
            OFFLINE_CONVERSIONS: [
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offline_conversion.add_payment_info",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offline_conversion.add_to_cart",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offline_conversion.add_to_wishlist",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offline_conversion.complete_registration",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offline_conversion.initiate_checkout",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offline_conversion.lead",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offline_conversion.purchase",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offline_conversion.search",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offline_conversion.view_content",
              ),
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "offline_conversion.other",
              ),
            ],
            OFFLINE_ACTIONS_CUSTOM_CONVERSIONS: [],
            OFFLINE_ACTIONS_CPA_CUSTOM_CONVERSIONS: [],
            OFFLINE_CONVERSIONS_CUSTOM_CONVERSIONS: [],
            COMMERCE: [
              o("AdsInsightsColumns").makeActionID("actions", "commerce_event"),
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "commerce_event.view_content",
              ),
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
              o("AdsInsightsColumns").makeActionID(
                "actions",
                "commerce_event.other",
              ),
            ],
            COMMERCE_CPA: [
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "commerce_event",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_action_type",
                "commerce_event.view_content",
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
            ],
            COMMERCE_CONVERSIONS: [
              o("AdsInsightsColumns").makeActionID(
                "action_values",
                "commerce_event.purchase",
              ),
            ],
            LEADS: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(I, [
              o("AdsInsightsColumns").makeActionID(
                "conversion_leads",
                "conversion_lead",
              ),
              o("AdsInsightsColumns").makeActionID(
                "cost_per_conversion_lead",
                "conversion_lead",
              ),
              o("AdsInsightsColumns").makeActionID(
                "conversion_lead_rate",
                "conversion_lead",
              ),
            ]),
            SETTINGS: d
              ? []
              : r("filterNulls")([
                  r("AdsInsightsField").DATE_START,
                  r("AdsInsightsField").DATE_STOP,
                  r("AdsInsightsColumn").ACCOUNT_ID,
                  r("AdsInsightsColumn").ACCOUNT_NAME,
                  o("AdsApplicationUtils").isFAME()
                    ? r("AdsInsightsColumn").ACCOUNT_CURRENCY
                    : null,
                  r("AdsInsightsColumn").CAMPAIGN_GROUP_NAME,
                  r("AdsInsightsColumn").CAMPAIGN_GROUP_ID,
                  r("AdsInsightsColumn").CAMPAIGN_NAME,
                  r("AdsInsightsColumn").CAMPAIGN_ID,
                  r("AdsInsightsColumn").ADGROUP_ID,
                  r("AdsInsightsColumn").ADGROUP_NAME,
                  p ? r("AdsMgmtColumn").LABELS : null,
                ]),
            SETTINGS_LEVEL_3: d
              ? []
              : [
                  r("AdsInsightsColumn").OBJECTIVE,
                  r("AdsMgmtColumn").BUYING_TYPE,
                  r("AdsMgmtColumn").START_TIME,
                  r("AdsMgmtColumn").STOP_TIME,
                ],
            SETTINGS_LEVEL_2: d
              ? []
              : [
                  r("AdsMgmtColumn").BID,
                  r("AdsMgmtColumn").BUDGET,
                  r("AdsMgmtColumn").SCHEDULE,
                  r("AdsMgmtColumn").DEAL_START,
                  r("AdsMgmtColumn").DEAL_END,
                ],
            SETTINGS_LEVEL_1: [],
            OBJECT_NAMES_AND_IDS: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d, [
              r("AdsInsightsColumn").ACCOUNT_ID,
              r("AdsInsightsColumn").ACCOUNT_NAME,
              r("AdsInsightsColumn").CAMPAIGN_GROUP_NAME,
              r("AdsInsightsColumn").CAMPAIGN_GROUP_ID,
              r("AdsInsightsColumn").CAMPAIGN_NAME,
              r("AdsInsightsColumn").CAMPAIGN_ID,
              r("AdsInsightsColumn").ADGROUP_ID,
              r("AdsInsightsColumn").ADGROUP_NAME,
              r("AdsMgmtColumn").LABELS,
            ]),
            STATUS_AND_DATES: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
              d,
              [
                r("AdsMgmtColumn").DATE_CREATED,
                r("AdsMgmtColumn").DATE_LAST_EDITED,
                r("AdsMgmtColumn").START,
                r("AdsMgmtColumn").END,
                r("AdsInsightsField").DATE_START,
                r("AdsInsightsField").DATE_STOP,
                r("AdsMgmtColumn").TIME_ELAPSED_PERCENT,
              ].concat(
                o("AdsMgmtArrayUtils").emptyArrayIfFalsy(
                  !M,
                  [
                    r("AdsInsightsColumn").LAST_SIGNIFICANT_EDIT,
                    r("AdsMgmtColumn").DELIVERY,
                    r("AdsMgmtColumn").attribution_setting,
                    r("AdsInsightsColumn").CAMPAIGN_DELIVERY,
                  ].concat(Ae, Oe, Fe),
                ),
              ),
            ),
            GOAL_BUDGET_AND_SCHEDULE: O(),
            TARGETING: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d, [
              r("AdsMgmtColumn").LOCATION,
              r("AdsMgmtColumn").AGE,
              r("AdsMgmtColumn").GENDER,
              r("AdsMgmtColumn").CUSTOM_AUDIENCES,
              r("AdsMgmtColumn").EXCLUDED_CUSTOM_AUDIENCES,
            ]),
            AD_CREATIVE: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d, [
              r("AdsMgmtColumn").RELATED_PAGE,
              r("AdsMgmtColumn").TITLE,
              r("AdsMgmtColumn").BODY,
              r("AdsMgmtColumn").LINK,
              r("AdsMgmtColumn").DESTINATION,
              r("AdsMgmtColumn").PREVIEW_LINK,
            ]),
            TRACKING: o("AdsMgmtArrayUtils").emptyArrayIfFalsy(d, [
              r("AdsMgmtColumn").URL_TAGS,
              r("AdsMgmtColumn").CONVERSION_TRACKING_PIXEL,
              r("AdsMgmtColumn").APP_TRACKING_EVENT,
              r("AdsMgmtColumn").OFFLINE_TRACKING_EVENT,
            ]),
            OPTIMIZATION: xe,
            OPTIMIZATION_ADVANCED: xe,
            MARKETING_MESSAGES: [
              r("AdsInsightsColumn").MARKETING_MESSAGES_SENT,
              r("AdsInsightsColumn").MARKETING_MESSAGES_DELIVERED,
              r("AdsInsightsColumn").MARKETING_MESSAGES_LINK_BTN_CLICK,
              r("AdsInsightsColumn").MARKETING_MESSAGES_LINK_BTN_CLICK_RATE,
              r("AdsInsightsColumn").MARKETING_MESSAGES_COST_PER_LINK_BTN_CLICK,
              r("AdsInsightsColumn").MARKETING_MESSAGES_COST_PER_DELIVERED,
              r("AdsInsightsColumn").MARKETING_MESSAGES_SPEND,
              r("AdsInsightsColumn").MARKETING_MESSAGES_READ_RATE,
              r("AdsInsightsColumn").MARKETING_MESSAGES_LANGUAGE,
            ],
          },
        );
      },
      Je = function () {
        var e = {},
          t = Ye();
        return (
          Object.keys(t).forEach(function (n) {
            e[n] = r("AdsInsightsColumnUtil").sanitizeColumnIDs(t[n]);
          }),
          e
        );
      },
      Ze = function () {
        var e = o(
            "AdsMgmtColumnCategoriesCanSeeUtils",
          ).canSeeOnFacebookInitiateCheckouts(m),
          t = o(
            "AdsMgmtColumnCategoriesCapabilityChecks",
          ).canAccountSeeCatalogSegmentMetrics(m),
          n = o(
            "AdsMgmtColumnCategoriesCanSeeUtils",
          ).canSeeBrandCategoryReportingMetrics(m),
          r = Ne().concat(
            o(
              "AdsMgmtColumnCategoriesCoversionCategoryUtils",
            ).getMergedConversionCategoryProps(m, t, e, n, y),
          );
        return r.filter(function (e) {
          return e.gk != null ? e.gk : !0;
        });
      },
      et = function () {
        var e = {};
        return (
          Ze().forEach(function (t) {
            return (e[t.id] = t);
          }),
          e
        );
      },
      tt = function (t) {
        return et()[t];
      },
      nt = function () {
        return { children: [] };
      },
      rt = {
        conversionPixelCategories: [
          r("AdsInsightsColumnCategory").WEBSITE_ACTIONS_CONVERSION_PIXEL,
          r("AdsInsightsColumnCategory").WEBSITE_CPA_CONVERSION_PIXEL,
          r("AdsInsightsColumnCategory").WEBSITE_CONVERSIONS_CONVERSION_PIXEL,
        ],
        unifiedPixelCategories: [
          r("AdsInsightsColumnCategory").WEBSITE_ACTIONS_FB_PIXEL,
          r("AdsInsightsColumnCategory").WEBSITE_CPA_FB_PIXEL,
          r("AdsInsightsColumnCategory").WEBSITE_CONVERSIONS_FB_PIXEL,
        ],
        customConversionCategories: [
          r("AdsInsightsColumnCategory").APPS_ACTIONS_CUSTOM_CONVERSIONS,
          r("AdsInsightsColumnCategory").APPS_CPA_CUSTOM_CONVERSIONS,
          r("AdsInsightsColumnCategory").APPS_CONVERSIONS_CUSTOM_CONVERSIONS,
          r("AdsInsightsColumnCategory").OFFLINE_ACTIONS_CUSTOM_CONVERSIONS,
          r("AdsInsightsColumnCategory").OFFLINE_ACTIONS_CPA_CUSTOM_CONVERSIONS,
          r("AdsInsightsColumnCategory").OFFLINE_CONVERSIONS_CUSTOM_CONVERSIONS,
          r("AdsInsightsColumnCategory").WEBSITE_ACTIONS_CUSTOM_CONVERSIONS,
          r("AdsInsightsColumnCategory").WEBSITE_CPA_CUSTOM_CONVERSIONS,
          r("AdsInsightsColumnCategory").WEBSITE_CONVERSIONS_CUSTOM_CONVERSIONS,
        ],
        offlineConversionCategories: [
          r("AdsInsightsColumnCategory").OFFLINE_ACTIONS_CPA,
          r("AdsInsightsColumnCategory").OFFLINE_CONVERSIONS,
          r("AdsInsightsColumnCategory").OFFLINE,
        ],
        storeVisitsCategories: [r("AdsInsightsColumnCategory").STORE_VISITS],
        messengerCategories: [
          r("AdsInsightsColumnCategory").MESSAGING_COST,
          r("AdsInsightsColumnCategory").MESSAGING,
        ],
        getCustomMetricsCategoryByID: function () {
          return o("AdsMgmtCustomMetricsCategoryConfigs")
            .customMetricsCategoryConfigs;
        },
        getAdvancedTabCategories: function () {
          return ve().map(function (e) {
            return e.id;
          });
        },
        getKeyMetricsTabCategories: function () {
          return X().map(function (e) {
            return e.id;
          });
        },
        getMainCategoriesShownInKeyMetrics: function () {
          return W;
        },
        getCategoryConfigsByID: r("adsMemoizeWithArgs")(
          function (e, t) {
            t != null && m == null && (m = t);
            var n = o("AdsInsightsColumnCategoryConsts").categoryIDs;
            (I ||
              (n = n.filter(function (e) {
                return e !== r("AdsInsightsColumnCategory").LEADS;
              })),
              e &&
                e === "REPORTING" &&
                (n = n.filter(function (e) {
                  return !we.includes(e);
                })));
            var a = r("adsInsightsColumnConfigsGetBlocklistedColumnIDs")();
            a.addAll(Me);
            var i = Je(),
              l = function (t) {
                var e = (i[t] || []).filter(function (e) {
                  return !a.contains(e);
                });
                return babelHelpers.extends({}, tt(t), nt(), et()[t], {
                  columns: e,
                });
              },
              s = n.map(l),
              u = {};
            s.forEach(function (e) {
              return (u[e.id] = e);
            });
            var c = function (t) {
              return u[t];
            };
            return (
              s.forEach(function (e) {
                e.parent != null &&
                  e.parent !== "" &&
                  c(e.parent).children.push(e.id);
              }),
              u
            );
          },
          function (e, t) {
            return (
              (e != null ? e : "") +
              "|" +
              ((t == null ? void 0 : t.id) != null ? String(t.id) : "")
            );
          },
          i.id,
        ),
      },
      ot = rt;
    l.default = ot;
  },
  226,
);
