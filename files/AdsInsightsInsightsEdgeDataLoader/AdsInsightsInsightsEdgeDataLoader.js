__d(
  "AdsInsightsInsightsEdgeDataLoader",
  [
    "invariant",
    "AdsApplicationUtils",
    "AdsGraphAPI",
    "AdsInsightsAdInsightsShadowValidation",
    "AdsInsightsBreakdownBaseConfig",
    "AdsInsightsBreakdownUtil",
    "AdsInsightsEdgeFilterUtil",
    "AdsInsightsFieldUtil",
    "AdsInsightsFields",
    "AdsInsightsFilter",
    "AdsInsightsInsightsEdgeDataLoaderConfig",
    "AdsInsightsQueryUtil",
    "AdsInsightsSortUtil",
    "AdsInsightsSourceStackUtil",
    "AdsInsightsTableReportRunStatusDataAction",
    "AdsInsightsTimeRangeUtil",
    "AdsMgmtOneshopUtil",
    "AdsMgmtPreloadingUtils",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "AdsPEInsightsEdgeDataLoaderPreloader",
    "AdsPEInsightsEdgeSummaryDataLoaderPreloader",
    "AdsPreloaderCommonComparators",
    "AdsSYDAccountInfoInsightsPreloader",
    "FBLogger",
    "Promise",
    "PromiseUtil",
    "areEqual",
    "arrayContainsArray",
    "asyncToGeneratorRuntime",
    "cr:35557",
    "getCustomMetricsIDFilterClause",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u;
    function c(e) {
      return e.filter(function (e) {
        return (
          e !== "results_anomaly" &&
          e !== "amount_spend_anomaly" &&
          e !== "cost_per_result_anomaly" &&
          e !== "cost_per_result_temporal_delta_ratio"
        );
      });
    }
    function d(e, t, n, a, i) {
      i === void 0 && (i = !1);
      var l = e.actionTypes,
        s = e.apiFields,
        u = e.attributionWindows,
        c = e.breakdowns,
        d = e.comparisonTimeRange,
        m = e.currentTimeRange,
        _ = e.customTimeBreakdown,
        f = e.doNotUseUnifiedAttributionSetting,
        g = e.filter,
        h = e.ids,
        y = e.objectType,
        C = e.roundUpObjectType,
        b = e.sort,
        v = e.summary,
        S = e.timeRange,
        R = y,
        L;
      _
        ? ((L = o("AdsInsightsTimeRangeUtil").intervalsToAPIParams(_)),
          S &&
            (L = o("AdsInsightsTimeRangeUtil").getAPIParamsWithDatePreset(
              L,
              S,
            )))
        : n && o("AdsInsightsSortUtil").hasComparisonSort(b)
          ? (L = o("AdsInsightsTimeRangeUtil").toAPIParamsForComparisonSort(
              S,
              n,
            ))
          : (L = o("AdsInsightsTimeRangeUtil").toAPIParams(S));
      var E = i === !0 ? b : o("AdsInsightsSortUtil").getBreakdownSort(b, c),
        k = babelHelpers.extends(
          {},
          o("AdsInsightsBreakdownUtil").toAPIParams(c),
          L,
          o("AdsInsightsSortUtil").hasComparisonSort(b)
            ? o("AdsInsightsTimeRangeUtil").toBenchmarkTimeRangesAPIParams(
                m || S,
                d,
                n,
              )
            : {},
          {
            action_attribution_windows: o(
              "AdsInsightsFieldUtil",
            ).attributionWindowsToAPIParam(u),
            fields: s,
            limit: p(c),
            sort: o("AdsInsightsSortUtil").toInsightsEdgeParam(E),
          },
        );
      if (((f == null || !f) && (k.use_unified_attribution_setting = !0), h))
        k.ids = h;
      else {
        var I = g.filter(function (e) {
          return o("AdsInsightsFilter").splitFieldWrapper(e.field)[1] === "id";
        });
        if (I.length === 1 && !e.roundUpObjectType) {
          var T = o("AdsInsightsFilter").extractIDClause(g),
            D = T.idClause;
          o("AdsInsightsFilter").splitFieldWrapper(D.field)[0] ===
            r("AdsObjectTypes").ADGROUP &&
            D.value.length === 1 &&
            (R = r("AdsObjectTypes").ADGROUP);
        }
        if (g.length === 1 && I.length === 1) {
          var x = r("AdsObjectUtils").toInsightsAPIFieldOrNull(e.objectType);
          (x && !k.fields.includes(x) && k.fields.push(x),
            (k.filtering = c.includes("creative_fingerprint")
              ? o(
                  "AdsInsightsEdgeFilterUtil",
                ).toInsightsEdgeParamWithoutAdSearchHint(g, y, null, !1)
              : o(
                  "AdsInsightsEdgeFilterUtil",
                ).toInsightsEdgeParamWithoutAdSearchHint(g, y)));
        } else
          k.filtering = a
            ? o(
                "AdsInsightsEdgeFilterUtil",
              ).toInsightsEdgeParamWithoutAdSearchHint(g, y, t)
            : o("AdsInsightsEdgeFilterUtil").toInsightsEdgeParam(g, y, t);
      }
      return (
        l &&
          l.length &&
          (k.filtering = o("AdsInsightsFields").mergeActionTypeFilters(
            k.filtering || [],
            [o("AdsInsightsFilter").FilterClause.actionTypeIn(l)],
          )),
        v === "defaultSummary" && (k.default_summary = !0),
        (k.level = r("AdsObjectUtils").toFilterObjectType(R)),
        C && (k.round_up_level = r("AdsObjectUtils").toFilterObjectType(C)),
        k
      );
    }
    function m(e) {
      return (
        p(e) !== r("AdsInsightsInsightsEdgeDataLoaderConfig").max_page_size
      );
    }
    function p(e) {
      var t = o("AdsInsightsBreakdownBaseConfig").getConfigsByID();
      return !e || !e.length
        ? r("AdsInsightsInsightsEdgeDataLoaderConfig").max_page_size
        : Math.min.apply(
            Math,
            [r("AdsInsightsInsightsEdgeDataLoaderConfig").max_page_size].concat(
              e.map(function (e) {
                var n = t[e];
                return (
                  (n && n.maxEntries) ||
                  r("AdsInsightsInsightsEdgeDataLoaderConfig").max_page_size
                );
              }),
            ),
          );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("AdsInsightsSourceStackUtil").pushOnStacks(
              t,
              "getReportRunStatus",
            ),
            r = yield o("AdsGraphAPI")
              .get(o("AdsInsightsSourceStackUtil").repr(n))
              .object("reportRun", e)
              .get({ fields: ["async_status"] });
          return r.async_status;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("AdsInsightsSourceStackUtil").pushOnStacks(
              t,
              "getReportRunInsights",
            ),
            l = o("PromiseUtil").exponentialBackoff(
              function () {
                return _(e, a);
              },
              1.2,
              1,
            ),
            u = o("PromiseUtil").repeatUntil(l, function (e) {
              return e === "Job Completed" || e === "Job Failed";
            }),
            c = yield u();
          return (
            r("AdsInsightsTableReportRunStatusDataAction").dispatch(
              { reportRunID: e },
              {
                line: "309",
                module: "AdsInsightsInsightsEdgeDataLoader.js",
                moduleID: i.id,
              },
            ),
            c !== "Job Failed" || s(0, 3929, e),
            yield o("AdsGraphAPI")
              .get(o("AdsInsightsSourceStackUtil").repr(a))
              .object("reportRun", e)
              .edge("insights")
              .get({ limit: n })
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r, o, a) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            (a === void 0 && (a = { useAsync: !1, useAsyncAfterSyncFails: !1 }),
              s === void 0 && (s = !1));
            var m = o("AdsInsightsSourceStackUtil").pushOnStacks(
                i,
                a.useAsyncAfterSyncFails
                  ? "fetchAsyncAfterSyncFails"
                  : a.useAsync
                    ? "fetchAsync"
                    : "fetchSync",
              ),
              p = t.currencyCode || void 0,
              _ = typeof p == "string" ? p : void 0,
              f = t.timezoneID,
              h = d(e, _, f, null, s),
              y = h;
            if (l != null && l.length > 0) {
              var C;
              y = babelHelpers.extends({}, h, {
                filtering: [].concat((C = h.filtering) != null ? C : [], [
                  r("getCustomMetricsIDFilterClause")(l),
                ]),
              });
            }
            if (
              r("gkx")("23037") &&
              (n("cr:35557") == null ? void 0 : n("cr:35557").isCapturing()) ===
                !0 &&
              o("AdsMgmtOneshopUtil").shouldUseAmOneshop(y)
            ) {
              var S;
              y =
                (S =
                  n("cr:35557") == null
                    ? void 0
                    : n("cr:35557").instrumentParams(y)) != null
                  ? S
                  : y;
            }
            var R = o("AdsGraphAPI").get(
              o("AdsInsightsSourceStackUtil").repr(m),
            );
            function L(n) {
              n === void 0 && (n = "insights");
              var i;
              if (e.ids)
                ((i = R.objectByName(n, n)),
                  o("AdsApplicationUtils").isPowerEditor() &&
                    a.useAccountInsightsPreloader &&
                    (i = i.preloadedBy(
                      r("AdsSYDAccountInfoInsightsPreloader").preloader,
                      o("AdsMgmtPreloadingUtils").defaultConfig,
                      { fieldsParam: "column_fields" },
                    )));
              else if (
                ((i = R.adaccount(t.accountID).edge(n)),
                o("AdsApplicationUtils").isPowerEditor())
              ) {
                var l = {
                  action_attribution_windows: o("AdsPreloaderCommonComparators")
                    .isSubsetOrEqual,
                  filtering: v,
                };
                (r("qex")._("447") === !0 &&
                  (l.use_unified_attribution_setting = function () {
                    return !0;
                  }),
                  r("qex")._("3809") === !0 && (l.sort = b),
                  (i = i.preloadedBy(
                    a.isSummaryRow
                      ? o("AdsPEInsightsEdgeSummaryDataLoaderPreloader")
                          .preloader
                      : a.useAccountInsightsPreloader
                        ? r("AdsSYDAccountInfoInsightsPreloader").preloader
                        : o("AdsPEInsightsEdgeDataLoaderPreloader").preloader,
                    o("AdsMgmtPreloadingUtils").defaultConfig,
                    {
                      fieldsParam:
                        n !== "am_tabular" ? "fields" : "column_fields",
                      fieldComparators: l,
                    },
                  )));
              }
              return i;
            }
            if (
              o("AdsApplicationUtils").isPowerEditor() &&
              o("AdsInsightsQueryUtil").isQueryingFutureDate(
                e.timeRange.interval,
              )
            )
              return new (u || (u = n("Promise")))(function (e, t) {
                e({ data: [] });
              });
            y.fields.some(function (e) {
              return [
                "results_anomaly",
                "amount_spend_anomaly",
                "cost_per_result_anomaly",
              ].includes(e);
            }) &&
              r("justknobx")._("4631") &&
              r("FBLogger")("applied_insights", "filtered_insights_api").warn(
                "Anomaly metrics filtered from the Insights API. ",
              );
            var E = c(y.fields),
              k = babelHelpers.extends({}, y, { fields: E }),
              I;
            if (a.forceAsync === !0 && a.useAsync) {
              var T = yield L().post(k);
              I = yield g(T.report_run_id, m, k.limit);
            } else if (a.useAsyncAfterSyncFails) {
              var D = L();
              if (a.skipSyncLegBeforeAsyncFallback === !0) {
                var x = yield D.post(k);
                I = yield g(x.report_run_id, m, k.limit);
              } else
                I = yield (
                  o("AdsMgmtOneshopUtil").shouldUseAmOneshop(y)
                    ? o("AdsMgmtOneshopUtil").getAmTabularResponse(
                        L("am_tabular"),
                        y,
                      )
                    : D.get(k)
                ).catch(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e = yield D.post(k);
                    return yield g(e.report_run_id, m, k.limit);
                  }),
                );
            } else if (a.useAsync) {
              var $ = yield L().post(k);
              I = yield g($.report_run_id, m, k.limit);
            } else
              o("AdsMgmtOneshopUtil").shouldUseAmOneshop(y)
                ? (I = yield o("AdsMgmtOneshopUtil").getAmTabularResponse(
                    L("am_tabular"),
                    y,
                  ))
                : (I = yield L().get(k));
            return (
              o(
                "AdsInsightsAdInsightsShadowValidation",
              ).maybeShadowValidateAgainstAdInsights(y, I, e, t, _),
              r("gkx")("23037") &&
                (n("cr:35557") == null
                  ? void 0
                  : n("cr:35557").isCapturing()) === !0 &&
                o("AdsMgmtOneshopUtil").shouldUseAmOneshop(y) &&
                (n("cr:35557") == null ||
                  n("cr:35557").notifyResponse("/am_tabular", y, I, m)),
              I
            );
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(t, n) {
      return t == null || (Array.isArray(t) && !t.length)
        ? !0
        : (e || (e = r("areEqual")))(t, n);
    }
    function v(t, n) {
      if (Array.isArray(n) && Array.isArray(t)) {
        var o = new Set([
          "campaign.id",
          "adset.id",
          "ad.id",
          "custom_derived_metric_id",
        ]);
        return S(n, t, o);
      }
      return (e || (e = r("areEqual")))(n, t);
    }
    function S(t, n, o) {
      var a = R(t),
        i = R(n);
      return (
        o.forEach(function (e) {
          var t = a.findIndex(function (t) {
              return (t == null ? void 0 : t.field) === e;
            }),
            n = i.findIndex(function (t) {
              return (t == null ? void 0 : t.field) === e;
            });
          if (t >= 0 && n >= 0) {
            var o,
              l,
              s = (o = a[t]) == null ? void 0 : o.value,
              u = (l = i[n]) == null ? void 0 : l.value;
            Array.isArray(s) &&
              Array.isArray(u) &&
              r("arrayContainsArray")(s, u) &&
              (a.splice(t, 1), i.splice(n, 1));
          }
        }),
        (e || (e = r("areEqual")))(a, i)
      );
    }
    function R(e) {
      return e
        .map(function (e) {
          return typeof e == "object" ? babelHelpers.extends({}, e) : null;
        })
        .filter(Boolean);
    }
    ((l.maxPageSize = r(
      "AdsInsightsInsightsEdgeDataLoaderConfig",
    ).max_page_size),
      (l.getLegacyInsightsFields = c),
      (l.queryToAPI = d),
      (l.hasBreakdownMaxPageSize = m),
      (l.getMaxPageSize = p),
      (l.getReportRunStatus = _),
      (l.getReportRunInsights = g),
      (l.fetch = y));
  },
  98,
);
