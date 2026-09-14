__d(
  "AdsMDOWeblinkPrefillUtils",
  ["AdsPromotedObjectTypes", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === r("AdsPromotedObjectTypes").WEB_AND_APP ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM
      );
    }
    function s(e, t) {
      if ((t === void 0 && (t = !1), t))
        switch (e) {
          case r("AdsPromotedObjectTypes").WEB_AND_APP:
            return r("gkx")("19410");
          case r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM:
            return r("gkx")("22148");
          case r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL:
            return r("gkx")("22167");
          default:
            return !1;
        }
      else
        switch (e) {
          case r("AdsPromotedObjectTypes").WEB_AND_APP:
            return r("gkx")("22169");
          case r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM:
            return r("gkx")("22170");
          case r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL:
            return r("gkx")("22172");
          default:
            return !1;
        }
    }
    ((l.isMDOWithWebsitePromotedObject = e),
      (l.isInAdsManagerMDOWeblinkPrefillGK = s));
  },
  98,
);
