__d(
  "AdsInsightsViewSpec",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.comparisonTimeRange = e.comparisonTimeRange),
          (this.benchmarkDerivedColumnIDs = e.benchmarkDerivedColumnIDs),
          (this.breakdowns = e.breakdowns),
          (this.columns = e.columns),
          (this.filter = e.filter),
          (this.expandedGroupKeys = e.expandedGroupKeys),
          (this.groupIDsByKey = e.groupIDsByKey),
          (this.groupingDimension = e.groupingDimension),
          (this.groupObjectCounts = e.groupObjectCounts),
          (this.groupPageIndex = e.groupPageIndex),
          (this.creativeFilter = e.creativeFilter),
          (this.insights = e.insights),
          (this.objectType = e.objectType),
          (this.navSection = e.navSection),
          (this.sort = e.sort),
          (this.timeRange = e.timeRange),
          (this.userFilter = e.userFilter),
          (this.attributionWindows = e.attributionWindows),
          (this.compareAttributionWindowsColumnIDs =
            e.compareAttributionWindowsColumnIDs),
          (this.viewHasAttributionSupportingColumn =
            e.viewHasAttributionSupportingColumn),
          (this.budgetForecastColumnIDs = e.budgetForecastColumnIDs),
          (this.isBudgetOptimizationQuickViewSelected =
            e.isBudgetOptimizationQuickViewSelected),
          (this.prioritizedHighlightIDs = e.prioritizedHighlightIDs),
          (this.prioritizedCollapsedKeys = e.prioritizedCollapsedKeys));
      }
      e.create = function (n) {
        return new e(n);
      };
      var t = e.prototype;
      return (
        (t.getConfig = function () {
          return {
            attributionWindows: this.attributionWindows,
            benchmarkDerivedColumnIDs: this.benchmarkDerivedColumnIDs,
            breakdowns: this.breakdowns,
            budgetForecastColumnIDs: this.budgetForecastColumnIDs,
            columns: this.columns,
            compareAttributionWindowsColumnIDs:
              this.compareAttributionWindowsColumnIDs,
            comparisonTimeRange: this.comparisonTimeRange,
            creativeFilter: this.creativeFilter,
            expandedGroupKeys: this.expandedGroupKeys,
            filter: this.filter,
            groupIDsByKey: this.groupIDsByKey,
            groupingDimension: this.groupingDimension,
            groupObjectCounts: this.groupObjectCounts,
            groupPageIndex: this.groupPageIndex,
            insights: this.insights,
            isBudgetOptimizationQuickViewSelected:
              this.isBudgetOptimizationQuickViewSelected,
            navSection: this.navSection,
            objectType: this.objectType,
            prioritizedCollapsedKeys: this.prioritizedCollapsedKeys,
            prioritizedHighlightIDs: this.prioritizedHighlightIDs,
            sort: this.sort,
            timeRange: this.timeRange,
            userFilter: this.userFilter,
            viewHasAttributionSupportingColumn:
              this.viewHasAttributionSupportingColumn,
          };
        }),
        (t.set = function (n) {
          return e.create(babelHelpers.extends({}, this.getConfig(), n));
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
