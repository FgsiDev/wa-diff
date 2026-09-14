__d(
  "AdsInsightsPortfolioGroupingData",
  [
    "AdsInsightsPortfolioGroupingDataMembersQuery.graphql",
    "AdsInsightsPortfolioGroupingDataQuery.graphql",
    "AdsManagerRelayEnvironment",
    "FBLogger",
    "Promise",
    "getErrorSafe",
    "promiseDone",
    "react-relay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 100,
      d =
        e !== void 0
          ? e
          : (e = n("AdsInsightsPortfolioGroupingDataQuery.graphql")),
      m =
        s !== void 0
          ? s
          : (s = n("AdsInsightsPortfolioGroupingDataMembersQuery.graphql")),
      p = new Map(),
      _ = new Map();
    function f(e) {
      var t;
      return (t = p.get(e)) != null ? t : null;
    }
    function g(e, t) {
      var n, r;
      return (n = (r = p.get(e)) == null ? void 0 : r.nameByID[t]) != null
        ? n
        : null;
    }
    function h(e, t) {
      var n, r;
      return (n = (r = p.get(e)) == null ? void 0 : r.memberIDsByID[t]) != null
        ? n
        : null;
    }
    function y(e) {
      var t = p.get(e);
      if (t == null) return null;
      var n = new Set();
      for (var r of t.ids)
        for (var o of (a = t.memberIDsByID[r]) != null ? a : []) {
          var a;
          n.add(o);
        }
      return Array.from(n);
    }
    function C(e, t, a) {
      return new (u || (u = n("Promise")))(function (n, i) {
        var l = [].concat(t);
        function s(t) {
          o("react-relay")
            .fetchQuery(r("AdsManagerRelayEnvironment"), m, {
              portfolioID: e,
              first: c,
              after: t,
            })
            .subscribe({
              next: function (t) {
                var e,
                  r,
                  o,
                  a =
                    t == null || (e = t.node) == null
                      ? void 0
                      : e.campaign_groups;
                for (var i of (u = a == null ? void 0 : a.edges) != null
                  ? u
                  : []) {
                  var u,
                    c,
                    d = i == null || (c = i.node) == null ? void 0 : c.id;
                  d != null && l.push(d);
                }
                var m =
                  a == null || (r = a.page_info) == null
                    ? void 0
                    : r.end_cursor;
                if (
                  (a == null || (o = a.page_info) == null
                    ? void 0
                    : o.has_next_page) === !0 &&
                  m != null
                ) {
                  s(m);
                  return;
                }
                n(l);
              },
              error: function (t) {
                return i(r("getErrorSafe")(t));
              },
            });
        }
        s(a);
      });
    }
    function b(e, t) {
      if (_.has(e)) {
        _.set(e, t);
        return;
      }
      _.set(e, t);
      var a = [],
        i = {},
        l = {},
        s = [];
      function m(t) {
        (r("FBLogger")("ads")
          .catching(t)
          .warn(
            "AdsInsightsPortfolioGroupingData: failed to fetch portfolios for account %s",
            e,
          ),
          _.delete(e));
      }
      function f() {
        p.set(e, { ids: a, memberIDsByID: l, nameByID: i });
        var t = _.get(e);
        (_.delete(e), t == null || t());
      }
      function g(t) {
        o("react-relay")
          .fetchQuery(r("AdsManagerRelayEnvironment"), d, {
            accountID: e,
            first: c,
            after: t,
            memberFirst: c,
          })
          .subscribe({
            next: function (t) {
              var e,
                o,
                c,
                d =
                  t == null || (e = t.ad_account) == null
                    ? void 0
                    : e.campaign_portfolios,
                p = function () {
                  var e,
                    t,
                    n = _ == null ? void 0 : _.node,
                    r = n == null ? void 0 : n.id,
                    o = n == null ? void 0 : n.name;
                  if (r == null || o == null) return 1;
                  (a.push(r), (i[r] = o));
                  var u = n == null ? void 0 : n.campaign_groups,
                    c = [];
                  for (var d of (m = u == null ? void 0 : u.edges) != null
                    ? m
                    : []) {
                    var m,
                      p,
                      f = d == null || (p = d.node) == null ? void 0 : p.id;
                    f != null && c.push(f);
                  }
                  l[r] = c;
                  var g =
                    u == null || (e = u.page_info) == null
                      ? void 0
                      : e.end_cursor;
                  (u == null || (t = u.page_info) == null
                    ? void 0
                    : t.has_next_page) === !0 &&
                    g != null &&
                    s.push(
                      C(r, c, g).then(function (e) {
                        l[r] = e;
                      }),
                    );
                };
              for (var _ of (h = d == null ? void 0 : d.edges) != null
                ? h
                : []) {
                var h;
                p();
              }
              var y =
                d == null || (o = d.page_info) == null ? void 0 : o.end_cursor;
              if (
                (d == null || (c = d.page_info) == null
                  ? void 0
                  : c.has_next_page) === !0 &&
                y != null
              ) {
                g(y);
                return;
              }
              if (s.length === 0) {
                f();
                return;
              }
              r("promiseDone")(
                (u || (u = n("Promise"))).all(s),
                f,
                function (e) {
                  return m(r("getErrorSafe")(e));
                },
              );
            },
            error: function (t) {
              return m(r("getErrorSafe")(t));
            },
          });
      }
      g(null);
    }
    function v(e) {
      (p.delete(e), _.delete(e));
    }
    function S() {
      (p.clear(), _.clear());
    }
    var R = {
        getCached: f,
        getClaimedCampaignIDs: y,
        getMemberIDs: h,
        getName: g,
        invalidate: v,
        invalidateAll: S,
        loadPortfolios: b,
      },
      L = R;
    l.default = L;
  },
  98,
);
