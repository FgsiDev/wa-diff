__d(
  "targetingBulkSpecGetTargetingApiSpecFromState",
  [
    "AdsCommonTargetingApiTransformer",
    "targetingBulkSpecGetTargetingSpecFromState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("targetingBulkSpecGetTargetingSpecFromState")(e);
      return o("AdsCommonTargetingApiTransformer").targetingSpecToApi(t);
    }
    l.default = e;
  },
  98,
);
