__d(
  "SYDPageRELAYQuery.graphql",
  [
    "SYDCampaignTrendsWidgetMergeEnabled.relayprovider",
    "IsLWIPFROFEnabled.relayprovider",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        t = { defaultValue: null, kind: "LocalArgument", name: "channel" },
        r = { defaultValue: null, kind: "LocalArgument", name: "failsGK" },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "flexSolutionID",
        },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "gk_perseus_syd_nuo_merge_3d",
        },
        i = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldDeferAdSliderOutcomeEstimates",
        },
        l = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldFetchSYDMAIBAAccountInsights",
        },
        s = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldPrefetchSYDUris",
        },
        u = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldPrefetchThumbnails",
        },
        c = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldSkipMessengerMM",
        },
        d = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldSkipWhatsAppMM",
        },
        m = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldUseRelay3D",
        },
        p = [
          { kind: "Literal", name: "channel", value: "ADS_SYD_WIDGET" },
          {
            fields: [
              {
                kind: "Variable",
                name: "ad_account",
                variableName: "accountID",
              },
            ],
            kind: "ObjectValue",
            name: "scope_ids",
          },
        ],
        _ = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "widget_id",
          storageKey: null,
        },
        f = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        g = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        h = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o, a, i, l, s, u, c, d, m],
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "SYDPageRELAYQuery",
          selections: [
            {
              alias: null,
              args: p,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_advertiser_profile_eligible_solutions",
              plural: !0,
              selections: [
                {
                  kind: "InlineFragment",
                  selections: [
                    _,
                    {
                      args: null,
                      kind: "FragmentSpread",
                      name: "SYDPageColumn_widgets",
                    },
                  ],
                  type: "XFBAdsStartYourDayWidget",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              condition: "shouldFetchSYDMAIBAAccountInsights",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: f,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "ad_account",
                  plural: !1,
                  selections: [
                    {
                      args: [
                        {
                          kind: "Variable",
                          name: "shouldFetchSYDMAIBAAccountInsights",
                          variableName: "shouldFetchSYDMAIBAAccountInsights",
                        },
                      ],
                      kind: "FragmentSpread",
                      name: "SYDMAIBAAccountInsightsWidgetEntrypoint_adAccount",
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [
            e,
            u,
            s,
            i,
            m,
            d,
            c,
            r,
            o,
            t,
            a,
            l,
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__SYDCampaignTrendsWidgetMergeEnabledrelayprovider",
            },
            {
              defaultValue: null,
              kind: "LocalArgument",
              name: "__relay_internal__pv__IsLWIPFROFEnabledrelayprovider",
            },
          ],
          kind: "Operation",
          name: "SYDPageRELAYQuery",
          selections: [
            {
              alias: null,
              args: p,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_advertiser_profile_eligible_solutions",
              plural: !0,
              selections: [
                g,
                h,
                {
                  kind: "InlineFragment",
                  selections: [
                    _,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "status",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "widget_column",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: [
                        { kind: "Literal", name: "supported", value: "evR0d" },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "widget_renderer",
                      plural: !1,
                      selections: [
                        g,
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName: "SYDCampaignTrendsWidget_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDCampaignTrendsWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName:
                                "SYDAccountInfoWidgetContainerV2_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDAccountInfoWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName:
                                "SYDAccountInfoWidgetContainerV3_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDAccountInfoWidgetV3",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName:
                                "SYDPrereqsWidgetContainer_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDPrereqsWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName: "SYDAlertsCardContainer_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDAlertsWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName:
                                "SYDAdsExperimentsWidgetContainer_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDAdsExperimentsWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName: "SYDNUOWidgetContainer_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDNewUserOnboardingWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName:
                                "SYDAdLimitsWidgetContainer_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDAdLimitsWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName: "SYDMarketingExpertWidget_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDMarketingExpertWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName:
                                "SYDMetricSnapshotWidgetContainer_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDMetricSnapshotWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName:
                                "SYDNewFeaturesWidgetGraphQLContainer_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDNewFeaturesWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName:
                                "AdsMobileUpsellStartYourDayCard_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDMobileUpsellWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName: "SYDAdProposalWidget_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDAdProposalWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName:
                                "SYDGuidanceHubV3Container_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDGuidanceHubV3Widget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName: "SYDAdsAIWidget_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDAdsAIWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName:
                                "SYDGreaterChinaAdvertiserContainer_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDGreaterChinaAdvertiserWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName: "SYDAdSliderContainer_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDAdSliderWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName: "SYDRemindersWidget_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDRemindersWidget",
                          abstractKey: null,
                        },
                        {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              documentName: "SYDPageColumn_widgets",
                              fragmentName: "SYDRecentCampaignsWidget_fragment",
                              fragmentPropName: "fragment",
                              kind: "ModuleImport",
                            },
                          ],
                          type: "XFBAdsSYDExpiringCampaignsWidget",
                          abstractKey: null,
                        },
                      ],
                      storageKey: 'widget_renderer(supported:"evR0d")',
                    },
                  ],
                  type: "XFBAdsStartYourDayWidget",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              condition: "shouldFetchSYDMAIBAAccountInsights",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: f,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "ad_account",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "request_id",
                      storageKey: null,
                    },
                    {
                      condition: "shouldFetchSYDMAIBAAccountInsights",
                      kind: "Condition",
                      passingValue: !0,
                      selections: [
                        {
                          condition: "shouldFetchSYDMAIBAAccountInsights",
                          kind: "Condition",
                          passingValue: !0,
                          selections: [
                            {
                              alias: "account_id",
                              args: null,
                              kind: "ScalarField",
                              name: "legacy_account_id",
                              storageKey: null,
                            },
                            {
                              alias: "syd_maiba_insights_dismiss_count",
                              args: [
                                {
                                  kind: "Literal",
                                  name: "attribute_types",
                                  value: [
                                    "SYD_MAIBA_ACCOUNT_INSIGHTS_DISMISS_COUNT",
                                  ],
                                },
                              ],
                              concreteType: null,
                              kind: "LinkedField",
                              name: "advertiser_profile_editable_attributes",
                              plural: !0,
                              selections: [
                                g,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "value",
                                  plural: !1,
                                  selections: [
                                    g,
                                    {
                                      kind: "InlineFragment",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "as_integer",
                                          storageKey: null,
                                        },
                                      ],
                                      type: "XFBAdvertiserProfileIntegerBasedAttributeValue",
                                      abstractKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                h,
                              ],
                              storageKey:
                                'advertiser_profile_editable_attributes(attribute_types:["SYD_MAIBA_ACCOUNT_INSIGHTS_DISMISS_COUNT"])',
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType: "SYDMAIBAAccountInsights",
                              kind: "LinkedField",
                              name: "syd_maiba_account_insights",
                              plural: !1,
                              selections: [
                                {
                                  if: null,
                                  kind: "Defer",
                                  label:
                                    "SYDMAIBAAccountInsightsWidget_adAccount$defer$SYDMAIBAAccountInsightsWidget_l4",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: "SYDMAIBAL4Insight",
                                      kind: "LinkedField",
                                      name: "l4_insight",
                                      plural: !1,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "verdict",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "account_headline",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "account_body",
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                  ],
                                },
                                {
                                  if: null,
                                  kind: "Defer",
                                  label:
                                    "SYDMAIBAAccountInsightsWidget_adAccount$defer$SYDMAIBAAccountInsightsWidget_l3",
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType:
                                        "SYDMAIBAL3CampaignPerformance",
                                      kind: "LinkedField",
                                      name: "l3_campaign_performance",
                                      plural: !0,
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType: "AdCampaignGroup",
                                          kind: "LinkedField",
                                          name: "campaign",
                                          plural: !1,
                                          selections: [
                                            h,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "name",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                        {
                                          if: null,
                                          kind: "Defer",
                                          label:
                                            "SYDMAIBAL3Insights_campaignPerformance$defer$SYDMAIBAL3CampaignMedia_campaignPerformance",
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "thumbnail_uri",
                                              storageKey: null,
                                            },
                                          ],
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "cost_per_result",
                                          storageKey: null,
                                        },
                                        {
                                          alias: null,
                                          args: null,
                                          kind: "ScalarField",
                                          name: "currency",
                                          storageKey: null,
                                        },
                                      ],
                                      storageKey: null,
                                    },
                                    {
                                      if: null,
                                      kind: "Defer",
                                      label:
                                        "SYDMAIBAAccountInsightsWidget_l3$defer$SYDMAIBAAccountInsightsWidget_l3Insights",
                                      selections: [
                                        {
                                          alias: null,
                                          args: null,
                                          concreteType:
                                            "SYDMAIBAL3CampaignInsight",
                                          kind: "LinkedField",
                                          name: "l3_insights",
                                          plural: !0,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "campaign_id",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "campaign_name",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "category",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "description",
                                              storageKey: null,
                                            },
                                            {
                                              alias: null,
                                              args: null,
                                              kind: "ScalarField",
                                              name: "headline",
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                        },
                      ],
                    },
                    h,
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "27728455723500408",
          metadata: {},
          name: "SYDPageRELAYQuery",
          operationKind: "query",
          text: null,
          providedVariables: {
            __relay_internal__pv__SYDCampaignTrendsWidgetMergeEnabledrelayprovider:
              n("SYDCampaignTrendsWidgetMergeEnabled.relayprovider"),
            __relay_internal__pv__IsLWIPFROFEnabledrelayprovider: n(
              "IsLWIPFROFEnabled.relayprovider",
            ),
          },
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
