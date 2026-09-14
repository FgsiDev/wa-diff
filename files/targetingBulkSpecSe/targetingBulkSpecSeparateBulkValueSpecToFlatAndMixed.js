__d(
  "targetingBulkSpecSeparateBulkValueSpecToFlatAndMixed",
  ["AdsBulkValueUtils", "AdsMixedValue", "AdsUniformValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {},
        n = {};
      return (
        Object.entries(e).forEach(function (e) {
          var a = e[0],
            i = e[1];
          o("AdsBulkValueUtils").isBulkValue(i)
            ? i instanceof r("AdsMixedValue")
              ? (n[a] = i)
              : i instanceof r("AdsUniformValue") && (t[a] = i.getValue())
            : (t[a] = i);
        }),
        { flatSpec: t, mixedValueSpec: n }
      );
    }
    l.default = e;
  },
  98,
);
