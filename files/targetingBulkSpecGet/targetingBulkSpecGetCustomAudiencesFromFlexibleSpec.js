__d(
  "targetingBulkSpecGetCustomAudiencesFromFlexibleSpec",
  ["AdsBulkValueUtils", "distinctArrayBy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? null
        : o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
            if (e == null) return [];
            var t = [];
            return (
              e.forEach(function (e) {
                e.custom_audiences && t.push.apply(t, e.custom_audiences);
              }),
              r("distinctArrayBy")(t, function (e) {
                return e.id;
              })
            );
          });
    }
    function s(e) {
      return e == null
        ? null
        : o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
            if (e == null) return [];
            var t = [];
            return (
              e.forEach(function (e) {
                e.custom_audiences && t.push.apply(t, e.custom_audiences);
              }),
              r("distinctArrayBy")(t, function (e) {
                return e.id;
              })
            );
          });
    }
    ((l.targetingBulkSpecGetCustomAudiencesFromFlexibleSpec = e),
      (l.getCustomAudiencesFromFlexibleTargeting = s));
  },
  98,
);
