__d(
  "AdsCreativeFlexGroupedMediaQueryArgsUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsCreativeFlexMediaUtils",
    "AdsCreativeMediaSourcingSpecTypes.flow",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsRelatedMediaBulkEditUtils",
    "DAFlexibleFormatUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r,
        a,
        i = o(
          "AdsCreativeFlexAssetUtils",
        ).getFilteredMediaSourcingSpecBySourceFromAdgroup(e, "multi_media"),
        l =
          (t =
            (n = i.images) == null
              ? void 0
              : n
                  .map(function (e) {
                    if (
                      e.opt_in_status ===
                      o("AdsCreativeMediaSourcingSpecTypes.flow")
                        .RelatedMediaOptInStatusSpecType.OPT_IN
                    )
                      return e.hash;
                  })
                  .filter(Boolean)) != null
            ? t
            : [],
        s =
          (r =
            (a = i.videos) == null
              ? void 0
              : a
                  .map(function (e) {
                    if (
                      e.opt_in_status ===
                      o("AdsCreativeMediaSourcingSpecTypes.flow")
                        .RelatedMediaOptInStatusSpecType.OPT_IN
                    )
                      return e.video_id;
                  })
                  .filter(Boolean)) != null
            ? r
            : [];
      return [].concat(l, s);
    }
    function s(e, t, n) {
      var r,
        a,
        i,
        l =
          e != null &&
          o(
            "DAFlexibleFormatUtils",
          ).isAdgroupEligibleForDACarouselIntroCardRevamp(e) &&
          o("DAFlexibleFormatUtils").passFlexibleFormatAndRelatedMediaAdexGK(
            "silent",
          );
      if (
        l &&
        (e == null || (r = e.creative) == null ? void 0 : r.product_set_id) !=
          null
      )
        return {
          targetMediaIdentifier: e.creative.product_set_id,
          targetMediaType: "PRODUCT_SET",
        };
      if (
        o(
          "AdsPCAUnifiedFormatEligibilityUtils",
        ).isDARelatedMediaEnabledForPCAUnifiedL1() &&
        (e == null || (a = e.metadata) == null
          ? void 0
          : a.is_pca_unified_format_ad) === !0 &&
        (e == null ||
        (i = e.creative) == null ||
        (i = i.creative_sourcing_spec) == null
          ? void 0
          : i.associated_product_set_id) != null
      )
        return {
          targetMediaIdentifier:
            e.creative.creative_sourcing_spec.associated_product_set_id,
          targetMediaType: "PRODUCT_SET",
        };
      if (t != null && t !== "")
        return { targetMediaIdentifier: t, targetMediaType: n };
      var s =
          e != null
            ? o("AdsRelatedMediaBulkEditUtils").computeTargetMediaIdentifier(e)
            : null,
        u = n;
      if (s != null && e != null) {
        var c,
          d,
          m,
          p =
            (c = e.creative) == null ||
            (c = c.object_story_spec) == null ||
            (c = c.video_data) == null
              ? void 0
              : c.video_id,
          _ =
            (d = e.creative) == null || (d = d.asset_feed_spec) == null
              ? void 0
              : d.videos;
        (s === p ||
          (_ != null &&
            _.length > 0 &&
            s === ((m = _[0]) == null ? void 0 : m.video_id))) &&
          (u = "VIDEO");
      }
      return { targetMediaIdentifier: s, targetMediaType: u };
    }
    function u(t, n) {
      var r,
        a,
        i = s(t, n.baseTargetMediaIdentifier, n.baseMediaType),
        l = i.targetMediaIdentifier,
        u = i.targetMediaType,
        c =
          t != null
            ? o("AdsCreativeFlexMediaUtils").getAdTextInfoFromAdgroup(t)
            : {
                targetAdDescription: void 0,
                targetAdHeadline: void 0,
                targetAdPrimaryText: void 0,
              },
        d = c.targetAdDescription,
        m = c.targetAdHeadline,
        p = c.targetAdPrimaryText;
      return {
        accountID: n.accountID,
        campaignGroupID:
          (r = t == null ? void 0 : t.campaign_id) != null ? r : null,
        campaignID: (a = t == null ? void 0 : t.adset_id) != null ? a : null,
        destinationUrl:
          t != null
            ? o("AdsCreativeFlexMediaUtils").getDestinationUrlFromAdgroup(t)
            : null,
        isExistingPostAd:
          t != null && o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t),
        l1SelectedIgAccountId: n.l1SelectedIgAccountId,
        promotedObjectType: n.promotedObjectType,
        selectedMultiMediaIds: t != null ? e(t) : [],
        targetAdDescription: d,
        targetAdHeadline: m,
        targetAdPrimaryText: p,
        targetMediaIdentifier: l,
        targetMediaType: u,
      };
    }
    ((l.computeSelectedMultiMediaIds = e),
      (l.computeTargetMediaIdentifierAndType = s),
      (l.buildAdsCreativeFlexGroupedMediaQueryArgs = u));
  },
  98,
);
