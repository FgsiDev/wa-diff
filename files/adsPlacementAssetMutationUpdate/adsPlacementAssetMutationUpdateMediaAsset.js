__d(
  "adsPlacementAssetMutationUpdateMediaAsset",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupPostAssetMutators",
    "AdsUEditorAdgroupVideoMutators",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, r, o;
      return e === "image"
        ? (n = t.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.images
        : e === "post"
          ? (r = t.creative) == null || (r = r.asset_feed_spec) == null
            ? void 0
            : r.posts
          : (o = t.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.videos;
    }
    function s(e) {
      return e === "image"
        ? r("AdsUnifiedCreativeAPIFields").imageHash
        : e === "post"
          ? r("AdsUnifiedCreativeAPIFields").post
          : r("AdsUnifiedCreativeAPIFields").videoID;
    }
    function u(e) {
      return e === "image"
        ? r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.IMAGES
        : e === "post"
          ? r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.POSTS
          : r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.VIDEOS;
    }
    function c(e) {
      return e === "image"
        ? "image_label"
        : e === "post"
          ? "post_label"
          : "video_label";
    }
    function d(t, n, a, i) {
      var l = e(i, t),
        s = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(l, a),
        u = s.index;
      if (u == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "asset with given label must exist in asset feed",
        );
      var c, d;
      if (i == "image") {
        var m = o("AdsUEditorAdgroupImageMutators").isolateImageAssetWithLabel(
            t,
            n,
            u,
            a,
          ),
          p = m.adgroupWithIsolatedImageAsset,
          _ = m.isolatedImageAssetIndex;
        ((c = p), (d = _));
      } else if (i == "post") {
        var f = o(
            "AdsUEditorAdgroupPostAssetMutators",
          ).isolatePostAssetWithLabel(t, n, u, a),
          g = f.adgroupWithIsolatedPostAsset,
          h = f.isolatedPostAssetIndex;
        ((c = g), (d = h));
      } else {
        var y = o("AdsUEditorAdgroupVideoMutators").isolateVideoAssetWithLabel(
            t,
            n,
            u,
            a,
          ),
          C = y.adgroupWithIsolatedVideoAsset,
          b = y.isolatedVideoAssetIndex;
        ((c = C), (d = b));
      }
      return { adgroupWithIsolatedAsset: c, isolatedAssetIndex: d };
    }
    function m(e, t, n, a) {
      var i,
        l =
          (i = e.creative) == null || (i = i.asset_feed_spec) == null
            ? void 0
            : i.asset_customization_rules,
        s = !1,
        u =
          l == null
            ? void 0
            : l
                .map(function (e) {
                  var i = o(
                    "AdsPlacementAssetTargetingRuleUtils",
                  ).getLabelNameFromTargetingRuleNullable(e, n);
                  if (i === t) {
                    var l;
                    s = !0;
                    var u = e.delete(n);
                    return u.set(
                      a,
                      r("immutable").Map(((l = {}), (l.name = t), l)),
                    );
                  }
                  return e;
                })
                .filter(Boolean)
                .toArray();
      if (!s)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "label must exist in targeting rule",
        );
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(
        r("immutable").List(u),
        e,
      );
    }
    function p(e, t, n, a, i, l) {
      if (!o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t))
        return (
          r("FBLogger")("am_feature_pac").mustfix(
            "adsPlacementAssetMutationMediaConversion only support ad with placement customization",
          ),
          t
        );
      var p = l.format,
        f = u(i),
        g = u(p),
        h = c(i),
        y = c(p),
        C = d(t, n, a, i),
        b = C.adgroupWithIsolatedAsset,
        v = C.isolatedAssetIndex,
        S;
      if (p !== i) {
        ((b = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.ad_formats.set(
          r("immutable").List.of("AUTOMATIC_FORMAT"),
          b,
        )),
          (S = o("AdsAssetFeedFieldUtils").getAPIAssetBackgroundColor(
            b.getIn(f).get(v),
          )),
          (b = o("AdsAssetFeedMutationUtils").removeAssetAtIndex(
            b,
            n,
            s(i),
            v,
          )),
          b.getIn(f) != null && b.getIn(f).isEmpty() && (b = b.deleteIn(f)),
          (b = m(b, a, h, y)));
        var R = b.getIn(g);
        v = R != null ? R.size : 0;
      }
      return _(b, n, e, v, l, i !== p ? a : null, S);
    }
    function _(e, t, n, r, o, a, i) {
      return (function (o) {
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.format === "image"
        ) {
          var l = o;
          return g(e, t, r, l, a, i);
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.format === "video"
        ) {
          var s = o;
          return f(e, t, n, r, s, a, i);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            o,
        );
      })(o);
    }
    function f(e, t, n, a, i, l, s) {
      var u = o(
        "AdsUEditorAdgroupVideoMutators",
      ).updatePlacementCustomizationVideoAtIndex(
        e,
        t,
        n,
        a,
        i.videoID,
        i.thumbnailURL,
        i.thumbnailID,
        r("immutable").fromJS(s),
        i.thumbnailSource,
      );
      return (
        l != null &&
          (u = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
            u,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            a,
            l,
          )),
        o("AdsUEditorAdgroupVideoMutators").removeDuplicateVideoAssets(u, t)
      );
    }
    function g(e, t, n, a, i, l) {
      var s = e;
      return (
        i == null &&
          (s = o(
            "adsAssetFeedSpecRemoveAssetFieldAtIndex",
          ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
            e,
            "images",
            n,
            "image_crops",
          )),
        (s = o(
          "AdsUEditorAdgroupImageMutators",
        ).updateCustomizationImageAtIndex(
          s,
          t,
          n,
          a.hash != null || a.url != null,
          a.hash,
          a.url,
          r("immutable").fromJS(l),
          null,
        )),
        i != null &&
          (s = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
            s,
            t,
            r("AdsUnifiedCreativeAPIFields").imageHash,
            n,
            i,
          )),
        (s = o("AdsUEditorAdgroupImageMutators").removeDuplicateImageAssets(
          s,
          t,
        )),
        s
      );
    }
    l.default = p;
  },
  98,
);
