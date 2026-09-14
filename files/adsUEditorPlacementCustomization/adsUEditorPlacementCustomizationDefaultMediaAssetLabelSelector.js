__d(
  "adsUEditorPlacementCustomizationDefaultMediaAssetLabelSelector",
  [
    "AdsAdgroupRecordAccessors",
    "AdsPlacementCustomizationDataUtils",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").adgroup.bulkByAccessor(
              r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                .asset_customization_rules.get,
            ),
            r("immutable").List(),
          ),
        ],
        function (t) {
          var e = o(
              "AdsPlacementCustomizationDataUtils",
            ).getDefaultAssetAdlabel(t, "post_label"),
            n = o("AdsPlacementCustomizationDataUtils").getDefaultAssetAdlabel(
              t,
              "video_label",
            ),
            r = o("AdsPlacementCustomizationDataUtils").getDefaultAssetAdlabel(
              t,
              "image_label",
            ),
            a,
            i;
          return (
            e != null
              ? ((a = "post"), (i = e))
              : r != null
                ? ((a = "image"), (i = r))
                : ((a = "video"), (i = n)),
            { defaultMediaFormat: a, defaultMediaLabel: i }
          );
        },
        {
          name:
            i.id +
            ".adsUEditorPlacementCustomizationDefaultMediaAssetLabelSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
