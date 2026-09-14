__d(
  "adsDeliveryUpdateEngagedVideoViewAttributionWindow",
  ["AccountAttributionEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t == null)
        return e.filter(function (e) {
          return (
            e.event_type !== r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW
          );
        });
      var n = {
        event_type: r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW,
        window_days: t,
      };
      return e
        .filter(function (e) {
          return (
            e.event_type !== r("AccountAttributionEvent").ENGAGED_VIDEO_VIEW
          );
        })
        .concat([n]);
    }
    l.default = e;
  },
  98,
);
