__d(
  "AdsUEditorAdgroupMediaSourcingSpecMutators",
  [
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsAdgroupMultiProductMutatorUtils",
    "AdsAdgroupRecordAccessors",
    "AdsCAGAssetUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsCreativeFlexGKCheckUtils",
    "AdsCreativeFlexMediaUtils",
    "AdsCreativeFlexSpecCheckUtils",
    "AdsCreativeFlexSpecUtils",
    "AdsCreativeFlexTypes",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsDACreativeFlexMediaUtils",
    "AdsDynamicAdsUtils",
    "AdsInterfacesLogger",
    "AdsMultiMediaUtils",
    "AdsMutators",
    "AdsObjectTypeUtils",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupDynamicAdsTextMutator",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsWizardMediaPickerMultiUploadUtils",
    "DAFlexibleFormatUtils",
    "gkx",
    "hasFormatTransformationWithDataSource",
    "immutable",
    "nullthrows",
    "qex",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["organic_media_source"],
      s = r("immutable").Set([
        "creative_flex",
        "creative_flex_positive_test",
        "creative_relaxation_positive_test",
        "format_liquidity_da_flexible_format_with_related_media",
      ]);
    function u(e) {
      if (
        !(e == null || e.length === 0) &&
        !(e.length === 1 && (e[0] == null || e[0].length === 0))
      )
        return e.map(function (e) {
          return { text: e };
        });
    }
    function c(e) {
      if (e != null) {
        var t = u(e == null ? void 0 : e.primaryText),
          n = u(e == null ? void 0 : e.headline),
          r = u(e == null ? void 0 : e.description);
        if (!(n == null && t == null && r == null))
          return { titles: n, bodies: t, descriptions: r };
      }
    }
    function d(e) {
      if (!(e == null || e.length === 0)) {
        var t = e
          .map(function (e) {
            return e.websiteUrl == null || e.websiteUrl.length === 0
              ? null
              : { url: e.websiteUrl, display_url: e.displayLink };
          })
          .filter(function (e) {
            return e != null;
          });
        return t.length === 0 ? void 0 : t;
      }
    }
    function m(t) {
      var n = t.organic_media_source,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return n != null
        ? babelHelpers.extends({}, r, { organic_media_source: n })
        : r;
    }
    function p(e, t, n, a) {
      if (t.length === 0) return e;
      var i = e,
        l =
          o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForMultiUpload(
            "silent",
          ) ||
          o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
            e,
            "multi_media",
          ),
        s = o("AdsObjectTypeUtils").isDynamicProductAd(e),
        u = r("immutable").List(
          t.map(function (e) {
            return r("immutable").Map(
              l && !s
                ? {
                    source:
                      n === "multi_media" ? "multi_media" : "related_media",
                    video_id: e.id,
                    creation_source: e.creationSource,
                    text_customizations: c(e.textData),
                    destination_customizations: d(e.destinationData),
                    placement_customizations: I(e.placementCustomizationsData),
                    opt_in_status: o(
                      "AdsCreativeFlexSpecUtils",
                    ).convertRelatedMediaSelectionToOptInStatusSpec(
                      e.selection,
                    ),
                    action_metadata: a,
                    retriever_sources: e.retriever_sources,
                    organic_media_source: e.organicMediaSource,
                  }
                : {
                    video_id: e.id,
                    creation_source: e.creationSource,
                    text_customizations: c(e.textData),
                    destination_customizations: d(e.destinationData),
                    placement_customizations: I(e.placementCustomizationsData),
                    opt_in_status: o(
                      "AdsCreativeFlexSpecUtils",
                    ).convertRelatedMediaSelectionToOptInStatusSpec(
                      e.selection,
                    ),
                    action_metadata: a,
                    retriever_sources: e.retriever_sources,
                    organic_media_source: e.organicMediaSource,
                  },
            );
          }),
        );
      if (l && !s) {
        var p,
          _ =
            (p = e.creative) == null || (p = p.media_sourcing_spec) == null
              ? void 0
              : p.videos,
          f =
            _ == null
              ? void 0
              : _.map(function (e) {
                  var t = u.find(function (t) {
                    return (
                      t.get("video_id") === e.get("video_id") &&
                      t.get("source") === e.get("source")
                    );
                  });
                  return t != null
                    ? r("immutable").Map(
                        babelHelpers.extends({}, e.toJS(), m(t.toJS())),
                      )
                    : e;
                }),
          g = new Set(
            (_ == null
              ? void 0
              : _.map(function (e) {
                  return e.get("video_id");
                })) || [],
          ),
          h = u.filter(function (e) {
            return !g.has(e.get("video_id"));
          }),
          y = (f || r("immutable").List()).concat(h);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.videos.set(y, i);
      } else
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.related_media.videos.set(u, i);
    }
    function _(e, t, n, a) {
      if (t.length === 0) return e;
      var i = e,
        l =
          o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForMultiUpload(
            "silent",
          ) ||
          o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
            e,
            "multi_media",
          ),
        s = o("AdsObjectTypeUtils").isDynamicProductAd(e),
        u = r("immutable").List(
          t.map(function (e) {
            return r("immutable").Map(
              l && !s
                ? {
                    source:
                      n === "multi_media" ? "multi_media" : "related_media",
                    hash: e.id,
                    creation_source: e.creationSource,
                    text_customizations: c(e.textData),
                    destination_customizations: d(e.destinationData),
                    placement_customizations: I(e.placementCustomizationsData),
                    opt_in_status: o(
                      "AdsCreativeFlexSpecUtils",
                    ).convertRelatedMediaSelectionToOptInStatusSpec(
                      e.selection,
                    ),
                    action_metadata: a,
                    retriever_sources: e.retriever_sources,
                    organic_media_source: e.organicMediaSource,
                  }
                : {
                    hash: e.id,
                    creation_source: e.creationSource,
                    text_customizations: c(e.textData),
                    destination_customizations: d(e.destinationData),
                    placement_customizations: I(e.placementCustomizationsData),
                    opt_in_status: o(
                      "AdsCreativeFlexSpecUtils",
                    ).convertRelatedMediaSelectionToOptInStatusSpec(
                      e.selection,
                    ),
                    action_metadata: a,
                    retriever_sources: e.retriever_sources,
                    organic_media_source: e.organicMediaSource,
                  },
            );
          }),
        );
      if (l && !s) {
        var p,
          _ =
            (p = e.creative) == null || (p = p.media_sourcing_spec) == null
              ? void 0
              : p.images,
          f =
            _ == null
              ? void 0
              : _.map(function (e) {
                  var t =
                    u == null
                      ? void 0
                      : u.find(function (t) {
                          return (
                            t.get("hash") === e.get("hash") &&
                            t.get("source") === e.get("source")
                          );
                        });
                  return t != null
                    ? r("immutable").Map(
                        babelHelpers.extends({}, e.toJS(), m(t.toJS())),
                      )
                    : e;
                }),
          g = new Set(
            (_ == null
              ? void 0
              : _.map(function (e) {
                  return e.get("hash");
                })) || [],
          ),
          h = u.filter(function (e) {
            return !g.has(e.get("hash"));
          }),
          y = (f || r("immutable").List()).concat(h);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.images.set(y, i);
      } else
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.related_media.images.set(u, i);
    }
    function f(e) {
      var t,
        n = e,
        a = o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          e,
          "related_media",
        );
      a &&
        (n = o(
          "AdsUEditorAdgroupMultiMediaSpecMutators",
        ).mayDeleteMediaSourceFromMediaSourcingSpec(n, "related_media"));
      var i = !!(
        (t = n.creative) != null &&
        (t = t.media_sourcing_spec) != null &&
        t.related_media
      );
      return i
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.related_media.delete(n)
        : n;
    }
    function g(e) {
      var t,
        n =
          ((t = e.creative) == null || (t = t.media_sourcing_spec) == null
            ? void 0
            : t.push_metadata_ids) != null;
      return n
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.push_metadata_ids.delete(e)
        : e;
    }
    function h(e, t, n) {
      var a, i;
      n === void 0 && (n = !1);
      var l = o(
        "AdsCreativeFlexGKCheckUtils",
      ).shouldSkipCreativeFlexCagOriginWrite();
      if (
        (r("AdsInterfacesLogger").logOnce({
          eventName: "creative_flex_debug",
          data:
            ((a = {}),
            (a.adgroup_id = r("AdsAdgroupRecordAccessors").id.get(e)),
            (a.event_source = "skip_creative_flex_cag_origin_write"),
            (a.subsequent_data = JSON.stringify({
              callsite: "maySetCreativeFlexInCAG",
              gk_skip: l,
            })),
            a),
        }),
        l ||
          o("AdsAdgroupGenerativeAssetSpecMutators").hasGenAIOrigin(e) ||
          o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
            e,
            "multi_media",
          ))
      )
        return e;
      var s = r("immutable").Map().set("group_uuid", t),
        u = o("AdsDynamicAdsUtils").isDynamicAd(e)
          ? "format_liquidity_da_flexible_format_with_related_media"
          : "creative_flex";
      if (n)
        return o("AdsMutators").chain(function (e) {
          return o(
            "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
          ).setOrigins(e, [u]);
        })(e);
      var c = (i = e.creative_asset_groups_spec) == null ? void 0 : i.groups,
        d = s;
      if (c != null && c instanceof r("immutable").List) {
        var m = c.get(0);
        m != null && (d = m.set("group_uuid", t));
      }
      return o("AdsMutators").chain(
        function (e) {
          return o(
            "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
          ).setOrigins(e, [u]);
        },
        r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set(
          r("immutable").List([d]),
        ),
      )(e);
    }
    function y(e, t) {
      var n;
      t === void 0 && (t = !1);
      var a = e;
      t || (a = f(e));
      var i = o(
        "AdsCreativeFlexGKCheckUtils",
      ).shouldSkipCreativeFlexCagOriginWrite();
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_debug",
        data:
          ((n = {}),
          (n.adgroup_id = r("AdsAdgroupRecordAccessors").id.get(a)),
          (n.event_source = "skip_creative_flex_cag_origin_write"),
          (n.subsequent_data = JSON.stringify({
            callsite: "mayRemoveCAGandMSSpecForRelatedMedia",
            gk_skip: i,
          })),
          n),
      });
      var l =
        i ||
        a.creative_asset_groups_spec == null ||
        !o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
          a,
          s.toArray(),
        );
      return l
        ? a
        : ((a = o("AdsMutators").chain(
            o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators")
              .deleteAllOrigins,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative_asset_groups_spec.groups.set(r("immutable").List([])),
          )(a)),
          o("AdsObjectTypeUtils").isDynamicProductAd(a) &&
          o("DAFlexibleFormatUtils").hasDAIntroCard(a)
            ? S(a)
            : a);
    }
    function C(e) {
      var t, n, r;
      return (t = (n = e.creative) == null ? void 0 : n.object_story_id) != null
        ? t
        : (r = e.creative) == null
          ? void 0
          : r.source_instagram_media_id;
    }
    function b(e, t, n) {
      return !o("AdsCreativeFlexGKCheckUtils").isExistingPostAdFlowEnabled() ||
        t == null ||
        n == null ||
        t === n
        ? e
        : y(e);
    }
    function v(e) {
      var t,
        n = f(e),
        a = o(
          "AdsCreativeFlexGKCheckUtils",
        ).shouldSkipCreativeFlexCagOriginWrite(),
        i = o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
          n,
          s.toArray(),
        );
      r("AdsInterfacesLogger").logOnce({
        eventName: "creative_flex_debug",
        data:
          ((t = {}),
          (t.adgroup_id = r("AdsAdgroupRecordAccessors").id.get(n)),
          (t.event_source = "skip_creative_flex_cag_origin_write"),
          (t.subsequent_data = JSON.stringify({
            cag_image_count: o("AdsCAGAssetUtils").getAllImageSpecs(n).length,
            callsite: "mayClearRelatedMediaSpecKeepBaseMedia",
            gk_skip: a,
            has_cf_origin: i,
          })),
          t),
      });
      var l = a || n.creative_asset_groups_spec == null || !i;
      return l
        ? n
        : o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").deleteAllOrigins(
            n,
          );
    }
    function S(e) {
      var t,
        n = (t = r("qex")._("3966")) != null ? t : !1,
        a = r("gkx")("20703") === !0;
      if (n || a) {
        var i = r("immutable")
          .Map()
          .set("group_uuid", r("uuidv4")().toString());
        return o("AdsMutators").chain(
          function (e) {
            return o(
              "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
            ).setOrigins(e, ["format_liquidity_da_intro_card"]);
          },
          r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set(
            r("immutable").List([i]),
          ),
        )(e);
      }
      return e;
    }
    function R(e) {
      var t = e;
      return (
        o("DAFlexibleFormatUtils").hasRelatedMedia(e) && (t = y(t)),
        t.creative_asset_groups_spec != null &&
          o(
            "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
          ).hasSpecificOrigin(t, "format_liquidity_da_intro_card") &&
          ((t = o(
            "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
          ).deleteAllOrigins(t)),
          (t = r(
            "AdsAdgroupRecordAccessors",
          ).creative_asset_groups_spec.groups.set(r("immutable").List([]), t))),
        t
      );
    }
    function L(e, t) {
      return e.filter(function (e) {
        return e.type === t;
      });
    }
    function E(e) {
      var t, n;
      if (
        !o("AdsMultiMediaUtils").isPrimaryMediaDestinationCustomizationEnabled(
          "silent",
        ) ||
        !o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          e,
          "multi_media",
        )
      )
        return e;
      var a = (t = e.creative) == null ? void 0 : t.object_story_spec,
        i = a == null ? void 0 : a.link_data,
        l =
          a == null ||
          (n = a.video_data) == null ||
          (n = n.call_to_action) == null
            ? void 0
            : n.value,
        s,
        u;
      if ((i == null ? void 0 : i.link) != null && i.link.length > 0)
        ((s = i.link), (u = i.caption));
      else if ((l == null ? void 0 : l.link) != null && l.link.length > 0)
        ((s = l.link), (u = l.link_caption));
      else
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.destinations.set(
          r("immutable").List([]),
          e,
        );
      var c = r("immutable").List([
        r("immutable").Map({ url: s, display_url: u }),
      ]);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.destinations.set(c, e);
    }
    function k(e, t, n, a) {
      if (t.size === 0) return e;
      var i = Array.from(t.values()),
        l = e,
        s = L(i, "IMAGE");
      l = _(l, s, n, a);
      var u = L(i, "VIDEO");
      return (
        (l = p(l, u, n, a)),
        (l = E(l)),
        (l = o("AdsCreativeFlexSpecCheckUtils").isCreativeFlexOptedInAd(l)
          ? h(l, r("uuidv4")().toString())
          : y(l, !0)),
        l
      );
    }
    function I(e) {
      var t,
        n =
          (t = e == null ? void 0 : e.placementCustomizations) != null ? t : [];
      return n.length > 0
        ? n.filter(function (e) {
            return (
              Array.isArray(e == null ? void 0 : e.placement_exclusions) &&
              e.placement_exclusions.length > 0
            );
          })
        : void 0;
    }
    function T(e, t, n, r) {
      var a, i;
      if (
        (r === void 0 && (r = o("AdsCreativeFlexTypes").ActionCategory.DEFAULT),
        !o(
          "DAFlexibleFormatUtils",
        ).isAdgroupEligibleForDACarouselIntroCardRevamp(e) ||
          !o("DAFlexibleFormatUtils").passFlexibleFormatAndRelatedMediaAdexGK(
            "silent",
          ))
      )
        return e;
      var l = e,
        s = Array.from(t.values()).filter(function (e) {
          return (
            e.selection ===
            o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN
          );
        });
      if (
        s.length === 0 ||
        r === o("AdsCreativeFlexTypes").ActionCategory.DELETE_ALL
      )
        return (
          (l = o(
            "AdsAdgroupFormatTransformationMutators",
          ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
            l,
            "da_collection",
            "related_media",
          )),
          (l = o(
            "AdsAdgroupFormatTransformationMutators",
          ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
            l,
            "single_media",
            "related_media",
          )),
          l
        );
      var u =
          n == null || (a = n.images) == null
            ? void 0
            : a.filter(function (e) {
                return o(
                  "AdsDACreativeFlexMediaUtils",
                ).isValidDARelatedMediaOptInStatus(e.opt_in_status);
              }),
        c =
          n == null || (i = n.videos) == null
            ? void 0
            : i.filter(function (e) {
                return o(
                  "AdsDACreativeFlexMediaUtils",
                ).isValidDARelatedMediaOptInStatus(e.opt_in_status);
              });
      if ((u == null || u.length === 0) && (c == null || c.length === 0)) {
        var d = ["related_media"],
          m = ["related_media", "catalog"];
        (o("DAFlexibleFormatUtils").hasDAIntroCard(l) &&
          (d.push("manual_uploads"), m.push("manual_uploads")),
          o(
            "hasFormatTransformationWithDataSource",
          ).hasFormatTransformationWithDataSource(e, "single_media", "none") ||
            d == null ||
            d.forEach(function (e) {
              l = o(
                "AdsAdgroupFormatTransformationMutators",
              ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                l,
                "single_media",
                e,
              );
            }),
          o(
            "hasFormatTransformationWithDataSource",
          ).hasFormatTransformationWithDataSource(e, "da_collection", "none") ||
            m == null ||
            m.forEach(function (e) {
              l = o(
                "AdsAdgroupFormatTransformationMutators",
              ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                l,
                "da_collection",
                e,
              );
            }));
      }
      return l;
    }
    function D(e, t, n, r) {
      var a = e;
      if (n != null) {
        if (!o("DAFlexibleFormatUtils").hasDAIntroCard(e)) {
          var i, l, s;
          ((a = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).addLeadingStaticCard(e, !1)),
            (a = o(
              "AdsAdgroupFormatTransformationMutators",
            ).adsAdgroupFormatTransformationDataSourceOptInMutator(
              a,
              "carousel",
              "catalog",
            )),
            (a = o(
              "AdsUEditorAdgroupDynamicAdsTextMutator",
            ).mutateChildMediaDetails(
              0,
              a,
              (i = n.textData) == null || (i = i.headline) == null
                ? void 0
                : i.at(0),
              (l = n.textData) == null || (l = l.description) == null
                ? void 0
                : l.at(0),
              (s = n.destinationData) == null || (s = s.at(0)) == null
                ? void 0
                : s.websiteUrl,
            )));
        }
        if (n.type === "IMAGE")
          a = o("AdsAdgroupMultiProductMutatorUtils").setChildImageAndCrops(
            0,
            null,
            n.id,
            null,
            a,
            null,
            null,
            null,
          );
        else if (n.type === "VIDEO") {
          var u;
          a = o("AdsUEditorAdgroupChildAttachmentsMutators").setChildVideoID(
            a,
            r,
            0,
            n.id,
            null,
            (u = n.url) != null ? u : null,
          );
        }
      } else
        t != null &&
          (a = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).removeLeadingStaticCard(a));
      return a;
    }
    function x(e) {
      if (
        !o("DAFlexibleFormatUtils").hasRelatedMedia(e) ||
        (!o("DAFlexibleFormatUtils").passUpdatePrimaryAdWithDAIntroCardGK(
          "silent",
        ) &&
          !o(
            "DAFlexibleFormatUtils",
          ).skipGKCheckOnInferredIntroCardForRenderingOrRemoval())
      )
        return e;
      var t = e.toJS(),
        n = o("AdsCreativeFlexMediaUtils").getRelatedMediaFromAllSpecs(
          o("AdsCreativeFlexMediaUtils").FilterType.ALL,
          [t],
        ),
        r = new Map();
      return (
        n.forEach(function (e) {
          r.set(
            e.id,
            e.selection ===
              o("AdsCreativeFlexTypes").RelatedMediaSelection
                .OPT_IN_AS_INFERRED_DA_INTRO_CARD
              ? babelHelpers.extends({}, e, {
                  selection: o("AdsCreativeFlexTypes").RelatedMediaSelection
                    .OPT_IN,
                })
              : e,
          );
        }),
        k(e, r, "related_media")
      );
    }
    function $(e, t) {
      if (
        !o("DAFlexibleFormatUtils").passUpdatePrimaryAdWithDAIntroCardGK(
          "silent",
        ) ||
        !o("DAFlexibleFormatUtils").hasRelatedMedia(e) ||
        o("DAFlexibleFormatUtils").hasDAIntroCard(e)
      )
        return e;
      var n = e,
        a = r("nullthrows")(t.get(e.id)),
        i = e.toJS(),
        l = o("AdsCreativeFlexMediaUtils").getRelatedMediaFromAllSpecs(
          o("AdsCreativeFlexMediaUtils").FilterType.ALL,
          [i],
        ),
        s = Array.from(l.values()).find(function (e) {
          return (
            e.selection ===
            o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN
          );
        });
      if (s == null) return e;
      var u = new Map();
      return (
        l.forEach(function (e) {
          u.set(
            e.id,
            e.id === s.id
              ? babelHelpers.extends({}, e, {
                  selection: o("AdsCreativeFlexTypes").RelatedMediaSelection
                    .OPT_IN_AS_INFERRED_DA_INTRO_CARD,
                })
              : e,
          );
        }),
        (n = k(n, u, "related_media")),
        D(n, null, s, a)
      );
    }
    function P(e, t, n) {
      var a =
          o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForMultiUpload(
            "silent",
          ) ||
          o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
            e,
            "multi_media",
          ),
        i = o("AdsObjectTypeUtils").isDynamicProductAd(e),
        l = e;
      for (var s of t) {
        var u = s.id,
          c = s.type;
        l =
          c === "IMAGE"
            ? N(l, u, a, i, n, s.organicMediaSource)
            : c === "VIDEO"
              ? M(l, u, a, i, n, s.organicMediaSource)
              : l;
      }
      return o("AdsCreativeFlexSpecCheckUtils").isCreativeFlexOptedInAd(l)
        ? h(l, r("uuidv4")().toString())
        : y(l, !0);
    }
    function N(e, t, n, a, i, l) {
      if (n && !a) {
        var s,
          u,
          c =
            (s =
              (u = e.creative) == null || (u = u.media_sourcing_spec) == null
                ? void 0
                : u.images) != null
              ? s
              : r("immutable").List(),
          d = c.findIndex(function (e) {
            return e.get("hash") === t;
          });
        if (d !== -1) {
          var m = r("nullthrows")(c.get(d), "Image must exist at found index"),
            p =
              i != null
                ? i
                : m.get("opt_in_status") ===
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN
                  ? o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_OUT
                  : o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN,
            _ = c.set(d, m.set("opt_in_status", p));
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.images.set(_, e);
        } else {
          var f =
              i != null
                ? i
                : o("AdsCreativeMediaSourcingSpecTypes.flow")
                    .RelatedMediaOptInStatusSpecType.OPT_IN,
            g = r("immutable").Map(
              babelHelpers.extends(
                { source: "related_media", hash: t, opt_in_status: f },
                l != null ? { organic_media_source: l } : {},
              ),
            ),
            h = c.push(g);
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.images.set(h, e);
        }
      } else {
        var y,
          C,
          b =
            (y =
              (C = e.creative) == null ||
              (C = C.media_sourcing_spec) == null ||
              (C = C.related_media) == null
                ? void 0
                : C.images) != null
              ? y
              : r("immutable").List(),
          v = b.findIndex(function (e) {
            return e.get("hash") === t;
          });
        if (v !== -1) {
          var S = r("nullthrows")(b.get(v), "Image must exist at found index"),
            R =
              i != null
                ? i
                : S.get("opt_in_status") ===
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN
                  ? o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_OUT
                  : o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN,
            L = b.set(v, S.set("opt_in_status", R));
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.related_media.images.set(L, e);
        } else {
          var E =
              i != null
                ? i
                : o("AdsCreativeMediaSourcingSpecTypes.flow")
                    .RelatedMediaOptInStatusSpecType.OPT_IN,
            k = r("immutable").Map(
              babelHelpers.extends(
                { hash: t, opt_in_status: E },
                l != null ? { organic_media_source: l } : {},
              ),
            ),
            I = b.push(k);
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.related_media.images.set(I, e);
        }
      }
    }
    function M(e, t, n, a, i, l) {
      if (n && !a) {
        var s,
          u,
          c =
            (s =
              (u = e.creative) == null || (u = u.media_sourcing_spec) == null
                ? void 0
                : u.videos) != null
              ? s
              : r("immutable").List(),
          d = c.findIndex(function (e) {
            return e.get("video_id") === t;
          });
        if (d !== -1) {
          var m = r("nullthrows")(c.get(d), "Video must exist at found index"),
            p =
              i != null
                ? i
                : m.get("opt_in_status") ===
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN
                  ? o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_OUT
                  : o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN,
            _ = c.set(d, m.set("opt_in_status", p));
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.videos.set(_, e);
        } else {
          var f =
              i != null
                ? i
                : o("AdsCreativeMediaSourcingSpecTypes.flow")
                    .RelatedMediaOptInStatusSpecType.OPT_IN,
            g = r("immutable").Map(
              babelHelpers.extends(
                { source: "related_media", video_id: t, opt_in_status: f },
                l != null ? { organic_media_source: l } : {},
              ),
            ),
            h = c.push(g);
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.videos.set(h, e);
        }
      } else {
        var y,
          C,
          b =
            (y =
              (C = e.creative) == null ||
              (C = C.media_sourcing_spec) == null ||
              (C = C.related_media) == null
                ? void 0
                : C.videos) != null
              ? y
              : r("immutable").List(),
          v = b.findIndex(function (e) {
            return e.get("video_id") === t;
          });
        if (v !== -1) {
          var S = r("nullthrows")(b.get(v), "Video must exist at found index"),
            R =
              i != null
                ? i
                : S.get("opt_in_status") ===
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN
                  ? o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_OUT
                  : o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN,
            L = b.set(v, S.set("opt_in_status", R));
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.related_media.videos.set(L, e);
        } else {
          var E =
              i != null
                ? i
                : o("AdsCreativeMediaSourcingSpecTypes.flow")
                    .RelatedMediaOptInStatusSpecType.OPT_IN,
            k = r("immutable").Map(
              babelHelpers.extends(
                { video_id: t, opt_in_status: E },
                l != null ? { organic_media_source: l } : {},
              ),
            ),
            I = b.push(k);
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.related_media.videos.set(I, e);
        }
      }
    }
    ((l.CREATIVE_FLEX_AD_CAG_ORIGINS = s),
      (l.getTextFieldsFromTextData = u),
      (l.convertTextDataToTextCustomizationSpec = c),
      (l.convertDestinationDataToDestinationCustomizationSpec = d),
      (l.mayDeleteMediaSourcingRelatedMediaSpec = f),
      (l.mayDeletePushMetadataIdsSpec = g),
      (l.maySetCreativeFlexInCAG = h),
      (l.mayRemoveCAGandMSSpecForRelatedMedia = y),
      (l.getExistingPostID = C),
      (l.mayClearRelatedMediaOnPostChange = b),
      (l.mayClearRelatedMediaSpecKeepBaseMedia = v),
      (l.mayRemoveCAGandMSSpecForDARelatedMediaAndIntroCard = R),
      (l.getRelatedMediaWithSpecificType = L),
      (l.maySetMediaSourcingL1Destination = E),
      (l.maySetMSSandCAGSpecForRelatedMedia = k),
      (l.convertPlacementCustomizationsDataToPlacementCustomizationsSpec = I),
      (l.maybeUpdateFormatReactiveControlForDARelatedMedia = T),
      (l.maybeUpdateInferredDAIntroCard = D),
      (l.maybeRemoveInferredDAIntroCardStatus = x),
      (l.maybeAddDAInferredIntroCard = $),
      (l.toggleMediaOptInStatusInMSSpec = P));
  },
  98,
);
