__d(
  "AdsInsightsTableEventStoreUtil",
  [
    "invariant",
    "AdsAccountStore",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsFilterSerializationUtil",
    "AdsInsightsSortUtil",
    "AdsInsightsTablePreviousViewStore",
    "AdsInsightsTableViewStore",
    "AdsInsightsTimeRangeUtil",
    "AdsInsightsUserFilterUtil",
    "AdsObjectUtils",
    "AdsPEReportProvider",
    "LocalDate",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("AdsPEReportProvider").toFluxStore();
    function u(e, t) {
      var n = r("AdsInsightsColumnPresetStoreUtil").resolve(e.columns, t),
        a = n.attributionWindows,
        i = n.ids,
        l = r("AdsAccountStore").getTimezoneID(),
        u;
      e.timeRange.isLifetime() ||
        (u = o("AdsInsightsTimeRangeUtil").toDateInterval(
          e.timeRange,
          r("LocalDate").today(l),
          function () {
            return s(!1, "Cannot occur");
          },
        ));
      var c =
          e.comparisonTimeRange &&
          o("AdsInsightsTimeRangeUtil").toDateInterval(
            e.comparisonTimeRange,
            r("LocalDate").today(l),
            function () {
              return s(!1, "Comparison time range cannot be lifetime");
            },
          ),
        d = r("AdsObjectUtils").getNavSectionFromObjectTypeOrNull(e.objectType);
      return {
        attribution_windows: a,
        comparison_date_interval_end: c && c.end.toString(),
        comparison_date_interval_start: c && c.start.toString(),
        date_interval_end: u && u.end.toString(),
        date_interval_preset: e.timeRange.preset,
        date_interval_start: u && u.start.toString(),
        insights_table_breakdowns: e.breakdowns,
        insights_table_column_set_id: e.columns.preset,
        insights_table_comparison_columns:
          e.benchmarkDerivedColumnIDs && e.benchmarkDerivedColumnIDs.toArray(),
        insights_table_level: e.objectType,
        insights_table_sort: e.sort.map(o("AdsInsightsSortUtil").reprSortItem),
        insights_table_user_columns: i,
        normalized_filter: e.filter.map(
          o("AdsInsightsFilterSerializationUtil").serializeFilterClause,
        ),
        section: d,
        user_filter: e.userFilter.map(
          o("AdsInsightsUserFilterUtil").serializeUserFilterClause,
        ),
      };
    }
    function c(t) {
      t === void 0 && (t = r("AdsInsightsTableViewStore"));
      var n = t.getOrNull(),
        o = n ? m.getTableViewEventData(n) : {},
        a = {};
      for (var i in o) a["current_" + i] = o[i];
      return (
        (a.to_section = a.current_section),
        delete a.current_section,
        (a.current_report_id = e.getState().selectedID),
        a
      );
    }
    function d(e) {
      e === void 0 && (e = r("AdsInsightsTablePreviousViewStore"));
      var t = e.getOrNull(),
        n = t ? m.getPreviousTableViewEventData(t) : {},
        o = {};
      for (var a in n) o["previous_" + a] = n[a];
      return (
        (o.at_section = o.previous_section),
        delete o.previous_section,
        (o.previous_report_id = r(
          "AdsInsightsTablePreviousViewStore",
        ).getReportSpecID()),
        o
      );
    }
    var m = {
        getTableViewEventData: u,
        getPreviousTableViewEventData: function (t) {
          return m.getTableViewEventData(t, !0);
        },
        getCurrentNavigationEventData: c,
        getPreviousNavigationEventData: d,
      },
      p = [].concat(r("AdsInsightsColumnPresetStoreUtil").resolve.stores, [
        r("AdsAccountStore"),
      ]);
    ((u.stores = p),
      (c.stores = [].concat(p, [e, r("AdsInsightsTableViewStore")])),
      (d.stores = [].concat(p, [r("AdsInsightsTablePreviousViewStore")])));
    var _ = m;
    l.default = _;
  },
  98,
);
