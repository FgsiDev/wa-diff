__d(
  "AdsInsightsInsightsEdgeDataDispatcher",
  [
    "invariant",
    "AdsInsightsAttributionWindows",
    "AdsInsightsDataFetchingConfig.experimental",
    "AdsInsightsFetchInsightsEdgeErrorAction",
    "AdsInsightsFetchInsightsEdgeSuccessAction",
    "AdsInsightsFetchInsightsEdgeSuccessBatchedAction",
    "AdsInsightsFetchMaxMinErrorAction",
    "AdsInsightsFetchMaxMinSuccessAction",
    "AdsInsightsFetchTimeSeriesStatsErrorAction",
    "AdsInsightsFetchTimeSeriesStatsSuccessAction",
    "AdsInsightsInsightsEdgeDataLoader",
    "AdsInsightsInsightsEdgePolicy",
    "AdsObjectTypes",
    "BatchingQueue",
    "QPLSharing",
    "asyncToGeneratorRuntime",
    "justknobx",
    "performanceNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function () {
        function t() {
          var e = this;
          this.$1 = new (r("BatchingQueue"))(
            function (t) {
              return e.$2(t);
            },
            {
              timeout:
                r("AdsInsightsDataFetchingConfig.experimental")
                  .batch_dispatching_timeout || 2e3,
            },
          );
        }
        var a = t.prototype;
        return (
          (a.fetch = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a, i) {
                if (
                  (t === void 0 &&
                    (t = {
                      batchDispatch: !1,
                      isSummaryRow: !1,
                      useAccountInsightsPreloader: !1,
                    }),
                  o("AdsInsightsInsightsEdgePolicy").applyReachDetectionHack(e),
                  !!e.apiFields.length)
                ) {
                  var l =
                    t.isMaxMinQuery === !0
                      ? {
                          forceAsync: t.forceAsync,
                          isSummaryRow: t.isSummaryRow,
                          useAccountInsightsPreloader:
                            t.useAccountInsightsPreloader,
                          useAsync: !1,
                          useAsyncAfterSyncFails: !1,
                        }
                      : {
                          forceAsync: t.forceAsync,
                          isSummaryRow: t.isSummaryRow,
                          skipSyncLegBeforeAsyncFallback:
                            t.skipSyncLegBeforeAsyncFallback,
                          useAccountInsightsPreloader:
                            t.useAccountInsightsPreloader,
                          useAsync:
                            t.forceAsync === !0 ||
                            o("AdsInsightsInsightsEdgePolicy").shouldUseAsync(
                              e,
                            ),
                          useAsyncAfterSyncFails: o(
                            "AdsInsightsInsightsEdgePolicy",
                          ).shouldUseAsyncAfterSyncFails(e),
                        };
                  if (r("justknobx")._("3007") && t.isMaxMinQuery !== !0) {
                    var s, u;
                    r("QPLSharing").emitPoint(
                      "LOAD_TABLE",
                      "FETCH_INSIGHTS_EDGE",
                      {
                        data: {
                          string: {
                            adObjectType: e.objectType,
                            comparisonTimeRange:
                              (s = e.comparisonTimeRange) == null
                                ? void 0
                                : s.toString(),
                            currentTimeRange:
                              (u = e.currentTimeRange) == null
                                ? void 0
                                : u.toString(),
                            roundUpObjectType: e.roundUpObjectType,
                            summaryType: e.summary,
                            timeRange: e.timeRange.toString(),
                          },
                          string_array: {
                            sourceStack: a,
                            actionTypes: e.actionTypes,
                            apiFields: e.apiFields,
                            attributionWindows: e.attributionWindows,
                            breakdowns: e.breakdowns,
                            filter: e.filter.map(function (e) {
                              return JSON.stringify(e);
                            }),
                            sort: e.sort.map(function (e) {
                              return JSON.stringify(e);
                            }),
                          },
                          bool: {
                            batchDispatch: t.batchDispatch,
                            isSummaryRow: t.isSummaryRow,
                            skipSyncLegBeforeAsyncFallback:
                              l.skipSyncLegBeforeAsyncFallback,
                            useAsync: l.useAsync,
                            useAsyncAfterSyncFails: l.useAsyncAfterSyncFails,
                          },
                        },
                      },
                    );
                  }
                  yield this.$3(e, t, l, n, a, i);
                }
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, o, a, l) {
                var s = this;
                (t === void 0 &&
                  (t = {
                    batchDispatch: !1,
                    isSummaryRow: !1,
                    useAccountInsightsPreloader: !1,
                  }),
                  yield r("promiseDone")(
                    this.$4(
                      t.overwriteFilter != null
                        ? babelHelpers.extends({}, e, {
                            filter: t.overwriteFilter,
                          })
                        : e,
                      n,
                      o,
                      a,
                      l,
                      t.isMaxMinQuery,
                    ),
                    function (n) {
                      var o = n.duration,
                        a = n.insightsEdge;
                      if (r("justknobx")._("3007") && t.isMaxMinQuery !== !0) {
                        var i, u;
                        r("QPLSharing").emitPoint(
                          "LOAD_TABLE",
                          "FETCH_INSIGHTS_EDGE_DONE",
                          {
                            data: {
                              int: {
                                requestTimeMs: Math.round(o),
                                objectCount:
                                  (i =
                                    a == null || (u = a.data) == null
                                      ? void 0
                                      : u.length) != null
                                    ? i
                                    : 0,
                              },
                              string: { adObjectType: e.objectType },
                              bool: { batchDispatch: t.batchDispatch },
                            },
                          },
                        );
                      }
                      t.batchDispatch
                        ? s.$1.add({
                            insightsEdge: a,
                            query: e,
                            requestTime: o,
                            customMetricsIDs: l,
                          })
                        : t.isMaxMinQuery === !0
                          ? s.$5({ insightsEdge: a, query: e })
                          : s.$6({
                              insightsEdge: a,
                              query: e,
                              requestTime: o,
                              customMetricsIDs: l,
                            });
                    },
                    function (n) {
                      if (r("justknobx")._("3007") && t.isMaxMinQuery !== !0) {
                        var o;
                        r("QPLSharing").emitPoint(
                          "LOAD_TABLE",
                          "FETCH_INSIGHTS_EDGE_ERROR",
                          {
                            data: {
                              string: {
                                adObjectType: e.objectType,
                                errorMessage: String(
                                  (o = n == null ? void 0 : n.message) != null
                                    ? o
                                    : "",
                                ).slice(0, 200),
                              },
                            },
                          },
                        );
                      }
                      t.isMaxMinQuery === !0
                        ? r("AdsInsightsFetchMaxMinErrorAction").dispatch(
                            { error: n, query: e },
                            {
                              line: "254",
                              module:
                                "AdsInsightsInsightsEdgeDataDispatcher.js",
                              moduleID: i.id,
                            },
                          )
                        : r("AdsInsightsFetchInsightsEdgeErrorAction").dispatch(
                            { error: n, query: e },
                            {
                              line: "259",
                              module:
                                "AdsInsightsInsightsEdgeDataDispatcher.js",
                              moduleID: i.id,
                            },
                          );
                    },
                  ));
              },
            );
            function t(t, n, r, o, a, i) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$4 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, a, i, l, s) {
                (n === void 0 && (n = { useAsync: !1 }),
                  s === void 0 && (s = !1));
                var u = (e || (e = r("performanceNow")))();
                return {
                  insightsEdge: yield o(
                    "AdsInsightsInsightsEdgeDataLoader",
                  ).fetch(t, a, n, [i], l, s),
                  duration: e() - u,
                };
              },
            );
            function a(e, n, r, o, a, i) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$2 = function (t) {
            (r("QPLSharing").emitPoint("LOAD_TABLE", "BATCH_DISPATCH_FLUSH"),
              r("AdsInsightsFetchInsightsEdgeSuccessBatchedAction").dispatch(
                { batch: t },
                {
                  line: "296",
                  module: "AdsInsightsInsightsEdgeDataDispatcher.js",
                  moduleID: i.id,
                },
              ));
          }),
          (a.$6 = function (t) {
            r("AdsInsightsFetchInsightsEdgeSuccessAction").dispatch(
              babelHelpers.extends({}, t),
              {
                line: "302",
                module: "AdsInsightsInsightsEdgeDataDispatcher.js",
                moduleID: i.id,
              },
            );
          }),
          (a.$5 = function (t) {
            r("AdsInsightsFetchMaxMinSuccessAction").dispatch(
              babelHelpers.extends({}, t),
              {
                line: "311",
                module: "AdsInsightsInsightsEdgeDataDispatcher.js",
                moduleID: i.id,
              },
            );
          }),
          (a.fetchTimeSeries = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, a, l, u, c) {
                (c === void 0 && (c = []), t.length !== 0 || s(0, 3922));
                var d = {
                  apiFields: n,
                  attributionWindows: o(
                    "AdsInsightsAttributionWindows",
                  ).getDefaultWindows(),
                  breakdowns: [],
                  customTimeBreakdown: t,
                  filter: e,
                  objectType: r("AdsObjectTypes").ACCOUNT,
                  sort: [],
                  timeRange: u,
                  actionTypes: c,
                };
                if (
                  (o(
                    "AdsInsightsInsightsEdgePolicy",
                  ).restrictLevelOnRelevanceScore(d),
                  !!d.apiFields.length)
                ) {
                  var m = { useAsync: !1 };
                  yield r("promiseDone")(
                    this.$4(d, m, a, l),
                    function (e) {
                      var t = e.duration,
                        n = e.insightsEdge;
                      return r(
                        "AdsInsightsFetchTimeSeriesStatsSuccessAction",
                      ).dispatch(
                        { insightsEdge: n, insightsQuery: d, requestTime: t },
                        {
                          line: "359",
                          module: "AdsInsightsInsightsEdgeDataDispatcher.js",
                          moduleID: i.id,
                        },
                      );
                    },
                    function (e) {
                      return r(
                        "AdsInsightsFetchTimeSeriesStatsErrorAction",
                      ).dispatch(
                        { error: e, insightsQuery: d },
                        {
                          line: "365",
                          module: "AdsInsightsInsightsEdgeDataDispatcher.js",
                          moduleID: i.id,
                        },
                      );
                    },
                  );
                }
              },
            );
            function t(t, n, r, o, a, i, l) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(),
      c = new u();
    l.default = c;
  },
  98,
);
