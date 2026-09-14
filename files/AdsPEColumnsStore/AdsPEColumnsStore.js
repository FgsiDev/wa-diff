__d(
  "AdsPEColumnsStore",
  [
    "fbt",
    "AdFLEXConfig",
    "AdsAccountStore",
    "AdsAgencyFeeUtils",
    "AdsApplicationUtils",
    "AdsColumnPresetNameByteUtils",
    "AdsCustomPresetLocalStorageUtil",
    "AdsDataAtom",
    "AdsExcelReportRefreshEditReportActionFlux",
    "AdsInsightsAttributionWindows",
    "AdsInsightsChangePageActionFlux",
    "AdsInsightsColumn",
    "AdsInsightsColumnPresetAction",
    "AdsInsightsColumnPresetDataDispatcher",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsColumnPresetUtil",
    "AdsInsightsColumnUtil",
    "AdsInsightsCreateColumnPresetActionFlux",
    "AdsInsightsCreateColumnPresetSuccessActionFlux",
    "AdsInsightsDeleteColumnPresetActionFlux",
    "AdsInsightsFetchColumnPresetSuccessActionFlux",
    "AdsInsightsFieldDescriptor",
    "AdsInsightsSelectReportSpecActionFlux",
    "AdsInsightsTableAttributionComparisonColumnCollapseDataActionFlux",
    "AdsInsightsTableAttributionComparisonColumnExpandDataActionFlux",
    "AdsInsightsTableChangeColumnsDataActionFlux",
    "AdsInsightsTableComparisonColumnCollapseDataActionFlux",
    "AdsInsightsTableComparisonColumnExpandDataActionFlux",
    "AdsInsightsTableSelectColumnSetDataActionFlux",
    "AdsInsightsUpdateColumnPresetActionFlux",
    "AdsInterfacesLogger",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsMgmtAccountUserSettingsLoadedDataActionFlux",
    "AdsMgmtColumn",
    "AdsMgmtColumnPresetStoreWrapper",
    "AdsMgmtFlow11_1CustomColumnSaveGatingUtils",
    "AdsNavigationChangeNavigationStateDataActionFlux",
    "AdsOSQuickViewExperimentUtils",
    "AdsPEColumnsStoreCustomPlaceholderMigrationUtils",
    "AdsPEColumnsStoreUtils",
    "AdsPEFluxStatsSetStatRangeActionFlux",
    "AdsPEManageCampaignsConstants",
    "AdsPERouterHelper",
    "AdsPEStatRangeUIStore",
    "AdsReportBuilderCompareAttributionWindowUtils",
    "AdsReportBuilderCustomMetricKey",
    "AdsReportBuilderCustomMetricsListDataProvider",
    "AdsReportBuilderScopeType",
    "AdsSelectorUtils",
    "AdsSettingsAdsSettingsLoadedActionFlux",
    "AdsSettingsStore",
    "AdsTableColumnGroupsSelectors",
    "AdsValidatorTests",
    "FBLogger",
    "FluxStore",
    "IGFAGraduationColumnDefaultPresetUtils",
    "adsCreateStoreSelector",
    "adsMgmtColumnIdToType",
    "adsPENavStateSelector",
    "adsPEObjectTypeSelector",
    "getByPath",
    "getErrorSafe",
    "immutable",
    "justknobx",
    "requireWeak",
    "setImmediate",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c, d;
    r("requireWeak")("AdsReportBuilderListStore", function (e) {
      d = e;
    });
    var m = [
        (c = r("AdsInsightsColumn")).RESULTS,
        c.COST_PER_RESULT,
        c.SPEND,
        o("adsMgmtColumnIdToType").forAttributionWindowType(
          c.RESULTS,
          o("AdsInsightsAttributionWindows").getDefault(),
        ),
        o("adsMgmtColumnIdToType").forAttributionWindowType(
          c.COST_PER_RESULT,
          o("AdsInsightsAttributionWindows").getDefault(),
        ),
      ],
      p = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this, u || (u = r("AdsDataAtom"))) || this),
            (e.getResolvedSelector = r("adsCreateStoreSelector")(
              [e],
              function () {
                return e.getResolved();
              },
              { name: i.id },
            )),
            (e.$AdsPEColumnsStore$p_3 = {}),
            (e.$AdsPEColumnsStore$p_4 = {}),
            (e.$AdsPEColumnsStore$p_5 = {}),
            (e.$AdsPEColumnsStore$p_6 = r("adsPENavStateSelector")().tool),
            (e.$AdsPEColumnsStore$p_7 = r("adsPENavStateSelector")().section),
            (e.$AdsPEColumnsStore$p_9 = !0),
            (e.$AdsPEColumnsStore$p_10 = !1),
            (e.$AdsPEColumnsStore$p_11 = !1),
            (e.$AdsPEColumnsStore$p_12 = !1),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.get = function () {
            var e,
              t =
                r("AdFLEXConfig") == null ||
                (e = r("AdFLEXConfig").get()) == null
                  ? void 0
                  : e.defaultColumnPreset;
            if (t != null) return t;
            var n = this.$AdsPEColumnsStore$p_1,
              a = r("adsPENavStateSelector")().tool;
            return (
              this.$AdsPEColumnsStore$p_6 !== a &&
                (this.$AdsPEColumnsStore$p_6 === "REPORTING" &&
                  o(
                    "AdsPEManageCampaignsConstants",
                  ).MANAGE_CAMPAIGNS_TOOLS.includes(a) &&
                  (this.$AdsPEColumnsStore$p_1 = this.$AdsPEColumnsStore$p_2),
                (this.$AdsPEColumnsStore$p_6 = a)),
              this.$AdsPEColumnsStore$p_1 == null
                ? { preset: o("AdsPEColumnsStoreUtils").getDefaultPreset() }
                : this.$AdsPEColumnsStore$p_1 !== n ||
                    !Array.isArray(this.$AdsPEColumnsStore$p_1.ids)
                  ? babelHelpers.extends({}, this.$AdsPEColumnsStore$p_1)
                  : babelHelpers.extends({}, this.$AdsPEColumnsStore$p_1, {
                      ids: this.$AdsPEColumnsStore$p_15(
                        this.$AdsPEColumnsStore$p_1.ids,
                      ),
                    })
            );
          }),
          (a.$AdsPEColumnsStore$p_15 = function (t) {
            var e = o("AdsInsightsColumnUtil").getColumnsInOrder(t),
              n =
                !r("AdsAccountStore").getSelectedAccount().isLoading() &&
                !o("AdsAgencyFeeUtils").canSeeAgencyFeeInsightsColumns(
                  r("AdsAccountStore").getSelectedAccount().getValue(),
                ),
              a = !o(
                "AdsOSQuickViewExperimentUtils",
              ).getIsAccountInOSQuickViewWithoutExposure();
            return e.filter(function (e) {
              return !(
                e === "undefined" ||
                (n &&
                  o("AdsAgencyFeeUtils").agencyFeeInsightsColumnsList.includes(
                    e,
                  )) ||
                (a &&
                  (e === r("AdsMgmtColumn").POTENTIAL_OUTCOME ||
                    e === r("AdsMgmtColumn").OPPORTUNITY_SCORE))
              );
            });
          }),
          (a.getResolved = function () {
            var e = this.get();
            return r("AdsInsightsColumnPresetStoreUtil").resolve(e);
          }),
          (a.getBenchmarkDerivedColumnIDsOrNull = function () {
            var e = r("adsPEObjectTypeSelector")();
            return r("getByPath")(this.$AdsPEColumnsStore$p_3, [e]);
          }),
          (a.getCollapsedBenchmarkDerivedColumnIDsOrNull = function () {
            var e = r("adsPEObjectTypeSelector")();
            return r("getByPath")(this.$AdsPEColumnsStore$p_4, [e]);
          }),
          (a.getCompareAttributionWindowsCollapsedColumnIDsOrNull =
            function () {
              var e = r("adsPEObjectTypeSelector")();
              return r("getByPath")(this.$AdsPEColumnsStore$p_5, [e]);
            }),
          (a.hasUserBeenColumnPresetDefaulted = function () {
            return this.$AdsPEColumnsStore$p_10;
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsExcelReportRefreshEditReportActionFlux").actionType,
              o("AdsInsightsChangePageActionFlux").actionType,
              o("AdsInsightsCreateColumnPresetActionFlux").actionType,
              o("AdsInsightsCreateColumnPresetSuccessActionFlux").actionType,
              o("AdsInsightsDeleteColumnPresetActionFlux").actionType,
              o("AdsInsightsFetchColumnPresetSuccessActionFlux").actionType,
              o("AdsInsightsSelectReportSpecActionFlux").actionType,
              o("AdsInsightsTableChangeColumnsDataActionFlux").actionType,
              o("AdsInsightsTableComparisonColumnCollapseDataActionFlux")
                .actionType,
              o("AdsInsightsTableComparisonColumnExpandDataActionFlux")
                .actionType,
              o("AdsInsightsTableSelectColumnSetDataActionFlux").actionType,
              o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType,
              o("AdsMgmtAccountUserSettingsLoadedDataActionFlux").actionType,
              o("AdsNavigationChangeNavigationStateDataActionFlux").actionType,
              o("AdsPEFluxStatsSetStatRangeActionFlux").actionType,
              o("AdsSettingsAdsSettingsLoadedActionFlux").actionType,
              o(
                "AdsInsightsTableAttributionComparisonColumnCollapseDataActionFlux",
              ).actionType,
              o(
                "AdsInsightsTableAttributionComparisonColumnExpandDataActionFlux",
              ).actionType,
              r("AdsInsightsUpdateColumnPresetActionFlux").actionType,
            ];
          }),
          (a.__getDependencyStores = function () {
            return [r("AdsSettingsStore")]
              .concat(
                r("AdsMgmtColumnPresetStoreWrapper").getStores(),
                [
                  r(
                    "AdsReportBuilderCustomMetricsListDataProvider",
                  ).toFluxStore(),
                ],
                r("adsPENavStateSelector").getStores(),
              )
              .filter(Boolean);
          }),
          (a.$AdsPEColumnsStore$p_16 = function () {
            (u || (u = r("AdsDataAtom"))).waitFor(
              r("AdsMgmtColumnPresetStoreWrapper")
                .getStores()
                .map(function (e) {
                  return e.getDispatchToken();
                }),
            );
          }),
          (a.$AdsPEColumnsStore$p_17 = function (t) {
            this.$AdsPEColumnsStore$p_16();
            var e = t.changedParamKeys,
              n = t.params;
            if (e.tool === !0 && n.tool === "REPORTING") {
              ((this.$AdsPEColumnsStore$p_2 = this.$AdsPEColumnsStore$p_1),
                this.__emitChange());
              return;
            }
            if (
              (((o(
                "AdsPEManageCampaignsConstants",
              ).MANAGE_CAMPAIGNS_TOOLS.includes(this.$AdsPEColumnsStore$p_6) &&
                this.$AdsPEColumnsStore$p_7 === "CREATIVES") ||
                this.$AdsPEColumnsStore$p_6 === "CREATIVE_REPORTING") &&
                d &&
                (u || (u = r("AdsDataAtom"))).waitFor([d.getDispatchToken()]),
              e.columns && n.columns)
            ) {
              var a,
                i = o("AdsInsightsColumnUtil").sanitizeColumnIDs(n.columns);
              ((this.$AdsPEColumnsStore$p_1 = babelHelpers.extends(
                {},
                this.$AdsPEColumnsStore$p_1,
                { ids: this.$AdsPEColumnsStore$p_18(i), preset: void 0 },
              )),
                ((a = this.get()) != null && a.attributionWindows) ||
                  (this.$AdsPEColumnsStore$p_1 = babelHelpers.extends(
                    {},
                    this.$AdsPEColumnsStore$p_1,
                    {
                      attributionWindows: o(
                        "AdsInsightsAttributionWindows",
                      ).getDefaultWindows(),
                    },
                  )),
                this.__emitChange());
            }
            (e.attribution_windows &&
              n.attribution_windows &&
              this.$AdsPEColumnsStore$p_1 &&
              this.$AdsPEColumnsStore$p_1.ids &&
              ((this.$AdsPEColumnsStore$p_1 = babelHelpers.extends(
                {},
                this.$AdsPEColumnsStore$p_1,
                {
                  attributionWindows: n.attribution_windows.filter(
                    function (e) {
                      return o(
                        "AdsInsightsAttributionWindows",
                      ).SUPPORTED_ATTRIBUTION_WINDOWS.includes(e);
                    },
                  ),
                },
              )),
              this.__emitChange()),
              e.column_preset &&
                n.column_preset &&
                (e.attribution_windows && n.attribution_windows
                  ? this.$AdsPEColumnsStore$p_19(
                      n.column_preset,
                      null,
                      n.attribution_windows,
                    )
                  : this.$AdsPEColumnsStore$p_19(n.column_preset),
                this.__emitChange()));
          }),
          (a.__onDispatch = function (n) {
            var t = n.action;
            if (
              ((u || (u = r("AdsDataAtom"))).waitFor([
                r("AdsSettingsStore").getDispatchToken(),
                r("AdsAccountStore").getDispatchToken(),
              ]),
              this.$AdsPEColumnsStore$p_12 &&
                !this.$AdsPEColumnsStore$p_11 &&
                r("AdsAccountStore")
                  .getSelectedAccount()
                  .hasValueWithoutError() &&
                o(
                  "AdsMgmtFlow11_1CustomColumnSaveGatingUtils",
                ).getIsAccountInFlow11_1CustomColumnSaveWithoutExposure() &&
                ((this.$AdsPEColumnsStore$p_12 = !1),
                this.$AdsPEColumnsStore$p_20()),
              r("AdsReportBuilderCustomMetricsListDataProvider")
                .toFluxStore()
                .hasChanged())
            ) {
              var a,
                i = (a = this.$AdsPEColumnsStore$p_1) == null ? void 0 : a.ids;
              if (i != null && this.$AdsPEColumnsStore$p_21(i)) {
                var l = this.$AdsPEColumnsStore$p_18(i);
                r("shallowArrayEqual")(l, i) ||
                  r("setImmediate")(function () {
                    r("AdsPERouterHelper")
                      .getRouteBuilder()
                      .addColumnIDs(l)
                      .navigate();
                  });
              }
            }
            (e || (e = o("AdsSelectorUtils"))).hasAnyStoreChanged([
              r("adsPENavStateSelector"),
            ]) &&
              ((this.$AdsPEColumnsStore$p_6 = r(
                "adsPENavStateSelector",
              )().tool),
              (this.$AdsPEColumnsStore$p_7 = r(
                "adsPENavStateSelector",
              )().section));
            e: {
              var s = t;
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsSettingsAdsSettingsLoadedActionFlux").actionType
              ) {
                var c,
                  d,
                  m = s;
                this.$AdsPEColumnsStore$p_16();
                var p = r("AdsPERouterHelper")
                    .getRouteBuilder()
                    .getCurrentParams(),
                  _ = !!p.column_preset || !!p.columns,
                  f = r("justknobx")._("4269");
                if (!this.$AdsPEColumnsStore$p_1 || !_) {
                  var g = this.$AdsPEColumnsStore$p_22(m),
                    h = g.defaultBuiltInPreset,
                    y = g.defaultColumnPreset,
                    C = y != null ? y : h,
                    b = this.$AdsPEColumnsStore$p_23(C, f);
                  if (b) return;
                } else if (
                  f &&
                  (p == null ? void 0 : p.column_preset) ===
                    "CUSTOM_PLACEHOLDER" &&
                  !(
                    Array.isArray(
                      (c = this.$AdsPEColumnsStore$p_1) == null
                        ? void 0
                        : c.ids,
                    ) &&
                    ((d = this.$AdsPEColumnsStore$p_1) == null
                      ? void 0
                      : d.ids.length) > 0
                  )
                ) {
                  this.$AdsPEColumnsStore$p_24();
                  return;
                }
                if (
                  this.$AdsPEColumnsStore$p_9 &&
                  this.$AdsPEColumnsStore$p_6 === "MANAGE_ADS" &&
                  p.comparison_date
                ) {
                  var v;
                  ((this.$AdsPEColumnsStore$p_9 = !1),
                    r("AdsInterfacesLogger").log({
                      eventName: "ads_manager_date_time_picker_compare_v2",
                      data:
                        ((v = {}),
                        (v.status = !0),
                        (v.event_source = "am_initial_load"),
                        v),
                    }),
                    this.$AdsPEColumnsStore$p_25(),
                    this.__emitChange());
                }
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsInsightsCreateColumnPresetActionFlux").actionType &&
                "columnPreset" in s
              ) {
                var S = s.columnPreset;
                (o(
                  "AdsMgmtFlow11_1CustomColumnSaveGatingUtils",
                ).getIsAccountInFlow11_1CustomColumnSaveWithoutExposure() &&
                  this.$AdsPEColumnsStore$p_16(),
                  this.$AdsPEColumnsStore$p_13 !== S.id &&
                    (this.$AdsPEColumnsStore$p_1 = { preset: S.id }),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  r("AdsInsightsUpdateColumnPresetActionFlux").actionType &&
                "columnPreset" in s
              ) {
                var R = s.columnPreset;
                (o(
                  "AdsMgmtFlow11_1CustomColumnSaveGatingUtils",
                ).getIsAccountInFlow11_1CustomColumnSaveWithoutExposure() &&
                  this.$AdsPEColumnsStore$p_16(),
                  (this.$AdsPEColumnsStore$p_1 = { preset: R.id }),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsInsightsTableSelectColumnSetDataActionFlux")
                    .actionType &&
                "columnSetID" in s
              ) {
                var L = s.columnSetID;
                ((this.$AdsPEColumnsStore$p_1 = { preset: L }),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsInsightsSelectReportSpecActionFlux").actionType &&
                "id" in s
              ) {
                var E = s.id;
                if (o("AdsApplicationUtils").isFAME()) {
                  var k;
                  if (
                    (r("requireWeak")(
                      "adsInsightsSavedReportSelector",
                      function (e) {
                        k = e;
                      },
                    ),
                    k)
                  ) {
                    var I = k(E);
                    (this.$AdsPEColumnsStore$p_26(I.viewSpec),
                      this.__emitChange());
                  }
                }
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsExcelReportRefreshEditReportActionFlux").actionType &&
                "viewSpec" in s
              ) {
                var T = s.viewSpec;
                (this.$AdsPEColumnsStore$p_26(T), this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsInsightsCreateColumnPresetSuccessActionFlux")
                    .actionType &&
                "oldID" in s &&
                "newID" in s
              ) {
                var D = s.oldID,
                  x = s.newID;
                this.$AdsPEColumnsStore$p_27(D, x);
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsInsightsTableChangeColumnsDataActionFlux").actionType &&
                "columnIDs" in s &&
                "attributionWindows" in s
              ) {
                var $ = s.columnIDs,
                  P = s.attributionWindows;
                ((this.$AdsPEColumnsStore$p_1 = {
                  ids: $,
                  attributionWindows: P,
                }),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type === o("AdsInsightsChangePageActionFlux").actionType &&
                "view" in s
              ) {
                var N = s.view;
                (this.$AdsPEColumnsStore$p_26(N),
                  this.$AdsPEColumnsStore$p_25(),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsNavigationChangeNavigationStateDataActionFlux")
                    .actionType
              ) {
                (this.$AdsPEColumnsStore$p_25(), this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsInsightsTableComparisonColumnCollapseDataActionFlux")
                    .actionType &&
                "derivedColumnID" in s
              ) {
                var M = s.derivedColumnID,
                  w = s;
                (this.$AdsPEColumnsStore$p_28(M, !1, w.shouldTrackCollapsed),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsInsightsTableComparisonColumnExpandDataActionFlux")
                    .actionType &&
                "derivedColumnID" in s
              ) {
                var A = s.derivedColumnID,
                  F = s;
                (this.$AdsPEColumnsStore$p_28(A, !0, F.shouldTrackCollapsed),
                  this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o(
                    "AdsInsightsTableAttributionComparisonColumnCollapseDataActionFlux",
                  ).actionType &&
                "derivedColumnID" in s
              ) {
                var O = s.derivedColumnID;
                (this.$AdsPEColumnsStore$p_29(O, !1), this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o(
                    "AdsInsightsTableAttributionComparisonColumnExpandDataActionFlux",
                  ).actionType &&
                "derivedColumnID" in s
              ) {
                var B = s.derivedColumnID;
                (this.$AdsPEColumnsStore$p_29(B, !0), this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type === o("AdsPEFluxStatsSetStatRangeActionFlux").actionType
              ) {
                (this.$AdsPEColumnsStore$p_25(), this.__emitChange());
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsInterfacesRouteUpdateParamsDataActionFlux")
                    .actionType &&
                "data" in s
              ) {
                var W = s.data;
                this.$AdsPEColumnsStore$p_17(W);
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsMgmtAccountUserSettingsLoadedDataActionFlux")
                    .actionType &&
                "fieldSet" in s
              ) {
                var q = s.fieldSet;
                if ((this.$AdsPEColumnsStore$p_16(), q === "column")) {
                  var U = r("AdsAccountStore").getSelectedAccountIDX(),
                    V = r(
                      "AdsMgmtColumnPresetStoreWrapper",
                    ).getColumnPresetsOrEmpty(U);
                  this.$AdsPEColumnsStore$p_30(V);
                }
                break e;
              }
              if (
                ((typeof s == "object" && s !== null) ||
                  typeof s == "function") &&
                "type" in s &&
                s.type ===
                  o("AdsInsightsFetchColumnPresetSuccessActionFlux")
                    .actionType &&
                "columnPresets" in s
              ) {
                var H = s.columnPresets;
                (this.$AdsPEColumnsStore$p_30(H),
                  this.$AdsPEColumnsStore$p_14 != null
                    ? this.$AdsPEColumnsStore$p_31()
                    : !this.$AdsPEColumnsStore$p_11 &&
                      o(
                        "AdsMgmtFlow11_1CustomColumnSaveGatingUtils",
                      ).getIsAccountInFlow11_1CustomColumnSaveWithoutExposure() &&
                      this.$AdsPEColumnsStore$p_20());
                break e;
              }
              return;
            }
          }),
          (a.$AdsPEColumnsStore$p_30 = function (t) {
            if (this.$AdsPEColumnsStore$p_8 != null) {
              var e = this.$AdsPEColumnsStore$p_8,
                n;
              (t &&
              t.some(function (t) {
                return t.id === e;
              })
                ? (n = e)
                : ((n = o("AdsPEColumnsStoreUtils").getDefaultPreset()),
                  o("AdsPEColumnsStoreUtils").updateUrlPreset(n)),
                (this.$AdsPEColumnsStore$p_1 = babelHelpers.extends(
                  {},
                  this.$AdsPEColumnsStore$p_1,
                  { preset: n },
                )),
                (this.$AdsPEColumnsStore$p_8 = null),
                this.__emitChange());
            }
          }),
          (a.$AdsPEColumnsStore$p_18 = function (t) {
            if (this.$AdsPEColumnsStore$p_21(t)) {
              var e = new (r("AdsReportBuilderCustomMetricKey"))({
                  scopeType: r("AdsReportBuilderScopeType").ACCOUNT,
                  scopeID: r("AdsAccountStore").getSelectedAccountIDX(),
                }),
                n = r("AdsReportBuilderCustomMetricsListDataProvider")(),
                a = n.get(e);
              if (a.hasValue()) {
                var i = a.getValueEnforcing();
                return t.filter(function (e) {
                  var t = o("AdsInsightsFieldDescriptor").get(e),
                    n = t.customMetricID;
                  return n != null ? i.has(n) : !0;
                });
              }
            }
            return t;
          }),
          (a.$AdsPEColumnsStore$p_25 = function () {
            var e,
              t = [r("AdsPEStatRangeUIStore")]
                .concat(r("adsPEObjectTypeSelector").getStores())
                .map(function (e) {
                  return e.getDispatchToken();
                });
            (u || (u = r("AdsDataAtom"))).waitFor(t);
            var n = r("adsPEObjectTypeSelector")(),
              a = r("AdsPEStatRangeUIStore").getComparisonOrNull();
            (!a &&
              this.$AdsPEColumnsStore$p_3[n] &&
              (this.$AdsPEColumnsStore$p_3[n] = r("immutable").Set()),
              a &&
                o(
                  "AdsReportBuilderCompareAttributionWindowUtils",
                ).hasNonDefaultAttributionWindows(
                  (e = this.get()) == null ? void 0 : e.attributionWindows,
                ) &&
                (this.$AdsPEColumnsStore$p_1 = babelHelpers.extends(
                  {},
                  this.$AdsPEColumnsStore$p_1,
                  {
                    attributionWindows: o(
                      "AdsInsightsAttributionWindows",
                    ).getDefaultWindows(),
                  },
                )),
              this.$AdsPEColumnsStore$p_6 === "MANAGE_ADS" &&
                (a
                  ? this.$AdsPEColumnsStore$p_32()
                  : (this.$AdsPEColumnsStore$p_4[n] = r("immutable").Set())));
          }),
          (a.$AdsPEColumnsStore$p_32 = function () {
            var e = this,
              t =
                this.getCollapsedBenchmarkDerivedColumnIDsOrNull() ||
                r("immutable").Set(),
              n = r("AdsTableColumnGroupsSelectors")
                .columnGroupsSpecSelector()
                .map(function (e) {
                  return e.columnGroup;
                }),
              a = m
                .map(function (r) {
                  return n && n.includes(r) && !t.has(r)
                    ? (e.$AdsPEColumnsStore$p_28(r, !0), r)
                    : null;
                })
                .filter(Boolean);
            if (a.length === 0)
              for (var i = 2; i < n.length; i++) {
                var l = n[i],
                  s = o("AdsInsightsColumnUtil").getDerivedColumnConfig(l);
                if (s != null && s.supportBenchmark) {
                  t.has(l) || (this.$AdsPEColumnsStore$p_28(l, !0), a.push(l));
                  break;
                }
              }
            if (a.length > 0) {
              var u;
              r("AdsInterfacesLogger").log({
                eventName: "insights_table_comparison_column_expand",
                data:
                  ((u = {}),
                  (u.event_source = "auto_expand"),
                  (u.current_insights_table_comparison_columns = a),
                  u),
              });
            }
          }),
          (a.$AdsPEColumnsStore$p_28 = function (t, n, o) {
            o === void 0 && (o = !0);
            var e = r("adsPEObjectTypeSelector")(),
              a =
                this.getBenchmarkDerivedColumnIDsOrNull() ||
                r("immutable").Set();
            if (
              ((this.$AdsPEColumnsStore$p_3[e] = n ? a.add(t) : a.remove(t)),
              o && this.$AdsPEColumnsStore$p_6 === "MANAGE_ADS")
            ) {
              var i =
                this.getCollapsedBenchmarkDerivedColumnIDsOrNull() ||
                r("immutable").Set();
              this.$AdsPEColumnsStore$p_4[e] = n ? i.remove(t) : i.add(t);
            }
          }),
          (a.$AdsPEColumnsStore$p_29 = function (t, n) {
            var e = r("adsPEObjectTypeSelector")(),
              o =
                this.getCompareAttributionWindowsCollapsedColumnIDsOrNull() ||
                r("immutable").Set();
            this.$AdsPEColumnsStore$p_5[e] = n ? o.remove(t) : o.add(t);
          }),
          (a.$AdsPEColumnsStore$p_27 = function (t, n) {
            (this.get().preset === t &&
              ((this.$AdsPEColumnsStore$p_1 = { preset: n }),
              o("AdsPEColumnsStoreUtils").updateUrlPreset(n)),
              this.$AdsPEColumnsStore$p_13 === t &&
                ((this.$AdsPEColumnsStore$p_13 = null),
                r(
                  "AdsCustomPresetLocalStorageUtil",
                ).updateCustomPresetMetricsLocalStorage([])),
              this.__emitChange());
          }),
          (a.$AdsPEColumnsStore$p_26 = function (t) {
            this.$AdsPEColumnsStore$p_1 = babelHelpers.extends({}, t.columns);
          }),
          (a.$AdsPEColumnsStore$p_21 = function (t) {
            return t.some(function (e) {
              return (
                o("AdsInsightsFieldDescriptor").get(e).customMetricID != null
              );
            });
          }),
          (a.$AdsPEColumnsStore$p_19 = function (t, n, a, i) {
            var e = { attributionWindows: a };
            if (
              (i === !0 &&
                ((this.$AdsPEColumnsStore$p_1 = babelHelpers.extends(
                  { preset: t },
                  e,
                )),
                o("AdsPEColumnsStoreUtils").updateUrlPreset(t, n)),
              o("AdsValidatorTests").isFBIDString(t).isValid)
            ) {
              var l = r("AdsAccountStore").getSelectedAccountIDX();
              (o("AdsInsightsColumnPresetDataDispatcher").loadColumnPresets(l),
                (this.$AdsPEColumnsStore$p_8 = t));
            } else if (
              o("AdsInsightsColumnPresetUtil").isBuiltinID(t) &&
              r("AdsMgmtColumnPresetStoreWrapper").getBuiltinOrNull(t) != null
            )
              ((this.$AdsPEColumnsStore$p_1 = babelHelpers.extends(
                { preset: t },
                e,
              )),
                this.__emitChange());
            else {
              var s = o("AdsPEColumnsStoreUtils").getDefaultPreset();
              ((this.$AdsPEColumnsStore$p_1 = babelHelpers.extends(
                { preset: s },
                e,
              )),
                o("AdsPEColumnsStoreUtils").updateUrlPreset(s, n));
            }
          }),
          (a.$AdsPEColumnsStore$p_33 = function (t) {
            return {
              defaultColumnPreset: r("getByPath")(t, [
                "data",
                "settings",
                "default_column_preset",
                "id",
              ]),
              defaultBuiltInPreset: r("getByPath")(t, [
                "data",
                "settings",
                "default_builtin_column_preset",
              ]),
            };
          }),
          (a.$AdsPEColumnsStore$p_22 = function (t) {
            if (r("justknobx")._("47"))
              try {
                var e,
                  n = r("AdsAccountStore").getSelectedAccountIDX(),
                  o = r("AdsSettingsStore").getByFields(n, [
                    "default_column_preset",
                    "default_builtin_column_preset",
                  ]);
                return {
                  defaultColumnPreset:
                    (e = o.default_column_preset) == null ? void 0 : e.id,
                  defaultBuiltInPreset: o.default_builtin_column_preset,
                };
              } catch (e) {
                var a = r("getErrorSafe")(e);
                return (
                  r("FBLogger")("ads_pe_columns_store")
                    .catching(a)
                    .mustfix("Error fetching default column preset settings"),
                  this.$AdsPEColumnsStore$p_33(t)
                );
              }
            return this.$AdsPEColumnsStore$p_33(t);
          }),
          (a.$AdsPEColumnsStore$p_24 = function () {
            var e = r(
              "AdsCustomPresetLocalStorageUtil",
            ).getCustomPresetMetricsLocalStorage();
            if (Array.isArray(e) && e.length > 0) {
              if (
                ((this.$AdsPEColumnsStore$p_1 = {
                  ids: e,
                  attributionWindows: o(
                    "AdsInsightsAttributionWindows",
                  ).getDefaultWindows(),
                  preset: void 0,
                }),
                this.__emitChange(),
                o(
                  "AdsMgmtFlow11_1CustomColumnSaveGatingUtils",
                ).getIsAccountInFlow11_1CustomColumnSaveWithoutExposure())
              ) {
                var t = r("AdsAccountStore").getSelectedAccount();
                if (t.hasValueWithoutError()) {
                  var n,
                    a = t.getValueEnforcing(),
                    i =
                      a == null || (n = a.user_settings) == null
                        ? void 0
                        : n.id;
                  if (i != null) {
                    var l = o(
                        "AdsInsightsAttributionWindows",
                      ).getDefaultWindows(),
                      s = r("AdsMgmtColumnPresetStoreWrapper").findByContent(
                        a.account_id,
                        e,
                        l,
                        !1,
                      );
                    s != null
                      ? (r(
                          "AdsCustomPresetLocalStorageUtil",
                        ).updateCustomPresetMetricsLocalStorage([]),
                        (this.$AdsPEColumnsStore$p_11 = !0))
                      : ((this.$AdsPEColumnsStore$p_14 = {
                          accountID: a.account_id,
                          attributionWindows: l,
                          columnIDs: e,
                          shouldSaveAsDefault: !0,
                          userSettingsID: i,
                        }),
                        this.$AdsPEColumnsStore$p_31());
                  }
                }
              }
            } else
              (this.$AdsPEColumnsStore$p_19(
                "PERFORMANCE",
                "user_settings_loaded",
                void 0,
                !0,
              ),
                this.__emitChange());
          }),
          (a.$AdsPEColumnsStore$p_31 = function () {
            var e = this,
              t = this.$AdsPEColumnsStore$p_14;
            t != null &&
              r("setImmediate")(function () {
                if (e.$AdsPEColumnsStore$p_14 != null)
                  try {
                    var n = r(
                      "AdsMgmtColumnPresetStoreWrapper",
                    ).makeTemporaryID();
                    ((e.$AdsPEColumnsStore$p_13 = n),
                      o("AdsInsightsColumnPresetAction").create({
                        accountID: t.accountID,
                        attributionWindows: t.attributionWindows,
                        columnIDs: t.columnIDs,
                        id: n,
                        name: o(
                          "AdsColumnPresetNameByteUtils",
                        ).truncateToMaxBytes(
                          String(s._(/*BTDS*/ "Untitled preset")),
                          50,
                        ),
                        shouldSaveAsDefault: t.shouldSaveAsDefault,
                        userSettingsID: t.userSettingsID,
                      }),
                      (e.$AdsPEColumnsStore$p_14 = null),
                      (e.$AdsPEColumnsStore$p_11 = !0));
                  } catch (e) {
                    r("FBLogger")("ads_pe_columns_store")
                      .catching(r("getErrorSafe")(e))
                      .warn("Failed to auto-migrate CUSTOM_PLACEHOLDER preset");
                  }
              });
          }),
          (a.$AdsPEColumnsStore$p_20 = function () {
            var e,
              t,
              n = r("AdsAccountStore").getSelectedAccount();
            if (!n.hasValueWithoutError()) {
              this.$AdsPEColumnsStore$p_12 = !0;
              return;
            }
            var a = n.getValueEnforcing(),
              i = a == null || (e = a.user_settings) == null ? void 0 : e.id;
            if (i != null) {
              var l = o("AdsInsightsAttributionWindows").getDefaultWindows(),
                s = o(
                  "AdsPEColumnsStoreCustomPlaceholderMigrationUtils",
                ).getCustomPlaceholderMigrationAction(
                  a.account_id,
                  l,
                  (t = this.$AdsPEColumnsStore$p_1) == null ? void 0 : t.preset,
                );
              if (s.type === "already_migrated") {
                this.$AdsPEColumnsStore$p_11 = !0;
                return;
              }
              s.type !== "skip" &&
                (s.shouldSaveAsDefault &&
                  ((this.$AdsPEColumnsStore$p_1 = {
                    ids: s.columnIDs,
                    attributionWindows: l,
                    preset: void 0,
                  }),
                  this.__emitChange()),
                (this.$AdsPEColumnsStore$p_14 = {
                  accountID: a.account_id,
                  attributionWindows: l,
                  columnIDs: s.columnIDs,
                  shouldSaveAsDefault: s.shouldSaveAsDefault,
                  userSettingsID: i,
                }),
                this.$AdsPEColumnsStore$p_31());
            }
          }),
          (a.$AdsPEColumnsStore$p_23 = function (t, n) {
            if (
              !o(
                "IGFAGraduationColumnDefaultPresetUtils",
              ).shouldSkipPrevSelectedColumnForDogfooding() &&
              t != null
            ) {
              if (n && t === "CUSTOM_PLACEHOLDER")
                return (this.$AdsPEColumnsStore$p_24(), !0);
              (this.$AdsPEColumnsStore$p_19(t, "user_settings_loaded"),
                this.__emitChange());
            } else
              (o("AdsInsightsColumnPresetUtil").getDefault(!0),
                (this.$AdsPEColumnsStore$p_10 = !0));
            return !1;
          }),
          n
        );
      })(r("FluxStore"));
    p.__moduleID = i.id;
    var _ = new p();
    l.default = _;
  },
  226,
);
