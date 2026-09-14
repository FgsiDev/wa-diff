__d(
  "AdsInsightsTableDataFetchingPolicyHelper",
  [
    "AdsAccountStore",
    "AdsGenericFilter",
    "AdsGenericFilterSet",
    "AdsInsightsBreakdowns",
    "AdsInsightsBudgetPoolGroupingData",
    "AdsInsightsColumnUtil",
    "AdsInsightsCompositeGroupKeyUtils",
    "AdsInsightsField",
    "AdsInsightsFields",
    "AdsInsightsFilter",
    "AdsInsightsGroupDimensionConfigJSResource",
    "AdsInsightsGroupDimensionConfigTypes",
    "AdsInsightsGroupHeaderRowCellJSResource",
    "AdsInsightsObjectStatsStore",
    "AdsInsightsPortfolioGroupingData",
    "AdsInsightsSortUtil",
    "AdsInsightsTimeBucketFilterBuilder",
    "AdsInsightsViewportStatusStoreUtil",
    "AdsMgmt2026H1ExperimentUtils",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "AdsPEFilterFields",
    "AdsPEFilterSetUtil",
    "AdsPEGroupConstants",
    "cr:10339",
    "createObjectFrom",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("AdsAccountStore").getSelectedAccountID() || "",
        t = r("AdsAccountStore").getSelectedAccount().getValue();
      return {
        accountID: e,
        currencyCode: t ? t.currency : "USD",
        timezoneID: r("AdsAccountStore").getTimezoneID(),
      };
    }
    function s(e, t) {
      var n = r("AdsInsightsViewportStatusStoreUtil").computeVisibleColumns(
        e,
        t,
      ).visibleColumns;
      return o("AdsInsightsColumnUtil").getFieldsForDerivedColumns(
        Array.from(n),
      );
    }
    function u(e, t) {
      var n = e.benchmarkDerivedColumnIDs;
      if (n) {
        var a = r("createObjectFrom")(
            o("AdsInsightsColumnUtil").getFieldsForDerivedColumns(n.toArray()),
          ),
          i = s(e, t);
        return i.filter(function (e) {
          return (
            a[
              o("AdsInsightsFields").getFieldWithDefaultAttributionWindow(e)
            ] === !0
          );
        });
      } else return [];
    }
    function c(t, a, i, l, c) {
      var d = a.comparisonTimeRange,
        m = a.sort,
        p = a.timeRange,
        _ =
          a.navSection === "CREATIVES"
            ? a.breakdowns.filter(function (e) {
                return !r("AdsInsightsBreakdowns").isObjectBreakdown(e);
              })
            : a.breakdowns,
        f = a.objectType,
        g = s(a, i),
        h = u(a, i);
      n("cr:10339") != null &&
        g.includes(r("AdsInsightsField").RESULTS) &&
        g.push.apply(g, n("cr:10339")());
      var y = { comparisonRange: d, currentRange: p };
      if (l.objectsPerFetch === 1)
        for (var C of t)
          (r("AdsInsightsObjectStatsStore").getGroup(
            o("AdsInsightsFilter").idIn(f, [C]),
            p,
            y,
            _,
            g,
            o("AdsInsightsSortUtil").getBreakdownSort(m, _),
            e(),
            c,
            _.length > 0 ? "defaultSummary" : "none",
            r("AdsObjectTypes").ACCOUNT,
            { batchDispatch: !1, refetchOnError: !0 },
          ),
            d &&
              h.length &&
              r("AdsInsightsObjectStatsStore").getGroup(
                o("AdsInsightsFilter").idIn(f, [C]),
                d,
                y,
                _,
                h,
                o("AdsInsightsSortUtil").getBreakdownSort(m, _),
                e(),
                [].concat(c, ["benchmark"]),
                _.length > 0 ? "defaultSummary" : "none",
                r("AdsObjectTypes").ACCOUNT,
                { batchDispatch: !1, refetchOnError: !0 },
              ));
      else
        (r("AdsInsightsObjectStatsStore").getGroupsByIDs(
          t,
          f,
          g,
          p,
          m,
          _,
          {
            batchDispatch: l.batchDispatch,
            objectsPerFetch: l.objectsPerFetch,
            refetchOnError: !0,
          },
          p,
          d,
          c,
        ),
          d &&
            h.length &&
            r("AdsInsightsObjectStatsStore").getGroupsByIDs(
              t,
              f,
              h,
              p,
              m,
              _,
              {
                batchDispatch: !1,
                objectsPerFetch: l.objectsPerFetch,
                refetchOnError: !0,
              },
              d,
              d,
              [].concat(c, ["benchmark"]),
            ));
    }
    function d(t, n, o, a) {
      a === void 0 && (a = null);
      var i = t.navSection === "CREATIVES",
        l =
          i && t.creativeFilter != null
            ? t.filter.concat(t.creativeFilter)
            : t.filter,
        s = {
          comparisonRange: t.comparisonTimeRange,
          currentRange: t.timeRange,
        },
        u = r("qex")._("4577") === !0;
      (r("AdsInsightsObjectStatsStore").getGroup(
        l,
        t.timeRange,
        s,
        [],
        n,
        [],
        e(),
        o,
        "none",
        r("AdsObjectTypes").ACCOUNT,
        {
          batchDispatch: !1,
          refetchOnError: !0,
          isSummaryRow: !0,
          skipSyncLegBeforeAsyncFallback: u,
        },
        !1,
        !1,
        null,
        a,
      ),
        t.comparisonTimeRange &&
          t.benchmarkDerivedColumnIDs &&
          r("AdsInsightsObjectStatsStore").getGroup(
            l,
            t.comparisonTimeRange,
            s,
            [],
            n,
            [],
            e(),
            [].concat(o, ["benchmark"]),
            "none",
            r("AdsObjectTypes").ACCOUNT,
            {
              batchDispatch: !1,
              refetchOnError: !0,
              isSummaryRow: !0,
              skipSyncLegBeforeAsyncFallback: u,
            },
            !1,
            !1,
            null,
            a,
          ));
    }
    function m(e, t, n) {
      var r = [].concat(n),
        o = function () {
          if (a.field !== t) return 1;
          var e = new Set(
            (Array.isArray(a.value) ? a.value : [a.value]).map(String),
          );
          r = r.filter(function (t) {
            return e.has(t);
          });
        };
      for (var a of e) o();
      return r;
    }
    function p(e, t, n, a) {
      var i;
      if (n === o("AdsPEGroupConstants").PORTFOLIO_GROUPING_DIMENSION) {
        var l = r("AdsAccountStore").getSelectedAccountID() || "",
          s = o("AdsInsightsFilter").field(
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            "id",
          );
        if (
          t === o("AdsInsightsGroupDimensionConfigTypes").NONE_DIMENSION_VALUE
        ) {
          var u = r("AdsInsightsPortfolioGroupingData").getClaimedCampaignIDs(
            l,
          );
          if (u == null) return null;
          var c = e.find(function (e) {
            return e.field === s;
          });
          if (c == null)
            return [].concat(e, [
              { field: s, operator: "NOT_IN", value: [].concat(u) },
            ]);
          var d = new Set(u),
            p = c.value,
            _ = (Array.isArray(p) ? p : [p]).map(String).filter(function (e) {
              return !d.has(e);
            });
          return _.length === 0
            ? null
            : [].concat(
                e.filter(function (e) {
                  return e.field !== s;
                }),
                [{ field: s, operator: "IN", value: _ }],
              );
        }
        var f = r("AdsInsightsPortfolioGroupingData").getMemberIDs(l, t);
        if (f == null || f.length === 0) return null;
        var g = m(e, s, f);
        return g.length === 0
          ? null
          : [].concat(
              e.filter(function (e) {
                return e.field !== s;
              }),
              [{ field: s, operator: "IN", value: g }],
            );
      } else if (n === o("AdsPEGroupConstants").PARENT_GROUPING_DIMENSION)
        i = [
          {
            field: o("AdsInsightsFilter").field(
              r("AdsObjectTypes").CAMPAIGN_GROUP,
              "id",
            ),
            operator: "IN",
            value: [t],
          },
        ];
      else {
        var h;
        if (n === o("AdsPEGroupConstants").BUDGET_POOL_GROUPING_DIMENSION) {
          var y, C;
          h =
            t === o("AdsInsightsGroupDimensionConfigTypes").NONE_DIMENSION_VALUE
              ? [
                  new (r("AdsGenericFilter"))(
                    r("AdsPEFilterFields").CAMPAIGN_BUDGET_POOL,
                    "NONE",
                    (y =
                      (C = r("AdsInsightsBudgetPoolGroupingData").getCached(
                        r("AdsAccountStore").getSelectedAccountID() || "",
                      )) == null
                        ? void 0
                        : C.ids) != null
                      ? y
                      : [],
                  ),
                ]
              : [
                  new (r("AdsGenericFilter"))(
                    r("AdsPEFilterFields").CAMPAIGN_BUDGET_POOL,
                    "ANY",
                    [t],
                  ),
                ];
        } else {
          var b,
            v =
              a === r("AdsObjectTypes").CAMPAIGN_GROUP
                ? "campaign"
                : a === r("AdsObjectTypes").CAMPAIGN
                  ? "ad_set"
                  : null;
          if (v == null) return null;
          var S =
            (b = r(
              "AdsInsightsGroupDimensionConfigJSResource",
            ).getModuleIfRequireable()) == null
              ? void 0
              : b.findDimensionByGroupingType(n, v);
          if (S == null) return null;
          var R = o(
              "AdsInsightsCompositeGroupKeyUtils",
            ).resolveFilterForGroupKey(S, t),
            L = R.filterName,
            E = R.filterValue,
            k = r("AdsPEFilterFields")[L],
            I = r("AdsInsightsTimeBucketFilterBuilder")(S, t);
          I != null
            ? (h = I)
            : (h = [new (r("AdsGenericFilter"))(k, "IN", [E])]);
        }
        var T = o("AdsPEFilterSetUtil").toMultiLevelAPISpec(
          new (r("AdsGenericFilterSet"))([].concat(h)),
        );
        i = [];
        for (var D of T)
          try {
            var x = o("AdsInsightsFilter").splitFieldFromFilterObjectType(
                D.field,
              ),
              $ = x[0],
              P = x[1],
              N = r("AdsObjectUtils").toPenguinType($);
            i.push(babelHelpers.extends({}, D, { field: N + "." + P }));
          } catch (e) {
            i.push(D);
          }
      }
      var M = new Set(
          i.map(function (e) {
            return e.field;
          }),
        ),
        w = e.filter(function (e) {
          return !M.has(e.field);
        });
      return [].concat(w, i);
    }
    function _(e, t, n, r) {
      var a = n.rowInterval,
        i = a[0],
        l = a[1],
        s = Math.max(0, i - o("AdsPEGroupConstants").GROUP_VIEWPORT_BUFFER),
        u = l + o("AdsPEGroupConstants").GROUP_VIEWPORT_BUFFER,
        c = new Set(r != null ? r : []),
        d = 0,
        m = [];
      for (var p of e) {
        var _ = t[p];
        if (_ !== 0) {
          var f = c.has(p),
            g =
              f || _ == null
                ? 1
                : 1 + Math.min(_, o("AdsPEGroupConstants").GROUP_EXPAND_LIMIT);
          if ((d + g > s && d < u && m.push(p), (d += g), d > u)) break;
        }
      }
      return m;
    }
    function f(t, n, a, i) {
      if (
        o(
          "AdsMgmt2026H1ExperimentUtils",
        ).getIsAccountInCAI2026H1GroupingWithoutExposure()
      ) {
        var l = t.groupingDimension,
          s = t.groupObjectCounts,
          u = t.objectType;
        if (!(l == null || s == null)) {
          r("AdsInsightsGroupHeaderRowCellJSResource").preload();
          var c;
          if (o("AdsPEGroupConstants").isDynamicGroupingDimension(l))
            c = Object.keys(s);
          else {
            var d,
              m =
                u === r("AdsObjectTypes").CAMPAIGN_GROUP
                  ? "campaign"
                  : u === r("AdsObjectTypes").CAMPAIGN
                    ? "ad_set"
                    : null;
            if (m == null) return;
            var f =
              (d = r(
                "AdsInsightsGroupDimensionConfigJSResource",
              ).getModuleIfRequireable()) == null
                ? void 0
                : d.findDimensionByGroupingType(l, m);
            if (f == null) return;
            var g = f.groupKeys;
            if (!Array.isArray(g)) return;
            c = g.map(function (e) {
              return String(e.value);
            });
          }
          var h = c;
          if (
            i != null &&
            o("AdsPEGroupConstants").isDynamicGroupingDimension(l)
          ) {
            var y,
              C = new Set((y = t.expandedGroupKeys) != null ? y : []),
              b = c.filter(function (e) {
                return !C.has(e);
              });
            h = _(c, s, i, b);
          }
          var v = {
            comparisonRange: t.comparisonTimeRange,
            currentRange: t.timeRange,
          };
          for (var S of h)
            if (!(s[S] == null || s[S] === 0)) {
              var R = p(t.filter, S, l, u);
              R != null &&
                r("AdsInsightsObjectStatsStore").getGroup(
                  R,
                  t.timeRange,
                  v,
                  [],
                  n,
                  [],
                  e(),
                  a,
                  "none",
                  r("AdsObjectTypes").ACCOUNT,
                  { batchDispatch: !1, refetchOnError: !0, isSummaryRow: !0 },
                );
            }
        }
      }
    }
    ((l.getVisibleStatsFields = s),
      (l.fetchBodyStatsCellsForIDs = c),
      (l.fetchFooterCells = d),
      (l.buildGroupFilter = p),
      (l.getVisibleGroupKeys = _),
      (l.fetchGroupHeaderCells = f));
  },
  98,
);
