__d(
  "AdsUEditorAdgroupMediaMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsLinkPostFormat",
    "AdsMediaOverlaysUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorCallToActionMutators",
    "ApiAdObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a;
      return (
        n === void 0 && (n = !1),
        !o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e) ||
        o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e) ||
        (n &&
          (o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e) ||
            o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e)))
          ? e
          : o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
              o("AdsAdgroupTypeUtils").isVideoAd(e)
                ? r("ApiAdObjectTypes").VIDEO
                : (a = e.creative) == null
                  ? void 0
                  : a.object_type,
              e,
              t,
            )
      );
    }
    function s(e, t, n) {
      return r("AdsAdgroupSemanticFields").linkURL.set(n, e, t);
    }
    function u(e, t) {
      var n = r("AdsAdgroupSemanticFields").callToActionType.get(t, e);
      return n !== "LEARN_MORE" && n !== "SEE_DETAILS"
        ? o("AdsUEditorCallToActionMutators").setCallToActionType(
            e,
            r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
            t,
          )
        : e;
    }
    function c(e, t) {
      if (!o("AdsMediaOverlaysUtils").hasCustomOverlaySpec(e)) return e;
      var n = o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(e, t),
        a =
          n === r("AdsLinkPostFormat").MULTIPLE ||
          n === r("AdsLinkPostFormat").SINGLE;
      return a
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.custom_overlay_spec.delete(e);
    }
    function d(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.portrait_customizations.delete(e);
    }
    function m(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.portrait_customizations.specifications.delete(e);
    }
    function p(e) {
      return r("AdsAdgroupRecordAccessors").creative.ad_disclaimer_spec.delete(
        e,
      );
    }
    ((l.convertAssetFeedToObjectStorySpecForOneAdgroup = e),
      (l.setLinkURLForOneAdgroup = s),
      (l.setCollectionCallToActionTypeForOneAdgroup = u),
      (l.removeCustomOverlaySpecForOneAdgroup = c),
      (l.removePortraitCustomizationsSpec = d),
      (l.removePortraitCustomizationsBackgroundColorSpec = m),
      (l.removeAdDisclaimerSpec = p));
  },
  98,
);
