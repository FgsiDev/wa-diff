__d(
  "AdsMgmtTableInsightsColumnLevelOverrides",
  [
    "fbt",
    "AdsApplicationUtils",
    "AdsDDAStrings",
    "AdsInsightsActionFieldTypes",
    "AdsInsightsAttributionWindows",
    "AdsInsightsColumn",
    "AdsInsightsCreativeGenerationInsightsUtils",
    "AdsInsightsField",
    "AdsInsightsFieldDescriptor",
    "AdsInsightsFields",
    "AdsInsightsMetricAvailableLevelsNotes",
    "AdsInsightsMetricNames",
    "AdsInsightsSortDirection",
    "AdsLandingPageViewsUtils",
    "AdsMgmtCAWByCostDeprecationUtils",
    "AdsMgmtColumn",
    "AdsMgmtColumnCategoriesCanSeeUtils",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "AdsReportBuilderCustomBreakdownUtil",
    "AdsReportBuilderExplicitDeliveryColumnsGatedSentenceCasing",
    "adsGetInsightsMetricDefinition",
    "adsMgmtTableColumnConfigGetDefaultLabel",
    "adsMgmtTableSpecializeLevelSpecificPropsForObjectType",
    "createObjectFrom",
    "expectationViolation",
    "gkx",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = s._(/*BTDS*/ "Ad relevance diagnostics"),
      _ = r("AdsObjectUtils").getSingularNameFromObjectType(
        (e = r("AdsObjectTypes")).CAMPAIGN,
      ),
      f = r("gkx")("661"),
      g = r("gkx")("20691"),
      h = [
        (u = r("AdsInsightsField")).CTR,
        u.CPM,
        u.CPC,
        u.RESULT_RATE,
        u.COST_PER_INLINE_LINK_CLICK,
        u.WEBSITE_PURCHASE_ROAS,
      ],
      y = o(
        "AdsMgmtColumnCategoriesCanSeeUtils",
      ).canSeeCprBenchmarkColumnWithoutExposure(),
      C = {},
      b = [
        {
          id: (c = r("AdsInsightsColumn")).ACCOUNT_ID,
          align: "left",
          hasEmptyFooter: !0,
          fields: [],
          fieldsForExport: [u.ACCOUNT_ID],
          isSortable: !1,
          minWidth: 115,
          sampleContentKey: "id",
        },
        {
          id: c.ACCOUNT_NAME,
          align: "left",
          hasEmptyFooter: !0,
          fields: [],
          fieldsForExport: [u.ACCOUNT_NAME],
          isSortable: !1,
          minWidth: 115,
          objectTypes: [e.CAMPAIGN_GROUP, e.CAMPAIGN, e.ADGROUP, e.CREATIVE],
          sampleContentKey: "name",
        },
        {
          id: c.AUCTION_COMPETITIVENESS,
          hasEmptyFooter: !0,
          objectTypes: [e.CAMPAIGN],
        },
        {
          id: c.ADGROUP_DELIVERY,
          label: r("AdsReportBuilderExplicitDeliveryColumnsGatedSentenceCasing")
            .ad_delivery,
          primaryField: u.AD_DELIVERY,
        },
        {
          id: c.ADGROUP_ID,
          align: "left",
          defaultSortingOrder: (d = r("AdsInsightsSortDirection")).ASC,
          fields: [],
          fieldsForExport: [u.AD_ID],
          objectTypes: [e.ADGROUP, e.CREATIVE],
          sampleContentKey: "id",
          sortField: "id",
          sortType: "INTEGER",
          levelSpecificProps: {
            CREATIVE: { fieldsForExport: [], isSortable: !1 },
          },
        },
        {
          id: c.ADGROUP_NAME,
          align: "left",
          defaultSortingOrder: d.ASC,
          fields: [],
          fieldsForExport: [u.AD_NAME],
          objectTypes: [],
          sampleContentKey: "id",
          sortField: "name",
          levelSpecificProps: {
            CREATIVE: { fieldsForExport: [], isSortable: !1 },
          },
        },
        { id: c.ATTRIBUTION_SETTING, align: "left", isSortable: !1 },
        {
          id: c.AGENCY_FEE_AMOUNT,
          minWidth: 200,
          hasEmptyFooter: !1,
          label: s._(/*BTDS*/ "Agency fee amount"),
          align: "right",
          primaryField: u.AGENCY_FEE_AMOUNT,
          objectTypes: [e.CAMPAIGN_GROUP, e.CAMPAIGN, e.ADGROUP],
          fieldsForExport: [u.AGENCY_FEE_AMOUNT],
          width: 200,
        },
        {
          id: c.AGENCY_FEE_MARKUP,
          minWidth: 165,
          hasEmptyFooter: !0,
          label: s._(/*BTDS*/ "Agency fee"),
          align: "right",
          primaryField: u.AGENCY_FEE_MARKUP,
          objectTypes: [e.CAMPAIGN_GROUP, e.CAMPAIGN, e.ADGROUP],
          fieldsForExport: [u.AGENCY_FEE_MARKUP],
          width: 165,
        },
        {
          id: (m = r("AdsMgmtColumn")).BID,
          hasEmptyFooter: !0,
          fields: [],
          isSortable: !1,
          minWidth: 105,
          objectTypes: [e.CAMPAIGN_GROUP, e.CAMPAIGN, e.ADGROUP],
          primaryField: m.BID,
          sampleContentKey: "cost",
          sampleContentLargeKey: "bidLarge",
          width: 105,
          levelSpecificProps: {
            CREATIVE: { fieldsForExport: [] },
            ADGROUP: {
              fieldsForExport: [u.AD_BID_VALUE, u.AD_BID_TYPE],
              secondaryLabel: _,
            },
            CAMPAIGN: {
              fieldsForExport: [u.ADSET_BID_VALUE, u.ADSET_BID_TYPE],
            },
          },
        },
        {
          id: c.BILLABLE_AMOUNT_SPENT,
          minWidth: 200,
          hasEmptyFooter: !1,
          label: s._(/*BTDS*/ "Billable amount spent"),
          align: "right",
          primaryField: u.BILLABLE_AMOUNT_SPENT,
          objectTypes: [e.CAMPAIGN_GROUP, e.CAMPAIGN, e.ADGROUP],
          fieldsForExport: [u.BILLABLE_AMOUNT_SPENT],
          width: 200,
        },
        {
          id: m.BUDGET_GOAL,
          align: "left",
          hasEmptyFooter: !0,
          objectTypes: [e.CAMPAIGN],
        },
        {
          id: m.BUDGET_POOL_VALUE_WEIGHTED_CONVERSIONS,
          isSortable: !1,
          minWidth: 200,
          objectTypes: [e.CAMPAIGN],
          primaryField: u.RESULTS,
          sampleContentKey: "resultsSmall",
        },
        {
          id: m.BUDGET_POOL_VALUE_WEIGHTED_CPA,
          isSortable: !1,
          minWidth: 260,
          objectTypes: [e.CAMPAIGN],
          primaryField: u.SPEND,
          sampleContentKey: "cost",
        },
        {
          id: m.BUYING_TYPE,
          align: "left",
          hasEmptyFooter: !0,
          minWidth: 150,
          objectTypes: [e.CAMPAIGN_GROUP],
          isSortable: !1,
        },
        { id: c.CALL_TO_ACTION_CLICKS, sampleContentKey: "results" },
        {
          id: c.CALL_TO_ACTION_TYPE,
          isSortable: !1,
          label: r("AdsInsightsMetricNames").call_to_action_asset,
          objectTypes: [e.ADGROUP],
        },
        {
          id: c.CAMPAIGN_DELIVERY,
          align: "left",
          hasEmptyFooter: !0,
          label: r("AdsReportBuilderExplicitDeliveryColumnsGatedSentenceCasing")
            .adset_delivery,
          objectTypes: [e.ADGROUP],
          primaryField: u.ADSET_DELIVERY,
          sampleContentKey: "delivery",
        },
        {
          id: c.CAMPAIGN_ID,
          align: "left",
          hasEmptyFooter: !0,
          fields: [],
          fieldsForExport: [u.ADSET_ID],
          minWidth: 170,
          objectTypes: [e.CAMPAIGN, e.ADGROUP, e.CREATIVE],
          sampleContentKey: "id",
          sortType: "INTEGER",
          width: 170,
          levelSpecificProps: {
            CAMPAIGN: {
              isSortable: o("AdsApplicationUtils").isPowerEditor(),
              sortField: "id",
              defaultSortingOrder: d.ASC,
            },
            ADGROUP: { sortField: "adset_id", isSortable: !1 },
            CREATIVE: { fieldsForExport: [], isSortable: !1 },
          },
        },
        {
          id: c.CAMPAIGN_NAME,
          align: "left",
          hasEmptyFooter: !0,
          fields: [],
          fieldsForExport: [u.ADSET_NAME],
          minWidth: 100,
          objectTypes: [e.ADGROUP],
          sampleContentKey: "name",
          sampleContentLargeKey: "nameLarge",
          sortField: "adset.name",
          width: 130,
          levelSpecificProps: {
            CREATIVE: { fieldsForExport: [], isSortable: !1 },
          },
        },
        {
          id: c.CAMPAIGN_GROUP_DELIVERY,
          label: r("AdsReportBuilderExplicitDeliveryColumnsGatedSentenceCasing")
            .campaign_delivery,
          primaryField: u.CAMPAIGN_DELIVERY,
        },
        {
          id: c.CAMPAIGN_GROUP_ID,
          align: "left",
          hasEmptyFooter: !0,
          fields: [],
          fieldsForExport: [u.CAMPAIGN_ID],
          objectTypes: [e.CAMPAIGN_GROUP, e.CAMPAIGN, e.ADGROUP, e.CREATIVE],
          sampleContentKey: "id",
          sortType: "INTEGER",
          levelSpecificProps: {
            CAMPAIGN_GROUP: {
              isSortable: o("AdsApplicationUtils").isPowerEditor(),
              defaultSortingOrder: d.ASC,
              sortField: "id",
            },
            CAMPAIGN: { isSortable: !1, sortField: "campaign_id" },
            ADGROUP: { isSortable: !1, sortField: "campaign_id" },
            CREATIVE: { isSortable: !1, fieldsForExport: [] },
          },
        },
        {
          id: c.CAMPAIGN_GROUP_NAME,
          align: "left",
          hasEmptyFooter: !0,
          fields: [],
          fieldsForExport: [u.CAMPAIGN_NAME],
          minWidth: 100,
          objectTypes: [e.CAMPAIGN, e.ADGROUP, e.CREATIVE],
          sampleContentKey: "name",
          sampleContentLargeKey: "nameLarge",
          sortField: "campaign.name",
          width: 130,
          levelSpecificProps: {
            CREATIVE: { isSortable: !1, fieldsForExport: [] },
          },
        },
        { id: c.CANVAS_AVG_VIEW_PERCENT, sampleContentKey: "percentage" },
        { id: c.CANVAS_AVG_VIEW_TIME, sampleContentKey: "results" },
        { id: c.CLICKS, sampleContentKey: "results" },
        {
          id: u.CLICKS_TO_BUSINESS_AI,
          align: "left",
          objectTypes: [e.ACCOUNT, e.CAMPAIGN_GROUP, e.CAMPAIGN, e.ADGROUP],
        },
        {
          id: c.COST_PER_OPTIMIZATION_RESULT,
          isSortable: !1,
          objectTypes: [e.CAMPAIGN],
          sampleContentKey: "cost",
          sampleContentLargeKey: "costLarge",
        },
        {
          id: c.COST_PER_RESULT,
          fields: y
            ? [r("AdsInsightsField").COST_PER_RESULT].concat(h)
            : [r("AdsInsightsField").COST_PER_RESULT],
          fieldsForExport: [r("AdsInsightsField").COST_PER_RESULT],
          sampleContentKey: "cost",
          sampleContentLargeKey: "costLarge",
          supportAttributionWindow: !0,
          supportBudgetForecast: !0,
          supportInlineAttributionColumn: !0,
        },
        {
          id: r("AdsInsightsColumn").CREATIVE_DIVERSITY_LABEL,
          align: "center",
          isSortable: r("justknobx")._("2851"),
          objectTypes: o(
            "AdsInsightsCreativeGenerationInsightsUtils",
          ).isCreativeDiversityExperimentEnabled()
            ? [r("AdsObjectTypes").CAMPAIGN, r("AdsObjectTypes").CAMPAIGN_GROUP]
            : [],
          levelSpecificProps: {},
        },
        {
          id: r("AdsInsightsColumn").COST_PER_STORE_VISIT,
          objectTypes: [
            r("AdsObjectTypes").ACCOUNT,
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          primaryField: o("AdsInsightsFields").makeActionID(
            "cost_per_store_visit_action",
            "store_visit",
          ),
          supportAttributionWindow: !0,
        },
        {
          id: r("AdsInsightsColumn").COST_PER_TOTAL_ACTIONS,
          sampleContentKey: "cost",
          sampleContentLargeKey: "costLarge",
        },
        {
          id: r("AdsInsightsColumn").COST_PER_UNIQUE_CLICK,
          sampleContentKey: "cost",
          sampleContentLargeKey: "costLarge",
        },
        { id: r("AdsInsightsColumn").CPC, sampleContentKey: "cost" },
        { id: r("AdsInsightsColumn").CPM, sampleContentKey: "cost" },
        { id: r("AdsInsightsColumn").CPP, sampleContentKey: "cost" },
        {
          id: r("AdsInsightsColumn").CPR_BENCHMARK,
          label: s._(/*BTDS*/ "Comparison Benchmark"),
          fields: [r("AdsInsightsField").CPR_BENCHMARK].concat(h),
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          sampleContentKey: "cost",
        },
        {
          id: r("AdsInsightsColumn").HISTORICAL_BENCHMARK,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          sampleContentKey: "cost",
        },
        {
          id: r("AdsMgmtColumn").CREATIVE_POTENTIAL,
          fields: [r("AdsInsightsField").CREATIVE_OPPORTUNITY],
          primaryField: r("AdsInsightsField").CREATIVE_OPPORTUNITY,
        },
        {
          id: r("AdsMgmtColumn").CREATIVE_FINGERPRINT,
          minWidth: 250,
          width: 300,
        },
        { id: r("AdsInsightsColumn").CTR, sampleContentKey: "percentage" },
        {
          id: r("AdsMgmtColumn").CUSTOM_AUDIENCES,
          align: "left",
          isSortable: !1,
          minWidth: 200,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          width: 200,
        },
        {
          id: r("AdsMgmtColumn").DATE_CREATED,
          minWidth: 100,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 113,
          levelSpecificProps: {
            CAMPAIGN_GROUP: { sortField: "created_time" },
            CAMPAIGN: { sortField: "created_time" },
            ADGROUP: { sortField: "created_time" },
            CREATIVE: { fieldsForExport: [], isSortable: !1 },
          },
        },
        {
          id: r("AdsMgmtColumn").DATE_LAST_EDITED,
          minWidth: 100,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 113,
          levelSpecificProps: {
            CAMPAIGN_GROUP: { sortField: "updated_time" },
            CAMPAIGN: { sortField: "updated_time" },
            ADGROUP: { sortField: "updated_time" },
            CREATIVE: { fieldsForExport: [], isSortable: !1 },
          },
        },
        {
          id: r("AdsInsightsColumn").DATE_START,
          hasEmptyFooter: !0,
          isSortable: !1,
          sampleContentKey: "isoDate",
        },
        {
          id: r("AdsInsightsColumn").DATE_STOP,
          hasEmptyFooter: !0,
          isSortable: !1,
          sampleContentKey: "isoDate",
        },
        {
          id: r("AdsMgmtColumn").DEAL_END,
          align: "left",
          hasEmptyFooter: !0,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsMgmtColumn").DEAL_START,
          align: "left",
          hasEmptyFooter: !0,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsInsightsColumn").DEDUPING_1ST_SOURCE_AD,
          hasEmptyFooter: !0,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsInsightsColumn").DEDUPING_1ST_SOURCE_RATIO,
          hasEmptyFooter: !0,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsInsightsColumn").DEDUPING_2ND_SOURCE_AD,
          hasEmptyFooter: !0,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsInsightsColumn").DEDUPING_2ND_SOURCE_RATIO,
          hasEmptyFooter: !0,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsInsightsColumn").DEDUPING_3RD_SOURCE_AD,
          hasEmptyFooter: !0,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsInsightsColumn").DEDUPING_3RD_SOURCE_RATIO,
          hasEmptyFooter: !0,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsInsightsColumn").DEDUPING_RATIO,
          hasEmptyFooter: !0,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsInsightsColumn").ESTIMATED_AD_RECALL_RATE,
          sampleContentKey: "percentage",
        },
        {
          id: r("AdsMgmtColumn").DELIVERY,
          align: "left",
          hasEmptyFooter: !0,
          fields: [],
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          primaryField: "delivery_info",
          sampleContentKey: "delivery",
          valueType: "STRING",
          levelSpecificProps: {
            CAMPAIGN_GROUP: {
              fieldsForExport: [r("AdsInsightsField").CAMPAIGN_DELIVERY],
              sortField: "delivery_info",
            },
            CAMPAIGN: {
              fieldsForExport: [r("AdsInsightsField").ADSET_DELIVERY],
              sortField: "delivery_info",
            },
            ADGROUP: {
              fieldsForExport: [r("AdsInsightsField").AD_DELIVERY],
              sortField: "delivery_info",
            },
            CREATIVE: {
              fieldsForExport: ["creative_delivery_info"],
              fields: ["delivery_info"],
              sortField: "creative_delivery_info",
            },
          },
        },
        {
          id: r("AdsInsightsColumn").DESCRIPTION,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
        },
        {
          id: r("AdsMgmtColumn").EXCLUDED_CUSTOM_AUDIENCES,
          align: "left",
          isSortable: !1,
          minWidth: 200,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          width: 200,
        },
        { id: r("AdsInsightsColumn").FREQUENCY, sampleContentKey: "frequency" },
        {
          id: r("AdsInsightsColumn").HEADLINE,
          isSortable: !1,
          label: r("AdsInsightsMetricNames").title_asset,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
        },
        { id: r("AdsInsightsColumn").IMPRESSIONS, sampleContentKey: "results" },
        {
          id: r("AdsInsightsColumn").IMPRESSIONS_AUTO_REFRESH,
          sampleContentKey: "results",
        },
        {
          id: r("AdsMgmtColumn").IMPRESSIONS_GOAL,
          align: "left",
          hasEmptyFooter: !0,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsInsightsColumn").IMPRESSIONS_GROSS,
          sampleContentKey: "results",
        },
        {
          id: r("AdsInsightsColumn").LAST_SIGNIFICANT_EDIT,
          align: "left",
          isSortable: !1,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          sampleContentKey: "delivery",
          levelSpecificProps: {
            ADGROUP: {
              fieldsForExport: [r("AdsInsightsColumn").LAST_SIGNIFICANT_EDIT],
            },
          },
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_SENT,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_DELIVERED,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField").MESSAGES_DELIVERED,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField").COST_PER_MESSAGE_DELIVERED,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          sampleContentKey: "cost",
          width: 130,
        },
        {
          id: r("AdsInsightsField").MESSAGES_DELIVERED_CTR,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          sampleContentKey: "percentage",
          width: 130,
        },
        {
          id: r("AdsInsightsField").READ_RATE,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          sampleContentKey: "percentage",
          width: 130,
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_READ_RATE,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_LINK_BTN_CLICK,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_COST_PER_LINK_BTN_CLICK,
          align: "left",
          fields: [
            r("AdsInsightsField").MARKETING_MESSAGES_COST_PER_LINK_BTN_CLICK,
            r("AdsInsightsField").MARKETING_MESSAGES_SPEND_CURRENCY,
          ],
          fieldsForExport: [
            r("AdsInsightsField").MARKETING_MESSAGES_COST_PER_LINK_BTN_CLICK,
          ],
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_COST_PER_DELIVERED,
          align: "left",
          fields: [
            r("AdsInsightsField").MARKETING_MESSAGES_COST_PER_DELIVERED,
            r("AdsInsightsField").MARKETING_MESSAGES_SPEND_CURRENCY,
          ],
          fieldsForExport: [
            r("AdsInsightsField").MARKETING_MESSAGES_COST_PER_DELIVERED,
          ],
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_SPEND,
          align: "left",
          fields: [
            r("AdsInsightsField").MARKETING_MESSAGES_SPEND,
            r("AdsInsightsField").MARKETING_MESSAGES_SPEND_CURRENCY,
          ],
          fieldsForExport: [r("AdsInsightsField").MARKETING_MESSAGES_SPEND],
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_WEBSITE_PURCHASE,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_WEBSITE_ADD_TO_CART,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField")
            .MARKETING_MESSAGES_WEBSITE_INITIATE_CHECKOUT,
          align: "left",
          minWidth: 130,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 130,
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_WEBSITE_PURCHASE_VALUES,
          align: "left",
          minWidth: 180,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 180,
        },
        {
          id: r("AdsInsightsField").MARKETING_MESSAGES_LANGUAGE,
          align: "left",
          minWidth: 130,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
          width: 130,
        },
        {
          id: r("AdsInsightsColumn").MSA_SELLER_BUDGET,
          align: "right",
          hasEmptyFooter: !0,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          isSortable: !1,
          minWidth: 165,
          width: 165,
        },
        {
          id: r("AdsInsightsColumn").OBJECTIVE,
          align: "left",
          hasEmptyFooter: !0,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          sampleContentKey: "objectiveActionSingular",
          levelSpecificProps: { CREATIVE: { isSortable: !1 } },
        },
        {
          id: r("AdsInsightsColumn").OPTIMIZATION_RESULTS,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          sampleContentKey: "delivery",
          sampleContentLargeKey: "objectiveActionPlural",
        },
        {
          id: r("AdsMgmtColumn").PACING,
          align: "left",
          hasEmptyFooter: !0,
          fields: [],
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          primaryField: r("AdsMgmtColumn").PACING,
        },
        {
          id: r("AdsInsightsColumn").PERCENTAGE_AUDIENCE_REACHED,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          sampleContentKey: "percentage",
        },
        {
          id: r("AdsInsightsColumn").PERCENTAGE_FIRST_TIME_IMPRESSIONS,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          sampleContentKey: "percentage",
        },
        {
          id: r("AdsInsightsColumn").QUALITY_SCORE_ECTR,
          hasEmptyFooter: !0,
          fieldsForExport: [r("AdsInsightsField").QUALITY_SCORE_ECTR],
          minWidth: 120,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
          primaryField: r("AdsInsightsField").ENGAGEMENT_RATE_RANKING,
          secondaryLabel: p,
          sortType: "INTEGER",
          width: 120,
        },
        {
          id: r("AdsInsightsColumn").QUALITY_SCORE_ECVR,
          hasEmptyFooter: !0,
          fieldsForExport: [r("AdsInsightsField").QUALITY_SCORE_ECVR],
          minWidth: 120,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
          primaryField: r("AdsInsightsField").CONVERSION_RATE_RANKING,
          secondaryLabel: p,
          sortType: "INTEGER",
          width: 120,
        },
        {
          id: r("AdsInsightsColumn").QUALITY_SCORE_ORGANIC,
          hasEmptyFooter: !0,
          fieldsForExport: [r("AdsInsightsField").QUALITY_SCORE_ORGANIC],
          minWidth: 120,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
          primaryField: r("AdsInsightsField").QUALITY_RANKING,
          secondaryLabel: p,
          sortType: "INTEGER",
          width: 120,
        },
        {
          id: r("AdsInsightsColumn").REACH,
          sampleContentKey: "reach",
          sampleContentLargeKey: "results",
        },
        {
          id: r("AdsInsightsColumn").RELEVANCE_SCORE_VALUE,
          hasEmptyFooter: !0,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
          sampleContentKey: "relevanceScoreValue",
          sortField: r("AdsInsightsField").RELEVANCE_SCORE,
        },
        {
          id: r("AdsInsightsColumn").RELEVANCE_SCORE_POSITIVE_FEEDBACK,
          hasEmptyFooter: !0,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
          sampleContentKey: "relevanceScoreFeedback",
        },
        {
          id: r("AdsInsightsColumn").RELEVANCE_SCORE_NEGATIVE_FEEDBACK,
          hasEmptyFooter: !0,
          isSortable: !1,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
          sampleContentKey: "relevanceScoreFeedback",
        },
        {
          id: r("AdsInsightsColumn").RELEVANCE_SCORE_ORGANIC_RANK,
          hasEmptyFooter: !0,
          isSortable: !1,
          objectTypes: [
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          sampleContentKey: "relevanceScoreOrganicRank",
        },
        {
          id: r("AdsInsightsColumn").CUMULATIVE_REACH,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          sampleContentKey: "reach",
        },
        {
          id: r("AdsInsightsColumn").RESULT_RATE,
          sampleContentKey: "percentage",
          supportAttributionWindow: !0,
          supportInlineAttributionColumn: !0,
          supportedAttributionWindows: o("AdsMgmtCAWByCostDeprecationUtils")
            .ATTRIBUTION_SETTINGS_SUPPORTED_FOR_COST_METRICS,
        },
        {
          id: r("AdsInsightsColumn").RESULTS,
          fields: [
            r("AdsInsightsField").RESULTS,
            r("AdsInsightsField").OBJECTIVE,
          ]
            .concat(
              f
                ? [
                    o("AdsInsightsFields").makeActionID(
                      "actions",
                      "leadgen.other",
                    ),
                    o("AdsInsightsFields").makeActionID(
                      "actions",
                      "onsite_conversion.messaging_automated_flow_complete",
                    ),
                    o("AdsInsightsFields").makeActionID(
                      "actions",
                      "onsite_conversion.lead",
                    ),
                  ]
                : [],
            )
            .filter(r("isTruthy")),
          fieldsForExport: [r("AdsInsightsField").RESULTS],
          sampleContentKey: "resultsSmall",
          sampleContentLargeKey: "objectiveActionPlural",
          supportAttributionWindow: !0,
          supportBudgetForecast: !0,
          supportInlineAttributionColumn: !0,
        },
        {
          id: r("AdsInsightsColumn").RESULT_VALUES,
          sampleContentKey: "resultsSmall",
          sampleContentLargeKey: "objectiveActionPlural",
          supportAttributionWindow: !0,
          supportInlineAttributionColumn: !0,
        },
      ].concat(
        g
          ? [
              {
                id: r("AdsInsightsColumn").RESULT_ADJUSTED_VALUES,
                sampleContentKey: "resultsSmall",
                sampleContentLargeKey: "objectiveActionPlural",
                supportAttributionWindow: !0,
                supportInlineAttributionColumn: !0,
              },
            ]
          : [],
        g
          ? [
              {
                id: r("AdsInsightsColumn").RESULT_ADJUSTED_ROAS,
                sampleContentKey: "resultsSmall",
                sampleContentLargeKey: "objectiveActionPlural",
                supportAttributionWindow: !0,
                supportInlineAttributionColumn: !0,
                supportedAttributionWindows: o(
                  "AdsMgmtCAWByCostDeprecationUtils",
                ).ATTRIBUTION_SETTINGS_SUPPORTED_FOR_COST_METRICS,
              },
            ]
          : [],
        [
          {
            id: r("AdsInsightsColumn").RESULT_ROAS,
            sampleContentKey: "resultsSmall",
            sampleContentLargeKey: "objectiveActionPlural",
            supportAttributionWindow: !0,
            supportInlineAttributionColumn: !0,
            supportedAttributionWindows: o("AdsMgmtCAWByCostDeprecationUtils")
              .ATTRIBUTION_SETTINGS_SUPPORTED_FOR_COST_METRICS,
          },
          {
            id: r("AdsInsightsColumn").SOCIAL_CLICKS,
            sampleContentKey: "results",
          },
          {
            id: r("AdsInsightsColumn").SOCIAL_IMPRESSIONS,
            sampleContentKey: "results",
          },
          {
            id: r("AdsInsightsColumn").SOCIAL_REACH,
            sampleContentKey: "results",
          },
          {
            id: r("AdsInsightsColumn").SPEND,
            sampleContentKey: "spend",
            sampleContentLargeKey: "predictedSpend",
          },
          {
            id: r("AdsMgmtColumn").SPENT_PERCENT,
            isSortable: !1,
            objectTypes: [
              r("AdsObjectTypes").CAMPAIGN_GROUP,
              r("AdsObjectTypes").CAMPAIGN,
            ],
            primaryField: r("AdsInsightsField").SPEND,
          },
          {
            id: r("AdsMgmtColumn").START_TIME,
            hasEmptyFooter: !0,
            fields: [],
            fieldsForExport: [r("AdsInsightsField").CAMPAIGN_START],
            objectTypes: [r("AdsObjectTypes").CAMPAIGN_GROUP],
            primaryField: "start_time",
            sampleContentKey: "singleDate",
          },
          {
            id: r("AdsInsightsColumn").STORE_VISITS,
            objectTypes: [
              r("AdsObjectTypes").ACCOUNT,
              r("AdsObjectTypes").CAMPAIGN_GROUP,
              r("AdsObjectTypes").CAMPAIGN,
              r("AdsObjectTypes").ADGROUP,
            ],
            primaryField: o("AdsInsightsFields").makeActionID(
              "store_visit_actions",
              "store_visit",
            ),
            supportAttributionWindow: !0,
          },
          {
            id: r("AdsMgmtColumn").STOP_TIME,
            hasEmptyFooter: !0,
            fields: [],
            fieldsForExport: [r("AdsInsightsField").CAMPAIGN_END],
            objectTypes: [r("AdsObjectTypes").CAMPAIGN_GROUP],
            primaryField: "stop_time",
            sampleContentKey: "singleDate",
          },
          {
            id: r("AdsInsightsColumn").TODAY_SPEND,
            align: "left",
            fields: [r("AdsInsightsField").TODAY_SPEND],
            objectTypes: [
              r("AdsObjectTypes").CAMPAIGN_GROUP,
              r("AdsObjectTypes").CAMPAIGN,
              r("AdsObjectTypes").ADGROUP,
              r("AdsObjectTypes").CREATIVE,
            ],
            sampleContentKey: "spend",
            sampleContentLargeKey: "predictedSpend",
          },
          {
            id: r("AdsInsightsColumn").TOTAL_ACTIONS,
            sampleContentKey: "results",
          },
          {
            id: r("AdsInsightsColumn").TOTAL_UNIQUE_ACTIONS,
            sampleContentKey: "results",
          },
          {
            id: r("AdsInsightsColumn").TOTAL_ACTION_VALUE,
            sampleContentKey: "cost",
            sampleContentLargeKey: "costLarge",
          },
          {
            id: r("AdsInsightsColumn").UNIQUE_CLICKS,
            sampleContentKey: "results",
          },
          {
            id: r("AdsInsightsColumn").UNIQUE_CTR,
            sampleContentKey: "percentage",
          },
          {
            id: r("AdsInsightsColumn").UNIQUE_LINK_CLICKS_CTR,
            sampleContentKey: "percentage",
          },
          {
            id: r("AdsInsightsColumn").UNIQUE_SOCIAL_CLICKS,
            sampleContentKey: "results",
          },
          {
            id: r("AdsMgmtColumn").URL_TAGS,
            isSortable: !1,
            minWidth: 200,
            objectTypes: [r("AdsObjectTypes").ADGROUP],
            width: 200,
          },
          {
            id: r("AdsMgmtColumn").WEBSITE_URL,
            minWidth: 300,
            objectTypes: [r("AdsObjectTypes").ADGROUP],
            width: 300,
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "unique_video_view_10_sec",
              "video_view",
            ),
            sampleContentKey: "results",
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "website_purchase_roas",
              "offsite_conversion.fb_pixel_purchase",
            ),
            fields: [
              o("AdsInsightsFields").makeActionID(
                "website_purchase_roas",
                "offsite_conversion.fb_pixel_purchase",
              ),
              o("AdsInsightsFields").makeActionID(
                "action_values",
                "offsite_conversion.fb_pixel_purchase",
              ),
            ],
            fieldsForExport: [
              o("AdsInsightsFields").makeActionID(
                "website_purchase_roas",
                "offsite_conversion.fb_pixel_purchase",
              ),
            ],
            sampleContentKey: "results",
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "mobile_app_purchase_roas",
              "app_custom_event.fb_mobile_purchase",
            ),
            fields: [
              o("AdsInsightsFields").makeActionID(
                "mobile_app_purchase_roas",
                "app_custom_event.fb_mobile_purchase",
              ),
              o("AdsInsightsFields").makeActionID(
                "action_values",
                "app_custom_event.fb_mobile_purchase",
              ),
            ],
            fieldsForExport: [
              o("AdsInsightsFields").makeActionID(
                "mobile_app_purchase_roas",
                "app_custom_event.fb_mobile_purchase",
              ),
            ],
            sampleContentKey: "results",
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "catalog_segment_value",
              "offsite_conversion.fb_pixel_add_to_cart",
            ),
            sampleContentKey: "results",
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "catalog_segment_value",
              "offsite_conversion.fb_pixel_purchase",
            ),
            sampleContentKey: "results",
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "catalog_segment_value",
              "app_custom_event.fb_mobile_add_to_cart",
            ),
            sampleContentKey: "results",
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "catalog_segment_value",
              "app_custom_event.fb_mobile_purchase",
            ),
            sampleContentKey: "results",
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "catalog_segment_value_omni_purchase_roas",
              "omni_purchase",
            ),
            sampleContentKey: "results",
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "catalog_segment_value_mobile_purchase_roas",
              "app_custom_event.fb_mobile_purchase",
            ),
            sampleContentKey: "results",
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "catalog_segment_value_website_purchase_roas",
              "offsite_conversion.fb_pixel_purchase",
            ),
            sampleContentKey: "results",
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "promoted_product_set_value",
              "omni_purchase",
            ),
            sampleContentKey: "results",
          },
          {
            id: r("AdsMgmtColumn").AGE,
            fields: [],
            isSortable: !1,
            minWidth: 140,
            width: 140,
            objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          },
          {
            id: r("AdsMgmtColumn").GENDER,
            fields: [],
            minWidth: 150,
            isSortable: !1,
            objectTypes: [r("AdsObjectTypes").CAMPAIGN],
            width: 150,
          },
          {
            id: r("AdsMgmtColumn").LOCATION,
            fields: [],
            align: "left",
            minWidth: 130,
            isSortable: !1,
            objectTypes: [r("AdsObjectTypes").CAMPAIGN],
            width: 130,
          },
          {
            id: r("AdsMgmtColumn").LABELS,
            fields: [],
            isSortable: !1,
            minWidth: 60,
            objectTypes: [r("AdsObjectTypes").CAMPAIGN_GROUP],
            width: 70,
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "conversion_leads",
              "conversion_lead",
            ),
            supportAttributionWindow: !0,
          },
          {
            id: o("AdsInsightsFields").makeActionID(
              "cost_per_conversion_lead",
              "conversion_lead",
            ),
            supportAttributionWindow: !0,
          },
          {
            id: r("AdsMgmtColumn").PERFORMANCE_GOAL,
            align: "left",
            hasEmptyFooter: !0,
            objectTypes: [r("AdsObjectTypes").CAMPAIGN],
            sampleContentKey: "objectiveActionSingular",
            label: s._(/*BTDS*/ "Performance goal"),
            primaryField: r("AdsInsightsField").OPTIMIZATION_GOAL,
            fieldsForExport: [r("AdsInsightsField").OPTIMIZATION_GOAL],
            levelSpecificProps: { CREATIVE: { isSortable: !1 } },
          },
        ],
      ),
      v = r("createObjectFrom")(
        b.map(function (e) {
          return e.id;
        }),
        b,
      );
    function S(e) {
      var t,
        n = e.id,
        r = (t = v[n]) == null ? void 0 : t.primaryField;
      return r != null
        ? r
        : o("AdsInsightsFields").isValid(n) ||
            o("AdsReportBuilderCustomBreakdownUtil").isCustomBreakdown(n)
          ? n
          : null;
    }
    function R(e) {
      var t = e.attributionWindow,
        n = S(e);
      if (n == null || t == null) return n;
      var r = o("AdsInsightsFieldDescriptor").get(n),
        a = r.actionFieldType,
        i = r.actionType,
        l = r.customMetricID;
      return a != null && i != null
        ? o("AdsInsightsFields").makeActionID(a, i, t)
        : o("AdsInsightsActionFieldTypes").isResultsType(n)
          ? o("AdsInsightsFields").makeResultsFieldID(n, t)
          : l != null
            ? o("AdsInsightsFields").makeCMIDWithAttributionWindow(n, t)
            : n;
    }
    function L(e) {
      var t,
        n,
        a,
        i,
        l,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        b,
        L,
        k,
        I,
        T,
        D,
        x = e.attributionWindow,
        $ = e.attributionWindowType,
        P = e.comparisonColumnType,
        N = e.id,
        M = e.objectType,
        w = v[N],
        A = S(e),
        F = R(e);
      if (F == null || A == null)
        return (
          r("expectationViolation")(
            "Column %s is an insights column but missing primaryField",
          ),
          {}
        );
      var O = o("AdsInsightsFields").getConfigOrNull(A),
        B;
      if ($ === "dda") {
        var W = o("AdsInsightsFields").getDDAFieldForInsightsField(A);
        B = W != null ? o("AdsInsightsFields").getConfigOrNull(W) : null;
      }
      var q =
          (t =
            (n = r("AdsInsightsMetricAvailableLevelsNotes")[N]) != null
              ? n
              : O == null
                ? void 0
                : O.availabilityNote) != null
            ? t
            : void 0,
        U =
          (a =
            (i =
              (l = w == null ? void 0 : w.label) != null
                ? l
                : r("AdsInsightsMetricNames")[N]) != null
              ? i
              : O == null
                ? void 0
                : O.label) != null
            ? a
            : r("adsMgmtTableColumnConfigGetDefaultLabel")(N);
      if (o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding()) {
        var V = {
            "actions:omni_landing_page_view": s._(/*BTDS*/ "Visits"),
            "actions:landing_page_view": s._(/*BTDS*/ "Website visits"),
            "actions:app_site_visit": s._(/*BTDS*/ "App visits"),
            "cost_per_action_type:omni_landing_page_view": s._(
              /*BTDS*/ "Cost per visit",
            ),
          },
          H = N,
          G = V[H];
        G != null && (U = G);
      }
      if ($ === "dda") {
        var z, j, K;
        U =
          (z =
            (j = (K = B) == null ? void 0 : K.label) != null
              ? j
              : o("AdsDDAStrings").getIncrementalColumnLabel(U)) != null
            ? z
            : U;
      }
      var Q =
          (u =
            (c =
              (d = (m = B) == null ? void 0 : m.description) != null
                ? d
                : r("adsGetInsightsMetricDefinition")(N)) != null
              ? c
              : O == null
                ? void 0
                : O.description) != null
            ? u
            : void 0,
        X = ["CURRENCY", "FLOAT", "INTEGER", "LONG_INTEGER"].includes(
          O == null ? void 0 : O.valueType,
        ),
        Y =
          (p = w == null ? void 0 : w.formatType) != null
            ? p
            : O == null
              ? void 0
              : O.formatType,
        J = (_ = O == null ? void 0 : O.cutoffTime) != null ? _ : void 0,
        Z = ((f = w == null ? void 0 : w.fields) != null ? f : [A]).concat(
          x != null ? [F] : [],
        ),
        ee = o("AdsInsightsFieldDescriptor").get(F),
        te = ee.customMetricID,
        ne =
          (g =
            (h = w == null ? void 0 : w.fieldsForExport) != null
              ? h
              : te != null
                ? [A]
                : null) != null
            ? g
            : Z,
        re = !!(O != null && O.beta),
        oe = (y = O == null ? void 0 : O.note) != null ? y : void 0,
        ae = (b = O == null ? void 0 : O.noteTitle) != null ? b : void 0,
        ie =
          (L = O == null ? void 0 : O.shortSummaryLabel) != null ? L : void 0,
        le = (k = w == null ? void 0 : w.sortField) != null ? k : F,
        se =
          (I = w == null ? void 0 : w.valueType) != null
            ? I
            : O == null
              ? void 0
              : O.valueType,
        ue = (T = w == null ? void 0 : w.sortType) != null ? T : se,
        ce = (D = O == null ? void 0 : O.unit) != null ? D : void 0,
        de = P == null,
        me =
          x || $
            ? (!w || w.isSortable !== !1) && !E(x || $)
            : w == null
              ? void 0
              : w.isSortable,
        pe =
          M != null
            ? r("adsMgmtTableSpecializeLevelSpecificPropsForObjectType")(
                w == null ? void 0 : w.levelSpecificProps,
                M,
              )
            : void 0;
      return babelHelpers.extends(
        {},
        C,
        w,
        {
          availabilityNote: q,
          cutoffTime: J,
          description: Q,
          fields: Z,
          fieldsForExport: ne,
          formatType: Y,
          isBeta: re,
          isResizable: de,
          isSortable: me,
          label: U,
          note: oe,
          noteTitle: ae,
          primaryField: F,
          shortSummaryLabel: ie,
          sortField: le,
          sortType: ue,
          supportBenchmark: X,
          unit: ce,
          valueType: se,
        },
        pe,
      );
    }
    function E(e) {
      return !!e && e !== o("AdsInsightsAttributionWindows").getDefault();
    }
    function k(e) {
      var t;
      return !!((t = v[e]) != null && t.supportAttributionWindow);
    }
    function I() {
      return b
        .filter(function (e) {
          return e.supportAttributionWindow === !0;
        })
        .map(function (e) {
          return e.id;
        });
    }
    function T(e) {
      return v[e.id] != null || r("isTruthy")(R(e));
    }
    var D = {
      doesSupportAttributionWindow: k,
      getColumnsSupportingAttributionWindow: I,
      getProps: L,
      isApplicable: T,
    };
    l.default = D;
  },
  226,
);
