__d(
  "AdsInsightsPrioritizedSegmentsUtils",
  [
    "AdsDataAtom",
    "AdsMgmtTableRowType",
    "AdsPEGroupConstants",
    "AdsPEListStore",
    "BinaryIndexedTree",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [],
      u = 1,
      c = 2;
    function d(e, t) {
      return e == null
        ? null
        : t == null || t.length === 0
          ? e
          : [].concat(
              e,
              t.filter(function (t) {
                return !e.includes(t);
              }),
            );
    }
    function m(t, n) {
      var o,
        a = t.prioritizedHighlightIDs;
      if (a == null) return null;
      (e || (e = r("AdsDataAtom"))).isDispatching() &&
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsPEListStore").getDispatchToken(),
        ]);
      var i = t.breakdowns.length === 0 ? u : c;
      return p(
        r("AdsPEListStore").getIDsWithNulls(t),
        a,
        (o = t.prioritizedCollapsedKeys) != null ? o : [],
        i,
        n,
      );
    }
    function p(e, t, n, a, i) {
      var l = new Set(t),
        u = [],
        c = [];
      for (var d of e)
        d != null &&
          (l.has(d) &&
          u.length < o("AdsPEGroupConstants").PRIORITIZED_HIGHLIGHTS_MAX
            ? u.push(d)
            : c.push(d));
      if (
        (u.length === 0 && c.length === 0) ||
        (u.length === 0 && t.length > 0)
      )
        return null;
      var m = function (t, l) {
          var e = {
              breakdownKey: "unit",
              breakdowns: s,
              filter: void 0,
              groupKey: t,
              groupType: null,
              groupObjectCount: l.length,
              rowType: o("AdsMgmtTableRowType").GROUP_HEADER,
            },
            u = [],
            c = r("BinaryIndexedTree").empty(0);
          return (
            n.includes(t) ||
              ((c = r("BinaryIndexedTree").uniform(l.length, a)),
              (u = l.map(function (e, t) {
                var n = i(e);
                return (c.set(t, n.rows.length), n);
              }))),
            { header: e, objectEntries: u, tree: c }
          );
        },
        p = [m(o("AdsPEGroupConstants").NEEDS_ATTENTION_GROUP_KEY, u)];
      return (
        c.length > 0 &&
          p.push(m(o("AdsPEGroupConstants").REST_OF_CAMPAIGNS_GROUP_KEY, c)),
        p
      );
    }
    ((l.unionMonitorFlaggedIDs = d),
      (l.maybeBuildPrioritizedSegments = m),
      (l.buildPrioritizedSegments = p));
  },
  98,
);
