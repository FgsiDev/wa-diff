__d(
  "AdsPEAdsetsRouteHandler",
  ["fbt", "AdsPENavigationRoutingUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Ad sets");
    }
    var u = o("AdsPENavigationRoutingUtils").redirectInOrderOnRouteWillMount([
      o("AdsPENavigationRoutingUtils").redirectToValidDateRangeReducer,
      o("AdsPENavigationRoutingUtils").redirectFromStandaloneRouteReducer,
    ]);
    ((l.getTitle = e), (l.routeWillMount = u));
  },
  226,
);
