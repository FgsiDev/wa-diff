__d(
  "AdsPreviewsInstreamBannerFullScreenIosPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon", "gkx"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instream_banner_fullscreen_ios",
        apiFormat: r("gkx")("2702")
          ? "INSTREAM_BANNER_FULLSCREEN_MOBILE"
          : "INSTREAM_BANNER_FULLSCREEN_IOS",
        customizationGroup: "FACEBOOK_INSTREAM",
        loadingPlaceholderSize: { width: 320, height: 580 },
        name: s._(/*BTDS*/ "Facebook in-stream banner (fullscreen - iOS)"),
        positionName: s._(/*BTDS*/ "In-stream banner fullscreen player - iOS"),
        positionDetails: s._(/*BTDS*/ "Mobile"),
        icon: u("22168"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
