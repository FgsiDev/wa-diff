__d(
  "AdsInsightsTableColumnAction",
  [
    "AdsActionCategories",
    "AdsApplicationUtils",
    "AdsCustomPresetLocalStorageUtil",
    "AdsInsightsAttributionWindows",
    "AdsInsightsColumnChangeSource",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsTableChangeColumnsDataAction",
    "AdsMgmt2025PerformancePresetVariantGatingUtils",
    "AdsMgmtCampaignTableColumnSuggestionOrders",
    "AdsMgmtSuggestedColumnsGatingUtils",
    "AdsPERouterHelper",
    "AdsRecentlyUsedColumnsPresetLocalStorage",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = new Map();
      t.forEach(function (e, t) {
        n.set(e, t);
      });
      var r = -1;
      for (var o of e) {
        var a = n.get(o);
        if (a != null) {
          if (a < r) return !1;
          r = a;
        }
      }
      return !0;
    }
    function s(e, t, n) {
      var r = new Map();
      n.forEach(function (e, t) {
        r.set(e, t);
      });
      var o = [].concat(e),
        a = new Set(e);
      for (var i of t)
        if (!a.has(i)) {
          var l = r.get(i);
          if (l == null) {
            (o.push(i), a.add(i));
            continue;
          }
          for (var s = o.length, u = 0; u < o.length; u++) {
            var c = r.get(o[u]);
            if (c != null && c > l) {
              s = u;
              break;
            }
          }
          (o.splice(s, 0, i), a.add(i));
        }
      return o;
    }
    function u(t, n, a, i, l) {
      var u = void 0,
        d = r("AdsInsightsColumnPresetStoreUtil").resolve(
          t.columns,
          !1,
          t.attributionWindows,
        ),
        m = d.attributionWindows,
        p = d.ids,
        _ = r("immutable").OrderedSet(p),
        f = _;
      if (a)
        if (i === o("AdsInsightsColumnChangeSource").SUGGEST_MENU) {
          var g = o(
              "AdsMgmtCampaignTableColumnSuggestionOrders",
            ).getPerformancePresetVariance(),
            h = _.toArray(),
            y = e(h, g);
          if (
            (!y &&
              o(
                "AdsMgmt2025PerformancePresetVariantGatingUtils",
              ).getPerformancePresetVariantForAccountWithoutExposure() ===
                o("AdsMgmt2025PerformancePresetVariantGatingUtils")
                  .AdsInsightsPerformancePresetVariant.REORDER &&
              e(
                h,
                o("AdsMgmtCampaignTableColumnSuggestionOrders")
                  .DEFAULT_PERFORMANCE_PRESET_COLUMNS_ORDER,
              ) &&
              ((g = o(
                "AdsMgmtCampaignTableColumnSuggestionOrders",
              ).DEFAULT_PERFORMANCE_PRESET_COLUMNS_ORDER),
              (y = !0)),
            y)
          ) {
            var C = s(h, n, g);
            f = r("immutable").OrderedSet(C);
            var b = C.findIndex(function (e) {
              return n.includes(e);
            });
            b !== -1 && (u = b);
          } else ((f = _.union(n)), (u = f.size - 1));
        } else f = _.union(n);
      else f = _.subtract(n);
      return (
        o(
          "AdsMgmtSuggestedColumnsGatingUtils",
        ).shouldShowSuggestedColumnInSidePanel() &&
          (r(
            "AdsCustomPresetLocalStorageUtil",
          ).updateCustomPresetMetricsLocalStorage(f.toArray()),
          o(
            "AdsRecentlyUsedColumnsPresetLocalStorage",
          ).updateLocalStorageRecentlyUsedColumnPresets("PERFORMANCE")),
        c(f.toArray(), m, i, l),
        u
      );
    }
    function c(e, t, n, a, l) {
      l === void 0 && (l = null);
      var s = n === o("AdsInsightsColumnChangeSource").AUTOSUGGEST,
        u = function () {
          var o;
          r("AdsInsightsTableChangeColumnsDataAction").dispatch(
            {
              attributionWindows: t,
              category: r("AdsActionCategories").STATE_CHANGE,
              columnIDs: e,
              data: { noURLUpdate: s, source: n },
              logData:
                ((o = {}),
                (o.event_source = n),
                (o.is_in_bid_strategy_guidance_card_experiment = a),
                (o.message = l),
                o),
            },
            {
              line: "210",
              module: "AdsInsightsTableColumnAction.js",
              moduleID: i.id,
            },
          );
        };
      if (o("AdsApplicationUtils").isPowerEditor()) {
        var c = r("AdsPERouterHelper")
            .getRouteBuilder()
            .context({ changeColumnsSource: n })
            .action(u)
            .clearColumnPreset()
            .addColumnIDs(e),
          d = o("AdsInsightsAttributionWindows").getDefaultWindows();
        (t !== d && (c = c.addAttributionWindows(t)),
          n === o("AdsInsightsColumnChangeSource").QUICK_VIEW
            ? u()
            : c.navigate());
      } else u();
    }
    ((l.isArrayInOrder = e), (l.toggleColumns = u), (l.changeColumns = c));
  },
  98,
);
