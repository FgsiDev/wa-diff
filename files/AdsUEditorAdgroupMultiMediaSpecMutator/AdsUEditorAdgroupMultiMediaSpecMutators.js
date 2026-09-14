__d(
  "AdsUEditorAdgroupMultiMediaSpecMutators",
  [
    "AdsAPIAdAssetFeedBodiesFields",
    "AdsAPIAdAssetFeedDescriptionsFields",
    "AdsAPIAdAssetFeedTitlesFields",
    "AdsAPICampaignRecord",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSetMediaReducerUtils",
    "AdsAdgroupSpecUtils",
    "AdsAssetFeedAssetUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsCreativeFlexTypes",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsCreativeMultiMediaLoggingUtils",
    "AdsDynamicAdsUtils",
    "AdsImageGenThumbnailEligibilityUtils",
    "AdsImageIDClasses",
    "AdsImageIDUtils",
    "AdsMediaFormat",
    "AdsMediaFormatMutators",
    "AdsMultiMediaUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsTargetingConstants",
    "AdsTextGenerationGetSourceUtils",
    "AdsTextGenerationReducerUtils",
    "AdsTextGenerationTypes",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutatorUtils",
    "AdsUEditorAdgroupMultiMediaVariantSpecUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorCreativeToolAssetPickerMediaAudienceUtils",
    "AdsValidationConsts",
    "AdsWizardMediaPickerImageVariantUtils",
    "AdsWizardMediaPickerMultiUploadUtils",
    "AdsWizardMediaPickerVariantMapUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "CapaUtils",
    "ShutterstockImageUtils",
    "VideoThumbnailSource",
    "enumUtils",
    "gkx",
    "immutable",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? !1
        : e instanceof r("AdsAPICampaignRecord")
          ? r("CapaUtils").isCapaL0EnabledInCampaign(e)
          : r("CapaUtils").isCapaL0EnabledinCampaignForGenericCampaignInterface(
              e,
            );
    }
    function s(t, n) {
      var a,
        i,
        l,
        s =
          n != null
            ? t == null || (a = t.get(n)) == null
              ? void 0
              : a.campaign
            : null;
      if (e(s)) {
        var u = s == null ? void 0 : s.targeting;
        return {
          age_min:
            (i = u == null ? void 0 : u.age_min) != null
              ? i
              : r("AdsValidationConsts").minAgeDefault,
          age_max:
            (l = u == null ? void 0 : u.age_max) != null
              ? l
              : r("AdsValidationConsts").maxAge,
          genders: [o("AdsTargetingConstants").GENDERS.All],
        };
      }
    }
    function u(e) {
      var t = {};
      if (e != null) {
        var n = e.get("text_customizations");
        n != null && (t.text_customizations = n);
        var r = e.get("destination_customizations");
        r != null && (t.destination_customizations = r);
        var o = e.get("placement_customizations");
        o != null && (t.placement_customizations = o);
        var a = e.get("group_id");
        a != null && (t.group_id = a);
        var i = e.get("variant_types");
        i != null && (t.variant_types = i);
        var l = e.get("original_image_hash");
        l != null && (t.original_image_hash = l);
        var s = e.get("action_metadata");
        s != null && (t.action_metadata = s);
        var u = e.get("organic_media_source");
        u != null && (t.organic_media_source = u);
        var c = e.get("thumbnail_id");
        c != null && (t.thumbnail_id = c);
        var d = e.get("thumbnail_source");
        d != null && (t.thumbnail_source = d);
        var m = e.get("thumbnail_url");
        m != null && (t.thumbnail_url = m);
        var p = e.get("thumbnail_gen_ai_metadata");
        p != null && (t.thumbnail_gen_ai_metadata = p);
      }
      return t;
    }
    function c(e) {
      return e == null
        ? null
        : babelHelpers.extends(
            {
              thumbnail_id: e.thumbnailId,
              thumbnail_source: e.thumbnailSource,
              thumbnail_url: e.thumbnailUrl,
            },
            e.thumbnailGenAIVariationID != null
              ? {
                  thumbnail_gen_ai_metadata: {
                    image_variation_id: e.thumbnailGenAIVariationID,
                  },
                }
              : null,
          );
    }
    function d(e) {
      var t = {};
      return (
        e &&
          ((t.text_customizations = o(
            "AdsUEditorAdgroupMediaSourcingSpecMutators",
          ).convertTextDataToTextCustomizationSpec(e.textData)),
          (t.destination_customizations = o(
            "AdsUEditorAdgroupMediaSourcingSpecMutators",
          ).convertDestinationDataToDestinationCustomizationSpec(
            e.destinationData,
          )),
          (t.placement_customizations = o(
            "AdsUEditorAdgroupMediaSourcingSpecMutators",
          ).convertPlacementCustomizationsDataToPlacementCustomizationsSpec(
            e.placementCustomizationsData,
          )),
          (t.group_id = e.group_id),
          (t.variant_types = e.variant_types),
          e.organicMediaSource != null &&
            (t.organic_media_source = e.organicMediaSource)),
        babelHelpers.extends({}, t, c(e == null ? void 0 : e.thumbnailData))
      );
    }
    var m = [
      "ASSET_SOURCE",
      "UUID",
      "TEXT_GEN_ORIGINAL_TEXT",
      "TEXT_GEN_INPUT_TEXT",
      "ACTION_TYPE",
      "LANGUAGE",
      "TARGET_AUDIENCE",
    ];
    function p(e, t, n) {
      n === void 0 && (n = !0);
      var r = function (n) {
          var t = e.get(n);
          return typeof t == "string" ? t : null;
        },
        o = { text: r(t.TEXT) };
      if (n)
        for (var a of m) {
          var i = t[a];
          i != null && (o[i] = r(i));
        }
      return o;
    }
    function _(e) {
      var t = o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e);
      if (t) {
        var n = o("AdsAssetFeedAssetUtils").getTextFromAdgroup(e),
          a = o("AdsAssetFeedAssetUtils").getHeadlinesFromAdgroup(e),
          i = o("AdsAssetFeedAssetUtils").getDescriptionsFromAdgroup(e);
        return {
          descriptions: i
            .map(function (e) {
              return p(e, r("AdsAPIAdAssetFeedDescriptionsFields"), !1);
            })
            .toArray(),
          titles: a
            .map(function (e) {
              return p(e, r("AdsAPIAdAssetFeedTitlesFields"), !0);
            })
            .toArray(),
          bodies: n
            .map(function (e) {
              return p(e, r("AdsAPIAdAssetFeedBodiesFields"), !0);
            })
            .toArray(),
        };
      } else {
        var l = o("AdsAdgroupSpecUtils").getPrimaryText(e),
          s = o("AdsAdgroupSpecUtils").getHeadline(e),
          u = o("AdsAdgroupSpecUtils").getLinkDescription(e);
        return {
          descriptions: u != null ? [{ text: u }] : [],
          titles: s != null ? [{ text: s }] : [],
          bodies: l != null ? [{ text: l }] : [],
        };
      }
    }
    function f(e) {
      switch (e) {
        case o("AdsMultiMediaUtils").MultiMediaTextType.HEADLINE:
          return r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec
            .titles;
        case o("AdsMultiMediaUtils").MultiMediaTextType.DESCRIPTION:
          return r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec
            .descriptions;
        case o("AdsMultiMediaUtils").MultiMediaTextType.MESSAGE:
          return r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec
            .bodies;
      }
    }
    function g(e, t) {
      var n, r, a;
      switch (t) {
        case o("AdsMultiMediaUtils").MultiMediaTextType.HEADLINE:
          return (n = e.creative) == null || (n = n.media_sourcing_spec) == null
            ? void 0
            : n.titles;
        case o("AdsMultiMediaUtils").MultiMediaTextType.DESCRIPTION:
          return (r = e.creative) == null || (r = r.media_sourcing_spec) == null
            ? void 0
            : r.descriptions;
        case o("AdsMultiMediaUtils").MultiMediaTextType.MESSAGE:
          return (a = e.creative) == null || (a = a.media_sourcing_spec) == null
            ? void 0
            : a.bodies;
      }
    }
    function h(e) {
      var t,
        n,
        o,
        a = e,
        i = _(e),
        l =
          (t = e.creative) == null || (t = t.media_sourcing_spec) == null
            ? void 0
            : t.titles;
      if ((l == null || l.size === 0) && i.titles.length > 0) {
        var s = r("immutable").List(
          i.titles.map(function (e) {
            return r("immutable").Map(e);
          }),
        );
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.titles.set(s, a);
      }
      var u =
        (n = a.creative) == null || (n = n.media_sourcing_spec) == null
          ? void 0
          : n.bodies;
      if ((u == null || u.size === 0) && i.bodies.length > 0) {
        var c = r("immutable").List(
          i.bodies.map(function (e) {
            return r("immutable").Map(e);
          }),
        );
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.bodies.set(c, a);
      }
      var d =
        (o = a.creative) == null || (o = o.media_sourcing_spec) == null
          ? void 0
          : o.descriptions;
      if ((d == null || d.size === 0) && i.descriptions.length > 0) {
        var m = r("immutable").List(
          i.descriptions.map(function (e) {
            return r("immutable").Map(e);
          }),
        );
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.descriptions.set(m, a);
      }
      return a;
    }
    function y(e, t, n) {
      if (o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e)) return e;
      var a = f(t),
        i = o(
          "AdsUEditorAdgroupMediaSourcingSpecMutators",
        ).getTextFieldsFromTextData(n);
      if (i == null) return a.set(r("immutable").List(), e);
      var l = g(e, t),
        s = r("immutable").List(
          i.map(function (e, t) {
            var n = l == null ? void 0 : l.get(t);
            return n != null ? n.set("text", e.text) : r("immutable").Map(e);
          }),
        );
      return a.set(s, e);
    }
    function C(e, t, n, r) {
      if (o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e)) return e;
      var a = o("AdsMultiMediaUtils").getMultiTextDataFromAdgroup(e.toJS(), t),
        i = r >= 0 ? r : a.length;
      if (i >= a.length) {
        for (; a.length < i && i < 100; ) a.push("");
        a.push(n);
      } else a[i] = n;
      return y(e, t, a);
    }
    function b(e) {
      var t = new Set();
      return (
        e == null ||
          e.forEach(function (e, n) {
            var r = e == null ? void 0 : e.page;
            r != null &&
              r.fb_video_copy_id == null &&
              ((n == null ? void 0 : n.id) != null && t.add(String(n.id)),
              r.id != null && t.add(String(r.id)));
          }),
        t
      );
    }
    function v(e, t, n, a, i, l, s, u, c, d, m, p, _, f, g, y, C) {
      if (
        (a === void 0 && (a = "multi_media"),
        !o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForMultiUpload(
          "silent",
        ))
      )
        return e;
      o("AdsCreativeMultiMediaLoggingUtils").maybeLogMSSWriteOnShopsAd(
        e,
        d,
        a,
        n.filter(function (e) {
          return (e == null ? void 0 : e.type) === "image";
        }).length,
        n.filter(function (e) {
          return (e == null ? void 0 : e.type) === "video";
        }).length,
      );
      var v = e;
      r("gkx")("15760") &&
        !o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          e,
          "multi_media",
        ) &&
        (v = h(v));
      var R = b(m),
        L =
          R.size > 0
            ? n.filter(function (e) {
                return e == null || !R.has(String(e.id));
              })
            : n,
        k = o(
          "AdsWizardMediaPickerMultiUploadUtils",
        ).getSelectedMultiMediaWithSpecificType(L, "image"),
        I = o(
          "AdsWizardMediaPickerMultiUploadUtils",
        ).getSelectedMultiMediaWithSpecificType(L, "video");
      return (
        a === "related_media" &&
          (i == null ? void 0 : i.length) != null &&
          ((k = o(
            "AdsUEditorAdgroupMultiMediaSpecMutatorUtils",
          ).filterRelatedMediaImages(k, i, t, e.account_id)),
          (I = o(
            "AdsUEditorAdgroupMultiMediaSpecMutatorUtils",
          ).filterRelatedMediaVideos(I, i, t))),
        (v = H(v, t, k, a, i, d, p, _, f, c, g, y, C)),
        (v = E(v, t, I, a, i, l, s, u, c, d, f)),
        a === "multi_media" &&
          !r("justknobx")._("3121") &&
          ((v = re(v)), (v = ne(v, u, c, d))),
        r("justknobx")._("1472") && (v = S(v, a)),
        (v = ae(v, c, d)),
        v
      );
    }
    function S(e, t) {
      var n, a;
      if (t !== "multi_media") return e;
      var i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.related_media.images.get(e),
        l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.related_media.videos.get(e);
      if ((i == null || i.size === 0) && (l == null || l.size === 0)) return e;
      var s = e,
        u = (n = e.creative) == null ? void 0 : n.media_sourcing_spec;
      if (i != null && i.size > 0) {
        var c,
          d,
          m = i.map(function (e) {
            return e.delete("image_crops").set("source", "related_media");
          }),
          p =
            (c =
              (d = s.creative) == null || (d = d.media_sourcing_spec) == null
                ? void 0
                : d.images) != null
              ? c
              : r("immutable").List(),
          _ = new Set(
            p
              .map(function (e) {
                return x(e);
              })
              .filter(Boolean),
          ),
          f = m.filter(function (e) {
            var t = x(e);
            return t == null || !_.has(t);
          });
        s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.images.set(p.concat(f), s);
      }
      if (l != null && l.size > 0) {
        var g,
          h,
          y = l.map(function (e) {
            return e.set("source", "related_media");
          }),
          C =
            (g =
              (h = s.creative) == null || (h = h.media_sourcing_spec) == null
                ? void 0
                : h.videos) != null
              ? g
              : r("immutable").List(),
          b = new Set(
            C.map(function (e) {
              return R(e);
            }).filter(Boolean),
          ),
          v = y.filter(function (e) {
            var t = R(e);
            return t == null || !b.has(t);
          });
        s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.videos.set(C.concat(v), s);
      }
      s = r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.related_media.delete(s);
      var S = (a = s.creative) == null ? void 0 : a.media_sourcing_spec;
      return (
        o("AdsCreativeMultiMediaLoggingUtils").logMigrateRelatedMediaIntoMSS(
          e.id,
          JSON.stringify(u == null ? void 0 : u.toJS()),
          JSON.stringify(S == null ? void 0 : S.toJS()),
        ),
        s
      );
    }
    function R(e) {
      var t,
        n = (t = e.get("original_video_id")) != null ? t : e.get("video_id");
      return typeof n == "string" && n !== "" ? n : null;
    }
    function L(e, t) {
      var n = new Set(),
        r = [],
        a = e.filter(function (e) {
          var t = e.get("video_id");
          if (typeof t == "string" && t !== "" && n.has(t)) {
            var o = e.get("source"),
              a = typeof o == "string" ? o : null;
            return (r.push({ source: a, video_id: t }), !1);
          }
          return (typeof t == "string" && t !== "" && n.add(t), !0);
        });
      return (
        r.length > 0 &&
          o("AdsCreativeMultiMediaLoggingUtils").logDuplicateVideosDropped(
            t,
            r,
          ),
        a
      );
    }
    function E(e, t, n, a, i, l, c, m, p, _, f) {
      var g, h;
      a === void 0 && (a = "multi_media");
      var y = e,
        C = s(p, _),
        b = r("immutable")
          .List(
            n
              .filter(function (e) {
                return (e == null ? void 0 : e.type) === "video";
              })
              .flatMap(function (n) {
                var s,
                  c,
                  m,
                  p = t.get(n),
                  _ = l == null ? void 0 : l.get(n),
                  g =
                    i == null
                      ? void 0
                      : i.find(function (e) {
                          return e.id === n.id;
                        }),
                  h =
                    (s = e.creative) == null ||
                    (s = s.media_sourcing_spec) == null ||
                    (s = s.videos) == null
                      ? void 0
                      : s.find(function (e) {
                          return (
                            e.get("video_id") === n.id && e.get("source") === a
                          );
                        }),
                  y = ie(g, h),
                  b = g ? d(g) : u(h),
                  v = f == null ? void 0 : f.get(n.id),
                  S =
                    v != null
                      ? o(
                          "AdsUEditorCreativeToolAssetPickerMediaAudienceUtils",
                        ).convertMediaAudienceSpecToPersona(v)
                      : (c =
                            h == null
                              ? void 0
                              : h.get("creative_audience_pairing_persona")) !=
                          null
                        ? c
                        : C,
                  R = Array.from(
                    (m = p == null ? void 0 : p.values()) != null ? m : [],
                  ),
                  L =
                    R.length > 0 &&
                    R.every(function (e) {
                      return (
                        (e == null ? void 0 : e.isAspectRatioChecked) !== !0
                      );
                    });
                if (!p || L) {
                  var E, k;
                  return [
                    r("immutable").Map(
                      babelHelpers.extends(
                        {
                          video_id: n.id,
                          original_video_id: n.id,
                          thumbnail_id:
                            (E = n.asset) == null ||
                            (E = E.preferredThumbnail) == null
                              ? void 0
                              : E.ent_id,
                          thumbnail_url:
                            (k = n.asset) == null ||
                            (k = k.preferredThumbnail) == null
                              ? void 0
                              : k.uri,
                          thumbnail_source: "generated_default",
                          source: a,
                          opt_in_status: y,
                          creative_audience_pairing_persona: S,
                        },
                        b,
                      ),
                    ),
                  ];
                }
                var I = new Set();
                return R.filter(function (e) {
                  return (
                    (e == null ? void 0 : e.asset.type) === "video" &&
                    (e == null ? void 0 : e.isAspectRatioChecked) === !0
                  );
                })
                  .filter(function (e) {
                    var t = String(e == null ? void 0 : e.asset.id);
                    return !(I.has(t) || (I.add(t), t === n.id && _));
                  })
                  .map(function (e) {
                    var t,
                      o,
                      i = e == null ? void 0 : e.asset;
                    return i.type !== "video"
                      ? null
                      : r("immutable").Map(
                          babelHelpers.extends(
                            {
                              video_id: i.id,
                              original_video_id: n.id,
                              thumbnail_id:
                                (t = i.asset) == null ||
                                (t = t.preferredThumbnail) == null
                                  ? void 0
                                  : t.ent_id,
                              thumbnail_url:
                                (o = i.asset) == null ||
                                (o = o.preferredThumbnail) == null
                                  ? void 0
                                  : o.uri,
                              thumbnail_source: "generated_default",
                              source: a,
                              opt_in_status: y,
                              creative_audience_pairing_persona: S,
                            },
                            b,
                          ),
                        );
                  });
              }),
          )
          .filter(Boolean);
      y = D(y, b, a, c, m, p);
      var v = new Set();
      b.forEach(function (e) {
        var t = R(e);
        t != null && v.add(t);
      });
      var S =
        (g =
          (h = e.creative) == null ||
          (h = h.media_sourcing_spec) == null ||
          (h = h.videos) == null
            ? void 0
            : h.filter(function (e) {
                if (e.get("source") === a)
                  return (
                    (c == null ? void 0 : c.type) === "video" &&
                    !v.has(c.id) &&
                    R(e) === c.id
                  );
                if (e.get("source") === "related_media") {
                  var t = R(e);
                  if (t != null && v.has(t)) return !1;
                }
                return !0;
              })) != null
          ? g
          : [];
      if (
        (c == null ? void 0 : c.type) === "video" &&
        c.id != null &&
        !v.has(c.id)
      ) {
        var E = S.find(function (e) {
          return R(e) === (c == null ? void 0 : c.id);
        });
        if (E != null) {
          var I,
            T = S.filter(function (e) {
              return R(e) !== (c == null ? void 0 : c.id);
            });
          y = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.videos.set(
            L(r("immutable").List([E]).concat(b).concat(T), _),
            y,
          );
          var x =
            (I = y.creative) == null ||
            (I = I.object_story_spec) == null ||
            (I = I.video_data) == null
              ? void 0
              : I.video_id;
          if (r("justknobx")._("2061") && a === "multi_media" && x != null) {
            var $,
              P =
                ($ = E.get("video_id")) != null
                  ? $
                  : E.get("original_video_id");
            if (
              r("isTruthy")(P) &&
              typeof P == "string" &&
              P !== x &&
              (o(
                "AdsCreativeMultiMediaLoggingUtils",
              ).logSetPrimaryOSSDuringMSSMutation(_, "video", P, x),
              (y = o("AdsAdgroupSetMediaReducerUtils").getAdsSetVideoIDMutator(
                P,
                m,
                p,
                _,
              )(y)),
              r("justknobx")._("5452"))
            ) {
              var N,
                M =
                  (N = y.creative) == null ||
                  (N = N.object_story_spec) == null ||
                  (N = N.video_data) == null
                    ? void 0
                    : N.video_id;
              M === x &&
                (y = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.video_data.video_id.set(P, y));
            }
          }
          return y;
        }
      }
      return (
        (y = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.videos.set(L(b.concat(S), _), y)),
        k(y, b, a, m, p, _)
      );
    }
    function k(e, t, n, a, i, l) {
      var s,
        u = e,
        c =
          (s = u.creative) == null ||
          (s = s.object_story_spec) == null ||
          (s = s.video_data) == null
            ? void 0
            : s.video_id;
      if (n === "multi_media" && c != null) {
        var d,
          m =
            n === "multi_media" && !r("justknobx")._("3121")
              ? oe(t)
              : t.first(),
          p =
            (d = m == null ? void 0 : m.get("video_id")) != null
              ? d
              : m == null
                ? void 0
                : m.get("original_video_id");
        if (r("isTruthy")(p) && typeof p == "string" && p !== c) {
          var _;
          (o(
            "AdsCreativeMultiMediaLoggingUtils",
          ).logSetPrimaryOSSDuringMSSMutation(l, "video", p, c),
            (u = o("AdsAdgroupSetMediaReducerUtils").getAdsSetVideoIDMutator(
              p,
              a,
              i,
              l,
            )(u)));
          var f = (_ = i.get(l)) == null ? void 0 : _.specPlugin;
          if ((f != null && (u = T(u, f, m)), r("justknobx")._("5452"))) {
            var g,
              h =
                (g = u.creative) == null ||
                (g = g.object_story_spec) == null ||
                (g = g.video_data) == null
                  ? void 0
                  : g.video_id;
            h === c &&
              (u = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.video_id.set(p, u));
          }
        }
      }
      return u;
    }
    function I(e, t) {
      return o(
        "AdsImageGenThumbnailEligibilityUtils",
      ).isGenAIThumbnailOptionsEligible()
        ? typeof e == "string"
          ? e
          : t !== "custom"
            ? "0"
            : null
        : typeof e == "string"
          ? e
          : "0";
    }
    function T(e, t, n) {
      var r = n == null ? void 0 : n.get("thumbnail_source");
      if (
        r !== "generated_selected" &&
        r !== "smart_selected" &&
        r !== "custom"
      )
        return e;
      var a = n == null ? void 0 : n.get("thumbnail_url"),
        i = I(n == null ? void 0 : n.get("thumbnail_id"), r),
        l = o("AdsUEditorAdgroupMutators").setVideoImageURL(
          e,
          t,
          typeof a == "string" ? a : null,
          r,
        );
      return (
        (l = o("AdsUEditorAdgroupMutators").setVideoThumbnailID(l, t, i)),
        l
      );
    }
    function D(e, t, n, a, i, l) {
      if (
        (n === void 0 && (n = "multi_media"),
        n !== "multi_media" || (a == null ? void 0 : a.type) !== "video")
      )
        return e;
      var s = l.get(e.id);
      if (s == null) return e;
      var u = s.specPlugin,
        c = t.find(function (e) {
          return e.get("video_id") === (a == null ? void 0 : a.id);
        }),
        d =
          c != null
            ? c
            : t.find(function (e) {
                return (
                  e.get("original_video_id") === (a == null ? void 0 : a.id)
                );
              }),
        m = d == null ? void 0 : d.get("video_id");
      if (r("isFalsey")(m)) return e;
      var p = i(String(m)),
        _ = p == null ? void 0 : p.preferredThumbnail;
      _ != null && (_ = babelHelpers.extends({}, _, { ent_id: "0" }));
      var f = o("AdsUEditorAdgroupMutators").setVideoID({
        adgroup: e,
        specPathPlugin: u,
        videoID: p == null ? void 0 : p.id,
        preferredThumbnail: _,
      });
      return ((f = T(f, u, d)), f);
    }
    function x(e) {
      var t = e.get("hash");
      if (typeof t == "string" && t !== "") return t;
      var n = e.get("url");
      return typeof n == "string" && n !== "" ? n : null;
    }
    function $(e, t) {
      var n = t,
        o = e == null ? void 0 : e.get("hash"),
        a = e == null ? void 0 : e.get("url");
      return (
        r("isTruthy")(o) && typeof o == "string"
          ? (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.image_hash.set(o, n))
          : (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.image_hash.delete(n)),
        r("isTruthy")(a) && typeof a == "string"
          ? (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.picture.set(a, n))
          : (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.picture.delete(n)),
        n
      );
    }
    function P(e) {
      var t = e.get("source");
      return (
        typeof t == "string" &&
        o(
          "AdsWizardMediaPickerVariantMapUtils",
        ).DERIVED_VARIANT_MSS_SOURCES.has(t)
      );
    }
    function N(e, t) {
      var n = new Set(),
        r = [],
        a = e.filter(function (e) {
          var t = e.get("hash"),
            o = e.get("url"),
            a = typeof t == "string" && t !== "" ? t : null,
            i = typeof o == "string" && o !== "" ? o : null;
          if ((a != null && n.has(a)) || (i != null && n.has(i))) {
            var l = e.get("source"),
              s = typeof l == "string" ? l : null;
            return (r.push({ hash: a, url: i, source: s }), !1);
          }
          return (a != null && n.add(a), i != null && n.add(i), !0);
        });
      return (
        r.length > 0 &&
          o("AdsCreativeMultiMediaLoggingUtils").logDuplicateImagesDropped(
            t,
            r,
          ),
        a
      );
    }
    var M = [
      "text_customizations",
      "destination_customizations",
      "placement_customizations",
    ];
    function w(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = e.get("group_id");
          if (!(typeof n != "string" || n === "")) {
            var r = t.get(n);
            if (r == null) {
              t.set(n, e);
              return;
            }
            var a =
                r.get("opt_in_status") !==
                o("AdsCreativeMediaSourcingSpecTypes.flow")
                  .RelatedMediaOptInStatusSpecType.OPT_OUT,
              i =
                e.get("opt_in_status") !==
                o("AdsCreativeMediaSourcingSpecTypes.flow")
                  .RelatedMediaOptInStatusSpecType.OPT_OUT;
            !a && i && t.set(n, e);
          }
        }),
        t.size === 0
          ? e
          : e.map(function (e) {
              var n = e.get("group_id");
              if (typeof n != "string" || n === "") return e;
              var r = t.get(n);
              if (r == null || r === e) return e;
              var o = e;
              for (var a of M) {
                var i = r.get(a);
                o = i != null ? o.set(a, i) : o.delete(a);
              }
              return o;
            })
      );
    }
    function A(e, t, n, a) {
      var i,
        l,
        s,
        u =
          (i = e.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.link_data) == null
            ? void 0
            : i.image_hash,
        c =
          (l = e.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.link_data) == null
            ? void 0
            : l.picture,
        d = u != null ? u : c;
      if (
        t !== "multi_media" ||
        d == null ||
        ((s = e.creative) == null || (s = s.object_story_spec) == null
          ? void 0
          : s.video_data) != null
      )
        return e;
      var m =
          t === "multi_media" && !r("justknobx")._("3121") ? oe(n) : n.first(),
        p = m != null ? x(m) : null;
      return p == null || p === d
        ? e
        : (o(
            "AdsCreativeMultiMediaLoggingUtils",
          ).logSetPrimaryOSSDuringMSSMutation(a, "image", p, d),
          $(m, e));
    }
    function F(e, t) {
      var n,
        o,
        a =
          (n = e.creative) == null || (n = n.object_story_spec) == null
            ? void 0
            : n.link_data,
        i = a == null ? void 0 : a.image_hash,
        l = a == null ? void 0 : a.picture,
        s = i != null ? i : l,
        u =
          (o = e.creative) == null || (o = o.media_sourcing_spec) == null
            ? void 0
            : o.images;
      if (t == null || s == null || s === t || u == null) return e;
      var c = u.findIndex(function (e) {
        return e.get("source") === "multi_media" && x(e) === t;
      });
      if (c === -1) return e;
      var d = u
        .update(c, function (e) {
          return e
            .set("hash", i != null ? i : null)
            .set("url", i != null ? null : l)
            .delete("image_crops")
            .delete("gen_ai_metadata");
        })
        .filter(function (e) {
          return !P(e) || e.get("original_image_hash") !== t;
        });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.images.set(d, e);
    }
    function O(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = e.get("hash");
          typeof n == "string" && n !== "" && t.set(n, e);
        }),
        t
      );
    }
    function B(e, t, n, r) {
      if (e.get("source") === t) return !1;
      if (r != null && P(e)) {
        var o = e.get("original_image_hash");
        if (typeof o == "string" && r.has(o)) return !1;
      }
      if (e.get("source") === "related_media") {
        var a = x(e);
        if (a != null && n.has(a)) return !1;
      }
      return !0;
    }
    function W(e) {
      var t = {},
        n = !1;
      if (
        (o("AdsWizardMediaPickerMultiUploadUtils")
          .PSEUDO_CROP_IMAGE_CROP_KEYS.entrySeq()
          .forEach(function (r) {
            var o,
              a,
              i = r[0],
              l = r[1],
              s = (o = e.get(l)) == null ? void 0 : o.asset,
              u =
                (s == null ? void 0 : s.type) === "image"
                  ? s == null || (a = s.crops) == null
                    ? void 0
                    : a[i]
                  : null;
            u != null && ((t[i] = u), (n = !0));
          }),
        !n)
      )
        return null;
      var r = o("AdsWizardMediaPickerMultiUploadUtils")
          .PSEUDO_CROP_IMAGE_CROP_KEYS.valueSeq()
          .some(function (t) {
            var n = e.get(t);
            return n != null && n.isManualCrops !== !1;
          }),
        a =
          o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForImageSmartCrop(
            "silent",
          ) && !r
            ? "smart_crop"
            : "manual";
      return { type: a, crop_spec: t };
    }
    function q(e, t) {
      if (t == null) return e;
      var n = new Map(e.boxesByCropKey);
      return (
        o("AdsWizardMediaPickerMultiUploadUtils")
          .PSEUDO_CROP_IMAGE_CROP_KEYS.entrySeq()
          .forEach(function (r) {
            var o = r[0],
              a = r[1],
              i = t.get(a);
            i != null &&
              (i.isOriginalSelected || i.isManualCrops) &&
              !e.manualCropKeys.has(o) &&
              n.delete(o);
          }),
        babelHelpers.extends({}, e, { boxesByCropKey: n })
      );
    }
    function U(e, t, n) {
      if (t == null) return e;
      var r = q(t, n),
        a = o(
          "AdsUEditorAdgroupMultiMediaVariantSpecUtils",
        ).overlayVariantCropSpec(e == null ? void 0 : e.crop_spec, r);
      return a == null
        ? null
        : {
            crop_spec: a,
            type: o(
              "AdsUEditorAdgroupMultiMediaVariantSpecUtils",
            ).resolveVariantCropType(
              r,
              (e == null ? void 0 : e.type) === "manual",
            ),
          };
    }
    function V(e, t, n, r, a) {
      var i,
        l = e != null && e !== "" ? e : t,
        s = l != null ? (n == null ? void 0 : n.get(l)) : null;
      return s != null
        ? o(
            "AdsUEditorCreativeToolAssetPickerMediaAudienceUtils",
          ).convertMediaAudienceSpecToPersona(s)
        : (i =
              r == null
                ? void 0
                : r.get("creative_audience_pairing_persona")) != null
          ? i
          : a;
    }
    function H(e, t, n, a, i, l, c, m, p, _, f, g, h) {
      var y, C, b, v;
      a === void 0 && (a = "multi_media");
      var S = e,
        R = s(_, l),
        L = w(
          r("immutable")
            .List(
              n
                .filter(function (e) {
                  return (e == null ? void 0 : e.type) === "image";
                })
                .map(function (n) {
                  var l,
                    s,
                    _ = t.get(n),
                    f = n.id,
                    g = o("AdsImageIDUtils").getImageHashFromID(f),
                    y =
                      (l = n.asset) == null || (l = l.getValue()) == null
                        ? void 0
                        : l.url;
                  if (g == null && y == null) return null;
                  var C =
                      i == null
                        ? void 0
                        : i.find(function (e) {
                            return g != null && g !== ""
                              ? e.id === g
                              : y != null && e.id === y;
                          }),
                    b =
                      (s = e.creative) == null ||
                      (s = s.media_sourcing_spec) == null ||
                      (s = s.images) == null
                        ? void 0
                        : s.find(function (e) {
                            return (
                              e.get("source") === a &&
                              (g != null && g !== ""
                                ? e.get("hash") === g
                                : y != null && e.get("url") === y)
                            );
                          }),
                    v = C ? d(C) : u(b),
                    S = ie(C, b),
                    L = b == null ? void 0 : b.get("url"),
                    E = L != null && L !== "" ? L : y,
                    k = V(g, y, p, b, R),
                    I = babelHelpers.extends(
                      {
                        hash: g,
                        url:
                          f instanceof o("AdsImageIDClasses").AdsExternalImageID
                            ? E
                            : null,
                        source: a,
                        opt_in_status: S,
                        creative_audience_pairing_persona: k,
                      },
                      v,
                    ),
                    T = c == null ? void 0 : c.get(n);
                  T != null
                    ? ((I.group_id = T.group_id),
                      (I.variant_types = T.variant_types))
                    : g != null &&
                      m != null &&
                      m.has(g) &&
                      ((I.group_id = null), (I.variant_types = null));
                  var D = o(
                      "AdsUEditorAdgroupMultiMediaVariantSpecUtils",
                    ).getVariantCropsForSeed(h, g),
                    x = U(_ ? W(_) : null, D, _);
                  return x == null
                    ? r("immutable").Map(I)
                    : r("immutable").Map(
                        babelHelpers.extends({}, I, { image_crops: [x] }),
                      );
                }),
            )
            .filter(Boolean),
        ),
        E = new Map();
      (y = e.creative) == null ||
        (y = y.media_sourcing_spec) == null ||
        (y = y.images) == null ||
        y.forEach(function (e) {
          var t = e.get("hash"),
            n = e.get("gen_ai_metadata");
          typeof t == "string" && n != null && E.set(t, n);
        });
      var k = L.map(function (e) {
          var t = e.get("hash");
          if (typeof t != "string") return e;
          if (f != null && f.has(t))
            return e.set("gen_ai_metadata", {
              adoption_entrypoint: g != null ? g : null,
            });
          var n = E.get(t);
          return n != null ? e.set("gen_ai_metadata", n) : e;
        }),
        I = new Set();
      k.forEach(function (e) {
        var t = x(e);
        t != null && I.add(t);
      });
      var T =
          h != null &&
          a === "multi_media" &&
          o(
            "AdsWizardMediaPickerImageVariantUtils",
          ).isEligibleForImageRecompOnAM("silent"),
        D = T
          ? new Set((C = h == null ? void 0 : h.keys()) != null ? C : [])
          : null,
        $ =
          (b =
            (v = e.creative) == null ||
            (v = v.media_sourcing_spec) == null ||
            (v = v.images) == null
              ? void 0
              : v.filter(function (e) {
                  return B(e, a, I, D);
                })) != null
            ? b
            : [],
        P = N(k.concat($), l),
        M = T
          ? o(
              "AdsUEditorAdgroupMultiMediaVariantSpecUtils",
            ).buildVariantImageSpecs(h, O(k))
          : r("immutable").List();
      return (
        (S = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.images.set(P.concat(M), S)),
        (S = A(S, a, k, l)),
        S
      );
    }
    function G(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s = (t = e.creative) == null ? void 0 : t.media_sourcing_spec;
      if (s == null) return !1;
      var u = (n = (r = s.bodies) == null ? void 0 : r.size) != null ? n : 0,
        c =
          (o = (a = s.descriptions) == null ? void 0 : a.size) != null ? o : 0,
        d = (i = (l = s.titles) == null ? void 0 : l.size) != null ? i : 0;
      return u > 1 || c > 1 || d > 1;
    }
    function z(e) {
      var t,
        n,
        a,
        i = e;
      return (
        o("AdsCreativeFlexAssetUtils").hasMultiMediaAssetsOfSource(
          e,
          "multi_media",
        ) && (i = G(e) ? J(e) : Y(e)),
        (i =
          (t = r("AdsAdgroupRecordAccessors").creative) == null ||
          (t = t.media_sourcing_spec) == null ||
          (t = t.titles) == null
            ? void 0
            : t.delete(i)),
        (i =
          (n = r("AdsAdgroupRecordAccessors").creative) == null ||
          (n = n.media_sourcing_spec) == null ||
          (n = n.bodies) == null
            ? void 0
            : n.delete(i)),
        (i =
          (a = r("AdsAdgroupRecordAccessors").creative) == null ||
          (a = a.media_sourcing_spec) == null ||
          (a = a.descriptions) == null
            ? void 0
            : a.delete(i)),
        i
      );
    }
    function j(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.media_sourcing_spec;
      if (n == null) return e;
      var a = n.images,
        i = n.videos,
        l =
          a != null
            ? a.map(function (e) {
                return e.delete("destination_customizations");
              })
            : o("immutable").List(),
        s =
          i != null
            ? i.map(function (e) {
                return e.delete("destination_customizations");
              })
            : o("immutable").List();
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec.images.set(
          l,
        ),
        r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec.videos.set(
          s,
        ),
      )(e);
    }
    function K(e, t) {
      var n,
        o,
        a = !!(
          (n = e.creative) != null &&
          (n = n.media_sourcing_spec) != null &&
          n.images
        ),
        i = !!(
          (o = e.creative) != null &&
          (o = o.media_sourcing_spec) != null &&
          o.videos
        ),
        l = t === "multi_media",
        s = e;
      if (a) {
        var u,
          c =
            (u = e.creative) == null ||
            (u = u.media_sourcing_spec) == null ||
            (u = u.images) == null
              ? void 0
              : u.filter(function (e) {
                  return e.get("source") !== t && !(l && P(e));
                });
        c &&
          (s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.images.set(c, s));
      }
      if (i) {
        var d,
          m =
            (d = e.creative) == null ||
            (d = d.media_sourcing_spec) == null ||
            (d = d.videos) == null
              ? void 0
              : d.filter(function (e) {
                  return e.get("source") !== t;
                });
        m &&
          (s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.videos.set(m, s));
      }
      return s;
    }
    function Q(e) {
      var t = z(e);
      return ((t = K(t, "multi_media")), t);
    }
    function X(e) {
      var t,
        n,
        a,
        i = (t = e.creative) == null ? void 0 : t.media_sourcing_spec;
      if (i == null) return e;
      var l =
          o("AdsMultiMediaUtils").isPrimaryMediaDestinationCustomizationEnabled(
            "silent",
          ),
        s =
          o("AdsMultiMediaUtils").isPrimaryMediaTextCustomizationEnabled(
            "silent",
          ),
        u =
          (n = e.creative) == null || (n = n.object_story_spec) == null
            ? void 0
            : n.link_data,
        c = u == null ? void 0 : u.image_hash,
        d = u == null ? void 0 : u.picture,
        m =
          (a = e.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.video_data) == null
            ? void 0
            : a.video_id,
        p = i.images,
        _ = i.videos,
        f = c != null || d != null,
        g =
          p != null && f
            ? p.map(function (e) {
                var t = c != null && e.get("hash") === c,
                  n = d != null && e.get("hash") == null && e.get("url") === d,
                  r = c != null && e.get("original_image_hash") === c;
                if (t || n || r) {
                  var o = s ? e : e.delete("text_customizations");
                  return l ? o : o.delete("destination_customizations");
                }
                return e;
              })
            : p != null
              ? p
              : o("immutable").List(),
        h =
          _ != null && m != null
            ? _.map(function (e) {
                if (
                  e.get("video_id") === m ||
                  e.get("original_video_id") === m
                ) {
                  var t = s ? e : e.delete("text_customizations");
                  return l ? t : t.delete("destination_customizations");
                }
                return e;
              })
            : _ != null
              ? _
              : o("immutable").List();
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec.images.set(
          g,
        ),
        r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec.videos.set(
          h,
        ),
      )(e);
    }
    function Y(e) {
      var t,
        n,
        o,
        a,
        i,
        l = (t = e.creative) == null ? void 0 : t.media_sourcing_spec;
      if (l == null) return e;
      var s = l.bodies,
        u = l.descriptions,
        c = l.titles,
        d = (n = s == null ? void 0 : s.size) != null ? n : 0,
        m = (o = u == null ? void 0 : u.size) != null ? o : 0,
        p = (a = c == null ? void 0 : c.size) != null ? a : 0,
        _ = d <= 1 && m <= 1 && p <= 1;
      if (!_) return e;
      var f = e,
        g =
          ((i = e.creative) == null || (i = i.object_story_spec) == null
            ? void 0
            : i.video_data) != null;
      if (d === 1) {
        var h,
          y = s == null || (h = s.get(0)) == null ? void 0 : h.get("text");
        y != null &&
          typeof y == "string" &&
          (f = g
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.message.set(y, f)
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.message.set(y, f));
      }
      if (m === 1) {
        var C,
          b = u == null || (C = u.get(0)) == null ? void 0 : C.get("text");
        b != null &&
          typeof b == "string" &&
          (f = g
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.link_description.set(b, f)
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.description.set(b, f));
      }
      if (p === 1) {
        var v,
          S = c == null || (v = c.get(0)) == null ? void 0 : v.get("text");
        S != null &&
          typeof S == "string" &&
          (f = g
            ? r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.title.set(S, f)
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.name.set(S, f));
      }
      return f;
    }
    function J(e) {
      var t, n, a, i;
      if (
        !r("gkx")("2143") ||
        !G(e) ||
        (o("AdsChildAttachmentsUtils").isCarouselAd(e) &&
          !o("AdsDynamicAdsUtils").isDynamicAd(e))
      )
        return e;
      var l = (t = e.creative) == null ? void 0 : t.media_sourcing_spec,
        s = l == null ? void 0 : l.bodies,
        u = l == null ? void 0 : l.descriptions,
        c = l == null ? void 0 : l.titles,
        d = e,
        m = !1;
      if (
        (((n = s == null ? void 0 : s.size) != null ? n : 0) > 0
          ? ((d = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.bodies.set(s, d)),
            (m = !0))
          : (d = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.bodies.delete(d)),
        ((a = u == null ? void 0 : u.size) != null ? a : 0) > 0
          ? ((d = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.descriptions.set(u, d)),
            (m = !0))
          : (d = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.descriptions.delete(d)),
        ((i = c == null ? void 0 : c.size) != null ? i : 0) > 0
          ? ((d = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.titles.set(c, d)),
            (m = !0))
          : (d = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.titles.delete(d)),
        m)
      ) {
        var p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.optimization_type.get(d);
        p == null &&
          (d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.optimization_type.set(
            r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM,
            d,
          ));
      }
      return d;
    }
    function Z(e) {
      var t,
        n,
        o,
        a = (t = e.creative) == null ? void 0 : t.media_sourcing_spec;
      if (a == null) return e;
      var i = e;
      i = z(i);
      var l = a.images,
        s = a.videos,
        u =
          (n =
            l == null
              ? void 0
              : l.some(function (e) {
                  return (
                    (e == null ? void 0 : e.get("source")) === "related_media"
                  );
                })) != null
            ? n
            : !1,
        c =
          (o =
            s == null
              ? void 0
              : s.some(function (e) {
                  return (
                    (e == null ? void 0 : e.get("source")) === "related_media"
                  );
                })) != null
            ? o
            : !1;
      return u || c
        ? ((i = K(i, "multi_media")),
          u ||
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.media_sourcing_spec.images.delete(i)),
          c ||
            (i = r(
              "AdsAdgroupRecordAccessors",
            ).creative.media_sourcing_spec.videos.delete(i)),
          i)
        : r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec.delete(i);
    }
    function ee(e, t) {
      var n;
      if (t == null) return e;
      var a =
        (n = e.creative) == null || (n = n.media_sourcing_spec) == null
          ? void 0
          : n.images;
      if (a == null) return e;
      var i = new Map();
      a.forEach(function (e) {
        var t = e.get("hash");
        e.get("source") === "multi_media" &&
          typeof t == "string" &&
          t !== "" &&
          i.set(t, e);
      });
      var l = a
        .filter(function (e) {
          return !P(e);
        })
        .map(function (e) {
          var n = e.get("hash");
          if (e.get("source") !== "multi_media" || typeof n != "string")
            return e;
          var r = o(
            "AdsUEditorAdgroupMultiMediaVariantSpecUtils",
          ).getVariantCropsForSeed(t, n);
          if (r == null) return e;
          var a = e.get("image_crops"),
            i = Array.isArray(a) ? a[0] : null,
            l = i != null && typeof i == "object" ? i.crop_spec : null,
            s = o(
              "AdsUEditorAdgroupMultiMediaVariantSpecUtils",
            ).overlayVariantCropSpec(
              l != null && typeof l == "object" ? l : null,
              r,
            );
          if (s == null) return e.delete("image_crops");
          var u = i != null && typeof i == "object" && i.type === "manual";
          return e.set("image_crops", [
            {
              crop_spec: s,
              type: o(
                "AdsUEditorAdgroupMultiMediaVariantSpecUtils",
              ).resolveVariantCropType(r, u),
            },
          ]);
        });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.images.set(
        l.concat(
          o(
            "AdsUEditorAdgroupMultiMediaVariantSpecUtils",
          ).buildVariantImageSpecs(t, i),
        ),
        e,
      );
    }
    function te(e, t, n) {
      var a, i, l;
      if (t == null) return e;
      var s = (a = e.creative) == null ? void 0 : a.media_sourcing_spec,
        u =
          (i = s == null ? void 0 : s.images) != null
            ? i
            : o("immutable").List(),
        c =
          (l = s == null ? void 0 : s.videos) != null
            ? l
            : o("immutable").List(),
        d =
          (t == null ? void 0 : t.type) === "image"
            ? u.filter(function (e) {
                if (e.get("source") !== n) return !0;
                var r = t == null ? void 0 : t.imageID;
                return r instanceof
                  o("AdsImageIDClasses").AdsExternalImageWithHashID
                  ? r.getHash() !== e.get("hash")
                  : r instanceof o("AdsImageIDClasses").AdsExternalImageID
                    ? r.getUrl() !== e.get("url")
                    : r instanceof o("AdsImageIDClasses").AdsAccountImageID ||
                        r instanceof
                          o("AdsImageIDClasses").AdsBusinessImageID ||
                        r instanceof o("AdsImageIDClasses").AdsStickerImageID
                      ? r.getHash() !== e.get("hash")
                      : r instanceof
                          o("AdsImageIDClasses").AdsShutterstockImageID
                        ? o("ShutterstockImageUtils").idToURL(
                            r.getShutterstockImageID(),
                          ) !== e.get("url")
                        : r instanceof o("AdsImageIDClasses").AdsImageID
                          ? r.getSignature() !== e.get("hash") &&
                            r.getSignature() !== e.get("url")
                          : !0;
              })
            : u,
        m =
          (t == null ? void 0 : t.type) === "video"
            ? c.filter(function (e) {
                return e.get("source") !== n
                  ? !0
                  : e.get("video_id") !== (t == null ? void 0 : t.video.id) &&
                      e.get("original_video_id") !==
                        (t == null ? void 0 : t.video.id);
              })
            : c;
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec.images.set(
          d,
        ),
        r("AdsAdgroupRecordAccessors").creative.media_sourcing_spec.videos.set(
          m,
        ),
      )(e);
    }
    function ne(e, t, a, i) {
      var l,
        s,
        u,
        c,
        d =
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.images.get(e)) != null
            ? l
            : r("immutable").List(),
        m =
          (s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.videos.get(e)) != null
            ? s
            : r("immutable").List(),
        p = d.filter(function (e) {
          return e.get("source") === "multi_media";
        }),
        _ = m.filter(function (e) {
          return e.get("source") === "multi_media";
        }),
        f = p.some(function (e) {
          return (
            e.get("opt_in_status") !==
            o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_OUT
          );
        }),
        g = _.some(function (e) {
          return (
            e.get("opt_in_status") !==
            o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_OUT
          );
        }),
        h =
          (u = e.creative) == null ||
          (u = u.object_story_spec) == null ||
          (u = u.link_data) == null
            ? void 0
            : u.image_hash,
        y =
          (c = e.creative) == null ||
          (c = c.object_story_spec) == null ||
          (c = c.video_data) == null
            ? void 0
            : c.video_id,
        C = e;
      if (h != null && !f && g) {
        var b,
          v = oe(_),
          S =
            (b = v == null ? void 0 : v.get("video_id")) != null
              ? b
              : v == null
                ? void 0
                : v.get("original_video_id");
        if (r("isTruthy")(S) && typeof S == "string") {
          if (
            ((C = o("AdsAdgroupSetMediaReducerUtils").getAdsSetVideoIDMutator(
              S,
              t,
              a,
              i,
            )(C)),
            r("justknobx")._("5452"))
          ) {
            var R,
              L =
                (R = C.creative) == null ||
                (R = R.object_story_spec) == null ||
                (R = R.video_data) == null
                  ? void 0
                  : R.video_id;
            L == null &&
              (C = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.video_id.set(S, C));
          }
          var E = v == null ? void 0 : v.get("thumbnail_url");
          r("isTruthy")(E) &&
            typeof E == "string" &&
            (C = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.image_url.set(E, C));
          var k = v == null ? void 0 : v.get("thumbnail_id");
          r("isTruthy")(k) &&
            typeof k == "string" &&
            (C = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.video_thumbnail_id.set(
              k,
              C,
            ));
          var I = v == null ? void 0 : v.get("thumbnail_source"),
            T =
              typeof I == "string"
                ? o("enumUtils").coerce(I, r("VideoThumbnailSource"))
                : void 0;
          C = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.video_thumbnail_source.set(
            T != null ? T : "generated_default",
            C,
          );
        }
      }
      if (y != null && !g && f) {
        var D = oe(p),
          P = D != null ? x(D) : null;
        if (P != null) {
          var N,
            M = a.get(i);
          if (M != null) {
            var w,
              A = M.campaign,
              F = M.campaignGroup,
              O = M.specPlugin,
              B =
                ((w = C.creative) == null ? void 0 : w.object_type) === "VIDEO";
            if (B) {
              var W = n("AdsMediaFormatMutators"),
                q = n("AdsMediaFormat"),
                U = n("AdsODAXUtils"),
                V = n("AdsAPICampaignRecordUtils");
              C = W.setMediaFormat(
                q.IMAGE,
                C,
                O,
                U.maybeTranslateObjective(
                  F.objective,
                  V.getPromotedObjectType(F.objective, A),
                  A.optimization_goal,
                ),
              );
            }
          }
          ((N = C.creative) == null ? void 0 : N.object_type) !== "VIDEO" &&
            (C = $(D, C));
        }
      }
      return C;
    }
    function re(e) {
      var t,
        n,
        a =
          (t = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.images.get(e)) != null
            ? t
            : r("immutable").List(),
        i =
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.media_sourcing_spec.videos.get(e)) != null
            ? n
            : r("immutable").List(),
        l = a.filter(function (e) {
          return e.get("source") === "multi_media";
        }),
        s = i.filter(function (e) {
          return e.get("source") === "multi_media";
        }),
        u = l.concat(s).some(function (e) {
          return (
            e.get("opt_in_status") !==
            o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_OUT
          );
        });
      if (u || (l.size === 0 && s.size === 0)) return e;
      var c = e,
        d = l.first(),
        m = s.first();
      if (d != null) {
        var p = a.indexOf(d),
          _ = d.set(
            "opt_in_status",
            o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_IN,
          ),
          f = a.set(p, _);
        c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.images.set(f, c);
      } else if (m != null) {
        var g = i.indexOf(m),
          h = m.set(
            "opt_in_status",
            o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_IN,
          ),
          y = i.set(g, h);
        c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.videos.set(y, c);
      }
      return c;
    }
    function oe(e) {
      var t;
      return (t = e.find(function (e) {
        return (
          e.get("opt_in_status") !==
          o("AdsCreativeMediaSourcingSpecTypes.flow")
            .RelatedMediaOptInStatusSpecType.OPT_OUT
        );
      })) != null
        ? t
        : e.first();
    }
    function ae(t, n, o) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d = (a = n.get(o)) == null ? void 0 : a.campaign;
      if (!e(d)) return t;
      var m = (i = t.creative) == null ? void 0 : i.media_sourcing_spec;
      if (m == null) return t;
      var p = (l = m.images) != null ? l : r("immutable").List(),
        _ = (s = m.videos) != null ? s : r("immutable").List(),
        f =
          (u = t.creative) == null ||
          (u = u.object_story_spec) == null ||
          (u = u.link_data) == null
            ? void 0
            : u.image_hash,
        g =
          (c = t.creative) == null ||
          (c = c.object_story_spec) == null ||
          (c = c.video_data) == null
            ? void 0
            : c.video_id,
        h =
          f != null
            ? p.find(function (e) {
                return x(e) === f;
              })
            : null,
        y =
          g != null
            ? _.find(function (e) {
                return R(e) === g;
              })
            : null,
        C = h != null ? h : y;
      if (C == null) return t;
      var b = C.get("creative_audience_pairing_persona");
      if (b == null) return t;
      var v = t,
        S = function (t) {
          return b != null && typeof b.get == "function"
            ? b.get(t)
            : typeof b == "object"
              ? b[t]
              : void 0;
        },
        L = S("age_min"),
        E = S("age_max"),
        k = S("genders");
      (typeof L == "number" &&
        (v = r(
          "AdsAdgroupRecordAccessors",
        ).creative_audience_pairing_persona.age_min.set(L, v)),
        typeof E == "number" &&
          (v = r(
            "AdsAdgroupRecordAccessors",
          ).creative_audience_pairing_persona.age_max.set(E, v)));
      var I = null;
      return (
        r("immutable").List.isList(k)
          ? (I = k)
          : Array.isArray(k) && (I = r("immutable").List(k)),
        I != null &&
          (v = r(
            "AdsAdgroupRecordAccessors",
          ).creative_audience_pairing_persona.genders.set(I, v)),
        v
      );
    }
    function ie(e, t) {
      if (e != null)
        return e.selection !==
          o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_OUT
          ? o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_IN
          : o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_OUT;
      if (t != null)
        return t.get("opt_in_status") !== "opt_out"
          ? o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_IN
          : o("AdsCreativeMediaSourcingSpecTypes.flow")
              .RelatedMediaOptInStatusSpecType.OPT_OUT;
    }
    function le(e, t) {
      return e == null ? null : r("immutable").Map.isMap(e) ? e.get(t) : e[t];
    }
    function se(e) {
      return e.some(function (e) {
        var t = le(e, "asset_source"),
          n = typeof t == "string" ? t : null;
        return !o(
          "AdsTextGenerationGetSourceUtils",
        ).getIsTextVariationsAssetSource(n);
      });
    }
    function ue(e, t) {
      return e === "bodies"
        ? r("immutable").Map({ text: t != null ? t : "" })
        : r("immutable").Map({
            text: "",
            asset_source: "TEXT_FIRST_MANUAL_OPTION",
          });
    }
    function ce(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s = "MANUAL_ADD";
      e.status ===
      o("AdsTextGenerationTypes").TextGenSuggestionStatus.DEFAULT_ADDED
        ? (s = "DEFAULT_ADD")
        : e.status ===
            o("AdsTextGenerationTypes").TextGenSuggestionStatus.STICKY_ADDED &&
          (s = "STICKY_ADD");
      var u = {
        action_type: s,
        asset_source: o(
          "AdsTextGenerationReducerUtils",
        ).getAssetSourceForSuggestion(e, !1),
        language: (t = e.language) != null ? t : void 0,
        target_audience:
          (n = (r = e.persona) == null ? void 0 : r.name) != null ? n : void 0,
        text: (a = e.editedText) != null ? a : e.text,
        text_gen_input_text: (i = e.input) != null ? i : void 0,
        text_gen_original_text: (l = e.text) != null ? l : void 0,
        uuid: e.id,
      };
      return u;
    }
    function de(e, t, n) {
      var a = function (n) {
          var t = le(e, n);
          return typeof t == "string" ? t : null;
        },
        i = a("text"),
        l = a("uuid"),
        s = a("text_gen_original_text"),
        u = a("text_gen_input_text"),
        c = a("asset_source"),
        d = a("action_type"),
        m = a("language"),
        p = a("target_audience"),
        _ = !o(
          "AdsTextGenerationGetSourceUtils",
        ).getIsTextVariationsAssetSource(c);
      if (_ || i == null) return null;
      var f = o(
        "AdsTextGenerationGetSourceUtils",
      ).getCreativeTextSourceFromAssetSourceSuggestion(c);
      return f == null
        ? null
        : {
            fetchTime: -1,
            field: t,
            id: l != null ? l : r("uuidv4")().toString(),
            input: u != null ? u : "",
            source: f,
            status:
              d === "DEFAULT_ADD"
                ? o("AdsTextGenerationTypes").TextGenSuggestionStatus
                    .DEFAULT_ADDED
                : d === "STICKY_ADD"
                  ? o("AdsTextGenerationTypes").TextGenSuggestionStatus
                      .STICKY_ADDED
                  : o("AdsTextGenerationTypes").TextGenSuggestionStatus.ADDED,
            text: s != null ? s : i,
            editedText: i,
            language: m != null ? m : void 0,
            index: n,
            persona: p != null ? { name: p } : void 0,
          };
    }
    function me(e, t) {
      var n,
        r,
        o =
          t === "bodies"
            ? (n = e.creative) == null || (n = n.media_sourcing_spec) == null
              ? void 0
              : n.bodies
            : (r = e.creative) == null || (r = r.media_sourcing_spec) == null
              ? void 0
              : r.titles;
      if (o == null) return [];
      var a = [];
      try {
        var i = Array.isArray(o) ? o : o.toArray();
        i.forEach(function (e, n) {
          if (e != null) {
            var r = de(e, t, n);
            r != null && a.push(r);
          }
        });
      } catch (e) {}
      return a;
    }
    function pe(e, t) {
      var n = ce(t);
      if (t.field === "bodies") {
        var o,
          a =
            (o = e.creative) == null || (o = o.media_sourcing_spec) == null
              ? void 0
              : o.bodies,
          i;
        if (
          (a == null
            ? (i = r("immutable").List())
            : Array.isArray(a)
              ? (i = r("immutable").List(
                  a.map(function (e) {
                    return r("immutable").Map(e);
                  }),
                ))
              : (i = a),
          i.size === 0 || !se(i))
        ) {
          var l = ue("bodies", t.input);
          i = i.unshift(l);
        }
        var s = i.findIndex(function (e) {
            return le(e, "uuid") === t.id || le(e, "text") === t.text;
          }),
          u;
        if (s >= 0) {
          var c = i.get(s),
            d =
              c != null
                ? c.merge(r("immutable").Map(n))
                : r("immutable").Map(n);
          u = i.set(s, d);
        } else u = i.push(r("immutable").Map(n));
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.bodies.set(u, e);
      } else if (t.field === "titles") {
        var m,
          p =
            (m = e.creative) == null || (m = m.media_sourcing_spec) == null
              ? void 0
              : m.titles,
          _;
        if (
          (p == null
            ? (_ = r("immutable").List())
            : Array.isArray(p)
              ? (_ = r("immutable").List(
                  p.map(function (e) {
                    return r("immutable").Map(e);
                  }),
                ))
              : (_ = p),
          _.size === 0 || !se(_))
        ) {
          var f = ue("titles", null);
          _ = _.unshift(f);
        }
        var g = _.findIndex(function (e) {
            return le(e, "uuid") === t.id || le(e, "text") === t.text;
          }),
          h;
        if (g >= 0) {
          var y = _.get(g),
            C =
              y != null
                ? y.merge(r("immutable").Map(n))
                : r("immutable").Map(n);
          h = _.set(g, C);
        } else h = _.push(r("immutable").Map(n));
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.titles.set(h, e);
      }
      return e;
    }
    function _e(e, t) {
      var n = fe(e, t);
      if (n == null) return e;
      if (t.field === "bodies") {
        var o,
          a =
            (o = e.creative) == null || (o = o.media_sourcing_spec) == null
              ? void 0
              : o.bodies;
        if (a == null) return e;
        var i;
        Array.isArray(a)
          ? (i = r("immutable").List(
              a.map(function (e) {
                return r("immutable").Map(e);
              }),
            ))
          : (i = a);
        var l = i.delete(n);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.bodies.set(l, e);
      } else if (t.field === "titles") {
        var s,
          u =
            (s = e.creative) == null || (s = s.media_sourcing_spec) == null
              ? void 0
              : s.titles;
        if (u == null) return e;
        var c;
        Array.isArray(u)
          ? (c = r("immutable").List(
              u.map(function (e) {
                return r("immutable").Map(e);
              }),
            ))
          : (c = u);
        var d = c.delete(n);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.media_sourcing_spec.titles.set(d, e);
      }
      return e;
    }
    function fe(e, t) {
      var n,
        r,
        o = t.field,
        a =
          o === "bodies"
            ? (n = e.creative) == null || (n = n.media_sourcing_spec) == null
              ? void 0
              : n.bodies
            : (r = e.creative) == null || (r = r.media_sourcing_spec) == null
              ? void 0
              : r.titles;
      if (a == null) return null;
      for (
        var i = Array.isArray(a) ? a : a.toArray(), l = 0;
        l < i.length;
        l++
      ) {
        var s = i[l];
        if (s != null) {
          var u = le(s, "uuid"),
            c = le(s, "text");
          if (u === t.id || c === t.text) return l;
        }
      }
      return null;
    }
    function ge(e, t) {
      var n, o;
      if (t.length === 0) return e;
      var a =
          (n =
            (o = e.creative) == null || (o = o.media_sourcing_spec) == null
              ? void 0
              : o.images) != null
            ? n
            : r("immutable").List(),
        i = r("immutable").List(
          t.map(function (e) {
            return r("immutable").Map({
              hash: e,
              source: "replace_media_text",
            });
          }),
        );
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.images.set(a.concat(i), e);
    }
    function he(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.media_sourcing_spec) == null
            ? void 0
            : t.images;
      if (n == null || n.size === 0) return e;
      var o = n.filter(function (e) {
        return e.get("source") !== "replace_media_text";
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.media_sourcing_spec.images.set(o, e);
    }
    ((l.maySetMultiTextInMSSForMultiMedia = y),
      (l.maySetMultiTextInMSSForMultiMediaAtIndex = C),
      (l.getRawIGVideoAssetIDsToExclude = b),
      (l.maySetMSSSpecForMultiMedia = v),
      (l.mayMigrateRelatedMediaIntoMSS = S),
      (l.reconcileVariantGroupCustomizations = w),
      (l.maySyncPrimaryMSSImageWithOSS = F),
      (l.isMSSMultiText = G),
      (l.mayDeleteMultiTextFromMediaSourcingSpec = z),
      (l.mayDeleteDestinationCustomizationsFromMediaSourcingSpec = j),
      (l.mayDeleteMediaSourceFromMediaSourcingSpec = K),
      (l.mayDeleteMultiMediaContentFromMSS = Q),
      (l.mayDeleteTextAndDestinationCustomizationsForPrimaryMedia = X),
      (l.copySingleMSSTextToOSS = Y),
      (l.copyMSSMultiTextToAFS = J),
      (l.mayClearMediaSourcingSpec = Z),
      (l.maySetMediaSourcingSpecVariants = ee),
      (l.mayDeleteMediaFromMediaSourcingSpec = te),
      (l.getTextGenSuggestionsFromMSS = me),
      (l.setMediaSourcingSpecTextGenFields = pe),
      (l.removeFromMediaSourcingSpec = _e),
      (l.getSuggestionIndexFromMSS = fe),
      (l.addReplaceMediaTextImagesToMSS = ge),
      (l.removeReplaceMediaTextImagesFromMSS = he));
  },
  98,
);
