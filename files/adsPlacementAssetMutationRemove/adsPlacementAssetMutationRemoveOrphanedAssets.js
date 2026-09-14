__d(
  "adsPlacementAssetMutationRemoveOrphanedAssets",
  [
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "adsPlacementAssetCustomizableFields",
    "isAdgroupAssetFeedRulesConsistentWithField",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u = e,
        c = r("isAdgroupAssetFeedRulesConsistentWithField")(u, n, a);
      if (c.status !== "UNUSED_LABEL_IN_ASSET_LIST") return u;
      var d = c.fieldTypeLabels;
      return (
        (u = d.reduce(function (e, n) {
          for (
            var r = e,
              a = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                r.getIn(i),
                n,
              ).index;
            a != null;
          ) {
            var u = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
                r,
                t,
                l,
                a,
                s,
                n,
              ),
              c = u.adgroupWithIsolatedAsset,
              d = u.isolatedAssetIndex;
            ((r = o("AdsAssetFeedMutationUtils").removeAssetAtIndex(
              c,
              t,
              l,
              d,
            )),
              (a = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                r.getIn(i),
                n,
              ).index));
          }
          return r;
        }, u)),
        u
      );
    }
    function s(t, n) {
      var o = t;
      return (
        (o = r("adsPlacementAssetCustomizableFields").reduce(function (t, r) {
          var o = r.assetFeedField,
            a = r.assetPath,
            i = r.labelField,
            l = r.specField,
            s = r.targetingRuleField;
          return e(t, n, o, s, a, l, i);
        }, o)),
        o
      );
    }
    l.default = s;
  },
  98,
);
