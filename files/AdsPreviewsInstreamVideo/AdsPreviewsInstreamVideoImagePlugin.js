__d(
  "AdsPreviewsInstreamVideoImagePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/instream_video_image",
        apiFormat: "INSTREAM_VIDEO_IMAGE",
        customizationGroup: "FACEBOOK_INSTREAM",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Facebook in-stream reels (image)"),
        positionName: s._(/*BTDS*/ "In-stream videos"),
        positionDetails: s._(/*BTDS*/ "Mobile"),
        icon: u("22168"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
