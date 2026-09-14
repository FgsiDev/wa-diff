__d(
  "AdsCanvasResetCanvasReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCanvasResetCanvasDataActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "PartnershipDynamicAdsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                a,
                i = e;
              return (
                ((n = e.creative) == null
                  ? void 0
                  : n.branded_content_boosting_type) != null &&
                  ((a = e.creative) == null ? void 0 : a.product_set_id) !=
                    null &&
                  (o(
                    "PartnershipDynamicAdsGatingUtils",
                  ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost() ||
                    o(
                      "PartnershipDynamicAdsGatingUtils",
                    ).shouldEnableContentSearchForPartnershipAdsDynamicAds()) &&
                  (t.savedHeroAssetFacebookPostID == null &&
                  t.savedHeroAssetInstagramMediaID == null
                    ? ((i = o("AdsMutators").chain(
                        r("AdsAdgroupRecordAccessors").creative.branded_content
                          .parent_source_instagram_media_id.delete,
                        r("AdsAdgroupRecordAccessors").creative.branded_content
                          .parent_source_facebook_post_id.delete,
                        r("AdsAdgroupRecordAccessors").creative.branded_content
                          .instagram_boost_post_access_token.delete,
                      )(i)),
                      o(
                        "PartnershipDynamicAdsGatingUtils",
                      ).shouldEnableContentSearchForPartnershipAdsDynamicAds() &&
                        (i = o("AdsMutators").chain(
                          r("AdsAdgroupRecordAccessors").creative
                            .branded_content.content_search_input.delete,
                          r("AdsAdgroupRecordAccessors").creative
                            .branded_content.facebook_boost_post_access_token
                            .delete,
                        )(i)))
                    : t.savedHeroAssetFacebookPostID != null
                      ? (i = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.branded_content.parent_source_facebook_post_id.set(
                          t.savedHeroAssetFacebookPostID,
                          i,
                        ))
                      : t.savedHeroAssetInstagramMediaID != null &&
                        (i = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.branded_content.parent_source_instagram_media_id.set(
                          t.savedHeroAssetInstagramMediaID,
                          i,
                        ))),
                i
              );
            });
          },
          o("AdsCanvasResetCanvasDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
