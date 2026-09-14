__d(
  "AdsVideoBundleRecommendationUtils",
  ["AdsAPlusCFastTrackV2Utils", "AdsAPlusCStickyOptOutUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["video_filtering", "video_uncrop", "video_auto_crop"],
      s = {
        video_filtering: ["video_uncrop", "video_auto_crop"],
        video_uncrop: ["video_filtering", "video_auto_crop"],
        video_auto_crop: ["video_filtering", "video_uncrop"],
      },
      u = {
        video_filtering: "VIDEO_FILTERING_DEFAULT_ON",
        video_uncrop: "VIDEO_UNCROP_DEFAULT_ON",
        video_auto_crop: "VIDEO_AUTOCROP_DEFAULT_ON",
      },
      c = {
        video_filtering: "video_filtering",
        video_uncrop: "video_uncrop",
        video_auto_crop: "video_auto_crop",
      };
    function d(e, t) {
      var n,
        r,
        o,
        a,
        i =
          (n = e.creative) == null || (n = n.degrees_of_freedom_spec) == null
            ? void 0
            : n.creative_features_spec;
      if (i == null) return null;
      switch (t) {
        case "video_filtering":
          return (r = i.video_filtering) == null ? void 0 : r.enroll_status;
        case "video_uncrop":
          return (o = i.video_uncrop) == null ? void 0 : o.enroll_status;
        case "video_auto_crop":
          return (a = i.video_auto_crop) == null ? void 0 : a.enroll_status;
        default:
          return null;
      }
    }
    function m(e, t) {
      var n,
        r,
        o,
        a,
        i =
          (n = e.creative) == null || (n = n.degrees_of_freedom_spec) == null
            ? void 0
            : n.creative_features_spec;
      if (i == null) return null;
      switch (t) {
        case "video_filtering":
          return (r = i.video_filtering) == null ||
            (r = r.action_metadata) == null
            ? void 0
            : r.type;
        case "video_uncrop":
          return (o = i.video_uncrop) == null || (o = o.action_metadata) == null
            ? void 0
            : o.type;
        case "video_auto_crop":
          return (a = i.video_auto_crop) == null ||
            (a = a.action_metadata) == null
            ? void 0
            : a.type;
        default:
          return null;
      }
    }
    function p(e, t, n, a) {
      if (a) return "skip_published";
      if (!r("gkx")("3154")) return "gk_off";
      if (o("AdsAPlusCFastTrackV2Utils").isAccountSensitiveForFastTrackV2())
        return "skip_fasttrack_sensitive";
      var i = d(t, e);
      if (i === "OPT_IN") return "skip_already_opted_in";
      var l = m(t, e);
      if (l === "REFRESH") return "skip_refresh";
      if (i === "OPT_OUT" && l === "MANUAL") return "skip_manual_sticky";
      var p = c[e];
      if (
        p != null &&
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(p)
      )
        return "skip_manual_sticky";
      var _ = u[e];
      if (_ == null || !(n != null && n.includes(_))) return "not_eligible";
      var f = s[e];
      if (f == null) return "no_sibling_opted_in";
      for (var g of f) {
        var h = d(t, g);
        if (h === "OPT_IN") return "bundle";
      }
      return "no_sibling_opted_in";
    }
    function _(e) {
      var t = c[e];
      return (
        t != null &&
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(t)
      );
    }
    ((l.getBundleRecommendationDecision = p),
      (l.isVideoBundleFeatureStickyOptedOut = _),
      (l.VIDEO_BUNDLE_FEATURES = e));
  },
  98,
);
