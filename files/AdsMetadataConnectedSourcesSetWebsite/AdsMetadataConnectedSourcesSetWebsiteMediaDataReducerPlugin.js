__d(
  "AdsMetadataConnectedSourcesSetWebsiteMediaDataReducerPlugin",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsFlexibleFormatAdexUtils",
    "AdsMetadataConnectedSourcesSetWebsiteMediaDataActionFlux",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsSiteLinksFormatDefaultOnUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsWebsiteMediaSpecMutators",
    "adsUEditorReactiveControlStickySettingSelector",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4,
      s = 2;
    function u(t, n, r, a) {
      var i = [];
      for (var l of o("AdsFlexibleFormatAdexUtils").withSASingleCollageGate(
        o("AdsSiteLinksFormatDefaultOnUtils").SE_WH_EVOLUTION_FORMATS,
        t,
      )) {
        var u =
            l === "collage"
              ? o("AdsFlexibleFormatAdexUtils").COLLAGE_MIN_IMAGE_COUNT
              : l === "sa_collection"
                ? e
                : s,
          c = a >= u,
          d = o("AdsSiteLinksFormatDefaultOnUtils").isSiteLinksFormatOptedIn(
            t,
            l,
          ),
          m = (n || r) && c && !d,
          p = !n && (!c || !r) && d;
        m
          ? i.push({ consented: !0, format: l })
          : p && i.push({ consented: !1, format: l });
      }
      return i;
    }
    function c(e, t) {
      var n = t.campaign,
        r = t.campaignGroup;
      return o("AdsFlexibleFormatAdexUtils").isWHAllowedForAdShape(e)
        ? o("AdsFlexibleFormatAdexUtils")
            .getEligibleDataSources(e, n, r)
            .includes("site_links")
        : !1;
    }
    function d() {
      var e,
        t,
        n =
          ((e = r("gkx")("3384")) != null ? e : !1) ||
          ((t = r("gkx")("18509")) != null ? t : !1),
        a = o("AdsFlexibleFormatAdexUtils").shouldBlockReactiveControlDefaultOn(
          n,
        ),
        i = a || r("gkx")("1857");
      return { blockDefaultOn: a, seWhBlockDefaultOn: i };
    }
    function m(e) {
      if (e.enrollStatus != null && e.enrollActionType != null)
        return { actionType: e.enrollActionType, enrollStatus: e.enrollStatus };
      var t = o("AdsMetadataConnectedSourcesUtils").websiteMediaStickyOptIn(
        o(
          "AdsMetadataConnectedSourcesUtils",
        ).readAdsUserSettingsDuringDispatch(),
      );
      return t != null
        ? { actionType: "STICKY", enrollStatus: t ? "OPT_IN" : "OPT_OUT" }
        : {
            actionType: "DEFAULT",
            enrollStatus: r("gkx")("8549") ? "OPT_IN" : "OPT_OUT",
          };
    }
    var p = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            stickyMap: r("adsUEditorReactiveControlStickySettingSelector"),
          },
          function (e, t, n) {
            var a = n.parentData,
              i = n.stickyMap;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l,
                  s,
                  p =
                    (l = e.creative) == null ||
                    (l = l.creative_sourcing_spec) == null
                      ? void 0
                      : l.website_media_spec,
                  _ = o("AdsMutators").chain(
                    o("AdsWebsiteMediaSpecMutators").resetWebsiteMediaSpec,
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_media_spec.adex_had_impression.set(
                      (s = p == null ? void 0 : p.adex_had_impression) != null
                        ? s
                        : !1,
                    ),
                  )(e),
                  f = t.media,
                  g = t.imageClusters,
                  h =
                    f == null
                      ? void 0
                      : f.filter(function (e) {
                          return e.image_url != null && e.image_url !== "";
                        });
                if (h != null && h.size > 0) {
                  var y = m(t),
                    C = y.actionType,
                    b = y.enrollStatus;
                  (b !== "OPT_OUT" &&
                    ((_ = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_media_spec.media.set(
                      r("immutable").List(
                        h.map(function (e) {
                          return r("immutable").Map({
                            image_url: e.image_url,
                            image_hash: e.image_hash,
                            text: e.text,
                            description: e.description,
                            image_height: e.image_height,
                            image_width: e.image_width,
                            is_og_image: e.is_og_image,
                            image_sources: e.image_sources,
                            is_immersive_product: e.is_immersive_product,
                            is_human_and_product: e.is_human_and_product,
                            is_human_and_service: e.is_human_and_service,
                            is_poster: e.is_poster,
                            is_photo_collage: e.is_photo_collage,
                            is_landscape: e.is_landscape,
                            is_illustration: e.is_illustration,
                            is_text_wall: e.is_text_wall,
                            is_icon: e.is_icon,
                            is_logo: e.is_logo,
                            logo_icon_detection: e.logo_icon_detection,
                            background_cleanliness: e.background_cleanliness,
                            user_sentiment: e.user_sentiment,
                            product_focus: e.product_focus,
                            background_color: e.background_color,
                            human_face_detection: e.human_face_detection,
                            text_heavy: e.text_heavy,
                            image_blurry: e.image_blurry,
                            aesthetic_relevance: e.aesthetic_relevance,
                            message_relevance: e.message_relevance,
                            product_relevance: e.product_relevance,
                            overall_relevance: e.overall_relevance,
                            is_duplicate: e.is_duplicate,
                            similarity_score: e.similarity_score,
                            cluster_index: e.cluster_index,
                            image_phash: e.image_phash,
                            image_asset_fbid: e.image_asset_fbid,
                          });
                        }),
                      ),
                    )(_)),
                    g != null && g.size > 0
                      ? (_ = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.creative_sourcing_spec.website_media_spec.image_clusters.set(
                          r("immutable").List(
                            g.map(function (e) {
                              return r("immutable").Map({
                                image_phashes: e.image_phashes,
                                cluster_silhouette_score:
                                  e.cluster_silhouette_score,
                                cluster_intra_diversity:
                                  e.cluster_intra_diversity,
                                ranking_version: e.ranking_version,
                              });
                            }),
                          ),
                        )(_))
                      : (_ = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.creative_sourcing_spec.website_media_spec.image_clusters.set(
                          r("immutable").List(),
                        )(_))),
                    (_ = o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.website_media_spec.enroll_status.set(
                        b,
                      ),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.website_media_spec.action_metadata.type.set(
                        C,
                      ),
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.creative_sourcing_spec.website_media_spec.adex_had_data.set(
                        !0,
                      ),
                    )(_)));
                }
                var v = a.get(n);
                if (
                  v != null &&
                  o("AdsFlexibleFormatAdexUtils").passQEForReactiveControlPESE(
                    !0,
                  ) &&
                  c(_, v)
                ) {
                  var S =
                      o(
                        "AdsSiteLinksFormatDefaultOnUtils",
                      ).getSESiteLinksConsentState(_) === "on",
                    R =
                      o(
                        "AdsSiteLinksFormatDefaultOnUtils",
                      ).getWHSiteLinksConsentState(_) === "on",
                    L = o(
                      "AdsFlexibleFormatAdexUtils",
                    ).countWebsiteMediaImageUrl(_),
                    E = u(_, S, R, L);
                  if (E.length > 0 && r("gkx")("6023")) {
                    var k = d(),
                      I = k.blockDefaultOn,
                      T = k.seWhBlockDefaultOn;
                    for (var D of E) {
                      var x = D.consented,
                        $ = D.format;
                      _ = o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupFormatTransformationDataSourceDefaultOnMutator(
                        _,
                        "site_links",
                        x,
                        r("immutable").Map([[$, ["site_links"]]]),
                        i,
                        [$],
                        T,
                        !0,
                        R,
                        I,
                      );
                    }
                  }
                }
                return _;
              },
            );
          },
          [
            r("AdsMetadataConnectedSourcesSetWebsiteMediaDataActionFlux")
              .actionType,
          ],
        ),
      },
      _ = p;
    l.default = _;
  },
  98,
);
