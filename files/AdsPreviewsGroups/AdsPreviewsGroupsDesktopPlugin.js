__d(
  "AdsPreviewsGroupsDesktopPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/groups_desktop",
        apiFormat: "GROUPS_DESKTOP",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Facebook Groups (desktop)"),
        positionName: s._(/*BTDS*/ "Facebook Groups"),
        positionDetails: s._(/*BTDS*/ "Desktop"),
        icon: u("22174"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
