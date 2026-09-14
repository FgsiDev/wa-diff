__d(
  "AdsClickToCallDynamicAdsUtils",
  ["AdsAPIObjectives", "AdsPromotedObjectTypes", "CatalogVertical"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (
        ((t = e.promoted_object) == null ? void 0 : t.variation) ===
        "PRODUCT_SET_AND_PHONE_CALL"
      );
    }
    var s = function (t, n) {
      return u(t) && n === r("AdsPromotedObjectTypes").PHONE_CALL;
    };
    function u(e) {
      return (
        e === r("AdsAPIObjectives").CONVERSIONS ||
        e === r("AdsAPIObjectives").LEAD_GENERATION ||
        e === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    function c(e) {
      return (
        e === r("CatalogVertical").VEHICLES ||
        e === r("CatalogVertical").HOME_LISTINGS
      );
    }
    ((l.isL3EnabledDynamicCallAd = e),
      (l.isDynamicCallAdEligible = s),
      (l.isDynamicPhoneNumberSupportedForVertical = c));
  },
  98,
);
