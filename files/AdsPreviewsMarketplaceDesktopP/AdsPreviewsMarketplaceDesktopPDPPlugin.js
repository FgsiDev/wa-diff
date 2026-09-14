__d(
  "AdsPreviewsMarketplaceDesktopPDPPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/marketplace_desktop_pdp",
        apiFormat: "MARKETPLACE_DESKTOP_PDP",
        customizationGroup: "FACEBOOK_MARKETPLACE",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Desktop Marketplace details page"),
        positionName: s._(/*BTDS*/ "Marketplace details page"),
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
