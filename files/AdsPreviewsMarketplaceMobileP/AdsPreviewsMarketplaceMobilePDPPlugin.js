__d(
  "AdsPreviewsMarketplaceMobilePDPPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/marketplace_mobile_pdp",
        customizationGroup: "FACEBOOK_MARKETPLACE",
        apiFormat: "MARKETPLACE_MOBILE_PDP",
        loadingPlaceholderSize: { width: 378, height: 407 },
        name: s._(/*BTDS*/ "Marketplace category feed & details page"),
        positionName: s._(/*BTDS*/ "Marketplace category feed & details page"),
        positionDetails: s._(/*BTDS*/ "Mobile"),
        icon: u("724298"),
        isCustomOverlaysSupported: function () {
          return !1;
        },
      }),
      c = e;
    l.default = c;
  },
  226,
);
