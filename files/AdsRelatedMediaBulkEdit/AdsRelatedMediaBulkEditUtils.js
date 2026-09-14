__d(
  "AdsRelatedMediaBulkEditUtils",
  [
    "AdsCreativeFlexTypes",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "DAFlexibleFormatUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("26434");
    }
    var s = new Set();
    function u(e) {
      e === "" || s.has(e) || (s.add(e), r("gkx")("26023"));
    }
    function c(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s,
        u,
        c,
        m,
        p,
        _,
        f,
        g =
          e &&
          o(
            "DAFlexibleFormatUtils",
          ).isAdgroupEligibleForDACarouselIntroCardRevamp(e) &&
          o("DAFlexibleFormatUtils").passFlexibleFormatAndRelatedMediaAdexGK(
            "silent",
          );
      if (
        g &&
        (e == null || (n = e.creative) == null ? void 0 : n.product_set_id) !=
          null
      )
        return e.creative.product_set_id;
      if (
        o(
          "AdsPCAUnifiedFormatEligibilityUtils",
        ).isDARelatedMediaEnabledForPCAUnifiedL1() &&
        o("AdsPCAUnifiedFormatEligibilityUtils").isEligiblePCAUnifiedL1(t, e) &&
        (e == null ||
        (r = e.creative) == null ||
        (r = r.creative_sourcing_spec) == null
          ? void 0
          : r.associated_product_set_id) != null
      )
        return e.creative.creative_sourcing_spec.associated_product_set_id;
      var h =
          e == null || (a = e.creative) == null ? void 0 : a.object_story_spec,
        y = h == null || (i = h.video_data) == null ? void 0 : i.video_id;
      if (y != null) return y;
      var C =
        (l =
          (s =
            h == null || (u = h.link_data) == null ? void 0 : u.image_hash) !=
          null
            ? s
            : h == null || (c = h.photo_data) == null
              ? void 0
              : c.image_hash) != null
          ? l
          : e == null || (m = e.creative) == null
            ? void 0
            : m.image_hash;
      if (C != null) return C;
      var b =
        (p = h == null || (_ = h.link_data) == null ? void 0 : _.picture) !=
        null
          ? p
          : e == null || (f = e.creative) == null
            ? void 0
            : f.image_url;
      return b != null ? b : d(e);
    }
    function d(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.creative) == null ||
          (t = t.asset_feed_spec) == null
            ? void 0
            : t.images;
      if (r != null && r.length > 0) {
        var o,
          a,
          i = (o = r[0]) == null ? void 0 : o.hash;
        if (i != null) return i;
        var l = (a = r[0]) == null ? void 0 : a.url;
        if (l != null) return l;
      }
      var s =
        e == null || (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.videos;
      if (s != null && s.length > 0) {
        var u,
          c = (u = s[0]) == null ? void 0 : u.video_id;
        if (c != null) return c;
      }
      return null;
    }
    function m(e) {
      var t = 0;
      return (
        e.forEach(function (e) {
          if (e.isEligible) {
            var n = e.recommendedMediaArr.filter(function (e) {
              return [
                o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN,
                o("AdsCreativeFlexTypes").RelatedMediaSelection
                  .OPT_IN_AS_INFERRED_DA_INTRO_CARD,
              ].includes(e.selection);
            });
            t += n.length;
          }
        }),
        t
      );
    }
    function p(e) {
      var t = [];
      for (var n of e.values())
        if (n.isEligible === !0) for (var r of n.recommendedMediaArr) t.push(r);
      return t;
    }
    ((l.isEligibleForCreativeFlexNoRecFix = e),
      (l.logCreativeFlexNoRecFixExposureOnce = u),
      (l.computeTargetMediaIdentifier = c),
      (l.getOptInRelatedMediaAdgroupCount = m),
      (l.getAllRelatedMedia = p));
  },
  98,
);
