__d(
  "AdsSiteLinksFormatDefaultOnUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsFlexibleFormatAdexUtils",
    "AdsFormatTransformationUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o(
      "AdsFlexibleFormatAdexUtils",
    ).SA_SINGLE_SE_SUPPORTED_FORMATS.filter(function (e) {
      return e !== "video_slideshow";
    });
    function s(e, t) {
      var n,
        o =
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.get(e)) == null
            ? void 0
            : n.find(function (e) {
                return e.get("format") === t;
              });
      if (o == null) return null;
      var a = o.get("data_source");
      return Array.isArray(a)
        ? a
        : a instanceof r("immutable").List
          ? a.toArray()
          : [];
    }
    function u(e, t) {
      var n = s(e, t);
      return n != null && n.includes("site_links");
    }
    function c(e, t) {
      var n = s(e, t);
      return n != null && !n.includes("site_links");
    }
    function d(e) {
      return (
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.get(
          e,
        ) === "OPT_OUT"
      );
    }
    function m(e) {
      return (
        d(e) &&
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.get(
          e,
        ) === "DEFAULT_OFF"
      );
    }
    function p(e, t) {
      return t === "sa_collection"
        ? c(e, "sa_collection") || m(e)
        : s(e, t) != null;
    }
    function _(e) {
      return (
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.get(
          e,
        ) === "OPT_IN"
      );
    }
    function f(e) {
      return (
        d(e) &&
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.get(
          e,
        ) === "MANUAL"
      );
    }
    function g(e) {
      return f(e) && !u(e, "sa_collection");
    }
    function h(e, t) {
      if (t === "collage")
        return (
          o("AdsFormatTransformationUtils").isCollageBucketOptedIn(e) &&
          o("AdsFlexibleFormatAdexUtils").isWHConsentedWithMedia(e)
        );
      if (t === "carousel") {
        var n = s(e, t);
        return n != null ? n.includes("site_links") : _(e);
      }
      return _(e);
    }
    function y(e) {
      var t,
        n,
        r,
        o,
        a,
        i = (t = e.creative) == null ? void 0 : t.creative_sourcing_spec;
      if (
        (i == null || (n = i.site_links_data_consented) == null
          ? void 0
          : n.enroll_status) === "OPT_OUT"
      )
        return "off";
      var l =
          (r =
            i == null ||
            (o = i.site_links_spec) == null ||
            (o = o.toArray()) == null
              ? void 0
              : o.length) != null
            ? r
            : 0,
        s =
          i == null || (a = i.dynamic_site_links_spec) == null
            ? void 0
            : a.enroll_status;
      return l > 0 || s === "OPT_IN" ? "on" : "null";
    }
    function C(e) {
      var t;
      return ((t = e.creative) == null ||
      (t = t.creative_sourcing_spec) == null ||
      (t = t.website_media_spec) == null
        ? void 0
        : t.enroll_status) === "OPT_OUT"
        ? "off"
        : o("AdsFlexibleFormatAdexUtils").isWHConsentedWithMedia(e)
          ? "on"
          : "null";
    }
    function b(t, n) {
      var r = n.seCurrentState === "on" || n.whCurrentState === "on",
        a =
          n.sePriorState !== n.seCurrentState ||
          n.whPriorState !== n.whCurrentState,
        i = [];
      for (var l of o("AdsFlexibleFormatAdexUtils").withSASingleCollageGate(
        e,
        t,
      )) {
        if (!r) {
          h(t, l) && i.push({ consented: !1, format: l });
          continue;
        }
        if (!h(t, l)) {
          var s = void 0;
          (l === "carousel" || l === "collage"
            ? (s = !p(t, l))
            : a
              ? (s = !g(t))
              : (s = !p(t, l) && !g(t)),
            s && i.push({ consented: !0, format: l }));
        }
      }
      return i;
    }
    ((l.SE_WH_EVOLUTION_FORMATS = e),
      (l.getSiteLinksFormatDataSources = s),
      (l.isSiteLinksFormatFtsOptedIn = u),
      (l.isSiteLinksFormatFtsOptedOut = c),
      (l.isSiteExtensionsOptedOut = d),
      (l.isSiteExtensionsDefaultOff = m),
      (l.isSiteLinksFormatSeeded = p),
      (l.isSiteExtensionsOptedIn = _),
      (l.isSiteExtensionsManualOptOut = f),
      (l.isSaCollectionRealManualOptOut = g),
      (l.isSiteLinksFormatOptedIn = h),
      (l.getSESiteLinksConsentState = y),
      (l.getWHSiteLinksConsentState = C),
      (l.computeSiteLinksFormatActions = b));
  },
  98,
);
