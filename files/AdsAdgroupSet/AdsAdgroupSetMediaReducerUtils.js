__d(
  "AdsAdgroupSetMediaReducerUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsAdgroupMMTMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedUtils",
    "AdsCreativeFlexSpecCheckUtils",
    "AdsDCOImageCropDoFUtils",
    "AdsInteractiveComponentConstants",
    "AdsMediaFormatMutators",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsObjectTypeUtils",
    "AdsPacRecompositionSpecMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupAudiosAdsMutators",
    "AdsUEditorAdgroupBadges",
    "AdsUEditorAdgroupDegreesOfFreedomMutators",
    "AdsUEditorAdgroupEmailCaptureMutators",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupPromoAdMutatorUtils",
    "AdsUEditorAdgroupPromoAdMutators",
    "AdsUEditorAdgroupSelectedVideoIDMutator",
    "AdsUEditorAdgroupVideoVariationMutators",
    "AdsUEditorBaseAssetPickerUtils",
    "CapaUtils",
    "GenAISpecDeleter",
    "adsInteractiveComponentsUtils",
    "immutable",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, a, i, l, c, d, m, p, _) {
      return function (e) {
        var c = e,
          d = i.get(l);
        if (d == null) return e;
        var f = d.campaign,
          g = d.campaignGroup,
          h = d.specPlugin,
          y = r("AdsAdgroupSemanticFields").pageID.get(h, e),
          C = r("isTruthy")(y) ? a(y) : null,
          b = o("AdsODAXUtils").maybeTranslateObjective(
            g.objective,
            o("AdsAPICampaignRecordUtils").getPromotedObjectType(
              g.objective,
              f,
            ),
            f.optimization_goal,
          ),
          v = t.adgroupIDToImageDataMap ? t.adgroupIDToImageDataMap.get(l) : t;
        return o("AdsMutators").chain(
          function (e) {
            return s(n, e, t, a, i, l);
          },
          function (e) {
            return o(
              "AdsUEditorAdgroupOnsiteDestinationsMutators",
            ).maybeUpdateOnsiteDestinationsForImageOrVideo(
              e,
              f,
              h,
              t.imageURL,
              t.imageHash,
              null,
              _,
              p,
              t.adgroupIDs,
            );
          },
          function (e) {
            var t =
              !o("AdsAdgroupTypeUtils").isVideoAd(e) &&
              !o("AdsObjectTypeUtils").isTemplateCreative(e);
            return t
              ? e
              : o("AdsMediaFormatMutators").setMediaFormat("IMAGE", e, h, b);
          },
          function (e) {
            return v != null
              ? o("AdsUEditorAdgroupImageMutators").setImage(
                  n,
                  v.imageHash,
                  v.imageURL,
                  v.platform,
                  v.thumbnailURL,
                  v.thumbnailHeight,
                  v.thumbnailWidth,
                  e,
                  h,
                  C,
                  v.imageCrops,
                )
              : e;
          },
          function (e) {
            var t = o("AdsDCOImageCropDoFUtils").hasDoFSpecWithFAMToggleExpType(
              e,
            );
            return t
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.delete(e)
              : e;
          },
          function (e) {
            return m != null
              ? o(
                  "AdsUEditorAdgroupPromoAdMutators",
                ).updatePromoAdForDefaultOptIn(
                  { adgroup: e, campaignGroup: g, campaign: f },
                  n,
                  h,
                  m,
                  o("AdsUEditorAdgroupPromoAdMutatorUtils")
                    .PromoAdDefaultOptInCallSite.SET_MEDIA,
                )
              : e;
          },
          function (e) {
            return m != null
              ? o(
                  "AdsUEditorAdgroupEmailCaptureMutators",
                ).updateEmailCaptureForDefaultOptIn(
                  { adgroup: e, campaignGroup: g, campaign: f },
                  n,
                  m,
                  o("AdsUEditorAdgroupPromoAdMutatorUtils")
                    .PromoAdDefaultOptInCallSite.SET_MEDIA,
                )
              : e;
          },
          function (e) {
            return o(
              "AdsAdgroupGenerativeAssetSpecMutators",
            ).mayDeleteGenAIAssetSpecIfBaseAssetChanged(c, e);
          },
          function (e) {
            var t = o("AdsUEditorBaseAssetPickerUtils").getBaseImage(c),
              n = o("AdsUEditorBaseAssetPickerUtils").getBaseImage(e);
            return u(t.imageHash, t.imageURL, n.imageHash, n.imageURL)
              ? e
              : o("AdsPacRecompositionSpecMutators").deletePacRecompositionSpec(
                  e,
                );
          },
          o("AdsUEditorAdgroupSelectedVideoIDMutator")
            .clearSelectedVideoCommitment,
        )(e);
      };
    };
    function s(e, t, n, r, a, i) {
      if (n.shouldResetCustomizationsOnImageChange !== !0) return t;
      var l = o("AdsUEditorBaseAssetPickerUtils").getBaseImage(t);
      if (u(l.imageHash, l.imageURL, n.imageHash, n.imageURL)) return t;
      var s = d(e, i, r, a)(t);
      return o(
        "AdsCreativeFlexSpecCheckUtils",
      ).shouldClearStaleRelatedMediaOnBaseChange(s)
        ? o(
            "AdsUEditorAdgroupMediaSourcingSpecMutators",
          ).mayClearRelatedMediaSpecKeepBaseMedia(s)
        : s;
    }
    function u(e, t, n, r) {
      return e != null ? e === n : t === r;
    }
    var c = function (t, a, i, l, s, u, c, d, m, p) {
        return function (e) {
          var _ = e,
            f = s != null ? s.get(l) : t,
            g = f != null ? a(f) : null,
            h = i.get(l);
          if (h == null) return e;
          var y = h.campaign,
            C = h.campaignGroup,
            b = h.specPlugin,
            v = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
              C.objective,
              y,
            );
          return o("AdsMutators").chain(
            function (e) {
              var t = o("AdsAdgroupTypeUtils").isVideoAd(e);
              return t
                ? e
                : o("AdsMediaFormatMutators").setMediaFormat(
                    "VIDEO",
                    e,
                    b,
                    o("AdsODAXUtils").maybeTranslateObjective(
                      C.objective,
                      v,
                      y.optimization_goal,
                    ),
                  );
            },
            function (e) {
              var t = g == null ? void 0 : g.preferredThumbnail;
              return (
                t != null && (t = babelHelpers.extends({}, t, { ent_id: "0" })),
                o("AdsUEditorAdgroupMutators").setVideoID({
                  adgroup: e,
                  specPathPlugin: b,
                  videoID: g == null ? void 0 : g.id,
                  preferredThumbnail: t,
                })
              );
            },
            function (e) {
              var t, n, o, a;
              if (r("isFalsey")(p)) return e;
              var i = r("immutable").List(
                  (t =
                    (n = e.creative) == null ||
                    (n = n.media_sourcing_spec) == null
                      ? void 0
                      : n.videos) != null
                    ? t
                    : [],
                ),
                l = i.some(function (e) {
                  return (
                    e.get("video_id") === f || e.get("original_video_id") === f
                  );
                });
              if (l) return e;
              var s = i.filter(function (e) {
                  var t,
                    n =
                      (t = e.get("original_video_id")) != null
                        ? t
                        : e.get("video_id");
                  return n !== f;
                }),
                u = r("immutable").List([
                  r("immutable").Map({
                    video_id: f,
                    original_video_id: f,
                    thumbnail_id:
                      g == null || (o = g.preferredThumbnail) == null
                        ? void 0
                        : o.ent_id,
                    thumbnail_url:
                      g == null || (a = g.preferredThumbnail) == null
                        ? void 0
                        : a.uri,
                    thumbnail_source: "generated_default",
                    source: "multi_media",
                    opt_in_status: "opt_in",
                  }),
                ]);
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.media_sourcing_spec.videos.set(u.concat(s), e);
            },
            function (e) {
              return u != null && u
                ? o(
                    "AdsUEditorAdgroupVideoVariationMutators",
                  ).addVideoOptimizationFileds(
                    e,
                    r("immutable").List(["CROPPING"]),
                  )
                : o(
                    "AdsUEditorAdgroupVideoVariationMutators",
                  ).removeVideoOptimizationFileds(
                    e,
                    r("immutable").List(["CROPPING"]),
                  );
            },
            function (e) {
              return o("AdsUEditorAdgroupAudiosAdsMutators").removeAudiosField(
                e,
              );
            },
            function (e) {
              return c != null
                ? o(
                    "AdsUEditorAdgroupPromoAdMutators",
                  ).updatePromoAdForDefaultOptIn(
                    { adgroup: e, campaignGroup: C, campaign: y },
                    null,
                    b,
                    c,
                    o("AdsUEditorAdgroupPromoAdMutatorUtils")
                      .PromoAdDefaultOptInCallSite.SET_MEDIA,
                  )
                : e;
            },
            function (e) {
              return c != null
                ? o(
                    "AdsUEditorAdgroupEmailCaptureMutators",
                  ).updateEmailCaptureForDefaultOptIn(
                    { adgroup: e, campaignGroup: C, campaign: y },
                    null,
                    c,
                    o("AdsUEditorAdgroupPromoAdMutatorUtils")
                      .PromoAdDefaultOptInCallSite.SET_MEDIA,
                  )
                : e;
            },
            function (e) {
              return o(
                "AdsUEditorAdgroupOnsiteDestinationsMutators",
              ).maybeUpdateOnsiteDestinationsForImageOrVideo(
                e,
                y,
                b,
                null,
                null,
                t,
                m,
                d,
                [l],
              );
            },
            function (e) {
              var t, o;
              if (!r("justknobx")._("4928")) return e;
              var a =
                  (t = _.creative) == null ||
                  (t = t.object_story_spec) == null ||
                  (t = t.video_data) == null
                    ? void 0
                    : t.video_id,
                i =
                  (o = e.creative) == null ||
                  (o = o.object_story_spec) == null ||
                  (o = o.video_data) == null
                    ? void 0
                    : o.video_id;
              if (a === i) return e;
              var l = n("GenAISpecDeleter"),
                s = l.removeAdoptedVariants;
              return s(e, { assetType: "all" });
            },
            function (e) {
              var t,
                n,
                r =
                  (t = _.creative) == null ||
                  (t = t.object_story_spec) == null ||
                  (t = t.video_data) == null
                    ? void 0
                    : t.video_id,
                a =
                  (n = e.creative) == null ||
                  (n = n.object_story_spec) == null ||
                  (n = n.video_data) == null
                    ? void 0
                    : n.video_id;
              return r === a
                ? e
                : o(
                    "AdsPacRecompositionSpecMutators",
                  ).deletePacRecompositionSpec(e);
            },
            function (e) {
              var t,
                n =
                  (t = e.creative) == null ||
                  (t = t.object_story_spec) == null ||
                  (t = t.video_data) == null
                    ? void 0
                    : t.video_id;
              return n == null || n === ""
                ? e
                : o(
                    "AdsUEditorAdgroupSelectedVideoIDMutator",
                  ).clearSelectedVideoCommitment(e);
            },
          )(e);
        };
      },
      d = function (t, n, a, i) {
        return function (e) {
          var l,
            s,
            u,
            c,
            d,
            m,
            p,
            _ = i.get(n);
          if (_ == null) return e;
          var f = _.specPlugin,
            g = r("AdsAdgroupSemanticFields").pageID.get(f, e),
            h = r("isTruthy")(g) ? a(g) : null,
            y = o("AdsUEditorAdgroupMutators").removeImagesAndVideos(
              t,
              e,
              f,
              h,
            );
          (((l = e.creative) == null ? void 0 : l.playable_asset_id) != null &&
            (y = r(
              "AdsAdgroupRecordAccessors",
            ).creative.playable_asset_id.delete(y)),
            ((s = e.creative) == null || (s = s.media_sourcing_spec) == null
              ? void 0
              : s.playables) != null &&
              (y = r(
                "AdsAdgroupRecordAccessors",
              ).creative.media_sourcing_spec.playables.delete(y)));
          var C = o("AdsDCOImageCropDoFUtils").hasDoFSpecWithFAMToggleExpType(
            e,
          );
          return (
            C &&
              (y = r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.delete(y)),
            (y = o(
              "AdsPacRecompositionSpecMutators",
            ).deletePacRecompositionSpec(y)),
            ((u = e.creative) == null
              ? void 0
              : u.interactive_components_spec) != null &&
              (y = r(
                "AdsAdgroupRecordAccessors",
              ).creative.interactive_components_spec.delete(y)),
            ((c = e.creative) == null ? void 0 : c.instant_checkout_setting) !=
              null &&
              (y = r(
                "AdsAdgroupRecordAccessors",
              ).creative.instant_checkout_setting.delete(y)),
            ((d = e.creative) == null ? void 0 : d.product_set_id) != null &&
              o(
                "adsInteractiveComponentsUtils",
              ).adgroupHasInteractiveComponents(
                e,
                o("AdsInteractiveComponentConstants").SHOPPING_PRODUCT_TAG,
              ) &&
              (y = r(
                "AdsAdgroupRecordAccessors",
              ).creative.product_set_id.delete(y)),
            ((m = e.creative) == null || (m = m.degrees_of_freedom_spec) == null
              ? void 0
              : m.multi_media_transformation_type) != null &&
              (y = o(
                "AdsAdgroupMMTMutators",
              ).adsMMTImageToVideoMutationSetDoFSpec(y, !1)),
            ((p = e.creative) == null || (p = p.degrees_of_freedom_spec) == null
              ? void 0
              : p.stories_transformation_types) != null &&
              (y = o(
                "AdsUEditorAdgroupDegreesOfFreedomMutators",
              ).removeTransformations(e, {
                target: "stories",
                transformations: r("immutable").List(["PORTAL"]),
              })),
            (y = o("AdsUEditorAdgroupAssetFeedMutators").removeAllMediaAssets(
              y,
              r("nullthrows")(f.pivots.objective),
              f,
            )),
            (y = o(
              "AdsUEditorAdgroupSelectedVideoIDMutator",
            ).clearSelectedVideoCommitment(y)),
            o("AdsUEditorAdgroupAssetFeedMutators").restoreCTXMDFields(e, y)
          );
        };
      },
      m = function (t, n, a, i, l) {
        return function (e) {
          var l = i.get(n);
          if (l == null) return e;
          var s = l.campaign,
            u = d(t, n, a, i)(e);
          return (
            o("AdsAssetFeedUtils").getIsAudiosAdgroupEnabled(e) &&
              (u = o("AdsUEditorAdgroupAudiosAdsMutators").maybeResetAudios(
                e,
                u,
              )),
            (u = o(
              "AdsAdgroupGenerativeAssetSpecMutators",
            ).adsDeleteGenAIAssetSpecMutator(u)),
            (u = o(
              "AdsUEditorAdgroupMediaSourcingSpecMutators",
            ).mayRemoveCAGandMSSpecForRelatedMedia(u)),
            (u = o(
              "AdsUEditorAdgroupMediaSourcingSpecMutators",
            ).mayDeletePushMetadataIdsSpec(u)),
            (u = o(
              "AdsUEditorAdgroupMultiMediaSpecMutators",
            ).mayDeleteMultiMediaContentFromMSS(u)),
            r("CapaUtils").isCapaL0EnabledInCampaign(s) &&
              e.creative_audience_pairing_persona != null &&
              (u = r(
                "AdsAdgroupRecordAccessors",
              ).creative_audience_pairing_persona.delete(u)),
            o("AdsUEditorAdgroupBadges").restoreBadgeSets(e, u)
          );
        };
      };
    ((l.getAdsSetImageAndCropsMutator = e),
      (l.getAdsSetVideoIDMutator = c),
      (l.getAdsRemoveAllCustomizationsMutator = m));
  },
  98,
);
