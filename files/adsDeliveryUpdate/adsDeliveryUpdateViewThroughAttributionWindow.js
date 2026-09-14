__d(
  "adsDeliveryUpdateViewThroughAttributionWindow",
  ["AccountAttributionEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t == null)
        return e.filter(function (e) {
          return e.event_type !== r("AccountAttributionEvent").VIEW_THROUGH;
        });
      var n = {
        event_type: r("AccountAttributionEvent").VIEW_THROUGH,
        window_days: t,
      };
      return e
        .filter(function (e) {
          return e.event_type !== r("AccountAttributionEvent").VIEW_THROUGH;
        })
        .concat([n]);
    }
    l.default = e;
  },
  98,
);
