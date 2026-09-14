__d(
  "AdsMgmtTableMetadataColumnLevelOverrides",
  [
    "fbt",
    "AdsExperimentsScenarioTestStrings",
    "AdsGuidanceActionsRawFbts",
    "AdsInsightsField",
    "AdsInsightsMetricAvailableLevelsNotes",
    "AdsInsightsMetricNames",
    "AdsInsightsSortDirection",
    "AdsMgmt2026H1ExperimentUtils",
    "AdsMgmtColumn",
    "AdsMgmtMonitorFlagFbts",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "MAIBAGP1AnalyzeTopicsUtil",
    "adsGetInsightsMetricDefinition",
    "adsMgmtTableColumnConfigGetDefaultLabel",
    "adsMgmtTableSpecializeLevelSpecificPropsForObjectType",
    "createObjectFrom",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = r("AdsObjectUtils").getSingularNameFromObjectType(
        (e = r("AdsObjectTypes")).CAMPAIGN,
      ),
      d = { align: "left", isSortable: !1 },
      m = [
        {
          id: (u = r("AdsMgmtColumn")).APP_TRACKING_EVENT,
          isSortable: !0,
          minWidth: 200,
          objectTypes: [e.ADGROUP],
          width: 200,
        },
        {
          id: u.AD_SET_IMPRESSIONS,
          label: s._(/*BTDS*/ "Ad set impressions"),
          minWidth: 120,
          objectTypes: [e.CAMPAIGN],
        },
        {
          id: u.BODY,
          minWidth: 100,
          objectTypes: [e.ADGROUP, e.CREATIVE],
          width: 120,
        },
        {
          id: u.BUDGET,
          align: "right",
          defaultSortingOrder: r("AdsInsightsSortDirection").DESC,
          hasEmptyFooter: !0,
          isSortable: !0,
          minWidth: 95,
          objectTypes: [e.CAMPAIGN_GROUP, e.CAMPAIGN, e.ADGROUP],
          sampleContentKey: "budget",
          sampleContentLargeKey: "spend",
          sortField: o(
            "AdsMgmt2026H1ExperimentUtils",
          ).getIsAccountInBudgetUsability()
            ? "budget"
            : "lifetime_budget",
          valueType: "CURRENCY",
          width: 95,
          levelSpecificProps: {
            CAMPAIGN_GROUP: {
              fieldsForExport: [
                r("AdsInsightsField").CAMPAIGN_BUDGET_VALUE,
                r("AdsInsightsField").CAMPAIGN_BUDGET_TYPE,
              ],
              isSortable: !0,
            },
            CAMPAIGN: {
              fieldsForExport: [
                r("AdsInsightsField").ADSET_BUDGET_VALUE,
                r("AdsInsightsField").ADSET_BUDGET_TYPE,
              ],
            },
            ADGROUP: {
              fieldsForExport: [
                r("AdsInsightsField").ADSET_BUDGET_VALUE,
                r("AdsInsightsField").ADSET_BUDGET_TYPE,
              ],
              isSortable: !1,
              secondaryLabel: c,
            },
          },
        },
        {
          id: r("AdsMgmtColumn").BUDGET_POOL_SHARED_BUDGET,
          align: "right",
          isSortable: !1,
          minWidth: 120,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          width: 140,
        },
        {
          id: r("AdsMgmtColumn").BUDGET_POOL_VALUE_MULTIPLIER,
          align: "right",
          isSortable: !1,
          minWidth: 130,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          width: 150,
        },
        {
          id: r("AdsMgmtColumn").BUDGET_REMAINING,
          minWidth: 80,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
          ],
          width: 95,
        },
        {
          id: r("AdsMgmtColumn").BUDGET_TYPE,
          minWidth: 65,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          width: 70,
        },
        {
          id: r("AdsMgmtColumn").CONVERSION_TRACKING_PIXEL,
          isSortable: !0,
          minWidth: 200,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
          width: 200,
        },
        { id: r("AdsMgmtColumn").CREATIVE_SUMMARY, isSortable: !0 },
        {
          id: r("AdsMgmtColumn").DESTINATION,
          minWidth: 116,
          objectTypes: [
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          width: 120,
        },
        {
          id: r("AdsMgmtColumn").END,
          align: "right",
          isSortable: !0,
          minWidth: 100,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          sortType: "DATE",
          width: 113,
          levelSpecificProps: {
            CAMPAIGN_GROUP: {
              fieldsForExport: [r("AdsInsightsField").CAMPAIGN_END],
              sortField: "stop_time",
            },
            CAMPAIGN: {
              fieldsForExport: [r("AdsInsightsField").ADSET_END],
              sortField: "end_time",
            },
            ADGROUP: {
              fieldsForExport: [r("AdsInsightsField").ADSET_END],
              sortField: "adset.end_time",
            },
            CREATIVE: { fieldsForExport: [], isSortable: !1 },
          },
        },
        {
          id: r("AdsMgmtColumn").IO_NAME,
          label: s._(/*BTDS*/ "IO name"),
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          width: 120,
        },
        {
          id: r("AdsMgmtColumn").IO_NUMBER,
          label: s._(/*BTDS*/ "IO number"),
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          width: 120,
        },
        {
          id: r("AdsMgmtColumn").LINE_AMOUNT,
          label: s._(/*BTDS*/ "Line amount"),
          minWidth: 120,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsMgmtColumn").LINE_DESCRIPTION,
          label: s._(/*BTDS*/ "Line description"),
          minWidth: 120,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
        },
        {
          id: r("AdsMgmtColumn").LINE_END,
          label: s._(/*BTDS*/ "Line end"),
          minWidth: 120,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
        },
        {
          id: r("AdsMgmtColumn").LINE_IMPRESSIONS,
          label: s._(/*BTDS*/ "Line impressions"),
          minWidth: 120,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
        },
        {
          id: r("AdsMgmtColumn").LINE_NUMBER,
          label: s._(/*BTDS*/ "Line#"),
          minWidth: 120,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
        },
        {
          id: r("AdsMgmtColumn").LINE_PRICE,
          label: s._(/*BTDS*/ "Line price"),
          minWidth: 120,
          objectTypes: [
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
        },
        {
          id: r("AdsMgmtColumn").LINE_START,
          label: s._(/*BTDS*/ "Line start"),
          minWidth: 120,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
        },
        {
          id: r("AdsMgmtColumn").LINE_REMAINING_IMPRESSIONS,
          label: s._(/*BTDS*/ "Line remaining impressions"),
          minWidth: 120,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
          ],
        },
        {
          id: r("AdsMgmtColumn").LINE_TARGETS,
          label: s._(/*BTDS*/ "Line targets"),
          minWidth: 120,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
        },
        {
          id: r("AdsMgmtColumn").LINK,
          minWidth: 100,
          objectTypes: [
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          width: 120,
        },
        { id: r("AdsMgmtColumn").SUGGESTIONS_TOGGLE, fixed: !1 },
        {
          id: r("AdsMgmtColumn").NAME,
          defaultSortingOrder: r("AdsInsightsSortDirection").ASC,
          fixed: !0,
          isMovable: !1,
          isRemovable: !1,
          isSortable: !0,
          minWidth: o(
            "MAIBAGP1AnalyzeTopicsUtil",
          ).showInlineButtonsAtAdHoverBar(!0)
            ? 344
            : 320,
          sampleContentKey: "name",
          sampleContentLargeKey: "nameLarge",
          valueType: "STRING",
          width: o("MAIBAGP1AnalyzeTopicsUtil").showInlineButtonsAtAdHoverBar(
            !0,
          )
            ? 344
            : 320,
          levelSpecificProps: {
            ACCOUNT: {
              fieldsForExport: [r("AdsInsightsField").ACCOUNT_NAME],
              label: r("AdsInsightsMetricNames").account_name,
              isSortable: !0,
              sortField: "name",
            },
            CAMPAIGN_GROUP: {
              fieldsForExport: [r("AdsInsightsField").CAMPAIGN_NAME],
              label: r("AdsObjectUtils").getSingularNameFromObjectType(
                r("AdsObjectTypes").CAMPAIGN_GROUP,
              ),
              isSortable: !0,
              sortField: "name",
            },
            CAMPAIGN: {
              fieldsForExport: [r("AdsInsightsField").ADSET_NAME],
              label: r("AdsObjectUtils").getSingularNameFromObjectType(
                r("AdsObjectTypes").CAMPAIGN,
              ),
              isSortable: !0,
              sortField: "name",
            },
            ADGROUP: {
              fieldsForExport: [r("AdsInsightsField").AD_NAME],
              label: r("AdsObjectUtils").getSingularNameFromObjectType(
                r("AdsObjectTypes").ADGROUP,
              ),
              isSortable: !0,
              minWidth: 360,
              sortField: "name",
              width: 360,
            },
            CREATIVE: {
              isSortable: !1,
              fields: [],
              label: r("AdsInsightsMetricNames").creative_summary,
              fieldsForExport: [r("AdsInsightsField").CREATIVE_NAME],
            },
          },
        },
        {
          id: r("AdsMgmtColumn").POTENTIAL_OUTCOME,
          label: s._(/*BTDS*/ "Potential outcome"),
          align: "right",
          isSortable: !1,
          isResizable: !1,
        },
        {
          id: r("AdsMgmtColumn").OPPORTUNITY_SCORE,
          label: o("AdsGuidanceActionsRawFbts").SCORE_COLUMN_HEADER,
          align: "left",
          isSortable: !1,
          isResizable: !1,
        },
        {
          id: r("AdsMgmtColumn").MONITOR_FLAG,
          label: o("AdsMgmtMonitorFlagFbts").MONITOR_FLAG_COLUMN_HEADER,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN_GROUP],
          minWidth: 200,
          align: "left",
          width: 200,
          isSortable: !1,
        },
        {
          id: r("AdsMgmtColumn").RECOMMENDATIONS_GUIDANCE,
          label: o("AdsGuidanceActionsRawFbts").ACTIONS_COLUMN_HEADER,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          minWidth: 200,
          align: "left",
          width: 200,
          sortField: "delivery_status",
          isSortable: !0,
        },
        {
          id: r("AdsMgmtColumn").CREATIVE_POTENTIAL,
          label: s._(/*BTDS*/ "Creative fit"),
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          align: "left",
          isSortable: !1,
          width: 120,
          minWidth: 100,
          hasEmptyFooter: !0,
        },
        {
          id: r("AdsMgmtColumn").CONVERSION_LOCATION,
          label: o("AdsExperimentsScenarioTestStrings")
            .CONVERSION_LOCATION_LABEL,
          align: "left",
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
          ],
          width: 0,
        },
        {
          id: r("AdsMgmtColumn").OFFLINE_TRACKING_EVENT,
          isSortable: !0,
          minWidth: 200,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
          width: 200,
        },
        {
          id: r("AdsMgmtColumn").PREVIEW_LINK,
          minWidth: 80,
          objectTypes: [
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          width: 100,
        },
        {
          id: r("AdsMgmtColumn").PRODUCT_TYPE,
          isSortable: !0,
          label: s._(/*BTDS*/ "Product type"),
          objectTypes: [
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
        },
        {
          id: r("AdsMgmtColumn").RELATED_PAGE,
          minWidth: 100,
          objectTypes: [
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          width: 120,
        },
        {
          id: r("AdsMgmtColumn").SCHEDULE,
          hasEmptyFooter: !0,
          fieldsForExport: [
            r("AdsInsightsField").ADSET_END,
            r("AdsInsightsField").ADSET_START,
          ],
          isSortable: !0,
          minWidth: 300,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          sampleContentKey: "dateRange",
          sortField: "start_time",
          valueType: "DATE",
          width: 300,
        },
        {
          id: r("AdsMgmtColumn").AD_SCHEDULE,
          hasEmptyFooter: !0,
          minWidth: 300,
          objectTypes: [r("AdsObjectTypes").ADGROUP],
          sampleContentKey: "dateRange",
          valueType: "DATE",
          width: 300,
        },
        {
          id: r("AdsMgmtColumn").SPEND_LIMIT,
          hasEmptyFooter: !0,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN_GROUP],
        },
        {
          id: r("AdsMgmtColumn").START,
          align: "right",
          isSortable: !0,
          minWidth: 100,
          objectTypes: [
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            r("AdsObjectTypes").CAMPAIGN,
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          sortType: "DATE",
          width: 113,
          levelSpecificProps: {
            CAMPAIGN_GROUP: {
              fieldsForExport: [r("AdsInsightsField").CAMPAIGN_START],
              sortField: "start_time",
            },
            CAMPAIGN: {
              fieldsForExport: [r("AdsInsightsField").ADSET_START],
              sortField: "start_time",
            },
            ADGROUP: {
              fieldsForExport: [r("AdsInsightsField").ADSET_START],
              sortField: "adset.start_time",
            },
            CREATIVE: { fieldsForExport: [], isSortable: !1 },
          },
        },
        {
          id: r("AdsMgmtColumn").TIME_ELAPSED_PERCENT,
          minWidth: 75,
          objectTypes: [r("AdsObjectTypes").CAMPAIGN],
          width: 83,
        },
        {
          id: r("AdsMgmtColumn").TITLE,
          minWidth: 100,
          objectTypes: [
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
          width: 120,
        },
        {
          id: r("AdsMgmtColumn").UOM,
          isSortable: !0,
          label: s._(/*BTDS*/ "UOM"),
          objectTypes: [
            r("AdsObjectTypes").ADGROUP,
            r("AdsObjectTypes").CREATIVE,
          ],
        },
      ],
      p = r("createObjectFrom")(
        m.map(function (e) {
          return e.id;
        }),
        m,
      );
    function _(e) {
      var t,
        n,
        o,
        a,
        i = e.id,
        l = e.objectType,
        s = p[i],
        u = r("AdsInsightsMetricAvailableLevelsNotes")[i],
        c =
          (t = s == null ? void 0 : s.label) != null
            ? t
            : (s == null ? void 0 : s.showInSelector) !== !1
              ? (n = r("AdsInsightsMetricNames")[i]) != null
                ? n
                : r("adsMgmtTableColumnConfigGetDefaultLabel")(i)
              : void 0,
        m = (o = r("adsGetInsightsMetricDefinition")(i)) != null ? o : void 0,
        _ =
          (a = s == null ? void 0 : s.sortType) != null
            ? a
            : s == null
              ? void 0
              : s.valueType,
        f =
          l != null
            ? r("adsMgmtTableSpecializeLevelSpecificPropsForObjectType")(
                s == null ? void 0 : s.levelSpecificProps,
                l,
              )
            : void 0;
      return babelHelpers.extends(
        {},
        d,
        { availabilityNote: u, description: m, label: c, sortType: _ },
        s,
        f,
      );
    }
    function f(e) {
      return p[e.id] != null;
    }
    var g = { getProps: _, isApplicable: f };
    l.default = g;
  },
  226,
);
