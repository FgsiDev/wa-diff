__d(
  "AdsInsightsEVCUtils",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "1d_click_1d_ev",
      "1d_view_1d_click_1d_ev",
      "7d_click_1d_ev",
      "1d_view_7d_click_1d_ev",
    ]);
    function s(t) {
      return e.has(t);
    }
    l.checkEvcAttributionSetting = s;
  },
  98,
);
