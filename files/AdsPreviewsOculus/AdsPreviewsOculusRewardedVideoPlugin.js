__d(
  "AdsPreviewsOculusRewardedVideoPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/oculus_rewarded_video",
        apiFormat: "OCULUS_REWARDED_VIDEO",
        loadingPlaceholderSize: { width: 320, height: 569 },
        name: s._(/*BTDS*/ "Oculus in-app rewarded videos"),
        positionName: s._(/*BTDS*/ "Oculus in-app rewarded videos"),
        positionDetails: s._(
          /*BTDS*/ "This placement is shown inside rewarded videos in Oculus apps.",
        ),
        icon: u("158128"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
