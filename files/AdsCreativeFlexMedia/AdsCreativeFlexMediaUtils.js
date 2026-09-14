__d(
  "AdsCreativeFlexMediaUtils",
  [
    "$InternalEnum",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsCreativeFlexAssetUtils",
    "AdsCreativeFlexMultiMediaCustomizationUtils",
    "AdsCreativeFlexRelatedMediaUtils",
    "AdsCreativeFlexSpecUtils",
    "AdsCreativeFlexTypes",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsDynamicAdsUtils",
    "AdsMultiMediaThumbnailUtils",
    "emptyArray",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["organicMediaSource"],
      s = ["organicMediaSource"],
      u = n("$InternalEnum").Mirrored(["ALL", "SELECT", "DESELECT"]);
    function c(e) {
      return (
        e.selection ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN ||
        e.selection ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection
            .OPT_IN_AS_DEFAULT_ON ||
        e.selection ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection
            .OPT_IN_AS_INFERRED_DA_INTRO_CARD
      );
    }
    function d(e, t) {
      var n, r, a;
      return (
        ((n = e.get(t)) == null ? void 0 : n.selection) ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN ||
        ((r = e.get(t)) == null ? void 0 : r.selection) ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection
            .OPT_IN_AS_DEFAULT_ON ||
        ((a = e.get(t)) == null ? void 0 : a.selection) ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection
            .OPT_IN_AS_INFERRED_DA_INTRO_CARD
      );
    }
    function m(e) {
      return e === o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN ||
        e ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection
            .OPT_IN_AS_DEFAULT_ON ||
        e ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection
            .OPT_IN_AS_INFERRED_DA_INTRO_CARD
        ? "OPT_IN"
        : e === o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT
          ? "OPT_OUT"
          : "NONE";
    }
    function p(e) {
      var t;
      return (
        e.data.hasValue() &&
        ((t = e.data.getValue()) == null ? void 0 : t.type) === "playable"
      );
    }
    function _(e) {
      return e
        .map(function (e) {
          return e.data.match({
            loaded: function (t) {
              return t.thumbnailUrl;
            },
            loading: function () {
              return null;
            },
            error: function () {
              return null;
            },
          });
        })
        .filter(Boolean);
    }
    function f(e, t) {
      var n = e.findIndex(function (e) {
        return d(t, e.id);
      });
      return n >= 0 ? n : 0;
    }
    function g(e, t, n, r, a, i, l) {
      var s = e.get(t);
      return s == null
        ? !1
        : o(
            "AdsCreativeFlexMultiMediaCustomizationUtils",
          ).isRelatedMediaEditedOnAnyTab(s, n, r, void 0, a, i, l);
    }
    function h(e) {
      return e === o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN ||
        e ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection
            .OPT_IN_AS_INFERRED_DA_INTRO_CARD
        ? o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT
        : o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN;
    }
    function y(e) {
      return Array.from(e.values()).filter(function (e) {
        return (
          e.selection ===
            o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN ||
          e.selection ===
            o("AdsCreativeFlexTypes").RelatedMediaSelection
              .OPT_IN_AS_INFERRED_DA_INTRO_CARD
        );
      });
    }
    function C(e) {
      return new Set(
        e
          .filter(function (e) {
            return c(e);
          })
          .map(function (e) {
            return e.id;
          }),
      );
    }
    function b(e) {
      return new Set(
        e
          .filter(function (e) {
            return e.isSelected === !0;
          })
          .map(function (e) {
            return e.id;
          }),
      );
    }
    function v(e) {
      return (
        e.useGlobalish &&
        e.isPushDestination !== !0 &&
        !e.hasSpecMedia &&
        e.recommendedMediaArr.length > 0 &&
        e.recommendedMediaArr.some(c)
      );
    }
    function S(e) {
      return r("immutable").OrderedMap(
        e.map(function (e) {
          var t,
            n = (e.id === "" || e.id == null) && (t = e.url) != null ? t : e.id;
          return [
            n,
            {
              action_metadata: e.action_metadata,
              ad_media_id: e.ad_media_id,
              creationSource: e.creationSource,
              destinationData: e.destinationData,
              id: n,
              mediaSourcePlatform: e.mediaSourcePlatform,
              organicMediaSource: e.organicMediaSource,
              placementCustomizationsData: e.placementCustomizationsData,
              selection: e.selection,
              source: e.source,
              retriever_sources: e.retriever_sources,
              textData: e.textData,
              type: e.type,
              url: e == null ? void 0 : e.url,
            },
          ];
        }),
      );
    }
    function R(e, t) {
      return t.size === 0
        ? r("immutable").OrderedMap()
        : r("immutable").OrderedMap([
            [e != null ? e : "", Array.from(t.values())],
          ]);
    }
    function L(e, t) {
      return r("immutable").OrderedMap(
        e.map(function (e) {
          return [
            e.id,
            {
              action_metadata: null,
              creationSource: e.creationSource,
              id: e.id,
              mediaSourcePlatform: e.mediaSourcePlatform,
              organicMediaSource: e.organicMediaSource,
              type: e.type,
              retriever_sources: null,
              selection:
                t != null
                  ? t ===
                    o("AdsCreativeMediaSourcingSpecTypes.flow")
                      .RelatedMediaOptInStatusSpecType.OPT_IN
                    ? o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN
                    : o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT
                  : h(
                      e.isSelected === !0
                        ? o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN
                        : o("AdsCreativeFlexTypes").RelatedMediaSelection
                            .OPT_OUT,
                    ),
              textData: void 0,
              destinationData: void 0,
              placementCustomizationsData: void 0,
            },
          ];
        }),
      );
    }
    function E(e, t) {
      var n,
        r,
        o =
          (n = t[0].creative) == null || (n = n.media_sourcing_spec) == null
            ? void 0
            : n.related_media,
        a =
          o != null
            ? o
            : (r = t[0].creative) == null
              ? void 0
              : r.media_sourcing_spec;
      if (a == null) return [];
      var i = o == null,
        l = M(a.images, i, e),
        s = w(a.videos, i, e);
      return [].concat(l, s);
    }
    function k(e, t) {
      var n = E(e, t),
        r = T(t),
        o = E(u.ALL, t),
        a = I(r, e, o);
      return [].concat(n, a);
    }
    function I(e, t, n) {
      switch (t) {
        case u.ALL:
        case u.SELECT: {
          var r = new Set(
            n.map(function (e) {
              return e.id;
            }),
          );
          return e.filter(function (e) {
            return !r.has(e.id);
          });
        }
        case u.DESELECT:
          return [];
      }
    }
    function T(e) {
      var t,
        n = e[0],
        a = o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators").hasAnyOrigins(
          n,
          [
            "creative_flex",
            "format_liquidity_da_flexible_format_with_related_media",
          ],
        ),
        i = (t = n.creative_asset_groups_spec) == null ? void 0 : t.groups;
      if (i == null || i.length === 0) return r("emptyArray");
      var l = D(i, a),
        s = $(i, a);
      return [].concat(x(l), P(s));
    }
    function D(e, t) {
      var n,
        o =
          (n = e.reduce(function (e, n) {
            var r = n.images;
            return r != null
              ? ((r = r.filter(function (e) {
                  return t || e.source === "related_media";
                })),
                [].concat(e, r))
              : e;
          }, [])) != null
            ? n
            : r("emptyArray");
      return o;
    }
    function x(e) {
      return e.map(function (e) {
        var t, n;
        return {
          action_metadata: null,
          id: (t = e.hash) != null ? t : "",
          type: "IMAGE",
          url: (n = e.url) != null ? n : "",
          textData: W(e.text_customizations),
          destinationData: q(e.destination_customizations),
          placementCustomizationsData: null,
          retriever_sources: null,
          selection: o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN,
        };
      });
    }
    function $(e, t) {
      var n,
        o =
          (n = e.reduce(function (e, n) {
            var r = n.videos;
            return r != null
              ? ((r = r.filter(function (e) {
                  return t || e.source === "related_media";
                })),
                [].concat(e, r))
              : e;
          }, [])) != null
            ? n
            : r("emptyArray");
      return o;
    }
    function P(e) {
      return e.map(function (e) {
        var t, n;
        return {
          action_metadata: null,
          id: (t = e.video_id) != null ? t : "",
          type: "VIDEO",
          url: (n = e.image_url) != null ? n : "",
          textData: W(e.text_customizations),
          destinationData: q(e.destination_customizations),
          placementCustomizationsData: null,
          retriever_sources: null,
          selection: o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN,
        };
      });
    }
    function N(e, t) {
      switch (e) {
        case u.SELECT:
          return (
            t.opt_in_status ===
            o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_OUT
          );
        case u.DESELECT:
          return (
            t.opt_in_status !==
            o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_OUT
          );
        case u.ALL:
          return !1;
      }
    }
    function M(e, t, n) {
      return (
        n === void 0 && (n = u.ALL),
        e == null
          ? []
          : e
              .map(function (e) {
                var r, a, i;
                return e.hash == null ||
                  (t && e.source !== "related_media") ||
                  N(n, e)
                  ? null
                  : {
                      action_metadata: e.action_metadata,
                      id: e.hash,
                      type: "IMAGE",
                      creationSource: e.creation_source,
                      mediaSourcePlatform: o(
                        "AdsCreativeFlexRelatedMediaUtils",
                      ).deriveMediaSourcePlatform(e.organic_media_source),
                      organicMediaSource: e.organic_media_source,
                      retriever_sources:
                        (r =
                          (a = e.retriever_sources) == null
                            ? void 0
                            : a
                                .map(
                                  o("AdsCreativeFlexSpecUtils")
                                    .convertSpecStringToRetrieverSource,
                                )
                                .filter(Boolean)) != null
                          ? r
                          : null,
                      selection:
                        n === u.ALL
                          ? (i = o(
                              "AdsCreativeFlexSpecUtils",
                            ).convertOptInStatusSpecToRelatedMediaSelection(
                              e.opt_in_status,
                            )) != null
                            ? i
                            : o("AdsCreativeFlexTypes").RelatedMediaSelection
                                .OPT_IN
                          : n === u.SELECT
                            ? o("AdsCreativeFlexTypes").RelatedMediaSelection
                                .OPT_IN
                            : o("AdsCreativeFlexTypes").RelatedMediaSelection
                                .OPT_OUT,
                      textData: W(e.text_customizations),
                      destinationData: q(e.destination_customizations),
                      placementCustomizationsData: {
                        expandedGroupings: null,
                        placementCustomizations: o(
                          "AdsCreativeFlexAssetUtils",
                        ).normalizePlacementCustomizations(
                          e.placement_customizations,
                        ),
                      },
                    };
              })
              .filter(Boolean)
      );
    }
    function w(e, t, n) {
      return (
        n === void 0 && (n = u.ALL),
        e == null
          ? []
          : e
              .map(function (e) {
                var r, a, i;
                return e.video_id == null ||
                  (t && e.source !== "related_media") ||
                  N(n, e)
                  ? null
                  : {
                      action_metadata: e.action_metadata,
                      id: e.video_id,
                      type: "VIDEO",
                      creationSource: e.creation_source,
                      mediaSourcePlatform: o(
                        "AdsCreativeFlexRelatedMediaUtils",
                      ).deriveMediaSourcePlatform(e.organic_media_source),
                      organicMediaSource: e.organic_media_source,
                      retriever_sources:
                        (r =
                          (a = e.retriever_sources) == null
                            ? void 0
                            : a
                                .map(
                                  o("AdsCreativeFlexSpecUtils")
                                    .convertSpecStringToRetrieverSource,
                                )
                                .filter(Boolean)) != null
                          ? r
                          : null,
                      selection:
                        n === u.ALL
                          ? (i = o(
                              "AdsCreativeFlexSpecUtils",
                            ).convertOptInStatusSpecToRelatedMediaSelection(
                              e.opt_in_status,
                            )) != null
                            ? i
                            : o("AdsCreativeFlexTypes").RelatedMediaSelection
                                .OPT_IN
                          : n === u.SELECT
                            ? o("AdsCreativeFlexTypes").RelatedMediaSelection
                                .OPT_IN
                            : o("AdsCreativeFlexTypes").RelatedMediaSelection
                                .OPT_OUT,
                      textData: W(e.text_customizations),
                      destinationData: q(e.destination_customizations),
                      placementCustomizationsData: {
                        expandedGroupings: null,
                        placementCustomizations: o(
                          "AdsCreativeFlexAssetUtils",
                        ).normalizePlacementCustomizations(
                          e.placement_customizations,
                        ),
                      },
                    };
              })
              .filter(Boolean)
      );
    }
    function A(e) {
      if (e == null) return [];
      var t = F(e.images),
        n = O(e.videos);
      return [].concat(t, n);
    }
    function F(e) {
      return e == null
        ? []
        : e
            .map(function (e) {
              var t,
                n,
                r,
                a,
                i = e.hash,
                l = e.url;
              return (i == null && l == null) || e.source !== "multi_media"
                ? null
                : {
                    action_metadata: e.action_metadata,
                    id: (t = i != null ? i : l) != null ? t : "",
                    url: l != null ? l : "",
                    type: "IMAGE",
                    creationSource: e.creation_source,
                    retriever_sources:
                      (n =
                        (r = e.retriever_sources) == null
                          ? void 0
                          : r
                              .map(
                                o("AdsCreativeFlexSpecUtils")
                                  .convertSpecStringToRetrieverSource,
                              )
                              .filter(Boolean)) != null
                        ? n
                        : null,
                    selection:
                      (a = o(
                        "AdsCreativeFlexSpecUtils",
                      ).convertOptInStatusSpecToRelatedMediaSelection(
                        e.opt_in_status,
                      )) != null
                        ? a
                        : o("AdsCreativeFlexTypes").RelatedMediaSelection
                            .OPT_IN,
                    textData: W(e.text_customizations),
                    destinationData: q(e.destination_customizations),
                    placementCustomizationsData: {
                      expandedGroupings: null,
                      placementCustomizations: o(
                        "AdsCreativeFlexAssetUtils",
                      ).normalizePlacementCustomizations(
                        e.placement_customizations,
                      ),
                    },
                    group_id: e.group_id,
                    variant_types: e.variant_types,
                  };
            })
            .filter(Boolean);
    }
    function O(e) {
      if (e == null) return [];
      var t = new Set();
      return e
        .map(function (e) {
          var n, r, a;
          if (e.video_id == null || e.source !== "multi_media") return null;
          var i =
            e.original_video_id != null && e.original_video_id !== ""
              ? e.original_video_id
              : e.video_id;
          return t.has(i)
            ? null
            : (t.add(i),
              {
                action_metadata: e.action_metadata,
                id: i,
                type: "VIDEO",
                creationSource: e.creation_source,
                retriever_sources:
                  (n =
                    (r = e.retriever_sources) == null
                      ? void 0
                      : r
                          .map(
                            o("AdsCreativeFlexSpecUtils")
                              .convertSpecStringToRetrieverSource,
                          )
                          .filter(Boolean)) != null
                    ? n
                    : null,
                selection:
                  (a = o(
                    "AdsCreativeFlexSpecUtils",
                  ).convertOptInStatusSpecToRelatedMediaSelection(
                    e.opt_in_status,
                  )) != null
                    ? a
                    : o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN,
                textData: W(e.text_customizations),
                destinationData: q(e.destination_customizations),
                placementCustomizationsData: {
                  expandedGroupings: null,
                  placementCustomizations: o(
                    "AdsCreativeFlexAssetUtils",
                  ).normalizePlacementCustomizations(
                    e.placement_customizations,
                  ),
                },
                thumbnailData: B(e),
              });
        })
        .filter(Boolean);
    }
    function B(e) {
      return o("AdsMultiMediaThumbnailUtils").isCustomThumbnailSource(
        e.thumbnail_source,
      )
        ? {
            thumbnailId: e.thumbnail_id,
            thumbnailSource: e.thumbnail_source,
            thumbnailUrl: e.thumbnail_url,
          }
        : null;
    }
    function W(e) {
      var t, n, r;
      return {
        primaryText:
          e == null || (t = e.bodies) == null
            ? void 0
            : t.map(function (e) {
                var t;
                return (t = e == null ? void 0 : e.text) != null ? t : "";
              }),
        headline:
          e == null || (n = e.titles) == null
            ? void 0
            : n.map(function (e) {
                var t;
                return (t = e == null ? void 0 : e.text) != null ? t : "";
              }),
        description:
          e == null || (r = e.descriptions) == null
            ? void 0
            : r.map(function (e) {
                var t;
                return (t = e == null ? void 0 : e.text) != null ? t : "";
              }),
      };
    }
    function q(e) {
      var t;
      return (t =
        e == null
          ? void 0
          : e.map(function (e) {
              return {
                websiteUrl: e == null ? void 0 : e.url,
                displayLink: e == null ? void 0 : e.display_url,
              };
            })) != null
        ? t
        : [];
    }
    function U(e, t) {
      return (
        t === void 0 && (t = !1),
        t
          ? Array.from(e.values()).filter(function (e) {
              return (
                e.selection !==
                o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT
              );
            })
          : Array.from(e.values()).filter(function (e) {
              return (
                e.selection ===
                o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN
              );
            })
      );
    }
    function V(e) {
      return Array.from(e.values()).filter(function (e) {
        return c(e);
      }).length;
    }
    function H(e) {
      return Array.from(e.values()).filter(function (e) {
        return !c(e);
      }).length;
    }
    function G(e) {
      return e == null || (e != null && Object.keys(e).length === 0)
        ? !0
        : (!e.description || e.description.length === 0) &&
            (!e.headline || e.headline.length === 0) &&
            (!e.primaryText || e.primaryText.length === 0);
    }
    function z(e) {
      var t = {};
      for (var n of e) {
        var r,
          o,
          a = (r = n.creationSource) != null ? r : "unknown";
        t[a] = ((o = t[a]) != null ? o : 0) + 1;
      }
      return { source_counts: t, total_count: e.length };
    }
    function j(e) {
      var t = {},
        n = 0;
      for (var r of e) {
        var o = r.mediaSourcePlatform;
        if (o != null) {
          var a;
          (n++, (t[o] = ((a = t[o]) != null ? a : 0) + 1));
        }
      }
      return {
        has_organic: n > 0,
        organic_count: n,
        organic_source_platform_counts: t,
        total_count: e.length,
      };
    }
    function K(t) {
      var n = t.organicMediaSource,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, r, {
        has_organic_media_source: n != null,
      });
    }
    function Q(e) {
      var t = e.organicMediaSource,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return babelHelpers.extends({}, n, {
        has_organic_media_source: t != null,
      });
    }
    function X(e) {
      return e.map(function (e) {
        var t;
        return K(
          babelHelpers.extends({}, e, {
            textData: G(e.textData) ? void 0 : e.textData,
            destinationData:
              ((t = e.destinationData) == null ? void 0 : t.length) === 0
                ? void 0
                : e.destinationData,
          }),
        );
      });
    }
    function Y(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s = e.creative,
        u =
          s == null || (t = s.object_story_spec) == null ? void 0 : t.link_data,
        c =
          s == null || (n = s.object_story_spec) == null
            ? void 0
            : n.video_data,
        d = o("AdsDynamicAdsUtils").isDynamicAd(e),
        m = d
          ? s == null ||
            (r = s.object_story_spec) == null ||
            (r = r.template_data) == null
            ? void 0
            : r.message
          : (a = u == null ? void 0 : u.message) != null
            ? a
            : c == null
              ? void 0
              : c.message,
        p =
          (i = u == null ? void 0 : u.name) != null
            ? i
            : c == null
              ? void 0
              : c.title,
        _ =
          (l = u == null ? void 0 : u.description) != null
            ? l
            : c == null
              ? void 0
              : c.link_description;
      return {
        targetAdPrimaryText: m,
        targetAdHeadline: p,
        targetAdDescription: _,
      };
    }
    function J(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s,
        u,
        c =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec,
        d =
          (n =
            (o =
              (a =
                c == null ||
                (i = c.link_data) == null ||
                (i = i.call_to_action) == null ||
                (i = i.value) == null
                  ? void 0
                  : i.lead_gen_form_id) != null
                ? a
                : c == null ||
                    (l = c.video_data) == null ||
                    (l = l.call_to_action) == null ||
                    (l = l.value) == null
                  ? void 0
                  : l.lead_gen_form_id) != null
              ? o
              : c == null ||
                  (s = c.template_data) == null ||
                  (s = s.call_to_action) == null ||
                  (s = s.value) == null
                ? void 0
                : s.lead_gen_form_id) != null
            ? n
            : e == null ||
                (u = e.creative) == null ||
                (u = u.asset_feed_spec) == null ||
                (u = u.call_to_actions) == null ||
                (u = u[0]) == null ||
                (u = u.value) == null
              ? void 0
              : u.lead_gen_form_id;
      return d != null && r("gkx")("16935") ? String(d) : Z(e);
    }
    function Z(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s,
        u,
        c =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec,
        d =
          (n =
            (o = c == null || (a = c.link_data) == null ? void 0 : a.link) !=
            null
              ? o
              : c == null ||
                  (i = c.video_data) == null ||
                  (i = i.call_to_action) == null ||
                  (i = i.value) == null
                ? void 0
                : i.link) != null
            ? n
            : (l = e.creative) == null
              ? void 0
              : l.link_url;
      if (d != null) return d;
      var m =
        (s = e.creative_link_url) != null
          ? s
          : (u = e.creative) == null ||
              (u = u.asset_feed_spec) == null ||
              (u = u.link_urls) == null ||
              (u = u[0]) == null
            ? void 0
            : u.website_url;
      return m != null && r("gkx")("16935") ? m : null;
    }
    ((l.FilterType = u),
      (l.isRelatedMediaOptedIn = c),
      (l.isRelatedMediaOptedInFromMap = d),
      (l.getRelatedMediaOptStatus = m),
      (l.isPlayableRelatedMediaDisplay = p),
      (l.getRelatedMediaThumbnailUrls = _),
      (l.getFirstOptedInMediaIndex = f),
      (l.isRelatedMediaCustomizedFromMap = g),
      (l.getRelatedMediaUpdatedSelection = h),
      (l.getSelectedRelatedMapFromMap = y),
      (l.getSelectedMediaIDSetFromArray = C),
      (l.getSelectedMediaIDSetFromDisplayArray = b),
      (l.shouldPopulateGlobalishCache = v),
      (l.buildRelatedMediaMap = S),
      (l.buildTargetIdentifierToRelatedMediaMap = R),
      (l.convertDisplayArrayToRelatedMediaMap = L),
      (l.getRelatedMediaFromAllSpecs = k),
      (l.getRelatedMediaFromAdgroupCagSpec = T),
      (l.getConvertMultiMediaToRelatedMediaFormatFromAdgroupSpec = A),
      (l.getOptInRelatedMediaFromMap = U),
      (l.getOptedInCountFromMap = V),
      (l.getOptedOutCountFromMap = H),
      (l.getRelatedMediaSourceCounts = z),
      (l.getOrganicMediaCounts = j),
      (l.getRelatedMediaItemForLogging = K),
      (l.getRelatedMediaDisplayItemForLogging = Q),
      (l.getRelatedMediaForLogging = X),
      (l.getAdTextInfoFromAdgroup = Y),
      (l.getDestinationUrlFromAdgroup = J),
      (l.getSourceUrlFromAdgroup = Z));
  },
  98,
);
