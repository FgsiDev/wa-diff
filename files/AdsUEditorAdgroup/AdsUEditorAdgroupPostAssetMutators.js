__d(
  "AdsUEditorAdgroupPostAssetMutators",
  ["AdsAssetFeedMutationUtils", "AdsUnifiedCreativeAPIFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").post,
          n,
          "adlabels",
          a,
        ),
        l = i.adgroupWithIsolatedAsset,
        s = i.isolatedAssetIndex;
      return { adgroupWithIsolatedPostAsset: l, isolatedPostAssetIndex: s };
    }
    l.isolatePostAssetWithLabel = e;
  },
  98,
);
