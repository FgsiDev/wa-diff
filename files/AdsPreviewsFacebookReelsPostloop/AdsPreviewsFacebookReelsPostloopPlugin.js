__d(
  "AdsPreviewsFacebookReelsPostloopPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/facebook_reels_postloop",
        apiFormat: "FACEBOOK_REELS_POSTLOOP",
        customizationGroup: "FACEBOOK_REELS_OVERLAY",
        loadingPlaceholderSize: { width: 320, height: 580 },
        name: s._(/*BTDS*/ "Facebook Reels post-loop (fullscreen)"),
        positionName: s._(/*BTDS*/ "Ads on Reels"),
        positionDetails: s._(/*BTDS*/ "Reels"),
        icon: u("232407"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
