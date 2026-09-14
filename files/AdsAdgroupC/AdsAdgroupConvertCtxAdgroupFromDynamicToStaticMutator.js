__d(
  "AdsAdgroupConvertCtxAdgroupFromDynamicToStaticMutator",
  [
    "AdsChildAttachmentsUtils",
    "AdsUEditorAdgroupDynamicCarouselMutators",
    "AdsUEditorAdgroupDynamicMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i, l) {
      return o("AdsChildAttachmentsUtils").isCarouselAd(e)
        ? o(
            "AdsUEditorAdgroupDynamicCarouselMutators",
          ).transformDynamicToStaticCarouselMedia(
            e,
            t,
            { campaignGroup: r, campaign: n },
            !1,
            a,
            i,
          )
        : o(
            "AdsUEditorAdgroupDynamicMutators",
          ).transformAdgroupFromTemplateToSingleMediaLinkData(e, n, r, l);
    }
    l.default = e;
  },
  98,
);
