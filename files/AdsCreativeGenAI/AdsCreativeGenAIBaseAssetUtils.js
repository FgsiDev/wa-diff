__d(
  "AdsCreativeGenAIBaseAssetUtils",
  [
    "AdsAssetFeedFieldUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "gkx",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.imageHash,
        n = e.imageUrl;
      return !r("isFalsey")(t) || !r("isFalsey")(n);
    }
    function s() {
      return r("gkx")("23857");
    }
    function u(e) {
      var t,
        n,
        r,
        a =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images,
        i = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "images");
      return {
        imageHash:
          (n = o("AdsAssetFeedFieldUtils").getAssetAtIndex(a, "hash", i)) !=
          null
            ? n
            : null,
        imageUrl:
          (r = o("AdsAssetFeedFieldUtils").getAssetAtIndex(a, "url", i)) != null
            ? r
            : null,
      };
    }
    function c(e) {
      var t, n, r, o;
      return {
        imageHash:
          (t =
            (n = e.creative) == null ||
            (n = n.object_story_spec) == null ||
            (n = n.link_data) == null
              ? void 0
              : n.image_hash) != null
            ? t
            : null,
        imageUrl:
          (r =
            (o = e.creative) == null ||
            (o = o.object_story_spec) == null ||
            (o = o.link_data) == null
              ? void 0
              : o.picture) != null
            ? r
            : null,
      };
    }
    function d(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u = r("immutable").List([
          { platform: "instagram", position: "stream" },
        ]),
        c = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getLabelNameFromAssetCustomizationPlacement(e, u, "image_label");
      return {
        imageHash:
          (t =
            (n = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
              (a = e.creative) == null || (a = a.asset_feed_spec) == null
                ? void 0
                : a.images,
              c,
              "hash",
            )) == null
              ? void 0
              : n.fieldValue) != null
            ? t
            : null,
        imageUrl:
          (i =
            (l = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
              (s = e.creative) == null || (s = s.asset_feed_spec) == null
                ? void 0
                : s.images,
              c,
              "url",
            )) == null
              ? void 0
              : l.fieldValue) != null
            ? i
            : null,
      };
    }
    function m(e) {
      var t, n, r, o;
      return {
        imageHash:
          (t =
            (n = e.creative) == null ||
            (n = n.object_story_spec) == null ||
            (n = n.photo_data) == null
              ? void 0
              : n.image_hash) != null
            ? t
            : null,
        imageUrl:
          (r =
            (o = e.creative) == null ||
            (o = o.object_story_spec) == null ||
            (o = o.photo_data) == null
              ? void 0
              : o.url) != null
            ? r
            : null,
      };
    }
    function p(e) {
      var t,
        n =
          ((t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.optimization_type) ===
          r("ApiDynamicCreativeOptimizationTypes").PLACEMENT;
      return {
        assetFeedSpec: u(e),
        isPACAd: n,
        linkData: c(e),
        pacAssetFeedSpec: n ? d(e) : { imageHash: null, imageUrl: null },
        photoData: m(e),
      };
    }
    function _(t) {
      var n,
        o =
          ((n = t.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.optimization_type) ===
          r("ApiDynamicCreativeOptimizationTypes").PLACEMENT,
        a = o ? d(t) : c(t);
      if (!e(a) && s()) {
        var i = u(t);
        if (e(i)) return i;
        var l = m(t);
        if (e(l)) return l;
      }
      return a;
    }
    function f(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s =
          (t =
            (n =
              (o = e.creative) == null ||
              (o = o.object_story_spec) == null ||
              (o = o.link_data) == null
                ? void 0
                : o.link) != null
              ? n
              : (a = e.creative) == null ||
                  (a = a.object_story_spec) == null ||
                  (a = a.template_data) == null
                ? void 0
                : a.link) != null
            ? t
            : (i = e.creative) == null ||
                (i = i.object_story_spec) == null ||
                (i = i.video_data) == null ||
                (i = i.call_to_action) == null ||
                (i = i.value) == null
              ? void 0
              : i.link;
      if (s != null) return s;
      var u =
        (l = e.creative) == null || (l = l.asset_feed_spec) == null
          ? void 0
          : l.link_urls;
      if (u != null) {
        if (u instanceof r("immutable").List) {
          var c,
            d = (c = u.first()) == null ? void 0 : c.get("website_url");
          return typeof d == "string" ? d : null;
        }
        if (u.length > 0) {
          var m, p;
          return (m = (p = u[0]) == null ? void 0 : p.website_url) != null
            ? m
            : null;
        }
      }
      return null;
    }
    ((l.isAFSSpecClearFixEnabled = s),
      (l.getBaseAssetImageSpecLocationsFromAdgroup = p),
      (l.getBaseAssetImageSpecFromAdgroup = _),
      (l.getDestinationURLFromAdgroup = f));
  },
  98,
);
