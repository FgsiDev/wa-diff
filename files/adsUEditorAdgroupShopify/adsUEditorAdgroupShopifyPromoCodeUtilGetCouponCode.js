__d(
  "adsUEditorAdgroupShopifyPromoCodeUtilGetCouponCode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
        "(?:\\n*|\\b) (?<!no | No )(?:code|coupon code|coupon)(?:\\s*)(?:[:-]*) (\\S+)",
      l = /(?:[^a-zA-Z0-9_]*)(\S+?)(?:[^a-zA-Z0-9_]*$)/i;
    function s(t) {
      var n = new RegExp(e, "i");
      return u(t, n);
    }
    function u(e, t) {
      var n = e.match(t);
      if (n === null) return null;
      var r = n[1].match(l);
      return r == null ? n[1] : r[1];
    }
    i.getCouponCodeFromText = s;
  },
  66,
);
