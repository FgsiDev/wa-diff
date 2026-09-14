__d(
  "AdsInsightsFilter",
  [
    "invariant",
    "AdsInsightsFilterStatuses",
    "AdsInsightsGraphs",
    "AdsInsightsObjectLevels",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "areEqual",
    "immutable",
    "memoize",
    "minBy",
    "nullthrows",
    "partitionArray",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e, t) {
      return e < t ? -1 : e === t ? 0 : 1;
    }
    function c(e) {
      for (var t = []; ; ) {
        var n = e.next();
        if (n.done) break;
        t.push(n.value);
      }
      return t;
    }
    function d(e, t) {
      var n = new Set();
      for (var r of e) t.has(r) && n.add(r);
      return n;
    }
    var m = {
      actionTypeIn: function (t) {
        return { field: "action_type", operator: "IN", value: t };
      },
      idIn: function (t, n) {
        return { field: f(t, "id"), operator: "IN", value: n };
      },
      hasImpressions: function (t) {
        return {
          field: f(t, "impressions"),
          operator: "GREATER_THAN",
          value: 0,
        };
      },
      nameContains: function (t, n) {
        return { field: f(t, "name"), operator: "CONTAIN", value: n };
      },
      anyStatus: function (t) {
        return (
          H(t) || s(0, 5099, t),
          { field: f(t, "delivery_info"), operator: "IN", value: x(t) }
        );
      },
      excludeDeleted: function (t) {
        return (
          H(t) || s(0, 5099, t),
          { field: f(t, "delivery_info"), operator: "IN", value: P(t) }
        );
      },
      excludeArchivedDeleted: function (t) {
        return (
          H(t) || s(0, 5099, t),
          { field: f(t, "delivery_info"), operator: "IN", value: N(t) }
        );
      },
    };
    function p(e, t) {
      return [m.idIn(e, t)];
    }
    function _(e, t) {
      return [m.nameContains(e, t)];
    }
    function f(e, t) {
      var n = r("AdsObjectUtils").toPenguinType(e);
      return n + "." + t;
    }
    function g(e, t) {
      if (!e) return t;
      var n = r("AdsObjectUtils").toFilterObjectType(e);
      return n + "." + t;
    }
    function h(e) {
      if (e.indexOf(".") === -1) return [null, e];
      try {
        var t = y(e),
          n = t[0],
          r = t[1];
        return [n, r];
      } catch (t) {
        try {
          var o = C(e),
            a = o[0],
            i = o[1];
          return [a, i];
        } catch (t) {
          var l = e.indexOf(".");
          return [null, e.substring(l + 1)];
        }
      }
    }
    function y(e) {
      var t = e.split("."),
        n = t.shift(),
        o = t.join("."),
        a = r("AdsObjectUtils").fromPenguinType(n);
      return [a, o];
    }
    function C(e) {
      var t = e.split("."),
        n = t.shift(),
        o = t.join("."),
        a = r("AdsObjectUtils").fromFilterObjectType(n);
      return [a, o];
    }
    function b() {
      var e;
      return v((e = []).concat.apply(e, arguments));
    }
    function v(t) {
      var n = [],
        o = {};
      return (
        t.forEach(function (a) {
          var i = h(a.field),
            l = i[0];
          if (
            l &&
            !(
              o[a.field] &&
              o[a.field].find(function (t) {
                return (e || (e = r("areEqual")))(a, t);
              })
            )
          ) {
            var s = a;
            (a.field === f(l, "delivery_info") &&
              ((s = U(a, t)), (e || (e = r("areEqual")))(s, W(t, l)))) ||
              (n.push(s), (o[s.field] = o[s.field] || []), o[s.field].push(s));
          }
        }),
        n.sort(function (e, t) {
          return u(e.field, t.field);
        }),
        n
      );
    }
    function S(e) {
      var t = {},
        n = [];
      for (var a of e) {
        var i = h(a.field),
          l = i[0];
        l && (t[l] == null && ((t[l] = []), n.push(l)), t[l].push(a.value));
      }
      var s = r("minBy")(n, o("AdsInsightsObjectLevels").toIndex);
      if (s) {
        var u = t[s].map(function (e) {
          return new Set(e);
        });
        u.sort(function (e, t) {
          return e.size - t.size;
        });
        var c = u.reduce(d),
          p = Array.from(c);
        if (p.length === 0) {
          var _ = t[s];
          p = [].concat(_[_.length - 1]);
        }
        return (p.sort(), m.idIn(s, p));
      } else return;
    }
    function R(e) {
      var t = r("partitionArray")(e, function (e) {
          return h(e.field)[1] === "id";
        }),
        n = t[0],
        o = t[1],
        a = S(n);
      return a ? [a].concat(o) : o;
    }
    function L(e) {
      var t = E(e),
        n = t.idClause,
        o = t.nonIDClauses;
      return { idClause: r("nullthrows")(n), nonIDClauses: o };
    }
    function E(e) {
      var t = r("partitionArray")(e, function (e) {
          return h(e.field)[1] === "id";
        }),
        n = t[0],
        o = t[1];
      return { idClause: n.length > 0 ? n[0] : null, nonIDClauses: o };
    }
    function k(e) {
      var t = L(e),
        n = t.idClause,
        r = t.nonIDClauses,
        o = n.value,
        a = h(n.field),
        i = a[0];
      if (!i) return [];
      var l = o.map(function (e) {
        return m.idIn(i, [e]);
      });
      return l.map(function (e) {
        return r.concat(e);
      });
    }
    function I(e) {
      return H(e) ? [m.excludeDeleted(e)] : [];
    }
    function T(e) {
      return H(e)
        ? [
            {
              field: f(e, "effective_status"),
              operator: "NOT_IN",
              value: ["DELETED"],
            },
          ]
        : [];
    }
    function D(e) {
      return H(e) ? [m.excludeArchivedDeleted(e)] : [];
    }
    function x(e) {
      switch (e) {
        case r("AdsObjectTypes").CAMPAIGN_GROUP:
        case r("AdsObjectTypes").ADGROUP:
        case r("AdsObjectTypes").CAMPAIGN:
          return r("AdsInsightsFilterStatuses").all_statuses;
        default:
          s(0, 5100, e);
      }
    }
    function $(e) {
      switch (e) {
        case r("AdsObjectTypes").CAMPAIGN_GROUP:
        case r("AdsObjectTypes").ADGROUP:
        case r("AdsObjectTypes").CAMPAIGN:
          return [
            "active",
            "deleted",
            "error",
            "inactive",
            "off",
            "pending",
            "archived",
          ];
        default:
          s(0, 20222, e);
      }
    }
    function P(e) {
      return x(e).filter(function (e) {
        return e !== "permanently_deleted";
      });
    }
    function N(e) {
      return x(e).filter(function (e) {
        return e !== "archived" && e !== "permanently_deleted";
      });
    }
    function M() {
      return ["archived", "permanently_deleted"];
    }
    function w() {
      return ["deleted"];
    }
    function A(e, t) {
      var n;
      return (n = O(e, t)) != null ? n : W(e, t);
    }
    function F(e, t) {
      var n;
      return (n = B(e, t)) != null ? n : q(e, t);
    }
    function O(e, t) {
      return t === r("AdsObjectTypes").OPPORTUNITIES
        ? null
        : e.find(function (e) {
            return (
              e.field === f(t, "delivery_info") ||
              e.field === f(t, "effective_status")
            );
          });
    }
    function B(e, t) {
      return t === r("AdsObjectTypes").OPPORTUNITIES
        ? null
        : e.find(function (e) {
            return e.field === f(t, "delivery_status");
          });
    }
    function W(e, t) {
      var n = new Set(x(t)),
        r = c(
          o("AdsInsightsGraphs").bfs(o("AdsInsightsObjectLevels").getLowers, t),
        );
      return (
        r.forEach(function (r) {
          var o = O(e, r);
          if (o && r !== t) {
            var a = function (t) {
              o.value.find(function (e) {
                return e === t;
              }) || n.delete(t);
            };
            for (var i of M()) a(i);
          }
        }),
        { field: f(t, "delivery_info"), operator: "IN", value: Array.from(n) }
      );
    }
    function q(e, t) {
      var n = new Set($(t)),
        r = c(
          o("AdsInsightsGraphs").bfs(o("AdsInsightsObjectLevels").getLowers, t),
        );
      return (
        r.forEach(function (r) {
          var o = B(e, r);
          if (o && r !== t) {
            var a = function (t) {
              o.value.find(function (e) {
                return e === t;
              }) || n.delete(t);
            };
            for (var i of w()) a(i);
          }
        }),
        { field: f(t, "delivery_status"), operator: "IN", value: Array.from(n) }
      );
    }
    function U(e, t) {
      var n = h(e.field),
        r = n[0];
      if (!r) return e;
      var o = W(t, r),
        a = new Set(e.value);
      return (
        M().forEach(function (e) {
          o.value.find(function (t) {
            return t === e;
          }) || a.delete(e);
        }),
        { field: e.field, operator: e.operator, value: Array.from(a) }
      );
    }
    function V() {
      return [
        r("AdsObjectTypes").CAMPAIGN_GROUP,
        r("AdsObjectTypes").CAMPAIGN,
        r("AdsObjectTypes").ADGROUP,
      ];
    }
    function H(e) {
      return V().indexOf(e) !== -1;
    }
    var G = r("memoize")(function () {
      return r("immutable").Set([
        "bid_type",
        "delivery_info",
        "id",
        "name",
        "objective",
      ]);
    });
    function z(e) {
      var t = h(e),
        n = t[0],
        r = t[1];
      return !G().has(r);
    }
    function j(e) {
      return e.some(function (e) {
        return z(e.field);
      });
    }
    ((l.FilterClause = m),
      (l.idIn = p),
      (l.nameContains = _),
      (l.field = f),
      (l.fieldToUseFilterObjectType = g),
      (l.splitFieldWrapper = h),
      (l.splitField = y),
      (l.splitFieldFromFilterObjectType = C),
      (l.and = b),
      (l.normalize = v),
      (l.intersectIDClauses = S),
      (l.normalizeIDClauses = R),
      (l.extractIDClause = L),
      (l.extractIDClauseOrNull = E),
      (l.toSingleObjectFilters = k),
      (l.excludeDeleted = I),
      (l.excludeDeletedEffectiveStatus = T),
      (l.excludeArchivedDeleted = D),
      (l.getAllStatuses = x),
      (l.getNonDeletedStatuses = P),
      (l.getNonArchivedDeletedStatuses = N),
      (l.getDeliveryClause = A),
      (l.getNewDeliveryClause = F),
      (l.getExplicitDeliveryClause = O),
      (l.getImplicitDeliveryClause = W),
      (l.normalizeDeliveryClause = U),
      (l.getLevelsWithDeliveryStatus = V),
      (l.levelHasDeliveryStatus = H),
      (l.hasStatsClause = j));
  },
  98,
);
