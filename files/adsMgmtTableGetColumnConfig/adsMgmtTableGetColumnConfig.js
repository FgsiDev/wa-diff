__d(
  "adsMgmtTableGetColumnConfig",
  [
    "AdsGuidanceActionsRawFbts",
    "AdsMgmtColumn",
    "AdsMgmtTableColumnConfigGroupLevelOverrides",
    "AdsMgmtTableDefaultColumnConfig",
    "AdsMgmtTableInsightsColumnLevelOverrides",
    "AdsMgmtTableMetadataColumnLevelOverrides",
    "AdsMgmtTableUIColumnLevelOverrides",
    "AdsOSQuickViewExperimentUtils",
    "filterObject",
    "memoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return r("filterObject")(t, function (e) {
        return e !== void 0;
      });
    };
    function s(t) {
      var n = []
        .concat(r("AdsMgmtTableColumnConfigGroupLevelOverrides"), [
          r("AdsMgmtTableUIColumnLevelOverrides"),
          r("AdsMgmtTableInsightsColumnLevelOverrides"),
          r("AdsMgmtTableMetadataColumnLevelOverrides"),
        ])
        .reduce(function (n, r) {
          return r.isApplicable(t)
            ? babelHelpers.extends({}, n, e(r.getProps(t)))
            : n;
        }, {});
      return t.id === r("AdsMgmtColumn").RECOMMENDATIONS_GUIDANCE &&
        (n == null ? void 0 : n.id) ===
          r("AdsMgmtColumn").RECOMMENDATIONS_GUIDANCE &&
        o(
          "AdsOSQuickViewExperimentUtils",
        ).getIsAccountInOSQuickViewActionsRename()
        ? babelHelpers.extends({}, n, {
            label: o("AdsGuidanceActionsRawFbts").ACTIONS_COLUMN_HEADER_RENAMED,
          })
        : n;
    }
    function u(e) {
      return babelHelpers.extends(
        {},
        r("AdsMgmtTableDefaultColumnConfig"),
        s(e),
        { id: e.id },
      );
    }
    var c = r("memoizeWithArgs")(
      function (e) {
        return u(e);
      },
      function (e) {
        var t, n, r, o, a;
        return (
          e.id +
          ":" +
          ((t = e.attributionWindow) != null ? t : "null") +
          ":" +
          ((n = e.attributionWindowType) != null ? n : "null") +
          ":" +
          ((r = e.comparisonColumnType) != null ? r : "null") +
          ":" +
          ((o = e.objectType) != null ? o : "null") +
          ":" +
          ((a = e.budgetForecastType) != null ? a : "null")
        );
      },
    );
    l.default = c;
  },
  98,
);
