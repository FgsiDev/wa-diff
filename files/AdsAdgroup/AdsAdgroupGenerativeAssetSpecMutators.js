__d(
  "AdsAdgroupGenerativeAssetSpecMutators",
  [
    "AdGenaiCreationClientFalcoEvent",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupCreativeFlexMutators",
    "AdsAdgroupLinkPostFormatMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsCreativeGenAIBaseAssetUtils",
    "AdsCreativeGenAIEligibilityUtils",
    "AdsCreativeGenAISpecUtils",
    "AdsGenAIMapKeyUtils",
    "AdsGenAISpecUtils",
    "AdsMetadataBrandKitGetColorCacheKey",
    "AdsMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "GenAISpecDeleter",
    "GenAISpecReader",
    "immutable",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("immutable").Set([
      "gen_ai",
      "gen_ai_test_sa_qrt_round_one",
      "gen_ai_test_sa_qrt_round_two",
      "gen_ai_test_sa_qrt_round_three",
      "gen_ai_test_without_delivery",
      "gen_ai_test_with_delivery",
    ]);
    function s(e) {
      return e == null ? "null" : e === "" ? "empty" : e;
    }
    function u(e, t) {
      var n;
      return (
        (n = {}),
        (n[e + "_afs_default_image_hash"] = s(t.assetFeedSpec.imageHash)),
        (n[e + "_afs_default_image_url"] = s(t.assetFeedSpec.imageUrl)),
        (n[e + "_afs_pac_image_hash"] = s(t.pacAssetFeedSpec.imageHash)),
        (n[e + "_afs_pac_image_url"] = s(t.pacAssetFeedSpec.imageUrl)),
        (n[e + "_is_pac_ad"] = String(t.isPACAd)),
        (n[e + "_oss_link_data_image_hash"] = s(t.linkData.imageHash)),
        (n[e + "_oss_link_data_image_url"] = s(t.linkData.imageUrl)),
        (n[e + "_oss_photo_data_image_hash"] = s(t.photoData.imageHash)),
        (n[e + "_oss_photo_data_image_url"] = s(t.photoData.imageUrl)),
        n
      );
    }
    function c(e, t, n, a, i, l, c, d, m) {
      if (r("justknobx")._("5769")) {
        var p = o(
            "AdsCreativeGenAIBaseAssetUtils",
          ).getBaseAssetImageSpecLocationsFromAdgroup(e),
          _ = o(
            "AdsCreativeGenAIBaseAssetUtils",
          ).getBaseAssetImageSpecLocationsFromAdgroup(t);
        r("AdGenaiCreationClientFalcoEvent").logImmediately(function () {
          var r, f;
          return {
            event_name: "ads_gen_ai__spec_clear_evaluation",
            adgroup_id: (r = t.id) != null ? r : e.id,
            feature: "ADS_IMAGE_GEN",
            is_pac_ad: _.isPACAd,
            event_data: babelHelpers.extends(
              {},
              u("original", p),
              u("updated", _),
              {
                afs_spec_clear_fix_enabled: String(
                  o(
                    "AdsCreativeGenAIBaseAssetUtils",
                  ).isAFSSpecClearFixEnabled(),
                ),
                is_pac_mixed_media: String(i),
                is_same_selected_image: String(l),
                is_same_selected_video: String(c),
                original_resolved_image_hash: s(n.imageHash),
                original_resolved_image_url: s(n.imageUrl),
                selected_base_asset_id: d == null ? "null" : String(d.id),
                selected_base_asset_type:
                  (f = d == null ? void 0 : d.type) != null ? f : "null",
                should_clear_spec: String(m),
                updated_resolved_image_hash: s(a.imageHash),
                updated_resolved_image_url: s(a.imageUrl),
              },
            ),
          };
        });
      }
    }
    function d(e, t, n, a, i, l) {
      if (e.hash != null) {
        var s = !1;
        if (e.isSelected === !0)
          if (t && n != null)
            s = n.some(function (t) {
              var n,
                s = o("AdsGenAIMapKeyUtils").getMediaVariationsMapOverlayKey(
                  t.text,
                  a,
                  (n = e.hash) != null ? n : "",
                  r("AdsMetadataBrandKitGetColorCacheKey")(i),
                );
              return l.get(s) != null;
            });
          else {
            var u,
              c = o("AdsGenAIMapKeyUtils").getMediaVariationsMapOverlayKey(
                "",
                a,
                (u = e.hash) != null ? u : "",
                r("AdsMetadataBrandKitGetColorCacheKey")(i),
              );
            s = l.get(c) != null;
          }
        return r("immutable").Map({
          source: "MANUAL_INPUT",
          selected: s,
          hash: e.hash,
        });
      }
    }
    function m(e, t, n, a, i, l) {
      var s,
        u,
        c =
          (s =
            n == null
              ? void 0
              : n.filter(function (e) {
                  return e.isSelected;
                })) != null
            ? s
            : [],
        d = !1;
      return (
        c.length > 0 && t
          ? (d = c.some(function (t) {
              if (t.hash != null)
                return (
                  (u = o("AdsGenAIMapKeyUtils").getMediaVariationsMapOverlayKey(
                    e.text,
                    a,
                    t.hash,
                    r("AdsMetadataBrandKitGetColorCacheKey")(i),
                  )),
                  l.get(u) != null
                );
            }))
          : ((u = o("AdsGenAIMapKeyUtils").getMediaVariationsMapOverlayKey(
              e.text,
              a,
              "",
              r("AdsMetadataBrandKitGetColorCacheKey")(i),
            )),
            (d = l.get(u) != null)),
        r("immutable").Map({
          text: d ? e.text : "",
          source: d ? e.source : "DEFAULT",
        })
      );
    }
    function p(e, t, n, a) {
      if (r("isTruthy")(t)) {
        var i = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.generative_asset_spec.videos.video_generation_status_list.set(
            r("immutable").List([t]),
          ),
        )(e);
        return (
          r("isTruthy")(n) &&
            (i = o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.generative_asset_spec.videos.ad_sourced_asset.set(n),
            )(i)),
          r("isTruthy")(a) &&
            (i = o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.generative_asset_spec.videos.request_id.set(a),
            )(i)),
          i
        );
      } else if (r("isTruthy")(n))
        return o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.generative_asset_spec.videos.ad_sourced_asset.set(n),
        )(e);
      return e;
    }
    function _(e) {
      var t = e.adgroup,
        n = e.colors,
        a = e.generatedImages,
        i = e.isImageVariationSelected,
        l = e.isLogoOverlaySelected,
        s = e.isTextOverlaysSelected,
        u = e.logoAssets,
        c = e.saveVideoGen,
        _ = c === void 0 ? !1 : c,
        f = e.shouldNotSetImagesEnrollStatus,
        g = f === void 0 ? !1 : f,
        h = e.sourcedAssetID,
        y = e.textOverlayFontStyle,
        C = e.textOverlayImageVariations,
        b = e.textOverlays,
        v = e.videoGenerationStatus,
        S = e.videoGenRequestID,
        R = t;
      if (
        _ &&
        o("AdsCreativeGenAIEligibilityUtils").isEligibleForVideoGenAnimation()
      )
        return p(R, v, h, S);
      if (
        (g !== !0 &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.generative_asset_spec.images.enroll_status.set(
            i ? "OPT_IN" : "OPT_OUT",
          )(R)),
        a.length > 0)
      ) {
        var L = r("immutable").List(
            a.map(function (e) {
              var t = e.edit_status,
                n = e.enroll_status,
                o = e.generation_path,
                a = e.hash,
                i = e.seed_asset;
              return r("immutable").Map({
                hash: a,
                generation_path: o,
                enroll_status: n,
                edit_status: t,
                seed_asset: i,
              });
            }),
          ),
          E = L.some(function (e) {
            var t = e.get("hash");
            return typeof t == "string" && t.match(/^\d+$/);
          });
        E ||
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.generative_asset_spec.images.variations.set(L)(R));
      }
      if (b == null) return R;
      var k = r("immutable").List(
        b.map(function (e) {
          return m(e, l, u, y, n, C);
        }),
      );
      if (
        ((R = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.generative_asset_spec.text_overlay.texts.set(k),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.generative_asset_spec.text_overlay.enroll_status.set(
            s ? "OPT_IN" : "OPT_OUT",
          ),
        )(R)),
        y.type !== "automatic"
          ? ((R = r(
              "AdsAdgroupRecordAccessors",
            ).creative.generative_asset_spec.text_overlay.font_name.set(
              y.fontName,
            )(R)),
            y.textStyle != null &&
              (R = r(
                "AdsAdgroupRecordAccessors",
              ).creative.generative_asset_spec.text_overlay.font_style.set(
                y.textStyle,
              )(R)))
          : (R = o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative.generative_asset_spec
                .text_overlay.font_name.delete,
              r("AdsAdgroupRecordAccessors").creative.generative_asset_spec
                .text_overlay.font_style.delete,
            )(R)),
        u == null)
      )
        return R;
      var I = r("immutable")
        .List(
          u.map(function (e) {
            return d(e, s, b, y, n, C);
          }),
        )
        .filter(Boolean);
      return (
        (R = r(
          "AdsAdgroupRecordAccessors",
        ).creative.generative_asset_spec.logo_overlay.enroll_status.set(
          l ? "OPT_IN" : "OPT_OUT",
        )(R)),
        I != null &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.generative_asset_spec.logo_overlay.logos.set(I)(R)),
        n != null &&
          (R = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.generative_asset_spec.color_overlay.primary_colors.set(
              r("immutable").List(n.primaryColors),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.generative_asset_spec.color_overlay.secondary_colors.set(
              r("immutable").List(n.secondaryColors),
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.generative_asset_spec.color_overlay.banner_color.set(
              r("immutable").List(n.bannerColors),
            ),
          )(R)),
        R
      );
    }
    function f(e, t, n, r) {
      if (
        !o("AdsGenAISpecUtils").isGenAIAds(t) &&
        !o("AdsGenAISpecUtils").isGenAIAds(e)
      )
        return t;
      var a = o("AdsAssetFeedUtils").isPACMixedImageAndVideoFromRecord(t),
        i = o(
          "AdsCreativeGenAISpecUtils",
        ).isSameAdgroupAssetImageSelectedInMediaPicker(r, e, n),
        l = o(
          "AdsCreativeGenAISpecUtils",
        ).isSameAdgroupAssetVideoSelectedInMediaPicker(r, e),
        s = a || (!i && !l);
      return (
        c(
          e,
          t,
          o("AdsCreativeGenAIBaseAssetUtils").getBaseAssetImageSpecFromAdgroup(
            e,
          ),
          o("AdsCreativeGenAIBaseAssetUtils").getBaseAssetImageSpecFromAdgroup(
            t,
          ),
          a,
          i,
          l,
          r,
          s,
        ),
        s ? L(t) : t
      );
    }
    function g(e, t) {
      var n = o(
          "AdsCreativeGenAIBaseAssetUtils",
        ).getBaseAssetImageSpecFromAdgroup(e),
        r = o(
          "AdsCreativeGenAIBaseAssetUtils",
        ).getBaseAssetImageSpecFromAdgroup(t),
        a = o("AdsAssetFeedUtils").isPACMixedImageAndVideoFromRecord(t),
        i = a || n.imageHash !== r.imageHash || n.imageUrl !== r.imageUrl;
      return i ? L(t) : t;
    }
    var h = ["generated", "generated_animation"],
      y = ["generated", "generated_animation", "user_input"];
    function C(e, t) {
      var n, a, i, l, s;
      if ((t === void 0 && (t = !1), !T(e) && !t)) return e;
      var u =
        (n = (a = e.creative_asset_groups_spec) == null ? void 0 : a.groups) !=
        null
          ? n
          : [];
      if ((u instanceof r("immutable").List && (u = u.toJS()), u.length === 0))
        return e;
      var c = u[0];
      if (!c) return e;
      var d = (i = c.videos) != null ? i : [],
        m = (l = c.images) != null ? l : [],
        p =
          d.filter(function (e) {
            return h.includes(e.source);
          }).length > 0,
        _ = p
          ? babelHelpers.extends({}, c, {
              images: m.filter(function (e) {
                return !h.includes(e.source);
              }),
            })
          : (function () {
              var e = babelHelpers.extends({}, c, {
                images: m.filter(function (e) {
                  return !y.includes(e.source);
                }),
              });
              return e;
            })(),
        f = !_.images || _.images.length === 0,
        g = !_.videos || _.videos.length === 0;
      if (f && g) {
        var C = o(
          "AdsAdgroupLinkPostFormatMutators",
        ).removeCreativeAssetGroupsSpecField(e);
        return o(
          "AdsAdgroupCreativeFlexMutators",
        ).ensureCreativeFlexCAGAfterGenAIClear(
          C,
          "removeGenAIImageAssetsFromCAGSpec_imageOrVideoEmpty",
        );
      }
      var b =
          ((s = _.videos) != null ? s : []).filter(function (e) {
            return h.includes(e.source);
          }).length === 0,
        v = [_];
      if (b) {
        var S = o("AdsMutators").chain(
          o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").deleteAllOrigins,
          r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set(
            r("immutable").List(
              v.map(function (e) {
                return r("immutable").Map(e);
              }),
            ),
          ),
        )(e);
        return o(
          "AdsAdgroupCreativeFlexMutators",
        ).ensureCreativeFlexCAGAfterGenAIClear(
          S,
          "removeGenAIImageAssetsFromCAGSpec_noGenAIVideos",
        );
      }
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative_asset_groups_spec.groups.set(
        r("immutable").List(
          v.map(function (e) {
            return r("immutable").Map(e);
          }),
        ),
        e,
      );
    }
    function b(e, t) {
      var n, a;
      if ((t === void 0 && (t = !1), !T(e) && !t)) return e;
      var i =
        (n = (a = e.creative_asset_groups_spec) == null ? void 0 : a.groups) !=
        null
          ? n
          : [];
      if ((i instanceof r("immutable").List && (i = i.toJS()), i.length === 0))
        return e;
      var l = i[0];
      if (!l) return e;
      var s = babelHelpers.extends({}, l, {
          videos:
            (l == null ? void 0 : l.videos) != null
              ? l == null
                ? void 0
                : l.videos.filter(function (e) {
                    return (
                      (e == null ? void 0 : e.source) && !h.includes(e.source)
                    );
                  })
              : void 0,
        }),
        u = (function () {
          var e = s,
            t = e.images;
          if (t != null) {
            var n =
              t.filter(function (e) {
                return e.source && h.includes(e.source);
              }).length === 0;
            return (
              n &&
                (e = babelHelpers.extends({}, e, {
                  images: t.filter(function (e) {
                    return e.source && !y.includes(e.source);
                  }),
                })),
              e
            );
          }
        })(),
        c = !(u != null && u.images) || u.images.length === 0,
        d = !(u != null && u.videos) || u.videos.length === 0;
      if (c && d) {
        var m = o(
          "AdsAdgroupLinkPostFormatMutators",
        ).removeCreativeAssetGroupsSpecField(e);
        return o(
          "AdsAdgroupCreativeFlexMutators",
        ).ensureCreativeFlexCAGAfterGenAIClear(
          m,
          "removeGenAIVideoAssetsFromCAGSpec_imageOrVideoEmpty",
        );
      }
      var p = [u],
        _ =
          (u == null ? void 0 : u.images) != null
            ? u.images.filter(function (e) {
                return e.source && y.includes(e.source);
              }).length === 0
            : !0;
      if (_) {
        var f = o("AdsMutators").chain(
          o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").deleteAllOrigins,
          r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set(
            r("immutable").List(
              p.map(function (e) {
                return r("immutable").Map(e);
              }),
            ),
          ),
        )(e);
        return o(
          "AdsAdgroupCreativeFlexMutators",
        ).ensureCreativeFlexCAGAfterGenAIClear(
          f,
          "removeGenAIVideoAssetsFromCAGSpec_noGenAIImages",
        );
      }
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative_asset_groups_spec.groups.set(
        r("immutable").List(
          p.map(function (e) {
            return r("immutable").Map(e);
          }),
        ),
        e,
      );
    }
    function v(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.generative_asset_spec.videos.delete(e);
    }
    function S(e) {
      var t;
      return o("AdsMutators").chain(
        (t = r("AdsAdgroupRecordAccessors")).creative.generative_asset_spec
          .images.delete,
        t.creative.generative_asset_spec.text_overlay.delete,
        t.creative.generative_asset_spec.logo_overlay.delete,
        t.creative.generative_asset_spec.color_overlay.delete,
      )(e);
    }
    function R(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.generative_asset_spec.delete(e);
    }
    function L(e) {
      return o("GenAISpecDeleter").removeAdoptedVariants(e, {
        assetType: "all",
      });
    }
    function E(e, t, n, r) {
      if ((n === void 0 && (n = !1), t.length === 0)) return [];
      var a = t.map(function (e) {
        return { hash: e, source: "generated" };
      });
      if (r != null && r !== "")
        return ((a = [{ hash: r, source: "user_input" }].concat(a)), a);
      var i = o(
          "AdsCreativeGenAIBaseAssetUtils",
        ).getBaseAssetImageSpecFromAdgroup(e),
        l = i.imageHash,
        s = i.imageUrl;
      if (l != null) a = [{ hash: l, source: "user_input" }].concat(a);
      else if (s != null) a = [{ url: s, source: "user_input" }].concat(a);
      else if (n !== !0) return [];
      return a;
    }
    function k(e) {
      var t = e.map(function (e) {
        return { video_id: e, source: "generated" };
      });
      return t;
    }
    function I(e, t, n, a, i) {
      if ((i === void 0 && (i = !1), n.length === 0 && a.length === 0)) {
        if (T(e)) {
          var l = o(
            "AdsAdgroupLinkPostFormatMutators",
          ).removeCreativeAssetGroupsSpecField(e);
          return o(
            "AdsAdgroupCreativeFlexMutators",
          ).ensureCreativeFlexCAGAfterGenAIClear(
            l,
            "setOptedInGenAIVariations_hasGenAIOrigin",
          );
        }
        return e;
      }
      var s = new Map();
      if ((n.length !== 0 && s.set("images", n), a.length !== 0)) {
        if (n.length === 0) {
          var u = o(
              "AdsCreativeGenAIBaseAssetUtils",
            ).getBaseAssetImageSpecFromAdgroup(e),
            c = u.imageHash,
            d = u.imageUrl,
            m = [];
          (c != null
            ? (m = [{ hash: c, source: "user_input" }])
            : d != null && (m = [{ url: d, source: "user_input" }]),
            s.set("images", m));
        }
        s.set("videos", a);
      }
      if (s.size === 0 && T(e)) {
        var p = o(
          "AdsAdgroupLinkPostFormatMutators",
        ).removeCreativeAssetGroupsSpecField(e);
        return o(
          "AdsAdgroupCreativeFlexMutators",
        ).ensureCreativeFlexCAGAfterGenAIClear(
          p,
          "setOptedInGenAIVariations_groupSpecEmpty",
        );
      }
      return o("AdsMutators").chain(
        function (e) {
          return i
            ? e
            : o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").setOrigins(
                e,
                [t],
              );
        },
        r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set(
          r("immutable").List([r("immutable").Map(s)]),
        ),
      )(e);
    }
    function T(t) {
      return o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
        t,
        e.toArray(),
      );
    }
    function D(e) {
      return o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
        e,
        o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).CREATIVE_FLEX_AD_CAG_ORIGINS.toArray(),
      );
    }
    function x(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.generative_asset_spec) == null
          ? void 0
          : t.videos) != null || o("GenAISpecReader").hasAdoptedGenAIVideo(e)
      );
    }
    function $(e) {
      return o("AdsMutators").chain(
        function (e) {
          return C(e);
        },
        function (e) {
          return b(e);
        },
      )(e);
    }
    ((l.setGeneratedAssetSpec = _),
      (l.mayDeleteGenAIAssetSpecIfMultiMediaBaseAssetChanged = f),
      (l.mayDeleteGenAIAssetSpecIfBaseAssetChanged = g),
      (l.GenAIFilterSource = h),
      (l.GenAIFilterSourceWithUserInput = y),
      (l.removeGenAIImageAssetsFromCAGSpec = C),
      (l.removeGenAIVideoAssetsFromCAGSpec = b),
      (l.deleteVideoGeneratedAssetSpec = v),
      (l.deleteImageGeneratedAssetSpec = S),
      (l.deleteGeneratedAssetSpec = R),
      (l.adsDeleteGenAIAssetSpecMutator = L),
      (l.getCAGImageSpecFromSelected = E),
      (l.setVideoVariations = k),
      (l.setOptedInGenAIVariations = I),
      (l.hasGenAIOrigin = T),
      (l.hasRelatedMediaOrigin = D),
      (l.hasGenerativeVideoAssets = x),
      (l.removeGenAIAssetsFromCAGSpec = $));
  },
  98,
);
