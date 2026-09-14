__d(
  "AdsUEditorAdgroupVideoMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsLocalizedPlacementsMutators",
    "AdsPACSpecMutationAsyncLog",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "adsIsNewVideoThumbnailDataModel",
    "adsPlacementAssetMutationChangeFormatToAutomatic",
    "adsPlacementAssetMutationConvertToImageAssetFeedWithCampaignTargeting",
    "adsPlacementAssetMutationConvertToVideoAssetFeedWithCampaignTargeting",
    "adsPlacementAssetMutationUpdateCustomizationVideo",
    "immutable",
    "isStringNullOrEmpty",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c, d, m) {
      var p = e;
      if (
        (i != null &&
          (p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            a,
            "video_id",
            i,
          )),
        r("isTruthy")(l) &&
          ((p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            a,
            "thumbnail_url",
            l,
          )),
          (p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            a,
            "thumbnail_source",
            c,
          ))),
        r("adsIsNewVideoThumbnailDataModel")() &&
          r("isTruthy")(s) &&
          ((p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            a,
            "thumbnail_id",
            s,
          )),
          (p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            a,
            "thumbnail_source",
            c,
          ))),
        r("isStringNullOrEmpty")(m) ||
          (p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            a,
            "thumbnail_hash",
            m,
          )),
        u != null)
      ) {
        var _,
          f,
          g = r("immutable").fromJS(
            ((f = {}),
            (f.specifications = [((_ = {}), (_.background_color = u), _)]),
            f),
          );
        p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          p,
          t,
          r("AdsUnifiedCreativeAPIFields").videoID,
          a,
          "portrait_customizations",
          g,
        );
      }
      return (
        d != null &&
          (p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            a,
            "interactive_components_spec",
            d,
          )),
        p
      );
    }
    function s(t, n, a, i, l, s, c, d, m, p, _, f, g, h, y, C, b) {
      var v, S;
      (h === void 0 && (h = !1), y === void 0 && (y = !1));
      var R = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t);
      R && o("AdsPACSpecMutationAsyncLog").log(t, "ADD_VIDEO_START", g);
      var L = o("AdsAdgroupTypeUtils").isVideoAd(t);
      if (!L && !y)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "This customization should be applied to video ad or to image ad given that ad account has pac automatic format capability",
        );
      var E = t;
      o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(t) && L
        ? (E = o(
            "AdsLocalizedPlacementsMutators",
          ).convertDLOToLocalizedPlacementsAdgroup(t, a))
        : o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t)
          ? ((E = L
              ? t
              : r("adsPlacementAssetMutationChangeFormatToAutomatic")(t)),
            R &&
              o("AdsPACSpecMutationAsyncLog").log(
                E,
                "ADD_VIDEO_CONVERT_TO_PAC",
                g,
              ))
          : o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(t) ||
            (E = L
              ? r(
                  "adsPlacementAssetMutationConvertToVideoAssetFeedWithCampaignTargeting",
                )(t, n, a, i, h, !1)
              : r(
                  "adsPlacementAssetMutationConvertToImageAssetFeedWithCampaignTargeting",
                )(t, n, a, i, h, !0));
      var k = r("isTruthy")(l);
      if (k)
        return r("adsPlacementAssetMutationUpdateCustomizationVideo")(
          E,
          s,
          r("nullthrows")(l),
          a,
          d,
          m,
          _,
          c,
          b,
        );
      var I =
          (v = E.creative) == null || (v = v.asset_feed_spec) == null
            ? void 0
            : v.videos,
        T = I != null ? I.size : 0;
      E = e(E, a, i, T, c, d, m, p, _, C, b);
      var D = o(
        "AdsPlacementAssetUtils",
      ).makeUniqueLabelNameForPlacementAsset();
      if (
        ((E = o("AdsAssetFeedMutationUtils").setAssetAdLabelAtIndex(
          E,
          a,
          r("AdsUnifiedCreativeAPIFields").videoID,
          T,
          D,
        )),
        o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(E))
      )
        return (
          (E = o(
            "AdsLocalizedPlacementsMutators",
          ).addPlacementsToAssetCustomizationRules(E, "video_label", D, f)),
          (E = u(E, a)),
          R && o("AdsPACSpecMutationAsyncLog").log(E, "ADD_VIDEO_END", g),
          E
        );
      var x =
          (S = E.creative) == null || (S = S.asset_feed_spec) == null
            ? void 0
            : S.asset_customization_rules,
        $ = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).movePlacementsInTargetingRules(
          x || r("immutable").List(),
          "video_label",
          D,
          f,
        ),
        P = $.labelsRemoved,
        N = $.updatedTargetingRules;
      E = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(N, E);
      for (var M of P) {
        var w,
          A = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
            (w = E.creative) == null || (w = w.asset_feed_spec) == null
              ? void 0
              : w.videos,
            M,
            "video_id",
          ).index;
        E =
          A != null
            ? r("AdsAdgroupRecordAccessors")
                .creative.asset_feed_spec.videos.at(A)
                .delete(E)
            : E;
      }
      return (
        (E = u(E, a)),
        R && o("AdsPACSpecMutationAsyncLog").log(E, "ADD_VIDEO_END", g),
        E
      );
    }
    function u(e, t) {
      return o("AdsAssetFeedMutationUtils").removeDuplicateAssets(
        e,
        t,
        r("AdsUnifiedCreativeAPIFields").videoID,
        "adlabels",
      );
    }
    function c(e, t, n, a) {
      var i = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").videoID,
          n,
          "adlabels",
          a,
        ),
        l = i.adgroupWithIsolatedAsset,
        s = i.isolatedAssetIndex;
      return { adgroupWithIsolatedVideoAsset: l, isolatedVideoAssetIndex: s };
    }
    ((l.updatePlacementCustomizationVideoAtIndex = e),
      (l.addPlacementCustomizationVideo = s),
      (l.removeDuplicateVideoAssets = u),
      (l.isolateVideoAssetWithLabel = c));
  },
  98,
);
