__d(
  "AdsPETableDataFetchingStore",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsObjectStatsStore",
    "AdsInsightsTableScrollDataActionFlux",
    "AdsInsightsTableViewStore",
    "AdsInsightsTableViewportProvider",
    "AdsInteractionTriggerUtils",
    "AdsManagerTableDataFetchingQPLUtils",
    "AdsMgmt2026H1LBRExperimentUtils",
    "AdsObjectTypeUtils",
    "AdsPEFilterAndSortProvider",
    "AdsPEGroupSetIDsActionFlux",
    "AdsPERefreshTableViewActionFlux",
    "AdsPETableDataFetchingPolicy",
    "AdsReportBuilderUpdateCustomMetricSuccessActionFlux",
    "FluxStore",
    "GraphAPICore",
    "QPLSharing",
    "adsMgmtViewportInfoSelector",
    "debounceCore",
    "requestIdleCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsPEFilterAndSortProvider").toFluxStore(),
      u = r("AdsInsightsTableViewportProvider").toFluxStore(),
      c = [u, r("AdsInsightsTableViewStore")],
      d = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsPETableDataFetchingStore$p_1 = !1),
            (n.$AdsPETableDataFetchingStore$p_2 = r("debounceCore")(function (
              e,
            ) {
              return n.$AdsPETableDataFetchingStore$p_3("scroll_debounced", e);
            }, 200)),
            n.$AdsPETableDataFetchingStore$p_4(),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$AdsPETableDataFetchingStore$p_4 = function () {
            var e = this;
            o("AdsInteractionTriggerUtils").addTableInteractionsListener(
              "start",
              function () {
                ((e.$AdsPETableDataFetchingStore$p_1 = !0),
                  r("requestIdleCallback")(function () {
                    return e.$AdsPETableDataFetchingStore$p_3(
                      "interaction_start_idle",
                    );
                  }));
              },
            );
          }),
          (a.getFetchTriggeredStatus = function () {
            return this.$AdsPETableDataFetchingStore$p_1;
          }),
          (a.$AdsPETableDataFetchingStore$p_3 = function (t, n) {
            var e = r("adsMgmtViewportInfoSelector")();
            if (!e) {
              var a;
              r("QPLSharing").emitPoint(
                "LOAD_TABLE",
                o(
                  "AdsManagerTableDataFetchingQPLUtils",
                ).getFetchSkippedPointName(t),
                {
                  data: {
                    string: {
                      object_type:
                        (a = r("AdsInsightsTableViewStore").getOrNull()) == null
                          ? void 0
                          : a.objectType,
                      skip_reason: "null_viewport_info",
                      viewport_change_source: n,
                    },
                  },
                },
              );
              return;
            }
            var i = e.view,
              l = e.viewport,
              s = e.visibleIDs;
            (r("QPLSharing").emitPoint(
              "LOAD_TABLE",
              o("AdsManagerTableDataFetchingQPLUtils").getFetchPointName(t),
              {
                data: {
                  int: {
                    visible_ids_count: s.length,
                    viewport_row_end: l.rowInterval[1],
                    viewport_row_start: l.rowInterval[0],
                  },
                  string: {
                    object_type: i.objectType,
                    viewport_change_source: n,
                  },
                },
              },
            ),
              r("GraphAPICore").runInSpecifiedPriority("HIGH", function () {
                o("AdsPETableDataFetchingPolicy").fetchBody(
                  i,
                  l,
                  s,
                  "fetchBody",
                  !1,
                  n,
                );
              }),
              (this.$AdsPETableDataFetchingStore$p_1 = !0),
              this.$AdsPETableDataFetchingStore$p_5());
          }),
          (a.$AdsPETableDataFetchingStore$p_5 = function () {
            var e = r("adsMgmtViewportInfoSelector")();
            if (e) {
              var t = e.view,
                n = e.viewport,
                a = o(
                  "AdsMgmt2026H1LBRExperimentUtils",
                ).getIsAccountInHighPriorityFooterLaunch()
                  ? "HIGH"
                  : "LOW";
              r("GraphAPICore").runInSpecifiedPriority(a, function () {
                o("AdsPETableDataFetchingPolicy").fetchFooter(t, n);
              });
            }
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsPERefreshTableViewActionFlux").actionType,
              o("AdsReportBuilderUpdateCustomMetricSuccessActionFlux")
                .actionType,
              r("AdsInsightsTableScrollDataActionFlux").actionType,
              r("AdsPEGroupSetIDsActionFlux").actionType,
            ];
          }),
          (a.__getDependencyStores = function () {
            return [r("AdsAccountStore"), s].concat(
              c,
              r("adsMgmtViewportInfoSelector").getStores(),
              r("AdsInsightsColumnPresetStoreUtil").resolve.stores,
            );
          }),
          (a.__onDispatch = function (n) {
            var t = n.action;
            (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
              (this.$AdsPETableDataFetchingStore$p_1 = !1));
            var a = r("AdsInsightsTableViewStore").getOrNull();
            if (a) {
              if (t.type === o("AdsPERefreshTableViewActionFlux").actionType) {
                (e || (e = r("AdsDataAtom"))).waitFor([
                  r("AdsInsightsObjectStatsStore").getDispatchToken(),
                ]);
                var i = a.objectType,
                  l = o("AdsObjectTypeUtils").toObjectLevel(i),
                  s = o("AdsObjectTypeUtils").getAdLevelFromObjectLevel(l);
                if (t.adLevel != null && t.adLevel === s) {
                  this.$AdsPETableDataFetchingStore$p_3("refresh_table_view");
                  return;
                }
              }
              var c = this.getDependencyStores();
              if (
                (t.type ===
                  o("AdsReportBuilderUpdateCustomMetricSuccessActionFlux")
                    .actionType &&
                  ((e || (e = r("AdsDataAtom"))).waitFor([
                    r("AdsInsightsObjectStatsStore").getDispatchToken(),
                  ]),
                  this.$AdsPETableDataFetchingStore$p_3(
                    "custom_metric_update",
                  )),
                c.some(function (e) {
                  return e.hasChanged() && e !== u;
                }))
              )
                this.$AdsPETableDataFetchingStore$p_3("dispatch");
              else if (u.hasChanged()) {
                var d =
                  t.type ===
                  r("AdsInsightsTableScrollDataActionFlux").actionType
                    ? t.source
                    : void 0;
                this.$AdsPETableDataFetchingStore$p_2(d);
              }
            }
          }),
          n
        );
      })(r("FluxStore"));
    d.__moduleID = i.id;
    var m = new d();
    l.default = m;
  },
  98,
);
