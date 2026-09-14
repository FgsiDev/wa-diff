__d(
  "AdsPreviewsInstreamBannerFullscreenMobilePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon", "gkx"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instream_banner_fullscreen_mobile",
        apiFormat: r("gkx")("2702")
          ? "INSTREAM_BANNER_FULLSCREEN_IOS"
          : "INSTREAM_BANNER_FULLSCREEN_MOBILE",
        customizationGroup: "FACEBOOK_INSTREAM",
        loadingPlaceholderSize: { width: 320, height: 580 },
        name: r("gkx")("2702")
          ? s._(/*BTDS*/ "Facebook in-stream banner (fullscreen - mobile)")
          : s._(/*BTDS*/ "Facebook in-stream banner (fullscreen - Android)"),
        positionName: r("gkx")("2702")
          ? s._(/*BTDS*/ "In-stream banner fullscreen player - mobile")
          : s._(/*BTDS*/ "In-stream banner fullscreen player - Android"),
        positionDetails: r("gkx")("2702")
          ? s._(/*BTDS*/ "Mobile")
          : s._(/*BTDS*/ "Mobile - Android"),
        icon: u("22168"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
