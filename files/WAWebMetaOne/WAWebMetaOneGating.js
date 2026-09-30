__d(
  "WAWebMetaOneGating",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_meta_one_biz_tools_entry_point_enabled",
        ) === !0
      );
    }
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_subscriptions_entry_point_settings_enabled",
        ) === !0
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue("wa_meta_one_enabled") === !0 &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_meta_one_rollout_enabled",
        ) === !0
      );
    }
    ((l.isMetaOneBusinessToolsEntryPointEnabled = e),
      (l.isMetaOneSettingsEntryPointEnabled = s));
  },
  98,
);
