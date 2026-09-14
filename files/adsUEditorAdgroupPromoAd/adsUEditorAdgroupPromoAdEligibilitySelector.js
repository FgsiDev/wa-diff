__d(
  "adsUEditorAdgroupPromoAdEligibilitySelector",
  [
    "PromoAdsAdsManagerUtils",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
        ],
        function (n, a) {
          var t = r("gkx")("21556");
          return t
            ? !1
            : a.every(function (t) {
                return o("PromoAdsAdsManagerUtils").shouldShowPromoAdField(
                  t,
                  n,
                  e,
                );
              });
        },
        { name: i.id },
      );
    }
    l.getIsPromoAdsEligible = e;
  },
  98,
);
