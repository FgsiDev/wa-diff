__d(
  "AdsInsightsTimeBucketFilterBuilder",
  [
    "AdsGenericFilter",
    "AdsInsightsGroupDimensionConfigTypes",
    "AdsPEFilterFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (
        e.type !==
          o("AdsInsightsGroupDimensionConfigTypes").DimensionType.TIME_BUCKET ||
        e.timeBucketResolver == null
      )
        return null;
      var n = e.timeBucketResolver(t);
      if (n == null) return null;
      var a = r("AdsPEFilterFields")[e.filterName];
      return n.startMs == null && n.endMs == null
        ? [new (r("AdsGenericFilter"))(a, "IN_RANGE", [0, 0])]
        : n.startMs != null && n.endMs != null
          ? [new (r("AdsGenericFilter"))(a, "IN_RANGE", [n.startMs, n.endMs])]
          : n.startMs != null
            ? [new (r("AdsGenericFilter"))(a, "AFTER", n.startMs)]
            : [new (r("AdsGenericFilter"))(a, "BEFORE", n.endMs)];
    }
    l.default = e;
  },
  98,
);
