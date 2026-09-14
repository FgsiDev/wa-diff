__d(
  "AdsUEditorAdgroupImageVariationMutators",
  ["AdsUEditorAdgroupDegreesOfFreedomMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsUEditorAdgroupDegreesOfFreedomMutators").addTransformations(
        e,
        { target: "image", transformations: t },
      );
    }
    function s(e, t) {
      return o(
        "AdsUEditorAdgroupDegreesOfFreedomMutators",
      ).removeTransformations(e, { target: "image", transformations: t });
    }
    ((l.addImageOptimizationFields = e), (l.removeImageOptimizationFields = s));
  },
  98,
);
