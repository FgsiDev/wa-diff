__d(
  "GenAISpecWriter",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupCreativeFlexMutators",
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSpecUtils",
    "AdsAssetFeedUtils",
    "AdsCreativeFlexGKCheckUtils",
    "AdsCreativeFlexSpecCheckUtils",
    "AdsCreativeGenAIBaseAssetUtils",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsInterfacesLogger",
    "AdsUEditAdgroupImageGenReducerUtils",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsWizardMediaPickerMultiUploadUtils",
    "GenAISpecDeleter",
    "GenAISpecMigrationGKUtils",
    "immutable",
    "justknobx",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e;
      if (o("GenAISpecMigrationGKUtils").isMSSOnlyWriteEnabled()) {
        var a;
        if (
          ((n = R(e, t, { writeImages: !0, writeVideos: !0 })),
          t.saveVideoGen === !0 &&
            (n = h(n, t, { generatedImages: [], setImagesEnrollStatus: !1 })),
          !u(t))
        )
          return n;
        var i = c(e),
          l = i != null ? i : r("uuidv4")().toString();
        return (
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative_asset_groups_spec.groups.set(
            r("immutable").List([
              r("immutable").Map(
                babelHelpers.extends(
                  {},
                  (a = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).getCagGroupAtIndex(e, 0)) != null
                    ? a
                    : {},
                  { group_uuid: l },
                ),
              ),
            ]),
            n,
          )),
          o("GenAISpecMigrationGKUtils").shouldSkipGenAICagOriginWrite() ||
            (n = o(
              "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
            ).setOrigins(n, ["gen_ai"])),
          m(e, t, {
            groupUuid: l,
            reusedGroupUuid: i != null,
            replacedGroupCount: d(e),
          }),
          n
        );
      }
      n = p(n, t);
      var s = o("GenAISpecMigrationGKUtils").isDualWriteEnabled(),
        _ = o("GenAISpecMigrationGKUtils").isVideoDualWriteEnabled();
      return (
        (s || _) &&
          ((n = R(n, t, { writeImages: s, writeVideos: _ })),
          o("GenAISpecDeleter").validateDualWriteEquivalence(
            n,
            "adoptGenAIVariants",
            { logImages: s, logVideos: _ },
          )),
        n
      );
    }
    function s(e, t) {
      return R(e, t, { writeImages: !0, writeVideos: !1 });
    }
    function u(e) {
      var t, n;
      return (
        e.imageAssets.length > 0 ||
        ((t = (n = e.videoAssets) == null ? void 0 : n.length) != null
          ? t
          : 0) > 0
      );
    }
    function c(e) {
      var t,
        n = (t = e.creative_asset_groups_spec) == null ? void 0 : t.groups;
      if (n instanceof r("immutable").List) {
        var o,
          a = (o = n.get(0)) == null ? void 0 : o.get("group_uuid");
        if (typeof a == "string" && a !== "") return a;
      }
      return null;
    }
    function d(e) {
      var t,
        n = (t = e.creative_asset_groups_spec) == null ? void 0 : t.groups;
      return n instanceof r("immutable").List ? n.size : 0;
    }
    function m(e, t, n) {
      var o,
        a,
        i,
        l,
        s = n.groupUuid,
        u = n.replacedGroupCount,
        c = n.reusedGroupUuid,
        d =
          ((l = {}),
          (l.adgroup_id = r("AdsAdgroupRecordAccessors").id.get(e)),
          (l.event_source = (o = t.entrypoint) != null ? o : null),
          (l.metadata = JSON.stringify({
            group_uuid: s,
            image_count: t.imageAssets.length,
            replaced_group_count: u,
            reused_group_uuid: c,
            saved_video_gen: t.saveVideoGen === !0,
            video_count:
              (a = (i = t.videoAssets) == null ? void 0 : i.length) != null
                ? a
                : 0,
          })),
          l);
      r("AdsInterfacesLogger").log({
        eventName: "ads_gen_ai__spec_migration_mss_only_write",
        data: d,
      });
    }
    function p(e, t) {
      var n,
        r =
          o("AdsAdgroupCreativeAssetGroupsSpecMutators").getCagGroupAtIndex(
            e,
            0,
          ) != null,
        a = r && !o("AdsAdgroupGenerativeAssetSpecMutators").hasGenAIOrigin(e),
        i = e;
      a &&
        (i = o("AdsAdgroupCreativeAssetGroupsSpecMutators").clearCagGroups(i));
      var l = y(i, t),
        s = (n = _(l, e, a)) != null ? n : l;
      return s;
    }
    function _(e, t, n) {
      var a,
        i = o("AdsAdgroupGenerativeAssetSpecMutators").hasGenAIOrigin(e),
        l = !1;
      return (
        !o("AdsAdgroupGenerativeAssetSpecMutators").hasGenAIOrigin(t) &&
          !i &&
          ((l = o(
            "AdsCreativeFlexGKCheckUtils",
          ).isAccountEligibleForCreativeFlexRollout()),
          o(
            "AdsCreativeFlexGKCheckUtils",
          ).isEligibleForCreativeFlexUnknownBucketFixEnhanced()),
        !n ||
        i ||
        !o("AdsCreativeFlexSpecCheckUtils").isCreativeFlexOptedInAd(t)
          ? null
          : (r("AdsInterfacesLogger").logOnce({
              eventName: "creative_flex_debug",
              data:
                ((a = {}),
                (a.adgroup_id = r("AdsAdgroupRecordAccessors").id.get(t)),
                (a.event_source = "unknown_bucket_restore"),
                a),
            }),
            l
              ? o(
                  "AdsUEditorAdgroupMediaSourcingSpecMutators",
                ).maySetCreativeFlexInCAG(e, r("uuidv4")().toString())
              : o(
                  "AdsAdgroupCreativeFlexMutators",
                ).ensureCreativeFlexCAGAfterGenAIClear(
                  e,
                  "adoptVariantsToGASAndCAG",
                ))
      );
    }
    function f(e, t) {
      var n = new Map(
        t.map(function (e) {
          return [e.hash, e];
        }),
      );
      return e.map(function (e) {
        var t,
          r,
          o = n.get(e.hash);
        return o == null
          ? e
          : babelHelpers.extends({}, o, e, {
              seed_asset: (t = e.seed_asset) != null ? t : o.seed_asset,
              edit_status: (r = e.edit_status) != null ? r : o.edit_status,
            });
      });
    }
    function g(e, t) {
      var n,
        r,
        a = t.imageAssets,
        i = t.unadoptedImageAssets,
        l =
          (n =
            (r = e.creative) == null ||
            (r = r.generative_asset_spec) == null ||
            r.toJS == null ||
            (r = r.toJS()) == null ||
            (r = r.images) == null
              ? void 0
              : r.variations) != null
            ? n
            : [],
        s = a.map(function (e) {
          var t,
            n,
            r,
            o = {
              hash: (t = e.adImageHash) != null ? t : "",
              enroll_status: "OPT_IN",
              edit_status: null,
            };
          return (
            ((n = e.metadata) == null ? void 0 : n.generationPath) != null &&
              (o.generation_path = e.metadata.generationPath),
            ((r = e.metadata) == null ? void 0 : r.seed_asset) != null &&
              (o.seed_asset = e.metadata.seed_asset),
            o
          );
        }),
        u = (i != null ? i : []).map(function (e) {
          var t,
            n,
            r,
            o = {
              hash: (t = e.adImageHash) != null ? t : "",
              enroll_status: "OPT_OUT",
              edit_status: null,
            };
          return (
            ((n = e.metadata) == null ? void 0 : n.generationPath) != null &&
              (o.generation_path = e.metadata.generationPath),
            ((r = e.metadata) == null ? void 0 : r.seed_asset) != null &&
              (o.seed_asset = e.metadata.seed_asset),
            o
          );
        }),
        c = f(s, l),
        d =
          t.mergeWithExistingGAS === !0
            ? o("AdsUEditAdgroupImageGenReducerUtils").dedupeGASImagesByHash(
                l
                  .filter(function (e) {
                    return !c.some(function (t) {
                      return t.hash === e.hash;
                    });
                  })
                  .concat(c),
              )
            : s;
      return d.concat(u);
    }
    function h(e, t, n) {
      var a,
        i,
        l,
        s = n.generatedImages,
        u = n.setImagesEnrollStatus;
      return o("AdsAdgroupGenerativeAssetSpecMutators").setGeneratedAssetSpec({
        adgroup: e,
        textOverlayImageVariations: r("immutable").Map({}),
        textOverlays: null,
        textOverlayFontStyle: { type: "automatic" },
        isTextOverlaysSelected: !1,
        isLogoOverlaySelected: !1,
        logoAssets: null,
        isImageVariationSelected: t.imageAssets.length > 0,
        generatedImages: s,
        shouldNotSetImagesEnrollStatus: !u,
        colors: null,
        videoGenerationStatus:
          (a = t.videoGenerationStatusID) != null ? a : null,
        saveVideoGen: (i = t.saveVideoGen) != null ? i : !1,
        sourcedAssetID: (l = t.sourcedAssetID) != null ? l : null,
        videoGenRequestID: t.videoGenRequestID,
      });
    }
    function y(e, t) {
      var n = t.imageAssets,
        r = h(e, t, { generatedImages: g(e, t), setImagesEnrollStatus: !0 }),
        a = n.map(function (e) {
          var t;
          return (t = e.adImageHash) != null ? t : "";
        }),
        i = v(r)
          ? a.map(function (e) {
              return { hash: e, source: "generated" };
            })
          : o(
              "AdsAdgroupGenerativeAssetSpecMutators",
            ).getCAGImageSpecFromSelected(r, a, !0, t.seedImageHash),
        l = t.videoAssets,
        s =
          l != null && l.length > 0
            ? o("AdsAdgroupGenerativeAssetSpecMutators").setVideoVariations(
                l.map(function (e) {
                  var t;
                  return (t = e.videoID) != null ? t : "";
                }),
              )
            : [];
      return (
        (i.length > 0 || s.length > 0) &&
          (r = o(
            "AdsAdgroupGenerativeAssetSpecMutators",
          ).setOptedInGenAIVariations(
            r,
            "gen_ai",
            i,
            s,
            o("GenAISpecMigrationGKUtils").shouldSkipGenAICagOriginWrite(),
          )),
        r
      );
    }
    function C(e) {
      return e === "GENERATION"
        ? "live_gen"
        : e === "PREGEN"
          ? "pregen"
          : e === "CACHE"
            ? "offline_gen"
            : null;
    }
    function b(e, t) {
      if (v(e)) return { seedHash: null, seedUrl: null };
      if (
        r("justknobx")._("1668") &&
        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
      )
        return { seedHash: null, seedUrl: null };
      if (
        o("GenAISpecMigrationGKUtils").isSeedImageDisabledForNonMMU() &&
        !o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForMultiUpload(
          "silent",
        )
      )
        return { seedHash: null, seedUrl: null };
      var n = o(
          "AdsCreativeGenAIBaseAssetUtils",
        ).getBaseAssetImageSpecFromAdgroup(e),
        a =
          t.seedImageHash != null && t.seedImageHash !== ""
            ? t.seedImageHash
            : n.imageHash;
      return a != null && a !== ""
        ? { seedHash: a, seedUrl: null }
        : { seedHash: null, seedUrl: n.imageUrl };
    }
    function v(e) {
      var t;
      return (
        ((t = e.creative) == null ? void 0 : t.source_instagram_media_id) !=
          null ||
        (o("AdsAdgroupSpecUtils").getPagePostID(e) != null &&
          o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e))
      );
    }
    function S(e) {
      var t = e.seedHash,
        n = e.seedUrl;
      return t != null && t !== ""
        ? [
            r("immutable").Map({
              hash: t,
              source: "multi_media",
              opt_in_status: o("AdsCreativeMediaSourcingSpecTypes.flow")
                .RelatedMediaOptInStatusSpecType.OPT_IN,
            }),
          ]
        : n != null && n !== ""
          ? [
              r("immutable").Map({
                url: n,
                source: "multi_media",
                opt_in_status: o("AdsCreativeMediaSourcingSpecTypes.flow")
                  .RelatedMediaOptInStatusSpecType.OPT_IN,
              }),
            ]
          : [];
    }
    function R(e, t, n) {
      var a = n.writeImages,
        i = n.writeVideos,
        l = t.imageAssets,
        s = t.videoAssets,
        u = e;
      if (a && l.length > 0) {
        var c,
          d = Array.from(
            new Map(
              l.map(function (e) {
                var t;
                return [(t = e.adImageHash) != null ? t : "", e];
              }),
            ).values(),
          ),
          m = d.map(function (e) {
            var n,
              a,
              i,
              l,
              s,
              u,
              c,
              d,
              m,
              p,
              _,
              f,
              g,
              h = {
                hash: (n = e.adImageHash) != null ? n : "",
                source: "gen_ai",
                opt_in_status: o("AdsCreativeMediaSourcingSpecTypes.flow")
                  .RelatedMediaOptInStatusSpecType.OPT_IN,
                gen_ai_metadata: {
                  adoption_entrypoint: (a = t.entrypoint) != null ? a : null,
                  generation_path:
                    (i =
                      (l = e.metadata) == null ? void 0 : l.generationPath) !=
                    null
                      ? i
                      : null,
                  generation_type:
                    (s = C((u = e.metadata) == null ? void 0 : u.source)) !=
                    null
                      ? s
                      : null,
                  image_variation_id:
                    (c =
                      (d =
                        (m = e.metadata) == null
                          ? void 0
                          : m.imageVariationId) != null
                        ? d
                        : e.imageVariationEntID) != null
                      ? c
                      : null,
                  model_name:
                    (p = (_ = e.metadata) == null ? void 0 : _.model) != null
                      ? p
                      : null,
                  recipe_name:
                    (f = (g = e.metadata) == null ? void 0 : g.recipeName) !=
                    null
                      ? f
                      : null,
                  user_action: "MANUAL",
                },
              };
            return r("immutable").Map(h);
          }),
          p = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.images.get(u),
          _ = ((c = p == null ? void 0 : p.toArray()) != null ? c : []).filter(
            function (e) {
              return e.get("source") !== "gen_ai";
            },
          ),
          f = _.some(function (e) {
            return e.get("source") === "multi_media";
          });
        f || _.unshift.apply(_, S(b(e, t)));
        var g = r("immutable").List([].concat(_, m));
        u = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.images.set(g, u);
      }
      if (i && s != null && s.length > 0) {
        var h,
          y = Array.from(
            new Set(
              s
                .map(function (e) {
                  return e.videoID;
                })
                .filter(Boolean),
            ),
          ),
          v = y.map(function (e) {
            return r("immutable").Map({
              video_id: e,
              source: "gen_ai",
              opt_in_status: o("AdsCreativeMediaSourcingSpecTypes.flow")
                .RelatedMediaOptInStatusSpecType.OPT_IN,
            });
          }),
          R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.videos.get(u),
          L = ((h = R == null ? void 0 : R.toArray()) != null ? h : []).filter(
            function (e) {
              return e.get("source") !== "gen_ai";
            },
          ),
          E = r("immutable").List([].concat(L, v));
        u = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.videos.set(E, u);
      }
      return u;
    }
    ((l.removeAdoptedVariants = o("GenAISpecDeleter").removeAdoptedVariants),
      (l.adoptGenAIVariants = e),
      (l.adoptGenAIImageVariantsToMSS = s));
  },
  98,
);
