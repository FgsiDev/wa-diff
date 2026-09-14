__d(
  "AdsPETableViewSelectors",
  [
    "invariant",
    "$InternalEnum",
    "AdsAccountStore",
    "AdsApplicationUtils",
    "AdsGetAvailableIDsSelectors",
    "AdsInsightsAttributionWindows",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsCompareAttributionWindowsDataProvider",
    "AdsInsightsFilter",
    "AdsInsightsPrioritizedSegmentsUtils",
    "AdsInsightsSettingsStore",
    "AdsInsightsTimeRange",
    "AdsInsightsUserFilterUtil",
    "AdsInsightsViewSpec",
    "AdsMgmt2026H2CPExperimentUtils",
    "AdsMgmtColumns",
    "AdsMgmtObjectLevelSelector",
    "AdsObjectTypeUtils",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "AdsPEAdAccountSortLiveProvider",
    "AdsPEAdgroupSortLiveSelectors",
    "AdsPEBreakdownProvider",
    "AdsPECampaignGroupSortLiveSelectors",
    "AdsPECampaignGroupTablePagingSelectors",
    "AdsPECampaignSortLiveSelectors",
    "AdsPEColumnsStore",
    "AdsPEFilterSetUtil",
    "AdsPEFilterUIStateSelectors",
    "AdsPEGroupSelector",
    "AdsPENavSectionToSelectionSelectorMap",
    "AdsPEPrioritizedHighlightsSelector",
    "AdsPEStatRangeUISelectors",
    "AdsPEStatRangeUIStoreSelectors",
    "AdsReportBuilderCompareAttributionWindowUtils",
    "AdsSelectionLevelSelectors",
    "LocalDateInterval",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsCreateThunkSelector",
    "adsMgmtCampaignGroupSelectedIdsSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsMgmtSupportedAttributionWindowsUtil",
    "adsPECreativeGetSortLiveInfoSelector",
    "adsPEManageAdsSectionSelector",
    "adsPENavStateSelector",
    "adsPEObjectTypeSelector",
    "gkx",
    "immutable",
    "nullthrows",
    "performanceSummarySelectedAdObjects_WithCrepeSupportSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = r("AdsPEBreakdownProvider").toFluxSelector(),
      p = r("AdsPEAdAccountSortLiveProvider").toFluxSelector(),
      _ = n("$InternalEnum").Mirrored(["Chart", "Table"]);
    function f(e) {
      return r("AdsInsightsTimeRange").interval(
        r("LocalDateInterval").fromStrings(e.start, e.end),
      );
    }
    function g(e, t) {
      return t == null || t === ""
        ? r("AdsInsightsTimeRange").interval(
            r("LocalDateInterval").fromStrings(e.start, e.end),
          )
        : r("AdsInsightsTimeRange").preset(t);
    }
    var h = (e = r("adsCreateSelector"))(
        [
          (u = r("adsPEManageAdsSectionSelector")),
          (c = r("adsCreateThunkSelector"))(p),
          c(r("adsPECreativeGetSortLiveInfoSelector")),
          c(o("AdsPEAdgroupSortLiveSelectors").getSortInfo),
          c(o("AdsPECampaignSortLiveSelectors").getSortInfo),
          c(o("AdsPECampaignGroupSortLiveSelectors").getSortInfo),
          c(r("AdsMgmtObjectLevelSelector")),
        ],
        function (t, n, r, o, a, i, l) {
          e: {
            if (
              t === "ACCOUNT" ||
              t === "ADVERTISING_SETTINGS" ||
              t === "AD_ACCOUNT_SETTINGS" ||
              t === "MESSAGE_SETTINGS" ||
              t === "MESSAGE_LANDING_PAGE"
            )
              return n().sortInfo;
            if (t === "CREATIVES") return r();
            if (t === "L1") return o();
            if (t === "L2") return a();
            if (t === "L3" || t === "CAMPAIGN_OVERVIEW") return i();
            if (t === "OPPORTUNITIES") {
              var e = l();
              return e === "campaign"
                ? i()
                : e === "ad_set"
                  ? a()
                  : e === "ad"
                    ? o()
                    : s(!1, "Root level %s is not supported!", e);
            }
            if (t === "PACKAGE_AD_CREATION") {
              var u = l();
              return u === "campaign"
                ? i()
                : u === "ad_set"
                  ? a()
                  : u === "ad"
                    ? o()
                    : s(!1, "Root level %s is not supported!", u);
            }
            return s(!1, "Invalid AdsInterfacesNavSections %s", t);
          }
        },
        { name: i.id + ".sortInfoSelector" },
      ),
      y = e(
        [u, c(h)],
        function (t, n) {
          if (!t) return [];
          var e = n();
          return e.sort.map(function (e) {
            return {
              field: e.field,
              direction: e.order === 1 ? 1 : -1,
              comparisonColumnType: e.comparisonColumnType,
            };
          });
        },
        { name: i.id + ".sortSpecSelector" },
      ),
      C = e(
        [o("AdsPEFilterUIStateSelectors").getFilterSet],
        function (t) {
          var e = t ? t.values : [];
          return e.map(function (e) {
            var t = e.field.name,
              n = e.operator,
              r = e.value;
            return {
              field: t,
              operator: n,
              value: o("AdsInsightsUserFilterUtil").coerceValue(n, r),
            };
          });
        },
        { name: i.id + ".userFilterSpecSelector" },
      ),
      b = (d = r("adsCreateStoreSelector"))(
        [],
        function (t) {
          return t;
        },
        { name: i.id + ".viewTypeSelector" },
      ),
      v = d(
        [],
        function (t) {
          return t;
        },
        { name: i.id + ".objectTypeSelector" },
      ),
      S = e(
        [
          b,
          c(r("AdsAccountStore").getSelectedAccountID),
          c(r("adsPEObjectTypeSelector")),
          r("adsCreateDynamicSelector")(
            o("AdsGetAvailableIDsSelectors").adsGetAvailableIDsSelector,
          ),
          c(o("AdsPEFilterUIStateSelectors").getFilterSet),
          u,
          c(r("performanceSummarySelectedAdObjects_WithCrepeSupportSelector")),
        ],
        function (t, n, a, i, l, s, u) {
          var e = r("AdsMgmtObjectLevelSelector")(s),
            c = n();
          if (c == null) return [];
          if (e === "ad_account" || s === "ACCOUNT") {
            var d = o("AdsInsightsFilter").idIn(r("AdsObjectTypes").ACCOUNT, [
              c,
            ]);
            return o("AdsInsightsFilter").normalize(
              o("AdsInsightsFilter").normalizeIDClauses([].concat(d)),
            );
          }
          if (e === "opportunities" || e === "privacy_info_center") return [];
          var m = a(),
            p = s;
          if (m === r("AdsObjectTypes").CREATION_PACKAGE)
            if (r("gkx")("2029")) {
              var f,
                g = u(),
                h = g.selectedAdObjectLevels;
              ((m =
                (f = o("AdsObjectTypeUtils").fromObjectLevel(h[0])) != null
                  ? f
                  : r("AdsObjectTypes").CAMPAIGN_GROUP),
                (p = r("AdsObjectUtils").getNavSectionFromObjectType(m)));
            } else return [];
          var y = [],
            C = e !== "ad_account" && t !== _.Table;
          if (C) {
            var b = o(
              "AdsPENavSectionToSelectionSelectorMap",
            ).selectedIDsSelector(p);
            if (b.length === 0) b = i(p);
            else {
              var v = o("AdsSelectionLevelSelectors").adsSelectionLevelSelector(
                p,
              );
              m = r("nullthrows")(o("AdsObjectTypeUtils").fromObjectLevel(v));
            }
            y = o("AdsInsightsFilter").idIn(m, b);
          } else {
            var S = k(m),
              R = S.filteringObjectIDs,
              L = S.filteringObjectType;
            y = o("AdsInsightsFilter").idIn(L, R);
          }
          var E = l(),
            I = o("AdsPEFilterSetUtil").toMultiLevelAPISpec(E),
            T = I.map(function (e) {
              var t = o("AdsInsightsFilter").splitFieldFromFilterObjectType(
                e.field,
              );
              return {
                field: o("AdsInsightsFilter").field(t[0], t[1]),
                operator: e.operator,
                value: e.value,
              };
            }),
            D = !!o("AdsInsightsFilter").getExplicitDeliveryClause(T, m),
            x = D ? [] : o("AdsInsightsFilter").excludeArchivedDeleted(m),
            $ = C ? [].concat(y) : [].concat(y, T, x);
          return o("AdsInsightsFilter").normalize(
            o("AdsInsightsFilter").normalizeIDClauses($),
          );
        },
        { name: i.id + ".filterSpecSelector" },
      ),
      R = d(
        [r("AdsPEColumnsStore")],
        function () {
          return {
            columns: r("AdsPEColumnsStore").get(),
            benchmarkDerivedColumnIDs:
              r("AdsPEColumnsStore").getBenchmarkDerivedColumnIDsOrNull(),
            compareAttributionWindowsCollapsedColumnIDs:
              r(
                "AdsPEColumnsStore",
              ).getCompareAttributionWindowsCollapsedColumnIDsOrNull(),
          };
        },
        { name: i.id + ".columnSpecSelector" },
      ),
      L = e(
        [
          r("AdsAccountStore").getSelectedAccount,
          o("AdsPEStatRangeUIStoreSelectors").getStatRangeStringSelector,
          o("AdsPEStatRangeUIStoreSelectors").getRangeTypeSelector,
          o("AdsPEStatRangeUIStoreSelectors").getComparisonOrNullSelector,
          r(
            "AdsInsightsCompareAttributionWindowsDataProvider",
          ).toFluxSelector(),
        ],
        function (t, n, r, a, i) {
          var e = t.getValue() || {},
            l = e.timezone_id,
            s = { timeRange: g(n(l), r()) },
            u = a();
          return (
            u &&
              !o(
                "AdsReportBuilderCompareAttributionWindowUtils",
              ).getIsCompareAttributionFeatureOn(i) &&
              (s = babelHelpers.extends({}, s, { comparisonTimeRange: f(u) })),
            s
          );
        },
        { name: i.id + ".tableTimeRangeSpecSelector" },
      ),
      E = e(
        [o("AdsPEStatRangeUISelectors").adsPEInsightsStatRangeUISelector],
        function (t) {
          var e = t.comparisonTimeRange,
            n = t.rangeType,
            r = t.statRangeString,
            o = { timeRange: g(r, n) };
          return (
            e &&
              (o = babelHelpers.extends({}, o, { comparisonTimeRange: f(e) })),
            o
          );
        },
        { name: i.id + ".chartTimeRangeSpecSelector" },
      ),
      k = e(
        [
          v,
          c(
            o("adsMgmtCampaignSelectedIdsSelector")
              .adsMgmtCampaignSelectedIdsSelector,
          ),
          c(
            o("adsMgmtCampaignGroupSelectedIdsSelector")
              .adsMgmtCampaignGroupSelectedIdsSelector,
          ),
          c(r("AdsAccountStore").getSelectedAccountID),
        ],
        function (t, n, o, a) {
          e: {
            if (t === r("AdsObjectTypes").ADGROUP) {
              var e = n();
              if (e.length > 0)
                return {
                  filteringObjectIDs: e,
                  filteringObjectType: r("AdsObjectTypes").CAMPAIGN,
                };
              var i = o();
              return i.length > 0
                ? {
                    filteringObjectIDs: i,
                    filteringObjectType: r("AdsObjectTypes").CAMPAIGN_GROUP,
                  }
                : {
                    filteringObjectIDs: [a() || ""],
                    filteringObjectType: r("AdsObjectTypes").ACCOUNT,
                  };
            }
            if (t === r("AdsObjectTypes").CAMPAIGN) {
              var l = o();
              return l.length > 0
                ? {
                    filteringObjectIDs: l,
                    filteringObjectType: r("AdsObjectTypes").CAMPAIGN_GROUP,
                  }
                : {
                    filteringObjectIDs: [a() || ""],
                    filteringObjectType: r("AdsObjectTypes").ACCOUNT,
                  };
            }
            return {
              filteringObjectIDs: [a() || ""],
              filteringObjectType: r("AdsObjectTypes").ACCOUNT,
            };
          }
        },
        { name: i.id + ".filteringObjectIDsAndTypeSelector" },
      ),
      I = 0,
      T = e(
        [
          b,
          r("adsPEObjectTypeSelector"),
          E,
          m,
          r("AdsInsightsSettingsStore").getSelector,
          R,
          y,
          C,
          u,
          c(S),
          c(r("performanceSummarySelectedAdObjects_WithCrepeSupportSelector")),
        ],
        function (t, n, a, i, l, s, u, c, d, m, p) {
          var e = n,
            _ = d;
          if (d === "PACKAGE_AD_CREATION" && r("gkx")("2029")) {
            var f,
              g = p(),
              h = g.selectedAdObjectLevels;
            ((e =
              (f = o("AdsObjectTypeUtils").fromObjectLevel(h[0])) != null
                ? f
                : r("AdsObjectTypes").CAMPAIGN_GROUP),
              (_ = r("AdsObjectUtils").getNavSectionFromObjectType(e)));
          }
          return r("AdsInsightsViewSpec").create(
            babelHelpers.extends({}, a, {
              benchmarkDerivedColumnIDs: s.benchmarkDerivedColumnIDs,
              columns: s.columns,
              breakdowns: i.breakdowns,
              filter: S(t),
              insights: l,
              navSection: _,
              objectType: e,
              sort: u,
              userFilter: c,
              creativeFilter: [],
            }),
          );
        },
        { name: i.id + ".makeChartViewSelector" },
      ),
      D = e(
        [
          b,
          r("adsPEObjectTypeSelector"),
          L,
          m,
          r("AdsInsightsSettingsStore").getSelector,
          R,
          y,
          C,
          u,
          c(S),
          r(
            "AdsInsightsCompareAttributionWindowsDataProvider",
          ).toFluxSelector(),
          r("adsPENavStateSelector"),
          c(r("performanceSummarySelectedAdObjects_WithCrepeSupportSelector")),
          o("AdsPEGroupSelector").adsPEGroupSelector,
          o("AdsPEPrioritizedHighlightsSelector")
            .adsPEPrioritizedHighlightsSelector,
          r("AdsPECampaignGroupTablePagingSelectors").getCurrentPageSelector,
        ],
        function (t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y) {
          if (
            !o("AdsApplicationUtils").isAdsReportingPath() &&
            _.tool === "MANAGE_ADS"
          ) {
            var e,
              C,
              b = s.compareAttributionWindowsCollapsedColumnIDs,
              v =
                (e =
                  (C = s.columns.ids) != null
                    ? C
                    : r("AdsInsightsColumnPresetStoreUtil").resolve(s.columns)
                        .ids) == null
                  ? void 0
                  : e.filter(function (e) {
                      return o(
                        "adsMgmtSupportedAttributionWindowsUtil",
                      ).getColumnSupportsAttributionWindowAndValidAttributionWindowsSelected(
                        o("AdsMgmtColumns").getConfigOrNull(e),
                        p,
                      );
                    }),
              R =
                v == null
                  ? void 0
                  : v.filter(function (e) {
                      return !(b && b.has(e));
                    }),
              L = p.filter(function (e) {
                return o(
                  "AdsInsightsAttributionWindows",
                ).SUPPORTED_ATTRIBUTION_WINDOWS.includes(e);
              }),
              E = n,
              k = d;
            if (d === "PACKAGE_AD_CREATION" && r("gkx")("2029")) {
              var I,
                T = f(),
                D = T.selectedAdObjectLevels;
              ((E =
                (I = o("AdsObjectTypeUtils").fromObjectLevel(D[0])) != null
                  ? I
                  : r("AdsObjectTypes").CAMPAIGN_GROUP),
                (k = r("AdsObjectUtils").getNavSectionFromObjectType(E)));
            }
            var x =
                g.groupingDimension != null &&
                Object.keys(g.groupObjectCounts).length > 0,
              $ =
                n === r("AdsObjectTypes").CAMPAIGN_GROUP &&
                y === 0 &&
                h.enabled &&
                !x &&
                o(
                  "AdsMgmt2026H2CPExperimentUtils",
                ).getShouldRenderNeedsAttentionSection(h.isBetaFeatureVisible);
            return r("AdsInsightsViewSpec").create(
              babelHelpers.extends({}, a, {
                columns: s.columns,
                benchmarkDerivedColumnIDs: s.benchmarkDerivedColumnIDs,
                compareAttributionWindowsColumnIDs: r("immutable").Set(R),
                viewHasAttributionSupportingColumn: v ? v.length > 0 : !1,
                breakdowns: i.breakdowns,
                expandedGroupKeys: g.expandedGroupKeys,
                filter: S(t),
                groupIDsByKey: g.groupIDsByKey,
                groupingDimension: g.groupingDimension,
                groupObjectCounts: g.groupObjectCounts,
                groupPageIndex: g.groupPageIndex,
                insights: l,
                navSection: k,
                objectType: E,
                sort: u,
                userFilter: c,
                creativeFilter: [],
                attributionWindows: L,
                prioritizedHighlightIDs: $
                  ? o(
                      "AdsInsightsPrioritizedSegmentsUtils",
                    ).unionMonitorFlaggedIDs(h.ids, h.monitorFlaggedIDs)
                  : void 0,
                prioritizedCollapsedKeys: $ ? h.collapsedKeys : void 0,
              }),
            );
          }
          return r("AdsInsightsViewSpec").create(
            babelHelpers.extends({}, a, {
              benchmarkDerivedColumnIDs: s.benchmarkDerivedColumnIDs,
              columns: s.columns,
              breakdowns: i.breakdowns,
              expandedGroupKeys: g.expandedGroupKeys,
              filter: S(t),
              groupIDsByKey: g.groupIDsByKey,
              groupingDimension: g.groupingDimension,
              groupObjectCounts: g.groupObjectCounts,
              groupPageIndex: g.groupPageIndex,
              insights: l,
              navSection: d,
              objectType: n,
              sort: u,
              userFilter: c,
              creativeFilter: [],
            }),
          );
        },
        { name: i.id + ".makeViewSelector" },
      ),
      x = d(
        D.getStores(),
        function () {
          return I++;
        },
        { name: i.id + ".viewSpecVersionSelector" },
      ),
      $ = d(
        D.getStores(),
        function () {
          return D(_.Table);
        },
        { name: i.id + ".tableViewSpecSelector" },
      ),
      P = d(
        T.getStores(),
        function () {
          return T(_.Chart);
        },
        { name: i.id + ".chartViewSpecSelector" },
      ),
      N = {
        getVersion: x,
        tableViewSpecSelector: $,
        chartViewSpecSelector: P,
        filterSpecSelector: S,
      };
    l.default = N;
  },
  98,
);
