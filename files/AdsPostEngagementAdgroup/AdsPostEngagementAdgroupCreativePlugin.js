__d(
  "AdsPostEngagementAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsUEditorAdgroupCreativeFormat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultAdgroupCreativePlugin"), {
        type: "adgroup/creative",
        key: "post-engagement",
        pivots: { objective: r("AdsAPIObjectives").POST_ENGAGEMENT },
        getSupportedMediaFormats: function (t) {
          return new Set(["IMAGE", "VIDEO"]);
        },
        isCanvasFormatEligible: function (t) {
          return !0;
        },
        isCanvasCollectionsOnly: function (t) {
          return !0;
        },
        getSupportedCanvasCheckboxMediaFormats: function () {
          return new Set([
            r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE,
            r("AdsUEditorAdgroupCreativeFormat").SINGLE_VIDEO,
            r("AdsUEditorAdgroupCreativeFormat").COLLECTIONS,
          ]);
        },
        allowUsingExistingPost: function () {
          return !0;
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
