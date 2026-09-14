__d(
  "AdsPreviewsOculusTwilightFeedPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/oculus_twilight_feed",
        apiFormat: "OCULUS_TWILIGHT_FEED",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Oculus companion app feed"),
        positionName: s._(/*BTDS*/ "Oculus companion app feed"),
        positionDetails: s._(
          /*BTDS*/ "This placement is shown in the Feed section of the Oculus companion app.",
        ),
        icon: u("11457"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
