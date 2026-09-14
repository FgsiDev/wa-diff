__d(
  "adsRemoveIncompatiblePACCustomizations",
  [
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "adsPlacementAssetMutationRemoveMultiplePlacementsFromCustomization",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a,
        i =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.asset_customization_rules,
        l = o("AdsPlacementAssetUtils").getAssetGroupsFromPlacements(
          o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).convertTargetingRulesListToPlacementList(
            i != null ? i : r("immutable").List(),
            null,
            !0,
          ),
        ),
        s = o("AdsPlacementAssetUtils").getAssetGroupsFromPlacements(
          o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).convertCampaignTargetingObjectToPlacementList(t.targeting),
        ),
        u = r("immutable").Set(l).subtract(s),
        c = o("AdsPlacementAssetUtils").getPlacementsFromAssetGroups(
          u.toList(),
        );
      return r(
        "adsPlacementAssetMutationRemoveMultiplePlacementsFromCustomization",
      )(e, n, c);
    }
    l.default = e;
  },
  98,
);
