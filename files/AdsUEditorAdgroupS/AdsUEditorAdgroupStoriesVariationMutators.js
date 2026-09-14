__d(
  "AdsUEditorAdgroupStoriesVariationMutators",
  ["AdsUEditorAdgroupDegreesOfFreedomMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsUEditorAdgroupDegreesOfFreedomMutators").addTransformations(
        e,
        { target: "stories", transformations: t },
      );
    }
    function s(e, t) {
      return o(
        "AdsUEditorAdgroupDegreesOfFreedomMutators",
      ).removeTransformations(e, { target: "stories", transformations: t });
    }
    ((l.addStoriesOptimizationFields = e),
      (l.removeStoriesOptimizationFields = s));
  },
  98,
);
