__d(
  "AdsPreviewsOculusTwilightDeveloperUpdatePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/oculus_twilight_developer_update",
        apiFormat: "OCULUS_TWILIGHT_DEVELOPER_UPDATE",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Oculus companion app feed post"),
        positionName: s._(/*BTDS*/ "Oculus companion app feed post"),
        positionDetails: s._(
          /*BTDS*/ "This placement is shown in the feed post of the Oculus companion app.",
        ),
        icon: u("50750"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
