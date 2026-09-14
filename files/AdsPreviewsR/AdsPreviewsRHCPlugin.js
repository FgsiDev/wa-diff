__d(
  "AdsPreviewsRHCPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/rhc",
        apiFormat: "RIGHT_COLUMN_STANDARD",
        customizationGroup: "FACEBOOK_RHC",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Desktop right column"),
        positionName: s._(/*BTDS*/ "Right column"),
        positionDetails: s._(/*BTDS*/ "Desktop"),
        icon: u("22176"),
        isCustomOverlaysSupported: function () {
          return !0;
        },
      }),
      c = e;
    l.default = c;
  },
  226,
);
