__d(
  "AdsPreviewsMobileInterstitialPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/mobile_interstitial",
        apiFormat: "MOBILE_INTERSTITIAL",
        customizationGroup: "AUDIENCE_NETWORK_CLASSIC",
        loadingPlaceholderSize: { width: 285, height: 568 },
        name: s._(/*BTDS*/ "Audience Network interstitial"),
        positionName: s._(/*BTDS*/ "Interstitial"),
        positionDetails: null,
        icon: u("22169"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
