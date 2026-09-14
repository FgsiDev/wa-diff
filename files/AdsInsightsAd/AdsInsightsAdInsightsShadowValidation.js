__d(
  "AdsInsightsAdInsightsShadowValidation",
  [
    "AdsInsightsAdInsightsShadowValidationQuery.graphql",
    "AdsManagerRelayEnvironment",
    "Currency",
    "FBLogger",
    "Promise",
    "RelayHooks",
    "getErrorSafe",
    "gkx",
    "shadowValidateReverseInteropUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        "spend",
        "impressions",
        "reach",
        "results",
        "cost_per_result",
        "campaign_id",
        "adset_id",
        "ad_id",
      ],
      c = new Set(["campaign_id", "adset_id", "ad_id"]),
      d = new Set(["impressions", "reach"]),
      m = "insights_edge_ad_insights_sv",
      p = 100;
    function _(e, t, a, i, l) {
      try {
        var c;
        if (!r("gkx")("26420")) return;
        var d = g(a);
        if (
          d.length === 0 ||
          a.breakdowns.length > 0 ||
          a.objectType === "ACCOUNT"
        )
          return;
        var p = (c = e.fields) != null ? c : [],
          _ = p.filter(function (e) {
            return u.includes(e);
          });
        if (_.length === 0) {
          o("shadowValidateReverseInteropUtil").shadowValidate({
            fetchCurrentValuePromise: (s || (s = n("Promise"))).resolve(t),
            fetchShadowValidationPromise: s.resolve(null),
            getComparisonObjects: function () {
              return {
                current: { requestedFields: p.join(","), ids: d.join(",") },
                shadow: {},
              };
            },
            ids: d,
            moduleId: m + "_no_supported_metrics",
          });
          return;
        }
        var f = h(e, d),
          y = o("RelayHooks")
            .fetchQuery(r("AdsManagerRelayEnvironment"), R, f)
            .toPromise();
        o("shadowValidateReverseInteropUtil").shadowValidate({
          fetchCurrentValuePromise: (s || (s = n("Promise"))).resolve(t),
          fetchShadowValidationPromise: y,
          getComparisonObjects: function (t, n) {
            var e = b(t, n, _, a.objectType, l);
            return e;
          },
          ids: d,
          moduleId: m,
          extraAnnotations: { string: { level: a.objectType } },
        });
      } catch (e) {
        r("FBLogger")("ads_insights_sv").warn(
          "Shadow validation setup failed: %s",
          r("getErrorSafe")(e).message,
        );
      }
    }
    var f = ["campaign_group.id", "campaign.id", "adgroup.id", "account.id"];
    function g(e) {
      if (e.ids != null && e.ids.length > 0) return e.ids.map(String);
      for (var t of e.filter)
        if (f.includes(t.field) && t.operator === "IN") {
          var n = Array.isArray(t.value) ? t.value.map(String) : [];
          if (n.length > 0) return n;
        }
      return [];
    }
    function h(e, t) {
      var n = null,
        r = null,
        o = null;
      return (
        e.date_preset != null
          ? (n = e.date_preset)
          : e.time_range != null &&
            ((r = e.time_range.since + "T00:00"),
            (o = e.time_range.until + "T23:59:59")),
        { ids: t, datePreset: n, from: r, to: o }
      );
    }
    function y(e) {
      switch (e) {
        case "CAMPAIGN_GROUP":
          return "campaign_id";
        case "CAMPAIGN":
          return "adset_id";
        case "ADGROUP":
          return "ad_id";
        case "ACCOUNT":
          return "account_id";
        default:
          return "id";
      }
    }
    function C(e, t) {
      return d.has(e) && (t == null || t === "0" || t === 0) ? null : t;
    }
    function b(e, t, n, r, a) {
      var i,
        l,
        s = a != null ? o("Currency").getOffset(a) : p,
        u = {},
        d = y(r),
        m = (i = e == null ? void 0 : e.data) != null ? i : [];
      if (Array.isArray(m))
        for (var _ of m) {
          var f,
            g = String((f = _[d]) != null ? f : "");
          if (g !== "") {
            var h = {};
            for (var b of n)
              if (c.has(b)) h[b] = b === d ? g : null;
              else {
                var v;
                h[b] = C(b, (v = _[b]) != null ? v : null);
              }
            u[g] = h;
          }
        }
      var R = {},
        L = (l = t == null ? void 0 : t.nodes) != null ? l : [];
      for (var E of L) {
        var k, I;
        if (E != null) {
          var T = String((k = E.id) != null ? k : "");
          if (T !== "") {
            var D =
              (I = E.ad_insights) == null || (I = I.nodes) == null
                ? void 0
                : I[0];
            if (D != null) {
              var x = {};
              for (var $ of n)
                c.has($)
                  ? (x[$] = $ === d ? T : null)
                  : (x[$] = C($, S(D, $, s)));
              R[T] = x;
            }
          }
        }
      }
      return { current: u, shadow: R };
    }
    function v(e) {
      if (e == null) return null;
      for (var t of e)
        if (t.metric_id === "performance_indicator") return t.metric_value_raw;
      return null;
    }
    function S(e, t, n) {
      switch (t) {
        case "spend":
          return e.spend != null ? String(e.spend / n) : null;
        case "impressions": {
          var r = e.impressions_as_string;
          return r == null || r === "0" ? null : r;
        }
        case "reach":
          return e.reach != null ? String(e.reach) : null;
        case "results": {
          var o,
            a = (o = v(e.metrics)) != null ? o : "null";
          return e.results == null
            ? [{ indicator: a }]
            : [
                {
                  indicator: a,
                  values: [
                    {
                      value: String(e.results),
                      attribution_windows: ["default"],
                    },
                  ],
                },
              ];
        }
        case "cost_per_result": {
          var i,
            l = (i = v(e.metrics)) != null ? i : "null";
          return e.cost_per_result == null
            ? [{ indicator: l }]
            : [
                {
                  indicator: l,
                  values: [
                    {
                      value: String(Number((e.cost_per_result / n).toFixed(8))),
                      attribution_windows: ["default"],
                    },
                  ],
                },
              ];
        }
        default:
          return null;
      }
    }
    var R =
      e !== void 0
        ? e
        : (e = n("AdsInsightsAdInsightsShadowValidationQuery.graphql"));
    ((l.maybeShadowValidateAgainstAdInsights = _),
      (l.normalizeForComparison = b));
  },
  98,
);
