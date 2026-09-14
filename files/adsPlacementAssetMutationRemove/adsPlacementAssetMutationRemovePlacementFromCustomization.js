__d(
  "adsPlacementAssetMutationRemovePlacementFromCustomization",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupPostAssetMutators",
    "AdsUEditorAdgroupVideoMutators",
    "FBLogger",
    "adsContainsAssetCustomizationPlacement",
    "adsPlacementAssetMutationRemoveCustomizationAsset",
    "adsPlacementAssetMutationRemoveCustomizationCarousel",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e == null || e.size !== 1
        ? !1
        : e.some(function (e) {
            return e.platform === t.platform && e.position === t.position;
          });
    }
    function s(t, n, a, i) {
      var l,
        s = e(i, a),
        u =
          t == null ||
          (l = t.creative) == null ||
          (l = l.asset_feed_spec) == null
            ? void 0
            : l.asset_customization_rules;
      if (u == null) return t;
      var c = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).targetingRulesToAnyMediaLabelsPlacementListsMap(u, !s),
        d = null;
      if (
        (s
          ? (d = Array.from(c.entries()).find(function (e) {
              var t = e[1];
              return t != null && t.isEmpty();
            }))
          : (d = Array.from(c.entries()).find(function (e) {
              var t = e[1];
              return (
                t != null && r("adsContainsAssetCustomizationPlacement")(t, a)
              );
            })),
        d == null || r("isFalsey")(d[0]))
      )
        return t;
      var m = d,
        p = m[0],
        _ = m[1],
        f = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getMediaAssetTypeFromTargetRuleLabel(u, p),
        g;
      if (f === "post") {
        var h;
        g = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          (h = t.creative) == null || (h = h.asset_feed_spec) == null
            ? void 0
            : h.posts,
          p,
        ).index;
      } else if (f === "carousel") {
        var y;
        g = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          (y = t.creative) == null || (y = y.asset_feed_spec) == null
            ? void 0
            : y.carousels,
          p,
        ).index;
      } else if (f === "image") {
        var C;
        g = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          (C = t.creative) == null || (C = C.asset_feed_spec) == null
            ? void 0
            : C.images,
          p,
          "hash",
        ).index;
      } else {
        var b;
        g = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          (b = t.creative) == null || (b = b.asset_feed_spec) == null
            ? void 0
            : b.videos,
          p,
          "video_id",
        ).index;
      }
      if (g == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "asset with given label must exist in asset feed",
        );
      if (_.size === 1 || s) {
        var v;
        if (f === "carousel")
          v = r("adsPlacementAssetMutationRemoveCustomizationCarousel")(
            t,
            n,
            g,
            p,
            !0,
          );
        else if (f === "post") {
          var S = o(
              "AdsUEditorAdgroupPostAssetMutators",
            ).isolatePostAssetWithLabel(t, n, g, p),
            R = S.adgroupWithIsolatedPostAsset;
          v = r("adsPlacementAssetMutationRemoveCustomizationAsset")(
            R,
            n,
            p,
            f,
            !0,
            !1,
          );
        } else if (f === "image") {
          var L = o(
              "AdsUEditorAdgroupImageMutators",
            ).isolateImageAssetWithLabel(t, n, g, p),
            E = L.adgroupWithIsolatedImageAsset;
          v = r("adsPlacementAssetMutationRemoveCustomizationAsset")(
            E,
            n,
            p,
            f,
            !0,
            !1,
          );
        } else {
          var k = o(
              "AdsUEditorAdgroupVideoMutators",
            ).isolateVideoAssetWithLabel(t, n, g, p),
            I = k.adgroupWithIsolatedVideoAsset;
          v = r("adsPlacementAssetMutationRemoveCustomizationAsset")(
            I,
            n,
            p,
            f,
            !0,
            !1,
          );
        }
        if (s && o("AdsAssetFeedUtils").isPACAdgroupFromRecord(v)) {
          var T,
            D =
              (T = v.creative) == null || (T = T.asset_feed_spec) == null
                ? void 0
                : T.asset_customization_rules;
          if (D == null)
            throw r("FBLogger")("am_feature_pac").mustfixThrow(
              "PAC Ad must have targeting rules",
            );
          var x = D.get(0);
          if (x != null) {
            var $ = x.set("customization_spec", r("immutable").Map());
            v = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.asset_customization_rules.set(
              D.set(0, $),
              v,
            );
          }
        }
        return v;
      } else {
        var P = _.filter(function (e) {
            return e.platform !== a.platform || e.position !== a.position;
          }),
          N = u.toArray().map(function (e) {
            var t = o(
              "AdsPlacementAssetTargetingRuleUtils",
            ).getLabelNameFromTargetingRuleNullable(
              e,
              o(
                "AdsPlacementAssetTargetingRuleUtils",
              ).getTargetRuleFieldTypeFromFormat(f),
            );
            return t === p
              ? e.set(
                  "customization_spec",
                  o(
                    "AdsPlacementAssetTargetingRuleUtils",
                  ).convertPlacementListToTargeting(P.toArray()),
                )
              : e;
          });
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(
          r("immutable").List(N),
          t,
        );
      }
    }
    l.default = s;
  },
  98,
);
