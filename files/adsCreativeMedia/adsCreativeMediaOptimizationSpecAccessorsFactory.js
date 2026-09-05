__d(
  "adsCreativeMediaOptimizationSpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          videos: o(
            "AdsAdObjectsAccessorUtils",
          ).nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.videos;
            },
            [].concat(t, ["videos"]),
            ["video_id", "ai_video_shortening", "auto_video_truncation"],
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
