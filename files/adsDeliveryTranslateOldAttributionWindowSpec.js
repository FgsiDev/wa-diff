__d(
  "adsDeliveryTranslateOldAttributionWindowSpec",
  [
    "invariant",
    "AccountAttributionEvent",
    "AdConvAttrWindows",
    "AdConvViewAttrWindows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = [];
      if (
        e.attribution_window_days != null &&
        e.attribution_window_days !== 0
      ) {
        var n = e.attribution_window_days;
        t.push({
          event_type: r("AccountAttributionEvent").CLICK_THROUGH,
          window_days: n,
        });
      }
      if (
        e.view_through_attribution_window_days != null &&
        e.attribution_window_days !== 0
      ) {
        var o = e.view_through_attribution_window_days;
        t.push({
          event_type: r("AccountAttributionEvent").VIEW_THROUGH,
          window_days: o,
        });
      }
      return t;
    }
    l.default = e;
  },
  98,
);
