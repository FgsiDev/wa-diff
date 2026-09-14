__d(
  "catalogSegmentGetMerchantPredefinedUTMs",
  ["catalogSegmentGetPredefinedUTMsString"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      var t = e.utm_campaign,
        n = e.utm_medium,
        o = e.utm_source;
      return r("catalogSegmentGetPredefinedUTMsString")(o, n, t);
    }
    l.default = e;
  },
  98,
);
