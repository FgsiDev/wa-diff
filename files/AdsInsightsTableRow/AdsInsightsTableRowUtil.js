__d(
  "AdsInsightsTableRowUtil",
  [
    "AdsInsightsSortUtil",
    "AdsLoadState_LEGACY",
    "AdsMgmtTableRowType",
    "distinctArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a, i) {
      var l = o("AdsInsightsSortUtil").getBreakdownSort(t.sort, t.breakdowns),
        s = a.getKeys(l),
        c = i && i.getKeys(l);
      if (u(a, l) && (!i || u(i, l))) {
        var d = (e || (e = r("distinctArray")))(
            s.getValueEnforcing().concat(c ? c.getValueEnforcing() : []),
          ),
          m = t.objectType;
        return d.map(function (e) {
          return {
            breakdownKey: e,
            breakdownSort: l,
            breakdowns: t.breakdowns,
            objectID: n,
            objectType: m,
            rowType: o("AdsMgmtTableRowType").BREAKDOWN,
            timeRange: t.timeRange,
            comparisonTimeRange: t.comparisonTimeRange,
          };
        });
      } else
        return a.maxLoadStatus === r("AdsLoadState_LEGACY").ERROR &&
          (!i || i.maxLoadStatus === r("AdsLoadState_LEGACY").ERROR)
          ? [
              {
                breakdowns: t.breakdowns,
                rowType: o("AdsMgmtTableRowType").ERROR,
              },
            ]
          : [
              {
                breakdowns: t.breakdowns,
                rowType: o("AdsMgmtTableRowType").LOADING_BREAKDOWN,
              },
            ];
    }
    function u(e, t) {
      return (
        e.maxLoadStatus === r("AdsLoadState_LEGACY").LOADED &&
        e.getKeys(t).hasValueWithoutError()
      );
    }
    ((l.fromGroup = s), (l.hasBreakdownRowLoaded = u));
  },
  98,
);
