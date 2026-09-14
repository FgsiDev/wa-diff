__d(
  "AdsPreviewsMobileNativePlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/mobile_native",
        apiFormat: "MOBILE_NATIVE",
        loadingPlaceholderSize: { width: 255, height: 511 },
        name: s._(/*BTDS*/ "Audience Network native"),
        positionName: s._(/*BTDS*/ "Native"),
        positionDetails: null,
        icon: u("22171"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
