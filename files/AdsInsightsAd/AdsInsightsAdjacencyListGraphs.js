__d(
  "AdsInsightsAdjacencyListGraphs",
  ["AdsInsightsGraphs", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      for (var t = []; ; ) {
        var n = e.next();
        if (n.done) break;
        t.push(n.value);
      }
      return t;
    }
    function s(t) {
      var n = new Map();
      for (var a of t.nodes) {
        var i = new Set();
        n.set(a, i);
        var l = o("AdsInsightsGraphs").bfs(function (e) {
          return r("nullthrows")(t.nexts.get(e));
        }, a);
        l.next();
        for (var s of e(l)) i.add(s);
      }
      return { nodes: t.nodes, nexts: n, prevs: u(t.nodes, n) };
    }
    function u(e, t) {
      var n = new Map();
      for (var o of e) n.set(o, new Set());
      for (var a of e)
        for (var i of r("nullthrows")(t.get(a)))
          r("nullthrows")(n.get(i)).add(a);
      return n;
    }
    ((l.transitiveClosure = s), (l.reverseEdges = u));
  },
  98,
);
