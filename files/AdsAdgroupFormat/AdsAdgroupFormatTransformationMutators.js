__d(
  "AdsAdgroupFormatTransformationMutators",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAutomaticFlowUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatDAUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "ApiDynamicCreativeOptimizationTypes",
    "DAFlexibleFormatUtils",
    "ODS",
    "PERelevanceUtils",
    "gkx",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e === "collage" || e === "photo_collage";
    }
    function u(e) {
      var t =
        e instanceof r("immutable").List
          ? e.toArray()
          : Array.isArray(e)
            ? e
            : [];
      return t.map(function (e) {
        return String(e);
      });
    }
    function c(e, t) {
      var n = u(e),
        r = u(t),
        o = Array.from(
          new Set(
            [].concat(n, r).filter(function (e) {
              return e !== "none";
            }),
          ),
        );
      if (o.length > 0) return o;
      var a = function (t) {
        return t.includes("none");
      };
      return a(n) && a(r) ? ["none"] : null;
    }
    function d(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (n == null) return e;
      var a =
          t != null
            ? t
            : o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e),
        i = a === "photo_collage" ? "collage" : "photo_collage",
        l = n.find(function (e) {
          return e.get("format") === i;
        });
      if (l == null) return e;
      var s = n.find(function (e) {
          return e.get("format") === a;
        }),
        u;
      if (s == null)
        u = n.map(function (e) {
          return e.get("format") === i ? e.set("format", a) : e;
        });
      else {
        var d,
          m = c(s.get("data_source"), l.get("data_source")),
          p =
            (d = s.get("customizations")) != null ? d : l.get("customizations");
        u = n
          .filter(function (e) {
            return e.get("format") !== i;
          })
          .map(function (e) {
            if (e.get("format") !== a) return e;
            var t =
              m == null ? e.delete("data_source") : e.set("data_source", m);
            return (p != null && (t = t.set("customizations", p)), t);
          });
      }
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(u)(e);
    }
    function m(e, t) {
      var n = "photo_collage",
        o = d(e, n),
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(o),
        i = function (o) {
          var e = o.set("format", n);
          return t == null
            ? e.delete("data_source")
            : e.set("data_source", r("immutable").List(t));
        };
      if (a == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          r("immutable").List([i(r("immutable").Map())]),
        )(o);
      var l = a.some(function (e) {
          return s(e.get("format"));
        }),
        u = l
          ? a.map(function (e) {
              return s(e.get("format")) ? i(e) : e;
            })
          : a.push(i(r("immutable").Map()));
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(u)(o);
    }
    function p(e) {
      return m(e, null);
    }
    function _(e) {
      return m(e, ["none"]);
    }
    function f(e, t) {
      return !o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(
        e,
      ) ||
        t === "aPlusc" ||
        r("AdsAdgroupRecordAccessors").creative.format_transformation_spec.get(
          e,
        ) === null
        ? e
        : t === "reactive_control"
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(
              r("immutable").List([
                r("immutable").Map({
                  data_source: ["none"],
                  format: "da_collection",
                }),
              ]),
            )(e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.delete(e);
    }
    function g(e, t) {
      if (
        !o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(e) ||
        t === "aPlusc"
      )
        return e;
      var n = e;
      r("AdsAdgroupRecordAccessors").creative.format_transformation_spec.get(
        e,
      ) !== null &&
        (n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.delete(e));
      var a = o(
        "DAFlexibleFormatUtils",
      ).isAdgroupEligibleForDACarouselIntroCardRevamp(e)
        ? ["catalog"]
        : [];
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(
        r("immutable").List([
          r("immutable").Map({ data_source: a, format: "da_collection" }),
        ]),
      )(n);
    }
    function h(e) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.optimization_type.set(
          r("ApiDynamicCreativeOptimizationTypes").FORMAT_AUTOMATION,
        ),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.ad_formats.set(
          r("immutable").List(["CAROUSEL", "COLLECTION"]),
        ),
      )(e);
    }
    function y(e) {
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(e);
    }
    function C(e) {
      var t = ["catalog"];
      (o("DAFlexibleFormatUtils").hasDAIntroCard(e) && t.push("manual_uploads"),
        o("DAFlexibleFormatUtils").hasRelatedMedia(e) &&
          t.push("related_media"));
      var n = e;
      return (
        t.forEach(function (e) {
          n = v(n, "da_collection", e);
        }),
        (n = h(n)),
        n
      );
    }
    function b(e) {
      var t = R(e, "da_collection");
      return ((t = y(t)), t);
    }
    function v(e, t, n, a) {
      var i = s(t),
        l = i ? d(e) : e,
        u = i
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e)
          : a != null
            ? a
            : t,
        c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(l);
      if (c == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          r("immutable").List([
            r("immutable").Map({ data_source: [n], format: u }),
          ]),
        )(l);
      var m = c.find(function (e) {
        return e.get("format") === u;
      });
      if (m != null) {
        var p = m.get("data_source"),
          _ =
            p instanceof r("immutable").List
              ? p.toArray()
              : Array.isArray(p)
                ? p
                : [];
        if (_.length === 1 && _[0] === "none")
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.set(
            c.map(function (e) {
              return e.get("format") === u ? e.set("data_source", [n]) : e;
            }),
          )(l);
        if (_ != null && !_.includes(n))
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.set(
            c.map(function (e) {
              return e.get("format") === u
                ? e.set("data_source", _.concat([n]))
                : e;
            }),
          )(l);
      } else
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          c.push(r("immutable").Map({ data_source: [n], format: u })),
        )(l);
      return l;
    }
    function S(e, t, n, a) {
      var i = s(t),
        l = i ? d(e) : e,
        u = i
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e)
          : a != null
            ? a
            : t,
        c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(l);
      if (c == null)
        return a === "catalog_single_media"
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(
              r("immutable").List([
                r("immutable").Map({ data_source: ["none"], format: u }),
              ]),
            )(l)
          : l;
      var m = c.find(function (e) {
        return e.get("format") === u;
      });
      if (m == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          c.push(r("immutable").Map({ data_source: ["none"], format: u })),
        )(l);
      var p = c.map(function (e) {
        if (e.get("format") === u) {
          var t = e.get("data_source"),
            o = Array.isArray(t)
              ? t
              : t instanceof r("immutable").List
                ? t.toArray()
                : [];
          if (Array.isArray(o) && (o.includes(n) || o.length === 0))
            return o.length <= 1
              ? e.set("data_source", r("immutable").List(["none"]))
              : e.set(
                  "data_source",
                  o.filter(function (e) {
                    return e !== n;
                  }),
                );
        }
        return e;
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(p)(l);
    }
    function R(e, t) {
      var n = s(t),
        a = n ? d(e) : e,
        i = n
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e)
          : t,
        l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(a);
      if (l == null) return a;
      var u = l.find(function (e) {
        return e.get("format") === i;
      });
      if (u == null) return a;
      var c = l.map(function (e) {
        return e.get("format") === i
          ? e.set("data_source", r("immutable").List(["none"]))
          : e;
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(c)(a);
    }
    function L(e, t) {
      var n,
        o = "da_collection",
        a = "catalog";
      if (t === !1)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e) == null
          ? e
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.delete(e);
      var i =
        (r("AdsAdgroupRecordAccessors") == null ||
        (n = r("AdsAdgroupRecordAccessors").creative) == null
          ? void 0
          : n.format_transformation_spec.delete(e)) || e;
      return v(i, o, a);
    }
    function E(e) {
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e),
        n = "catalog_single_media",
        o =
          t == null
            ? void 0
            : t.find(function (e) {
                return e.get("format") === n;
              });
      return o != null ? e : v(e, "single_media", "catalog", n);
    }
    function k(e, t, n, a, i) {
      var l = s(t),
        u = l ? d(e) : e,
        c = l
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e)
          : i != null
            ? i
            : t,
        m = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(u);
      if (m == null) {
        var p = (a != null ? a : [])
          .filter(function (e) {
            return e !== n;
          })
          .filter(Boolean);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          r("immutable").List([
            r("immutable").Map({
              data_source: p.length === 0 ? ["none"] : p,
              format: c,
            }),
          ]),
        )(u);
      }
      var _ = m.find(function (e) {
        return e.get("format") === c;
      });
      if (_ == null) {
        var f = (a != null ? a : [])
            .filter(function (e) {
              return e !== n;
            })
            .filter(Boolean),
          g = m.push(
            r("immutable").Map({
              data_source: f.length === 0 ? ["none"] : f,
              format: c,
            }),
          );
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(g)(u);
      }
      var h = m.map(function (e) {
        if (e.get("format") === c) {
          var t = e.get("data_source"),
            o = Array.isArray(t)
              ? t
              : t instanceof r("immutable").List
                ? t.toArray()
                : [];
          if (Array.isArray(o) && (o.includes(n) || o.length === 0)) {
            if (o.length === 1)
              return e.set("data_source", r("immutable").List(["none"]));
            var i = (o.length === 0 ? (a != null ? a : []) : o)
              .filter(function (e) {
                return e !== n;
              })
              .filter(Boolean);
            return e.set(
              "data_source",
              i.length === 0 ? r("immutable").List(["none"]) : i,
            );
          }
        }
        return e;
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(h)(u);
    }
    function I(e, t, n, a, i) {
      var l = q(e, i);
      return (
        (l = k(l, t, n, a)),
        t === "sa_collection" &&
          n === "catalog" &&
          (l = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
              i != null ? i : "MANUAL",
            ),
          )(l)),
        t === "carousel" &&
          n === "catalog" &&
          (l = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.product_extensions.customizations.delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
              i != null ? i : "MANUAL",
            ),
          )(l)),
        t === "sa_collection" &&
          n === "site_links" &&
          (l = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
              i != null ? i : "MANUAL",
            ),
          )(l)),
        t === "carousel" &&
          n === "site_links" &&
          !o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0) &&
          (l = S(l, "video_slideshow", "site_links")),
        l
      );
    }
    function T(e, t, n, a) {
      var i = q(e, a);
      i = v(i, t, n);
      var l =
        a !== "MANUAL" &&
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "product_extensions",
        );
      (t === "sa_collection" &&
        n === "catalog" &&
        !l &&
        (i = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
            "OPT_IN",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
            a != null ? a : "MANUAL",
          ),
        )(i)),
        t === "carousel" &&
          n === "catalog" &&
          !l &&
          (i = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.product_extensions.customizations.delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
              a != null ? a : "MANUAL",
            ),
          )(i)));
      var s =
        a !== "MANUAL" &&
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "site_extensions",
        );
      return (
        t === "sa_collection" &&
          n === "site_links" &&
          !s &&
          (i = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
              a != null ? a : "MANUAL",
            ),
          )(i)),
        t === "carousel" &&
          n === "site_links" &&
          !o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(i) &&
          !o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0) &&
          (i = v(i, "video_slideshow", "site_links")),
        i
      );
    }
    function D(e, t, n, r, a, i, l, u, c, d) {
      var m;
      (u === void 0 && (u = !0), c === void 0 && (c = !1));
      var p =
          (e == null || (m = e.metadata) == null
            ? void 0
            : m.is_pca_unified_format_ad) === !0,
        _ = r
          .filter(function (e) {
            return e.includes(t);
          })
          .keySeq()
          .toArray(),
        f = e;
      return (
        (i != null ? i : _).forEach(function (i) {
          var m,
            _,
            g,
            h,
            y = o("AdsMetadataConnectedSourcesUtils").countL1SpecImageUrl(f),
            C =
              c === !0 &&
              t === "site_links" &&
              (i === "carousel" ||
                o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0)),
            b = C ? d : l;
          f = M(
            f,
            i,
            t,
            u === !0
              ? (a == null || (m = a.get(i)) == null
                  ? void 0
                  : m.find(function (e) {
                      return e.status === "OPT_IN";
                    })) != null
                ? "OPT_IN"
                : (a == null || (_ = a.get(i)) == null
                      ? void 0
                      : _.find(function (e) {
                          return e.status === "OPT_OUT";
                        })) != null
                  ? "OPT_OUT"
                  : null
              : a &&
                  (a == null ||
                  (g = a.get(i)) == null ||
                  (g = g.find(function (e) {
                    return (
                      e.data_source ===
                      (s(i) &&
                      o("AdsFlexibleFormatAdexUtils").isSASingleCollageSurface(
                        f,
                      )
                        ? o("AdsFlexibleFormatAdexUtils")
                            .MIXED_COLLAGE_STICKY_DATA_SOURCE
                        : t)
                    );
                  })) == null
                    ? void 0
                    : g.status),
            n &&
              (i !== "carousel" ||
                t !== "site_links" ||
                ((h = e.creative) == null ||
                (h = h.creative_sourcing_spec) == null ||
                (h = h.dynamic_site_links_spec) == null
                  ? void 0
                  : h.enroll_status) === "OPT_IN" ||
                c === !0 ||
                y > 0),
            r.get(i),
            b,
            p && (i === "sa_collection" || i === "carousel"),
          );
        }),
        f
      );
    }
    var x = ["MANUAL", "DUPLICATION_UPGRADE"];
    function $(e, t) {
      var n,
        r =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null
            ? void 0
            : n.product_extensions;
      if (t === "carousel") {
        var o,
          a,
          i =
            r == null || (o = r.customizations) == null
              ? void 0
              : o.pe_carousel,
          l = i == null || (a = i.action_metadata) == null ? void 0 : a.type;
        return (
          (i == null ? void 0 : i.enroll_status) === "OPT_IN" &&
          l != null &&
          x.includes(l)
        );
      }
      if (t === "sa_collection") {
        var s,
          u = r == null || (s = r.action_metadata) == null ? void 0 : s.type;
        return (
          (r == null ? void 0 : r.enroll_status) === "OPT_IN" &&
          u != null &&
          x.includes(u)
        );
      }
      return !1;
    }
    var P = ["MANUAL", "DUPLICATION_UPGRADE"];
    function N(e, t, n) {
      var r,
        o =
          (r = e.creative) == null || (r = r.degrees_of_freedom_spec) == null
            ? void 0
            : r.creative_features_spec,
        a = null,
        i = null;
      if (n === "catalog") {
        if (t === "carousel") {
          var l,
            s,
            u =
              o == null ||
              (l = o.product_extensions) == null ||
              (l = l.customizations) == null
                ? void 0
                : l.pe_carousel;
          ((a = u == null ? void 0 : u.enroll_status),
            (i =
              u == null || (s = u.action_metadata) == null ? void 0 : s.type));
        } else if (t === "sa_collection") {
          var c, d;
          ((a =
            o == null || (c = o.product_extensions) == null
              ? void 0
              : c.enroll_status),
            (i =
              o == null ||
              (d = o.product_extensions) == null ||
              (d = d.action_metadata) == null
                ? void 0
                : d.type));
        }
      } else if (n === "site_links" && t === "sa_collection") {
        var m, p;
        ((a =
          o == null || (m = o.site_extensions) == null
            ? void 0
            : m.enroll_status),
          (i =
            o == null ||
            (p = o.site_extensions) == null ||
            (p = p.action_metadata) == null
              ? void 0
              : p.type));
      }
      return a === "OPT_OUT" && i != null && P.includes(i);
    }
    function M(t, n, a, i, l, u, c, d) {
      var m = ["sa_collection", "carousel"],
        f = ["sa_collection", "carousel", "video_slideshow"],
        g =
          a === "catalog" && m.includes(n)
            ? "product_extensions"
            : a === "site_links" && f.includes(n)
              ? "site_extensions"
              : null,
        h =
          i == null &&
          g != null &&
          o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(g),
        y = i === "OPT_OUT" || c === !0 || !l || h;
      if (
        y &&
        l &&
        g === "product_extensions" &&
        $(t, n) &&
        r("gkx")("5791") === !0
      )
        return (
          (e || (e = o("ODS"))).bumpEntityKey(
            68,
            "format_transformation_default_on",
            "prevent_pe_optin_overwrite",
          ),
          d === !0 ? t : v(t, n, a)
        );
      if (!y && N(t, n, a) && r("gkx")("4221")) return t;
      if (d === !0) {
        var C = y
            ? c === !0
              ? "DEFAULT_OFF"
              : l
                ? "STICKY"
                : "MANUAL"
            : i === "OPT_IN"
              ? "STICKY"
              : "DEFAULT",
          b = y ? "OPT_OUT" : "OPT_IN";
        return w(t, n, a, b, C);
      }
      return (s(n) && a === "site_links") ||
        (s(n) && o("AdsFlexibleFormatAdexUtils").isSASingleCollageSurface(t))
        ? y
          ? _(t)
          : p(t)
        : y
          ? I(
              t,
              n,
              a,
              u != null ? u : [],
              c === !0 ? "DEFAULT_OFF" : l ? "STICKY" : "MANUAL",
            )
          : T(t, n, a, i === "OPT_IN" ? "STICKY" : "DEFAULT");
    }
    function w(e, t, n, a, i) {
      return t === "carousel" && n === "site_links"
        ? o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
              a,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
              i != null ? i : "MANUAL",
            ),
          )(e)
        : e;
    }
    function A(e) {
      var t,
        n,
        r,
        a,
        i,
        l = [],
        s = [];
      if (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null
          ? void 0
          : t.product_extensions) != null
      ) {
        var u,
          c =
            (u = e.creative) == null ||
            (u = u.degrees_of_freedom_spec) == null ||
            (u = u.creative_features_spec) == null ||
            (u = u.product_extensions) == null
              ? void 0
              : u.enroll_status;
        if (c === "OPT_IN") {
          var d,
            m =
              ((d = e.creative) == null ||
              (d = d.creative_sourcing_spec) == null
                ? void 0
                : d.associated_product_set_id) != null ||
              o("PERelevanceUtils").hasVirtualProductSetId(e);
          if (m) {
            var p;
            l.push("catalog");
            var _ =
              (p = e.creative) == null ||
              (p = p.degrees_of_freedom_spec) == null ||
              (p = p.creative_features_spec) == null ||
              (p = p.product_extensions) == null ||
              (p = p.customizations) == null ||
              (p = p.pe_carousel) == null
                ? void 0
                : p.enroll_status;
            _ !== "OPT_OUT" && s.push("catalog");
          }
        }
      }
      var f =
          (n = e.creative) == null ||
          (n = n.creative_sourcing_spec) == null ||
          (n = n.site_links_data_consented) == null
            ? void 0
            : n.enroll_status,
        g =
          (r =
            (a = e.creative) == null ||
            (a = a.creative_sourcing_spec) == null ||
            (a = a.site_links_spec) == null
              ? void 0
              : a.size) != null
            ? r
            : 0,
        h =
          (i = e.creative) == null ||
          (i = i.creative_sourcing_spec) == null ||
          (i = i.dynamic_site_links_spec) == null
            ? void 0
            : i.enroll_status,
        y = f !== "OPT_OUT" && (g > 0 || h === "OPT_IN");
      y && (l.push("site_links"), s.push("site_links"));
      var C = [];
      return (
        s.includes("site_links") &&
          (!o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(e) ||
            o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0)) &&
          C.push("site_links"),
        { carousel: s, collection: l, videoSlideshow: C }
      );
    }
    var F = ["sa_collection", "carousel", "video_slideshow"];
    function O(e, t) {
      switch (e) {
        case "sa_collection":
          return t.collection;
        case "carousel":
          return t.carousel;
        case "video_slideshow":
          return t.videoSlideshow;
        default:
          return [];
      }
    }
    function B(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return String(e);
          })
        : e instanceof r("immutable").List
          ? e.toArray().map(function (e) {
              return String(e);
            })
          : [];
    }
    function W(e) {
      return F.map(function (t) {
        var n = O(t, e);
        return r("immutable").Map({
          data_source: n.length > 0 ? n : ["none"],
          format: t,
        });
      });
    }
    function q(e, t) {
      var n, a, i;
      if (
        !r("justknobx")._("4319") ||
        ((n = e.creative) == null ? void 0 : n.format_transformation_spec) !=
          null ||
        t !== "MANUAL" ||
        (((a = e.creative) == null ||
        (a = a.degrees_of_freedom_spec) == null ||
        (a = a.creative_features_spec) == null
          ? void 0
          : a.product_extensions) == null &&
          ((i = e.creative) == null ||
          (i = i.degrees_of_freedom_spec) == null ||
          (i = i.creative_features_spec) == null
            ? void 0
            : i.site_extensions) == null)
      )
        return e;
      var l = W(A(e));
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.format_transformation_spec.set(
          r("immutable").List(l),
        ),
      )(e);
    }
    function U(e) {
      if (!r("gkx")("4221")) return e;
      var t = A(e),
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e),
        o =
          t.collection.length === 0 &&
          t.carousel.length === 0 &&
          t.videoSlideshow.length === 0;
      if (n == null || n.size === 0)
        return o
          ? e
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(
              r("immutable").List(W(t)),
            )(e);
      var a = n.map(function (e) {
        var n = e.get("format");
        if (typeof n != "string" || !F.includes(n)) return e;
        var o = new Set(O(n, t)),
          a = n !== "sa_collection",
          i = B(e.get("data_source")).filter(function (e) {
            return o.has(e) || (a && e === "site_links");
          });
        return e.set(
          "data_source",
          r("immutable").List(i.length > 0 ? i : ["none"]),
        );
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(a)(e);
    }
    function V(e, t, n) {
      n === void 0 && (n = "catalog");
      var o = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (o == null) return e;
      var a = o.some(function (e) {
        return e.get("format") === "carousel";
      });
      if (!a && t != null) {
        var i = r("immutable").Map({
            format: "carousel",
            data_source: r("immutable").List([n]),
            customizations: [
              { name: "preserve_hero_media", enroll_status: t, scope: [n] },
            ],
          }),
          l = o.push(i);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(l)(e);
      }
      var s = o.map(function (e) {
        if (e.get("format") !== "carousel") return e;
        var r = e.toJS(),
          o = r.customizations,
          a = Array.isArray(o) ? [].concat(o) : [],
          i = Array.isArray(r.data_source) ? r.data_source : [];
        if (t == null) return H(e, a, i, n);
        var l = [],
          s = !1;
        for (var u of a) {
          if (u.name !== "preserve_hero_media") {
            l.push(u);
            continue;
          }
          var c = u.scope;
          if (c == null || c.length === 0) {
            var d = i.filter(function (e) {
              return e !== n;
            });
            (d.length > 0 && l.push(babelHelpers.extends({}, u, { scope: d })),
              (s = !0));
          } else
            c.length === 1 && c[0] === n
              ? (l.push(babelHelpers.extends({}, u, { enroll_status: t })),
                (s = !0))
              : c.includes(n)
                ? (l.push(
                    babelHelpers.extends({}, u, {
                      scope: c.filter(function (e) {
                        return e !== n;
                      }),
                    }),
                  ),
                  (s = !0))
                : l.push(u);
        }
        if (s) {
          var m = l.some(function (e) {
            return (
              e.name === "preserve_hero_media" &&
              e.scope != null &&
              e.scope.includes(n)
            );
          });
          m ||
            l.push({
              name: "preserve_hero_media",
              enroll_status: t,
              scope: [n],
            });
        } else
          l.push({ name: "preserve_hero_media", enroll_status: t, scope: [n] });
        return e.set("customizations", l);
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(s)(e);
    }
    function H(e, t, n, r) {
      var o = [];
      for (var a of t) {
        if (a.name !== "preserve_hero_media") {
          o.push(a);
          continue;
        }
        var i = a.scope;
        if (i == null || i.length === 0) {
          var l = n.filter(function (e) {
            return e !== r;
          });
          l.length > 0 && o.push(babelHelpers.extends({}, a, { scope: l }));
        } else
          (i.length === 1 && i[0] === r) ||
            (i.includes(r)
              ? o.push(
                  babelHelpers.extends({}, a, {
                    scope: i.filter(function (e) {
                      return e !== r;
                    }),
                  }),
                )
              : o.push(a));
      }
      return o.length === 0
        ? e.delete("customizations")
        : e.set("customizations", o);
    }
    function G(e, t) {
      if (t.assetType !== "image") return e;
      var n = t.asset.get("hash"),
        r = t.asset.get("url");
      return n != null
        ? e
            .setIn(
              ["creative", "object_story_spec", "link_data", "image_hash"],
              n,
            )
            .deleteIn(["creative", "object_story_spec", "link_data", "picture"])
        : r != null
          ? e
              .setIn(
                ["creative", "object_story_spec", "link_data", "picture"],
                r,
              )
              .deleteIn([
                "creative",
                "object_story_spec",
                "link_data",
                "image_hash",
              ])
          : e;
    }
    function z(e) {
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.get(
          e,
        ),
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.get(
          e,
        ),
        a = [];
      return (
        t === "OPT_IN" &&
          a.push(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
              "MANUAL",
            ),
          ),
        n === "OPT_IN" &&
          a.push(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
              "MANUAL",
            ),
          ),
        a.length === 0
          ? e
          : o("AdsMutators").chain.apply(o("AdsMutators"), a)(e)
      );
    }
    function j(e) {
      var t = e;
      return (
        (t = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
            "OPT_OUT",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
            "MANUAL",
          ),
        )(t)),
        t
      );
    }
    function K(e, t, n) {
      if (
        (n === void 0 && (n = ["sa_collection", "carousel"]),
        !o("AdsFlexibleFormatAdexUtils").isEligibleForEPAFDOSurface(e))
      )
        return e;
      var r = e;
      for (var a of n) r = v(r, a, t);
      return r;
    }
    ((l.canonicalizeCollageFamily = d),
      (l.adsAdgroupMixedCollageOptInMutator = p),
      (l.adsAdgroupMixedCollageOptOutMutator = _),
      (l.adsAdgroupFormatTransformationDAOptOutMutator = f),
      (l.adsAdgroupFormatTransformationDAOptInMutator = g),
      (l.adsDACollectionAssetFeedSpecOptInMutator = h),
      (l.adsDACollectionAssetFeedSpecOptOutMutator = y),
      (l.adsDACollectionOptInMutator = C),
      (l.adsDACollectionOptOutMutator = b),
      (l.adsAdgroupFormatTransformationDataSourceOptInMutator = v),
      (l.adsAdgroupFormatTransformationDataSourceOptOutMutator = S),
      (l.adsAdgroupFormatTransformationFormatOptOutMutator = R),
      (l.adsAdgroupFormatTransformationDASingleMediaAsCollectionDefaultOptInAndOutMutator =
        L),
      (l.adsAdgroupCatalogSingleMediaDefaultOptInMutator = E),
      (l.adsAdgroupReactiveControlOptionOptOutMutator = k),
      (l.adsAdgroupReactiveControlOptionOptOutWithBoundleMutationMutator = I),
      (l.adsAdgroupReactiveControlOptionOptInWithBoundleMutationMutator = T),
      (l.adsAdgroupFormatTransformationDataSourceDefaultOnMutator = D),
      (l.syncFTSFromCFS = U),
      (l.adsAdgroupFTSSetUseIntroCardMutator = V),
      (l.applyActiveMediaItemToAdgroupMutator = G),
      (l.applyNoSiteLinksToAdgroupMutator = z),
      (l.defaultOffProductExtensionEnrollStatusMutator = j),
      (l.dualWriteEPAFormatTransformationOptIn = K));
  },
  98,
);
