__d(
  "adsPlacementAssetMutationConvertExistingPostToPACSpecMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsUnifiedCreativeAPIFields",
    "adsPlacementAssetMutationAddCustomizationMedia",
    "adsPlacementAssetMutationSetAdlabelForAllCustomizations",
    "adsPlacementAssetMutationSetInitialTargetingRule",
    "adsPlacementCustomizationConvertPostAdToPAC",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      var s,
        u,
        c,
        d,
        m,
        p = e;
      p = r("adsPlacementCustomizationConvertPostAdToPAC")(e, n);
      var _ = o("AdsAssetFeedUtils").hasPostFormat(e),
        f = r("immutable").Map({});
      if (
        ((s = e.creative) == null ? void 0 : s.object_story_id) != null &&
        !_
      ) {
        var g;
        f = r("immutable").Map(((g = {}), (g.use_existing_post = !0), g));
      }
      if (
        ((u = e.creative) == null ? void 0 : u.source_instagram_media_id) !=
          null &&
        !_
      ) {
        var h;
        f = r("immutable").Map(((h = {}), (h.use_ig_existing_post = !0), h));
      }
      var y, C;
      l === !0 &&
      ((c = p) == null ||
      (c = c.creative) == null ||
      (c = c.asset_feed_spec) == null
        ? void 0
        : c.posts) != null
        ? ((y = r("AdsUnifiedCreativeAPIFields").post), (C = "post_label"))
        : ((d = p) == null ||
            (d = d.creative) == null ||
            (d = d.asset_feed_spec) == null
              ? void 0
              : d.images) != null
          ? ((y = r("AdsUnifiedCreativeAPIFields").imageHash),
            (C = "image_label"))
          : ((y = r("AdsUnifiedCreativeAPIFields").videoID),
            (C = "video_label"));
      var b = o(
        "AdsPlacementAssetUtils",
      ).makeUniqueLabelNameForPlacementAsset();
      p = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(p, t, y, 0, b);
      var v =
          (m = p.creative) == null || (m = m.asset_feed_spec) == null
            ? void 0
            : m.asset_customization_rules,
        S = o("AdsPlacementAssetTargetingRuleUtils").addDefaultPlacementToRules(
          v != null ? v : r("immutable").List(),
        );
      p = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(S, p);
      var R = !1;
      (a &&
        (R = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).hasCustomizationForAssetGroups(S, a)),
        !R &&
          a &&
          (p = r("adsPlacementAssetMutationAddCustomizationMedia")(
            p,
            a,
            i,
            t,
          )));
      var L = r("adsPlacementAssetMutationSetAdlabelForAllCustomizations")(
        p,
        t,
      );
      return (
        L.newAdlabels.forEach(function (e, t) {
          var n;
          return (
            (f = f.set(t, r("immutable").Map(((n = {}), (n.name = e), n)))),
            !0
          );
        }),
        (p = L.updatedAdgroup),
        (p = r("adsPlacementAssetMutationSetInitialTargetingRule")(p, C, b, f)),
        p
      );
    }
    l.default = e;
  },
  98,
);
