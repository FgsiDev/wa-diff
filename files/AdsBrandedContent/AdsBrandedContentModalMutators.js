__d(
  "AdsBrandedContentModalMutators",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsIGIDv2SemanticFields",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupSetPageUtils",
    "gkx",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u) {
      var c,
        d,
        m = s.isCTXBrandedContentEligible,
        p = s.isPVPartnershipAdsEligible,
        _ = s.parentData,
        f = r("nullthrows")(_.get(n)),
        g = f.campaign,
        h = f.specPlugin,
        y = t,
        C = o("AdsAPIAdgroupRecordUtils").isExistingPostAd(y);
      ((y = o("AdsMutators").chain(
        (d = r("AdsAdgroupRecordAccessors")).creative.facebook_branded_content
          .sponsor_page_id.delete,
        d.creative.instagram_branded_content.delete,
        d.creative.branded_content_boosting_type.delete,
        d.creative.object_id.delete,
        d.creative.object_story_id.delete,
        d.creative.object_story_spec.page_id.delete,
        o("AdsInstagramUserIdMigrationUtils").IGIDV2MigrationAccessors.creative
          .instagram_user_id.delete,
      )(y)),
        r("justknobx")._("431") &&
          (y = r("AdsAdgroupSemanticFields").instagramUserID.delete(h, y)));
      var b =
        e.boostingType === "SPONSOR_BOOST" ||
        e.boostingType === "SPONSOR_INLINE"
          ? e.secondaryPageID
          : e.primaryPageID;
      b != null &&
        o("AdsUEditorAdgroupSetPageUtils").setAdgroupPage(
          t,
          n,
          a,
          i,
          b,
          null,
          l,
          s,
          !1,
          null,
          null,
        );
      var v = e.primaryPageID;
      if (
        (v == null &&
          (r("gkx")("15865")
            ? e.primaryInstagramUserID != null
            : e.primaryInstagramActorID != null) &&
          (e.boostingType === "SPONSOR_INLINE" ||
            e.boostingType === "SPONSOR_BOOST") &&
          (v = e.secondaryPageID),
        ((c = g.promoted_object) == null ? void 0 : c.page_id) != null &&
          (m || p))
      ) {
        var S;
        y = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content.promoted_page_id.set(
          (S = g.promoted_object) == null ? void 0 : S.page_id,
          y,
        );
      }
      return (
        C
          ? (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t) &&
              (y = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.delete(y)),
            v != null &&
              (y = o("AdsUEditorAdgroupMutators").setPageForExistingPostAd(
                y,
                v,
              )))
          : v != null &&
            (y = r("AdsAdgroupSemanticFields").pageID.set(h, y, v)),
        u &&
          (y = o(
            "AdsIGIDv2SemanticFields",
          ).IGIDV2SemanticFields.instagramUserID.set(
            h,
            y,
            e.primaryInstagramActorID,
            e.primaryInstagramUserID,
          )),
        e.secondaryPageID != null &&
          e.secondaryPageID !== "0" &&
          (y = r(
            "AdsAdgroupRecordAccessors",
          ).creative.facebook_branded_content.sponsor_page_id.set(
            e.secondaryPageID,
            y,
          )),
        e.secondaryIgV2ID != null &&
          u &&
          (y = r(
            "AdsAdgroupRecordAccessors",
          ).creative.instagram_branded_content.sponsor_id.set(
            e.secondaryIgV2ID,
            y,
          )),
        (y = r(
          "AdsAdgroupRecordAccessors",
        ).creative.branded_content_boosting_type.set(e.boostingType, y)),
        e.secondaryPageID != null &&
          e.secondaryPageID !== "0" &&
          (y = r(
            "AdsAdgroupRecordAccessors",
          ).creative.branded_content_sponsor_page_id.set(e.secondaryPageID, y)),
        (y = o(
          "AdsPartnershipAdsPlacementsMutators",
        ).maySyncPartnershipAdsOrganicPosts(t, y)),
        y
      );
    }
    function s(e, t, n) {
      var a;
      return o("AdsMutators").chain(
        (a = r("AdsAdgroupRecordAccessors")).creative.source_instagram_media_id
          .delete,
        a.creative.branded_content.parent_source_facebook_post_id.delete,
        a.creative.branded_content.parent_source_instagram_media_id.set(t),
        a.creative.branded_content.instagram_boost_post_access_token.set(n),
      )(e);
    }
    function u(e, t) {
      var n;
      return o("AdsMutators").chain(
        (n = r("AdsAdgroupRecordAccessors")).creative.object_id.delete,
        n.creative.branded_content.parent_source_instagram_media_id.delete,
        n.creative.branded_content.instagram_boost_post_access_token.delete,
        n.creative.branded_content.parent_source_facebook_post_id.set(t),
      )(e);
    }
    ((l.setPartnershipAdsIdentitiesInSpec = e),
      (l.updateAdgroupWithParentSourceInstagramMediaId = s),
      (l.updateAdgroupWithParentSourceFacebookPostId = u));
  },
  98,
);
