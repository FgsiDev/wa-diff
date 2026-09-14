__d(
  "adsHasValidAdlabelsForPACAds",
  [
    "adsPlacementAssetCustomizableFields",
    "isAdgroupAssetFeedRulesConsistentWithField",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("isAdgroupAssetFeedRulesConsistentWithField")(e, t, n);
      return (
        o.status === "UNKNOWN_LABEL_IN_TARGETING_RULE" ||
        o.status === "INCONSISTENT_LABEL_IN_ASSET_LIST_AND_TARGETING_RULE"
      );
    }
    function s(t) {
      var n = [];
      return (
        r("adsPlacementAssetCustomizableFields").forEach(function (r) {
          var o = r.assetFeedField,
            a = r.targetingRuleField;
          e(t, o, a) && n.push(o);
        }),
        n
      );
    }
    l.default = s;
  },
  98,
);
