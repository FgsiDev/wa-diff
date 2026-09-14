__d(
  "AdsUEditorAdgroupSetVideoIDReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSetMediaReducerUtils",
    "AdsAdgroupSpecUtils",
    "AdsCreativeFlexSpecCheckUtils",
    "AdsIGVideoUploadUpdateVideoIDProvider",
    "AdsMutators",
    "AdsSFMediaPickerDataProvider",
    "AdsTargetingConstants",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetMediaOptimizationMutator",
    "AdsUEditorAdgroupSetVideoIDDataActionFlux",
    "AdsValidationConsts",
    "AdsVideoStore",
    "AdsVideoTrimmingGating",
    "AdsVideoTrimmingKickoffRegistry",
    "CapaUtils",
    "CurrentAdAccount",
    "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
    "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
    "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
    "adsVideoTrimmingSourceVideoID",
    "immutable",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i,
        l,
        s,
        u = (i = n.get(e)) == null ? void 0 : i.campaign,
        c = u != null && r("CapaUtils").isCapaL0EnabledInCampaign(u);
      if (!c)
        return function (e) {
          return e;
        };
      var d =
          t != null &&
          (l =
            a == null || (s = a.audiencePersonaChangeSets) == null
              ? void 0
              : s.get(t)) != null
            ? l
            : null,
        m = u == null ? void 0 : u.targeting;
      return function (e) {
        var t,
          n,
          a,
          i,
          l,
          s,
          u,
          c,
          p,
          _ = e.creative_audience_pairing_persona,
          f = _ == null ? void 0 : _.age_min,
          g = _ == null ? void 0 : _.age_max,
          h =
            _ == null || (t = _.genders) == null || t.first == null
              ? void 0
              : t.first(),
          y =
            (n =
              (a =
                (i = d == null ? void 0 : d.ageMin) != null
                  ? i
                  : typeof f == "number"
                    ? f
                    : null) != null
                ? a
                : m == null
                  ? void 0
                  : m.age_min) != null
              ? n
              : r("AdsValidationConsts").minAgeDefault,
          C =
            (l =
              (s =
                (u = d == null ? void 0 : d.ageMax) != null
                  ? u
                  : typeof g == "number"
                    ? g
                    : null) != null
                ? s
                : m == null
                  ? void 0
                  : m.age_max) != null
              ? l
              : r("AdsValidationConsts").maxAge,
          b =
            (c = (p = d == null ? void 0 : d.genders) != null ? p : h) != null
              ? c
              : o("AdsTargetingConstants").GENDERS.All;
        return o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative_audience_pairing_persona.age_min.set(y),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative_audience_pairing_persona.age_max.set(C),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative_audience_pairing_persona.genders.set(
            r("immutable").List([b]),
          ),
        )(e);
      };
    }
    var s = function (t) {
      return t;
    };
    function u(e) {
      var t;
      if (
        !o("AdsVideoTrimmingGating").isVideoTrimmingEnabledForAdAccount(!0) ||
        e.isMultiUploadEligible === !0
      )
        return s;
      if (e.videoID == null)
        for (var n of e.adgroupIDs)
          o(
            "AdsVideoTrimmingKickoffRegistry",
          ).clearVideoTrimmingKickoffDeferred(String(n));
      var a =
        e.videoID == null
          ? null
          : String(
              (t = o(
                "adsVideoTrimmingSourceVideoID",
              ).adsVideoTrimmingSourceVideoID(e.videoID)) != null
                ? t
                : e.videoID,
            );
      return function (e, t) {
        var n,
          i =
            (n = t.creative) == null ||
            (n = n.object_story_spec) == null ||
            (n = n.video_data) == null
              ? void 0
              : n.video_id,
          l = r("CurrentAdAccount").getID();
        if (i != null && l != null) {
          var s,
            u = String(
              (s = o(
                "adsVideoTrimmingSourceVideoID",
              ).adsVideoTrimmingSourceVideoID(i)) != null
                ? s
                : i,
            );
          u !== a &&
            o("AdsVideoTrimmingKickoffRegistry").clearVideoTrimmingRunStarted(
              String(l),
              u,
            );
        }
        return o(
          "AdsUEditorAdgroupSetMediaOptimizationMutator",
        ).pruneVideoOptimizationEntries(e, a);
      };
    }
    var c = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            getVideo: r("AdsVideoStore").getSelector,
            mediaPickerData: r("AdsSFMediaPickerDataProvider").toFluxSelector(),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            shouldUploadVideoIDState: r(
              "AdsIGVideoUploadUpdateVideoIDProvider",
            ).toFluxSelector(),
            promoAdDefaultOptinStatus: r(
              "adsUEditorCampaignGroupPromoAdDefaultOptinStatusSelector",
            ),
            onsiteDestinations: r(
              "ShopAdsOnsiteDestinationsMaybeUpdateAdgroupProvider",
            ).toFluxSelector(),
            storefronts: o(
              "adsUEditorAdgroupUniversalStorefrontsFromShopSpecOrIdentitySelector",
            )
              .adsUEditorAdgroupStorefrontsFromShopSpecOrIdentityUniformValueSelector,
          },
          function (t, n, a) {
            var i = a.getVideo,
              l = a.mediaPickerData,
              s = a.onsiteDestinations,
              c = a.parentData,
              d = a.promoAdDefaultOptinStatus,
              m = a.shouldUploadVideoIDState,
              p = a.storefronts,
              _ = n.isMultiUploadEligible === !0 && n.videoID != null,
              f = u(n);
            return r("isTruthy")(m) &&
              m.shouldUpdateVideoIDAfterUpload === !0 &&
              n.isIGVideoEncodingComplete === !0
              ? o("AdsMutators").mutateEach(t, n.adgroupIDs, function (e, t) {
                  return f(
                    o("AdsAdgroupSetMediaReducerUtils").getAdsSetVideoIDMutator(
                      n.videoID,
                      i,
                      c,
                      t,
                      n.adgroupIDToVideoIDMap,
                      n.isCropTestEnrolled,
                      d,
                      p != null ? (p == null ? void 0 : p.getValue()) : null,
                      s,
                      _,
                    )(e),
                    e,
                  );
                })
              : n.isIGVideoEncodingComplete === !0 ||
                  n.isUploadingLocalVideoSelected === !0
                ? r("justknobx")._("2552") &&
                  n.isMultiUploadEligible === !0 &&
                  n.isIGVideoEncodingComplete === !0
                  ? o("AdsMutators").mutateEach(
                      t,
                      n.adgroupIDs,
                      function (e, t) {
                        var a, l, u, m;
                        if (n.videoID == null) return e;
                        var f = e,
                          g = i(n.videoID),
                          h = r("immutable").List(
                            (a =
                              (l = e.creative) == null ||
                              (l = l.media_sourcing_spec) == null
                                ? void 0
                                : l.videos) != null
                              ? a
                              : [],
                          ),
                          y = r("immutable").List([
                            r("immutable").Map({
                              video_id: n.videoID,
                              original_video_id: n.videoID,
                              thumbnail_id:
                                g == null || (u = g.preferredThumbnail) == null
                                  ? void 0
                                  : u.ent_id,
                              thumbnail_url:
                                g == null || (m = g.preferredThumbnail) == null
                                  ? void 0
                                  : m.uri,
                              thumbnail_source: "generated_default",
                              source: "multi_media",
                              opt_in_status: "opt_in",
                            }),
                          ]);
                        return (
                          (f = r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.media_sourcing_spec.videos.set(
                            n.isBaseAsset === !0 ? y.concat(h) : h.concat(y),
                            f,
                          )),
                          n.isBaseAsset === !0 &&
                            (f = o(
                              "AdsAdgroupSetMediaReducerUtils",
                            ).getAdsSetVideoIDMutator(
                              n.videoID,
                              i,
                              c,
                              t,
                              n.adgroupIDToVideoIDMap,
                              n.isCropTestEnrolled,
                              d,
                              p != null
                                ? p == null
                                  ? void 0
                                  : p.getValue()
                                : null,
                              s,
                              _,
                            )(f)),
                          f
                        );
                      },
                    )
                  : r("justknobx")._("4023") &&
                      n.isIGVideoEncodingComplete === !0
                    ? o("AdsMutators").mutateEach(
                        t,
                        n.adgroupIDs,
                        function (e, t) {
                          return f(
                            o(
                              "AdsAdgroupSetMediaReducerUtils",
                            ).getAdsSetVideoIDMutator(
                              n.videoID,
                              i,
                              c,
                              t,
                              n.adgroupIDToVideoIDMap,
                              n.isCropTestEnrolled,
                              d,
                              p != null
                                ? p == null
                                  ? void 0
                                  : p.getValue()
                                : null,
                              s,
                              _,
                            )(e),
                            e,
                          );
                        },
                      )
                    : t
                : o("AdsMutators").mutateEach(t, n.adgroupIDs, function (t, r) {
                    var a = o("AdsAdgroupSpecUtils").getVideoID(t),
                      u = o(
                        "AdsAdgroupSetMediaReducerUtils",
                      ).getAdsSetVideoIDMutator(
                        n.videoID,
                        i,
                        c,
                        r,
                        n.adgroupIDToVideoIDMap,
                        n.isCropTestEnrolled,
                        d,
                        p != null ? (p == null ? void 0 : p.getValue()) : null,
                        s,
                        _,
                      )(t);
                    return (
                      (u = f(e(r, n.videoID, c, l)(u), t)),
                      n.shouldResetCustomizationsOnVideoChange === !0 &&
                        n.videoID != null &&
                        a !== n.videoID &&
                        o(
                          "AdsCreativeFlexSpecCheckUtils",
                        ).shouldClearStaleRelatedMediaOnBaseChange(u) &&
                        (u = o(
                          "AdsUEditorAdgroupMediaSourcingSpecMutators",
                        ).mayClearRelatedMediaSpecKeepBaseMedia(u)),
                      u
                    );
                  });
          },
          o("AdsUEditorAdgroupSetVideoIDDataActionFlux").actionType,
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
