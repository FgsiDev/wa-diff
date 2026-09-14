__d(
  "AdsInsightsBudgetPoolGroupingData",
  [
    "AdsInsightsBudgetPoolGroupingDataQuery.graphql",
    "AdsManagerRelayEnvironment",
    "FBLogger",
    "getErrorSafe",
    "react-relay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 100,
      u =
        e !== void 0
          ? e
          : (e = n("AdsInsightsBudgetPoolGroupingDataQuery.graphql")),
      c = new Map(),
      d = new Map();
    function m(e) {
      var t;
      return (t = c.get(e)) != null ? t : null;
    }
    function p(e, t) {
      var n, r;
      return (n = (r = c.get(e)) == null ? void 0 : r.nameByID[t]) != null
        ? n
        : null;
    }
    function _(e, t) {
      if (d.has(e)) {
        d.set(e, t);
        return;
      }
      d.set(e, t);
      var n = [],
        a = {};
      function i(t) {
        o("react-relay")
          .fetchQuery(r("AdsManagerRelayEnvironment"), u, {
            accountID: e,
            first: s,
            after: t,
          })
          .subscribe({
            next: function (r) {
              var t,
                o,
                l,
                s,
                u =
                  r == null || (t = r.ad_account) == null
                    ? void 0
                    : t.budget_pools,
                m = (o = u == null ? void 0 : u.edges) != null ? o : [];
              for (var p of m) {
                var _,
                  f,
                  g = p == null || (_ = p.node) == null ? void 0 : _.id,
                  h = p == null || (f = p.node) == null ? void 0 : f.name;
                g != null && h != null && (n.push(g), (a[g] = h));
              }
              var y =
                u == null || (l = u.page_info) == null ? void 0 : l.end_cursor;
              if (
                (u == null || (s = u.page_info) == null
                  ? void 0
                  : s.has_next_page) === !0 &&
                y != null
              ) {
                i(y);
                return;
              }
              c.set(e, { ids: n, nameByID: a });
              var C = d.get(e);
              (d.delete(e), C == null || C());
            },
            error: function (n) {
              var t = r("getErrorSafe")(n);
              (r("FBLogger")("ads")
                .catching(t)
                .warn(
                  "AdsInsightsBudgetPoolGroupingData: failed to fetch budget pools for account %s",
                  e,
                ),
                d.delete(e));
            },
          });
      }
      i(null);
    }
    function f() {
      (c.clear(), d.clear());
    }
    var g = { getCached: m, getName: p, invalidateAll: f, loadPools: _ },
      h = g;
    l.default = h;
  },
  98,
);
