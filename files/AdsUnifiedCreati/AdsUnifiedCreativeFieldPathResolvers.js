__d(
  "AdsUnifiedCreativeFieldPathResolvers",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPICallToActionPaths",
    "AdsAdgroupImageUtils",
    "AdsAppUtils",
    "AdsAssetFeedUtils",
    "AdsCreativeSpecTypes",
    "AdsObjectStorySpecUtils",
    "AdsObjectTypeUtils",
    "ApiAdObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsObjectTypeUtils").getCreativeSpecType(e);
    }
    function s(e) {
      var t;
      return !!(e != null && (t = e.creative) != null && t.object_story_spec);
    }
    var u = function (n) {
        if (!s(n)) return null;
        var t = e(n);
        return o("AdsObjectStorySpecUtils").getPaths(n, t).display_url;
      },
      c = function (n) {
        if (!s(n)) return null;
        var t = e(n);
        return o("AdsObjectStorySpecUtils").getPaths(n, t).eventID;
      },
      d = function (n, a, i) {
        var t = e(n);
        if (t === r("AdsCreativeSpecTypes").STANDARD)
          return r("AdsAPIAdgroupPaths").CREATIVE.TITLE;
        if (!s(n)) return null;
        var l = a.objective;
        if (r("AdsAppUtils").isAppObjective(l, i)) {
          if (t === r("AdsCreativeSpecTypes").VIDEO_DATA)
            return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .TITLE;
          if (t !== r("AdsCreativeSpecTypes").TEMPLATE_DATA)
            return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .NAME;
        }
        return o("AdsObjectStorySpecUtils").getPaths(n, t).headline;
      },
      m = function (t) {
        return o("AdsAdgroupImageUtils").getImageHashPath(t);
      },
      p = function (n) {
        var t,
          a = n == null || (t = n.creative) == null ? void 0 : t.object_type;
        if (a === r("ApiAdObjectTypes").DOMAIN)
          return r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_URL;
        var i = e(n);
        return i === r("AdsCreativeSpecTypes").STANDARD
          ? r("AdsAPIAdgroupPaths").CREATIVE.LINK_URL
          : s(n)
            ? o("AdsObjectStorySpecUtils").getPaths(n, i).link
            : null;
      },
      _ = function (n) {
        if (!s(n)) return null;
        var t = e(n);
        return o("AdsObjectStorySpecUtils").getPaths(n, t).link_description;
      },
      f = function (n) {
        var t = e(n);
        return t === r("AdsCreativeSpecTypes").STANDARD
          ? r("AdsAPIAdgroupPaths").CREATIVE.BODY
          : s(n)
            ? o("AdsObjectStorySpecUtils").getPaths(n, t).message
            : null;
      },
      g = function (n) {
        var t = e(n);
        return s(n)
          ? o("AdsObjectStorySpecUtils").getPaths(n, t).page_welcome_message
          : null;
      },
      h = function (n) {
        var t = e(n);
        return t === r("AdsCreativeSpecTypes").STANDARD || !s(n)
          ? null
          : o("AdsObjectStorySpecUtils").getPaths(n, t).call_to_action;
      },
      y = function (t, n, o) {
        var e = h(t, n, o);
        return e
          ? [].concat(e, r("AdsAPICallToActionPaths").VALUE.LEAD_GEN_FORM_ID)
          : null;
      },
      C = function (t, n, o) {
        var e = h(t, n, o);
        return e ? [].concat(e, r("AdsAPICallToActionPaths").VALUE.LINK) : null;
      },
      b = function (n, o, a) {
        var t = e(n);
        if (t === r("AdsCreativeSpecTypes").STANDARD)
          return r("AdsAPIAdgroupPaths").CREATIVE.CALL_TO_ACTION_TYPE;
        var i = h(n, o, a);
        return i ? [].concat(i, r("AdsAPICallToActionPaths").TYPE) : null;
      },
      v = function (n) {
        var t = e(n);
        return s(n)
          ? o("AdsObjectStorySpecUtils").getPaths(n, t).retailer_item_ids
          : null;
      },
      S = function (t, n, a) {
        var e = h(t, n, a);
        return o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(t)
          ? [].concat(
              r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
              ["0", "deeplink_url"],
            )
          : e
            ? [].concat(e, r("AdsAPICallToActionPaths").VALUE.APP_LINK)
            : null;
      },
      R = function () {
        return r("AdsAPIAdgroupPaths").CREATIVE.TEMPLATE_URL_SPEC.WEB.URL;
      },
      L = {
        appLink: S,
        callToAction: h,
        callToActionLeadGenFormID: y,
        callToActionType: b,
        callToActionValue: C,
        displayURL: u,
        eventID: c,
        headline: d,
        imageHash: m,
        link: p,
        linkDescription: _,
        message: f,
        pageWelcomeMessage: g,
        retailerItemIDs: v,
        websiteUrlDeepLink: R,
      },
      E = L;
    l.default = E;
  },
  98,
);
