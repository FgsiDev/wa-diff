__d(
  "AdsPreviewsInstreamVideoFullscreenIosPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instream_video_fullscreen_ios",
        apiFormat: "INSTREAM_VIDEO_FULLSCREEN_IOS",
        customizationGroup: "FACEBOOK_INSTREAM",
        loadingPlaceholderSize: { width: 320, height: 580 },
        name: s._(/*BTDS*/ "Facebook in-stream reels (fullscreen - iOS)"),
        positionName: s._(/*BTDS*/ "In-stream videos fullscreen - iOS"),
        positionDetails: s._(/*BTDS*/ "Mobile - iOS"),
        icon: u("22168"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
