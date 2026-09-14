__d(
  "AdsAdgroupDraftFragmentsInstagramAccountPageCreatePageBackedSuccessReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAssetFeedFieldUtils",
    "AdsAudienceDirectConfig",
    "AdsInstagramAccountActionSources",
    "AdsInstagramActorIDUtils",
    "AdsInstagramUserIdMigrationUtils",
    "AdsMutators",
    "AdsObjectStorySpecUtils",
    "AdsWebsiteAdUtils",
    "adsAdgroupDraftFragmentCreateReducer",
    "adsObjectiveSelector",
    "adsPromotedObjectTypeSelector_LEGACY",
    "gkx",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = o("AdsObjectStorySpecUtils").isUsingObjectStorySpec(n),
        i = r("adsObjectiveSelector")({ adgroup: n }),
        l = n;
      if (
        a &&
        o("AdsWebsiteAdUtils").isWebsiteObjective(i) &&
        !(r("gkx")("15865")
          ? r("isTruthy")(t)
          : o("AdsInstagramActorIDUtils").getInstagramActorID(l))
      ) {
        var s = r("AdsAdgroupSpecPathPluginResolver").resolve({
            accountType: r("AdsAudienceDirectConfig").accountType,
            objective: i,
            promotedObjectType: r("adsPromotedObjectTypeSelector_LEGACY")(
              l.adset_id,
            ),
          }),
          u = o(
            "AdsAssetFeedFieldUtils",
          ).firstCTAAsset_TALK_WITH_ACE_BEFORE_USE(
            r("AdsAdgroupSemanticFields").callToActionType.get(s, l),
          ),
          c = r("AdsAdgroupSemanticFields").childAttachments.get(s, l);
        r("AdsAdgroupSemanticFields").callToActionType.isSupported(s, l) &&
          r("isFalsey")(u) &&
          !c &&
          (l = r("AdsAdgroupSemanticFields").callToActionType.set(
            s,
            l,
            r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
          ));
      }
      return (
        a
          ? ((l = o(
              "AdsInstagramUserIdMigrationUtils",
            ).IGIDV2MigrationAccessors.creative.instagram_user_id.delete(l)),
            (l = o(
              "AdsInstagramUserIdMigrationUtils",
            ).IGIDV2MigrationAccessors.creative.object_story_spec.instagram_user_id.set(
              e,
              t,
              l,
            )))
          : (l = o(
              "AdsInstagramUserIdMigrationUtils",
            ).IGIDV2MigrationAccessors.creative.instagram_user_id.set(e, t, l)),
        l
      );
    }
    var s = {
        reduce: r("adsAdgroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          function (t, n) {
            var a = n.data.adgroupIDs;
            if (
              n.source === r("AdsInstagramAccountActionSources").PE_AUCTION &&
              a != null &&
              (r("gkx")("15865")
                ? r("isTruthy")(n.data.instagramUserID)
                : r("isTruthy")(n.data.instagramAccountID))
            ) {
              var i = n.data.instagramAccountID,
                l = n.data.instagramUserID;
              return o("AdsMutators").mutateEach(t, a, function (t) {
                return e(i, l, t);
              });
            }
            return t;
          },
          function (e) {
            return e;
          },
          function (e) {
            return e;
          },
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
