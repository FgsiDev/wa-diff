__d(
  "AdsUEditorInstagramAdgroupSpecUtils",
  [
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedMutationUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUnifiedCreativeAPIFields",
    "adsPlacementAssetMutationRemoveMultiplePlacementsFromCustomization",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").List(["story", "stream"]);
    function s(e, t) {
      var n,
        a =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules;
      if (a == null) return e;
      var i = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).convertTargetingRulesListToPlacementList(a, null, !0),
        l = i.filter(function (e) {
          return !c(e);
        });
      return r(
        "adsPlacementAssetMutationRemoveMultiplePlacementsFromCustomization",
      )(e, t, l);
    }
    function u(e, t, n) {
      var a = r("AdsAdgroupSemanticFields").linkURL.get(t, e);
      if (!(a instanceof r("immutable").List)) return e;
      for (var i = e, l = 0; l < a.size; l++)
        i = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          i,
          t,
          r("AdsUnifiedCreativeAPIFields").linkURL,
          l,
          "deeplink_url",
          n,
        );
      return i;
    }
    function c(t) {
      var n = t.platform,
        r = t.position;
      return n === "instagram" && e.includes(r);
    }
    ((l.removeInvalidCustomizationSpecs = s), (l.setDeeplink = u));
  },
  98,
);
