__d(
  "AdsPEBootloadRouteHelper",
  ["AdsPERouteName", "AdsPERouterHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("AdsPERouterHelper").getRouter();
      e != null &&
        (e.preloadRoute(r("AdsPERouteName").ADS),
        e.preloadRoute(r("AdsPERouteName").ADSETS),
        e.preloadRoute(r("AdsPERouteName").CAMPAIGNS));
    }
    function s() {
      var t = r("AdsPERouterHelper").getRouter();
      t != null &&
        (e(),
        t.preloadRoute(r("AdsPERouteName").CAMPAIGNS_EDIT),
        t.preloadRoute(r("AdsPERouteName").ADSETS_EDIT),
        t.preloadRoute(r("AdsPERouteName").ADS_EDIT),
        t.preloadRoute(r("AdsPERouteName").CAMPAIGNS_INSIGHTS),
        t.preloadRoute(r("AdsPERouteName").ADSETS_INSIGHTS),
        t.preloadRoute(r("AdsPERouteName").ADS_INSIGHTS),
        t.preloadRoute(r("AdsPERouteName").CREATION_PACKAGE),
        t.preloadRoute(r("AdsPERouteName").CAMPAIGNS_EDIT_STANDALONE),
        t.preloadRoute(r("AdsPERouteName").ADSETS_EDIT_STANDALONE),
        t.preloadRoute(r("AdsPERouteName").ADS_EDIT_STANDALONE));
    }
    ((l.preloadTableRoutes = e), (l.preloadRoutes = s));
  },
  98,
);
