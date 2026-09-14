__d(
  "AdsBrandAwarenessAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsBrandAwarenessUtils",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsObjectTypeUtils",
    "AdsUEditorAdgroupCreativeFormat",
    "ApiAdObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultAdgroupCreativePlugin"), {
        type: "adgroup/creative",
        key: "brand-awareness",
        pivots: { objective: r("AdsAPIObjectives").BRAND_AWARENESS },
        getVideoLPPFormat: function (t) {
          return o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(t.adgroup) &&
            o("AdsObjectTypeUtils").getObjectTypeFromCreativeSpecType(
              t.adgroup,
            ) === r("ApiAdObjectTypes").VIDEO
            ? "VIDEO_LPP"
            : null;
        },
        allowUsingExistingPost: function () {
          return !0;
        },
        getSupportedCanvasCheckboxMediaFormats: function (t) {
          var e = t != null,
            n = new Set([
              r("AdsUEditorAdgroupCreativeFormat").CAROUSEL,
              r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE,
              r("AdsUEditorAdgroupCreativeFormat").SINGLE_VIDEO,
            ]);
          return (
            e && n.add(r("AdsUEditorAdgroupCreativeFormat").COLLECTIONS),
            n
          );
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
