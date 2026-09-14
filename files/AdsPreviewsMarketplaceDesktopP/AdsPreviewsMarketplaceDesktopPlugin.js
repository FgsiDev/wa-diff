__d(
  "AdsPreviewsMarketplaceDesktopPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/marketplace_desktop",
        apiFormat: "MARKETPLACE_DESKTOP",
        customizationGroup: "FACEBOOK_MARKETPLACE",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Desktop Marketplace feed"),
        positionName: s._(/*BTDS*/ "Marketplace"),
        positionDetails: s._(/*BTDS*/ "Desktop"),
        icon: u("724297"),
        isCustomOverlaysSupported: function () {
          return !1;
        },
      }),
      c = e;
    l.default = c;
  },
  226,
);
