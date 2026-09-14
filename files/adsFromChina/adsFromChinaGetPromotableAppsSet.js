__d(
  "adsFromChinaGetPromotableAppsSet",
  ["AdsAppUrlUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [];
      return (
        e &&
          (e.promotable_urls &&
            (t = t.concat(
              e.promotable_urls.filter(function (e) {
                return r("AdsAppUrlUtils").isAppStoreURL(e);
              }),
            )),
          e.promotable_app_ids && (t = t.concat(e.promotable_app_ids))),
        t
      );
    }
    l.default = e;
  },
  98,
);
