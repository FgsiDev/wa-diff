__d(
  "AdsUEditorBaseAssetPickerUtils",
  [
    "AdsAssetFeedFieldUtils",
    "AdsImageIDClasses",
    "AdsPlacementAssetTargetingRuleUtils",
    "ApiDynamicCreativeOptimizationTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").PLACEMENT
      ) {
        var n,
          a,
          i,
          l,
          s = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getDefaultTargetRuleLabel(e, "image_label");
        return {
          imageHash:
            (n = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
              (a = e.creative) == null || (a = a.asset_feed_spec) == null
                ? void 0
                : a.images,
              s,
              "hash",
            )) == null
              ? void 0
              : n.fieldValue,
          imageURL:
            (i = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
              (l = e.creative) == null || (l = l.asset_feed_spec) == null
                ? void 0
                : l.images,
              s,
              "url",
            )) == null
              ? void 0
              : i.fieldValue,
        };
      } else {
        var u, c;
        return {
          imageHash:
            (u = e.creative) == null ||
            (u = u.object_story_spec) == null ||
            (u = u.link_data) == null
              ? void 0
              : u.image_hash,
          imageURL:
            (c = e.creative) == null ||
            (c = c.object_story_spec) == null ||
            (c = c.link_data) == null
              ? void 0
              : c.picture,
        };
      }
    }
    function s(e, t) {
      var n = e.imageHash,
        r = e.imageURL;
      return n != null
        ? o("AdsImageIDClasses").AdsImageID.fromAcountAndHash(t, n)
        : r != null
          ? o("AdsImageIDClasses").AdsImageID.fromExternalURL(r)
          : null;
    }
    function u(e, t, n, r) {
      var o = c(e, t, n);
      return o != null ? o : _(e, r);
    }
    function c(t, n, r) {
      var o = e(t),
        a = s(o, n);
      if (a == null) return null;
      var i = r(a).map(function (e) {
          return e.getTyped();
        }),
        l = { type: "image", id: a },
        u = babelHelpers.extends({}, l, {
          asset: i,
          crops: null,
          trimmingParams: null,
        });
      return { baseAssetID: l, baseAsset: u };
    }
    function d(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l =
          (t = e.creative) == null || (t = t.object_story_spec) == null
            ? void 0
            : t.link_data;
      if (
        (l == null ? void 0 : l.image_hash) != null ||
        (l == null ? void 0 : l.picture) != null
      )
        return { imageHash: l.image_hash, imageURL: l.picture };
      var s =
        (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.images;
      if (s != null && s.size > 0) {
        var u,
          c,
          d = (u = s.first()) == null ? void 0 : u.get("hash"),
          m = (c = s.first()) == null ? void 0 : c.get("url"),
          p = typeof d == "string" && d !== "" ? d : null,
          _ = typeof m == "string" && m !== "" ? m : null;
        if (p != null || _ != null) return { imageHash: p, imageURL: _ };
      }
      var f =
          (r =
            (o = e.creative) == null ||
            (o = o.object_story_spec) == null ||
            (o = o.photo_data) == null
              ? void 0
              : o.image_hash) != null
            ? r
            : null,
        g =
          (a =
            (i = e.creative) == null ||
            (i = i.object_story_spec) == null ||
            (i = i.photo_data) == null
              ? void 0
              : i.url) != null
            ? a
            : null;
      return f != null || g != null
        ? { imageHash: f, imageURL: g }
        : { imageHash: null, imageURL: null };
    }
    function m(e, t, n, r) {
      var o = d(e),
        a = s(o, t);
      if (a != null) {
        var i = n(a).map(function (e) {
            return e.getTyped();
          }),
          l = { type: "image", id: a },
          c = babelHelpers.extends({}, l, {
            asset: i,
            crops: null,
            trimmingParams: null,
          });
        return { baseAssetID: l, baseAsset: c };
      }
      return u(e, t, n, r);
    }
    function p(e) {
      var t,
        n,
        a,
        i,
        l =
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.video_data) == null
            ? void 0
            : t.video_id;
      if (l != null) return l;
      if (
        ((n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.optimization_type) !==
        r("ApiDynamicCreativeOptimizationTypes").PLACEMENT
      )
        return null;
      var s = o(
        "AdsPlacementAssetTargetingRuleUtils",
      ).getDefaultTargetRuleLabel(e, "video_label");
      return (a = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
        (i = e.creative) == null || (i = i.asset_feed_spec) == null
          ? void 0
          : i.videos,
        s,
        "video_id",
      )) == null
        ? void 0
        : a.fieldValue;
    }
    function _(e, t) {
      var n = p(e);
      if (n == null) return null;
      var r = { id: n, type: "video" },
        o = {
          id: n,
          type: "video",
          asset: t(n),
          crops: null,
          trimmingParams: null,
        };
      return { baseAssetID: r, baseAsset: o };
    }
    ((l.getBaseImage = e),
      (l.getAdsImageID = s),
      (l.getBaseAssetFromAdgroup = u),
      (l.getBaseImageAssetFromAdgroup = c),
      (l.getBaseAssetFromAdgroupAny = m),
      (l.getBaseVideoIDFromAdgroup = p));
  },
  98,
);
