__d(
  "AdsBidStrategyLoggingUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {}
    function s(e, t, n) {
      var o;
      r("AdsInterfacesLogger").log(
        { eventName: e, data: ((o = { event_source: t }), (o.message = n), o) },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
      );
    }
    function u(e, t, n) {
      (t.get("bid_strategy"), n.get("bid_strategy"));
    }
    ((l.logInconsistentBidStrategy = e),
      (l.logFieldChange = s),
      (l.logBidStrategyChangeByBillingEvent = u));
  },
  98,
);
