__d(
  "AdsInsightsObjectStatsStore",
  [
    "invariant",
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsInsightsAttributionSettingBreakdownUtils",
    "AdsInsightsBreakdowns",
    "AdsInsightsBreakdownsSpec",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsEVCUtils",
    "AdsInsightsFetchInsightsEdgeErrorActionFlux",
    "AdsInsightsFetchInsightsEdgeSuccessActionFlux",
    "AdsInsightsFetchInsightsEdgeSuccessBatchedActionFlux",
    "AdsInsightsField",
    "AdsInsightsFields",
    "AdsInsightsFilter",
    "AdsInsightsFilterSerializationUtil",
    "AdsInsightsFilterUtil",
    "AdsInsightsInsightsEdgeDataDispatcher",
    "AdsInsightsInsightsEdgeDataLoader",
    "AdsInsightsObjectStatsGroup",
    "AdsInsightsQueryUtil",
    "AdsInsightsSortUtil",
    "AdsInsightsTableViewStore",
    "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
    "AdsMgmt2026ActionToActionExperimentUtils",
    "AdsMgmtColumnCategoriesCanSeeUtils",
    "AdsMgmtCustomMetricsStringOperations",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "AdsPEColumnsStore",
    "AdsPERefreshTableViewActionFlux",
    "AdsReportBuilderUpdateCustomMetricSuccessActionFlux",
    "FluxStore",
    "QPLSharing",
    "StrSet",
    "adsCreateStoreThunkSelector",
    "adsInsightsObjectStatsUtilFlattenActionBreakdown",
    "areEqual",
    "flatMapArray",
    "getByPath",
    "gkx",
    "isEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = "custom_derived_metrics";
    function m(e) {
      return e.reduce(function (e, t) {
        var n = o("AdsMgmtCustomMetricsStringOperations").getCMIDFromColumnID(
          t,
        );
        return [].concat(e, [n]).filter(Boolean);
      }, []);
    }
    function p(e, t, n) {
      var r = [];
      return (
        e === !0 && r.push("results_anomaly"),
        t === !0 && r.push("amount_spend_anomaly"),
        n === !0 && r.push("cost_per_result_anomaly"),
        r
      );
    }
    function _(e) {
      return (
        e === "1d_sequenced" ||
        e === "7d_sequenced" ||
        e === "28d_sequenced" ||
        e === "sequenced"
      );
    }
    var f = (function (t) {
      function n() {
        var n;
        return (
          (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
          (n.getGroupCachedSelector = r("adsCreateStoreThunkSelector")(
            n,
            function (e, t, r, o, a) {
              return n.getGroupCached(e, t, r, o, a);
            },
          )),
          (n.getGroup = function (e, t, a, l, s, c, p, _, f, g, h, y, C, b, v) {
            (_ === void 0 && (_ = [i.id + ".getGroup"]),
              f === void 0 && (f = "none"),
              g === void 0 && (g = r("AdsObjectTypes").ACCOUNT),
              h === void 0 &&
                (h = {
                  batchDispatch: !1,
                  isSummaryRow: !1,
                  refetchOnError: !1,
                }),
              y === void 0 && (y = !1),
              C === void 0 && (C = !1),
              b === void 0 && (b = null),
              v === void 0 && (v = null));
            var S = n.getGroupCached(e, t, a, l, c),
              R = r("AdsInsightsTableViewStore").getOrNull(),
              L = s.concat("attribution_setting"),
              E = o("AdsInsightsFields").getAPIPropsMulti(L, C),
              k = E.actionTypes,
              I = E.apiFields,
              T = E.attributionWindows,
              D = m(L),
              x = S.getMissingAPIFields(
                I,
                k,
                T,
                c || [],
                R,
                h.refetchOnError,
                D,
              ),
              $ = x.missingActionTypes,
              P = x.missingAPIFields;
            if (
              (D.length > 0 && n.$AdsInsightsObjectStatsStore$p_3 && P.add(d),
              P.count())
            ) {
              if (
                (P.add("conversion_annotations"),
                !P.contains("attribution_setting") &&
                  l.some(function (e) {
                    return r(
                      "AdsInsightsBreakdowns",
                    ).isAttributionSettingBreakdown(e);
                  }) &&
                  o(
                    "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
                  ).shouldAccountSeeAttributionSettingBreakdownWithoutExposure() &&
                  P.add("attribution_setting"),
                I.includes("attribution_setting") &&
                  P.add("conversion_count_setting"),
                o(
                  "AdsMgmt2026ActionToActionExperimentUtils",
                ).getIsAnchorEventsEnabled())
              ) {
                var N = !(u || (u = r("isEmpty")))(k) || I.includes("results");
                N &&
                  (I.includes("results") || P.add("results"),
                  I.includes("anchor_events") || P.add("anchor_events"));
              }
              o(
                "AdsMgmt2026ActionToActionExperimentUtils",
              ).getIsAccountInA2A() &&
                I.includes("attribution_setting") &&
                (I.includes("anchor_event_attribution_setting") ||
                  P.add("anchor_event_attribution_setting"),
                I.includes("multi_event_conversion_attribution_setting") ||
                  P.add("multi_event_conversion_attribution_setting"));
              var M = (c || []).reduce(function (e, t) {
                  return e.addAll(o("AdsInsightsFields").getAPIFields(t.field));
                }, P),
                w = a || {},
                A = w.comparisonRange,
                F = w.currentRange,
                O = {
                  actionTypes: $.toArray(),
                  apiFields: M.toArray(),
                  attributionWindows: b != null ? b : T,
                  breakdowns: l.filter(function (e) {
                    return !r("AdsInsightsBreakdowns").isObjectBreakdown(e);
                  }),
                  comparisonTimeRange: A,
                  currentTimeRange: F,
                  filter: e,
                  objectType: g,
                  sort: c || [],
                  timeRange: t,
                  doNotUseUnifiedAttributionSetting: y,
                };
              (f === "defaultSummary" && (O.summary = "defaultSummary"),
                R &&
                  ((O = o(
                    "AdsInsightsQueryUtil",
                  ).augmentInsightsQueryByCurrentView(O, R)),
                  h.isSummaryRow === !0 &&
                    o(
                      "AdsInsightsFilterUtil",
                    ).shouldRoundUpObjectTypeForSummaryRow(R.objectType, e) &&
                    (O.roundUpObjectType = R.objectType)));
              var B = P.toArray();
              (B.includes(d) &&
                D.length > 0 &&
                (B = B.filter(function (e) {
                  return e !== d;
                }).concat(
                  D.map(
                    o("AdsMgmtCustomMetricsStringOperations")
                      .getColumnIDFromCMID,
                  ),
                )),
                S.setFieldsLoading(B, $.toArray(), T, c || []),
                r("AdsInsightsInsightsEdgeDataDispatcher").fetch(
                  O,
                  {
                    batchDispatch: h.batchDispatch,
                    forceAsync: h.forceAsync,
                    isSummaryRow: h.isSummaryRow,
                    overwriteFilter: v,
                    skipSyncLegBeforeAsyncFallback:
                      h.skipSyncLegBeforeAsyncFallback,
                    useAccountInsightsPreloader: h.useAccountInsightsPreloader,
                  },
                  p,
                  _,
                  m(s),
                ),
                (n.$AdsInsightsObjectStatsStore$p_3 = !1));
            }
            return S;
          }),
          (n.getGroupSelector = r("adsCreateStoreThunkSelector")(
            n,
            n.getGroup,
          )),
          (n.getGroupsByIDs = function (e, t, a, l, s, c, _, f, g, h) {
            (s === void 0 && (s = []),
              c === void 0 && (c = []),
              _ === void 0 &&
                (_ = {
                  batchDispatch: !1,
                  objectsPerFetch: 10,
                  refetchOnError: !1,
                }),
              h === void 0 && (h = [i.id + ".getGroup"]));
            var y = { comparisonRange: g, currentRange: l };
            (t === r("AdsObjectTypes").CAMPAIGN_GROUP &&
              a.push.apply(
                a,
                p(
                  a.includes("results"),
                  a.includes("spend"),
                  a.includes("cost_per_result"),
                ),
              ),
              t === r("AdsObjectTypes").CAMPAIGN &&
                a.includes("cost_per_result") &&
                !a.includes("cost_per_result_temporal_delta_ratio") &&
                o(
                  "AdsMgmtColumnCategoriesCanSeeUtils",
                ).canSeeCprAnomalyPillWithoutExposure() &&
                a.push("cost_per_result_temporal_delta_ratio"),
              a.includes("attribution_setting") ||
                (o(
                  "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
                ).shouldAccountSeeAttributionSettingBreakdownWithoutExposure() &&
                  (c.some(function (e) {
                    return r(
                      "AdsInsightsBreakdowns",
                    ).isAttributionSettingBreakdown(e);
                  }) ||
                    o(
                      "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
                    ).shouldEnableMCOSupportForAttributionBreakdown()) &&
                  a.push("attribution_setting")));
            var C = o("AdsInsightsFields").getAPIPropsMulti(a),
              b = C.actionTypes,
              v = C.apiFields,
              S = C.attributionWindows,
              R = o("AdsInsightsSortUtil").getBreakdownSort(s, c),
              L = r("AdsAccountStore").getSelectedAccount().getValue(),
              E = r("AdsInsightsTableViewStore").getOrNull(),
              k = _.objectsPerFetch,
              I = [],
              T = n,
              D = m(a),
              x = function* () {
                for (var n = 0, a = e.length; n < a; ) {
                  for (
                    var i = [],
                      s = new (r("StrSet"))(),
                      m = new (r("StrSet"))(),
                      p = [];
                    n < a && i.length < k;
                  ) {
                    var g = e[n],
                      h = T.getGroupCached(
                        o("AdsInsightsFilter").idIn(t, [g]),
                        f || l,
                        y,
                        c,
                        R,
                      );
                    I.push(h);
                    var C = h.getMissingAPIFields(
                        v,
                        b,
                        S,
                        R,
                        E,
                        _.refetchOnError,
                        D,
                      ),
                      L = C.missingActionTypes,
                      x = C.missingAPIFields;
                    if (
                      (D.length > 0 &&
                        T.$AdsInsightsObjectStatsStore$p_2 &&
                        x.add(d),
                      x.count())
                    ) {
                      if (
                        (x.add("conversion_annotations"),
                        !x.contains("attribution_setting") &&
                          c.some(function (e) {
                            return r(
                              "AdsInsightsBreakdowns",
                            ).isAttributionSettingBreakdown(e);
                          }) &&
                          o(
                            "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
                          ).shouldAccountSeeAttributionSettingBreakdownWithoutExposure() &&
                          x.add("attribution_setting"),
                        v.includes("attribution_setting") &&
                          x.add("conversion_count_setting"),
                        o(
                          "AdsMgmt2026ActionToActionExperimentUtils",
                        ).getIsAnchorEventsEnabled())
                      ) {
                        var $ =
                          !(u || (u = r("isEmpty")))(b) ||
                          v.includes("results");
                        $ &&
                          (v.includes("results") || s.add("results"),
                          v.includes("anchor_events") ||
                            s.add("anchor_events"));
                      }
                      (o(
                        "AdsMgmt2026ActionToActionExperimentUtils",
                      ).getIsAccountInA2A() &&
                        v.includes("attribution_setting") &&
                        (v.includes("anchor_event_attribution_setting") ||
                          s.add("anchor_event_attribution_setting"),
                        v.includes(
                          "multi_event_conversion_attribution_setting",
                        ) ||
                          s.add("multi_event_conversion_attribution_setting")),
                        s.addAll(x),
                        m.addAll(L),
                        i.push(g),
                        p.push(h));
                    }
                    n += 1;
                  }
                  i.length && (yield [i, s.toArray(), m.toArray(), p]);
                }
              },
              $ = function () {
                var e = P[0],
                  i = P[1],
                  u = P[2],
                  p = P[3],
                  y = i;
                (i.includes(d) &&
                  D.length > 0 &&
                  (y = i
                    .filter(function (e) {
                      return e !== d;
                    })
                    .concat(
                      D.map(
                        o("AdsMgmtCustomMetricsStringOperations")
                          .getColumnIDFromCMID,
                      ),
                    )),
                  p.forEach(function (e) {
                    e.setFieldsLoading(y, u, S, R);
                  }));
                var C = {
                  actionTypes: u,
                  apiFields: i,
                  attributionWindows: S,
                  breakdowns: c,
                  currentTimeRange: l,
                  comparisonTimeRange: g,
                  filter: [],
                  objectType: t,
                  sort: s,
                  timeRange: f || l,
                };
                (c.length === 0
                  ? (C.filter = o("AdsInsightsFilter").idIn(t, e))
                  : (C.ids = e),
                  c.length > 0 && C.ids && (C.summary = "defaultSummary"),
                  E &&
                    (C = o(
                      "AdsInsightsQueryUtil",
                    ).augmentInsightsQueryByCurrentView(C, E)));
                var b = n.getAccountInfo(L);
                b.accountID != null &&
                  (r("AdsInsightsInsightsEdgeDataDispatcher").fetch(
                    C,
                    { batchDispatch: _.batchDispatch },
                    b,
                    h,
                    m(a),
                  ),
                  (T.$AdsInsightsObjectStatsStore$p_2 = !1));
              };
            for (var P of x()) $();
            return I;
          }),
          (n.getGroupsByIDsSelector = r("adsCreateStoreThunkSelector")(
            n,
            n.getGroupsByIDs,
          )),
          (n.$AdsInsightsObjectStatsStore$p_1 = {}),
          (n.$AdsInsightsObjectStatsStore$p_2 = !1),
          (n.$AdsInsightsObjectStatsStore$p_3 = !1),
          (n.$AdsInsightsObjectStatsStore$p_4 = !1),
          (n.$AdsInsightsObjectStatsStore$p_5 = !1),
          (n.$AdsInsightsObjectStatsStore$p_6 = []),
          n
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.hasEVC = function () {
          return this.$AdsInsightsObjectStatsStore$p_4;
        }),
        (a.hasA2ACampaigns = function () {
          return this.$AdsInsightsObjectStatsStore$p_5;
        }),
        (a.multipleAttributionSettings = function () {
          return this.$AdsInsightsObjectStatsStore$p_6;
        }),
        (a.__getActionTypes = function () {
          return [
            o("AdsInsightsFetchInsightsEdgeSuccessActionFlux").actionType,
            o("AdsInsightsFetchInsightsEdgeSuccessBatchedActionFlux")
              .actionType,
            o("AdsInsightsFetchInsightsEdgeErrorActionFlux").actionType,
            o("AdsPERefreshTableViewActionFlux").actionType,
            o("AdsReportBuilderUpdateCustomMetricSuccessActionFlux").actionType,
          ];
        }),
        (a.getCacheKeys = function () {
          return new Set(Object.keys(this.$AdsInsightsObjectStatsStore$p_1));
        }),
        (a.get_LEGACY = function (t, n, r, o, a) {
          a === void 0 && (a = ["unknown"]);
          var e = this.getGroup(
            t,
            n,
            null,
            [],
            r,
            [],
            o,
            [].concat(a, [i.id + ".get"]),
          );
          return e.getUnitRowByFields_LEGACY(r);
        }),
        (a.get = function (t, n, r, o, a, l) {
          var e;
          a === void 0 && (a = ["unknown"]);
          var s = this.getGroup(
            t,
            n,
            null,
            [],
            r,
            [],
            o,
            [].concat(a, [i.id + ".get"]),
            void 0,
            void 0,
            {
              batchDispatch: !1,
              forceAsync: l == null ? void 0 : l.forceAsync,
              isSummaryRow: !1,
              refetchOnError: !1,
              useAccountInsightsPreloader:
                (e = l == null ? void 0 : l.useAccountInsightsPreloader) != null
                  ? e
                  : !1,
            },
          );
          return s.getUnitRowByFields(r);
        }),
        (a.getAccountInfo = function (t) {
          return {
            accountID:
              r("AdsAccountStore").getSelectedAccountID() ||
              (t == null ? void 0 : t.account_id),
            currencyCode: t == null ? void 0 : t.currency,
            timezoneID: t == null ? void 0 : t.timezone_id,
          };
        }),
        (a.getGroupCached = function (t, n, r, o, a) {
          var e = this.$AdsInsightsObjectStatsStore$p_7(t, n, r, o, a);
          return this.$AdsInsightsObjectStatsStore$p_8(e, t, n, r, o, a);
        }),
        (a.$AdsInsightsObjectStatsStore$p_8 = function (t, n, o, a, i, l) {
          return (
            this.$AdsInsightsObjectStatsStore$p_1[t] ||
              ((this.$AdsInsightsObjectStatsStore$p_1[t] = r(
                "AdsInsightsObjectStatsGroup",
              ).create(i)),
              (this.$AdsInsightsObjectStatsStore$p_1[t].cacheKey = t),
              (this.$AdsInsightsObjectStatsStore$p_1[t].filter = n),
              (this.$AdsInsightsObjectStatsStore$p_1[t].timeRange = o)),
            this.$AdsInsightsObjectStatsStore$p_1[t]
          );
        }),
        (a.$AdsInsightsObjectStatsStore$p_7 = function (t, n, r, a, i) {
          var e = r || {},
            l = e.comparisonRange,
            s = e.currentRange;
          return [
            o("AdsInsightsFilterSerializationUtil").serialize(t),
            n.toString(),
            (s || n).toString(),
            l ? l.toString() : "",
            i &&
            o("AdsInsightsInsightsEdgeDataLoader").hasBreakdownMaxPageSize(a)
              ? o("AdsInsightsSortUtil").toKey(i)
              : "",
            !0,
          ]
            .concat(a)
            .join(",");
        }),
        (a.getInterval = function (t, n) {
          var e = this.getGroupCached(t, n, null, []);
          return e.getInterval();
        }),
        (a.__onDispatch = function (t) {
          var e = this,
            n = t.action;
          switch (
            (r("QPLSharing").emitPoint("LOAD_TABLE", "STORE_DISPATCH_START"),
            n.type)
          ) {
            case o("AdsInsightsFetchInsightsEdgeSuccessActionFlux")
              .actionType: {
              var a = r("justknobx")._("3007");
              (a &&
                r("QPLSharing").emitPoint(
                  "LOAD_TABLE",
                  "INSIGHTS_STORE_PROCESS_START",
                ),
                this.$AdsInsightsObjectStatsStore$p_9(
                  n.query,
                  n.insightsEdge,
                  n.customMetricsIDs,
                ),
                a &&
                  r("QPLSharing").emitPoint(
                    "LOAD_TABLE",
                    "INSIGHTS_STORE_PROCESS_END",
                  ),
                r("QPLSharing").emitPoint("LOAD_TABLE", "STORE_EMIT_CHANGE"),
                this.__emitChange(),
                a &&
                  r("QPLSharing").emitPoint(
                    "LOAD_TABLE",
                    "INSIGHTS_STORE_EMIT_CHANGE_END",
                  ));
              break;
            }
            case o("AdsInsightsFetchInsightsEdgeSuccessBatchedActionFlux")
              .actionType:
              var i = n.batch;
              (i.forEach(function (t) {
                e.$AdsInsightsObjectStatsStore$p_9(
                  t.query,
                  t.insightsEdge,
                  t.customMetricsIDs,
                );
              }),
                r("QPLSharing").emitPoint("LOAD_TABLE", "STORE_EMIT_CHANGE"),
                this.__emitChange());
              break;
            case o("AdsInsightsFetchInsightsEdgeErrorActionFlux").actionType:
              (this.$AdsInsightsObjectStatsStore$p_10(n.query, n.error),
                this.__emitChange());
              break;
            case o("AdsPERefreshTableViewActionFlux").actionType:
              ((this.$AdsInsightsObjectStatsStore$p_1 = {}),
                this.__emitChange());
              break;
            case o("AdsReportBuilderUpdateCustomMetricSuccessActionFlux")
              .actionType:
              var l = r("AdsInsightsColumnPresetStoreUtil").resolve(
                  r("AdsPEColumnsStore").get(),
                ),
                s = l.ids;
              m(s).includes(n.id) &&
                ((this.$AdsInsightsObjectStatsStore$p_2 = !0),
                (this.$AdsInsightsObjectStatsStore$p_3 = !0),
                this.__emitChange());
              break;
          }
        }),
        (a.$AdsInsightsObjectStatsStore$p_10 = function (t, n) {
          var e = this,
            a = t.actionTypes,
            i = t.apiFields,
            l = t.attributionWindows,
            u = t.breakdowns,
            c = t.comparisonTimeRange,
            d = t.currentTimeRange,
            m = t.filter,
            p = t.objectType,
            _ = t.sort,
            f = t.summary,
            g = t.timeRange,
            h = { comparisonRange: c, currentRange: d },
            y = o("AdsInsightsSortUtil").getBreakdownSort(_, u);
          if (p === r("AdsObjectTypes").ACCOUNT)
            (this.$AdsInsightsObjectStatsStore$p_11(m, g, h, u, l, i, a, y, n),
              f === "defaultSummary" &&
                this.$AdsInsightsObjectStatsStore$p_11(
                  m,
                  g,
                  h,
                  [],
                  l,
                  i,
                  a,
                  [],
                  n,
                ));
          else {
            var C = [];
            if (t.ids) C = t.ids;
            else {
              var b = o("AdsInsightsFilter").extractIDClause(m),
                v = b.idClause,
                S = b.nonIDClauses,
                R = o("AdsInsightsFilter").splitFieldWrapper(v.field),
                L = R[0];
              ((C = v.value),
                S.length === 0 || s(0, 1004),
                p === L || s(0, 1005));
            }
            C.forEach(function (t) {
              (e.$AdsInsightsObjectStatsStore$p_11(
                o("AdsInsightsFilter").idIn(p, [t]),
                g,
                h,
                u,
                l,
                i,
                a,
                y,
                n,
              ),
                f === "defaultSummary" &&
                  e.$AdsInsightsObjectStatsStore$p_11(
                    o("AdsInsightsFilter").idIn(p, [t]),
                    g,
                    h,
                    [],
                    l,
                    i,
                    a,
                    [],
                    n,
                  ));
            });
          }
        }),
        (a.$AdsInsightsObjectStatsStore$p_11 = function (
          t,
          n,
          o,
          a,
          i,
          l,
          s,
          u,
          c,
        ) {
          var e = this.$AdsInsightsObjectStatsStore$p_7(t, n, o, a, u);
          if (
            !(!this.$AdsInsightsObjectStatsStore$p_1[e] && r("gkx")("6103"))
          ) {
            var d = this.getGroupCached(t, n, o, a, u);
            d.setFieldsError(l, s, i, u, c);
          }
        }),
        (a.$AdsInsightsObjectStatsStore$p_9 = function (t, n, a) {
          var e = this,
            i = t.actionTypes,
            l = t.apiFields,
            u = t.attributionWindows,
            c = t.breakdowns,
            d = t.comparisonTimeRange,
            m = t.currentTimeRange,
            p = t.filter,
            _ = t.ids,
            f = t.objectType,
            g = t.sort,
            h = t.summary,
            y = t.timeRange,
            C = o("AdsInsightsSortUtil").getBreakdownSort(g, c),
            b = n.data || [],
            v = { comparisonRange: d, currentRange: m };
          if (f === r("AdsObjectTypes").ACCOUNT)
            (this.$AdsInsightsObjectStatsStore$p_12(
              p,
              y,
              v,
              c,
              u,
              l,
              i,
              C,
              b,
              a,
            ),
              h === "defaultSummary" &&
                this.$AdsInsightsObjectStatsStore$p_12(
                  p,
                  y,
                  v,
                  [],
                  u,
                  l,
                  i,
                  [],
                  [n.summary],
                  a,
                ));
          else if (_)
            _.forEach(function (t) {
              var s = r("getByPath")(n, [t, "data"], []);
              if (
                (e.$AdsInsightsObjectStatsStore$p_12(
                  o("AdsInsightsFilter").idIn(f, [t]),
                  y,
                  v,
                  c,
                  u,
                  l,
                  i,
                  C,
                  s,
                  a,
                ),
                h === "defaultSummary" && n[t])
              ) {
                var d = r("getByPath")(n, [t, "summary"]);
                e.$AdsInsightsObjectStatsStore$p_12(
                  o("AdsInsightsFilter").idIn(f, [t]),
                  y,
                  v,
                  [],
                  u,
                  l,
                  i,
                  [],
                  d ? [d] : [],
                  a,
                );
              }
            });
          else {
            var S = o("AdsInsightsFilter").extractIDClause(p),
              R = S.idClause,
              L = S.nonIDClauses,
              E = o("AdsInsightsFilter").splitFieldWrapper(R.field),
              k = E[0],
              I = R.value;
            (L.length === 0 || s(0, 1004), f === k || s(0, 1005));
            var T = {};
            (I.forEach(function (e) {
              return (T[e] = []);
            }),
              b.forEach(function (e) {
                var t = r("AdsObjectUtils").toInsightsAPIFieldOrNull(f),
                  n = e[t];
                (n || s(0, 1006), T[n] && T[n].push(e));
              }),
              Object.keys(T).forEach(function (t) {
                return e.$AdsInsightsObjectStatsStore$p_12(
                  o("AdsInsightsFilter").idIn(f, [t]),
                  y,
                  v,
                  c,
                  u,
                  l,
                  i,
                  C,
                  T[t],
                  a,
                );
              }));
          }
        }),
        (a.$AdsInsightsObjectStatsStore$p_12 = function (
          t,
          n,
          a,
          i,
          l,
          s,
          d,
          m,
          p,
          f,
        ) {
          var e = this;
          (this.$AdsInsightsObjectStatsStore$p_4 ||
            p.forEach(function (t) {
              t.attribution_setting &&
                o("AdsInsightsEVCUtils").checkEvcAttributionSetting(
                  t.attribution_setting,
                ) &&
                (e.$AdsInsightsObjectStatsStore$p_4 = !0);
            }),
            o(
              "AdsMgmt2026ActionToActionExperimentUtils",
            ).getIsA2AAccountLevelCheckEnabled() &&
              !this.$AdsInsightsObjectStatsStore$p_5 &&
              p.forEach(function (t) {
                t.attribution_setting &&
                  _(t.attribution_setting) &&
                  (e.$AdsInsightsObjectStatsStore$p_5 = !0);
              }));
          var g = p
            .filter(function (e) {
              return e.adset_id != null;
            })
            .map(function (e) {
              return e.attribution_setting;
            });
          this.$AdsInsightsObjectStatsStore$p_6 = []
            .concat(this.$AdsInsightsObjectStatsStore$p_6, g)
            .filter(function (e, t, n) {
              return e != null && n.indexOf(e) === t;
            });
          var h = r("AdsInsightsBreakdowns").splitActionBreakdown(i),
            y = h.actionBreakdown,
            C = h.nonActionBreakdowns,
            b = p;
          r("justknobx")._("5021") &&
            i.some(function (e) {
              return r("AdsInsightsBreakdowns").isAttributionSettingBreakdown(
                e,
              );
            }) &&
            p.length === 1 &&
            o(
              "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
            ).shouldAccountSeeAttributionSettingBreakdownWithoutExposure() &&
            ((c || (c = r("areEqual")))(i, [
              o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
                .ATTRIBUTION_SETTING,
            ])
              ? (b = o(
                  "AdsInsightsAttributionSettingBreakdownUtils",
                ).getAttributionSettingBreakdownRows(p))
              : (c || (c = r("areEqual")))(i, [
                  o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
                    .CONVERSION_COUNT,
                ]) &&
                (b = o(
                  "AdsInsightsAttributionSettingBreakdownUtils",
                ).getConversionCountBreakdownRows(p)));
          var v = r("flatMapArray")(b, function (e) {
              if (
                e == null ||
                (e[r("AdsInsightsField").IMPRESSIONS] === "0" &&
                  e[r("AdsInsightsField").SPEND] === 0)
              )
                return [];
              var t = r("adsInsightsObjectStatsUtilFlattenActionBreakdown")(
                  C,
                  y,
                  e,
                ),
                n = t.rows,
                o = t.summaryRow;
              return y && !(u || (u = r("isEmpty")))(C)
                ? [o].concat(n)
                : y
                  ? n
                  : [o];
            }),
            S = this.$AdsInsightsObjectStatsStore$p_7(t, n, a, i, m);
          if (
            !(!this.$AdsInsightsObjectStatsStore$p_1[S] && r("gkx")("6103"))
          ) {
            var R = this.$AdsInsightsObjectStatsStore$p_8(S, t, n, a, i, m);
            (R.setFieldsLoaded(s, d, l, f), R.merge(v, m));
          }
        }),
        n
      );
    })(r("FluxStore"));
    f.__moduleID = i.id;
    var g = new f();
    l.default = g;
  },
  98,
);
