__d(
  "AdsUniqueMetricsDeprecationUtils",
  [
    "AdsGenericFilterSet",
    "AdsInsightsColumnUtil",
    "adsReportBuilderCustomMetricsStatSelector",
    "filterObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "cost_per_unique_action_type:link_click",
      "cost_per_unique_action_type:onsite_conversion_messaging_first_reply",
      "cost_per_unique_action_type:onsite_conversion_total_messaging_connection",
      "cost_per_unique_action_type:outbound_click",
      "cost_per_unique_click",
      "cost_per_unique_outbound_click:outbound_click",
      "cpp",
      "frequency",
      "reach",
      "unique_actions:link_click",
      "unique_actions:onsite_conversion_messaging_first_reply",
      "unique_actions:onsite_conversion_total_messaging_connection",
      "unique_clicks",
      "unique_ctr",
      "unique_link_clicks_ctr",
      "unique_outbound_clicks_ctr:outbound_click",
      "unique_outbound_clicks:outbound_click",
      "unique_video_continuous_2_sec_watched_actions:video_view",
    ];
    function s(e, t, n) {
      var o = r("filterObject")(t, function (t) {
          return t != null && !e(t.field.name);
        }),
        a = n;
      if (a) {
        var i = [];
        (a.getValues().forEach(function (t) {
          e(t.field.name) || i.push(t);
        }),
          i.length > 0 ? (a = new (r("AdsGenericFilterSet"))(i)) : (a = null));
      }
      return { newFieldsConfig: o, newFilterSet: a };
    }
    var u = function (t) {
      return t
        .toLocaleLowerCase()
        .replace(".", "_")
        .replace(/campaign_|campaign_group_|adgroup_|ad_|adset_/, "");
    };
    function c(t) {
      if (t == null) return !1;
      var n = u(t);
      for (var r of e) if (n.includes(r)) return !1;
      var o = n.includes("unique_"),
        a = n.includes("cost_per_unique_"),
        i = m(n);
      return o || a || i;
    }
    function d(t) {
      if (t == null) return !1;
      var n = t.replace(".", "_");
      for (var r of e) if (n.includes(r)) return !1;
      var o = n.includes("unique_actions"),
        a = n.includes("cost_per_unique_action"),
        i = m(n);
      return o || a || i;
    }
    function m(e) {
      try {
        var t = r("AdsInsightsColumnUtil").getCustomMetricIDOrNull(e);
        if (t == null) return !1;
        var n = r("adsReportBuilderCustomMetricsStatSelector")();
        if (n == null) return !1;
        var o = n.get(t);
        if (o) {
          var a = o.get("formula");
          return d(a);
        }
        return !1;
      } catch (e) {
        return !1;
      }
    }
    ((l.removeMetricsFromFilters = s),
      (l.isDeprecatableMetricPE = c),
      (l.isDeprecatableMetric = d));
  },
  98,
);
