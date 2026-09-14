__d(
  "AdsPreviewsOculusTwilightSearchPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/oculus_twilight_search",
        apiFormat: "OCULUS_TWILIGHT_SEARCH",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Oculus companion app search results"),
        positionName: s._(/*BTDS*/ "Oculus companion app search results"),
        positionDetails: s._(
          /*BTDS*/ "This placement is shown in the Search section of the Oculus companion app.",
        ),
        icon: u("155025"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
