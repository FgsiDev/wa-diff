__d(
  "AdsSettingsStore",
  [
    "AdsAccountSettingsSetTextLiquidityDefaultOptInActionFlux",
    "AdsAccountSettingsShouldLogoutOf3PSourcingActionFlux",
    "AdsDataAtom",
    "AdsInsightsCreateColumnPresetActionFlux",
    "AdsInsightsCreateColumnPresetSuccessActionFlux",
    "AdsInsightsDeleteColumnPresetSuccessActionFlux",
    "AdsLoadState_LEGACY",
    "AdsManagerCTConditionalFormattingSettingsActionsEnum",
    "AdsManagerCTConditionalFormattingSettingsPanelActionFlux",
    "AdsMediaPickerToggleAutoCropOptimizationFlowActionFlux",
    "AdsMediaPickerToggleEndCardOptimizationFlowActionFlux",
    "AdsMediaPickerToggleVideoAdjustmentsFlowActionFlux",
    "AdsMgmt2025H1ExperimentUtils",
    "AdsMgmtDefaultQuickViewsCreateActionFlux",
    "AdsMgmtQuickViewsUpdateHasUsedQuickViewsPanelActionFlux",
    "AdsMgmtQuickViewsUpdateRecentlyUsedActionFlux",
    "AdsMgmtSeeFooterRowToastActionFlux",
    "AdsMgmtSetFooterRowPreferenceActionFlux",
    "AdsSettingsAdsSettingsLoadErrorActionFlux",
    "AdsSettingsAdsSettingsLoadedActionFlux",
    "AdsSettingsAdsSettingsUpdateActionFlux",
    "AdsSettingsDataDispatcher",
    "AdsSettingsSetAPlusCFeatureDefaultOnConfigActionFlux",
    "AdsSettingsSetCampaignOverviewColumnsActionFlux",
    "AdsSettingsSetShouldDefaultImageLPPAdsToSquareActionFlux",
    "AdsTextGenerationHeadlineSetStickyOptOutActionFlux",
    "AdsTextGenerationSetPersonaStickyStatusActionFlux",
    "AdsTextGenerationSetStickyOptOutActionFlux",
    "AdsUEditorAdgroupApplyCFPChangeSetActionFlux",
    "AdsUEditorAdgroupApplyOptimizationChangeSetsActionFlux",
    "FluxReduceStore",
    "ImmutableRecordWithV4Types",
    "PerformanceSummaryConfirmChartSettingsActionFlux",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        saveAsDefaultId: null,
        accountIdToSettingsMap: r("immutable").Map(),
      },
      u = o("ImmutableRecordWithV4Types").Record(s),
      c = 8,
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.$AdsSettingsStore$p_1 = {}),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getInitialState = function () {
            return u();
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsSettingsAdsSettingsLoadedActionFlux").actionType,
              o("AdsSettingsAdsSettingsUpdateActionFlux").actionType,
              o("AdsSettingsAdsSettingsLoadErrorActionFlux").actionType,
              o("AdsInsightsCreateColumnPresetActionFlux").actionType,
              o("AdsInsightsCreateColumnPresetSuccessActionFlux").actionType,
              o("AdsInsightsDeleteColumnPresetSuccessActionFlux").actionType,
              o("AdsSettingsSetShouldDefaultImageLPPAdsToSquareActionFlux")
                .actionType,
              o("AdsMediaPickerToggleAutoCropOptimizationFlowActionFlux")
                .actionType,
              o("AdsMediaPickerToggleVideoAdjustmentsFlowActionFlux")
                .actionType,
              o("AdsAccountSettingsSetTextLiquidityDefaultOptInActionFlux")
                .actionType,
              o("AdsUEditorAdgroupApplyOptimizationChangeSetsActionFlux")
                .actionType,
              r("AdsUEditorAdgroupApplyCFPChangeSetActionFlux").actionType,
              o("AdsMediaPickerToggleEndCardOptimizationFlowActionFlux")
                .actionType,
              r("AdsSettingsSetCampaignOverviewColumnsActionFlux").actionType,
              o("AdsAccountSettingsShouldLogoutOf3PSourcingActionFlux")
                .actionType,
              r("AdsTextGenerationSetStickyOptOutActionFlux").actionType,
              r("AdsTextGenerationHeadlineSetStickyOptOutActionFlux")
                .actionType,
              r("AdsSettingsSetAPlusCFeatureDefaultOnConfigActionFlux")
                .actionType,
              r("AdsMgmtDefaultQuickViewsCreateActionFlux").actionType,
              r("AdsManagerCTConditionalFormattingSettingsPanelActionFlux")
                .actionType,
              r("AdsMgmtSetFooterRowPreferenceActionFlux").actionType,
              r("AdsMgmtSeeFooterRowToastActionFlux").actionType,
              r("AdsTextGenerationSetPersonaStickyStatusActionFlux").actionType,
              r("AdsMgmtQuickViewsUpdateRecentlyUsedActionFlux").actionType,
              r("AdsMgmtQuickViewsUpdateHasUsedQuickViewsPanelActionFlux")
                .actionType,
              r("PerformanceSummaryConfirmChartSettingsActionFlux").actionType,
            ];
          }),
          (n.reduce = function (t, n) {
            var e,
              a,
              i,
              l,
              s,
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
              C,
              b,
              v,
              S = n.action;
            switch (S.type) {
              case o("AdsSettingsAdsSettingsLoadedActionFlux").actionType:
                return this.$AdsSettingsStore$p_2(
                  t,
                  S.data.accountID,
                  S.data.settings,
                );
              case o("AdsSettingsAdsSettingsUpdateActionFlux").actionType:
                return this.$AdsSettingsStore$p_3(
                  t,
                  S.data.accountID,
                  S.data.settings,
                );
              case o("AdsSettingsAdsSettingsLoadErrorActionFlux").actionType:
                return this.$AdsSettingsStore$p_4(t, S);
              case o("AdsInsightsCreateColumnPresetActionFlux").actionType:
                return this.$AdsSettingsStore$p_5(t, S);
              case o("AdsInsightsCreateColumnPresetSuccessActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_6(t, S);
              case o("AdsInsightsDeleteColumnPresetSuccessActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_7(t, S);
              case o("AdsSettingsSetShouldDefaultImageLPPAdsToSquareActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_3(
                  t,
                  S.accountID,
                  ((e = {}),
                  (e.should_default_image_lpp_ads_to_square =
                    S.shouldDefaultSingleLPPAdsToSquare),
                  e),
                );
              case o("AdsMediaPickerToggleAutoCropOptimizationFlowActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_3(
                  t,
                  S.accountID,
                  ((a = {}),
                  (a.should_default_image_auto_crop_optimization =
                    S.isAutoCropOptimizationEnabled),
                  a),
                );
              case o("AdsMediaPickerToggleEndCardOptimizationFlowActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_3(
                  t,
                  S.accountID,
                  ((i = {}),
                  (i.should_default_instagram_profile_card_optimization =
                    S.isEndCardOptimizationEnabled),
                  i),
                );
              case o("AdsUEditorAdgroupApplyOptimizationChangeSetsActionFlux")
                .actionType:
                if (
                  S.cfpGlobalChangeSets != null &&
                  ((l = S.cfpGlobalChangeSets.image_enhancement) == null
                    ? void 0
                    : l.enroll_status) != null
                ) {
                  var R, L;
                  return this.$AdsSettingsStore$p_3(
                    t,
                    S.accountID,
                    ((L = {}),
                    (L.should_default_image_auto_crop_optimization =
                      ((R = S.cfpGlobalChangeSets.image_enhancement) == null
                        ? void 0
                        : R.enroll_status) === "OPT_IN"),
                    L),
                  );
                }
                return t;
              case r("AdsUEditorAdgroupApplyCFPChangeSetActionFlux").actionType:
                if (
                  ((s = S.globalChangeSet.image_enhancement) == null
                    ? void 0
                    : s.enroll_status) != null
                ) {
                  var E, k;
                  return this.$AdsSettingsStore$p_3(
                    t,
                    S.accountID,
                    ((k = {}),
                    (k.should_default_image_auto_crop_optimization =
                      ((E = S.globalChangeSet.image_enhancement) == null
                        ? void 0
                        : E.enroll_status) === "OPT_IN"),
                    k),
                  );
                }
                return t;
              case o("AdsMediaPickerToggleVideoAdjustmentsFlowActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_3(
                  t,
                  S.accountID,
                  ((u = {}),
                  (u.acf_should_opt_out_video_adjustments =
                    S.isVideoAdjustmentsDisabled),
                  u),
                );
              case o("AdsAccountSettingsSetTextLiquidityDefaultOptInActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_3(
                  t,
                  S.accountID,
                  ((c = {}),
                  (c.should_default_text_swapping_optimization = S.isEnabled),
                  c),
                );
              case o("AdsAccountSettingsShouldLogoutOf3PSourcingActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_3(
                  t,
                  S.accountID,
                  ((d = {}),
                  (d.should_logout_of_3p_sourcing = S.shouldLogout),
                  (d.is_3p_auth_setting_set = !0),
                  d),
                );
              case r("AdsSettingsSetCampaignOverviewColumnsActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_8(t, S);
              case r("AdsTextGenerationSetStickyOptOutActionFlux").actionType:
                return (
                  this.$AdsSettingsStore$p_3(
                    t,
                    S.accountID,
                    ((m = {}),
                    (m.text_variations_opt_in_type = S.optInActionType),
                    (m.text_variations_opt_in_out_ts = S.optInOrOutTimestamp),
                    m),
                  ),
                  t
                );
              case r("AdsTextGenerationHeadlineSetStickyOptOutActionFlux")
                .actionType:
                return (
                  this.$AdsSettingsStore$p_3(
                    t,
                    S.accountID,
                    ((p = {}),
                    (p.text_variations_hl_opt_in_type = S.optInActionType),
                    (p.text_variations_hl_opt_in_out_ts =
                      S.optInOrOutTimestamp),
                    p),
                  ),
                  t
                );
              case r("AdsTextGenerationSetPersonaStickyStatusActionFlux")
                .actionType:
                return (
                  this.$AdsSettingsStore$p_3(
                    t,
                    S.accountID,
                    ((_ = {}),
                    (_.text_gen_persona_opt_in_type = S.optInActionType),
                    _),
                  ),
                  t
                );
              case r("AdsSettingsSetAPlusCFeatureDefaultOnConfigActionFlux")
                .actionType: {
                var I,
                  T = { first_time_default_on: S.firstTimeDefaultOn };
                return (
                  this.$AdsSettingsStore$p_3(
                    t,
                    S.accountID,
                    ((I = {}),
                    (I.advantage_plus_creative_feature_default_on_config = T),
                    I),
                  ),
                  t
                );
              }
              case r("AdsMgmtDefaultQuickViewsCreateActionFlux").actionType:
                return this.$AdsSettingsStore$p_9(t, S);
              case r("AdsMgmtQuickViewsUpdateRecentlyUsedActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_10(t, S);
              case r("AdsMgmtQuickViewsUpdateHasUsedQuickViewsPanelActionFlux")
                .actionType:
                return this.$AdsSettingsStore$p_11(t, S);
              case r("AdsManagerCTConditionalFormattingSettingsPanelActionFlux")
                .actionType:
                if (S.accountID == null) return t;
                switch (S.conditionalFormattingSettingsActionType) {
                  case o("AdsManagerCTConditionalFormattingSettingsActionsEnum")
                    .AdsManagerCTConditionalFormattingSettingsActions.SAVE_RULE:
                  case o("AdsManagerCTConditionalFormattingSettingsActionsEnum")
                    .AdsManagerCTConditionalFormattingSettingsActions
                    .DELETE_RULE:
                  case o("AdsManagerCTConditionalFormattingSettingsActionsEnum")
                    .AdsManagerCTConditionalFormattingSettingsActions
                    .REORDER_RULES:
                  case o("AdsManagerCTConditionalFormattingSettingsActionsEnum")
                    .AdsManagerCTConditionalFormattingSettingsActions
                    .TOGGLE_RULE_VISIBILITY: {
                    var D, x;
                    return this.$AdsSettingsStore$p_3(
                      t,
                      S.accountID,
                      ((x = {}),
                      (x.conditional_formatting_rules =
                        (D = S.remainingItemIDs) != null ? D : []),
                      x),
                    );
                  }
                  default:
                    return t;
                }
              case r("AdsMgmtSetFooterRowPreferenceActionFlux").actionType:
                return this.$AdsSettingsStore$p_3(
                  t,
                  S.adAccountID,
                  o(
                    "AdsMgmt2025H1ExperimentUtils",
                  ).getIsUserInOneClickSummaryRowReset()
                    ? ((f = {}),
                      (f.is_ads_manager_footer_row_shown = !0),
                      (f.is_ads_manager_footer_row_preference_set = !1),
                      (f.ads_manager_footer_row_toast_impressions = 0),
                      f)
                    : ((g = {}),
                      (g.is_ads_manager_footer_row_shown = S.isFooterRowShown),
                      (g.is_ads_manager_footer_row_preference_set = !0),
                      g),
                );
              case r("AdsMgmtSeeFooterRowToastActionFlux").actionType:
                if (
                  !o(
                    "AdsMgmt2025H1ExperimentUtils",
                  ).getIsUserInOneClickSummaryRowReset()
                ) {
                  var $;
                  return this.$AdsSettingsStore$p_3(
                    t,
                    S.adAccountID,
                    (($ = {}),
                    ($.ads_manager_footer_row_toast_impressions =
                      S.impressions),
                    $),
                  );
                }
                return t;
              case r("PerformanceSummaryConfirmChartSettingsActionFlux")
                .actionType:
                return S.accountID == null
                  ? t
                  : this.$AdsSettingsStore$p_3(
                      t,
                      S.accountID,
                      ((v = {}),
                      (v.ps_perf_charts_settings_config = {
                        is_view_history_toggle_on:
                          (h = S.isViewHistoryToggleSelected) != null ? h : !0,
                        is_peerset_benchmark_toggle_on:
                          (y = S.isPeersetBenchmarkToggleOn) != null ? y : !0,
                        is_self_historical_benchmark_toggle_on:
                          (C = S.isSelfHistoricalBenchmarkToggleOn) != null
                            ? C
                            : !0,
                        self_historical_benchmark_date_range:
                          (b = S.selfHistoricalBenchmarkDateRange) != null
                            ? b
                            : "six_months",
                      }),
                      v),
                    );
              default:
                return t;
            }
          }),
          (n.$AdsSettingsStore$p_9 = function (t, n) {
            switch (n.createdDefaultQuickViewType) {
              case "active": {
                var e;
                return this.$AdsSettingsStore$p_3(
                  t,
                  n.adAccountID,
                  ((e = {}), (e.active_ads_quick_view_created = !0), e),
                );
              }
              case "had_delivery": {
                var r;
                return this.$AdsSettingsStore$p_3(
                  t,
                  n.adAccountID,
                  ((r = {}), (r.had_delivery_quick_view_created = !0), r),
                );
              }
              case "actions": {
                var o;
                return this.$AdsSettingsStore$p_3(
                  t,
                  n.adAccountID,
                  ((o = {}), (o.actions_quick_view_created = !0), o),
                );
              }
              case "value_optimized": {
                var a;
                return this.$AdsSettingsStore$p_3(
                  t,
                  n.adAccountID,
                  ((a = {}), (a.value_optimized_qv_created = !0), a),
                );
              }
              case "budget_pool": {
                var i;
                return this.$AdsSettingsStore$p_3(
                  t,
                  n.adAccountID,
                  ((i = {}), (i.budget_pool_qv_created = !0), i),
                );
              }
              default:
                return t;
            }
          }),
          (n.$AdsSettingsStore$p_8 = function (t, n) {
            if (n.accountID != null) {
              var e;
              return this.$AdsSettingsStore$p_3(
                t,
                n.accountID,
                ((e = {}),
                (e.campaign_overview_columns = n.AdsCampaignColumns),
                e),
              );
            }
            return t;
          }),
          (n.$AdsSettingsStore$p_5 = function (t, n) {
            return n.columnPreset.shouldSaveAsDefault
              ? t.set("saveAsDefaultId", n.columnPreset.id)
              : t;
          }),
          (n.$AdsSettingsStore$p_6 = function (t, n) {
            if (n.oldID && n.oldID === t.get("saveAsDefaultId")) {
              var e = {};
              return (
                (e.default_builtin_column_preset = void 0),
                (e.default_column_preset = { id: n.newID }),
                t.set("saveAsDefaultId", null),
                this.$AdsSettingsStore$p_3(t, n.accountID, e)
              );
            }
            return t;
          }),
          (n.$AdsSettingsStore$p_7 = function (t, n) {
            if (n.id) {
              var e;
              return (
                t.set("saveAsDefaultId", null),
                this.$AdsSettingsStore$p_3(
                  t,
                  n.accountID,
                  ((e = {}), (e.default_column_preset = void 0), e),
                )
              );
            }
            return t;
          }),
          (n.$AdsSettingsStore$p_4 = function (t, n) {
            var e = n.data.accountID,
              o = n.data.apiFields,
              a = r("immutable").Map();
            return (
              t.accountIdToSettingsMap.has(e) &&
                (a = r("nullthrows")(t.accountIdToSettingsMap.get(e))),
              o.forEach(function (e) {
                a = a.set(e, r("AdsLoadState_LEGACY").ERROR);
              }),
              t.update("accountIdToSettingsMap", function (t) {
                return t.set(e, a);
              })
            );
          }),
          (n.$AdsSettingsStore$p_2 = function (t, n, r) {
            var e = this;
            return (
              Object.keys(r).forEach(function (t) {
                return e.$AdsSettingsStore$p_12(n, t);
              }),
              this.$AdsSettingsStore$p_13(t, n, r)
            );
          }),
          (n.$AdsSettingsStore$p_13 = function (t, n, o) {
            var e = r("immutable").Map();
            return (
              t.accountIdToSettingsMap.has(n) &&
                (e = r("nullthrows")(t.accountIdToSettingsMap.get(n))),
              Object.keys(o).forEach(function (t) {
                return (e = e.set(t, o[t]));
              }),
              t.update("accountIdToSettingsMap", function (t) {
                return t.set(n, e);
              })
            );
          }),
          (n.$AdsSettingsStore$p_14 = function (t, n) {
            var e,
              o =
                (e = this.$AdsSettingsStore$p_1[t]) == null ||
                (e = e[n]) == null
                  ? void 0
                  : e.loadState;
            return o === r("AdsLoadState_LEGACY").LOADING;
          }),
          (n.$AdsSettingsStore$p_15 = function (t, n) {
            var e,
              o = (e = this.$AdsSettingsStore$p_1[t]) != null ? e : {};
            (this.$AdsSettingsStore$p_1[t] == null &&
              (this.$AdsSettingsStore$p_1[t] = o),
              n.forEach(function (e) {
                o[e] = { loadState: r("AdsLoadState_LEGACY").LOADING };
              }));
          }),
          (n.$AdsSettingsStore$p_12 = function (t, n) {
            var e = this.$AdsSettingsStore$p_1[t];
            e != null && delete e[n];
          }),
          (n.$AdsSettingsStore$p_3 = function (t, n, o) {
            return (
              r("AdsSettingsDataDispatcher").updateSettings(n, o),
              this.$AdsSettingsStore$p_13(t, n, o)
            );
          }),
          (n.$AdsSettingsStore$p_16 = function (t, n) {
            var e = this,
              o = this.getState().accountIdToSettingsMap.get(t);
            if (o == null) {
              var a = n.filter(function (n) {
                return !e.$AdsSettingsStore$p_14(t, n);
              });
              return (
                a.length > 0 &&
                  (this.$AdsSettingsStore$p_15(t, a),
                  r("AdsSettingsDataDispatcher").loadSettings(t, n)),
                { loadState: r("AdsLoadState_LEGACY").LOADING }
              );
            } else {
              var i = [],
                l = !1,
                s = !1;
              if (
                (n.forEach(function (n) {
                  var a,
                    u =
                      (a = e.$AdsSettingsStore$p_1[t]) == null ||
                      (a = a[n]) == null
                        ? void 0
                        : a.loadState;
                  !o.has(n) &&
                  (!Object.prototype.hasOwnProperty.call(
                    e.$AdsSettingsStore$p_1,
                    t,
                  ) ||
                    u == null)
                    ? i.push(n)
                    : o.get(n) === r("AdsLoadState_LEGACY").ERROR
                      ? (l = !0)
                      : Object.prototype.hasOwnProperty.call(
                          e.$AdsSettingsStore$p_1,
                          t,
                        ) &&
                        u === r("AdsLoadState_LEGACY").LOADING &&
                        (s = !0);
                }),
                l)
              )
                return { loadState: r("AdsLoadState_LEGACY").ERROR };
              if (i.length)
                return (
                  this.$AdsSettingsStore$p_15(t, i),
                  r("AdsSettingsDataDispatcher").loadSettings(t, i),
                  { loadState: r("AdsLoadState_LEGACY").LOADING }
                );
              if (s) return { loadState: r("AdsLoadState_LEGACY").LOADING };
              var u = {};
              return (
                n.forEach(function (e) {
                  u[e] = o.get(e);
                }),
                u
              );
            }
          }),
          (n.$AdsSettingsStore$p_11 = function (t, n) {
            var e;
            return this.$AdsSettingsStore$p_3(
              t,
              n.adAccountID,
              ((e = {}), (e.has_used_quick_views_panel = !0), e),
            );
          }),
          (n.$AdsSettingsStore$p_10 = function (t, n) {
            var e,
              r,
              o = n.adAccountID,
              a = n.quickViewID,
              i = (e = this.getRecentlyUsedQuickViews(o)) != null ? e : [],
              l = [].concat(i),
              s = l.indexOf(a);
            return (
              s > -1 && l.splice(s, 1),
              n.removeQuickView !== !0 &&
                (l.unshift(a),
                l.length > this.$AdsSettingsStore$p_17() && l.pop()),
              this.$AdsSettingsStore$p_3(
                t,
                n.adAccountID,
                ((r = {}), (r.recently_used_quick_views = l), r),
              )
            );
          }),
          (n.$AdsSettingsStore$p_17 = function () {
            return c;
          }),
          (n.getByFields = function (t, n) {
            return this.$AdsSettingsStore$p_16(t, Array.from(n));
          }),
          (n.getExportSettings = function (t) {
            var e = [
              "ad_object_export_format",
              "export_deleted_items_with_delivery",
              "export_summary_row",
            ];
            return this.$AdsSettingsStore$p_16(t, e);
          }),
          (n.getRecentlyUsedQuickViews = function (t) {
            var e = ["recently_used_quick_views"];
            return this.$AdsSettingsStore$p_16(t, e).recently_used_quick_views;
          }),
          (n.getHasUsedQuickViewsPanel = function (t) {
            var e = ["has_used_quick_views_panel"];
            return this.$AdsSettingsStore$p_16(t, e).has_used_quick_views_panel;
          }),
          (n.getValueOptimizationColumnSuggestionsState = function (t) {
            var e = [
              "value_qv_nux_impressions",
              "value_suggested_column_status",
            ];
            return {
              valueQVNuxImpression: this.$AdsSettingsStore$p_16(t, e)
                .value_qv_nux_impressions,
              valueSuggestedColumnsOptInStatus: this.$AdsSettingsStore$p_16(
                t,
                e,
              ).value_suggested_column_status,
            };
          }),
          t
        );
      })(r("FluxReduceStore"));
    d.__moduleID = i.id;
    var m = new d(e || (e = r("AdsDataAtom")));
    l.default = m;
  },
  98,
);
