__d(
  "GenAISpecReader",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsGenAISpecUtils",
    "AdsInterfacesLogger",
    "AdsWizardMediaPickerMultiUploadUtils",
    "GenAISpecMigrationGKUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (e == null) return !1;
      var n =
          ((t = e.creative) == null ||
          (t = t.generative_asset_spec) == null ||
          (t = t.images) == null
            ? void 0
            : t.enroll_status) === "OPT_IN",
        r = D(e);
      return (
        o("GenAISpecMigrationGKUtils").isDualReadEnabled() &&
          M(
            "isGenAIImagesOptedIn",
            n ? ["OPT_IN"] : [],
            r ? ["OPT_IN"] : [],
            e,
          ),
        o("GenAISpecMigrationGKUtils").isMSSReadEnabled() ? r : n
      );
    }
    function s(e) {
      var t, n;
      return (t =
        e == null || (n = e.creative) == null
          ? void 0
          : n.generative_asset_spec) != null
        ? t
        : null;
    }
    function u(e) {
      var t;
      return (t = e == null ? void 0 : e.creative_asset_groups_spec) != null
        ? t
        : null;
    }
    function c(e) {
      var t,
        n,
        r,
        o,
        a = e.creative_asset_groups_spec,
        i =
          (t =
            (n =
              (r = a == null || a.toJS == null ? void 0 : a.toJS()) != null
                ? r
                : a) == null
              ? void 0
              : n.groups) != null
            ? t
            : [];
      return (o = i[0]) == null ? void 0 : o.images;
    }
    function d(e) {
      var t,
        n,
        r,
        o,
        a = e.creative_asset_groups_spec,
        i =
          (t =
            (n =
              (r = a == null || a.toJS == null ? void 0 : a.toJS()) != null
                ? r
                : a) == null
              ? void 0
              : n.groups) != null
            ? t
            : [];
      return (o = i[0]) == null ? void 0 : o.videos;
    }
    function m(e) {
      var t;
      return e == null
        ? null
        : (t = c(e)) == null
          ? void 0
          : t.filter(function (e) {
              return e.source === "generated";
            });
    }
    function p(e) {
      var t,
        n,
        r,
        o,
        a = e.creative_asset_groups_spec,
        i =
          (t =
            (n =
              (r = a == null || a.toJS == null ? void 0 : a.toJS()) != null
                ? r
                : a) == null
              ? void 0
              : n.groups) != null
            ? t
            : [];
      return (o = i[0]) == null ? void 0 : o.images;
    }
    function _(e) {
      var t;
      if (e == null) return null;
      var n =
          (t = p(e)) == null
            ? void 0
            : t.find(function (e) {
                return e.source === "user_input";
              }),
        r = I(e),
        a = T(r);
      if (o("GenAISpecMigrationGKUtils").isDualReadEnabled()) {
        var i = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e);
        (A(n, r, e, i), M("getUserInputImage.picked", N(n), N(a), e, i));
      }
      return o("GenAISpecMigrationGKUtils").isMSSReadEnabled() ? a : n;
    }
    function f(e) {
      var t;
      if (e == null) return null;
      var n =
          (t = m(e)) == null
            ? void 0
            : t
                .map(function (e) {
                  return e.hash;
                })
                .filter(Boolean),
        r = R(e);
      return (
        o("GenAISpecMigrationGKUtils").isDualReadEnabled() &&
          M("getAdoptedImageHashes", n != null ? n : [], r != null ? r : [], e),
        o("GenAISpecMigrationGKUtils").isMSSReadEnabled() ? r : n
      );
    }
    function g(e) {
      var t, n;
      return ((t = (n = y(e)) == null ? void 0 : n.length) != null ? t : 0) > 0;
    }
    function h(e) {
      var t;
      if (e == null) return !1;
      var n =
          ((t = e.creative) == null ||
          (t = t.generative_asset_spec) == null ||
          (t = t.videos) == null
            ? void 0
            : t.enroll_status) === "OPT_IN",
        r = E(e);
      return (
        o("GenAISpecMigrationGKUtils").isDualReadEnabled() &&
          M(
            "isGenAIVideosOptedIn",
            n ? ["OPT_IN"] : [],
            r ? ["OPT_IN"] : [],
            e,
          ),
        o("GenAISpecMigrationGKUtils").isMSSReadEnabled() ? r : n
      );
    }
    function y(e) {
      var t;
      if (e == null) return null;
      var n = (t = d(e)) != null ? t : [],
        r = (Array.isArray(n) ? n : [])
          .filter(function (e) {
            return (
              e.source === "generated" || e.source === "generated_animation"
            );
          })
          .map(function (e) {
            var t;
            return String((t = e.video_id) != null ? t : "");
          })
          .filter(Boolean),
        a = L(e);
      return (
        o("GenAISpecMigrationGKUtils").isDualReadEnabled() &&
          M("hasAdoptedGenAIVideo", r, a != null ? a : [], e),
        o("GenAISpecMigrationGKUtils").isMSSReadEnabled() ? a : r
      );
    }
    function C(e) {
      var t;
      if (!e || !o("AdsGenAISpecUtils").isGenAIAds(e)) return null;
      var n =
          (t = o(
            "AdsAdgroupCreativeAssetGroupsSpecMutators",
          ).getCagGroupAtIndex(e, 0)) == null
            ? void 0
            : t.images,
        r = x(e);
      return (
        o("GenAISpecMigrationGKUtils").isDualReadEnabled() &&
          w(
            n != null ? n : [],
            r != null ? r : [],
            e,
            o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e),
          ),
        o("GenAISpecMigrationGKUtils").isMSSReadEnabled() &&
        !o("GenAISpecMigrationGKUtils").isMSSReadDisabledForAllOptedInImages()
          ? r
          : n
      );
    }
    function b(e) {
      var t;
      if (!e || !o("AdsGenAISpecUtils").isGenAIAds(e)) return null;
      var n =
          (t = o(
            "AdsAdgroupCreativeAssetGroupsSpecMutators",
          ).getCagGroupAtIndex(e, 0)) == null
            ? void 0
            : t.videos,
        r = k(e);
      return (
        o("GenAISpecMigrationGKUtils").isDualReadEnabled() &&
          F(n != null ? n : [], r != null ? r : [], e),
        o("GenAISpecMigrationGKUtils").isMSSReadEnabled() ? r : n
      );
    }
    function v(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.images.get(e);
    }
    function S(e, t) {
      var n,
        r,
        o =
          (n = e.creative) == null || (n = n.media_sourcing_spec) == null
            ? void 0
            : n.images,
        a = Array.isArray(o)
          ? o
          : (r = o == null || o.toJS == null ? void 0 : o.toJS()) != null
            ? r
            : o;
      if (a == null || !Array.isArray(a) || a.length === 0) return null;
      var i = [];
      for (var l of a)
        l.source === t && l.hash != null && i.push(String(l.hash));
      return i.length > 0 ? i : null;
    }
    function R(e) {
      return S(e, "gen_ai");
    }
    function L(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.media_sourcing_spec) == null
            ? void 0
            : t.videos,
        o = Array.isArray(r)
          ? r
          : (n = r == null || r.toJS == null ? void 0 : r.toJS()) != null
            ? n
            : r;
      if (o == null || !Array.isArray(o) || o.length === 0) return null;
      var a = [];
      for (var i of o)
        i.source === "gen_ai" &&
          i.video_id != null &&
          a.push(String(i.video_id));
      return a.length > 0 ? a : null;
    }
    function E(e) {
      var t, n;
      return ((t = (n = L(e)) == null ? void 0 : n.length) != null ? t : 0) > 0;
    }
    function k(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.media_sourcing_spec) == null
            ? void 0
            : t.videos,
        o = Array.isArray(r)
          ? r
          : (n = r == null || r.toJS == null ? void 0 : r.toJS()) != null
            ? n
            : r;
      if (o == null || !Array.isArray(o) || o.length === 0) return null;
      var a = [];
      for (var i of o)
        i.source === "gen_ai" &&
          a.push({
            video_id: i.video_id != null ? String(i.video_id) : void 0,
            source: "generated",
          });
      return a.length > 0 ? a : null;
    }
    function I(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.media_sourcing_spec) == null
            ? void 0
            : t.images,
        o = Array.isArray(r)
          ? r
          : (n = r == null || r.toJS == null ? void 0 : r.toJS()) != null
            ? n
            : r;
      if (o == null || !Array.isArray(o)) return [];
      var a = [];
      for (var i of o)
        i.source === "multi_media" &&
          a.push({
            hash: i.hash != null ? String(i.hash) : void 0,
            url: i.url != null ? String(i.url) : void 0,
            source: "user_input",
          });
      return a;
    }
    function T(e) {
      var t = e.find(function (e) {
        return e.hash != null;
      });
      return t != null ? { hash: t.hash, source: "user_input" } : null;
    }
    function D(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.media_sourcing_spec) == null
            ? void 0
            : t.images,
        o = Array.isArray(r)
          ? r
          : (n = r == null || r.toJS == null ? void 0 : r.toJS()) != null
            ? n
            : r;
      return o == null || !Array.isArray(o)
        ? !1
        : o.some(function (e) {
            return e.source === "gen_ai" && e.hash != null;
          });
    }
    function x(e) {
      var t = v(e);
      if (t == null || t.size === 0) return null;
      var n = [];
      return (
        t.forEach(function (e) {
          var t = e.get("source");
          if (t === "gen_ai") {
            var r;
            n.push({
              hash: String((r = e.get("hash")) != null ? r : ""),
              url: e.get("url") != null ? String(e.get("url")) : void 0,
              source: "generated",
            });
          } else if (t === "multi_media") {
            var o;
            n.push({
              hash: String((o = e.get("hash")) != null ? o : ""),
              url: e.get("url") != null ? String(e.get("url")) : void 0,
              source: "user_input",
            });
          }
        }),
        n.length > 0 ? n : null
      );
    }
    function $(e) {
      return e.hash != null && e.hash !== "" ? e.hash : e.url;
    }
    function P(e) {
      return (e.hash == null || e.hash === "") && e.url != null && e.url !== "";
    }
    function N(e) {
      var t = e != null ? $(e) : null;
      return t != null && t !== "" ? [t] : [];
    }
    function M(e, t, n, a, i) {
      var l;
      i === void 0 && (i = null);
      var s = new Set(t),
        u = new Set(n),
        c = !0;
      if (s.size !== u.size) c = !1;
      else
        for (var d of s)
          if (!u.has(d)) {
            c = !1;
            break;
          }
      var m = t.filter(function (e) {
          return !u.has(e);
        }),
        p = n.filter(function (e) {
          return !s.has(e);
        }),
        _ = "id" in a ? a.id : null;
      r("AdsInterfacesLogger").log({
        eventName: c
          ? "ads_gen_ai__spec_migration_read_comparison_consistent"
          : "ads_gen_ai__spec_migration_read_comparison_inconsistent",
        data:
          ((l = {}),
          (l.adgroup_id = _),
          (l.metadata = JSON.stringify({
            function: e,
            cag_count: t.length,
            mss_count: n.length,
            only_in_cag: m,
            only_in_mss: p,
            is_pac: i,
            is_mmu_account: o(
              "AdsWizardMediaPickerMultiUploadUtils",
            ).isEligibleForMultiUpload("silent"),
          })),
          l),
      });
    }
    function w(e, t, n, a) {
      var i,
        l = function (t, n) {
          return t.filter(function (e) {
            return e.source === n;
          });
        },
        s = function (t) {
          return t.map($).filter(Boolean);
        },
        u = s(l(e, "generated")),
        c = s(l(t, "generated")),
        d = new Set(u),
        m = new Set(c),
        p = u.filter(function (e) {
          return !m.has(e);
        }),
        _ = c.filter(function (e) {
          return !d.has(e);
        }),
        f = l(e, "user_input"),
        g = l(t, "user_input"),
        h = s(f),
        y = s(g),
        C = new Set(h),
        b = new Set(y),
        v = h.filter(function (e) {
          return !b.has(e);
        }),
        S = y.filter(function (e) {
          return !C.has(e);
        }),
        R = f.filter(P).length,
        L = g.filter(P).length,
        E = p.length === 0 && _.length === 0 && v.length === 0,
        k = "id" in n ? n.id : null;
      r("AdsInterfacesLogger").log({
        eventName: E
          ? "ads_gen_ai__spec_migration_read_comparison_consistent"
          : "ads_gen_ai__spec_migration_read_comparison_inconsistent",
        data:
          ((i = {}),
          (i.adgroup_id = k),
          (i.metadata = JSON.stringify({
            function: "getAllOptedInImages",
            cag_generated_count: u.length,
            cag_user_input_count: h.length,
            mss_generated_count: c.length,
            mss_user_input_count: y.length,
            missing_user_input: v,
            extra_user_input: S,
            cag_user_input_url_keyed: R,
            mss_user_input_url_keyed: L,
            only_in_cag_generated_count: p.length,
            only_in_mss_generated_count: _.length,
            is_pac: a,
            is_mmu_account: o(
              "AdsWizardMediaPickerMultiUploadUtils",
            ).isEligibleForMultiUpload("silent"),
          })),
          i),
      });
    }
    function A(e, t, n, a) {
      var i,
        l = N(e),
        s = t.map($).filter(Boolean),
        u = new Set(l),
        c = new Set(s),
        d = l.filter(function (e) {
          return !c.has(e);
        }),
        m = s.filter(function (e) {
          return !u.has(e);
        }),
        p = d.length === 0,
        _ = "id" in n ? n.id : null;
      r("AdsInterfacesLogger").log({
        eventName: p
          ? "ads_gen_ai__spec_migration_read_comparison_consistent"
          : "ads_gen_ai__spec_migration_read_comparison_inconsistent",
        data:
          ((i = {}),
          (i.adgroup_id = _),
          (i.metadata = JSON.stringify({
            function: "getUserInputImage",
            cag_user_input_count: l.length,
            mss_user_input_count: s.length,
            missing_user_input: d,
            extra_user_input: m,
            cag_user_input_url_keyed: e != null && P(e) ? 1 : 0,
            mss_user_input_url_keyed: t.filter(P).length,
            is_pac: a,
            is_mmu_account: o(
              "AdsWizardMediaPickerMultiUploadUtils",
            ).isEligibleForMultiUpload("silent"),
          })),
          i),
      });
    }
    function F(e, t, n) {
      var r = e
          .filter(function (e) {
            return (
              e.source === "generated" || e.source === "generated_animation"
            );
          })
          .map(function (e) {
            var t;
            return String((t = e.video_id) != null ? t : "");
          })
          .filter(Boolean),
        o = t
          .map(function (e) {
            var t;
            return String((t = e.video_id) != null ? t : "");
          })
          .filter(Boolean);
      M("getGenAIVideoVariations", r, o, n);
    }
    ((l.isGenAIImagesOptedIn = e),
      (l.getGenerativeAssetSpecForLogging = s),
      (l.getCreativeAssetGroupsSpecForLogging = u),
      (l.getUserInputImage = _),
      (l.getAdoptedImageHashes = f),
      (l.hasAdoptedGenAIVideo = g),
      (l.isGenAIVideosOptedIn = h),
      (l.getAdoptedVideoIDs = y),
      (l.getAllOptedInImages = C),
      (l.getGenAIVideoVariations = b));
  },
  98,
);
