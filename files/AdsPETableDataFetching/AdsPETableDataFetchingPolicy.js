__d(
  "AdsPETableDataFetchingPolicy",
  [
    "ActionFilterUtils",
    "AdsAccountStore",
    "AdsAdgroupFieldSetMap",
    "AdsAdgroupLiveStoreDataFields.experimental",
    "AdsDynamicAdgroupDataManagerFieldsMap.experimental",
    "AdsDynamicCampaignDataManagerFieldsMap",
    "AdsDynamicCampaignGroupDataManagerFieldsMapV2.experimental",
    "AdsGenericFilter",
    "AdsGenericFilterSet",
    "AdsInsightsBreakdowns",
    "AdsInsightsBreakdownsDataFetchingConfig.experimental",
    "AdsInsightsDataFetchingConfig.experimental",
    "AdsInsightsQueryFieldUtil",
    "AdsInsightsSuggestionsStore",
    "AdsInsightsTableComputedPropertiesStore",
    "AdsInsightsTableDataFetchingPolicyHelper",
    "AdsMgmt2026H1ExperimentUtils",
    "AdsMgmt2026H1LBRExperimentUtils",
    "AdsMgmtAdgroupDynamicStore",
    "AdsMgmtCampaignDynamicStore",
    "AdsMgmtCampaignGroupDynamicStore",
    "AdsMgmtQPLLogger",
    "AdsObjectLevelToFragmentStore",
    "AdsObjectTypeUtils",
    "AdsObjectTypes",
    "AdsPEAdObjectDataFetchingUtils",
    "AdsPEAnomalyDetectionFilterUtil",
    "AdsPEColumnsStore",
    "AdsPEFilterFields",
    "AdsPEGroupConstants",
    "Bootloader",
    "L1LiveReverseInteropStore",
    "LoadObjectMapBatchingQueueNames",
    "QPLSharing",
    "adsAdgroupSelector_LEGACY",
    "adsCampaignGroupSelector_LEGACY",
    "adsCampaignSelector_LEGACY",
    "adsMgmtLoadIDRequestViewSpecParamsSelector",
    "adsPEGetViewportVisibleIDs",
    "adsUEditorSlowSelectorsLogging",
    "gkx",
    "isEmpty",
    "partitionArray",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsMgmtCampaignGroupDynamicStore").toFluxStore(),
      u = r("AdsMgmtCampaignDynamicStore").toFluxStore(),
      c = r("AdsMgmtAdgroupDynamicStore").toFluxStore(),
      d = o("AdsInsightsQueryFieldUtil").toAPIFieldsMap(
        r("AdsAdgroupLiveStoreDataFields.experimental").cheapFields,
        !0,
      ),
      m = o("AdsInsightsQueryFieldUtil").normalizeFields(d);
    function p(t, n, o, a, i, l) {
      if (
        (i === void 0 && (i = !1),
        r("QPLSharing").emitPoint(
          "LOAD_TABLE",
          "TABLE_DATA_FETCHING_POLICY_FETCH_BODY",
          { data: { string: { viewport_change_source: l } } },
        ),
        t.objectType !== r("AdsObjectTypes").ACCOUNT)
      ) {
        var s = r("AdsInsightsBreakdowns").splitActionBreakdown(t.breakdowns),
          u = s.actionBreakdown,
          c = s.nonActionBreakdowns;
        (u && !(e || (e = r("isEmpty")))(c)
          ? b(t.set({ breakdowns: c }), n, o, i, a)
          : (e || (e = r("isEmpty")))(c) ||
            b(t.set({ breakdowns: [] }), n, o, i, a),
          b(t, n, o, i, a),
          R(t, n, i, a));
      }
    }
    function _(e, t) {
      var n = h(e),
        a = y(e),
        i = C(e),
        l = r("AdsAccountStore").getSelectedAccount().getValue();
      if (n != null && l != null) {
        var s = e.filter;
        o("ActionFilterUtils").isRecommendationFilter(n)
          ? r("Bootloader").loadModules(
              ["adsMgmtRecommendationsFilterSelector"],
              function (r) {
                var a = r({ adAccount: l, filterSet: n });
                a.map(function (n) {
                  var r = [];
                  (n.map(function (e) {
                    var t;
                    r = (t = r).concat.apply(
                      t,
                      o("ActionFilterUtils").generateAdditionalActionFilterSpec(
                        e,
                      ),
                    );
                  }),
                    r.length > 0 &&
                      (s = [].concat(
                        o("ActionFilterUtils").generateFilterSpec(e.filter),
                        r,
                      )),
                    f(e, s, t));
                });
              },
              "AdsPETableDataFetchingPolicy",
            )
          : f(e, null, t);
      } else if (a != null && l != null) {
        var u = e.filter;
        r("Bootloader").loadModules(
          ["adsMgmtScaleGoodCampaignsFilterSelector"],
          function (n) {
            var r = n({ adAccount: l, filterSet: a });
            r.map(function (n) {
              var r = [];
              (n.map(function (e) {
                var t;
                r = (t = r).concat.apply(
                  t,
                  o(
                    "ActionFilterUtils",
                  ).generateAdditionalHighPerformingFilterSpec(e),
                );
              }),
                r.length > 0 &&
                  (u = [].concat(
                    o("ActionFilterUtils").generateFilterSpec(e.filter),
                    r,
                  )),
                f(e, u, t));
            });
          },
          "AdsPETableDataFetchingPolicy",
        );
      } else if (i != null && l != null) {
        var c = e.filter,
          d = r("adsMgmtLoadIDRequestViewSpecParamsSelector")(),
          m = d.dateTimeRange;
        r("Bootloader").loadModules(
          ["AdsAnomalyDetectionFilterCampaignsGraphQLDataLoader"],
          function (n) {
            var a = {
              since: m.start.substring(0, 10),
              until: m.end.substring(0, 10),
            };
            if (l == null || l.account_id == null) {
              f(e, c, t);
              return;
            }
            n.load(l.account_id, i.values[0].value, a)
              .then(function (n) {
                if (i && n !== null) {
                  var a = new (r("AdsGenericFilterSet"))([
                      new (r("AdsGenericFilter"))(
                        r("AdsPEFilterFields").SEARCH_BY_CAMPAIGN_GROUP_IDS,
                        i.values[0].operator,
                        n,
                      ),
                    ]),
                    l =
                      o(
                        "ActionFilterUtils",
                      ).generateAdditionalAnomalyFilterSpec(a);
                  (l.length > 0 &&
                    (c = [].concat(
                      o(
                        "AdsPEAnomalyDetectionFilterUtil",
                      ).generateAnomalyFilterSpec(e.filter),
                      l,
                    )),
                    f(e, c, t));
                } else f(e, c, t);
              })
              .catch(function (n) {
                f(e, c, t);
              });
          },
          "AdsPETableDataFetchingPolicy",
        );
      } else f(e, null, t);
    }
    function f(e, t, n) {
      var a = "single";
      if (
        o("AdsMgmt2026H1LBRExperimentUtils").getIsAccountInViewportSummaryRow()
      ) {
        var l = r("AdsInsightsTableComputedPropertiesStore").getStatsFields(e),
          s = new Set(
            o("AdsInsightsTableDataFetchingPolicyHelper").getVisibleStatsFields(
              e,
              n,
            ),
          ),
          u = r("partitionArray")(l, function (e) {
            return s.has(e);
          }),
          c = u[0],
          d = u[1];
        (o("AdsInsightsTableDataFetchingPolicyHelper").fetchFooterCells(
          e,
          c,
          [i.id + ".fetchFooterViewport"],
          t,
        ),
          d.length > 0
            ? (o("AdsInsightsTableDataFetchingPolicyHelper").fetchFooterCells(
                e,
                d,
                [i.id + ".fetchFooterDeferred"],
                t,
              ),
              (a = "viewport_split_deferred"))
            : (a = "viewport_split"));
      } else
        o("AdsInsightsTableDataFetchingPolicyHelper").fetchFooterCells(
          e,
          r("AdsInsightsTableComputedPropertiesStore").getStatsFields(e),
          [i.id + ".fetchFooter"],
          t,
        );
      if (
        (o("AdsMgmtQPLLogger").addPoint(
          r("qpl")._(41484289, "3972"),
          "TABLE_DATA_FETCHING_POLICY_FETCH_FOOTER",
        ),
        r("QPLSharing").emitPoint(
          "LOAD_TABLE",
          "TABLE_DATA_FETCHING_POLICY_FETCH_FOOTER",
          { data: { string: { fetch_path: a, object_type: e.objectType } } },
        ),
        e.groupingDimension != null &&
          o(
            "AdsMgmt2026H1ExperimentUtils",
          ).getIsAccountInCAI2026H1GroupingWithoutExposure())
      ) {
        o("AdsInsightsTableDataFetchingPolicyHelper").fetchGroupHeaderCells(
          e,
          r("AdsInsightsTableComputedPropertiesStore").getStatsFields(e),
          [i.id + ".fetchGroupHeaders"],
          n,
        );
        var m = e.groupingDimension,
          p = e.groupObjectCounts,
          _ = e.timeRange;
        if (
          m != null &&
          o("AdsPEGroupConstants").isDynamicGroupingDimension(m) &&
          p != null
        ) {
          var f,
            g = Object.keys(p),
            h = new Set((f = e.expandedGroupKeys) != null ? f : []),
            y = g.filter(function (e) {
              return !h.has(e);
            }),
            C = o(
              "AdsInsightsTableDataFetchingPolicyHelper",
            ).getVisibleGroupKeys(g, p, n, y),
            b = C.filter(function (e) {
              return p[e] == null;
            });
          if (b.length > 0) {
            var v = r("AdsAccountStore").getSelectedAccountID(),
              S =
                e.objectType === r("AdsObjectTypes").CAMPAIGN_GROUP
                  ? "campaign"
                  : e.objectType === r("AdsObjectTypes").CAMPAIGN
                    ? "ad_set"
                    : null;
            v != null &&
              S != null &&
              r("Bootloader").loadModules(
                [
                  "AdsInsightsGroupCountDataManager",
                  "AdsPEFilterUIStateSelectors",
                  "adsMgmtFilterAdjustedForParentSelectionForCurrentLevelSelector",
                ],
                function (e, t, n) {
                  var r,
                    o = (r = n()) != null ? r : t.getFilterSet();
                  e.loadDeferredGroupCounts(b, m, v, S, o, _);
                },
                "AdsPETableDataFetchingPolicy",
              );
          }
        }
      }
    }
    function g(e, t, n) {
      (r("QPLSharing").emitPoint(
        "LOAD_TABLE",
        "TABLE_DATA_FETCHING_POLICY_POST_FETCH_BODY",
      ),
        r("AdsInsightsSuggestionsStore").getColumns(),
        e.objectType !== r("AdsObjectTypes").ACCOUNT &&
          L(e, t, n, !0, "postfetchBody"));
    }
    function h(e) {
      var t = r("AdsAccountStore").getSelectedAccount().getValue();
      if (
        t == null ||
        (e.objectType !== r("AdsObjectTypes").CAMPAIGN_GROUP &&
          e.objectType !== r("AdsObjectTypes").CAMPAIGN &&
          e.objectType !== r("AdsObjectTypes").ADGROUP)
      )
        return null;
      var n = e.filter,
        o = [];
      return (
        n.forEach(function (e) {
          var t;
          e.operator === "ANY" &&
            (t = e.value) != null &&
            t.includes != null &&
            t.includes(4) &&
            (e.field === "campaign_group.action_types"
              ? o.push(
                  babelHelpers.extends({}, e, {
                    type: "CAMPAIGN_GROUP_ACTION_TYPES",
                  }),
                )
              : e.field === "campaign.action_types"
                ? o.push(
                    babelHelpers.extends({}, e, {
                      type: "CAMPAIGN_ACTION_TYPES",
                    }),
                  )
                : e.field === "adgroup.action_types" &&
                  o.push(
                    babelHelpers.extends({}, e, {
                      type: "ADGROUP_ACTION_TYPES",
                    }),
                  ));
        }),
        o.length === 0
          ? null
          : new (r("AdsGenericFilterSet"))(
              o.map(function (e) {
                return new (r("AdsGenericFilter"))(
                  r("AdsPEFilterFields")[e.type],
                  e.operator,
                  e.value,
                );
              }),
            )
      );
    }
    function y(e) {
      var t = r("AdsAccountStore").getSelectedAccount().getValue();
      if (t == null || e.objectType !== r("AdsObjectTypes").CAMPAIGN_GROUP)
        return null;
      var n = e.filter,
        o = [];
      return (
        n.forEach(function (e) {
          e.operator === "IN" &&
            e.field === "campaign_group.scale_good_campaign" &&
            o.push(
              babelHelpers.extends({}, e, { type: "SCALE_GOOD_CAMPAIGN" }),
            );
        }),
        o.length === 0
          ? null
          : new (r("AdsGenericFilterSet"))(
              o.map(function (e) {
                return new (r("AdsGenericFilter"))(
                  r("AdsPEFilterFields")[e.type],
                  e.operator,
                  e.value,
                );
              }),
            )
      );
    }
    function C(e) {
      var t = r("AdsAccountStore").getSelectedAccount().getValue();
      if (t == null || e.objectType !== r("AdsObjectTypes").CAMPAIGN_GROUP)
        return null;
      var n = e.filter,
        o = [];
      return (
        n.forEach(function (e) {
          e.field.endsWith(".anomaly_detection") &&
            o.push(babelHelpers.extends({}, e, { type: "ANOMALY" }));
        }),
        o.length === 0
          ? null
          : new (r("AdsGenericFilterSet"))(
              o.map(function (e) {
                return new (r("AdsGenericFilter"))(
                  r("AdsPEFilterFields")[e.type],
                  e.operator,
                  e.value,
                );
              }),
            )
      );
    }
    function b(e, t, n, o, a) {
      o === void 0 && (o = !1);
      var i = r("adsPEGetViewportVisibleIDs")(e.breakdowns, t.rowInterval, n);
      if (e.breakdowns.length === 0) L(e, t, i, o, a);
      else {
        var l = i;
        (v(e, t, l, a), L(e, t, l, o, a));
      }
    }
    function v(e, t, n, o) {
      if (e.breakdowns.length > 0 && S(t)) {
        var a = r("AdsInsightsBreakdownsDataFetchingConfig.experimental")[
          e.breakdowns.join(",")
        ];
        (a ||
          (a = Math.min.apply(
            null,
            e.breakdowns.map(function (e) {
              var t = r("AdsInsightsBreakdownsDataFetchingConfig.experimental")[
                e
              ];
              return (
                t ||
                r("AdsInsightsDataFetchingConfig.experimental")
                  .first_page_fetch_count
              );
            }),
          )),
          a < t.rowInterval[1] &&
            (!r("gkx")("24765") || a < n.length) &&
            L(e, t, n.slice(0, a), !1, o));
      }
    }
    function S(e) {
      return e.rowInterval[0] === 0;
    }
    function R(e, t, n, r) {
      if (
        o(
          "AdsMgmt2026H1ExperimentUtils",
        ).getIsAccountInCAI2026H1GroupingWithoutExposure()
      ) {
        var a = e.expandedGroupKeys,
          i = e.groupIDsByKey,
          l = e.groupingDimension,
          s = e.groupObjectCounts,
          u = e.groupPageIndex;
        if (
          !(
            l == null ||
            !o("AdsPEGroupConstants").isDynamicGroupingDimension(l) ||
            s == null ||
            i == null
          )
        ) {
          var c = l === o("AdsPEGroupConstants").BUDGET_POOL_GROUPING_DIMENSION,
            d = a != null ? a : [];
          if (!(d.length === 0 && !c)) {
            var m = new Set(d),
              p = Object.keys(s),
              _ = p.filter(function (e) {
                return !m.has(e);
              }),
              f = o(
                "AdsInsightsTableDataFetchingPolicyHelper",
              ).getVisibleGroupKeys(p, s, t, _),
              g = [];
            for (var h of f)
              if (!(!m.has(h) && !c)) {
                var y = i[h];
                if (!(y == null || y.length === 0)) {
                  var C = y;
                  if (
                    d.length === 1 &&
                    h === d[0] &&
                    y.length > o("AdsPEGroupConstants").GROUP_EXPAND_LIMIT
                  ) {
                    var b =
                      (u != null ? u : 0) *
                      o("AdsPEGroupConstants").GROUP_EXPAND_LIMIT;
                    C = y.slice(
                      b,
                      b + o("AdsPEGroupConstants").GROUP_EXPAND_LIMIT,
                    );
                  }
                  g.push.apply(g, C);
                }
              }
            g.length !== 0 && L(e, t, g, n, r);
          }
        }
      }
    }
    function L(e, t, n, a, l) {
      var d = o("AdsObjectTypeUtils").toObjectLevel(e.objectType);
      if (d) {
        var p = r("AdsObjectLevelToFragmentStore").get(d),
          _ = n.filter(function (e) {
            return !(p != null && p.isNew(e));
          });
        o(
          "adsUEditorSlowSelectorsLogging",
        ).checkAndLogDynamicObjectsOverfetching(_, d);
        var f = r("AdsPEColumnsStore").getResolved(),
          g = l === "postfetchBody",
          h = l === "prefetch",
          y = {
            queueName: g
              ? r("LoadObjectMapBatchingQueueNames").POST_FETCH
              : r("LoadObjectMapBatchingQueueNames").MAIN,
          };
        switch ((y != null && Object.keys(y).length === 0 && (y = void 0), d)) {
          case "campaign": {
            r("QPLSharing").emitPoint(
              "LOAD_TABLE",
              "TABLE_DATA_FETCHING_POLICY_FETCH_BODY_CAMPAIGN_GROUP",
            );
            var C = g
              ? Object.keys(
                  r(
                    "AdsDynamicCampaignGroupDataManagerFieldsMapV2.experimental",
                  ).fieldsMap,
                )
              : o("AdsPEAdObjectDataFetchingUtils").getAdCampaignGroupFields(
                  f.ids,
                  e,
                );
            g &&
              !C.includes("optimal_delivery_growth_opportunities") &&
              C.push("optimal_delivery_growth_opportunities");
            var b = Object.fromEntries(
              C.map(function (e) {
                return [e, null];
              }),
            );
            _.forEach(function (e) {
              (s.getState().getFields(e, b, y),
                r("adsCampaignGroupSelector_LEGACY")(e));
            });
            break;
          }
          case "ad_set": {
            r("QPLSharing").emitPoint(
              "LOAD_TABLE",
              "TABLE_DATA_FETCHING_POLICY_FETCH_BODY_CAMPAIGN",
            );
            var v = g
                ? Object.keys(
                    r("AdsDynamicCampaignDataManagerFieldsMap").fieldsMap,
                  )
                : o("AdsPEAdObjectDataFetchingUtils").getAdCampaignFields(
                    f.ids,
                    e,
                  ),
              S = Object.fromEntries(
                v.map(function (e) {
                  return [e, null];
                }),
              );
            _.forEach(function (e) {
              (u.getState().getFields(e, S, y),
                o("adsCampaignSelector_LEGACY").adsCampaignSelector_LEGACY(e));
            });
            break;
          }
          case "ad": {
            r("QPLSharing").emitPoint(
              "LOAD_TABLE",
              "TABLE_DATA_FETCHING_POLICY_FETCH_BODY_ADGROUP",
            );
            var R = g
                ? Object.keys(
                    r("AdsDynamicAdgroupDataManagerFieldsMap.experimental")
                      .fieldsMap,
                  )
                : o("AdsPEAdObjectDataFetchingUtils").getAdgroupFields(
                    f.ids,
                    e,
                  ),
              L = Object.fromEntries(
                R.map(function (e) {
                  return [e, null];
                }),
              );
            _.forEach(function (e) {
              var t = g || h ? m : r("AdsAdgroupFieldSetMap").cheap_tier1;
              (r("L1LiveReverseInteropStore").getByFields(e, t, y),
                c.getState().getFields(e, L, y),
                r("adsAdgroupSelector_LEGACY")(e));
            });
            break;
          }
        }
        r("QPLSharing").emitPoint(
          "LOAD_TABLE",
          "TABLE_DATA_FETCHING_POLICY_FETCH_BODY_INSIGHTS",
        );
        var E =
          r("AdsInsightsDataFetchingConfig.experimental")
            .objects_per_fetch_on_scroll || 10;
        o("AdsInsightsTableDataFetchingPolicyHelper").fetchBodyStatsCellsForIDs(
          _,
          e,
          t,
          { batchDispatch: a, objectsPerFetch: E },
          [i.id + "." + l + ".stats"],
        );
      }
    }
    ((l.fetchBody = p), (l.fetchFooter = _), (l.postfetchBody = g));
  },
  98,
);
