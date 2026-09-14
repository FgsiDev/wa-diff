__d(
  "AdsProductTagsAdGroupMutatorUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsCreativeFeaturesUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsSuggestedProductTagsConstants",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
    "AdsUEditorAdgroupVideoMutators",
    "adsPlacementAssetMutationAddCustomizationMedia",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a,
        i = e,
        l =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.videos;
      if (l == null) return i;
      var s = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(l, r).index;
      if (s != null) {
        var u = o("AdsUEditorAdgroupVideoMutators").isolateVideoAssetWithLabel(
            e,
            t,
            s,
            r,
          ),
          c = u.adgroupWithIsolatedVideoAsset,
          d = u.isolatedVideoAssetIndex;
        ((i = o(
          "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
        ).applyInteractiveComponentSpecToVideoAsset(c, t, d, n)),
          (i = o("AdsUEditorAdgroupVideoMutators").removeDuplicateVideoAssets(
            i,
            t,
          )));
      }
      return i;
    }
    function s(e, t, n, r) {
      var a,
        i = e,
        l =
          (a = i.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.images;
      if (l == null) return i;
      var s = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(l, r).index;
      if (s != null) {
        var u = o("AdsUEditorAdgroupImageMutators").isolateImageAssetWithLabel(
            i,
            t,
            s,
            r,
          ),
          c = u.adgroupWithIsolatedImageAsset,
          d = u.isolatedImageAssetIndex;
        ((i = o(
          "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
        ).applyInteractiveComponentSpecToImageAsset(c, t, d, n)),
          (i = o("AdsUEditorAdgroupImageMutators").removeDuplicateImageAssets(
            i,
            t,
          )));
      }
      return i;
    }
    function u(e, t, n, a, i) {
      var l,
        s = e,
        u =
          (l = s.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.asset_customization_rules,
        c = o("AdsPlacementAssetTargetingRuleUtils").addDefaultPlacementToRules(
          u != null ? u : r("immutable").List(),
        );
      s = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(c, s);
      var d = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).hasCustomizationForAssetGroups(c, a);
      return (
        d ||
          (s = r("adsPlacementAssetMutationAddCustomizationMedia")(
            s,
            a,
            n,
            t,
            i,
          )),
        s
      );
    }
    function c(t, n, o) {
      var a, i;
      o === void 0 && (o = "image_label");
      var l = t,
        u =
          o === "image_label"
            ? (a = l.creative) == null || (a = a.asset_feed_spec) == null
              ? void 0
              : a.images
            : (i = l.creative) == null || (i = i.asset_feed_spec) == null
              ? void 0
              : i.videos;
      if (u == null) return l;
      var c = [];
      return (
        u.forEach(function (e) {
          var t = e == null ? void 0 : e.get("adlabels");
          t != null &&
            t.size > 0 &&
            t.forEach(function (e) {
              var t = e.get("name");
              t != null && c.push(t);
            });
        }),
        c.forEach(function (t) {
          o === "video_label"
            ? (l = e(l, n, r("immutable").List(), t))
            : (l = s(l, n, r("immutable").List(), t));
        }),
        l
      );
    }
    function d(e, t) {
      t === void 0 && (t = "image_label");
      var n = new Set();
      o("AdsSuggestedProductTagsConstants").GPT_SUPPORTED_FORMATS.forEach(
        function (r) {
          var a = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getLabelNameFromLabelFieldAndPlacement(e, r, t);
          n.add(a);
        },
      );
      var r = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getDefaultTargetRuleLabel(e, t);
      return (n.add(r), n);
    }
    function m(t, n, r, a) {
      var i = t,
        l = d(i, r);
      return (
        (i = c(i, n, r)),
        l.forEach(function (t) {
          r === "video_label"
            ? (i = e(
                i,
                n,
                o("AdsCreativeFeaturesUtils").getProductTagComponentsSpec(
                  a,
                  !0,
                ),
                t,
              ))
            : (i = s(
                i,
                n,
                o("AdsCreativeFeaturesUtils").getProductTagComponentsSpec(
                  a,
                  !1,
                  !0,
                ),
                t,
              ));
        }),
        i
      );
    }
    ((l.adsInsertProductTagsForVideoInAdgroup = e),
      (l.adsInsertProductTagsinAdgroup = s),
      (l.adsInsertCustomizationAssetGroup = u),
      (l.updateAdgroupWithProductTags = m));
  },
  98,
);
