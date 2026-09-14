__d(
  "AdsFlexibleFormatTransformationUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a,
        i =
          ((n = e.creative) == null ? void 0 : n.format_transformation_spec) !=
          null,
        l =
          (o = e.creative) == null ||
          (o = o.degrees_of_freedom_spec) == null ||
          (o = o.creative_features_spec) == null ||
          (o = o.site_extensions) == null
            ? void 0
            : o.enroll_status;
      if (
        l !== "OPT_IN" &&
        (t === "sa_collection" ||
          (!i && (t === "carousel" || t === "video_slideshow")))
      )
        return !1;
      var s = (a = e.creative) == null ? void 0 : a.format_transformation_spec;
      if ((s instanceof r("immutable").List && (s = s.toJS()), s != null)) {
        var u = t;
        if (t === "video_slideshow") {
          var c = s.some(function (e) {
            return e.format === "video_slideshow";
          });
          c || (u = "carousel");
        }
        var d = s.filter(function (e) {
          var t = e.data_source;
          return (
            e.format === u &&
            t != null &&
            t.length > 0 &&
            !t.includes("site_links")
          );
        });
        if (d.length > 0) return !1;
      }
      return !0;
    }
    function s(e, t) {
      var n,
        r =
          (n = e.creative) == null || (n = n.creative_sourcing_spec) == null
            ? void 0
            : n.app_info_spec,
        o = (r == null ? void 0 : r.enroll_status) === "OPT_IN",
        a = u(e, t);
      return a && o;
    }
    function u(e, t) {
      var n,
        o = (n = e.creative) == null ? void 0 : n.format_transformation_spec;
      if ((o instanceof r("immutable").List && (o = o.toJS()), o != null)) {
        var a = o.filter(function (e) {
          var n = e.data_source;
          return (
            e.format === t &&
            n != null &&
            n.length > 0 &&
            !n.includes("app_information")
          );
        });
        if (a.length > 0) return !1;
      }
      return !0;
    }
    function c(e, t) {
      var n,
        o,
        a,
        i,
        l =
          ((n = e.creative) == null ? void 0 : n.format_transformation_spec) !=
          null,
        s =
          (o = e.creative) == null ||
          (o = o.degrees_of_freedom_spec) == null ||
          (o = o.creative_features_spec) == null ||
          (o = o.product_extensions) == null
            ? void 0
            : o.enroll_status;
      if (s !== "OPT_IN" && (t === "sa_collection" || (!l && t === "carousel")))
        return !1;
      var u =
        (a = e.creative) == null ||
        (a = a.degrees_of_freedom_spec) == null ||
        (a = a.creative_features_spec) == null ||
        (a = a.product_extensions) == null ||
        (a = a.customizations) == null ||
        (a = a.pe_carousel) == null
          ? void 0
          : a.enroll_status;
      if (t === "carousel" && u !== "OPT_IN") return !1;
      var c = (i = e.creative) == null ? void 0 : i.format_transformation_spec;
      if ((c instanceof r("immutable").List && (c = c.toJS()), c != null)) {
        var d = c.filter(function (e) {
          var n = e.data_source;
          return (
            e.format === t &&
            n != null &&
            n.length > 0 &&
            !n.includes("catalog")
          );
        });
        if (d.length > 0) return !1;
      }
      return !0;
    }
    function d(e, t) {
      var n;
      t === void 0 && (t = "catalog");
      var o = (n = e.creative) == null ? void 0 : n.format_transformation_spec;
      if ((o instanceof r("immutable").List && (o = o.toJS()), o == null))
        return null;
      var a = o.find(function (e) {
          return e.format === "carousel";
        }),
        i = a == null ? void 0 : a.customizations;
      if (!Array.isArray(i)) return null;
      var l = null;
      for (var s of i)
        if (s.name === "preserve_hero_media") {
          var u = s.scope;
          if (u == null || u.length === 0) l = s.enroll_status;
          else if (u.includes(t)) return s.enroll_status;
        }
      return l;
    }
    ((l.getHasOptedInSiteLinksForGivenTargetFormat = e),
      (l.getIsAppInfoPreviewEligible = s),
      (l.getHasOptedInAppInformationForGivenTargetFormat = u),
      (l.getHasOptedInProductExtensionsForGivenTargetFormat = c),
      (l.getUseIntroCardCustomizationFromFTS = d));
  },
  98,
);
