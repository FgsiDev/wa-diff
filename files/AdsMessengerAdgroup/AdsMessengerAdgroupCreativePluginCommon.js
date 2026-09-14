__d(
  "AdsMessengerAdgroupCreativePluginCommon",
  ["AdsObjectTypeUtils", "ApiAdObjectTypes", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !1;
    }
    function s() {
      return new Set([]);
    }
    function u() {
      return r("immutable").Set(["app_destination"]);
    }
    function c(e) {
      return o("AdsObjectTypeUtils").getObjectTypeFromCreativeSpecType(
        e.adgroup,
      ) === r("ApiAdObjectTypes").VIDEO
        ? "VIDEO_LPP"
        : null;
    }
    var d = {
      allowUsingExistingPost: e,
      getSupportedCanvasCheckboxMediaFormats: s,
      getSupportedCallToActiveValueFields: u,
      getVideoLPPFormat: c,
    };
    l.default = d;
  },
  98,
);
