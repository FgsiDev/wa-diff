__d(
  "AdsUEditorAdgroupVideoVariationMutators",
  ["AdsUEditorAdgroupDegreesOfFreedomMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsUEditorAdgroupDegreesOfFreedomMutators").addTransformations(
        e,
        { target: "video", transformations: t },
      );
    }
    function s(e, t) {
      return o(
        "AdsUEditorAdgroupDegreesOfFreedomMutators",
      ).removeTransformations(e, { target: "video", transformations: t });
    }
    ((l.addVideoOptimizationFileds = e), (l.removeVideoOptimizationFileds = s));
  },
  98,
);
