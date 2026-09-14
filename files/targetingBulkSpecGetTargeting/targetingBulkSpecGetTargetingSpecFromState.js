__d(
  "targetingBulkSpecGetTargetingSpecFromState",
  ["AdsUniformValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {};
      return (
        e.forEach(function (e, n) {
          e instanceof r("AdsUniformValue") && (t[n] = e.getValue());
        }),
        t
      );
    }
    l.default = e;
  },
  98,
);
