__d(
  "AdsPreviewsSuggestedVideoDesktopPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/suggested_video_desktop",
        apiFormat: "SUGGESTED_VIDEO_DESKTOP",
        customizationGroup: "SUGGESTED_VIDEO",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Facebook video feeds ads (Video tab - mobile)"),
        positionName: s._(/*BTDS*/ "Video feeds"),
        positionDetails: s._(/*BTDS*/ "Mobile"),
        icon: u("306246"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
