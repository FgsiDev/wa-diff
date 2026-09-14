__d(
  "AdsWebsiteAdgroupCreativePluginCommon",
  [
    "AdsAudienceDirectConfig",
    "AdsObjectTypeUtils",
    "AdsUEditorAdgroupCreativeFormat",
    "ApiAdObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsObjectTypeUtils").getObjectTypeFromCreativeSpecType(
        e.adgroup,
      ) === r("ApiAdObjectTypes").VIDEO
        ? "VIDEO_LPP"
        : null;
    }
    function s() {
      var e;
      return new Set([
        (e = r("AdsUEditorAdgroupCreativeFormat")).CAROUSEL,
        e.COLLECTIONS,
        e.SINGLE_IMAGE,
        e.SINGLE_VIDEO,
      ]);
    }
    function u() {
      return !r("AdsAudienceDirectConfig").isDirectDealsUser;
    }
    var c = {
      getVideoLPPFormat: e,
      getSupportedCanvasCheckboxMediaFormats: s,
      allowUsingExistingPost: u,
    };
    l.default = c;
  },
  98,
);
