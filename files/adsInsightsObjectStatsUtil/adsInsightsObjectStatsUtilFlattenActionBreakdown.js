__d(
  "adsInsightsObjectStatsUtilFlattenActionBreakdown",
  [
    "AdsInsightsActionFieldTypes",
    "AdsInsightsActionGroups",
    "AdsInsightsAttributionWindows",
    "AdsInsightsBreakdowns",
    "AdsInsightsField",
    "AdsInsightsFields",
    "AdsInsightsValues",
    "getByPath",
    "getObjectValues",
    "mapObject",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {},
      u = "incremental_";
    r("getObjectValues")(r("AdsInsightsActionGroups")).forEach(function (e) {
      e !== "action_type" && (s[e] = !0);
    });
    function c(e) {
      var t = parseFloat(e);
      return isNaN(t) ? e : t;
    }
    function d(t, n, a) {
      var i = {};
      t.forEach(function (e) {
        return r("AdsInsightsBreakdowns")
          .getFields(e)
          .forEach(function (e) {
            return (i[e] = a[e]);
          });
      });
      var l = babelHelpers.extends({}, i),
        d = {},
        m = function (t) {
          var e = t || {},
            o = n ? e[r("AdsInsightsBreakdowns").getKeyField(n)] : void 0;
          if (n && o) {
            var a = r("AdsInsightsBreakdowns").isAggregateActionBreakdownValue(
                n,
                e[n],
              ),
              u;
            return (
              a
                ? (u = l)
                : (Object.prototype.hasOwnProperty.call(d, o) ||
                    (d[o] = babelHelpers.extends({}, i)),
                  (u = d[o])),
              r("AdsInsightsBreakdowns")
                .getFields(n)
                .forEach(function (t) {
                  return (r("nullthrows")(u)[t] = e[t]);
                }),
              u
            );
          } else
            return Object.keys(e).some(function (e) {
              return s[e];
            })
              ? {}
              : l;
        },
        p = function (n) {
          var t = a[n] || [];
          t.forEach(function (t) {
            var a = o("AdsInsightsFields").makeActionID(
              n,
              t.action_type ||
                t.custom_derived_metric_id ||
                t.interactive_component_sticker_response,
            );
            ((t = babelHelpers.extends({}, t)),
              n !== "video_play_retention_curve_actions" &&
                (t = (e || (e = r("mapObject"))).untyped(t, function (e, t) {
                  return t === "value" ||
                    o("AdsInsightsAttributionWindows").isValid(t)
                    ? c(e)
                    : e;
                })),
              (m(t)[a] = t),
              n === "website_ctr" &&
                (t.value =
                  typeof t.value == "number" ? t.value / 100 : t.value),
              (n === "video_avg_pct_watched_actions" ||
                n === "video_avg_percent_watched_actions" ||
                n === "outbound_clicks_ctr" ||
                n === "unique_outbound_clicks_ctr" ||
                n === "video_view_per_impression" ||
                n === "video_hook_rate" ||
                n === "video_hold_rate") &&
                (Object.keys(t).forEach(function (e) {
                  o("AdsInsightsAttributionWindows").isValid(e) &&
                    (t[e] = typeof t[e] == "number" ? t[e] / 100 : t[e]);
                }),
                (t.value =
                  typeof t.value == "number" ? t.value / 100 : t.value)));
          });
        },
        _ = function (t) {
          var e = [],
            n = [];
          a[t].forEach(function (t) {
            var r = t.indicator;
            typeof r == "string" && r.includes(u) ? n.push(t) : e.push(t);
          });
          var o = n.filter(function (t) {
              var n = t.indicator.replace(u, "");
              return e.some(function (e) {
                return e.indicator === n;
              });
            }),
            i = []
              .concat(e, o)
              .map(function (e) {
                return e.values;
              })
              .filter(Boolean)
              .flat();
          if (i.length === 0) m()[t] = a[t];
          else {
            var l = e[0] || {};
            i.forEach(function (e) {
              e = babelHelpers.extends({}, e);
              var n = m(e),
                o = r("getByPath")(n, [t, "0", "values"]) || [];
              (o.push(e),
                (n[t] = [babelHelpers.extends({}, l, { values: o })]));
            });
          }
        },
        f = function (t) {
          return JSON.parse(a[t]);
        };
      return (
        Object.keys(a).forEach(function (e) {
          if (
            o("AdsInsightsActionFieldTypes").isResultsType(e) ||
            o("AdsInsightsActionFieldTypes").isVideoRetentionType(e)
          )
            _(e);
          else if (
            o("AdsInsightsActionFieldTypes").isValid(e) ||
            e === "conversion_annotations"
          )
            p(e);
          else if (
            e === r("AdsInsightsField").DATE_START ||
            e === r("AdsInsightsField").DATE_STOP ||
            e === "conversion_count_setting" ||
            e === r("AdsInsightsField").ATTRIBUTION_SETTING
          )
            l[e] = a[e];
          else if (
            e !== r("AdsInsightsField").CAMPAIGN_END &&
            e !== r("AdsInsightsField").CAMPAIGN_GROUP_START &&
            e !== r("AdsInsightsField").CAMPAIGN_GROUP_END &&
            t.indexOf(e) === -1 &&
            o("AdsInsightsFields").isValid(e)
          )
            l[e] = o("AdsInsightsValues").fromAPI(
              o("AdsInsightsFields").getConfig(e),
              a[e],
            );
          else if (
            e === "results_anomaly" ||
            e === "amount_spend_anomaly" ||
            e === "cost_per_result_anomaly"
          ) {
            var n = f(e);
            l[e] = n !== 0 ? n : null;
          }
        }),
        { rows: r("getObjectValues")(d), summaryRow: l }
      );
    }
    l.default = d;
  },
  98,
);
