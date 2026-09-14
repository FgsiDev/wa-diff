__d(
  "AdsInsightsObjectLevels",
  [
    "invariant",
    "AdsInsightsAdjacencyListGraphs",
    "AdsObjectTypes",
    "memoize",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d =
        ((e = {}),
        (e[(c = r("AdsObjectTypes")).BUSINESS_ACCOUNT] = []),
        (e[c.ACCOUNT] = [c.BUSINESS_ACCOUNT]),
        (e[c.CAMPAIGN_GROUP] = [c.ACCOUNT]),
        (e[c.CAMPAIGN] = [c.CAMPAIGN_GROUP]),
        (e[c.ADGROUP] = [c.CAMPAIGN]),
        e);
    function m(e) {
      var t = d[e];
      return (t != null || s(0, 2543, e), t);
    }
    var p = function () {
        var e,
          t = new Set([
            (e = r("AdsObjectTypes")).BUSINESS_ACCOUNT,
            e.ACCOUNT,
            e.CAMPAIGN_GROUP,
            e.CAMPAIGN,
            e.ADGROUP,
          ]),
          n = new Map();
        for (var a of t) n.set(a, new Set(m(a)));
        var i = {
            nodes: t,
            nexts: n,
            prevs: o("AdsInsightsAdjacencyListGraphs").reverseEdges(t, n),
          },
          l = o("AdsInsightsAdjacencyListGraphs").transitiveClosure(i);
        return { nodes: t, graph: i, closedGraph: l };
      },
      _ = r("memoize")(p),
      f =
        ((u = {}),
        (u[c.BUSINESS_ACCOUNT] = 5),
        (u[c.ACCOUNT] = 4),
        (u[c.CAMPAIGN_GROUP] = 3),
        (u[c.CAMPAIGN] = 2),
        (u[c.ADGROUP] = 1),
        u);
    function g(e) {
      var t = f[e];
      return (t != null || s(0, 2543, e), t);
    }
    function h(e) {
      var t = _(),
        n = t.graph;
      return r("nullthrows")(n.prevs.get(e));
    }
    function y(e, t) {
      var n = _(),
        o = n.closedGraph;
      return e === t
        ? 0
        : r("nullthrows")(o.nexts.get(e)).has(t)
          ? -1
          : r("nullthrows")(o.nexts.get(t)).has(e)
            ? 1
            : NaN;
    }
    function C(e, t) {
      var n = _(),
        o = n.closedGraph;
      return r("nullthrows")(o.nexts.get(e)).has(t);
    }
    var b = {
      ACCOUNT: "ad_account",
      CAMPAIGN_GROUP: "campaign",
      CAMPAIGN: "ad_set",
      ADGROUP: "ad",
    };
    function v(e) {
      var t = b[e];
      return t == null
        ? s(!1, "no mapping found from ObjectLevel to AdObjectLevelsType")
        : t;
    }
    ((l.toIndex = g),
      (l.getLowers = h),
      (l.partialCompare = y),
      (l.lowerThan = C),
      (l.toAdObjectLevel = v));
  },
  98,
);
