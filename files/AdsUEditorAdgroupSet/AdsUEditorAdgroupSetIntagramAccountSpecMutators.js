__d(
  "AdsUEditorAdgroupSetIntagramAccountSpecMutators",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsBulkValueUtils",
    "AdsExistingPostCTXDefaultingUtils",
    "AdsIGIDv2SemanticFields",
    "AdsInstagramUserIdMigrationUtils",
    "AdsLinkTypeUtils",
    "AdsODAXUtils",
    "AdsObjectStorySpecUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupOnsiteDestinationsMutators",
    "AdsUEditorAdgroupShopAdsUtils",
    "AdsUEditorAdgroupUpcomingEventsMutator",
    "AdsUEditorCrossChannelShopsAdsCommon",
    "AdsUEditorInstagramProfileMutators",
    "AdsUEditorLiveVideoMutators",
    "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
    "AdsWebsiteAdUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "gkx",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c, d, m, p) {
      var _,
        f,
        g = a;
      if (
        (r("AdsAdgroupRecordAccessors").creative.branded_content.get(g) !=
          null &&
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.branded_content.promoted_page_id.get(g) != null &&
          (r(
            "AdsAdgroupRecordAccessors",
          ).creative.branded_content_boosting_type.get(g) === "SPONSOR_BOOST" ||
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.branded_content_boosting_type.get(g) ===
              "SPONSOR_INLINE")) ||
        !o(
          "AdsIGIDv2SemanticFields",
        ).IGIDV2SemanticFields.instagramUserID.isSupported(i, g)
      )
        return g;
      var h = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          t.objective,
          n,
        ),
        y = o("AdsODAXUtils").maybeTranslateObjective(t.objective, h, null),
        C = o("AdsObjectStorySpecUtils").isUsingObjectStorySpec(g),
        b = r("AdsAdgroupSemanticFields").instagramActorID.get(i, g);
      if (
        C &&
        o("AdsWebsiteAdUtils").isWebsiteObjective(y) &&
        r("isFalsey")(b)
      ) {
        var v = o(
            "AdsAssetFeedFieldUtils",
          ).firstCTAAsset_TALK_WITH_ACE_BEFORE_USE(
            r("AdsAdgroupSemanticFields").callToActionType.get(i, g),
          ),
          S = r("AdsAdgroupSemanticFields").childAttachments.get(i, g),
          R = o("AdsAssetFeedUtils").isDCAssetCustomizationAdgroupFromSpec(g);
        r("AdsAdgroupSemanticFields").callToActionType.isSupported(i, g) &&
          r("isFalsey")(v) &&
          !S &&
          !R &&
          (g = r("AdsAdgroupSemanticFields").callToActionType.set(
            i,
            g,
            r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
          ));
      }
      var L = r("AdsAdgroupSemanticFields").pageID.get(i, g);
      if (
        ((g = o("AdsUEditorAdgroupMutators").maybeUpdateSAOffDestinationSpec(
          g,
          n,
          t,
          o("AdsBulkValueUtils").getUniformValueOrDefault(
            m == null ? void 0 : m.getValue(),
            null,
          ),
          d == null ? void 0 : d.getValue(),
          L,
          l,
          o("ShopsAdsOffsiteCheckoutAdsUtils").SAOffDefaultingTrigger
            .IG_IDENTITY_CHANGE,
        )),
        (o("AdsBulkValueUtils").getUniformValue(u) === "website_and_shops" ||
          ((_ = g.creative) == null || (_ = _.destination_spec) == null
            ? void 0
            : _.destination_type) === "WEBSITE_AND_SHOP") &&
          ((f = g.creative) == null ? void 0 : f.shop_spec) == null)
      ) {
        var E = L != null ? (s == null ? void 0 : s.get(L)) : null,
          k = l != null ? (s == null ? void 0 : s.get(l)) : null;
        o("AdsUEditorCrossChannelShopsAdsCommon").areCatalogsMatching(E, k)
          ? (g = o(
              "AdsUEditorAdgroupOnsiteDestinationsMutators",
            ).updateOnsiteDestinationsWithLinkType(
              g,
              n,
              o("AdsBulkValueUtils").getUniformValue(u),
              { facebookStorefront: E, instagramStorefront: k },
              null,
              !0,
              !0,
            ))
          : (g = o(
              "AdsUEditorAdgroupShopAdsUtils",
            ).deleteAssetFeedSpecOnsiteDestination(g));
      }
      var I =
        o("AdsAssetFeedUtils").isPACAdgroupFromRecord(g) &&
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(g);
      if (
        ((C || I) &&
          (g = o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.instagram_user_id.delete(g)),
        r("gkx")("952") &&
          (b != null ? b : null) !== (l != null ? l : null) &&
          (g = r(
            "AdsAdgroupRecordAccessors",
          ).creative.creative_sourcing_spec.ncs_testimonial.delete(g)),
        (g = o(
          "AdsUEditorAdgroupUpcomingEventsMutator",
        ).resetUpcomingEventAndUpdateUpcomingEventMetadataForIncompatibility(
          g,
          o("AdsUEditorAdgroupUpcomingEventsMutator")
            .ResetUpcomingEventSpecReason.INSTAGRAM_ACCOUNT_CHANGED,
        )),
        h === r("AdsPromotedObjectTypes").INSTAGRAM_PROFILE &&
          (r("gkx")("15865") ? p != null : l != null) &&
          l != null)
      ) {
        var T = c(l, e),
          D = o("AdsAPIAdgroupRecordUtils").getPostEditMode(g);
        g = o("AdsUEditorInstagramProfileMutators").setCTALinkAndAppLink({
          adgroup: g,
          specPlugin: i,
          instagramAccount: T,
          postEditMode: D,
        });
      }
      if (
        h === r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE &&
        (r("gkx")("15865") ? p != null : l != null) &&
        l != null
      ) {
        var x,
          $ = c(l, e),
          P = r("AdsAdgroupSemanticFields").pageID.get(i, g);
        g = o(
          "AdsUEditorUnifiedProfileVisitsAdgroupMutators",
        ).updateUnifiedProfileVisitCTAsOnPageIDChange({
          adgroup: g,
          specPlugin: i,
          instagramAccount: $,
          destinationType: n == null ? void 0 : n.destination_type,
          pageID: P,
          objective: y,
          campaignGroupPromotedPageID:
            t == null || (x = t.promoted_object) == null ? void 0 : x.page_id,
        });
      }
      if (
        n.destination_type === r("AdCampaignDestination").INSTAGRAM_LIVE &&
        (r("gkx")("15865") ? p != null : l != null) &&
        l != null &&
        o("AdsLinkTypeUtils").isInstagramLiveVideoDestinationInEffect(g, i)
      ) {
        var N = c(l, e);
        if (N != null) {
          var M = o("AdsAPIAdgroupRecordUtils").getPostEditMode(g);
          g = o("AdsUEditorLiveVideoMutators").setCTALinkAndAppLink({
            adgroup: g,
            specPlugin: i,
            instagramAccount: N,
            postEditMode: M,
          });
        }
      }
      return I ||
        o("AdsExistingPostCTXDefaultingUtils").isExistingPostAdForCTX(
          g,
          t.objective,
          n.destination_type,
        )
        ? o(
            "AdsInstagramUserIdMigrationUtils",
          ).IGIDV2MigrationAccessors.creative.instagram_user_id.set(l, p, g)
        : o("AdsIGIDv2SemanticFields").IGIDV2SemanticFields.instagramUserID.set(
            i,
            g,
            l,
            p,
          );
    }
    l.setInstagramActorID = e;
  },
  98,
);
