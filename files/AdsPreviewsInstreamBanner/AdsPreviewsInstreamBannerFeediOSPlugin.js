__d(
  "AdsPreviewsInstreamBannerFeediOSPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instream_banner_feed_ios",
        apiFormat: "INSTREAM_BANNER_FEED_IOS",
        customizationGroup: "FACEBOOK_INSTREAM",
        loadingPlaceholderSize: { width: 320, height: 498 },
        name: s._(/*BTDS*/ "Facebook in-stream banner (mobile - iOS)"),
        positionName: s._(/*BTDS*/ "In-stream banners"),
        positionDetails: s._(/*BTDS*/ "Mobile"),
        icon: u("2026160"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
