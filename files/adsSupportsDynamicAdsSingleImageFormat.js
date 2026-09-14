__d(
  "adsSupportsDynamicAdsSingleImageFormat",
  [
    "AdsAPIObjectives",
    "AdsBuyingTypes",
    "AdsClickToCallDynamicAdsUtils",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      if (i || l) return !0;
      if (e !== r("AdsBuyingTypes").AUCTION) return !1;
      var u = o("AdsODAXUtils").maybeTranslateObjective(t, n, a);
      if (o("AdsClickToCallDynamicAdsUtils").isDynamicCallAdEligible(u, n))
        return !0;
      if (u === r("AdsAPIObjectives").CONVERSIONS)
        switch (n) {
          case r("AdsPromotedObjectTypes").PIXEL:
          case r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL:
          case r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM:
          case r("AdsPromotedObjectTypes").CANVAS_APP:
          case r("AdsPromotedObjectTypes").MOBILE_APP:
          case r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE:
          case r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE:
          case r("AdsPromotedObjectTypes").WEB_AND_APP:
            return !0;
          case r("AdsPromotedObjectTypes").MESSENGER:
          case r("AdsPromotedObjectTypes").WHATSAPP:
            return s;
          default:
            return !1;
        }
      if (
        (t === r("AdsAPIObjectives").LINK_CLICKS &&
          n === r("AdsPromotedObjectTypes").WEBSITE) ||
        (t === r("AdsAPIObjectives").APP_INSTALLS &&
          n === r("AdsPromotedObjectTypes").MOBILE_APP)
      )
        return !0;
      if (u === r("AdsAPIObjectives").MESSAGES)
        switch (n) {
          case r("AdsPromotedObjectTypes").MESSENGER:
          case r("AdsPromotedObjectTypes").WHATSAPP:
            return s;
          default:
            return !1;
        }
      return !1;
    }
    l.default = e;
  },
  98,
);
