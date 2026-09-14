__d(
  "AdsSetCTAEventFieldsForPlacementCustomizedAds",
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
    function e(e, t, n, a, i, l) {
      var s;
      if (!o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e))
        return e;
      var u = r("AdsAdgroupSemanticFields").callToAction.get(t, e);
      if (!(u instanceof r("immutable").List)) return e;
      var c = o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").callToAction,
          u
            .setIn([0, "value", "event_id"], a)
            .setIn([0, "value", "link"], n)
            .toArray(),
        ),
        d =
          (s = e.creative) == null || (s = s.asset_feed_spec) == null
            ? void 0
            : s.asset_customization_rules;
      return (
        d == null ||
          (i == null && l == null) ||
          d.forEach(function (e) {
            var a = o(
              "AdsPlacementAssetTargetingRuleUtils",
            ).convertTargetingRuleToPlacementList(e);
            ((c = o(
              "AdsUEditorAdgroupUrlMutators",
            ).addPlacementCustomizationUrl(
              c,
              t,
              a,
              { website_url: n },
              a.isEmpty(),
            )),
              i != null &&
                (c = o(
                  "AdsUEditorAdgroupHeadlineMutators",
                ).addPlacementCustomizationHeadline(
                  c,
                  t,
                  a,
                  r("immutable").List([i]),
                  a.isEmpty(),
                )),
              l != null &&
                (c = o(
                  "AdsUEditorAdgroupBodyMutators",
                ).addPlacementCustomizationBody(
                  c,
                  t,
                  a,
                  r("immutable").List([l]),
                  a.isEmpty(),
                )));
          }),
        c
      );
    }
    l.setCTAEventFieldsForPlacementCustomizedAds = e;
  },
  98,
);
