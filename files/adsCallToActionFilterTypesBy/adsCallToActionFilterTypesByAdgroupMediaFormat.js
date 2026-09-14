__d(
  "adsCallToActionFilterTypesByAdgroupMediaFormat",
  ["AdsAPIObjectives", "AdsAdgroupTypeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = e;
      return (
        t === r("AdsAPIObjectives").REACH &&
          o("AdsAdgroupTypeUtils").isVideoAd(n) &&
          (a = a.filter(function (e) {
            return e.name !== "SAVE";
          })),
        t === r("AdsAPIObjectives").STORE_VISITS &&
          o("AdsAdgroupTypeUtils").isVideoAd(n) &&
          (a = a.filter(function (e) {
            return !["SHOP_NOW", "ORDER_NOW"].includes(e.name);
          })),
        a
      );
    }
    l.default = e;
  },
  98,
);
