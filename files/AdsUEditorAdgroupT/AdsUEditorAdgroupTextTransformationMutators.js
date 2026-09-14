__d(
  "AdsUEditorAdgroupTextTransformationMutators",
  ["AdsUEditorAdgroupDegreesOfFreedomMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsUEditorAdgroupDegreesOfFreedomMutators").addTransformations(
        e,
        { target: "text", transformations: t },
      );
    }
    function s(e, t) {
      return o(
        "AdsUEditorAdgroupDegreesOfFreedomMutators",
      ).removeTransformations(e, { target: "text", transformations: t });
    }
    ((l.addTextTransformations = e), (l.removeTextTransformations = s));
  },
  98,
);
