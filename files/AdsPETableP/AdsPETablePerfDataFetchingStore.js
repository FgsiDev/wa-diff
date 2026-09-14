__d(
  "AdsPETablePerfDataFetchingStore",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsDraftDraftPublishCompletedDataActionFlux",
    "AdsDraftSelectionStore",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsTableViewStore",
    "AdsInsightsViewSpec",
    "AdsInteractionTriggerUtils",
    "AdsInterfacesRouteUpdateParamsDataActionFlux",
    "AdsInterfacesRouter",
    "AdsManager2026H2ExperimentUtils",
    "AdsMgmtSelectedAncestorIDsSelectors",
    "AdsMgmtStandaloneRouteUtils",
    "AdsPEFilterLiveDataManager",
    "AdsPEFilterUIStateSelectors",
    "AdsPEFluxAdSelectionIdClickedActionFlux",
    "AdsPEFluxCampaignGroupSelectionIdClickedActionFlux",
    "AdsPEFluxCampaignSelectionIdClickedActionFlux",
    "AdsPETableDataFetchingPolicy",
    "AdsPETableDataPrefetchStore",
    "AdsPerfInteractionsController",
    "FBLogger",
    "FluxStore",
    "GraphAPICore",
    "adsMgmtCurrentLevelSelector",
    "adsMgmtLoadIDRequestViewSpecParamsSelector",
    "adsMgmtPagingDataSelector",
    "adsMgmtViewportInfoSelector",
    "adsMgmtViewportSelector",
    "cancelIdleCallback",
    "cr:37460",
    "getErrorSafe",
    "gkx",
    "isFalsey",
    "qex",
    "requestIdleCallback",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["campaignGroup", "campaign", "adgroup"],
      u = (function (t) {
        function a() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsPETablePerfDataFetchingStore$p_1 = !1),
            (n.$AdsPETablePerfDataFetchingStore$p_2 = !1),
            (n.$AdsPETablePerfDataFetchingStore$p_5 = !1),
            (n.$AdsPETablePerfDataFetchingStore$p_6 = !1),
            (n.$AdsPETablePerfDataFetchingStore$p_7 = []),
            n.$AdsPETablePerfDataFetchingStore$p_8(),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$AdsPETablePerfDataFetchingStore$p_8 = function () {
            var e = this;
            (o("AdsInteractionTriggerUtils").addTableInteractionsListener(
              "start",
              function () {
                (e.$AdsPETablePerfDataFetchingStore$p_3 != null &&
                  r("cancelIdleCallback")(
                    e.$AdsPETablePerfDataFetchingStore$p_3,
                  ),
                  e.$AdsPETablePerfDataFetchingStore$p_4 != null &&
                    r("cancelIdleCallback")(
                      e.$AdsPETablePerfDataFetchingStore$p_4,
                    ),
                  (e.$AdsPETablePerfDataFetchingStore$p_5 = !1),
                  (e.$AdsPETablePerfDataFetchingStore$p_6 = !0),
                  n("cr:37460") == null ||
                    n("cr:37460").cleanup("proactive_default_filter_removal"));
              },
            ),
              o("AdsInteractionTriggerUtils").addTableInteractionsListener(
                "log",
                function (t) {
                  ((e.$AdsPETablePerfDataFetchingStore$p_6 = !1),
                    t.traceStatus === "SUCCESS"
                      ? ((e.$AdsPETablePerfDataFetchingStore$p_3 = r(
                          "requestIdleCallback",
                        )(function () {
                          ((e.$AdsPETablePerfDataFetchingStore$p_3 = null),
                            e.$AdsPETablePerfDataFetchingStore$p_9());
                        })),
                        e.$AdsPETablePerfDataFetchingStore$p_10(),
                        e.$AdsPETablePerfDataFetchingStore$p_11())
                      : (e.$AdsPETablePerfDataFetchingStore$p_7 = []));
                },
              ),
              r("AdsPerfInteractionsController").addEventListener(
                "am.route.initial_load",
                "start",
                function () {
                  e.$AdsPETablePerfDataFetchingStore$p_9();
                },
              ));
          }),
          (i.__getActionTypes = function () {
            return [
              o("AdsDraftDraftPublishCompletedDataActionFlux").actionType,
              r("AdsPEFluxCampaignGroupSelectionIdClickedActionFlux")
                .actionType,
              r("AdsPEFluxCampaignSelectionIdClickedActionFlux").actionType,
              r("AdsPEFluxAdSelectionIdClickedActionFlux").actionType,
            ].concat(
              n("cr:37460") != null
                ? [o("AdsInterfacesRouteUpdateParamsDataActionFlux").actionType]
                : [],
            );
          }),
          (i.__getDependencyStores = function () {
            return [
              r("AdsAccountStore"),
              r("AdsDraftSelectionStore"),
              r("AdsInsightsTableViewStore"),
            ]
              .concat(
                o("AdsPEFilterUIStateSelectors").getFilterSet.getStores(),
                [r("AdsPETableDataPrefetchStore")],
                r("AdsInsightsColumnPresetStoreUtil").resolve.stores,
                r("adsMgmtLoadIDRequestViewSpecParamsSelector").getStores(),
                r("adsMgmtCurrentLevelSelector").getStores(),
                r("adsMgmtPagingDataSelector").getStores(),
                o(
                  "AdsMgmtSelectedAncestorIDsSelectors",
                ).adsMgmtSelectedAncestorIDsSelector.getStores(),
                r("adsMgmtViewportInfoSelector").getStores(),
                r("adsMgmtViewportSelector").getStores(),
              )
              .filter(Boolean);
          }),
          (i.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            this.getDispatcher().waitFor(this.getDependencyDispatchTokens());
            var a = r("AdsInsightsTableViewStore").getOrNull();
            if (
              a &&
              !(
                a.breakdowns &&
                (a.breakdowns.includes("ad_id") ||
                  a.breakdowns.includes("adset_id"))
              )
            ) {
              if (r("AdsPETableDataPrefetchStore").hasChanged()) {
                var i = r(
                  "AdsPETableDataPrefetchStore",
                ).getObjectTypesToPrefetch();
                this.$AdsPETablePerfDataFetchingStore$p_6 &&
                r("qex")._("5239") === !0
                  ? (this.$AdsPETablePerfDataFetchingStore$p_7 = i)
                  : i.forEach(function (t) {
                      return e.$AdsPETablePerfDataFetchingStore$p_12(
                        r("AdsPETableDataPrefetchStore").getPrefetchIDs(t),
                        t,
                      );
                    });
              }
              switch (n.type) {
                case o("AdsDraftDraftPublishCompletedDataActionFlux")
                  .actionType:
                  this.prefetchDataForLevels(!0);
                  break;
                case o("AdsInterfacesRouteUpdateParamsDataActionFlux")
                  .actionType:
                  this.$AdsPETablePerfDataFetchingStore$p_10();
                  break;
                case r("AdsPEFluxCampaignGroupSelectionIdClickedActionFlux")
                  .actionType:
                case r("AdsPEFluxCampaignSelectionIdClickedActionFlux")
                  .actionType:
                case r("AdsPEFluxAdSelectionIdClickedActionFlux").actionType:
                  r("gkx")("1883") ||
                    r("requestIdleCallback")(function () {
                      r("GraphAPICore").runInSpecifiedPriority(
                        "LOW",
                        function () {
                          e.prefetchDataForLevels();
                        },
                      );
                    });
                  break;
              }
            }
          }),
          (i.$AdsPETablePerfDataFetchingStore$p_9 = function () {
            var e = this,
              t = r("adsMgmtViewportInfoSelector")();
            if (t) {
              var n = t.view,
                a = t.viewport,
                i = t.visibleIDs;
              r("GraphAPICore").runInSpecifiedPriority("LOW", function () {
                var t,
                  l = i;
                (o("AdsMgmtStandaloneRouteUtils").isStandaloneEditRoute(
                  (t = r("AdsInterfacesRouter").getOrNull()) == null
                    ? void 0
                    : t.getLeafRoute().name,
                )
                  ? (l = [])
                  : i.length > 50 && (l = i.slice(0, 50)),
                  l.length > 0 &&
                    o("AdsPETableDataFetchingPolicy").postfetchBody(n, a, l),
                  e.prefetchDataForLevels());
              });
            }
          }),
          (i.$AdsPETablePerfDataFetchingStore$p_13 = function (t) {
            var e = r("AdsInsightsTableViewStore").get(),
              n = r("AdsInsightsViewSpec").create(e.getConfig());
            return (t && (n.objectType = t), n);
          }),
          (i.$AdsPETablePerfDataFetchingStore$p_11 = function () {
            var e = this;
            if (this.$AdsPETablePerfDataFetchingStore$p_7.length !== 0) {
              var t = this.$AdsPETablePerfDataFetchingStore$p_7;
              ((this.$AdsPETablePerfDataFetchingStore$p_7 = []),
                t.forEach(function (t) {
                  return e.$AdsPETablePerfDataFetchingStore$p_12(
                    r("AdsPETableDataPrefetchStore").getPrefetchIDs(t),
                    t,
                  );
                }));
            }
          }),
          (i.$AdsPETablePerfDataFetchingStore$p_12 = function (t, n) {
            var e = this;
            t.length === 0 ||
              t.length > 500 ||
              r("requestIdleCallback")(function () {
                var a = e.$AdsPETablePerfDataFetchingStore$p_13(n),
                  i = r("adsMgmtViewportSelector")(),
                  l = function () {
                    return o("AdsPETableDataFetchingPolicy").fetchBody(
                      a,
                      i,
                      t,
                      "prefetch",
                      !1,
                    );
                  };
                if (
                  o(
                    "AdsManager2026H2ExperimentUtils",
                  ).getShouldLowPriTableLevelPrefetch()
                ) {
                  r("GraphAPICore").runInSpecifiedPriority("LOW", l);
                  return;
                }
                l();
              });
          }),
          (i.$AdsPETablePerfDataFetchingStore$p_10 = function () {
            var e = this;
            try {
              if (
                n("cr:37460") == null ||
                this.$AdsPETablePerfDataFetchingStore$p_5 ||
                !o(
                  "AdsPEFilterUIStateSelectors",
                ).hasOnlyCampaignGroupChangedFilter()
              )
                return;
              ((this.$AdsPETablePerfDataFetchingStore$p_5 = !0),
                (this.$AdsPETablePerfDataFetchingStore$p_4 = r(
                  "requestIdleCallback",
                )(function () {
                  ((e.$AdsPETablePerfDataFetchingStore$p_4 = null),
                    e.$AdsPETablePerfDataFetchingStore$p_14());
                })));
            } catch (e) {
              r("FBLogger")("am_filter_prefetch")
                .catching(r("getErrorSafe")(e))
                .warn(
                  "AdsPETablePerfDataFetchingStore.scheduleProactivePrefetchForFilterRemoval",
                );
            }
          }),
          (i.$AdsPETablePerfDataFetchingStore$p_14 = function () {
            r("GraphAPICore").runInSpecifiedPriority("LOW", function () {
              n("cr:37460") == null ||
                n("cr:37460").prefetchNoFilter(
                  "proactive_default_filter_removal",
                );
            });
          }),
          (i.prefetchDataForLevels = function (t) {
            var e = this;
            t === void 0 && (t = !1);
            var n = r("adsMgmtCurrentLevelSelector")();
            s.forEach(function (r) {
              n !== r && e.$AdsPETablePerfDataFetchingStore$p_15(r, t);
            });
          }),
          (i.$AdsPETablePerfDataFetchingStore$p_15 = function (t, n) {
            var e = r("AdsAccountStore").getSelectedAccountID();
            if (!r("isFalsey")(e)) {
              var a = r("adsMgmtLoadIDRequestViewSpecParamsSelector")(),
                i = a.comparisonDateTimeRange,
                l = a.datePreset,
                s = a.dateTimeRange,
                u = a.sortInfoMap,
                c = a.timezoneID,
                d = o("AdsPEFilterUIStateSelectors").getFilterSet(),
                m = r("AdsDraftSelectionStore").getCached(e),
                p = r("adsMgmtPagingDataSelector")(t),
                _ = o(
                  "AdsMgmtSelectedAncestorIDsSelectors",
                ).adsMgmtSelectedAncestorIDsSelector(t);
              r("AdsPEFilterLiveDataManager").preloadIDsForFilterSet(
                e,
                d,
                _,
                u,
                m,
                t,
                p,
                s,
                c,
                i,
                l,
                n,
              );
            }
          }),
          a
        );
      })(r("FluxStore"));
    u.__moduleID = i.id;
    var c = new u();
    l.default = c;
  },
  98,
);
