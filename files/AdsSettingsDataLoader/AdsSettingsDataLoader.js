__d(
  "AdsSettingsDataLoader",
  [
    "AdsBudgetPoolGatingUtils",
    "AdsGraphAPI",
    "AdsMgmt2025H1ExperimentUtils",
    "AdsMgmtPreloadingUtils",
    "AdsMgmtValueOptimizationQuickViewExperimentUtils",
    "AdsSettingsDataLoaderFields",
    "AdsSettingsDataLoaderPreloader",
    "GraphAPIFieldUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t;
      if (Object.prototype.hasOwnProperty.call(t, "default_column_preset")) {
        var r = t.default_column_preset;
        n = babelHelpers.extends({}, t, {
          default_column_preset_id:
            r != null && typeof r == "object" ? r.id : 0,
        });
      }
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .edge("user_settings")
        .post(n);
    }
    function s(e, t) {
      var n = {
        fields: [
          o("GraphAPIFieldUtils").getFieldWithSubfields("user_settings", t),
        ],
      };
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .preloadedBy(
          o("AdsSettingsDataLoaderPreloader").preloader,
          o("AdsMgmtPreloadingUtils").defaultConfig,
        )
        .declareOnly()
        .get(n);
    }
    function u(e, t) {
      return s(e, t)
        .go()
        .then(function (e) {
          var n = e.user_settings || {};
          return (
            typeof n == "object" &&
              t.forEach(function (e) {
                Object.prototype.hasOwnProperty.call(n, e) || (n[e] = void 0);
              }),
            n || {}
          );
        });
    }
    function c() {
      var e = o(
          "AdsMgmt2025H1ExperimentUtils",
        ).getIsAccountInScaleGoodCampaignsQuickViewWithoutExposure(),
        t = o(
          "AdsMgmt2025H1ExperimentUtils",
        ).getIsAccountInQuickViewsBEImprovementsWithoutExposure(),
        n = o(
          "AdsMgmtValueOptimizationQuickViewExperimentUtils",
        ).getIsAccountInQuickViewsValueOptimizedWithoutExposure(),
        a = o(
          "AdsBudgetPoolGatingUtils",
        ).getIsAccountInBudgetPoolsCreationWithoutExposure(),
        i = r("AdsSettingsDataLoaderFields").reporting_fields,
        l = d(
          i,
          new Map([
            ["high_performing_quick_view_created", e],
            ["recently_used_quick_views", t],
            ["has_used_quick_views_panel", t],
            ["value_optimized_qv_created", n],
            ["budget_pool_qv_created", a],
            ["value_qv_nux_impressions", n],
            ["value_suggested_column_status", n],
          ]),
        );
      return l;
    }
    function d(e, t) {
      if (t.size === 0) return e;
      var n = e,
        r = function () {
          var e = o[0],
            t = o[1];
          t ||
            (n = n.filter(function (t) {
              return t !== e;
            }));
        };
      for (var o of t.entries()) r();
      return n;
    }
    ((l.updateSettings = e), (l.loadSettings = u), (l.getReportingFields = c));
  },
  98,
);
