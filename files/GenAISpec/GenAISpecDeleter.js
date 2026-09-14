__d(
  "GenAISpecDeleter",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupCreativeFlexMutators",
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsGenAISpecUtils",
    "AdsInterfacesLogger",
    "GenAISpecMigrationGKUtils",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = n.logImages,
        a = n.logVideos;
      r("justknobx")._("1718") && (o && s(e, t), a && u(e, t));
    }
    function s(e, t) {
      var n = d(e),
        r = m(e),
        o = p(e),
        a = new Set(n),
        i = new Set(r),
        l = new Set(o),
        s = g(a, i),
        u = g(a, l),
        _ = g(i, l),
        f = [];
      (s || f.push("gas_cag"), u || f.push("gas_mss"), _ || f.push("cag_mss"));
      var h = f.length === 0;
      c(e, h, "image", t, {
        outcome: h ? "consistent" : f.join(","),
        gas_hashes: n,
        cag_hashes: r,
        mss_hashes: o,
      });
    }
    function u(e, t) {
      var n = _(e),
        r = f(e),
        o = g(new Set(n), new Set(r));
      c(e, o, "video", t, {
        outcome: o ? "consistent" : "cag_mss_video",
        cag_video_ids: n,
        mss_video_ids: r,
      });
    }
    function c(e, t, n, o, a) {
      var i,
        l =
          ((i = {}),
          (i.adgroup_id = r("AdsAdgroupRecordAccessors").id.get(e)),
          (i.event_source = n),
          (i.metadata = JSON.stringify(
            babelHelpers.extends({}, a, { function: o }),
          )),
          i);
      t
        ? r("AdsInterfacesLogger").log({
            eventName: "ads_gen_ai__spec_migration_comparison_consistent",
            data: l,
          })
        : r("AdsInterfacesLogger").log({
            eventName: "ads_gen_ai__spec_migration_comparison_inconsistent",
            data: l,
          });
    }
    function d(e) {
      var t,
        n,
        r =
          (t = e.creative) == null ||
          (t = t.generative_asset_spec) == null ||
          (t = t.images) == null
            ? void 0
            : t.variations;
      return (
        (n = r == null || r.toArray == null ? void 0 : r.toArray()) != null
          ? n
          : []
      )
        .filter(function (e) {
          return e.get("enroll_status") === "OPT_IN";
        })
        .map(function (e) {
          var t;
          return String((t = e.get("hash")) != null ? t : "");
        });
    }
    function m(e) {
      var t,
        n = o("AdsAdgroupCreativeAssetGroupsSpecMutators").getCagGroupAtIndex(
          e,
          0,
        ),
        r = (t = n == null ? void 0 : n.images) != null ? t : [];
      return (Array.isArray(r) ? r : [])
        .filter(function (e) {
          return e.source === "generated";
        })
        .map(function (e) {
          var t;
          return String((t = e.hash) != null ? t : "");
        });
    }
    function p(e) {
      var t,
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.images.get(e);
      return (
        (t = n == null || n.toArray == null ? void 0 : n.toArray()) != null
          ? t
          : []
      )
        .filter(function (e) {
          return e.get("source") === "gen_ai";
        })
        .map(function (e) {
          var t;
          return String((t = e.get("hash")) != null ? t : "");
        });
    }
    function _(e) {
      var t,
        n = o("AdsAdgroupCreativeAssetGroupsSpecMutators").getCagGroupAtIndex(
          e,
          0,
        ),
        r = (t = n == null ? void 0 : n.videos) != null ? t : [];
      return (Array.isArray(r) ? r : [])
        .filter(function (e) {
          return e.source === "generated" || e.source === "generated_animation";
        })
        .map(function (e) {
          var t;
          return String((t = e.video_id) != null ? t : "");
        });
    }
    function f(e) {
      var t,
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.videos.get(e);
      return (
        (t = n == null || n.toArray == null ? void 0 : n.toArray()) != null
          ? t
          : []
      )
        .filter(function (e) {
          return e.get("source") === "gen_ai";
        })
        .map(function (e) {
          var t;
          return String((t = e.get("video_id")) != null ? t : "");
        });
    }
    function g(e, t) {
      if (e.size !== t.size) return !1;
      for (var n of e) if (!t.has(n)) return !1;
      return !0;
    }
    function h(t, n) {
      var r,
        a,
        i = n.assetType,
        l = n.gasOnly,
        s = n.imageHashes;
      if (l === !0)
        return i === "videos"
          ? o(
              "AdsAdgroupGenerativeAssetSpecMutators",
            ).deleteVideoGeneratedAssetSpec(t)
          : i === "images"
            ? o(
                "AdsAdgroupGenerativeAssetSpecMutators",
              ).deleteImageGeneratedAssetSpec(t)
            : i === "all"
              ? o(
                  "AdsAdgroupGenerativeAssetSpecMutators",
                ).deleteGeneratedAssetSpec(t)
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      i,
                  );
                })();
      var u = o("AdsGenAISpecUtils").isGenAIAds(t);
      if (s == null)
        return i === "images" ? S(t, u) : i === "videos" ? R(t, u) : v(t, u);
      var c =
          (r = t.creative) == null ||
          (r = r.generative_asset_spec) == null ||
          (r = r.images) == null
            ? void 0
            : r.variations,
        d =
          (a = c == null || c.toJS == null ? void 0 : c.toJS()) != null ? a : c;
      if (i !== "videos" && s != null && Array.isArray(d)) {
        var m = new Set(s),
          p = d.filter(function (e) {
            return !m.has(e.hash);
          });
        if (p.length === 0) return i === "images" && D(t) ? S(t, u) : v(t, u);
      }
      var _ = t;
      if (o("GenAISpecMigrationGKUtils").isMSSOnlyWriteEnabled()) {
        s != null && (_ = E(_, s));
        var g = x(_) || f(_).length > 0;
        return (
          y(_, g) &&
            (_ = o(
              "AdsAdgroupGenerativeAssetSpecMutators",
            ).removeGenAIImageAssetsFromCAGSpec(_, u)),
          L(_, g, "removeAdoptedVariants_mssOnly")
        );
      }
      return (
        s != null && (_ = b(_, s, u)),
        o("GenAISpecMigrationGKUtils").isDualWriteEnabled() &&
          s != null &&
          ((_ = E(_, s)),
          e(_, "removeAdoptedVariants", { logImages: !0, logVideos: !1 })),
        _
      );
    }
    function y(e, t) {
      return !t || C(e);
    }
    function C(e) {
      var t,
        n,
        r =
          (t =
            (n = o(
              "AdsAdgroupCreativeAssetGroupsSpecMutators",
            ).getCagGroupAtIndex(e, 0)) == null
              ? void 0
              : n.images) != null
            ? t
            : [],
        a = (Array.isArray(r) ? r : []).some(function (e) {
          return e.source === "generated" || e.source === "generated_animation";
        });
      return a || _(e).length > 0;
    }
    function b(e, t, n) {
      var a;
      if (t.length === 0) return e;
      var i = e,
        l =
          (a = e.creative) == null ||
          (a = a.generative_asset_spec) == null ||
          (a = a.images) == null
            ? void 0
            : a.variations;
      if (l != null) {
        var s,
          u = (s = l.toJS == null ? void 0 : l.toJS()) != null ? s : l;
        if (Array.isArray(u)) {
          var c = new Set(t),
            d = u.filter(function (e) {
              return !c.has(e.hash);
            });
          d.length === 0
            ? (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.generative_asset_spec.images.variations.delete(i))
            : (i = r(
                "AdsAdgroupRecordAccessors",
              ).creative.generative_asset_spec.images.variations.set(
                r("immutable").List(
                  d.map(function (e) {
                    return r("immutable").Map(e);
                  }),
                ),
              )(i));
        }
      }
      return o(
        "AdsAdgroupGenerativeAssetSpecMutators",
      ).removeGenAIImageAssetsFromCAGSpec(i, n);
    }
    function v(t, n) {
      var r = t;
      if (o("GenAISpecMigrationGKUtils").isMSSOnlyWriteEnabled())
        return (
          (r = k(t, { clearImages: !0, clearVideos: !0 })),
          (r = o(
            "AdsAdgroupGenerativeAssetSpecMutators",
          ).deleteGeneratedAssetSpec(r)),
          (r = o(
            "AdsAdgroupGenerativeAssetSpecMutators",
          ).removeGenAIImageAssetsFromCAGSpec(r, n)),
          (r = o(
            "AdsAdgroupGenerativeAssetSpecMutators",
          ).removeGenAIVideoAssetsFromCAGSpec(r, n)),
          L(r, !1, "clearAllAdoption_mssOnly")
        );
      ((r = o("AdsAdgroupGenerativeAssetSpecMutators").deleteGeneratedAssetSpec(
        r,
      )),
        (r = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).removeGenAIImageAssetsFromCAGSpec(r, n)),
        (r = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).removeGenAIVideoAssetsFromCAGSpec(r, n)));
      var a = o("GenAISpecMigrationGKUtils").isDualWriteEnabled(),
        i = o("GenAISpecMigrationGKUtils").isVideoDualWriteEnabled();
      return (
        (a || i) &&
          ((r = k(r, { clearImages: a, clearVideos: i })),
          e(r, "clearAllAdoption", { logImages: a, logVideos: i })),
        r
      );
    }
    function S(t, n) {
      var r = t;
      if (o("GenAISpecMigrationGKUtils").isMSSOnlyWriteEnabled()) {
        r = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).deleteImageGeneratedAssetSpec(r);
        var a = f(r).length > 0;
        return (
          y(r, a) &&
            (r = o(
              "AdsAdgroupGenerativeAssetSpecMutators",
            ).removeGenAIImageAssetsFromCAGSpec(r, n)),
          (r = k(r, { clearImages: !0, clearVideos: !1 })),
          L(r, a, "clearImageAdoption_mssOnly")
        );
      }
      return (
        (r = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).deleteImageGeneratedAssetSpec(r)),
        (r = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).removeGenAIImageAssetsFromCAGSpec(r, n)),
        o("GenAISpecMigrationGKUtils").isDualWriteEnabled() &&
          ((r = k(r, { clearImages: !0, clearVideos: !1 })),
          e(r, "clearImageAdoption", { logImages: !0, logVideos: !1 })),
        r
      );
    }
    function R(t, n) {
      var r = o(
        "AdsAdgroupGenerativeAssetSpecMutators",
      ).deleteVideoGeneratedAssetSpec(t);
      if (o("GenAISpecMigrationGKUtils").isMSSOnlyWriteEnabled()) {
        var a = x(r);
        return (
          y(r, a) &&
            (r = o(
              "AdsAdgroupGenerativeAssetSpecMutators",
            ).removeGenAIVideoAssetsFromCAGSpec(r, n)),
          (r = T(r)),
          L(r, a, "clearVideoAdoption_mssOnly")
        );
      }
      return (
        (r = o(
          "AdsAdgroupGenerativeAssetSpecMutators",
        ).removeGenAIVideoAssetsFromCAGSpec(r, n)),
        o("GenAISpecMigrationGKUtils").isVideoDualWriteEnabled() &&
          ((r = T(r)),
          e(r, "clearVideoAdoption", { logImages: !1, logVideos: !0 })),
        r
      );
    }
    function L(e, t, n) {
      if (t)
        return o("GenAISpecMigrationGKUtils").shouldSkipGenAICagOriginWrite()
          ? e
          : o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").setOrigins(e, [
              "gen_ai",
            ]);
      var r = o(
        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
      ).deleteAllOrigins(e);
      return o(
        "AdsAdgroupCreativeFlexMutators",
      ).ensureCreativeFlexCAGAfterGenAIClear(r, n);
    }
    function E(e, t) {
      if (t.length === 0) return e;
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.images.get(e);
      if (n == null || n.size === 0) return e;
      var o = new Set(t),
        a = n.filter(function (e) {
          var t;
          return !(
            e.get("source") === "gen_ai" &&
            o.has(String((t = e.get("hash")) != null ? t : ""))
          );
        });
      return a.size === n.size
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.images.set(a, e);
    }
    function k(e, t) {
      var n = t.clearImages,
        r = t.clearVideos,
        o = e;
      return (n && (o = I(o)), r && (o = T(o)), o);
    }
    function I(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.images.get(e);
      if (t == null || t.size === 0) return e;
      var n = t.filter(function (e) {
        return e.get("source") !== "gen_ai";
      });
      return n.size === 0
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.images.delete(e)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.images.set(n, e);
    }
    function T(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.videos.get(e);
      if (t == null || t.size === 0) return e;
      var n = t.filter(function (e) {
        return e.get("source") !== "gen_ai";
      });
      return n.size === 0
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.videos.delete(e)
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.videos.set(n, e);
    }
    function D(e) {
      return _(e).length > 0 || f(e).length > 0;
    }
    function x(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.images.get(e);
      return t == null || t.size === 0
        ? !1
        : t.some(function (e) {
            return e.get("source") === "gen_ai";
          });
    }
    ((l.validateDualWriteEquivalence = e), (l.removeAdoptedVariants = h));
  },
  98,
);
