__d(
  "adsUEditorAssetFeedOptimizationTypeSelector",
  [
    "AdsAdgroupRecordAccessors",
    "AdsUEditorSelectors",
    "adsGetUniformValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").adgroup.bulkByAccessor(
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .optimization_type.get,
        ),
        null,
      ),
      s = e;
    l.default = s;
  },
  98,
);
