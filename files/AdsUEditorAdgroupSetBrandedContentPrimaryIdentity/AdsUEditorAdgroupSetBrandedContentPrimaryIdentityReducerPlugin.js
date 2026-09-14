__d(
  "AdsUEditorAdgroupSetBrandedContentPrimaryIdentityReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsIGIDv2SemanticFields",
    "AdsMutators",
    "AdsPartnershipAdsPlacementsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetBrandedContentPrimaryIdentityActionFlux",
    "adsCreateStructuredSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStructuredSelector")(
        {
          parentData: o(
            "AdsUEditorAdgroupSelectors",
          ).adObjectsList.mapTransform(
            o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
          ),
        },
        i.id + ".adsUEditorAdgroupSetPageReducerExtraDataSelector",
      ),
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          { extraData: e },
          function (e, t, n) {
            var a = n.extraData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i,
                  l = a.parentData,
                  s = r("nullthrows")(l.get(n)),
                  u = s.specPlugin,
                  c = e;
                return (
                  (c = (i = r(
                    "AdsAdgroupRecordAccessors",
                  )).creative.branded_content.ui_version.set(1, c)),
                  (c = i.creative.branded_content.ad_format.set(1, c)),
                  (c = o("AdsMutators").chain(
                    i.creative.facebook_branded_content.sponsor_page_id.delete,
                    i.creative.instagram_branded_content.delete,
                    i.creative.branded_content_boosting_type.delete,
                    i.creative.branded_content.content_search_input.delete,
                    i.creative.branded_content.facebook_boost_post_access_token
                      .delete,
                    i.creative.branded_content.instagram_boost_post_access_token
                      .delete,
                  )(c)),
                  (c = o(
                    "AdsPartnershipAdsPlacementsMutators",
                  ).clearPartnershipAdsOrganicPostsOnIdentityChange(e, c)),
                  o("AdsAPIAdgroupRecordUtils").isExistingPostAd(c)
                    ? (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) &&
                        (c = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.asset_feed_spec.delete(e)),
                      (c = o(
                        "AdsUEditorAdgroupMutators",
                      ).setPageForExistingPostAd(c, t.pageID)))
                    : (c = r("AdsAdgroupSemanticFields").pageID.set(
                        u,
                        c,
                        t.pageID,
                      )),
                  (c = o(
                    "AdsIGIDv2SemanticFields",
                  ).IGIDV2SemanticFields.instagramUserID.set(
                    u,
                    c,
                    t.instagramActorID,
                    t.instagramUserID,
                  )),
                  c
                );
              },
            );
          },
          r("AdsUEditorAdgroupSetBrandedContentPrimaryIdentityActionFlux")
            .actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
