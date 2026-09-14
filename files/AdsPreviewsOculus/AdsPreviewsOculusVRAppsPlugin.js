__d(
  "AdsPreviewsOculusVRAppsPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/oculus_vr_apps",
        apiFormat: "OCULUS_VR_APPS",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ "Oculus VR apps"),
        positionName: s._(/*BTDS*/ "Oculus VR apps"),
        positionDetails: s._(
          /*BTDS*/ "This placement is shown inside VR apps on Oculus.",
        ),
        icon: u("146971"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
