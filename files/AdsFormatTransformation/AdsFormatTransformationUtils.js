__d(
  "AdsFormatTransformationUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsDynamicAdsFormatUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatDAUtils",
    "AdsFlexibleFormatPacCarouselUtils",
    "AdsFormatTransformationDataSourcePlugins",
    "AdsMetadataConnectedSourcesUtils",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "GenAISpecReader",
    "PERelevanceUtils",
    "immutable",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "FACEBOOK_REELS_MOBILE",
      "FACEBOOK_STORY_MOBILE",
      "INSTAGRAM_REELS",
      "INSTAGRAM_STANDARD",
      "INSTAGRAM_STORY",
      "MOBILE_FEED_STANDARD",
    ]);
    function s(e) {
      return e.adObjectsList.some(function (e) {
        var t,
          n = e.adgroup;
        return (
          o(
            "AdsPCAUnifiedFormatEligibilityUtils",
          ).isMediaSourcePCAUnifiedFormat(
            n == null || (t = n.metadata) == null
              ? void 0
              : t.adgroup_media_source,
          ) &&
          o(
            "AdsPCAUnifiedFormatEligibilityUtils",
          ).isGKEnableForUnifiedMediaSetupFlow()
        );
      });
    }
    function u(e) {
      var t = !0;
      return (
        e.adObjectsList.some(function (e) {
          var n,
            o,
            a = e.adgroup,
            i =
              a == null ||
              (n = a.creative_asset_groups_spec) == null ||
              (n = n.groups) == null
                ? void 0
                : n.map(function (e) {
                    return e.toJS();
                  }),
            l =
              i == null
                ? void 0
                : i.some(function (e) {
                    return e.group_type === "dynamic";
                  }),
            s =
              a == null || (o = a.creative) == null ? void 0 : o.product_set_id;
          (r("isFalsey")(l) || s == null) && (t = !1);
        }),
        t
      );
    }
    function c(e) {
      return e.adObjectsList.some(function (e) {
        var t,
          n,
          r,
          o = e.adgroup,
          a = !1,
          i =
            o == null || (t = o.creative_asset_groups_spec) == null
              ? void 0
              : t.groups;
        return (
          (i = (n = i) == null ? void 0 : n.toJS()),
          (r = i) == null ||
            r.forEach(function (e) {
              var t,
                n,
                r = e.group_type === "static";
              r &&
                ((e == null || (t = e.images) == null ? void 0 : t.length) >
                  0 ||
                  (e == null || (n = e.videos) == null ? void 0 : n.length) >
                    0) &&
                (a = !0);
            }),
          a
        );
      });
    }
    function d(e, t) {
      var n = function (t) {
        var e = o("GenAISpecReader").isGenAIImagesOptedIn(t),
          n = o("GenAISpecReader").isGenAIVideosOptedIn(t);
        return e || n;
      };
      return t != null
        ? t.adObjectsList.some(function (e) {
            var t = e.adgroup;
            return n(t);
          })
        : e != null
          ? n(e)
          : !1;
    }
    function m(e, t) {
      var n = function (t) {
        var e,
          n,
          r =
            t == null ||
            (e = t.creative) == null ||
            (e = e.media_sourcing_spec) == null
              ? void 0
              : e.images,
          a =
            t == null ||
            (n = t.creative) == null ||
            (n = n.media_sourcing_spec) == null
              ? void 0
              : n.videos,
          i =
            (r != null &&
              !Array.isArray(r) &&
              r.size > 0 &&
              r.some(function (e) {
                return (
                  (e == null ? void 0 : e.get("opt_in_status")) === "opt_in" &&
                  (e == null ? void 0 : e.get("source")) === "related_media"
                );
              })) ||
            (r != null &&
              Array.isArray(r) &&
              r.some(function (e) {
                return (
                  (e == null ? void 0 : e.opt_in_status) ===
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN &&
                  (e == null ? void 0 : e.source) === "related_media"
                );
              })),
          l =
            (a != null &&
              !Array.isArray(a) &&
              a.size > 0 &&
              a.some(function (e) {
                return (
                  (e == null ? void 0 : e.get("opt_in_status")) === "opt_in" &&
                  (e == null ? void 0 : e.get("source")) === "related_media"
                );
              })) ||
            (a != null &&
              Array.isArray(a) &&
              a.some(function (e) {
                return (
                  (e == null ? void 0 : e.opt_in_status) ===
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN &&
                  (e == null ? void 0 : e.source) === "related_media"
                );
              }));
        return i || l;
      };
      return (t == null ? void 0 : t.hasGlobalishRelatedMedia) === !0
        ? !0
        : t != null
          ? t.adObjectsList.some(function (e) {
              var t = e.adgroup;
              return n(t);
            })
          : e != null
            ? n(e)
            : !1;
    }
    function p(e, t) {
      var n = function (t) {
        var e,
          n,
          r =
            t == null ||
            (e = t.creative) == null ||
            (e = e.media_sourcing_spec) == null
              ? void 0
              : e.images,
          a =
            t == null ||
            (n = t.creative) == null ||
            (n = n.media_sourcing_spec) == null
              ? void 0
              : n.videos,
          i =
            (r != null &&
              !Array.isArray(r) &&
              r.size > 0 &&
              r.some(function (e) {
                return (
                  (e == null ? void 0 : e.get("opt_in_status")) !== "opt_out" &&
                  (e == null ? void 0 : e.get("source")) === "multi_media"
                );
              })) ||
            (r != null &&
              Array.isArray(r) &&
              r.some(function (e) {
                return (
                  (e == null ? void 0 : e.opt_in_status) !==
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_OUT &&
                  (e == null ? void 0 : e.source) === "multi_media"
                );
              })),
          l =
            (a != null &&
              !Array.isArray(a) &&
              a.size > 0 &&
              a.some(function (e) {
                return (
                  (e == null ? void 0 : e.get("opt_in_status")) !== "opt_out" &&
                  (e == null ? void 0 : e.get("source")) === "multi_media"
                );
              })) ||
            (a != null &&
              Array.isArray(a) &&
              a.some(function (e) {
                return (
                  (e == null ? void 0 : e.opt_in_status) !==
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_OUT &&
                  (e == null ? void 0 : e.source) === "multi_media"
                );
              }));
        return i || l;
      };
      return t != null
        ? t.adObjectsList.some(function (e) {
            var t = e.adgroup;
            return n(t);
          })
        : e != null
          ? n(e)
          : !1;
    }
    function _(e, t) {
      switch (e) {
        case "sa_single_image":
          return t === "single_media";
        case "sa_carousel":
          return t === "carousel";
        default:
          return !1;
      }
    }
    function f(e, t) {
      return (e === "video_slideshow" || e === "collage") &&
        t === "modal_format_preview"
        ? "single_media"
        : e;
    }
    function g(e) {
      if (e == null) return !1;
      var t = o("AdsChildAttachmentsUtils").getChildAttachments(e);
      return t != null &&
        t.length > 0 &&
        !o("AdsChildAttachmentsUtils").hasOnlyEmptyChildAttachmentsPlaceholder(
          t,
        )
        ? !0
        : o("AdsFlexibleFormatPacCarouselUtils").pacCarouselHasChildMedia(e);
    }
    function h(e) {
      return e.adObjectsList.some(function (e) {
        var t,
          n = e.adgroup;
        if (n == null) return !1;
        var r =
          (t = n.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.associated_product_set_id;
        return r != null || o("PERelevanceUtils").hasVirtualProductSetId(n);
      });
    }
    function y(e, t, n, r) {
      return n.getIsSelected(e, t, r) && e.optedInTransformationsCount === 1;
    }
    function C(e, t) {
      var n = 0;
      for (var o of t) {
        var a,
          i,
          l =
            (a =
              (i = e.eligibleFormatDataSourceMap) == null
                ? void 0
                : i.get(o.key)) != null
              ? a
              : [],
          s = !1;
        for (var u of l) {
          var c = r("AdsFormatTransformationDataSourcePlugins").get(u),
            d = null;
          if (
            ((c == null ? void 0 : c.linkedDataSources) != null &&
              (d = c.linkedDataSources(e, o.key)),
            c.getIsSelected(e, o.key, d))
          ) {
            s = !0;
            break;
          }
        }
        s && n++;
      }
      return n;
    }
    function b(e, t) {
      return t === "collage"
        ? e === "collage" || e === "photo_collage"
        : e === t;
    }
    function v(e) {
      if (e == null) return !1;
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (t == null) return !1;
      var n = t.find(function (e) {
        return b(e.get("format"), "collage");
      });
      if (n == null) return !1;
      var o = n.get("data_source"),
        a =
          o instanceof r("immutable").List
            ? o.toArray()
            : Array.isArray(o)
              ? o
              : [];
      return !a.includes("none");
    }
    function S(e) {
      return (
        e.uxVersion === "modal_format_preview" &&
        !e.isPCAUnifiedOldFlow &&
        !e.isPCAUnifiedScaledAlpha &&
        e.originalFormat === "da_carousel" &&
        e.adObjectsList.every(function (e) {
          var t = e.adgroup,
            n = e.campaign;
          return o(
            "AdsFlexibleFormatAdexUtils",
          ).isFlexibleFormatEligibleForRichFormat(
            t,
            n,
            r("AdsDefaultAdgroupSpecPathPlugin"),
          );
        })
      );
    }
    function R(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null ||
        (t = t.media_type_automation) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function L(e, t) {
      return (
        S(e) &&
        o("AdsDynamicAdsFormatUtils").passGKForSingleVideoTransformation(t) &&
        e.adObjectsList.every(function (e) {
          var t = e.adgroup;
          return R(t);
        })
      );
    }
    function E(e) {
      var t, n;
      if (!R(e)) return !1;
      var o =
        (t =
          e == null || (n = e.creative) == null
            ? void 0
            : n.format_transformation_spec) != null
          ? t
          : null;
      if (
        o == null ||
        (o instanceof r("immutable").List && (o = o.toJS()), o.length === 0)
      )
        return !1;
      var a = o.find(function (e) {
        return e.format === "catalog_single_media";
      });
      if (a == null) return !1;
      var i = a.data_source,
        l = Array.isArray(i) ? i : [];
      return l.length === 0 || l.includes("catalog");
    }
    function k(e) {
      return e.adObjectsList.some(function (e) {
        var t = e.adgroup;
        return E(t);
      });
    }
    function I(e, t, n) {
      return t === "single_media" && n === "catalog" && L(e, !0) && !k(e);
    }
    function T(e, t, n) {
      return e.adObjectsList.some(function (e) {
        var o = e.adgroup,
          a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.get(o);
        if (!a) return !1;
        var i = a.find(function (e) {
          return b(e.get("format"), t);
        });
        if (!i) return !1;
        var l = i.get("data_source"),
          s =
            l instanceof r("immutable").List
              ? l.toArray()
              : Array.isArray(l)
                ? l
                : [];
        return Array.isArray(s) && (s.includes(n) || s.length === 0);
      });
    }
    function D(e, t) {
      var n = T(e, "carousel", "catalog"),
        r = T(e, "carousel", "manual_uploads");
      return n && !r ? !1 : r && !n ? !0 : t === 0;
    }
    function x(e, t, n) {
      return e.adObjectsList.some(function (e) {
        var o = e.adgroup,
          a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.get(o);
        if (!a) return !1;
        var i = a.find(function (e) {
          return b(e.get("format"), t);
        });
        if (!i) return !1;
        var l = i.get("data_source"),
          s =
            l instanceof r("immutable").List
              ? l.toArray()
              : Array.isArray(l)
                ? l
                : [];
        return Array.isArray(s) && s.includes(n);
      });
    }
    function $(e, t, n) {
      var o;
      if (e == null) return !1;
      var a =
        e == null || (o = e.creative) == null
          ? void 0
          : o.format_transformation_spec;
      if (a == null) return !1;
      if (t === "collage")
        return a.size === 0
          ? !1
          : a.some(function (e) {
              var t = e.get("data_source");
              return (
                b(e.get("format"), "collage") &&
                t instanceof r("immutable").List &&
                t.includes("manual_uploads")
              );
            });
      if ((a == null ? void 0 : a.size) === 0) return !0;
      var i = !a.some(function (e) {
        var n = e.get("data_source");
        return (
          e.get("format") === t &&
          n instanceof r("immutable").List &&
          n.includes("none")
        );
      });
      return i;
    }
    function P(e) {
      var t,
        n =
          e == null || (t = e.creative) == null
            ? void 0
            : t.format_transformation_spec;
      if (n == null)
        return o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(e);
      if ((n instanceof r("immutable").List && (n = n.toJS()), n.length === 0))
        return !0;
      var a = n.filter(function (e) {
        var t = e.data_source;
        return (
          e.format === "da_collection" &&
          t != null &&
          t !== void 0 &&
          (t.length === 0 || t[0] === "catalog")
        );
      });
      return !!a.length;
    }
    function N(e) {
      var t,
        n =
          e == null || (t = e.creative) == null
            ? void 0
            : t.format_transformation_spec;
      return n == null ||
        (n instanceof r("immutable").List && (n = n.toJS()), n.length === 0)
        ? !1
        : n.some(function (e) {
            var t = e.data_source;
            return (
              e.format === "carousel" &&
              t != null &&
              t !== void 0 &&
              (t.length === 0 || t[0] === "catalog")
            );
          });
    }
    function M(e) {
      var t,
        n =
          e == null || (t = e.creative) == null
            ? void 0
            : t.format_transformation_spec;
      return n == null ||
        (n instanceof r("immutable").List && (n = n.toJS()), n.length === 0)
        ? !1
        : n.some(function (e) {
            var t = e.data_source;
            return (
              e.format === "da_collection" &&
              t != null &&
              t !== void 0 &&
              Array.isArray(t) &&
              t.length > 0 &&
              (t.includes("manual_uploads") || t.includes("related_media"))
            );
          });
    }
    function w(e) {
      return O(e, "single_media", "manual_uploads");
    }
    function A(e) {
      return O(e, "single_media", "related_media");
    }
    function F(e) {
      var t,
        n =
          e == null || (t = e.creative) == null
            ? void 0
            : t.format_transformation_spec;
      if (n == null) return !1;
      n instanceof r("immutable").List && (n = n.toJS());
      var o = n.filter(function (e) {
        var t = e.data_source;
        return (
          e.format === "da_collection" &&
          t != null &&
          t !== void 0 &&
          t[0] === "none"
        );
      });
      return !!o.length;
    }
    function O(e, t, n) {
      var o,
        a =
          e == null || (o = e.creative) == null
            ? void 0
            : o.format_transformation_spec;
      return a == null ||
        (a instanceof r("immutable").List && (a = a.toJS()), a.length === 0)
        ? !1
        : a.some(function (e) {
            var r = e.data_source;
            return (
              b(e.format, t) &&
              r != null &&
              r !== void 0 &&
              Array.isArray(r) &&
              r.includes(n)
            );
          });
    }
    function B(e) {
      var t,
        n = e.account,
        r = e.adObjectsList.some(function (e) {
          var t = e.adgroup;
          return P(t);
        });
      if (r) return !0;
      var a = e.adObjectsList.some(function (e) {
        var t = e.adgroup;
        return F(t);
      });
      if (a) return !1;
      var i =
        (t = e.reactiveControlSettings) == null ||
        (t = t.find(function (e) {
          return e.original_format === "da_carousel";
        })) == null ||
        (t = t.sticky_settings) == null ||
        (t = t.find(function (e) {
          return e.key === "da_collection";
        })) == null ||
        (t = t.value) == null ||
        (t = t.find(function (e) {
          return e.data_source === "catalog";
        })) == null
          ? void 0
          : t.status;
      if (i === "OPT_OUT") return !1;
      var l = o(
        "AdsFlexibleFormatDAUtils",
      ).getIsEligibleForDAFormatAutomationFastTrack(n);
      return l;
    }
    function W(e, t) {
      var n,
        o =
          e == null || (n = e.creative) == null
            ? void 0
            : n.format_transformation_spec;
      return o == null ||
        (o instanceof r("immutable").List && (o = o.toJS()), o.length === 0)
        ? !1
        : o.some(function (e) {
            var n = e.data_source;
            return (
              b(e.format, t) &&
              n != null &&
              n !== void 0 &&
              Array.isArray(n) &&
              (n.size === 0 || !n.includes("none"))
            );
          });
    }
    function q(e) {
      var t = o(
        "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
      ).getAdgroupSpecPathPlugin(e.adObjectsList[0]);
      return o("AdsChildAttachmentsUtils").isCarouselVideoAd(
        e.adObjectsList[0].adgroup,
        t,
      );
    }
    function U(e, t, n) {
      var r,
        a,
        i,
        l = (r = n.adObjectsList[0]) == null ? void 0 : r.adgroup,
        s = p(null, n),
        u = m(null, n),
        c =
          (l == null ||
          (a = l.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.link_data) == null
            ? void 0
            : a.link) != null &&
          (l == null ||
          (i = l.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.link_data) == null
            ? void 0
            : i.link) !== "",
        d =
          l != null
            ? o("AdsMetadataConnectedSourcesUtils").countL1SpecImageUrl(l)
            : 0;
      switch (t) {
        case "manual_uploads":
          return n.uxVersion === "modal_format_preview" &&
            !n.isPCAUnifiedScaledAlpha &&
            n.originalFormat === "da_carousel"
            ? null
            : n.originalFormat === "sa_carousel"
              ? g(l)
                ? null
                : "uploaded_media"
              : (n.originalFormat === "sa_single_image" &&
                    !n.isPCAUnifiedScaledAlpha) ||
                  s
                ? null
                : u
                  ? c
                    ? null
                    : "none"
                  : "uploaded_media";
        case "catalog":
          return e === "sa_collection" && !s && n.isPCAUnifiedScaledAlpha
            ? "uploaded_media"
            : null;
        case "site_links": {
          var _ =
              l != null &&
              o("AdsFlexibleFormatAdexUtils").shouldShowWHForAdShape(l) &&
              o("AdsFlexibleFormatAdexUtils").passGKForWHAdexIntegration(!0)
                ? o("AdsFlexibleFormatAdexUtils").countWebsiteMediaImageUrl(l)
                : 0,
            f = d > 0 || _ > 0;
          return !f || (n.isPCAUnifiedScaledAlpha && !s)
            ? o("AdsFlexibleFormatAdexUtils").shouldShowWHForAdShape(l) &&
              o("AdsFlexibleFormatAdexUtils").passGKForWHAdexIntegration(!0)
              ? "website_highlights"
              : "site_links"
            : null;
        }
        default:
          return null;
      }
    }
    function V(e, t, n) {
      if (z(n, e, t) === !1) return "placements";
      if (t !== "catalog") return null;
      var r =
        h(n) ||
        (n.firstEligibleProductSetId != null &&
          o("AdsFlexibleFormatAdexUtils").passGKForPEClawback());
      if (r) return null;
      if (e === "carousel")
        return n.uxVersion === "modal_format_preview" &&
          !n.isPCAUnifiedScaledAlpha &&
          n.originalFormat === "da_carousel"
          ? null
          : "product_set";
      if (e === "sa_collection")
        if (n.isPCAUnifiedScaledAlpha) {
          var a = p(null, n);
          if (a) return "product_set";
        } else return "product_set";
      return null;
    }
    function H(e) {
      var t = [];
      return (
        e == null ||
          e.forEach(function (e) {
            var n = e.get("format"),
              o = e.get("data_source"),
              a =
                (o instanceof r("immutable").List || Array.isArray(o)) &&
                o.includes("none");
            if (typeof n == "string" && !a) {
              var i = [];
              o instanceof r("immutable").List
                ? (i = o.toArray().filter(function (e) {
                    return typeof e == "string";
                  }))
                : Array.isArray(o) &&
                  (i = o.filter(function (e) {
                    return typeof e == "string";
                  }));
              var l = i.join(", ");
              t.push(l.length > 0 ? n + " with " + l : n);
            }
          }),
        t
      );
    }
    function G(e, t, n) {
      var r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        _,
        f,
        g,
        y,
        C,
        b,
        v,
        S = (r = e.adObjectsList[0]) == null ? void 0 : r.adgroup,
        R = S == null ? void 0 : S.creative,
        L =
          R == null || (o = R.degrees_of_freedom_spec) == null
            ? void 0
            : o.creative_features_spec;
      return {
        metadata: {
          adgroupID: (a = t[0]) != null ? a : null,
          campaignID: null,
          campaignGroupID: null,
        },
        extra: {
          hasSiteLinkMedia:
            ((i =
              R == null ||
              (l = R.creative_sourcing_spec) == null ||
              (l = l.site_links_spec) == null
                ? void 0
                : l.size) != null
              ? i
              : 0) > 0,
          hasFourSiteLinkMedia:
            ((s =
              R == null ||
              (u = R.creative_sourcing_spec) == null ||
              (u = u.site_links_spec) == null
                ? void 0
                : u.size) != null
              ? s
              : 0) >= 4,
          hasRelatedMedia: m(S, e),
          hasUploadedMedia: p(S, e),
          hasProductSet: h(e),
          formatTransformationSpec:
            (c = R == null ? void 0 : R.format_transformation_spec) != null
              ? c
              : null,
          siteLinksDataConsented:
            (d =
              R == null ||
              (_ = R.creative_sourcing_spec) == null ||
              (_ = _.site_links_data_consented) == null
                ? void 0
                : _.enroll_status) != null
              ? d
              : null,
          productExtensionsEnrollStatus:
            (f =
              L == null || (g = L.product_extensions) == null
                ? void 0
                : g.enroll_status) != null
              ? f
              : null,
          peCarouselEnrollStatus:
            (y =
              L == null ||
              (C = L.product_extensions) == null ||
              (C = C.customizations) == null ||
              (C = C.pe_carousel) == null
                ? void 0
                : C.enroll_status) != null
              ? y
              : null,
          siteExtensionsEnrollStatus:
            (b =
              L == null || (v = L.site_extensions) == null
                ? void 0
                : v.enroll_status) != null
              ? b
              : null,
          eligibleFormats: n,
        },
      };
    }
    function z(e, t, n, r, a) {
      var i,
        l = e == null || (i = e.adObjectsList[0]) == null ? void 0 : i.campaign;
      l == null && r != null && (l = r);
      var s = o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(l),
        u = o("AdsPlacementAPISpecReaderUtils").isActiveFacebookFeedPosition(s),
        c = o("AdsPlacementAPISpecReaderUtils").isActiveInstagramFeedPosition(
          s,
        ),
        d = o("AdsPlacementAPISpecReaderUtils").isActiveInstagramStoryPosition(
          s,
        ),
        m = a === !0 || (e == null ? void 0 : e.isPCAUnifiedScaledAlpha) === !0;
      if (m) {
        if (t === "sa_collection" && n === "catalog") return u || c;
        if (t === "sa_collection" && n === "site_links") return u || c || d;
      }
      return !0;
    }
    ((l.DA_SINGLE_MEDIA_SUPPORTED_API_FORMATS = e),
      (l.getAdsPcaUnificationFormatEligibility = s),
      (l.getPcaUnificationDynamicDataSourceEligibility = u),
      (l.getPcaUnificationStaticDataSourceEligibility = c),
      (l.getPcaUnificationGenAIMediaPresent = d),
      (l.getPcaUnificationRelatedMediaPresent = m),
      (l.getPcaUnificationUploadedMediaPresent = p),
      (l.isOriginalFormatPreview = _),
      (l.getL1SummaryFormatKey = f),
      (l.hasSACarouselChildMedia = g),
      (l.getPcaUnificationDynamicMediaPresent = h),
      (l.genIsLastOptedInFormat = y),
      (l.computeOptedInTransformationsCount = C),
      (l.ftsEntryMatchesFormat = b),
      (l.isCollageBucketOptedIn = v),
      (l.isDACatalogSingleMediaFormatTransformationContext = S),
      (l.passGKForDASingleVideoTransformationEnabledByDefault = o(
        "AdsDynamicAdsFormatUtils",
      ).passGKForDASingleVideoTransformationEnabledByDefault),
      (l.passGKForSingleVideoTransformation = o(
        "AdsDynamicAdsFormatUtils",
      ).passGKForSingleVideoTransformation),
      (l.isAdgroupOptedInForMediaTypeAutomation = R),
      (l.getIsEligibleForDACatalogSingleMediaFormatTransformation = L),
      (l.isAdgroupOptedInForDACatalogSingleMediaFormatTransformation = E),
      (l.getIsOptedInForDACatalogSingleMediaFormatTransformation = k),
      (l.shouldShowDACatalogSingleMediaOptOutNotice = I),
      (l.shouldSelectDataSource = T),
      (l.isCarouselIntroCardPreviewVariant = D),
      (l.isDataSourceSelectedInModalFormatPreview = x),
      (l.getIsOptedInForSACarouselFormatTransformation = $),
      (l.getIsOptedInDAFormatAutomation = P),
      (l.isOptedInforDACaroselFormatAutomation = N),
      (l.isOptedInforDACollectionFormatWithManualorRelatedMedia = M),
      (l.isOptedInforSingleMediaFormatAutomation = w),
      (l.isOptedInforSingleMediaWithRelatedMediaFormatAutomation = A),
      (l.hasFormatTransformationWithDataSource = O),
      (l.getIsOptedInForDACarouselToCollectionTransformation = B),
      (l.hasFormatTransformation = W),
      (l.isSACarouselVideoAd = q),
      (l.getEmptyPreviewNoticeType = U),
      (l.getPreviewNoticeType = V),
      (l.getOptedInFlexibleFormats = H),
      (l.getFormatModalSectionData = G),
      (l.getIsFormatEligiblePlacementsAvailable = z));
  },
  98,
);
