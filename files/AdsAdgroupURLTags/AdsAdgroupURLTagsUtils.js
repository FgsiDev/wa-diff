__d(
  "AdsAdgroupURLTagsUtils",
  [
    "AdsAPIObjectives",
    "AdsAppUtils",
    "AdsODAXUtils",
    "AdsOfflineAdUtils",
    "AdsPromotedObjectOmnichannelUtils",
    "AdsPromotedObjectTypes",
    "AdsWebsiteAdUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = r("AdsAPIObjectives")).BRAND_AWARENESS,
        e.CANVAS_APP_ENGAGEMENT,
        e.CANVAS_APP_INSTALLS,
        e.LEAD_GENERATION,
        e.MESSAGES,
        e.POST_ENGAGEMENT,
        e.REACH,
        e.OUTCOME_AWARENESS,
        e.EVENT_RESPONSES,
        e.PRODUCT_CATALOG_SALES,
        e.VIDEO_VIEWS,
        e.STORE_VISITS,
      ]);
    function u(e, t, n) {
      var a = o("AdsODAXUtils").maybeTranslateObjective(e, t, n);
      return (
        s.has(a) ||
        o("AdsWebsiteAdUtils").isWebsiteConversionsObjective(a, t) ||
        o("AdsWebsiteAdUtils").isWebsiteClickObjective(a, t) ||
        o("AdsWebsiteAdUtils").isWebsiteMessengerObjective(a, t) ||
        r("AdsAppUtils").isCanvasAppInstall(a, t) ||
        r("AdsAppUtils").isCanvasAppEngagement(a, t) ||
        o("AdsOfflineAdUtils").isOfflineObjective(a, t) ||
        t === r("AdsPromotedObjectTypes").PRODUCT_SET ||
        o(
          "AdsPromotedObjectOmnichannelUtils",
        ).OMNICHANNEL_PROMOTED_OBJECT_TYPES.includes(t) ||
        (e === r("AdsAPIObjectives").LINK_CLICKS &&
          t === r("AdsPromotedObjectTypes").MOBILE_APP) ||
        (r("gkx")("8390") &&
          e === r("AdsAPIObjectives").OUTCOME_SALES &&
          t === r("AdsPromotedObjectTypes").MOBILE_APP)
      );
    }
    l.supportsURLTags = u;
  },
  98,
);
