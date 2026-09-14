__d(
  "AdsPreviewsDesktopFeedPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/desktop_feed",
        apiFormat: "DESKTOP_FEED_STANDARD",
        customizationGroup: "FACEBOOK_FEED",
        loadingPlaceholderSize: { width: 500, height: 400 },
        name: s._(/*BTDS*/ "Desktop Feed"),
        positionName: s._(/*BTDS*/ "Feed"),
        positionDetails: s._(/*BTDS*/ "Desktop"),
        icon: u("22174"),
        isCustomOverlaysSupported: function () {
          return !0;
        },
        isVideoOverlaysSupported: function () {
          return !0;
        },
      }),
      c = e;
    l.default = c;
  },
  226,
);
