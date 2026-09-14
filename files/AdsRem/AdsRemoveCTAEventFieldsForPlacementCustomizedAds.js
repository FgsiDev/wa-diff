__d(
  "AdsRemoveCTAEventFieldsForPlacementCustomizedAds",
  [
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUnifiedCreativeAPIFields",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").List([""]);
    function s(t, n) {
      var a;
      if (!o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t))
        return t;
      var i = r("AdsAdgroupSemanticFields").callToAction.get(n, t);
      if (typeof i == "string" || i == null) return t;
      var l = o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
          t,
          n,
          r("AdsUnifiedCreativeAPIFields").callToAction,
          i.deleteIn([0, "value"]).toArray(),
        ),
        s =
          (a = t.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.asset_customization_rules;
      return (
        s == null ||
          s.forEach(function (t) {
            var r = o(
              "AdsPlacementAssetTargetingRuleUtils",
            ).convertTargetingRuleToPlacementList(t);
            ((l = o(
              "AdsUEditorAdgroupUrlMutators",
            ).addPlacementCustomizationUrl(
              l,
              n,
              r,
              { website_url: "" },
              r.isEmpty(),
            )),
              (l = o(
                "AdsUEditorAdgroupUrlMutators",
              ).addPlacementCustomizationUrl(
                l,
                n,
                r,
                { display_url: "" },
                r.isEmpty(),
              )),
              (l = o(
                "AdsUEditorAdgroupHeadlineMutators",
              ).addPlacementCustomizationHeadline(l, n, r, e, r.isEmpty())),
              (l = o(
                "AdsUEditorAdgroupBodyMutators",
              ).removePlacementCustomizationBody(l, n)),
              (l = o(
                "AdsUEditorAdgroupBodyMutators",
              ).addPlacementCustomizationBody(l, n, r, e, r.isEmpty())));
          }),
        l
      );
    }
    l.removeCTAEventFieldsForPlacementCustomizedAds = s;
  },
  98,
);
