__d(
  "adsShouldIgnoreStickySettingSelector",
  [
    "AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors",
    "adsCreateSelector",
    "userSettingsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("userSettingsSelector"),
          o("AdsUEditorIsEligibleForAutoflowLiteDefaultOnSelectors")
            .adsUEditorIsGBGUnmanagedSelector,
        ],
        function (t, n) {
          var e =
            t == null
              ? void 0
              : t.mapValue(function (e) {
                  return (
                    e.sticky_setting_after_default_on !== "OPTED_IN" &&
                    e.sticky_setting_after_default_on !== "OPTED_OUT"
                  );
                });
          return n && (e == null ? void 0 : e.getValue()) === !1;
        },
        { name: i.id + ".adsShouldIgnoreStickySettingSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
