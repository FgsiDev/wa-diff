__d(
  "AdsInsightsSuggestionsStore",
  [
    "AdsAccountStore",
    "AdsAdgroupSelectionClearDataActionFlux",
    "AdsCampaignGroupSelectionClearDataActionFlux",
    "AdsCampaignSelectionClearDataActionFlux",
    "AdsDataAtom",
    "AdsInsightsColumnChangeSource",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsFetchSuggestionsErrorActionFlux",
    "AdsInsightsFetchSuggestionsSuccessActionFlux",
    "AdsInsightsSuggestionsDataDispatcher",
    "AdsInsightsSuggestionsMenuCloseActionFlux",
    "AdsInsightsSuggestionsMenuOpenActionFlux",
    "AdsInsightsSuggestionsStoreHelpers",
    "AdsInsightsSuggestionsStoreUtils",
    "AdsInsightsSuggestionsUtil",
    "AdsInsightsTableChangeColumnsDataActionFlux",
    "AdsInsightsTableColumnAction",
    "AdsInsightsTableSelectColumnSetDataActionFlux",
    "AdsInsightsTableToggleColumnSetEditorDataActionFlux",
    "AdsInsightsTableViewStore",
    "AdsMgmt2025PerformancePresetVariantGatingUtils",
    "AdsMgmt26H1SuggestedColumnsGatingUtils",
    "AdsMgmtCampaignTableColumnSuggestionOrders",
    "AdsMgmtColumnPresetStoreWrapper",
    "AdsMgmtSuggestedColumnsGatingUtils",
    "AdsMgmtValueOptimizationQuickViewExperimentUtils",
    "AdsNavigationChangeNavigationStateDataActionFlux",
    "AdsPEFilterAppliedActionFlux",
    "AdsPEReportProvider",
    "AdsPEReportingChangeFilterActionFlux",
    "AdsPEReportingSelectObjectTypeActionFlux",
    "AdsReportBuilderCompareAttributionWindowUtils",
    "AdsSettingsAdsSettingsUpdateActionFlux",
    "AdsSettingsDataLoaderFields",
    "AdsSettingsStore",
    "FluxReduceStore",
    "ImmutableRecordWithV4Types",
    "adsPEIsFirstPageSelector",
    "adsPEObjectTypeSelector",
    "adsStoreHasAnyStoreInformedOnPayload",
    "getByPath",
    "immutable",
    "isFalsey",
    "isTruthy",
    "nullthrows",
    "partitionArray",
    "setImmediate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsPEReportProvider").toFluxStore(),
      u = o("ImmutableRecordWithV4Types").Record({
        autoEligibleColumns: r("immutable").OrderedSet(),
        columns: r("immutable").OrderedSet(),
        isAutoEnabled: !1,
        isLoadingSuggestedColumns: o(
          "AdsMgmtSuggestedColumnsGatingUtils",
        ).shouldShowZeroClickSuggestedColumns(),
        isSuggestionsApplicable: !0,
        isShown: !1,
        isSuggestionsMenuOpen: !1,
        shouldOpenSuggestionsMenu: !1,
        lastColumnChangeSource: null,
        leftmostSuggestedColumnIndex: null,
        precalculatedOrderedColumns: null,
        useSuggestedColumnsOrder: !1,
      }),
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.updateIsSuggestionsApplicable = function (e) {
              n.getState().set("isSuggestionsApplicable", e);
            }),
            (n.$AdsInsightsSuggestionsStore$p_8 = function (e) {
              var t = n.$AdsInsightsSuggestionsStore$p_4();
              n.$AdsInsightsSuggestionsStore$p_1 =
                n.$AdsInsightsSuggestionsStore$p_1.set(t, e);
            }),
            (n.$AdsInsightsSuggestionsStore$p_9 = function (e) {
              var t = n.$AdsInsightsSuggestionsStore$p_4();
              n.$AdsInsightsSuggestionsStore$p_2 =
                n.$AdsInsightsSuggestionsStore$p_2.set(t, e);
            }),
            (n.$AdsInsightsSuggestionsStore$p_11 = function (e) {
              var t = n.$AdsInsightsSuggestionsStore$p_4();
              n.$AdsInsightsSuggestionsStore$p_1 =
                n.$AdsInsightsSuggestionsStore$p_1.set("filtered_" + t, e);
            }),
            (n.$AdsInsightsSuggestionsStore$p_12 = function () {
              var e = n.$AdsInsightsSuggestionsStore$p_4(),
                t = n.$AdsInsightsSuggestionsStore$p_5(e);
              return (
                t &&
                t.map(function (e) {
                  return e.id;
                })
              );
            }),
            (n.$AdsInsightsSuggestionsStore$p_13 = function () {
              var e = n.$AdsInsightsSuggestionsStore$p_4(),
                t = "filtered_" + e,
                o = n.$AdsInsightsSuggestionsStore$p_5(t),
                a = r("immutable").OrderedSet();
              return (
                o &&
                  (a = o.map(function (e) {
                    return e.id;
                  })),
                a
              );
            }),
            (n.$AdsInsightsSuggestionsStore$p_14 = function () {
              var e = n.$AdsInsightsSuggestionsStore$p_4(),
                t = n.$AdsInsightsSuggestionsStore$p_6(e);
              return t && t.map(o("AdsInsightsSuggestionsUtil").getBreakdown);
            }),
            (n.getCachedColumns = function () {
              return !n.getState().get("isSuggestionsApplicable") &&
                !o(
                  "AdsMgmt26H1SuggestedColumnsGatingUtils",
                ).getShouldSuggestMRSColumnsWithoutExposure()
                ? r("immutable").OrderedSet()
                : n.getSuggestions();
            }),
            (n.getCachedBreakdowns = function () {
              return (
                n.$AdsInsightsSuggestionsStore$p_14() ||
                r("immutable").OrderedSet()
              );
            }),
            (n.$AdsInsightsSuggestionsStore$p_1 = r("immutable").Map()),
            (n.$AdsInsightsSuggestionsStore$p_2 = r("immutable").Map()),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return new u();
          }),
          (n.isSuggestionsMenuOpen = function () {
            return this.getState().get("isSuggestionsMenuOpen");
          }),
          (n.isAutoEnabled = function () {
            return this.getState().get("isAutoEnabled");
          }),
          (n.isSuggestionsApplicable = function () {
            return this.getState().get("isSuggestionsApplicable");
          }),
          (n.isLoadingSuggestedColumns = function () {
            return this.getState().get("isLoadingSuggestedColumns");
          }),
          (n.shouldOpenSuggestionsMenu = function () {
            return this.getState().get("shouldOpenSuggestionsMenu");
          }),
          (n.getLastColumnChangeSource = function () {
            return this.getState().get("lastColumnChangeSource");
          }),
          (n.getLeftmostSuggestedColumnIndex = function () {
            return this.getState().get("leftmostSuggestedColumnIndex");
          }),
          (n.$AdsInsightsSuggestionsStore$p_3 = function (t) {
            return t ? JSON.stringify([t.objectType, t.filter]) : "";
          }),
          (n.$AdsInsightsSuggestionsStore$p_4 = function () {
            var e = r("AdsInsightsTableViewStore").getOrNull();
            return this.$AdsInsightsSuggestionsStore$p_3(e);
          }),
          (n.$AdsInsightsSuggestionsStore$p_5 = function (t) {
            return this.$AdsInsightsSuggestionsStore$p_1.get(t);
          }),
          (n.$AdsInsightsSuggestionsStore$p_6 = function (t) {
            return this.$AdsInsightsSuggestionsStore$p_2.get(t);
          }),
          (n.$AdsInsightsSuggestionsStore$p_7 = function (t) {
            var e = r("partitionArray")(
                t.toArray(),
                o("AdsInsightsSuggestionsUtil").isBreakdownColumn,
              ),
              n = e[0],
              a = e[1];
            (this.$AdsInsightsSuggestionsStore$p_8(
              r("immutable").OrderedSet(a),
            ),
              this.$AdsInsightsSuggestionsStore$p_9(
                r("immutable").OrderedSet(n),
              ));
          }),
          (n.$AdsInsightsSuggestionsStore$p_10 = function (t) {
            var e = t.filter(function (e) {
              return !o("AdsInsightsSuggestionsUtil").isBreakdownColumn(e);
            });
            this.$AdsInsightsSuggestionsStore$p_11(e);
          }),
          (n.getCachedColumnsWithExplanations = function () {
            if (
              !this.getState().get("isSuggestionsApplicable") &&
              !o(
                "AdsMgmt26H1SuggestedColumnsGatingUtils",
              ).getShouldSuggestMRSColumnsWithoutExposure()
            )
              return r("immutable").OrderedSet();
            var e = this.$AdsInsightsSuggestionsStore$p_4();
            return (
              this.$AdsInsightsSuggestionsStore$p_5(e) ||
              r("immutable").OrderedSet()
            );
          }),
          (n.getFilteredColumnsWithExplanations = function () {
            if (
              !this.getState().get("isSuggestionsApplicable") &&
              !o(
                "AdsMgmt26H1SuggestedColumnsGatingUtils",
              ).getShouldSuggestMRSColumnsWithoutExposure()
            )
              return r("immutable").OrderedSet();
            var e = this.$AdsInsightsSuggestionsStore$p_4(),
              t = "filtered_" + e;
            return (
              this.$AdsInsightsSuggestionsStore$p_5(t) ||
              r("immutable").OrderedSet()
            );
          }),
          (n.getColumns = function () {
            return this.$AdsInsightsSuggestionsStore$p_15(
              this.$AdsInsightsSuggestionsStore$p_12,
              this.$AdsInsightsSuggestionsStore$p_8,
              this.getCachedColumns,
            );
          }),
          (n.getBreakdowns = function () {
            return this.$AdsInsightsSuggestionsStore$p_15(
              this.$AdsInsightsSuggestionsStore$p_14,
              this.$AdsInsightsSuggestionsStore$p_9,
              this.getCachedBreakdowns,
            );
          }),
          (n.$AdsInsightsSuggestionsStore$p_15 = function (t, n, a) {
            var e = t(),
              i = r("AdsAccountStore").getSelectedAccount(),
              l = i.getValue();
            if (!e)
              if (i.isDone() && l != null) {
                var s = { accountID: l.account_id, currencyCode: l.currency },
                  u = r("AdsInsightsTableViewStore").get();
                (o("AdsInsightsSuggestionsDataDispatcher").fetch(
                  u,
                  o("AdsInsightsSuggestionsUtil").getSuggestionTypeByLevel(
                    u.objectType,
                  ),
                  s,
                  ["AdsInsightsSuggestionsStore"],
                ),
                  n(r("immutable").OrderedSet()));
              } else return r("immutable").OrderedSet();
            return a();
          }),
          (n.updateDerivedState = function (t) {
            var e = t,
              n = r("AdsAccountStore").getSelectedAccount(),
              a = n.getValue(),
              i = r("AdsInsightsTableViewStore").getOrNull(),
              l = !1;
            if (n.isDone() && a != null && i) {
              var s = a.account_id;
              if (
                ((l = o(
                  "AdsInsightsSuggestionsUtil",
                ).isColumnSuggestionsSupportedInLevel(i.objectType)),
                (e = e.set("isShown", l)),
                !l)
              )
                return e;
              var u = "column_suggestion_status",
                c = r("AdsSettingsDataLoaderFields").reporting_fields,
                d = r("AdsSettingsStore").getByFields(s, c),
                m = o(
                  "AdsInsightsSuggestionsStoreHelpers",
                ).determineAutoEnabledStatus(d, u);
              e = e.set("isAutoEnabled", m);
            }
            return e;
          }),
          (n.removeAllColumns = function () {
            var e = r("AdsInsightsTableViewStore").getOrNull();
            if (e) {
              var t = r("AdsInsightsColumnPresetStoreUtil").resolve(e.columns),
                n = t.attributionWindows,
                a = t.ids,
                i = r("immutable").OrderedSet(a),
                l = this.$AdsInsightsSuggestionsStore$p_12(),
                s = r("adsPEObjectTypeSelector")(),
                u = o("AdsInsightsSuggestionsStoreUtils").getCompleteColumnList(
                  l || r("immutable").OrderedSet(),
                  s,
                ),
                c = this.subtractPresetColumns(
                  u || r("immutable").OrderedSet(),
                  e.columns,
                ),
                d = i.subtract(c);
              r("setImmediate")(function () {
                o("AdsInsightsTableColumnAction").changeColumns(
                  d.toArray(),
                  n,
                  o("AdsInsightsColumnChangeSource").AUTOSUGGEST,
                  !1,
                );
              });
            }
          }),
          (n.$AdsInsightsSuggestionsStore$p_16 = function (t, n, r) {
            var e = t.union(n),
              o = e.sort(function (e, t) {
                var n = r.indexOf(e),
                  o = r.indexOf(t);
                return n === -1 && o === -1
                  ? 0
                  : n === -1
                    ? 1
                    : o === -1
                      ? -1
                      : n - o;
              }),
              a = o.toIndexedSeq().findIndex(function (e) {
                return n.includes(e);
              });
            return { orderedColumnSet: o, leftmostIndex: a !== -1 ? a : null };
          }),
          (n.updateSuggestionsIsApplicable = function (t) {
            var e = r("AdsInsightsTableViewStore").getOrNull();
            if (!e) return t;
            var n = r("adsPEIsFirstPageSelector")(),
              a = s.getState().selectedID;
            if (!n && r("isFalsey")(a)) return t;
            var i = e.columns.preset;
            if (r("isFalsey")(i)) {
              var l,
                u = (l = e.columns.ids) != null ? l : [],
                c = r("nullthrows")(
                  r("AdsAccountStore").getSelectedAccountID(),
                ),
                d = o(
                  "AdsMgmtSuggestedColumnsGatingUtils",
                ).shouldShowZeroClickSuggestedColumns()
                  ? this.getFilteredSuggestions()
                  : this.getSuggestions();
              u = u.filter(function (e) {
                return !d.includes(e);
              });
              var m = r("nullthrows")(e.columns.attributionWindows),
                p = o(
                  "AdsReportBuilderCompareAttributionWindowUtils",
                ).getIsCompareAttributionFeatureOn(e.attributionWindows);
              i = r("AdsMgmtColumnPresetStoreWrapper").findByContent(
                c,
                r("nullthrows")(u),
                o(
                  "AdsReportBuilderCompareAttributionWindowUtils",
                ).getAttributionWindowsWithCAW(p, e.attributionWindows, m),
                p,
              );
            }
            var _ = t;
            return (
              (_ = _.set(
                "isSuggestionsApplicable",
                r("isTruthy")(i) &&
                  o(
                    "AdsInsightsSuggestionsUtil",
                  ).isColumnSuggestionsSupportedInPreset(i),
              )),
              _
            );
          }),
          (n.findSupportedPresetFromColumns = function (t) {
            var e = this.getSuggestions();
            return o(
              "AdsInsightsSuggestionsStoreHelpers",
            ).findSupportedPresetFromColumns(t, e);
          }),
          (n.getSuggestions = function () {
            return o(
              "AdsMgmt26H1SuggestedColumnsGatingUtils",
            ).getShouldSuggestMRSColumnsWithoutExposure()
              ? this.$AdsInsightsSuggestionsStore$p_12() ||
                  r("immutable").OrderedSet()
              : o(
                    "AdsMgmtSuggestedColumnsGatingUtils",
                  ).shouldShowSuggestedColumnInSidePanel() ||
                  o(
                    "AdsMgmtSuggestedColumnsGatingUtils",
                  ).getIsAccountInPrecomputeSuggestedColumns()
                ? o("AdsInsightsSuggestionsStoreUtils").getCompleteColumnList(
                    this.$AdsInsightsSuggestionsStore$p_12() ||
                      r("immutable").OrderedSet(),
                    r("adsPEObjectTypeSelector")(),
                  )
                : this.$AdsInsightsSuggestionsStore$p_12() ||
                  r("immutable").OrderedSet();
          }),
          (n.getFilteredSuggestions = function () {
            return (
              this.$AdsInsightsSuggestionsStore$p_13() ||
              r("immutable").OrderedSet()
            );
          }),
          (n.subtractPresetColumns = function (t, n) {
            var e = this.getSuggestions();
            return o(
              "AdsInsightsSuggestionsStoreHelpers",
            ).subtractPresetColumns(t, n, e);
          }),
          (n.updateAutoColumnState = function (t, n) {
            var e = this;
            n === void 0 && (n = !1);
            var a = r("AdsInsightsTableViewStore").getOrNull();
            if (!a) return t;
            var i = t.get("autoEligibleColumns"),
              l = this.$AdsInsightsSuggestionsStore$p_12(),
              s = r("adsPEObjectTypeSelector")(),
              u = o("AdsInsightsSuggestionsStoreUtils").getCompleteColumnList(
                l || r("immutable").OrderedSet(),
                s,
              ),
              c = this.subtractPresetColumns(
                u || r("immutable").OrderedSet(),
                a.columns,
              ),
              d = r("AdsInsightsColumnPresetStoreUtil").resolve(a.columns),
              m = d.attributionWindows,
              p = d.ids,
              _ = r("immutable").OrderedSet(p),
              f = c.subtract(_.subtract(i)),
              g = t.set("autoEligibleColumns", f),
              h = g.get("isAutoEnabled"),
              y = g.get("isSuggestionsApplicable"),
              C = _;
            if (t.get("useSuggestedColumnsOrder") === !0 && f.size > 0) {
              var b = t.get("precalculatedOrderedColumns");
              if (b != null) C = b;
              else {
                var v = o(
                    "AdsMgmtCampaignTableColumnSuggestionOrders",
                  ).getPerformancePresetVariance(),
                  S = this.$AdsInsightsSuggestionsStore$p_16(_, f, v),
                  R = S.leftmostIndex,
                  L = S.orderedColumnSet;
                ((C = L), (g = g.set("leftmostSuggestedColumnIndex", R)));
              }
            } else
              o(
                "AdsMgmtValueOptimizationQuickViewExperimentUtils",
              ).getIsAccountInValueOptimizationSuggestedColumns()
                ? (C = o(
                    "AdsInsightsSuggestionsStoreHelpers",
                  ).applyColumnOrdering(_, f))
                : (C = C.subtract(i).union(f));
            return (
              !C.equals(_) &&
                y &&
                h &&
                r("setImmediate")(function () {
                  (n &&
                    e.getState().get("lastColumnChangeSource") ===
                      o("AdsInsightsColumnChangeSource").QUICK_VIEW) ||
                    o("AdsInsightsTableColumnAction").changeColumns(
                      C.toArray(),
                      m,
                      o("AdsInsightsColumnChangeSource").AUTOSUGGEST,
                      !1,
                    );
                }),
              g
            );
          }),
          (n.$AdsInsightsSuggestionsStore$p_17 = function (t, n) {
            var e = t,
              a = o(
                "AdsInsightsSuggestionsStoreHelpers",
              ).buildColumnSetFromFetchSuccess(n);
            if (
              (this.$AdsInsightsSuggestionsStore$p_7(a),
              o(
                "AdsMgmtSuggestedColumnsGatingUtils",
              ).shouldShowZeroClickSuggestedColumns())
            ) {
              var i = r("AdsInsightsTableViewStore").getOrNull();
              if (i) {
                var l,
                  s =
                    (l = i.columns.preset) != null
                      ? l
                      : this.findSupportedPresetFromColumns(i.columns),
                  u = r("AdsInsightsColumnPresetStoreUtil").resolve({
                    ids: [],
                    attributionWindows: [],
                    preset: s != null ? s : void 0,
                  }),
                  c = u.ids,
                  d = a.filter(function (e) {
                    return !c.includes(e.id);
                  });
                if (
                  (this.$AdsInsightsSuggestionsStore$p_10(d),
                  d.size > 0 &&
                    o(
                      "AdsMgmtValueOptimizationQuickViewExperimentUtils",
                    ).getIsAccountInValueOptimizationSuggestedColumns())
                ) {
                  var m = r("AdsAccountStore").getSelectedAccountID();
                  if (m != null) {
                    var p = r("AdsSettingsStore").getByFields(m, [
                      "value_suggested_column_status",
                    ]);
                    p.value_suggested_column_status === "OPTED_IN"
                      ? (e = e.set("shouldOpenSuggestionsMenu", !0))
                      : (e = e.set("shouldOpenSuggestionsMenu", !1));
                  }
                }
              }
            }
            return (
              (e = this.updateSuggestionsIsApplicable(e)),
              a.size > 0 && (e = this.$AdsInsightsSuggestionsStore$p_18(e, a)),
              (e = this.updateAutoColumnState(e, !0)),
              o(
                "AdsMgmtSuggestedColumnsGatingUtils",
              ).shouldShowZeroClickSuggestedColumns() &&
                (e = e.set("isLoadingSuggestedColumns", !1)),
              e
            );
          }),
          (n.$AdsInsightsSuggestionsStore$p_19 = function (t) {
            var e = this.$AdsInsightsSuggestionsStore$p_12();
            return !e || e.size === 0 || !t.get("isSuggestionsApplicable")
              ? t
              : this.updateAutoColumnState(t, !0);
          }),
          (n.$AdsInsightsSuggestionsStore$p_20 = function (t, n) {
            var e = r("getByPath")(n, ["columnSetID"]),
              a =
                r("isTruthy")(e) &&
                o(
                  "AdsInsightsSuggestionsUtil",
                ).isColumnSuggestionsSupportedInPreset(e),
              i = t
                .set("autoEligibleColumns", r("immutable").OrderedSet())
                .set("isSuggestionsApplicable", a);
            if (
              (a && (i = this.updateAutoColumnState(i)),
              o(
                "AdsMgmtSuggestedColumnsGatingUtils",
              ).shouldShowZeroClickSuggestedColumns())
            ) {
              var l = this.$AdsInsightsSuggestionsStore$p_5(
                this.$AdsInsightsSuggestionsStore$p_4(),
              );
              if (l && l.size > 0) {
                var s = r("AdsInsightsTableViewStore").getOrNull();
                if (s) {
                  var u,
                    c =
                      (u = s.columns.preset) != null
                        ? u
                        : this.findSupportedPresetFromColumns(s.columns),
                    d = r("AdsInsightsColumnPresetStoreUtil").resolve({
                      ids: [],
                      attributionWindows: [],
                      preset: c != null ? c : void 0,
                    }),
                    m = d.ids,
                    p = l.filter(function (e) {
                      return !m.includes(e.id);
                    });
                  this.$AdsInsightsSuggestionsStore$p_10(p);
                }
              }
            }
            return i;
          }),
          (n.$AdsInsightsSuggestionsStore$p_18 = function (t, n) {
            var e = o(
                "AdsMgmtSuggestedColumnsGatingUtils",
              ).shouldShowZeroClickSuggestedColumns()
                ? this.getFilteredSuggestions()
                : this.getSuggestions(),
              a = r("AdsMgmtColumnPresetStoreWrapper").getBuiltin(
                "PERFORMANCE",
              ),
              i = a.specializeColumnIDs(),
              l = r("immutable").OrderedSet(i),
              s = o(
                "AdsMgmtCampaignTableColumnSuggestionOrders",
              ).getPerformancePresetVariance(),
              u = o("AdsInsightsTableColumnAction").isArrayInOrder(i, s);
            if (
              (!u &&
                o(
                  "AdsMgmt2025PerformancePresetVariantGatingUtils",
                ).getPerformancePresetVariantForAccountWithoutExposure() ===
                  o("AdsMgmt2025PerformancePresetVariantGatingUtils")
                    .AdsInsightsPerformancePresetVariant.REORDER &&
                o("AdsInsightsTableColumnAction").isArrayInOrder(
                  i,
                  o("AdsMgmtCampaignTableColumnSuggestionOrders")
                    .DEFAULT_PERFORMANCE_PRESET_COLUMNS_ORDER,
                ) &&
                ((s = o(
                  "AdsMgmtCampaignTableColumnSuggestionOrders",
                ).DEFAULT_PERFORMANCE_PRESET_COLUMNS_ORDER),
                (u = !0)),
              !u)
            )
              return t.set("useSuggestedColumnsOrder", !1);
            var c = t.set("useSuggestedColumnsOrder", !0),
              d = this.$AdsInsightsSuggestionsStore$p_16(l, e, s),
              m = d.leftmostIndex,
              p = d.orderedColumnSet;
            return (
              (c = c.set("precalculatedOrderedColumns", p)),
              (c = c.set("leftmostSuggestedColumnIndex", m)),
              c
            );
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsAdgroupSelectionClearDataActionFlux").actionType,
              o("AdsCampaignGroupSelectionClearDataActionFlux").actionType,
              o("AdsCampaignSelectionClearDataActionFlux").actionType,
              o("AdsInsightsSuggestionsMenuCloseActionFlux").actionType,
              o("AdsInsightsSuggestionsMenuOpenActionFlux").actionType,
              o("AdsInsightsFetchSuggestionsSuccessActionFlux").actionType,
              o("AdsInsightsFetchSuggestionsErrorActionFlux").actionType,
              o("AdsInsightsTableChangeColumnsDataActionFlux").actionType,
              o("AdsInsightsTableSelectColumnSetDataActionFlux").actionType,
              o("AdsInsightsTableToggleColumnSetEditorDataActionFlux")
                .actionType,
              o("AdsNavigationChangeNavigationStateDataActionFlux").actionType,
              o("AdsPEReportingChangeFilterActionFlux").actionType,
              o("AdsPEReportingSelectObjectTypeActionFlux").actionType,
              o("AdsSettingsAdsSettingsUpdateActionFlux").actionType,
              o("AdsPEFilterAppliedActionFlux").actionType,
            ];
          }),
          (n.__getDependencyStores = function () {
            return [
              r("AdsAccountStore"),
              r("AdsInsightsTableViewStore"),
            ].concat(r("adsPEIsFirstPageSelector").getStores(), [
              s,
              r("AdsSettingsStore"),
            ]);
          }),
          (n.reduce = function (t, n) {
            var e = t,
              a = n.action;
            switch (
              (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
              r("adsStoreHasAnyStoreInformedOnPayload")(
                this.getDependencyStores(),
              ) && (e = this.updateDerivedState(e)),
              a.type)
            ) {
              case o("AdsPEFilterAppliedActionFlux").actionType:
                if (
                  e.get("lastColumnChangeSource") ===
                    o("AdsInsightsColumnChangeSource").QUICK_VIEW &&
                  (o(
                    "AdsMgmtValueOptimizationQuickViewExperimentUtils",
                  ).getIsAccountInValueOptimizationSuggestedColumns() ||
                    o(
                      "AdsMgmtSuggestedColumnsGatingUtils",
                    ).getIsAccountInSuggestedColumnsExpansionWithoutExposure())
                ) {
                  var i = r("AdsInsightsTableViewStore").getOrNull();
                  if (!i) break;
                  var l = r("AdsInsightsColumnPresetStoreUtil").resolve(
                      i.columns,
                    ),
                    s = l.ids,
                    u = this.$AdsInsightsSuggestionsStore$p_5(
                      this.$AdsInsightsSuggestionsStore$p_4(),
                    );
                  if (u && u.size > 0) {
                    var c = u.filter(function (e) {
                      return !s.includes(e.id);
                    });
                    (this.$AdsInsightsSuggestionsStore$p_10(c),
                      (e = this.updateSuggestionsIsApplicable(e)),
                      (e = this.updateAutoColumnState(e)));
                  }
                }
                break;
              case o("AdsNavigationChangeNavigationStateDataActionFlux")
                .actionType:
                e = this.$AdsInsightsSuggestionsStore$p_19(e);
                break;
              case o("AdsPEReportingChangeFilterActionFlux").actionType:
              case o("AdsPEReportingSelectObjectTypeActionFlux").actionType:
              case o("AdsCampaignGroupSelectionClearDataActionFlux").actionType:
              case o("AdsCampaignSelectionClearDataActionFlux").actionType:
              case o("AdsAdgroupSelectionClearDataActionFlux").actionType:
                e = this.updateAutoColumnState(e);
                break;
              case o("AdsInsightsFetchSuggestionsSuccessActionFlux").actionType:
                e = this.$AdsInsightsSuggestionsStore$p_17(e, a);
                break;
              case o("AdsInsightsFetchSuggestionsErrorActionFlux").actionType:
                o(
                  "AdsMgmtSuggestedColumnsGatingUtils",
                ).shouldShowZeroClickSuggestedColumns() &&
                  (e = e.set("isLoadingSuggestedColumns", !1));
                break;
              case o("AdsInsightsSuggestionsMenuCloseActionFlux").actionType:
              case o("AdsInsightsTableToggleColumnSetEditorDataActionFlux")
                .actionType:
                e = e.set("isSuggestionsMenuOpen", !1);
                break;
              case o("AdsInsightsSuggestionsMenuOpenActionFlux").actionType:
                e = e.set("isSuggestionsMenuOpen", !0);
                break;
              case o("AdsInsightsTableSelectColumnSetDataActionFlux")
                .actionType:
                e = this.$AdsInsightsSuggestionsStore$p_20(e, a);
                break;
              case o("AdsInsightsTableChangeColumnsDataActionFlux")
                .actionType: {
                var d = r("getByPath")(a, ["data", "source"]);
                ((e = e.set("lastColumnChangeSource", d)),
                  d === o("AdsInsightsColumnChangeSource").USER &&
                    (e = e
                      .set("autoEligibleColumns", r("immutable").OrderedSet())
                      .set("isSuggestionsApplicable", !1)));
                break;
              }
              case o("AdsSettingsAdsSettingsUpdateActionFlux").actionType: {
                var m = r("getByPath")(a, [
                  "data",
                  "settings",
                  "column_suggestion_status",
                ]);
                switch (m) {
                  case "on":
                    ((e = e.set("isAutoEnabled", !0)),
                      (e = this.updateAutoColumnState(e)));
                    break;
                  case "off":
                    r("getByPath")(a, [
                      "data",
                      "settings",
                      "remove_all_suggested_columns",
                    ])
                      ? ((e = e
                          .set("isAutoEnabled", !1)
                          .set(
                            "autoEligibleColumns",
                            r("immutable").OrderedSet(),
                          )),
                        this.removeAllColumns())
                      : (e = e.set("isAutoEnabled", !1));
                    break;
                  default:
                    break;
                }
                break;
              }
            }
            return e;
          }),
          t
        );
      })(r("FluxReduceStore"));
    c.__moduleID = i.id;
    var d = new c(e || (e = r("AdsDataAtom")));
    l.default = d;
  },
  98,
);
