__d(
  "AdsInsightsBreakdownUtil",
  [
    "cssVar",
    "fbt",
    "invariant",
    "AdsInsightsBreakdown",
    "AdsInsightsBreakdownEntries",
    "AdsInsightsBreakdownEntryGroups",
    "AdsInsightsBreakdowns",
    "areEqual",
    "distinctArray",
    "flatMapArray",
    "isTruthy",
    "mapObject",
    "memoize",
  ],
  function (t, n, r, o, a, i, l, s, u, c) {
    "use strict";
    var e,
      d,
      m,
      p = parseInt("46px", 10),
      _ = u._(
        /*BTDS*/ "Time breakdowns aren't available while you're comparing date ranges.",
      ),
      f = [];
    function g(e) {
      return e.reduce(function (e, t) {
        return e + t;
      }, 0);
    }
    function h(t) {
      var n = L(t),
        o = (e || (e = r("mapObject"))).untyped(n, function (e, t) {
          var n = f.find(function (t) {
            return (d || (d = r("areEqual")))(e, t.old);
          });
          return n ? n.new : e;
        });
      return E(o);
    }
    function y(e, t) {
      return v(e, [t]);
    }
    var C = null;
    function b(e, t) {
      if (e.length !== t.length) return !1;
      var n = new Set(e);
      return t.every(function (e) {
        return n.has(e);
      });
    }
    function v(e, t) {
      var n = L(e);
      return (
        t.forEach(function (e) {
          var t = o("AdsInsightsBreakdownEntries").getConfig(e);
          if (
            ((n[t.type] = e),
            t.entryType === "composite" && t.breakdowns.length > 1)
          ) {
            var r = new Set(t.breakdowns);
            Object.keys(n).forEach(function (e) {
              if (e !== t.type) {
                var a = o("AdsInsightsBreakdownEntries").getConfig(n[e]);
                a.breakdowns.some(function (e) {
                  return r.has(e);
                }) && (n[e] = o("AdsInsightsBreakdownEntries").makeID(e, []));
              }
            });
          }
        }),
        (C = babelHelpers.extends({}, n)),
        E(n)
      );
    }
    function S(e) {
      var t = o("AdsInsightsBreakdownEntries").getConfig(e),
        n = t.type;
      return { type: n, breakdown: e };
    }
    function R(e) {
      return h(e);
    }
    function L(t) {
      if (C != null) {
        var n = C,
          a = E(n);
        if (b(a, t)) return babelHelpers.extends({}, n);
        C = null;
      }
      var i = r("AdsInsightsBreakdowns").groupByType(t),
        l = i.impression.filter(function (e) {
          return o("AdsInsightsBreakdownEntries").isAssetEntry(e);
        }),
        s = i.impression.filter(function (e) {
          return !l.includes(e);
        }),
        u = t.find(r("AdsInsightsBreakdowns").isObjectBreakdown),
        c = t.find(r("AdsInsightsBreakdowns").isMetaBreakdown),
        d = {
          action: i.action,
          demographics: i.demographics,
          geography: i.geography,
          time: i.time,
          impression: s.concat(c ? [c] : []),
          asset: l,
          object: u,
          creative: i.creative,
          attribution_setting_breakdowns: i.attribution_setting_breakdowns,
        };
      return (e || (e = r("mapObject"))).untyped(d, function (e, t) {
        switch (t) {
          case r("AdsInsightsBreakdownEntryGroups").ACTION:
          case r("AdsInsightsBreakdownEntryGroups").TIME:
          case r("AdsInsightsBreakdownEntryGroups").DEMOGRAPHICS:
          case r("AdsInsightsBreakdownEntryGroups").GEOGRAPHY:
          case r("AdsInsightsBreakdownEntryGroups").OBJECT:
          case r("AdsInsightsBreakdownEntryGroups")
            .ATTRIBUTION_SETTING_BREAKDOWNS:
          case r("AdsInsightsBreakdownEntryGroups").CREATIVE:
            return o("AdsInsightsBreakdownEntries").makeID(t, e ? [e] : []);
          case r("AdsInsightsBreakdownEntryGroups").ASSET:
          case r("AdsInsightsBreakdownEntryGroups").IMPRESSION:
            return o("AdsInsightsBreakdownEntries").makeID(t, e);
        }
      });
    }
    function E(e) {
      return (m || (m = r("distinctArray")))(
        r("flatMapArray")(
          [
            r("AdsInsightsBreakdownEntryGroups").TIME,
            r("AdsInsightsBreakdownEntryGroups").DEMOGRAPHICS,
            r("AdsInsightsBreakdownEntryGroups").GEOGRAPHY,
            r("AdsInsightsBreakdownEntryGroups").CREATIVE,
            r("AdsInsightsBreakdownEntryGroups").IMPRESSION,
            r("AdsInsightsBreakdownEntryGroups").ACTION,
            r("AdsInsightsBreakdownEntryGroups").ASSET,
            r("AdsInsightsBreakdownEntryGroups").OBJECT,
            r("AdsInsightsBreakdownEntryGroups").ATTRIBUTION_SETTING_BREAKDOWNS,
          ],
          function (t) {
            return o("AdsInsightsBreakdownEntries").getConfig(e[t]).breakdowns;
          },
        ),
      );
    }
    var k = r("memoize")(function () {
      return L([]);
    });
    function I(e) {
      var t = {},
        n = {},
        r = {},
        a = {},
        i = {},
        l = {};
      return (
        Object.keys(e).forEach(function (t) {
          var s = o("AdsInsightsBreakdownEntries").getConfig(e[t]);
          ((s.unsupported || []).forEach(function (e) {
            return (n[e] = !0);
          }),
            s.breakdowns.forEach(function (e) {
              return (r[e] = !0);
            }),
            s.breakdowns.length > 0 && (a[s.type] = !0),
            i[s.type] || (i[s.type] = {}),
            s.breakdowns.forEach(function (e) {
              return (i[s.type][e] = !0);
            }),
            l[s.type] || (l[s.type] = {}),
            (s.unsupported || []).forEach(function (e) {
              return (l[s.type][e] = !0);
            }));
        }),
        o("AdsInsightsBreakdownEntries")
          .getAllEntries()
          .forEach(function (e) {
            var s = o("AdsInsightsBreakdownEntries").getConfig(e);
            if (a[s.type]) {
              var u = s.type,
                c = s.breakdowns.some(function (e) {
                  return n[e]
                    ? Object.keys(l).some(function (t) {
                        return t !== u && l[t][e];
                      })
                    : !1;
                }),
                d = (s.unsupported || []).some(function (e) {
                  return r[e]
                    ? Object.keys(i).some(function (t) {
                        return t !== u && i[t][e];
                      })
                    : !1;
                });
              (c || d) && (t[e] = !0);
              return;
            }
            (s.breakdowns.some(function (e) {
              return n[e];
            }) ||
              (s.unsupported || []).some(function (e) {
                return r[e];
              })) &&
              (t[e] = !0);
          }),
        t
      );
    }
    function T(e) {
      var t = {};
      return (
        o("AdsInsightsBreakdownEntries")
          .getAllEntries()
          .forEach(function (n) {
            var r = o("AdsInsightsBreakdownEntries").getConfig(n);
            e.comparisonTimeRange &&
              r.unsupportedWithComparison === !0 &&
              (t[n] = _);
          }),
        t
      );
    }
    function D(e) {
      var t = [],
        n = [],
        o = [],
        a = null,
        i = null,
        l = null;
      return (
        e.forEach(function (e) {
          t || c(0, 153164);
          var i = r("AdsInsightsBreakdowns").getDescriptor(e),
            l = i.action,
            s = i.creative,
            u = i.impression,
            d = i.metaBreakdown,
            m = i.timeIncrement,
            p = i.timeInDays;
          r("isTruthy")(p)
            ? (a = p)
            : r("isTruthy")(m)
              ? (a = m)
              : r("isTruthy")(l)
                ? t.push.apply(t, r("AdsInsightsBreakdowns").getFields(l))
                : r("isTruthy")(u)
                  ? n.push(u)
                  : r("isTruthy")(s)
                    ? n.push(s)
                    : r("isTruthy")(d) && o.push(d);
        }),
        t.length && (t.push("action_type"), (i = ["action_type"]), (l = t)),
        {
          action_breakdowns: l,
          breakdowns: n.length ? n : null,
          meta_breakdowns: o.length ? o : null,
          time_increment: a,
          summary_action_breakdowns: i,
        }
      );
    }
    function x(e, t) {
      return (t ? p : 0) + g(e.map($)) + 10 * (e.length - 1) + 30 + 1;
    }
    function $(e) {
      var t = r("AdsInsightsBreakdowns").getDescriptor(e),
        n = t.action,
        o = t.impression,
        a = t.timeIncrement,
        i = t.timeInDays;
      return i === 1
        ? 70
        : r("isTruthy")(i) || r("isTruthy")(a)
          ? 140
          : o === "age"
            ? 50
            : o === "gender"
              ? 70
              : o === "placement"
                ? 200
                : o === "country"
                  ? 150
                  : o === "pa_creator_ig_handle" || o === "msa_seller_name"
                    ? 350
                    : o === r("AdsInsightsBreakdown").REGION_PLACEMENT
                      ? 150
                      : o === "place_page_id"
                        ? 350
                        : o === "platform_position"
                          ? 160
                          : n === "action_device" ||
                              n === "action_video_type" ||
                              n === "conversion_destination" ||
                              n === "signal_source_bucket"
                            ? 100
                            : 150;
    }
    function P(e) {
      var t = Object.keys(e),
        n = t.filter(function (t) {
          return e[t] !== t;
        }),
        r = [];
      return (
        n.forEach(function (t) {
          return r.push(e[t]);
        }),
        r
      );
    }
    var N = "impression_device",
      M = "impression_device,publisher_platform",
      w =
        "device_platform,impression_device,platform_position,publisher_platform",
      A = "hourly_stats_aggregated_by_audience_time_zone",
      F = ["comscore_market", A, N, M, w, "frequency_value"],
      O = [A, N, M, w],
      B = new Map([
        ["OPT_IN__COMSCORE", "comscore_market"],
        ["OPT_IN__TIME_OF_DAY_VIEWER_TZ", A],
        ["OPT_IN__IMPRESSION_DEVICE", N],
        ["OPT_IN__PLATFORM_DEVICE", M],
        ["OPT_IN__PLACEMENT_DEVICE", w],
        ["OPT_IN__REACH_FREQUENCY", "frequency_value"],
      ]),
      W = new Map([
        ["comscore_market", "OPT_IN__COMSCORE"],
        [A, "OPT_IN__TIME_OF_DAY_VIEWER_TZ"],
        [N, "OPT_IN__IMPRESSION_DEVICE"],
        [M, "OPT_IN__PLATFORM_DEVICE"],
        [w, "OPT_IN__PLACEMENT_DEVICE"],
        ["frequency_value", "OPT_IN__REACH_FREQUENCY"],
      ]);
    function q(e) {
      return e == null ? null : B.get(e);
    }
    function U(e) {
      return W.get(e);
    }
    ((l.applyBreakdownEntry = y),
      (l.applyBreakdownEntries = v),
      (l.getTypeAndBreakdown = S),
      (l.sanitize = R),
      (l.toEntries = L),
      (l.fromEntries = E),
      (l.getDefaultEntries = k),
      (l.getUnsupportedBreakdowns = I),
      (l.getUnsupportedBreakdownsInView = T),
      (l.toAPIParams = D),
      (l.getNameColumnWidth = x),
      (l.getWidth = $),
      (l.getSelectedBreakdown = P),
      (l.BREAKDOWNS_WITH_OPT_IN = F),
      (l.BREAKDOWNS_WITH_OPT_IN_H1_2026 = O),
      (l.convertPersonalizationTypeToBreakdownId = q),
      (l.convertBreakdownIdToPersonalizationType = U));
  },
  226,
);
