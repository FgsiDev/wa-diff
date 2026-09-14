__d(
  "AdsPreviewsFacebookReelsBannerPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon", "FacebookReelsOverlayStoreUtils"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e() {
      return o(
        "FacebookReelsOverlayStoreUtils",
      ).incontentCreativeGuideExperiment()
        ? s._(/*BTDS*/ "Facebook Reels banner (feed - mobile)")
        : s._(/*BTDS*/ "Facebook Reels banner (mobile)");
    }
    var c = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/facebook_reels_banner",
        apiFormat: "FACEBOOK_REELS_BANNER",
        customizationGroup: "FACEBOOK_REELS_OVERLAY",
        loadingPlaceholderSize: { width: 320, height: 580 },
        name: e(),
        positionName: s._(/*BTDS*/ "Ads on Reels"),
        positionDetails: s._(/*BTDS*/ "Reels"),
        icon: u("2026161"),
      }),
      d = c;
    l.default = d;
  },
  226,
);
