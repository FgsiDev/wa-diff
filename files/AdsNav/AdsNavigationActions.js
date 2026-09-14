__d(
  "AdsNavigationActions",
  [
    "AdFLEXRouteConfig",
    "AdsApplicationUtils",
    "AdsNavigationChangeNavigationStateDataAction",
    "AdsPERouterHelper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n === void 0 &&
        (n = { clearFilters: !1, closeTray: !1, breakdowns: null });
      var a = {};
      t !== void 0 && (a = { navSource: t });
      var l = function () {
        var t, n;
        r("AdsNavigationChangeNavigationStateDataAction").dispatch(
          babelHelpers.extends(
            {
              navState:
                (t =
                  r("AdFLEXRouteConfig") == null ||
                  (n = r("AdFLEXRouteConfig").get()) == null ||
                  n.getNavStateForSection == null
                    ? void 0
                    : n.getNavStateForSection(e)) != null
                  ? t
                  : { tool: "MANAGE_ADS", section: e },
            },
            a,
          ),
          { line: "60", module: "AdsNavigationActions.js", moduleID: i.id },
        );
      };
      if (o("AdsApplicationUtils").isPowerEditor()) {
        var s,
          u,
          c,
          d,
          m = r("AdsPERouterHelper")
            .getRouteBuilder()
            .section(e)
            .action(l)
            .params({ recommendation_source: null });
        (t != null && m.navSource(t),
          ((s = n) == null ? void 0 : s.closeTray) === !0 && m.closeTray(),
          ((u = n) == null ? void 0 : u.clearFilters) === !0 &&
            m.clearFilters());
        var p = (c = n) == null ? void 0 : c.breakdowns;
        if (p) {
          m.clearBreakdowns();
          for (var _ of p) m.addBreakdown(_.type, _.value);
        }
        if (((d = n) == null ? void 0 : d.filters) != null) {
          var f;
          m.filters((f = n) == null ? void 0 : f.filters);
        }
        m.navigate();
      } else l();
    }
    function s(e, t, n, o) {
      n === void 0 && (n = {});
      var a = r("AdsPERouterHelper").getRouteBuilder().navState(e);
      return (
        o != null && a.action(o),
        t != null && a.navSource(t),
        n.clearAllSelectedIDs === !0 && a.clearAllSelectedIDs(),
        n.params != null && a.params(n.params),
        a
      );
    }
    function u(e, t, n) {
      n === void 0 && (n = {});
      var a = function () {
        r("AdsNavigationChangeNavigationStateDataAction").dispatch(
          { navState: e, navSource: t },
          { line: "136", module: "AdsNavigationActions.js", moduleID: i.id },
        );
      };
      if (o("AdsApplicationUtils").isPowerEditor()) {
        var l = s(e, t, n, a);
        l.navigate();
      } else a();
    }
    function c(e, t, n) {
      n === void 0 && (n = {});
      var r = s(e, t, n);
      return r.getURI().getQualifiedURI();
    }
    ((l.changeLevel = e),
      (l.changeNavState = u),
      (l.getNavStateQualifiedURI = c));
  },
  98,
);
