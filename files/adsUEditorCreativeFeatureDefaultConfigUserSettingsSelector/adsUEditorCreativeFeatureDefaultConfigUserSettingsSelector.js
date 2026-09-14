__d(
  "adsUEditorCreativeFeatureDefaultConfigUserSettingsSelector",
  [
    "AdsAccountSettingsIdProvider",
    "adsCreateSelector",
    "adsUEditorCreativeFeatureDefaultConfigUserSettingsSelectorUtils",
    "adsUserSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountSettingsIdProvider").toFluxSelector(),
          o("adsUserSettingsSelector").adsUserSettingsSelector,
        ],
        function (t, n) {
          var e =
            t != null && n(t).hasValue() ? n(t).getValueEnforcing() : null;
          return o(
            "adsUEditorCreativeFeatureDefaultConfigUserSettingsSelectorUtils",
          ).adsUEditorCreativeFeatureDefaultConfigUserSettings(e);
        },
        {
          name:
            i.id +
            ".adsUEditorCreativeFeatureDefaultConfigUserSettingsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
