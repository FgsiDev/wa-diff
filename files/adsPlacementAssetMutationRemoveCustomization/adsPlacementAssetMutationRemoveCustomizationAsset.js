__d(
  "adsPlacementAssetMutationRemoveCustomizationAsset",
  [
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsTargetingRuleUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "FBLogger",
    "adsPlacementAssetMutationConvertFromAssetFeedSpec",
    "adsPlacementAssetMutationRemoveOrphanedAssets",
    "adsPlacementCustomizationConvertToDOFMessagingDestinationAdWithExistingPost",
    "adsPlacementCustomizationConvertToStaticAdWithExistingPost",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "carousel"
        ? "carousel_label"
        : e === "image"
          ? "image_label"
          : e === "post"
            ? "post_label"
            : "video_label";
    }
    function s(e, t) {
      return e === 1 ? "image" : t === 1 ? "video" : "post";
    }
    function u(e, t, n, r, a) {
      return r > 0
        ? o("AdsAssetFeedFieldUtils").getAssetLabelListAtIndex(e, 0)
        : a > 0
          ? o("AdsAssetFeedFieldUtils").getAssetLabelListAtIndex(t, 0)
          : o("AdsAssetFeedFieldUtils").getAssetLabelListAtIndex(n, 0);
    }
    function c(e, t, n, a) {
      var i = null;
      if (a === "carousel") {
        var l,
          s =
            (l = e.creative) == null || (l = l.asset_feed_spec) == null
              ? void 0
              : l.carousels;
        if (s == null) return e;
        i = s.findIndex(function (e) {
          return o("AdsPlacementAssetUtils").getFirstAdLabel(e) === n;
        });
      } else if (a === "image") {
        var u;
        i = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          (u = e.creative) == null || (u = u.asset_feed_spec) == null
            ? void 0
            : u.images,
          n,
          "hash",
        ).index;
      } else if (a === "post") {
        var c;
        i = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          (c = e.creative) == null || (c = c.asset_feed_spec) == null
            ? void 0
            : c.posts,
          n,
          "post_id",
        ).index;
      } else {
        var d;
        i = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          (d = e.creative) == null || (d = d.asset_feed_spec) == null
            ? void 0
            : d.videos,
          n,
          "video_id",
        ).index;
      }
      if (i == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "asset with given label must exist in asset feed",
        );
      if (a === "image")
        return r("AdsAdgroupRecordAccessors")
          .creative.asset_feed_spec.images.at(i)
          .delete(e);
      if (a === "carousel") {
        var m = [].concat(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CAROUSELS,
          [i.toString()],
        );
        return e.deleteIn(m);
      } else if (a === "post")
        return r("AdsAdgroupRecordAccessors")
          .creative.asset_feed_spec.posts.at(i)
          .delete(e);
      return r("AdsAdgroupRecordAccessors")
        .creative.asset_feed_spec.videos.at(i)
        .delete(e);
    }
    function d(e) {
      return e ? e.count() : 0;
    }
    var m = function (t, n, a, i) {
        var e = o("AdsAssetFeedMutationUtils").removeMediaByLabel(t, n, a);
        if (i === 1) {
          var l, s;
          e = o("AdsAssetFeedUtils").setOptimizationType(
            e,
            r("ApiDynamicCreativeOptimizationTypes").LANGUAGE,
          );
          var u =
              (l = e.creative) == null || (l = l.asset_feed_spec) == null
                ? void 0
                : l.images,
            c =
              (s = e.creative) == null || (s = s.asset_feed_spec) == null
                ? void 0
                : s.videos;
          u != null
            ? (e = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.ad_formats.set(
                r("immutable").List(["SINGLE_IMAGE"]),
                e,
              ))
            : c != null &&
              (e = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.ad_formats.set(
                r("immutable").List(["SINGLE_VIDEO"]),
                e,
              ));
        }
        return e;
      },
      p = function (t, n, a, i, l) {
        if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t))
          return o("AdsAssetFeedUtils").isClickToMultiDestAds(t)
            ? r(
                "adsPlacementCustomizationConvertToDOFMessagingDestinationAdWithExistingPost",
              )(t)
            : r("adsPlacementCustomizationConvertToStaticAdWithExistingPost")(
                t,
              );
        var e = r("adsPlacementAssetMutationConvertFromAssetFeedSpec")(
          i,
          n,
          r("nullthrows")(a.pivots.objective),
          l,
        );
        if (o("AdsAssetFeedUtils").isClickToMultiDestAds(t)) {
          var s,
            u,
            c = t.creative;
          e = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.additional_data.set(
              c == null || (s = c.asset_feed_spec) == null
                ? void 0
                : s.additional_data,
            ),
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .additional_data.page_welcome_message.delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_to_actions.set(
              c == null || (u = c.asset_feed_spec) == null
                ? void 0
                : u.call_to_actions,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.optimization_type.set(
              r("ApiDynamicCreativeOptimizationTypes")
                .DOF_MESSAGING_DESTINATION,
            ),
          )(e);
        }
        return e;
      };
    function _(t, n, a, i, l, _, f) {
      var g,
        h,
        y,
        C,
        b,
        v = c(t, n, a, i);
      if (o("AdsAssetFeedUtils").hasCarouselFormat(v)) {
        var S,
          R =
            (S = v.creative) == null || (S = S.asset_feed_spec) == null
              ? void 0
              : S.carousels,
          L = d(R);
        if (L <= 1 && l)
          return r("adsPlacementAssetMutationConvertFromAssetFeedSpec")(
            "carousel",
            v,
            r("nullthrows")(n.pivots.objective),
          );
      }
      var E =
          (g = v.creative) == null || (g = g.asset_feed_spec) == null
            ? void 0
            : g.images,
        k =
          (h = v.creative) == null || (h = h.asset_feed_spec) == null
            ? void 0
            : h.posts,
        I =
          (y = v.creative) == null || (y = y.asset_feed_spec) == null
            ? void 0
            : y.videos,
        T = d(E),
        D = d(k),
        x = d(I),
        $ = o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(v),
        P = o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(v),
        N = T + x + D === 1;
      (E &&
        T === 0 &&
        (v = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.images.delete(v)),
        k &&
          D === 0 &&
          (v = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.posts.delete(v)),
        I &&
          x === 0 &&
          (v = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.videos.delete(v)));
      var M = e(i),
        w = o("AdsTargetingRuleUtils").getTargetingRuleEntryForLabel(
          (C = v.creative) == null || (C = C.asset_feed_spec) == null
            ? void 0
            : C.asset_customization_rules,
          M,
          a,
        ).value;
      if (w == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "asset with given label must exist in targeting rules",
        );
      var A =
          (b = v.creative) == null || (b = b.asset_feed_spec) == null
            ? void 0
            : b.asset_customization_rules,
        F = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(A);
      if (!F)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "targetspec should have at least one rule.",
        );
      var O = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getLabelNameFromAnyTargetingRuleMediaLabelField(F);
      if (O == null) return v;
      var B = o("AdsAssetFeedUtils").getAssetMediaAdlabelCount(v);
      if (P && B <= 0)
        return (
          (v = o(
            "AdsAssetFeedMutationUtils",
          ).removeMediaLabelFromAssetCustomizationRules(v, M)),
          v
        );
      if ($) return m(v, M, a, B);
      var W = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).movePlacementsInTargetingRules(
        A || r("immutable").List(),
        M,
        O,
        o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).convertTargetingRuleToPlacementList(w),
      ).updatedTargetingRules;
      if (
        ((v = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(W, v)),
        i !== "carousel" &&
          (v = r("adsPlacementAssetMutationRemoveOrphanedAssets")(v, n)),
        N)
      ) {
        var q = s(T, x),
          U = u(E, k, I, T, D),
          V = o("AdsAssetFeedUtils").isPacAdgroupUsingTextDOF(t);
        if ((U == null || U.size <= 1) && l && !$)
          return V
            ? o(
                "AdsAssetFeedMutationUtils",
              ).convertPACDofToDofAssetFeedSpecAdgroup(t, q, n, _)
            : p(t, v, n, q, f);
      }
      return v;
    }
    l.default = _;
  },
  98,
);
