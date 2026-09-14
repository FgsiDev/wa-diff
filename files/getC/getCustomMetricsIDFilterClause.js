__d(
  "getCustomMetricsIDFilterClause",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "custom_derived_metric_id";
    function l(t) {
      return { field: e, operator: "IN", value: t };
    }
    i.default = l;
  },
  66,
);
