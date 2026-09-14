__d(
  "AdsPreviewsFacebookGroupMallPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/facebook_group_mall",
        apiFormat: "FACEBOOK_GROUP_MALL",
        customizationGroup: "FACEBOOK_GROUPS",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Facebook Groups"),
        positionName: s._(/*BTDS*/ "Facebook Groups"),
        positionDetails: s._(/*BTDS*/ "Mobile"),
        icon: u("22175"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
